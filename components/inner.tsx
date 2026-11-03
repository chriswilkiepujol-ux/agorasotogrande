/* eslint-disable @next/next/no-img-element */
import { media, type Content, type Locale } from '@/lib/content';
import { href, SITE, clientTypeKeys, type PageKey } from '@/lib/routes';
import { pages, weeklyNights, venue, type PageCopy } from '@/lib/pages';
import { SocialLinks } from '@/components/social';
import FourVenuesEvents from '@/components/fourvenues-events';
import { EnquiryForm } from '@/components/enquiry-form';
import { img, pageHero, pageSections, pageGallery, BLOB, type Photo } from '@/lib/media';

type P = { c: Content; locale: Locale; pageKey: Exclude<PageKey, 'home'> };

const isClientType = (k: PageKey) => clientTypeKeys.includes(k);
const isLegal = (k: PageKey) => k === 'legal' || k === 'privacy' || k === 'cookies';

/* ---------- page header: the photo is the hero ---------- */
export function PageHeader({ c, locale, pageKey, copy }: P & { copy: PageCopy }) {
  const parent = isClientType(pageKey) ? ('privateEvents' as const) : null;
  const short = isLegal(pageKey) || pageKey === 'contact';
  return (
    <section className={`relative flex items-end overflow-hidden bg-ink ${short ? 'min-h-[48vh]' : 'min-h-[72vh]'}`}>
      <div className="absolute inset-0 overflow-hidden" data-parallax><img src={img(pageHero[pageKey], 1920)} alt="" className="drift h-full w-full object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-10 md:pb-20 lg:px-16" data-reveal>
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 text-[12px] tracking-[0.12em] text-bone/60">
          <a href={href('home', locale)} className="hover:text-bone">{c.ui.breadcrumbHome}</a>
          {parent && (<><span>/</span><a href={href(parent, locale)} className="hover:text-bone">{pages[locale].privateEvents.h1}</a></>)}
          <span>/</span><span className="text-bone/90">{copy.h1}</span>
        </nav>
        <h1 className="h-display text-6xl md:text-8xl lg:text-9xl">{copy.h1}</h1>
        <div className="mt-6 max-w-2xl space-y-4 text-bone/85 md:text-xl">
          {copy.intro.map((p) => <p key={p}>{p}</p>)}
        </div>
        {copy.cta && !short && (
          <a href={href(copy.cta.to, locale)} className="btn btn-solid mt-8">{copy.cta.label}</a>
        )}
      </div>
    </section>
  );
}

