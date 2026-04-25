import Link from 'next/link';

export default function FreebieDownloadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl">Your freebie is ready</h1>
      <p className="mx-auto mt-4 max-w-xl leading-8 text-ink/80">
        Thank you for joining. Download your mindful tracker below, and keep an eye on your inbox for quiet weekly notes.
      </p>
      <Link href="/mindful-knitting-tracker.pdf" className="mt-7 inline-block rounded-full bg-wood px-7 py-3 text-sm text-paper">
        Download PDF
      </Link>
    </section>
  );
}
