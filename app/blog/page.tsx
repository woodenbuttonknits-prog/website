import Link from 'next/link';
import { getAllPosts } from '@/lib/cms';

export const revalidate = 120;

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="mb-6 text-4xl">Journal</h1>
      <p className="mb-10 max-w-2xl leading-8 text-ink/80">
        Essays, reflections, and practical notes for slowing down through handmaking.
      </p>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="grid gap-4 border-b border-sand/40 pb-8 md:grid-cols-[220px_1fr]">
            <img src={post.coverImage} alt={post.title} className="h-36 w-full rounded-2xl object-cover" loading="lazy" />
            <div>
              <h2 className="text-2xl">{post.title}</h2>
              <p className="mt-3 leading-8 text-ink/80">{post.intro}</p>
              <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm text-moss hover:underline">
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
