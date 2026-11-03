import type { Metadata } from 'next';
import { content } from '@/lib/content';
import type { Locale } from '@/lib/routes';
import { metaFor } from '@/lib/meta';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Hero, LiveEvents, Intro, Family, Celebrate, Restaurant, Reviews, Partners, FinalCta } from '@/components/home';
import { jsonLdFor } from '@/components/inner';
import { Instagram } from '@/components/instagram';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata { return metaFor('home', params.locale); }

export default function Home({ params }: { params: { locale: Locale } }) {
  const l = params.locale;
  const c = content[l];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor('home', l)) }} />
      <Nav c={c} locale={l} pageKey="home" />
      <main>
        <Hero c={c} locale={l} />
        <LiveEvents c={c} locale={l} />
        <Intro c={c} locale={l} />
        <Family c={c} locale={l} />
        <Celebrate c={c} locale={l} />
        <Restaurant c={c} locale={l} />
        <Reviews c={c} locale={l} />
        <Instagram locale={l} index="07" />
        <Partners c={c} locale={l} />
        <FinalCta c={c} locale={l} />
      </main>
      <Footer c={c} locale={l} />
    </>
  );
}
