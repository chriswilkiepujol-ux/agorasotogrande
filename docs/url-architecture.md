# agorasotogrande.com — URL architecture (v1, 9 Oct 2026)

English at the root (the URLs indexed since 2022 stay exactly as they were, trailing slash included); Spanish under `/es/`.
Full plan with redirect map and per-page targets: Impulso Media artifact "Ágora URL Architecture".

| Key | EN | ES | Phase |
|---|---|---|---|
| home | `/` | `/es/` | keep |
| about | `/about/` | `/es/sobre-nosotros/` | keep |
| events | `/events/` | `/es/calendario/` | keep |
| menu | `/menu/` | `/es/carta/` | keep |
| contact | `/contact/` | `/es/contacto/` | keep |
| privateEvents | `/private-events/` | `/es/eventos-privados/` | 1 |
| corporate | `/private-events/corporate-events/` | `/es/eventos-privados/eventos-de-empresa/` | 1 |
| christmas | `/private-events/christmas-parties/` | `/es/eventos-privados/cenas-de-navidad/` | 1 |
| weddings | `/private-events/weddings/` | `/es/eventos-privados/bodas/` | 1 |
| birthdays | `/private-events/birthdays/` | `/es/eventos-privados/cumpleanos/` | 1 |
| graduations | `/private-events/graduations/` | `/es/eventos-privados/graduaciones/` | 1 |
| legal / privacy / cookies | `/legal-notice/` `/privacy-policy/` `/cookie-policy/` | `/es/aviso-legal/` `/es/politica-de-privacidad/` `/es/politica-de-cookies/` | 1 |
| bookings, gallery, reviews, partners, faq, blog | reserved | reserved | 2 |

Redirects (301): `/2641-2/`, `/2022/*`, `/category/*`, WP endpoints → `/`; `/author/*` → `/about/`; Yoast sitemaps → `/sitemap.xml`; `/en/*` → `/*`.

Indexing: `NEXT_PUBLIC_INDEXABLE=true` only on the production domain. The Vercel testing site stays noindex + robots disallow.
Enquiry form: set `ENQUIRY_WEBHOOK` on Vercel to forward submissions (until then they are logged only).
