/* eslint-disable @next/next/no-img-element */
import { media, type Content, type Locale } from '@/lib/content';
import { href } from '@/lib/routes';
import { venue } from '@/lib/pages';
import { SocialLinks } from '@/components/social';

export function Footer({ c, locale }: { c: Content; locale: Locale }) {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={media.logo} alt="Ágora Sotogrande" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-bone/60">{c.hero.sub}</p>
          <SocialLinks className="mt-6" />
        </div>
        <address className="text-sm not-italic text-bone/70">
          <p>{venue.street}</p>
          <p>{venue.postcode} {venue.town} ({venue.province})</p>
          <p className="mt-2"><a href={venue.mapsUrl} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-bone">{c.ui.directions}</a></p>
          <p className="mt-3"><a href={venue.phoneHref} className="hover:text-bone">{venue.phone}</a></p>
          <p className="mt-1"><a href={`mailto:${venue.email}`} className="hover:text-bone">{venue.email}</a></p>
        </address>
        <div className="text-sm text-bone/70">
          <p className="kicker">{c.nav.agenda}</p>
          <p className="mt-3"><a href={href('events', locale)} className="hover:text-bone">{c.ui.buyTickets} · {c.ui.bookTable}</a></p>
          <p className="mt-1"><a href={href('privateEvents', locale)} className="hover:text-bone">{c.nav.events}</a></p>
          <p className="mt-1"><a href={href('menu', locale)} className="hover:text-bone">{c.nav.menu}</a></p>
          <p className="mt-1"><a href={href('contact', locale)} className="hover:text-bone">{c.nav.contact}</a></p>
          <p className="mt-3 text-bone/50">{c.footer.hours}</p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[11px] tracking-[0.15em] uppercase text-bone/40">
        <span>© {new Date().getFullYear()} Ágora Sotogrande. {c.footer.rights}</span>
        <span className="flex flex-wrap gap-6">
          <a href={href('legal', locale)} className="hover:text-bone">{c.footer.legal}</a>
          <a href={href('privacy', locale)} className="hover:text-bone">{c.footer.privacy}</a>
          <a href={href('cookies', locale)} className="hover:text-bone">{c.footer.cookies}</a>
        </span>
      </div>
    </footer>
  );
}
