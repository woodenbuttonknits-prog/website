import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2200&q=80"
        alt="Calm knitting workspace near soft natural light"
        className="h-[70vh] w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/25 to-paper/90" />
      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-14">
        <h1 className="max-w-2xl text-4xl leading-tight text-paper md:text-6xl">
          Create to slow down. Create to reconnect.
        </h1>
        <div className="flex flex-wrap gap-4">
          <Link href="/freebie" className="rounded-full bg-moss px-6 py-3 text-sm text-paper shadow-soft transition hover:bg-moss/90">
            Get the free mindful tracker
          </Link>
          <Link href="/blog" className="rounded-full border border-paper/80 px-6 py-3 text-sm text-paper transition hover:bg-paper/10">
            Read the journal
          </Link>
        </div>
      </div>
    </section>
  );
}
