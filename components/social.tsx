import { venue } from '@/lib/pages';

const Instagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
const Facebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V14h2.8v8h3.4z" /></svg>
);

/** Instagram and Facebook as round icon buttons. `size` = 'lg' for the contact page, default for the footer. */
export function SocialLinks({ size = 'md', className = '' }: { size?: 'md' | 'lg'; className?: string }) {
  const btn = size === 'lg'
    ? 'flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-bone transition hover:border-bone hover:bg-bone hover:text-ink'
    : 'flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone/80 transition hover:border-bone hover:text-bone';
  return (
    <div className={`flex gap-3 ${className}`}>
      <a href={venue.instagram} target="_blank" rel="noopener" className={btn} aria-label="Instagram"><Instagram /></a>
      <a href={venue.facebook} target="_blank" rel="noopener" className={btn} aria-label="Facebook"><Facebook /></a>
    </div>
  );
}
