import { notFound } from 'next/navigation';
import { BlogPostLayout } from '@/components/BlogPostLayout';
import { getAllPosts, getPostBySlug } from '@/lib/cms';

export const revalidate = 120;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return <BlogPostLayout post={post} />;
}
