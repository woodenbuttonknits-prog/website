import Link from 'next/link';
import { BlogPost } from '@/lib/types';

export function BlogPreviewGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl">From the Journal</h2>
        <Link href="/blog" className="text-sm text-moss hover:underline">
          View all posts
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl bg-white/60 shadow-soft">
            <img src={post.coverImage} alt={post.title} className="h-48 w-full object-cover" loading="lazy" />
            <div className="space-y-3 p-5">
              <h3 className="text-2xl leading-tight">{post.title}</h3>
              <p className="text-sm leading-7 text-ink/80">{post.introText}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm text-moss hover:underline">
                Continue reading
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
