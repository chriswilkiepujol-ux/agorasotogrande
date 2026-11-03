import type { PageKey } from '@/lib/routes';

/* Photos live in the project's Vercel Blob store (agora-media), imported from Adolfo's
   Drive folder "Summer 2026". Served through Next's image optimiser so each request gets
   a resized WebP. Names below are the blob paths without the agora/ prefix and .jpg. */
export const BLOB = 'https://ilz6zzcjx6haaabd.public.blob.vercel-storage.com/agora/';

export type Photo =
  | 'terrace-aerial' | 'terrace-full' | 'terrace-aerialist' | 'terrace-crowd' | 'courtyard-dusk'
  | 'daikiri-drapes-overhead' | 'daikiri-red-drapes' | 'daikiri-neon' | 'daikiri-stage' | 'daikiri-lights' | 'daikiri-stage-night'
  | 'daikiri-closing-overhead' | 'daikiri-confetti' | 'daikiri-closing-white'
  | 'oasis-carnaval-overhead' | 'oasis-foam-overhead' | 'oasis-pool-warm' | 'oasis-projectx-stage' | 'oasis-foam-party'
  | 'oasis-candyland-overhead' | 'oasis-candyland' | 'oasis-pool-teal' | 'oasis-stage-blue' | 'oasis-sportslegends-stage' | 'oasis-pool-overhead'
  | 'wedding-garden-tables' | 'wedding-table-setup' | 'wedding-dinner-overhead' | 'wedding-reception' | 'wedding-dinner'
  | LocalPhoto;

/* Photos kept in the repo under /public/photos (J&B wedding party, Nov 2026, chosen without recognisable faces). */
const localPhotos = [
  'wedding-party-overhead', 'wedding-party-casino-table', 'wedding-party-casino-hands', 'wedding-party-shots',
  'wedding-party-shots-pour', 'wedding-party-cocktail', 'wedding-party-platter', 'wedding-party-stage', 'wedding-party-confetti',
] as const;
type LocalPhoto = (typeof localPhotos)[number];
const isLocal = (n: string): n is LocalPhoto => (localPhotos as readonly string[]).includes(n);

/** Optimised URL. w must be one of Next's deviceSizes: 640 750 828 1080 1200 1920 2048 3840. */
export function img(name: Photo, w: 640 | 750 | 828 | 1080 | 1200 | 1920 | 2048 = 1920, q = 72): string {
  const src = isLocal(name) ? `/photos/${name}.jpg` : BLOB + name + '.jpg';
  return `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}`;
}

/** Header photo for each inner page. Each hero is used once across the site; the client-type heroes
   also appear as the tiles on the private-events page, so they are never reused as section photos. */
export const pageHero: Record<Exclude<PageKey, 'home'>, Photo> = {
  about: 'courtyard-dusk',
  events: 'daikiri-drapes-overhead',
  menu: 'wedding-garden-tables',
  contact: 'terrace-full',
  privateEvents: 'terrace-aerial',
  corporate: 'terrace-aerialist',
  christmas: 'daikiri-red-drapes',
  weddings: 'wedding-dinner-overhead',
  birthdays: 'daikiri-neon',
  graduations: 'daikiri-closing-white',
  legal: 'oasis-pool-overhead',
  privacy: 'oasis-pool-overhead',
  cookies: 'oasis-pool-overhead',
};

/** Photo beside each copy section (index = section order). No repeats within a page, none of the heroes. */
export const pageSections: Partial<Record<PageKey, Photo[]>> = {
  about: ['oasis-stage-blue', 'daikiri-lights', 'wedding-dinner', 'oasis-carnaval-overhead'],
  events: ['oasis-pool-warm', 'terrace-crowd'],
  menu: ['wedding-table-setup'],
  privateEvents: ['wedding-table-setup', 'daikiri-stage-night', 'terrace-crowd', 'oasis-foam-overhead'],
  corporate: ['wedding-dinner', 'daikiri-stage', 'oasis-stage-blue'],
  christmas: ['daikiri-closing-overhead', 'daikiri-confetti', 'daikiri-lights', 'wedding-table-setup'],
  weddings: ['wedding-reception', 'wedding-party-stage', 'wedding-table-setup', 'wedding-party-platter'],
  birthdays: ['daikiri-stage-night', 'oasis-pool-teal', 'oasis-foam-party'],
  graduations: ['oasis-candyland-overhead', 'oasis-candyland', 'oasis-sportslegends-stage'],
};

/** Photo strips: calendar page and weddings (wedding-party shots). */
export const pageGallery: Partial<Record<PageKey, Photo[]>> = {
  weddings: ['wedding-party-casino-table', 'wedding-party-shots-pour', 'wedding-party-confetti', 'wedding-party-casino-hands', 'wedding-party-cocktail', 'wedding-party-overhead'],
  events: ['oasis-foam-overhead', 'oasis-projectx-stage', 'daikiri-stage', 'oasis-candyland-overhead', 'daikiri-confetti', 'oasis-pool-teal'],
};
