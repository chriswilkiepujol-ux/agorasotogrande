/* eslint-disable @next/next/no-img-element */
import { media, type Locale } from '@/lib/content';
import { getInstagramPosts } from '@/lib/instagram';
import { img, type Photo } from '@/lib/media';

const t = {
  en: { kicker: 'Instagram', title: 'Last night at Ágora', follow: 'Follow @agorasotogrande', open: 'Open on Instagram' },
  es: { kicker: 'Instagram', title: 'Anoche en Ágora', follow: 'Sigue a @agorasotogrande', open: 'Ver en Instagram' },
};

/* Shown until the Instagram token is in place, or if Instagram is down: our own shots, each linking to the profile. */
const fallback: Photo[] = ['daikiri-confetti', 'oasis-foam-party', 'oasis-candyland', 'daikiri-stage-night', 'oasis-pool-teal', 'oasis-sportslegends-stage'];

export async function Instagram({ locale, index }: { locale: Locale; index: string }) {
  const s = t[locale];
  const posts = await getInstagramPosts(6);
  const live = posts.length >= 3;
  return (
    <section className="section border-t border-white/10 bg-ink" id="instagram">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <div>
            <span className="kicker"><span className="mr-3 text-bone/40">{index}</span>{s.kicker}</span>
            <h2 className="mt-4 h-display text-4xl md:text-6xl">{s.title}</h2>
          </div>
          <a href={media.instagram} target="_blank" rel="noopener" className="btn btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            {s.follow}
          </a>
        </div>
        <ul className="mt-10 grid grid-cols-3 gap-2 md:mt-12 md:gap-3 lg:grid-cols-6">
          {live
            ? posts.map((p) => (
                <li key={p.id}>
                  <a href={p.permalink} target="_blank" rel="noopener" className="group relative block aspect-square overflow-hidden rounded-xl bg-smoke md:rounded-2xl" aria-label={s.open}>
                    <img src={p.imageUrl} alt={p.caption?.slice(0, 120) ?? ''} className="tile-img absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    {p.mediaType !== 'IMAGE' && (
                      <span className="absolute right-2 top-2 text-bone/90 drop-shadow md:right-3 md:top-3" aria-hidden="true">
                        {p.mediaType === 'VIDEO'
                          ? <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                          : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="7" width="14" height="14" rx="2" /><path d="M3 17V5a2 2 0 0 1 2-2h12" /></svg>}
                      </span>
                    )}
                  </a>
                </li>
              ))
            : fallback.map((p) => (
                <li key={p}>
                  <a href={media.instagram} target="_blank" rel="noopener" className="group relative block aspect-square overflow-hidden rounded-xl bg-smoke md:rounded-2xl" aria-label={s.open}>
                    <img src={img(p, 640)} alt="" className="tile-img absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}
