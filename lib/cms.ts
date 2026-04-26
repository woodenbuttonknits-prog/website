import { mockPosts } from './mock-data';
import { BlogPost } from './types';

const WORDPRESS_GRAPHQL_ENDPOINT = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

const canUseWordPress = Boolean(WORDPRESS_GRAPHQL_ENDPOINT);

type WPGraphQLResponse<TData> = {
  data?: TData;
  errors?: Array<{ message: string }>;
};

type WPGraphQLPostNode = {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  date?: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  acf?: {
    introText?: string;
    coverImage?: {
      node?: {
        sourceUrl?: string;
      };
    };
    ctaText?: string;
  };
};

const ALL_POSTS_QUERY = `
  query AllPosts {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        title
        slug
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        acf {
          introText
          ctaText
          coverImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const POST_BY_SLUG_QUERY = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      acf {
        introText
        ctaText
        coverImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

function stripHtml(input?: string) {
  if (!input) return '';
  return input.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function mapPost(node: WPGraphQLPostNode): BlogPost {
  return {
    title: stripHtml(node.title),
    slug: node.slug,
    coverImage:
      node.acf?.coverImage?.node?.sourceUrl ?? node.featuredImage?.node?.sourceUrl ?? mockPosts[0].coverImage,
    introText: node.acf?.introText ?? stripHtml(node.excerpt),
    content: node.content ?? '<p>Content coming soon.</p>',
    ctaText: node.acf?.ctaText,
    publishedAt: node.date
  };
}

async function fetchWordPressGraphQL<TData>(query: string, variables?: Record<string, unknown>): Promise<TData> {
  const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 120 }
  });

  if (!response.ok) {
    throw new Error(`WPGraphQL request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as WPGraphQLResponse<TData>;

  if (payload.errors?.length || !payload.data) {
    throw new Error(payload.errors?.[0]?.message ?? 'Invalid WPGraphQL response');
  }

  return payload.data;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!canUseWordPress) return mockPosts;

  try {
    const data = await fetchWordPressGraphQL<{ posts: { nodes: WPGraphQLPostNode[] } }>(ALL_POSTS_QUERY);
    return data.posts.nodes.map(mapPost);
  } catch {
    return mockPosts;
  }
}

export async function getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!canUseWordPress) return mockPosts.find((post) => post.slug === slug);

  try {
    const data = await fetchWordPressGraphQL<{ post: WPGraphQLPostNode | null }>(POST_BY_SLUG_QUERY, { slug });

    if (!data.post) return undefined;
    return mapPost(data.post);
  } catch {
    return mockPosts.find((post) => post.slug === slug);
  }
}
