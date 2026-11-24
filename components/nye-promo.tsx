'use client';
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from 'react';
import { nye, nyeCopy } from '@/lib/nye';
import type { Locale } from '@/lib/content';

/* New Year's Eve pop-up and floating button.
   - Opens once per visit, a few seconds in or after some scrolling, and only once the cookie
     choice is made (or after 15 s) so it never stacks on the cookie banner.
   - Closing it hides it for a day; a small button stays in the corner to reopen it.
   - "Get your tickets" opens the NYE event inside our own calendar (/events/#events/<slug>).
   - Disappears at nye.endsAt (31 Dec 23:00), also for visitors who already have the page open.
     Release figures live in lib/nye-data.json. */

const SEEN = 'agora-nye-seen';        // sessionStorage: already shown this visit
const SNOOZE = 'agora-nye-snooze';    // localStorage: closed, timestamp
const DAY = 24 * 60 * 60 * 1000;

const get = (s: Storage | undefined, k: string) => { try { return s?.getItem(k) ?? null; } catch { return null; } };
const put = (s: Storage | undefined, k: string, v: string) => { try { s?.setItem(k, v); } catch { /* storage blocked */ } };

export function NyePromo({ locale, eventsHref }: { locale: Locale; eventsHref: string }) {
  const t = nyeCopy[locale];
  const [live, setLive] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const ticketsHref = `${eventsHref}#${nye.eventHash}`;

  const euro = (n: number) => (locale === 'es' ? `${n} €` : `€${n}`);
  const current = nye.releases.find((r) => r.status === 'on');
  const next = nye.releases.find((r) => r.status === 'next');
  const soldCount = nye.releases.filter((r) => r.status === 'sold').length;
  const isLast = !!current && (current.final || !next);

  useEffect(() => {
    const msLeft = Date.parse(nye.endsAt) - Date.now();
    if (!nye.active || msLeft <= 0) return;
    setLive(true);
    // Hide at the cut-off even if the page is already open (only scheduled when it is within a day).
    const expiry = msLeft < 86400000 ? window.setTimeout(() => { setOpen(false); setLive(false); }, msLeft) : undefined;
    const stopExpiry = () => { if (expiry) window.clearTimeout(expiry); };
    if (window.location.hash.includes(nye.eventHash)) return stopExpiry; // already looking at the event
    const snoozed = Number(get(window.localStorage, SNOOZE) || 0);
    if (get(window.sessionStorage, SEEN) || Date.now() - snoozed < DAY) return stopExpiry;

    let done = false;
    const started = Date.now();
    const show = () => {
      if (done) return;
      const cookiesDecided = !!get(window.localStorage, 'agora-cookies') || Date.now() - started > 15000;
      if (!cookiesDecided) return;
      done = true;
      put(window.sessionStorage, SEEN, '1');
      setOpen(true);
      cleanup();
    };
    const timer = window.setInterval(() => { if (Date.now() - started > 6000) show(); }, 1000);
    const onScroll = () => { if (window.scrollY > window.innerHeight * 0.6) show(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    function cleanup() { window.clearInterval(timer); window.removeEventListener('scroll', onScroll); }
    return () => { cleanup(); if (expiry) window.clearTimeout(expiry); };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    put(window.localStorage, SNOOZE, String(Date.now()));
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, close]);

  // On the events page itself the link only changes the hash; reload so the calendar opens the event.
  const goToTickets = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (window.location.pathname === new URL(ticketsHref, window.location.href).pathname) {
      e.preventDefault();
      window.location.hash = nye.eventHash;
      window.location.reload();
    }
  };

  if (!live) return null;

  return (
    <>
      {!open && (
        <button type="button" onClick={() => setOpen(true)} className="nye-pill" aria-haspopup="dialog">
          <span className="nye-pill-dot" aria-hidden="true" />
          <span>{t.pill}</span>
          {current && <span className="nye-pill-price">{euro(current.price)}</span>}
        </button>
      )}

      {open && (
        <div className="nye-backdrop" onClick={close}>
          <div role="dialog" aria-modal="true" aria-labelledby="nye-title" className="nye-modal" onClick={(e) => e.stopPropagation()}>
            <button ref={closeRef} type="button" onClick={close} className="nye-close" aria-label={t.close}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>

            <div className="nye-flyer" aria-hidden="true">
              {/* Phones get a landscape crop of the vertical flyer (logo to "EVE") so the logo isn't cut off. */}
              <picture>
                <source media="(min-width: 768px)" srcSet={nye.flyer} />
                <img src={nye.flyerMobile} alt="" />
              </picture>
            </div>

            <div className="nye-body">
              <header>
                <p className="kicker">{t.kicker}</p>
                <h2 id="nye-title" className="mt-2 h-display text-[2rem] leading-none md:text-[2.6rem]">{t.title}</h2>
              </header>

              <div className="nye-card">
                {current ? (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="nye-badge"><span className="nye-badge-dot" aria-hidden="true" />{t.onSaleNow}</span>
                        <p className="mt-2 text-sm font-semibold text-bone">{t.releaseName(current.n, current.final)}{current.fewLeft ? ` · ${t.fewLeft}` : ''}</p>
                      </div>
                      <div className="text-right">
                        {/* The display serif's € reads like a "C" at this size, so the symbol uses the body font. */}
                        <p className="nye-price">
                          {locale === 'es' ? <>{current.price}<span className="nye-cur nye-cur-after">€</span></> : <><span className="nye-cur">€</span>{current.price}</>}
                        </p>
                        <p className="text-[11px] text-bone/50">{t.perPerson}</p>
                      </div>
                    </div>
                    <div className="nye-bar" aria-hidden="true">
                      {nye.releases.map((r) => <span key={r.n} className={`nye-seg nye-seg-${r.status}`} />)}
                    </div>
                    <p className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-xs text-bone/60">
                      <span>{t.progress(soldCount, nye.releases.length)}</span>
                      <span className="text-bone/80">{isLast ? t.lastOne : next ? t.nextAt(euro(next.price)) : ''}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-semibold text-bone">{t.allSold}</p>
                    <p className="mt-1 text-sm text-bone/60">{t.allSoldNote}</p>
                  </>
                )}
              </div>

              <ul className="nye-details">
                {t.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
              {nye.vip.price && !nye.vip.soldOut && <p className="text-center text-xs text-copper md:text-left">{t.vip(euro(nye.vip.price), nye.vip.fewLeft)}</p>}

              <div className="nye-actions">
                <a href={ticketsHref} onClick={goToTickets} className="nye-cta">
                  {current ? t.cta(euro(current.price)) : t.ctaPlain}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <button type="button" onClick={close} className="nye-later">{t.later}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
