/* New Year's Eve 2026 promo (pop-up + floating button, components/nye-promo.tsx).

   Release data lives in lib/nye-data.json and is refreshed automatically twice a day by
   scripts/update-nye.mjs (run by a scheduled task, which commits and pushes when it changes).
   At `endsAt` (31 Dec, 23:00 Madrid) the promo disappears on its own. */
import data from './nye-data.json';

export type ReleaseStatus = 'sold' | 'on' | 'next';
export type Release = { n: number; name: string; price: number; status: ReleaseStatus; final?: boolean; fewLeft?: boolean };

export const nye = {
  active: true,
  // Pop-up and corner button disappear at this moment, checked in each visitor's browser, so no
  // deploy is needed. Change the time here if Adolfo confirms a different cut-off.
  endsAt: '2026-12-31T23:00:00+01:00',
  checked: data.checked,
  // FourVenues event route; /events/#<eventHash> opens the event inside our own calendar.
  eventHash: data.eventHash,
  flyer: '/promo/nye-2027.jpg',
  // General admission: entry + open bar all night.
  releases: data.releases as Release[],
  // VIP pass, over-25s only.
  vip: data.vip as { price: number | null; fewLeft: boolean; soldOut: boolean },
};

export const nyeCopy = {
  en: {
    kicker: "New Year's Eve · 31 Dec 2026",
    title: 'Ring in 2027 at Ágora',
    onSaleNow: 'On sale now',
    releaseName: (n: number, final?: boolean) => (final ? 'Final release' : `${['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'][n - 1] ?? `${n}th`} release`),
    perPerson: 'per person + booking fee',
    progress: (sold: number, total: number) => `${sold} of ${total} releases sold out`,
    nextAt: (price: string) => `Next release ${price}`,
    lastOne: 'Last release. When it’s gone, it’s gone.',
    fewLeft: 'Few left',
    allSold: 'Online tickets sold out',
    allSoldNote: 'Message us on Instagram for any last tickets.',
    details: ['Open bar all night', '00:30 – 06:00', 'Black tie · 18+'],
    vip: (price: string, few: boolean) => `VIP pass (25+) from ${price}${few ? ' · few left' : ''}`,
    cta: (price: string) => `Get your tickets · ${price}`,
    ctaPlain: 'See the event',
    later: 'Maybe later',
    close: 'Close',
    pill: 'NYE tickets',
    flyerAlt: "Ágora Sotogrande New Year's Eve 2027 flyer",
  },
  es: {
    kicker: 'Nochevieja · 31 dic 2026',
    title: 'Recibe el 2027 en Ágora',
    onSaleNow: 'A la venta',
    releaseName: (n: number, final?: boolean) => (final ? 'Última release' : `${n}ª release`),
    perPerson: 'por persona + gastos de gestión',
    progress: (sold: number, total: number) => `${sold} de ${total} releases agotadas`,
    nextAt: (price: string) => `Siguiente release ${price}`,
    lastOne: 'Última release: cuando se acabe, se acabó.',
    fewLeft: 'Últimas',
    allSold: 'Entradas online agotadas',
    allSoldNote: 'Escríbenos por Instagram por si quedan últimas entradas.',
    details: ['Barra libre toda la noche', '00:30 – 06:00', 'Etiqueta · +18'],
    vip: (price: string, few: boolean) => `Pase VIP (+25) desde ${price}${few ? ' · últimas plazas' : ''}`,
    cta: (price: string) => `Comprar entradas · ${price}`,
    ctaPlain: 'Ver el evento',
    later: 'Ahora no',
    close: 'Cerrar',
    pill: 'Entradas Nochevieja',
    flyerAlt: 'Flyer de Nochevieja 2027 de Ágora Sotogrande',
  },
};
