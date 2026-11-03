import type { Metadata } from 'next';
import { href, SITE, INDEXABLE, type Locale, type PageKey } from '@/lib/routes';
import { content } from '@/lib/content';
import { pages } from '@/lib/pages';
import { BLOB } from '@/lib/media';

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
    openGraph: { title: copy.title, description: copy.description, url, siteName: 'Ágora Sotogrande', locale: locale === 'es' ? 'es_ES' : 'en_GB', type: 'website', images: [{ url: BLOB + 'daikiri-closing-overhead.jpg' }] },
    twitter: { card: 'summary_large_image' },
  };
}