/* ---------- copy sections: text and photo alternate ---------- */
export function Sections({ copy, pageKey }: { copy: PageCopy; pageKey: PageKey }) {
  if (!copy.sections?.length) return null;
  if (isLegal(pageKey)) {
    return (
      <section className="section bg-ink">
        <div className="mx-auto max-w-3xl space-y-10">
          {copy.sections.map((s) => (
            <div key={s.h2}>
              <h2 className="h-display text-2xl md:text-3xl">{s.h2}</h2>
              <div className="mt-3 space-y-3 text-bone/75">{s.body.filter(Boolean).map((p) => <p key={p}>{p}</p>)}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  const photos = pageSections[pageKey] ?? [];
  return (
    <section className="bg-ink px-5 py-10 md:px-10 lg:px-16 md:py-16">
      <div className="mx-auto max-w-7xl space-y-16 md:space-y-28">
        {copy.sections.map((s, i) => {
          const photo = photos[i]; // one photo per section, no wrap-around repeats
          const flip = i % 2 === 1;
          return (
            <div key={s.h2} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <div className={`md:col-span-5 ${flip ? 'md:order-2 md:col-start-8' : ''}`} data-reveal>
                <h2 className="h-display text-4xl md:text-5xl">{s.h2}</h2>
                <div className="mt-5 space-y-4 text-bone/75 md:text-lg">
                  {s.body.filter(Boolean).map((p) => <p key={p}>{p}</p>)}
                  {s.bullets && (
                    <ul className="divide-y divide-white/10 border-y border-white/10">
                      {s.bullets.map((b) => <li key={b} className="py-3">{b}</li>)}
                    </ul>
                  )}
                </div>
              </div>
              {photo && (
                <div className={`md:col-span-7 ${flip ? 'md:order-1' : ''}`}>
                  <div className="overflow-hidden rounded-2xl bg-smoke">
                    <img src={img(photo, 1200)} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- FAQ as a list, not cards ---------- */
export function Faqs({ c, copy }: { c: Content; copy: PageCopy }) {
  if (!copy.faqs?.length) return null;
  return (
    <section className="section bg-night">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
        <h2 className="h-display text-3xl md:col-span-4 md:text-4xl" data-reveal>{c.ui.faq}</h2>
        <dl className="divide-y divide-white/10 border-y border-white/10 md:col-span-8">
          {copy.faqs.map((f) => (
            <div key={f.q} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
              <dt className="font-display text-xl md:col-span-5">{f.q}</dt>
              <dd className="text-bone/70 md:col-span-7">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function PageCta({ copy, locale }: { copy: PageCopy; locale: Locale }) {
  if (!copy.cta) return null;
  return (
    <section className="section bg-ink text-center">
      <div className="mx-auto max-w-xl">
        <a href={href(copy.cta.to, locale)} className="btn btn-solid">{copy.cta.label}</a>
        {copy.cta.note && <p className="mt-4 text-sm text-bone/50">{copy.cta.note}</p>}
      </div>
    </section>
  );
}

/* ---------- photo tiles that are obviously links ---------- */
export function EventTiles({ c, locale, exclude, title }: { c: Content; locale: Locale; exclude?: PageKey; title?: string }) {
  const types = c.celebrate.types.filter((t) => t.key !== exclude);
  return (
    <section className="section border-t border-white/10 bg-night">
      <div className="mx-auto max-w-7xl">
        {title && <h2 className="mb-8 h-display text-3xl md:text-4xl" data-reveal>{title}</h2>}
        <ul className={`grid grid-cols-2 gap-3 md:gap-4 ${types.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
          {types.map((t, i) => {
            const wide = types.length % 2 === 1 && i === types.length - 1;
            return (
            <li key={t.key} className={wide ? 'col-span-2 lg:col-span-1' : ''}>
              <a href={href(t.key, locale)} className={`group relative block overflow-hidden rounded-2xl bg-smoke focus:outline-none focus-visible:ring-2 focus-visible:ring-copper ${wide ? 'aspect-[16/9] lg:aspect-[3/4]' : 'aspect-[3/4]'}`}>
                <img src={img(pageHero[t.key as Exclude<PageKey, 'home'>], 828)} alt="" className="tile-img absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="h-display text-xl md:text-3xl">{t.name}</h3>
                  <p className="mt-1 hidden text-sm text-bone/70 sm:block">{t.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand md:mt-4 md:gap-2 md:rounded-full md:border md:border-bone/50 md:px-4 md:py-1.5 md:text-[12px] md:text-bone md:transition md:group-hover:bg-bone md:group-hover:text-ink">{c.ui.viewPage}<span aria-hidden="true" className="md:hidden">→</span></span>
                </div>
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- calendar page ---------- */
export function Calendar({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <>
      <section className="bg-ink px-5 py-14 md:px-10 lg:px-16" id="calendario">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl bg-bone p-2 md:p-4"><FourVenuesEvents /></div>
          <p className="mt-6 text-center text-sm text-bone/50"><a href={media.fourvenues} target="_blank" rel="noopener" className="underline hover:text-bone">{c.ui.bookExternal}</a></p>
        </div>
      </section>
      <section className="section bg-night">
        <div className="mx-auto max-w-7xl">
          <h2 className="h-display text-3xl md:text-4xl">{c.ui.weekly}</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {weeklyNights.map((n) => (
              <article key={n.name} className="group relative overflow-hidden rounded-2xl bg-smoke">
                <img src={media.posters[n.poster]} alt={`${n.name}, ${n.day[locale]} ${n.time}`} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-16">
                  <span className="text-[12px] tracking-[0.12em] text-copper">{c.ui.every} {n.day[locale]}, {n.time}</span>
                  <h3 className="font-display text-xl md:text-2xl">{n.name}</h3>
                  <p className="mt-1 text-xs text-bone/65">{n.desc[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- photo strip (calendar, about) ---------- */
export function Gallery({ pageKey, photos }: { pageKey: PageKey; photos?: Photo[] }) {
  const list = photos ?? pageGallery[pageKey];
  if (!list?.length) return null;
  return (
    <section className="bg-night px-5 pb-16 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {list.map((p, i) => (
          <div key={p} className={`overflow-hidden rounded-2xl bg-smoke ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}>
            <img src={img(p, 640)} alt="" className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function MenuBlock({ c }: { c: Content }) {
  return (
    <section className="section bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          {media.menuPdf ? (
            <>
              <object data={media.menuPdf} type="application/pdf" className="h-[80vh] w-full rounded-2xl border border-white/10" aria-label="Menu PDF" />
              <p className="mt-6 flex flex-wrap gap-3">
                <a href={media.menuPdf} target="_blank" rel="noopener" className="btn btn-solid">{c.ui.menuOpen}</a>
                <a href={media.menuPdf} download className="btn btn-ghost">{c.ui.menuDownload}</a>
              </p>
            </>
          ) : (
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-white/20 p-10 text-center text-bone/60">{c.ui.menuSoon}</div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 md:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-smoke"><img src={img('wedding-table-setup', 828)} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" /></div>
          <div className="overflow-hidden rounded-2xl bg-smoke"><img src={img('wedding-dinner', 828)} alt="" className="aspect-[4/5] w-full object-cover" loading="lazy" /></div>
        </div>
      </div>
    </section>
  );
}

export function ContactBlock({ c, locale }: { c: Content; locale: Locale }) {
  const s = pages[locale].contact.sections ?? [];
  return (
    <section className="section bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="h-display text-3xl md:text-4xl">{s[0]?.h2}</h2>
          <address className="mt-4 space-y-3 not-italic text-bone/75">
            <p>{venue.street}<br />{venue.postcode} {venue.town} ({venue.province})</p>
            <p>{s[0]?.body[1]}</p>
            <p className="flex flex-wrap gap-3 pt-1">
              <a href={venue.phoneHref} className="btn btn-ghost !py-2">{c.ui.call} {venue.phone}</a>
              <a href={venue.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost !py-2">{c.ui.directions}</a>
            </p>
            <p><a href={`mailto:${venue.email}`} className="underline underline-offset-4 hover:text-bone">{venue.email}</a></p>
          </address>
          <h2 className="mt-10 h-display text-3xl md:text-4xl">{s[1]?.h2}</h2>
          <p className="mt-4 text-bone/75">{s[1]?.body[0]}</p>
          <SocialLinks size="lg" className="mt-5" />
          <div className="mt-10 overflow-hidden rounded-2xl bg-smoke"><img src={img('wedding-reception', 828)} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" /></div>
        </div>
        <div className="lg:col-span-7">
          <EnquiryForm c={c} locale={locale} privacyHref={href('privacy', locale)} />
        </div>
      </div>
    </section>
  );
}

/* ---------- structured data ---------- */
export function jsonLdFor(pageKey: PageKey, locale: Locale) {
  const url = SITE + href(pageKey, locale);
  const org = {
    '@type': ['NightClub', 'Restaurant', 'EventVenue'],
    '@id': SITE + '/#venue',
    name: 'Ágora Sotogrande',
    url: SITE + '/',
    image: BLOB + 'daikiri-closing-overhead.jpg',
    telephone: venue.phone,
    address: { '@type': 'PostalAddress', streetAddress: venue.street, addressLocality: 'Sotogrande, San Roque', addressRegion: 'Cádiz', postalCode: venue.postcode, addressCountry: 'ES' },
    hasMap: venue.mapsUrl,
    sameAs: [venue.instagram, venue.facebook, media.fourvenues],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: venue.rating, reviewCount: String(venue.reviewCount) },
    servesCuisine: 'Mediterranean',
  };
  const crumbs: { name: string; item: string }[] = [{ name: locale === 'es' ? 'Inicio' : 'Home', item: SITE + href('home', locale) }];
  if (isClientType(pageKey)) crumbs.push({ name: pages[locale].privateEvents.h1, item: SITE + href('privateEvents', locale) });
  if (pageKey !== 'home') crumbs.push({ name: pages[locale][pageKey as Exclude<PageKey, 'home'>].h1, item: url });
  const graph: any[] = [org, {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((cr, i) => ({ '@type': 'ListItem', position: i + 1, name: cr.name, item: cr.item })),
  }];
  if (pageKey === 'events') {
    for (const n of weeklyNights) graph.push({
      '@type': 'Event', name: `${n.name} at Ágora Sotogrande`, eventSchedule: { '@type': 'Schedule', byDay: `https://schema.org/${n.weekday}`, startTime: n.time, repeatFrequency: 'P1W' },
      location: { '@id': SITE + '/#venue' }, organizer: { '@id': SITE + '/#venue' }, image: media.posters[n.poster], offers: { '@type': 'Offer', url: media.fourvenues },
    });
  }
  const copy = pageKey === 'home' ? null : pages[locale][pageKey as Exclude<PageKey, 'home'>];
  if (copy?.faqs?.length) graph.push({
    '@type': 'FAQPage',
    mainEntity: copy.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });
  return { '@context': 'https://schema.org', '@graph': graph };
}
