'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { media, type Content, type Locale } from '@/lib/content';
import { href, type PageKey } from '@/lib/routes';
import { Mark } from '@/components/mark';

export function Nav({ c, locale, pageKey }: { c: Content; locale: Locale; pageKey: PageKey }) {
  const [open, setOpen] = useState(false);
  const other: Locale = locale === 'es' ? 'en' : 'es';
  const items: [string, string][] = [
    [c.nav.agenda, href('events', locale)],
    [c.nav.events, href('privateEvents', locale)],
    [c.nav.menu, href('menu', locale)],
    [c.nav.about, href('about', locale)],
    [c.nav.contact, href('contact', locale)],
  ];
  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <nav className="pill-nav mx-auto max-w-7xl rounded-[28px] border border-white/10 px-4 py-2 md:rounded-full md:px-6">
        <div className="flex items-center justify-between">
          <a href={href('home', locale)} className="flex items-center gap-3 text-bone" aria-label="Ágora Sotogrande">
            <Mark size={36} />
            <img src={media.logo} alt="Ágora Sotogrande" className="hidden h-7 w-auto md:block" />
          </a>
          <ul className="hidden items-center gap-7 text-[12px] font-semibold uppercase tracking-[0.18em] lg:flex">
            {items.map(([label, h]) => (
              <li key={h}><a href={h} className="text-bone/85 transition hover:text-bone">{label}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href={href(pageKey, other)} hrefLang={other} lang={other} className="text-[12px] font-semibold tracking-[0.18em] text-bone/70 hover:text-bone" aria-label={c.nav.langName}>{c.nav.lang}</a>
            <a href={pageKey === 'home' ? '#calendario' : href('events', locale)} className="btn btn-solid hidden !py-2 md:inline-flex">{c.nav.book}</a>
            <button className="text-bone lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
            </button>
          </div>
        </div>
        {open && (
          <ul className="flex flex-col gap-1 border-t border-white/10 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] lg:hidden">
            {items.map(([label, h]) => (
              <li key={h}><a href={h} className="block px-2 py-2 text-bone/85 hover:text-bone">{label}</a></li>
            ))}
            <li><a href={pageKey === 'home' ? '#calendario' : href('events', locale)} className="block px-2 py-2 text-copper">{c.nav.book}</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
