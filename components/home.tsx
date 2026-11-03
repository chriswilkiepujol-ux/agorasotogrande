/* eslint-disable @next/next/no-img-element */
import { media, type Content, type Locale } from '@/lib/content';
import { href } from '@/lib/routes';
import { weeklyNights, venue } from '@/lib/pages';
import FourVenuesEvents from '@/components/fourvenues-events';
import { Mark } from '@/components/mark';
import { HeroVideo } from '@/components/hero-video';
import { img, pageHero } from '@/lib/media';
import type { PageKey } from '@/lib/routes';

type P = { c: Content; locale: Locale };

export function Hero({ c, locale }: P) {
  const scrollLabel = locale === 'es' ? 'Desliza' : 'Scroll';
  return (
    <section className="relative grain flex min-h-[100svh] items-center justify-center overflow-hidden" id="top">
      <HeroVideo src={media.video} poster={media.poster} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink" />
      <div className="relative z-10 flex flex-col items-center px-6 pb-36 pt-24 text-center md:pb-40">
        <span className="font-script text-3xl text-sand md:text-5xl">{c.hero.pre}</span>
        <h1 className="mt-4 w-[86vw] max-w-[780px] md:mt-6">
          <img src="/brand/agora-logo-white-hero.png" alt="Ágora Sotogrande" width={1596} height={517} className="h-auto w-full drop-shadow-[0_4px_30px_rgba(0,0,0,.35)]" fetchPriority="high" />
        </h1>
        <p className="mt-8 font-display text-2xl italic text-bone md:text-4xl">{c.hero.tagline}</p>
        <p className="mt-3 max-w-md text-sm text-bone/70 md:text-base">{c.hero.sub}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#calendario" className="btn btn-solid">{c.hero.cta1}</a>
          <a href={href('privateEvents', locale)} className="btn btn-ghost">{c.hero.cta2}</a>
        </div>
      </div>
      <a href="#calendario" className="scroll-cue absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-bone/85 transition hover:text-bone md:bottom-8" aria-label={scrollLabel}>
        <Mark size={64} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">{scrollLabel}</span>
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path className="cue-arrow cue-arrow-1" d="M4 8l7 7 7-7" />
          <path className="cue-arrow cue-arrow-2" d="M4 17l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}

export function LiveEvents({ c, locale }: P) {
  return (
    <section className="border-t border-white/10 bg-night px-5 py-14 md:px-10 lg:px-16 md:py-20" id="calendario">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <span className="kicker"><span className="mr-3 text-bone/40">01</span>{c.agenda.kicker}</span>
            <h2 className="mt-3 h-display text-4xl md:text-6xl">{c.agenda.title}</h2>
          </div>
          <a href={href('events', locale)} className="btn btn-ghost">{c.agenda.cta}</a>
        </div>
        <div className="overflow-hidden rounded-2xl bg-bone p-2 md:p-4"><FourVenuesEvents /></div>
      </div>
    </section>
  );
}

export function Intro({ c }: P) {
  return (
    <section className="relative section overflow-hidden border-t border-white/10 bg-ink">
      <div className="absolute inset-0" data-parallax><img src={img('terrace-crowd', 1920)} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/55 to-ink" />
      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5" data-reveal>
          <span className="kicker"><span className="mr-3 text-bone/40">02</span>{c.intro.kicker}</span>
          <h2 className="mt-4 h-display text-4xl md:text-6xl">{c.intro.title}</h2>
        </div>
        <div className="space-y-5 text-bone/75 md:col-span-6 md:col-start-7 md:text-lg" data-reveal>
          {c.intro.body.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}

export function Family({ c, locale }: P) {
  return (
    <section className="section border-t border-white/10 bg-night" id="familia">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl" data-reveal>
          <span className="kicker"><span className="mr-3 text-bone/40">03</span>{c.family.kicker}</span>
          <h2 className="mt-4 h-display text-4xl md:text-6xl">{c.family.title}</h2>
          <p className="mt-4 text-bone/70">{c.family.body}</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-4">
          {weeklyNights.map((n) => (
            <a key={n.name} href={href('events', locale)} className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-smoke p-4 transition hover:border-white/30 md:p-6">
              <img src={media.posters[n.poster]} alt={n.name} className="tile-img absolute inset-0 h-full w-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
              <span className="relative text-[10px] tracking-[0.2em] uppercase text-copper md:text-[11px]">{n.day[locale]} · {n.time}</span>
              <h3 className="sr-only">{n.name}</h3>
              <p className="relative mt-1 line-clamp-2 text-xs text-bone/80 md:text-sm">{n.desc[locale]}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Celebrate({ c, locale }: P) {
  return (
    <section className="relative section overflow-hidden border-t border-white/10 bg-ink" id="eventos">
      <div className="absolute inset-0" data-parallax><img src={media.crowd} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl" data-reveal>
          <span className="kicker"><span className="mr-3 text-bone/40">04</span>{c.celebrate.kicker}</span>
          <h2 className="mt-4 h-display text-4xl md:text-6xl">{c.celebrate.title}</h2>
          <p className="mt-5 text-bone/75 md:text-lg">{c.celebrate.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={href('contact', locale)} className="btn btn-solid">{c.celebrate.cta}</a>
            <a href={href('privateEvents', locale)} className="btn btn-ghost">{c.celebrate.all}</a>
          </div>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-14 lg:grid-cols-5">
          {c.celebrate.types.map((t, i) => {
            const wide = c.celebrate.types.length % 2 === 1 && i === c.celebrate.types.length - 1;
            return (
            <li key={t.key} className={wide ? 'col-span-2 lg:col-span-1' : ''}>
              <a href={href(t.key, locale)} className={`group relative block overflow-hidden rounded-2xl bg-smoke ${wide ? 'aspect-[16/9] lg:aspect-[3/4]' : 'aspect-[3/4]'}`}>
                <img src={img(pageHero[t.key as Exclude<PageKey, 'home'>], 828)} alt="" className="tile-img absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="h-display text-xl md:text-2xl">{t.name}</h3>
                  <p className="mt-1 hidden text-sm text-bone/70 sm:block">{t.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sand md:mt-3 md:rounded-full md:border md:border-bone/50 md:px-3 md:py-1 md:text-bone md:transition md:group-hover:bg-bone md:group-hover:text-ink">{c.ui.viewPage}<span aria-hidden="true" className="md:hidden">→</span></span>
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

export function Restaurant({ c, locale }: P) {
  return (
    <section className="section border-t border-white/10 bg-night" id="restaurante">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <img src={media.dinner} alt={locale === 'es' ? 'Cena en la terraza de Ágora Sotogrande' : 'Dinner on the terrace at Ágora Sotogrande'} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </div>
        <div className="md:pl-8" data-reveal>
          <span className="kicker"><span className="mr-3 text-bone/40">05</span>{c.restaurant.kicker}</span>
          <h2 className="mt-4 h-display text-4xl md:text-6xl">{c.restaurant.title}</h2>
          <p className="mt-5 text-bone/75 md:text-lg">{c.restaurant.body}</p>
          <a href={href('menu', locale)} className="btn btn-ghost mt-8">{c.restaurant.cta}</a>
        </div>
      </div>
    </section>
  );
}

const GoogleG = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.5 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.8 6C12.3 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.5 2.9-2.2 5.4-4.7 7.1l7.4 5.7c4.3-4 7.1-9.9 7.1-16.8z" />
    <path fill="#FBBC05" d="M10.4 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.8-6C.9 16.5 0 20.1 0 24s.9 7.5 2.6 10.7l7.8-6z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.9 2.3-8.5 2.3-6.3 0-11.7-4.1-13.6-9.8l-7.8 6C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

const Stars = ({ n = 5 }: { n?: number }) => (
  <span className="inline-flex gap-0.5 text-[#FBBC05]" aria-label={`${n} stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
    ))}
  </span>
);

/* Real reviews from the venue's Google listing, shown in Google's own idiom (white cards, G mark, yellow stars)
   so they read as third-party proof rather than site copy. Names are initials only. */
export function Reviews({ c, locale }: P) {
  const quotes: { text: string; who: string; when: string }[] = locale === 'es'
    ? [
        { text: 'Un sitio increíble, decoración preciosa con muchas plantas y muy buen ambiente.', who: 'M. R.', when: 'hace 2 meses' },
        { text: 'Super good place to party! I come every summer with my friends and I have the best time.', who: 'S. L.', when: 'hace 3 meses' },
        { text: 'Cenamos y nos quedamos de fiesta, todo en el mismo sitio. Repetiremos.', who: 'J. G.', when: 'hace 4 meses' },
      ]
    : [
        { text: 'Such a fun place! The themes are the best and I love dressing up. The plants are beautiful, the drinks are amazing and the music is such fun.', who: 'A. K.', when: '2 months ago' },
        { text: 'Super good place to party! I come every summer with my friends and I have the best time.', who: 'S. L.', when: '3 months ago' },
        { text: 'My first time in Spain and I\'m absolutely obsessed with this place: the music, decoration and people are so lovely!', who: 'D. P.', when: '4 months ago' },
      ];
  return (
    <section className="section border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <span className="kicker"><span className="mr-3 text-bone/40">06</span>{c.reviews.kicker}</span>
            <h2 className="mt-4 h-display text-4xl md:text-6xl">{c.reviews.title}</h2>
          </div>
          <a href={venue.reviewsUrl} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-lg transition hover:shadow-xl">
            <GoogleG />
            <span className="leading-tight">
              <span className="flex items-center gap-2"><span className="text-2xl font-semibold">{c.reviews.rating}</span><Stars /></span>
              <span className="text-xs text-ink/60">{venue.reviewCount} {c.reviews.count}</span>
            </span>
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote key={q.text} className="flex flex-col rounded-2xl bg-white p-6 text-ink shadow-lg">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4285F4] text-sm font-semibold text-white">{q.who[0]}</span>
                  <span className="leading-tight"><span className="block text-sm font-semibold">{q.who}</span><span className="block text-xs text-ink/55">{q.when}</span></span>
                </span>
                <GoogleG />
              </div>
              <div className="mt-3"><Stars /></div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{q.text}</p>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={venue.reviewsUrl} target="_blank" rel="noopener" className="btn btn-ghost">{c.reviews.cta}</a>
          <a href={venue.writeReviewUrl} target="_blank" rel="noopener" className="text-[13px] font-semibold uppercase tracking-[0.12em] text-bone/60 underline-offset-4 hover:text-bone hover:underline self-center">{c.reviews.write}</a>
        </div>
      </div>
    </section>
  );
}

export function Partners({ c }: P) {
  return (
    <section className="bg-bone px-5 py-12 text-ink md:px-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-10 md:gap-x-16">
        <span className="kicker w-full text-center !text-ink/60">{c.partners.kicker}</span>
        {media.partners.map((p) => <img key={p.name} src={p.src} alt={p.name} className="partner-logo w-auto max-w-[40vw] object-contain md:max-w-none" style={{ height: `${p.h}rem` }} loading="lazy" />)}
      </div>
    </section>
  );
}

export function FinalCta({ c, locale }: P) {
  return (
    <section className="relative section overflow-hidden bg-night text-center" id="reserva">
      <div className="absolute inset-0" data-parallax><img src={media.garden} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" /></div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="relative mx-auto max-w-2xl" data-reveal>
        <h2 className="h-display text-5xl md:text-7xl">{c.cta.title}</h2>
        <p className="mt-5 text-bone/75 md:text-lg">{c.cta.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={href('events', locale)} className="btn btn-solid">{c.cta.book}</a>
          <a href={href('privateEvents', locale)} className="btn btn-ghost">{c.cta.event}</a>
        </div>
      </div>
    </section>
  );
}
