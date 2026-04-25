import Link from 'next/link';

export function FreebieSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2 md:items-center">
      <img
        src="https://images.unsplash.com/photo-1514996550219-62672472d03b?auto=format&fit=crop&w=1200&q=80"
        alt="Notebook and knitting texture near a window"
        className="h-80 w-full rounded-3xl object-cover shadow-soft"
        loading="lazy"
      />
      <div className="space-y-5">
        <h2 className="text-3xl">A free guide for gentler making</h2>
        <p className="leading-8 text-ink/80">
          Download the Mindful Knitting Tracker to plan projects with intention, not pressure.
        </p>
        <Link href="/freebie" className="inline-block rounded-full bg-wood px-6 py-3 text-sm text-paper transition hover:bg-wood/90">
          Visit freebie page
        </Link>
      </div>
    </section>
  );
}
