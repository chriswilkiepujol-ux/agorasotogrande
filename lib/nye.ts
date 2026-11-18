/* New Year's Eve 2026 promo (pop-up + floating button, components/nye-promo.tsx).

   UPDATE THIS when a release sells out: set that release to 'sold' and the next one to 'on'.
   Checked against the FourVenues event page on the date in `checked`.
   Once FourVenues gives us a Channel Manager API key, these figures can be read live instead
   (see claude/fourvenues-api-plan.md). After `endsAt` the promo disappears on its own. */

export type ReleaseStatus = 'sold' | 'on' | 'next';

export const nye = {
  active: true,
  endsAt: '2027-01-01T06:00:00+01:00',
  checked: '2026-11-18',
  // FourVenues event route; /events/#<eventHash> opens the event inside our own calendar.
  eventHash: 'events/nye---2026-31-12-2026-Q3UL',
  flyer: '/promo/nye-2027.jpg',
  // General admission: entry + open bar all night.
  releases: [
    { n: 1, price: 55, status: 'sold' },
    { n: 2, price: 60, status: 'sold' },
    { n: 3, price: 65, status: 'sold' },
    { n: 4, price: 70, status: 'sold' },
    { n: 5, price: 75, status: 'sold' },
    { n: 6, price: 80, status: 'on' },
    { n: 7, price: 85, status: 'next', final: true },
  ] as { n: number; price: number; status: ReleaseStatus; final?: boolean }[],
  // VIP pass, over-25s only: premium open bar, private areas with their own bar.
  vip: { price: 90, fewLeft: true },
};

export const nyeCopy = {
  en: {
    kicker: "New Year's Eve · 31 December",
    title: "Ring in 2027 at Ágora",
    onSale: (n: string, price: string) => `${n} release on sale now · ${price}`,
    allSold: 'General tickets sold out',
    soldCount: (sold: number, total: number) => `${sold} of ${total} releases already sold out. The price goes up with every release.`,
    includes: 'Entry and open bar all night · 00:30 to 06:00 · Black tie · 18+',
    vip: (price: string, few: boolean) => `VIP pass (25+) from ${price}${few ? ' · few left' : ''}`,
    fee: 'Prices per ticket, plus booking fee.',
    cta: 'Get your tickets',
    later: 'Maybe later',
    close: 'Close',
    pill: 'NYE tickets',
    sold: 'Sold out',
    final: 'Final',
    ordinal: (n: number) => ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'][n - 1] ?? `${n}th`,
    flyerAlt: "Ágora Sotogrande New Year's Eve 2027 flyer",
  },
  es: {
    kicker: 'Nochevieja · 31 de diciembre',
    title: 'Recibe el 2027 en Ágora',
    onSale: (n: string, price: string) => `${n} release a la venta · ${price}`,
    allSold: 'Entradas generales agotadas',
    soldCount: (sold: number, total: number) => `${sold} de ${total} releases ya agotadas. El precio sube con cada release.`,
    includes: 'Entrada y barra libre toda la noche · 00:30 a 06:00 · Etiqueta · +18',
    vip: (price: string, few: boolean) => `Pase VIP (+25) desde ${price}${few ? ' · últimas plazas' : ''}`,
    fee: 'Precio por entrada, más gastos de gestión.',
    cta: 'Compra tu entrada',
    later: 'Ahora no',
    close: 'Cerrar',
    pill: 'Entradas Nochevieja',
    sold: 'Agotada',
    final: 'Final',
    ordinal: (n: number) => `${n}ª`,
    flyerAlt: 'Flyer de Nochevieja 2027 de Ágora Sotogrande',
  },
};
