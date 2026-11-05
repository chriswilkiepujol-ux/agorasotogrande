/* eslint-disable @next/next/no-img-element */
import { media, type Content, type Locale } from '@/lib/content';
import { href } from '@/lib/routes';
import { venue } from '@/lib/pages';
import { SocialLinks } from '@/components/social';

const link = 'transition-colors hover:text-bone';
const heading = 'kicker !text-bone/45';

export function Footer({ c, locale }: { c: Content; locale: Locale }) {
  const explore: [string, string][] = [
    [c.nav.agenda, href('events', locale)],
    [c.nav.events, href('privateEvents', locale)],
    [c.nav.menu, href('menu', locale)],
    [c.nav.about, href('about', locale)],
    [c.nav.contact, href('contact', locale)],
  ];
  return (
    <footer className="border-t border-white/10 bg-ink px-5 pb-8 pt-14 text-sm text-bone/70 md:px-10 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={media.logo} alt="Ágora Sotogrande" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs leading-relaxed text-bone/55">{c.footer.tagline}</p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <p className={heading}>{c.footer.visit}</p>
          <address className="mt-4 not-italic leading-relaxed">
            <span className="block">{venue.street}</span>
            <span className="block">{venue.postcode} {venue.town}</span>
            <span className="block">{venue.province}</span>
          </address>
          <a href={venue.mapsUrl} target="_blank" rel="noopener" className={`mt-3 inline-block underline decoration-bone/30 underline-offset-4 ${link}`}>{c.ui.directions} →</a>
        </div>

        <div>
          <p className={heading}>{c.footer.contact}</p>
          <ul className="mt-4 space-y-2">
            <li><a href={venue.phoneHref} className={link}>{venue.phone}</a></li>
            <li><a href={`mailto:${venue.email}`} className={`break-all ${link}`}>{venue.email}</a></li>
            <li className="pt-1 text-bone/45">{c.footer.hours}</li>
          </ul>
        </div>

        <nav aria-label={c.footer.explore}>
          <p className={heading}>{c.footer.explore}</p>
          <ul className="mt-4 space-y-2">
            {explore.map(([label, to]) => <li key={to}><a href={to} className={link}>{label}</a></li>)}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-bone/40 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Ágora Sotogrande. {c.footer.rights}</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={href('legal', locale)} className={link}>{c.footer.legal}</a>
          <a href={href('privacy', locale)} className={link}>{c.footer.privacy}</a>
          <a href={href('cookies', locale)} className={link}>{c.footer.cookies}</a>
          <span className="hidden h-3 w-px bg-white/15 md:inline-block" aria-hidden="true" />
          <a href="https://impulsomedia.es" target="_blank" rel="noopener" className={link}>
            {c.footer.poweredBy} <span className="font-semibold text-bone/70">ImpulsoMedia</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
