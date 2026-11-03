import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { content } from '@/lib/content';
import { locales, pageKeys, keyFromSlug, internalSlug, clientTypeKeys, type Locale, type PageKey } from '@/lib/routes';
import { pages } from '@/lib/pages';
import { metaFor } from '@/lib/meta';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { PageHeader, Sections, Faqs, PageCta, EventTiles, Calendar, MenuBlock, ContactBlock, Gallery, jsonLdFor } from '@/components/inner';

type Params = { locale: Locale; slug: string[] };

export function generateStaticParams(): Params[] {
  const out: Params[] = [];
  for (const locale of locales) for (const k of pageKeys) if (k !== 'home') out.push({ locale, slug: internalSlug(k, locale) });
  return out;
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const key = keyFromSlug(params.locale, params.slug);
  return key ? metaFor(key, params.locale) : {};
}

export default function InnerPage({ params }: { params: Params }) {
  const l = params.locale;
  const key = keyFromSlug(l, params.slug);
  if (!key || key === 'home') notFound();
  const c = content[l];
  const copy = pages[l][key];
  const k = key as Exclude<PageKey, 'home'>;
  const isClientType = clientTypeKeys.includes(k);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(k, l)) }} />
      <Nav c={c} locale={l} pageKey={k} />
      <main>
        <PageHeader c={c} locale={l} pageKey={k} copy={copy} />
        {k === 'events' && <Calendar c={c} locale={l} />}
        {k === 'privateEvents' && <EventTiles c={c} locale={l} />}
        {k === 'menu' && <MenuBlock c={c} />}
        {k === 'contact' ? <ContactBlock c={c} locale={l} /> : <Sections copy={copy} pageKey={k} />}
        {k === 'events' && <Gallery pageKey={k} />}
        <Faqs c={c} copy={copy} />
        {isClientType && <EventTiles c={c} locale={l} exclude={k} title={c.ui.otherEvents} />}
        <PageCta copy={copy} locale={l} />
      </main>
      <Footer c={c} locale={l} />
    </>
  );
}
