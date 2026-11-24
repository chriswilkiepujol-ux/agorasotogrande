'use client';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

/* Site analytics.
   - Vercel Web Analytics: cookie-free page views, referrers and UTM tags. Counts every visit with no
     consent needed. Turn it on in Vercel > project > Analytics (the component is a no-op until then).
   - Google Analytics 4: set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXX) in Vercel. It loads only after the
     visitor accepts cookies in the banner ('all'), on this visit or a previous one. */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function loadGA(id: string) {
  if (document.getElementById('ga4')) return;
  const s = document.createElement('script');
  s.id = 'ga4';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() { w.dataLayer.push(arguments); };
  w.gtag('js', new Date());
  w.gtag('config', id, { anonymize_ip: true });
}

export function SiteAnalytics() {
  useEffect(() => {
    if (!GA_ID) return;
    let consent: string | null = null;
    try { consent = localStorage.getItem('agora-cookies'); } catch { /* storage blocked */ }
    if (consent === 'all') { loadGA(GA_ID); return; }
    const on = () => loadGA(GA_ID);
    window.addEventListener('agora:analytics-consent', on, { once: true });
    return () => window.removeEventListener('agora:analytics-consent', on);
  }, []);
  return <Analytics />;
}
