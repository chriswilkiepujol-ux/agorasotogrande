import type { MetadataRoute } from 'next';
import { href, pageKeys, sitemapPriority, SITE } from '@/lib/routes';

/* One entry per URL with en / es / x-default alternates. Legal pages stay listed, low priority.
   Phase 2 pages are added here only when they exist. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const out: MetadataRoute.Sitemap = [];
  for (const k of pageKeys) {
    const alternates = { languages: { en: SITE + href(k, 'en'), es: SITE + href(k, 'es'), 'x-default': SITE + href(k, 'en') } };
    out.push({ url: SITE + href(k, 'en'), lastModified, priority: sitemapPriority[k], changeFrequency: k === 'events' ? 'weekly' : 'monthly', alternates });
    out.push({ url: SITE + href(k, 'es'), lastModified, priority: sitemapPriority[k], changeFrequency: k === 'events' ? 'weekly' : 'monthly', alternates });
  }
  return out;
}
