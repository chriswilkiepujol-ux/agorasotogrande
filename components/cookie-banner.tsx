'use client';
import { useEffect, useState } from 'react';
import type { Content } from '@/lib/content';

const KEY = 'agora-cookies';

export function CookieBanner({ c, policyHref }: { c: Content; policyHref: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch { /* storage blocked: show nothing */ }
  }, []);
  function choose(v: 'all' | 'essential') {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
    // GA4 is loaded only after "all" — wire up in layout when the measurement ID exists.
    if (v === 'all') window.dispatchEvent(new Event('agora:analytics-consent'));
  }
  if (!show) return null;
  const b = c.ui.cookieBanner;
  return (
    <div role="dialog" aria-live="polite" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-white/15 bg-night/95 p-5 text-sm text-bone/80 shadow-2xl backdrop-blur md:inset-x-6 md:bottom-6">
      <p>{b.text} <a href={policyHref} className="underline">{b.more}</a></p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={() => choose('all')} className="btn btn-solid !py-2">{b.accept}</button>
        <button onClick={() => choose('essential')} className="btn btn-ghost !py-2">{b.reject}</button>
      </div>
    </div>
  );
}
