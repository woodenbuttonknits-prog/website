'use client';

import { FormEvent, useState } from 'react';

export default function FreebiePage() {
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

    if (response.ok) {
      setStatus('success');
      window.location.href = '/freebie/download';
      return;
    }

    setStatus('error');
  }

  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
      <img
        src="https://images.unsplash.com/photo-1484502249930-e1da807099a5?auto=format&fit=crop&w=1200&q=80"
        alt="Yarn, notebook and dried plants in natural light"
        className="h-96 w-full rounded-3xl object-cover"
      />
      <div>
        <h1 className="text-4xl">Mindful Knitting Tracker</h1>
        <p className="mt-4 leading-8 text-ink/80">
          Join the gentle newsletter and receive a printable tracker to support slower, more intentional creative sessions.
        </p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm text-ink/80" htmlFor="email">
            Your email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-2xl border border-sand bg-white/70 px-4 py-3 outline-none focus:border-moss"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-moss px-6 py-3 text-sm text-paper transition hover:bg-moss/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Saving your spot...' : 'Send me the freebie'}
          </button>
          {status === 'error' ? <p className="text-sm text-wood">Something went wrong. Please try again.</p> : null}
        </form>
      </div>
    </section>
  );
}
