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
   - Disappears after nye.endsAt. Release figures live in lib/nye.ts. */

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
  const soldCount = nye.releases.filter((r) => r.status === 'sold').length;

  useEffect(() => {
    if (!nye.active || Date.now() > Date.parse(nye.endsAt)) return;
    setLive(true);
    if (window.location.hash.includes(nye.eventHash)) return; // already looking at the event
    const snoozed = Number(get(window.localStorage, SNOOZE) || 0);
    if (get(window.sessionStorage, SEEN) || Date.now() - snoozed < DAY) return;

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
    return cleanup;
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>

            <a href={ticketsHref} onClick={goToTickets} className="nye-flyer" tabIndex={-1} aria-hidden="true">
              <img src={nye.flyer} alt={t.flyerAlt} />
            </a>

            <div className="nye-body">
              <p className="kicker">{t.kicker}</p>
              <h2 id="nye-title" className="mt-3 h-display text-3xl md:text-4xl">{t.title}</h2>

              <p className="mt-5 text-lg font-semibold text-bone">
                {current ? t.onSale(t.ordinal(current.n), euro(current.price)) : t.allSold}
              </p>
              <p className="mt-1 text-sm text-bone/65">{t.soldCount(soldCount, nye.releases.length)}</p>

              <ol className="nye-releases" aria-label="Releases">
                {nye.releases.map((r) => (
                  <li key={r.n} className={`nye-rel nye-rel-${r.status}`}>
                    <span className="nye-rel-n">{r.final ? t.final : t.ordinal(r.n)}</span>
                    <span className="nye-rel-p">{euro(r.price)}</span>
                    {r.status === 'sold' && <span className="sr-only">{t.sold}</span>}
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-sm text-bone/75">{t.includes}</p>
              <p className="mt-1 text-sm text-copper">{t.vip(euro(nye.vip.price), nye.vip.fewLeft)}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={ticketsHref} onClick={goToTickets} className="btn btn-solid">{t.cta}</a>
                <button type="button" onClick={close} className="text-sm text-bone/55 underline underline-offset-4 hover:text-bone">{t.later}</button>
              </div>
              <p className="mt-4 text-[11px] text-bone/40">{t.fee}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
