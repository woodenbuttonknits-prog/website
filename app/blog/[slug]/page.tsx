import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/cms';

export const revalidate = 120;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function renderContent(content: unknown) {
  if (typeof content === 'string') return <p className="mb-6 leading-8">{content}</p>;

  const entries = (content as { content?: Array<{ content?: Array<{ value?: string }> }> })?.content ?? [];

  return entries.map((entry, index) => {
    const text = entry?.content?.map((child) => child.value ?? '').join('') ?? '';
    if (!text) return null;
    return (
      <p key={index} className="mb-6 leading-8">
        {text}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <img src={post.coverImage} alt={post.title} className="mb-8 h-80 w-full rounded-3xl object-cover" />
      <h1 className="mb-4 text-4xl">{post.title}</h1>
      <p className="mb-10 text-lg leading-8 text-ink/80">{post.intro}</p>
      <div className="prose-calm">{renderContent(post.content)}</div>

      {post.optionalCta ? (
        <aside className="mt-12 rounded-3xl bg-sand/30 p-6">
          <h2 className="text-2xl">{post.optionalCta.title}</h2>
          <p className="mt-2 leading-8 text-ink/80">{post.optionalCta.description}</p>
          <a href={post.optionalCta.href} className="mt-3 inline-block text-sm text-moss hover:underline">
            {post.optionalCta.label}
          </a>
        </aside>
      ) : null}
    </article>
  );
}
