import type { MetadataRoute } from 'next';
import { INDEXABLE, SITE } from '@/lib/routes';

/* The testing site (agorasotogrande.vercel.app) is blocked. Set NEXT_PUBLIC_INDEXABLE=true
   on the production deployment at agorasotogrande.com to open it to crawlers. */
export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) return { rules: { userAgent: '*', disallow: '/' } };
  return { rules: { userAgent: '*', allow: '/', disallow: ['/api/'] }, sitemap: SITE + '/sitemap.xml' };
}
