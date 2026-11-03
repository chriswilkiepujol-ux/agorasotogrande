export type Locale = 'en' | 'es';
export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';
export const SITE = 'https://agorasotogrande.com';

/* One entry per page type. EN lives at the root (the URLs the old WordPress site
   has been ranking on since 2022 stay exactly as they were, trailing slash included);
   ES lives under /es/. Slugs: lowercase, hyphenated, no accents. */
export const routes = {
  home:          { en: '/',                                   es: '/es/' },
  about:         { en: '/about/',                             es: '/es/sobre-nosotros/' },
  events:        { en: '/events/',                            es: '/es/calendario/' },
  menu:          { en: '/menu/',                              es: '/es/carta/' },
  contact:       { en: '/contact/',                           es: '/es/contacto/' },
  privateEvents: { en: '/private-events/',                    es: '/es/eventos-privados/' },
  corporate:     { en: '/private-events/corporate-events/',   es: '/es/eventos-privados/eventos-de-empresa/' },
  christmas:     { en: '/private-events/christmas-parties/',  es: '/es/eventos-privados/cenas-de-navidad/' },
  weddings:      { en: '/private-events/weddings/',           es: '/es/eventos-privados/bodas/' },
  birthdays:     { en: '/private-events/birthdays/',          es: '/es/eventos-privados/cumpleanos/' },
  graduations:   { en: '/private-events/graduations/',        es: '/es/eventos-privados/graduaciones/' },
  legal:         { en: '/legal-notice/',                      es: '/es/aviso-legal/' },
  privacy:       { en: '/privacy-policy/',                    es: '/es/politica-de-privacidad/' },
  cookies:       { en: '/cookie-policy/',                     es: '/es/politica-de-cookies/' },
} as const;

export type PageKey = keyof typeof routes;
export const pageKeys = Object.keys(routes) as PageKey[];

export const clientTypeKeys: PageKey[] = ['corporate', 'christmas', 'weddings', 'birthdays', 'graduations'];
export const legalKeys: PageKey[] = ['legal', 'privacy', 'cookies'];

/** Public path for a page in a locale (what goes in href / canonical). */
export function href(key: PageKey, locale: Locale): string {
  return routes[key][locale];
}

/** Internal app path. EN pages are prerendered under /en/… and the root is rewritten to them. */
export function internalSlug(key: PageKey, locale: Locale): string[] {
  const p = routes[key][locale].replace(/^\/es\//, '/').replace(/^\/|\/$/g, '');
  return p ? p.split('/') : [];
}

/** Resolve an incoming [...slug] (already locale-scoped) back to a page key. */
export function keyFromSlug(locale: Locale, slug: string[] | undefined): PageKey | null {
  const want = (slug ?? []).join('/');
  for (const k of pageKeys) {
    if (k === 'home') continue;
    if (internalSlug(k, locale).join('/') === want) return k;
  }
  return null;
}

export const sitemapPriority: Record<PageKey, number> = {
  home: 1, privateEvents: 0.9, corporate: 0.8, christmas: 0.8, weddings: 0.8, birthdays: 0.8, graduations: 0.8,
  events: 0.7, about: 0.7, menu: 0.6, contact: 0.6, legal: 0.2, privacy: 0.2, cookies: 0.2,
};

/** The testing site must never be indexed. Set NEXT_PUBLIC_INDEXABLE=true only on the real domain. */
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === 'true';
