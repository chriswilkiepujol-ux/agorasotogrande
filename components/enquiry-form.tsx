'use client';
import { useState } from 'react';
import type { Content, Locale } from '@/lib/content';

export function EnquiryForm({ c, locale, privacyHref }: { c: Content; locale: Locale; privacyHref: string }) {
  const f = c.ui.form;
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'fail'>('idle');
  const field = 'w-full rounded-xl border border-white/15 bg-night px-4 py-3 text-bone placeholder:text-bone/40 focus:border-copper focus:outline-none';
  const label = 'block text-[11px] uppercase tracking-[0.2em] text-bone/60 mb-2';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const r = await fetch('/api/enquiry/', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, locale }) });
      setState(r.ok ? 'ok' : 'fail');
    } catch { setState('fail'); }
  }

  if (state === 'ok') return <div className="rounded-2xl border border-copper/40 bg-night p-8 text-center text-bone/80">{f.ok}</div>;

  return (
    <form onSubmit={onSubmit} className="relative rounded-2xl border border-white/10 bg-night/60 p-6 md:p-8">
      <h2 className="h-display text-3xl">{f.title}</h2>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div><label htmlFor="q-name" className={label}>{f.name}</label><input id="q-name" name="name" required className={field} /></div>
        <div><label htmlFor="q-email" className={label}>{f.email}</label><input id="q-email" name="email" type="email" required className={field} /></div>
        <div><label htmlFor="q-phone" className={label}>{f.phone}</label><input id="q-phone" name="phone" type="tel" className={field} /></div>
        <div><label htmlFor="q-type" className={label}>{f.type}</label>
          <select id="q-type" name="type" className={field}>{f.types.map((t) => <option key={t}>{t}</option>)}</select></div>
        <div><label htmlFor="q-date" className={label}>{f.date}</label><input id="q-date" name="date" type="date" className={field} /></div>
        <div><label htmlFor="q-guests" className={label}>{f.guests}</label><input id="q-guests" name="guests" type="number" min={1} className={field} /></div>
        <div className="md:col-span-2"><label htmlFor="q-budget" className={label}>{f.budget}</label><input id="q-budget" name="budget" className={field} /></div>
        <div className="md:col-span-2"><label htmlFor="q-message" className={label}>{f.message}</label><textarea id="q-message" name="message" rows={4} className={field} /></div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === 'sending'} className="btn btn-solid disabled:opacity-60">{state === 'sending' ? f.sending : f.submit}</button>
        <span className="text-xs text-bone/50">{f.privacy} <a href={privacyHref} className="underline">{c.footer.privacy}</a></span>
      </div>
      {state === 'fail' && <p className="mt-4 text-sm text-ember">{f.fail}</p>}
    </form>
  );
}
