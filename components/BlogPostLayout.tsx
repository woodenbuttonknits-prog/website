import Link from 'next/link';
import { BlogPost } from '@/lib/types';

export function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <img src={post.coverImage} alt={post.title} className="mb-8 h-80 w-full rounded-3xl object-cover" />
      <h1 className="mb-4 text-4xl">{post.title}</h1>
      <p className="mb-10 text-lg leading-8 text-ink/80">{post.introText}</p>
      <div className="prose-calm" dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.ctaText ? (
        <aside className="mt-12 rounded-3xl bg-sand/30 p-6">
          <h2 className="text-2xl">Keep this gentle pace going</h2>
          <p className="mt-2 leading-8 text-ink/80">{post.ctaText}</p>
          <Link href="/freebie" className="mt-3 inline-block text-sm text-moss hover:underline">
            Get the freebie
          </Link>
        </aside>
      ) : null}
    </article>
  );
}
