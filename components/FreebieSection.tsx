'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export function FreebieSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
  }

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

        <form className="space-y-3" onSubmit={onSubmit}>
          <label htmlFor="homepage-email" className="block text-sm text-ink/80">
            Email address
          </label>
          <input
            id="homepage-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-2xl border border-sand bg-white/70 px-4 py-3 outline-none focus:border-moss"
          />
          <button type="submit" className="rounded-full bg-wood px-6 py-3 text-sm text-paper transition hover:bg-wood/90">
            {status === 'loading' ? 'Sending...' : 'Send me the freebie'}
          </button>
          {status === 'success' ? <p className="text-sm text-moss">Success! Check your inbox, or visit the download page below.</p> : null}
          {status === 'error' ? <p className="text-sm text-wood">Could not subscribe right now. Please try again.</p> : null}
        </form>

        <Link href="/freebie" className="inline-block text-sm text-moss hover:underline">
          Prefer a full page signup instead?
        </Link>
      </div>
    </section>
  );
}
