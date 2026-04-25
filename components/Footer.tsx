import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-sand/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <p className="text-sm text-ink/70">Wooden Button Knits — a calm place to make by hand.</p>
        <div className="flex gap-4 text-sm text-ink/70">
          <Link href="/blog">Blog</Link>
          <Link href="/freebie">Freebie</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
