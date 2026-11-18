import type { Metadata } from 'next';
import { href, SITE, INDEXABLE, type Locale, type PageKey } from '@/lib/routes';
import { content } from '@/lib/content';
import { pages } from '@/lib/pages';

/* Share previews (WhatsApp, Instagram, Facebook…): the ÁGORA logo over the venue, 1200×630.
   Served from the domain the new site is live on: agorasotogrande.vercel.app until launch, then
   agorasotogrande.com automatically (Vercel's production domain), so the image never points at
   the old WordPress site. */
const LIVE = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : SITE;
const SHARE_IMAGE = { url: `${LIVE}/og/agora-share.jpg`, width: 1200, height: 630, alt: 'Ágora Sotogrande' };

export function metaFor(pageKey: PageKey, locale: Locale): Metadata {
  const c = content[locale];
  const copy = pageKey === 'home' ? c.meta : pages[locale][pageKey];
  const url = SITE + href(pageKey, locale);
  return {
    title: copy.title,
    description: copy.description,
    metadataBase: new URL(SITE),
    alternates: {
      canonical: url,
      languages: { en: SITE + href(pageKey, 'en'), es: SITE + href(pageKey, 'es'), 'x-default': SITE + href(pageKey, 'en') },
    },
    robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { title: copy.title, description: copy.description, url, siteName: 'Ágora Sotogrande', locale: locale === 'es' ? 'es_ES' : 'en_GB', type: 'website', images: [SHARE_IMAGE] },
    twitter: { card: 'summary_large_image', title: copy.title, description: copy.description, images: [SHARE_IMAGE.url] },
  };
}
