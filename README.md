# agorasotogrande.com — new site (Impulso Media)

Next.js 14 (app router) + Tailwind. Bilingual: `/es` (default) and `/en`.

- `docs/seo-inventory.md` — crawl of the old WordPress site (17 Sep 2026). Recycle copy from here; every old URL has a 301 in `next.config.mjs`.
- `lib/content.ts` — all homepage copy in ES/EN. Edit text here, not in components.
- Media currently hotlinked from the old site (video + photos) so the mockup uses real assets. Move to `/public` (compressed) before launch.

Phase 1: homepage. Phase 2: FourVenues table map + live agenda.
