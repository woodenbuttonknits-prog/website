import Link from 'next/link';

export function SoftShopCTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-3xl">Looking for a pattern or cozy accessory?</h2>
      <p className="mx-auto mt-4 max-w-2xl leading-8 text-ink/80">
        The Etsy shop is a soft extension of this space, with hand-finished pieces inspired by the same slow approach.
      </p>
      <Link href="/shop" className="mt-7 inline-block rounded-full border border-moss/60 px-6 py-3 text-sm text-moss transition hover:bg-moss/10">
        Visit Etsy gently
      </Link>
    </section>
  );
}
