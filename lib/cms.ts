import { mockPosts } from './mock-data';
import { BlogPost } from './types';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

type ContentfulAsset = {
  fields?: { file?: { url?: string } };
};

type ContentfulPost = {
  fields: {
    title: string;
    slug: string;
    intro: string;
    content: unknown;
    coverImage?: ContentfulAsset;
    optionalCtaTitle?: string;
    optionalCtaDescription?: string;
    optionalCtaHref?: string;
    optionalCtaLabel?: string;
    publishedAt?: string;
  };
};

const canUseContentful = Boolean(SPACE_ID && ACCESS_TOKEN);

async function fetchContentful(query: string) {
  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?${query}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    next: { revalidate: 120 }
  });

  if (!response.ok) {
    throw new Error(`Contentful error: ${response.status}`);
  }

  return response.json();
}

function mapPost(item: ContentfulPost): BlogPost {
  const imageUrl = item.fields.coverImage?.fields?.file?.url;

  return {
    title: item.fields.title,
    slug: item.fields.slug,
    intro: item.fields.intro,
    content: item.fields.content,
    coverImage: imageUrl ? `https:${imageUrl}` : mockPosts[0].coverImage,
    publishedAt: item.fields.publishedAt,
    optionalCta:
      item.fields.optionalCtaTitle && item.fields.optionalCtaHref && item.fields.optionalCtaLabel
        ? {
            title: item.fields.optionalCtaTitle,
            description: item.fields.optionalCtaDescription ?? '',
            href: item.fields.optionalCtaHref,
            label: item.fields.optionalCtaLabel
          }
        : undefined
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!canUseContentful) return mockPosts;

  try {
    const data = await fetchContentful('content_type=blogPost&order=-fields.publishedAt');
    return (data.items as ContentfulPost[]).map(mapPost);
  } catch {
    return mockPosts;
  }
}

export async function getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
