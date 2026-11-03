import type { Locale, PageKey } from '@/lib/routes';
import { img } from '@/lib/media';

type ClientType = { key: PageKey; name: string; desc: string };
export type { Locale };
export { locales } from '@/lib/routes';

export const media = {
  video: 'https://agorasotogrande.com/wp-content/uploads/2025/06/BACKGROUND-AGORA-WEB.m4v',
  poster: img('daikiri-closing-overhead', 1920),
  logo: '/brand/agora-logo-white.png',
  crowd: img('wedding-reception', 1920),
  dinner: img('wedding-table-setup', 1200),
  garden: img('oasis-pool-warm', 1920),
  menuPdf: '', // set when Adolfo sends the carta PDF, e.g. '/carta-agora-2026.pdf'
  posters: {
    tuesday: '/posters/clandestina.jpg',
    oasis: '/posters/oasis.jpg',
    perreo: '/posters/perreo-lab.jpg',
    saturday: '/posters/daikiri.jpg',
  },
  // Brand logos in their original colours, hosted in /public/partners. Shown on a light band so dark marks read.
  // `h` = display height in rem, tuned per logo so they look the same visual size.
  partners: [
    { name: 'Estrella Galicia', src: '/partners/estrella-galicia.png', h: 4.25 },
    { name: 'Red Bull', src: '/partners/red-bull.png', h: 4.25 },
    { name: 'Bacardí', src: '/partners/bacardi.png', h: 5 },
    { name: 'Grey Goose', src: '/partners/grey-goose.png', h: 5 },
    { name: 'Royal Bliss', src: '/partners/royal-bliss.png', h: 3.5 },
  ],
  fourvenues: 'https://www.fourvenues.com/en/agora-sotogrande',
  instagram: 'https://www.instagram.com/agorasotogrande/',
  facebook: 'https://www.facebook.com/agorasotogrande',
};

const en = {
  meta: {
    // Keeps the "Dinner and Nightclub Sotogrande" phrase the old title has ranked on.
    title: 'Dinner and Nightclub in Sotogrande · Ágora Sotogrande',
    description: 'Ágora Sotogrande, nightclub & restaurant: enjoy dinners, live music, parties and private events in southern Spain. Book your table or enquire about your event.',
  },
  nav: { book: 'Tickets & tables', agenda: "What's on", events: 'Private events', menu: 'Menu', about: 'About', contact: 'Contact', lang: 'ES', langName: 'Español' },
  hero: {
    pre: 'Welcome to',
    tagline: 'Our House. Your House.',
    sub: 'Nightclub, restaurant and event venue in Sotogrande, Costa del Sol.',
    cta1: 'Tickets & VIP tables',
    cta2: 'Private events',
  },
  intro: {
    kicker: 'Sotogrande after dark',
    title: 'Music, atmosphere and nights you won\'t forget',
    body: [
      // recycled from the old homepage
      'ÁGORA Sotogrande is a premium nightlife destination where music, atmosphere, and unforgettable experiences come together. Inspired by the energy of the world\'s most iconic nightlife venues, ÁGORA offers a vibrant setting to celebrate, connect, and enjoy the best nights on the Costa del Sol.',
      'Cocktails on the garden terrace, four resident nights a week and parties until sunrise. Group dinners and private events in the same place, fifteen minutes from Gibraltar and forty-five from Marbella.',
    ],
  },
  agenda: { kicker: "What's on", title: 'Upcoming parties', body: 'Tickets and VIP tables for every night. Buy online and walk straight in.', cta: 'See the full calendar', book: 'VIP tables', tickets: 'Tickets' },
  family: {
    kicker: 'Every week in summer',
    title: 'Our Summer Parties',
    body: 'Four nights a week, four different parties, all summer long.',
  },
  celebrate: {
    kicker: 'Private events',
    title: 'Celebrate at Ágora',
    body: 'From intimate celebrations and milestone birthdays to exclusive corporate gatherings, ÁGORA provides a distinctive setting where every event is elevated into an unforgettable experience. Our dedicated team curates every detail with precision, delivering bespoke occasions defined by exceptional service, vibrant energy, and effortless sophistication.',
    cta: 'Enquire now',
    all: 'All private events',
    types: [
      { key: 'corporate', name: 'Corporate events', desc: 'Team dinners, awards and launches' },
      { key: 'christmas', name: 'Christmas parties', desc: 'Group menus and the party after dinner' },
      { key: 'weddings', name: 'Weddings', desc: 'Reception, cocktails and party until late' },
      { key: 'birthdays', name: 'Birthdays', desc: 'VIP tables and private celebrations' },
      { key: 'graduations', name: 'Graduations', desc: 'End-of-year parties for schools' },
    ] as ClientType[],
  },
  restaurant: {
    kicker: 'Group dinners',
    title: 'Dinner first, party after',
    body: 'The restaurant opens for pre-booked groups from 25: company dinners, birthdays and pre-weddings on the garden terrace, then straight onto the dance floor with a table reserved for the group.',
    cta: 'See menus and book',
  },
  reviews: { kicker: 'Reviews', title: 'What people say about Ágora', rating: '4.5', count: 'reviews on Google', cta: 'Read all reviews on Google', write: 'Write a review' },
  partners: { kicker: 'Partners', title: 'Who we work with' },
  cta: { title: 'Going out tonight?', body: 'Get tickets or a VIP table for the next party, or tell us what you want to celebrate.', book: 'Tickets & VIP tables', event: 'Plan an event' },
  footer: { address: 'Centro Comercial Mar y Sol, Avenida Arenilla 2, 11310 Sotogrande, San Roque (Cádiz)', hours: 'Seasonal opening hours in the calendar', follow: 'Follow us', legal: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies', rights: 'All rights reserved.' },
  ui: {
    breadcrumbHome: 'Home',
    viewPage: 'Find out more',
    otherEvents: 'Other ways to celebrate',
    faq: 'Frequently asked questions',
    weekly: 'Weekly nights',
    every: 'Every',
    menuSoon: 'The menu PDF will appear here as soon as the new season’s carta is final.',
    menuDownload: 'Download the menu (PDF)',
    menuOpen: 'Open the menu',
    bookExternal: 'Tickets and tables on FourVenues',
    buyTickets: 'Tickets',
    bookTable: 'VIP tables',
    nextParty: 'Next party',
    call: 'Call',
    directions: 'Directions',
    form: {
      title: 'Send us your enquiry',
      name: 'Name', email: 'Email', phone: 'Phone', type: 'Type of event', date: 'Date', guests: 'Guests', budget: 'Budget (optional)', message: 'Tell us about it',
      types: ['Corporate event', 'Christmas party', 'Wedding', 'Birthday or celebration', 'Graduation', 'Table reservation', 'Other'],
      submit: 'Send enquiry', sending: 'Sending…',
      ok: 'Thank you. We will get back to you within one working day.',
      fail: 'Something went wrong. Write to us at info@agorasotogrande.com.',
      privacy: 'By sending this form you accept our privacy policy.',
    },
    cookieBanner: { text: 'We use cookies to understand how the site is used. Accept to allow analytics, or keep only the essential ones.', accept: 'Accept', reject: 'Essential only', more: 'Cookie policy' },
  },
};

const es: typeof en = {
  meta: {
    title: 'Discoteca y restaurante en Sotogrande · Ágora Sotogrande',
    description: 'Ágora Sotogrande: discoteca y restaurante con cenas, música en directo, fiestas y eventos privados en Sotogrande. Reserva tu mesa o pide presupuesto para tu evento.',
  },
  nav: { book: 'Entradas y mesas', agenda: 'Calendario', events: 'Eventos privados', menu: 'Carta', about: 'Nosotros', contact: 'Contacto', lang: 'EN', langName: 'English' },
  hero: {
    pre: 'Bienvenidos a',
    tagline: 'Our House. Your House.',
    sub: 'Discoteca, restaurante y espacio para eventos en Sotogrande, Costa del Sol.',
    cta1: 'Entradas y mesas VIP',
    cta2: 'Eventos privados',
  },
  intro: {
    kicker: 'Sotogrande de noche',
    title: 'Música, ambiente y noches que no se olvidan',
    body: [
      'ÁGORA Sotogrande es el destino de referencia de la noche en Sotogrande, donde la música, el ambiente y las experiencias inolvidables se dan la mano. Inspirado en la energía de los locales más icónicos del mundo, ÁGORA es el lugar para celebrar, conectar y vivir las mejores noches de la Costa del Sol.',
      'Cócteles en la terraza jardín, cuatro noches residentes a la semana y fiestas hasta el amanecer. Cenas de grupo y eventos privados en el mismo espacio, a quince minutos de Gibraltar y a cuarenta y cinco de Marbella.',
    ],
  },
  agenda: { kicker: 'Calendario', title: 'Próximas fiestas', body: 'Entradas y mesas VIP para cada noche. Compra online y entra directo.', cta: 'Ver todo el calendario', book: 'Mesas VIP', tickets: 'Entradas' },
  family: {
    kicker: 'Cada semana en verano',
    title: 'Nuestras fiestas de verano',
    body: 'Cuatro noches a la semana, cuatro fiestas distintas, todo el verano.',
  },
  celebrate: {
    kicker: 'Eventos privados',
    title: 'Celebra en Ágora',
    body: 'Desde celebraciones íntimas y cumpleaños señalados hasta eventos de empresa exclusivos, ÁGORA ofrece un escenario único donde cada evento se convierte en una experiencia inolvidable. Nuestro equipo cuida cada detalle con precisión: servicio impecable, energía vibrante y una sofisticación sin esfuerzo.',
    cta: 'Pide presupuesto',
    all: 'Todos los eventos privados',
    types: [
      { key: 'corporate', name: 'Eventos de empresa', desc: 'Cenas de equipo, premios y presentaciones' },
      { key: 'christmas', name: 'Cenas de Navidad', desc: 'Menús de grupo y fiesta después de cenar' },
      { key: 'weddings', name: 'Bodas', desc: 'Cóctel, cena y fiesta hasta tarde' },
      { key: 'birthdays', name: 'Cumpleaños', desc: 'Mesas VIP y celebraciones privadas' },
      { key: 'graduations', name: 'Graduaciones', desc: 'Fiestas de fin de curso para colegios' },
    ] as ClientType[],
  },
  restaurant: {
    kicker: 'Cenas de grupo',
    title: 'Primero la cena, después la fiesta',
    body: 'El restaurante abre para grupos con reserva a partir de 25: cenas de empresa, cumpleaños y prebodas en la terraza jardín, y después directo a la pista con mesa reservada para el grupo.',
    cta: 'Ver menús y reservar',
  },
  reviews: { kicker: 'Opiniones', title: 'Lo que dicen de Ágora', rating: '4,5', count: 'reseñas en Google', cta: 'Leer todas las reseñas en Google', write: 'Escribir una reseña' },
  partners: { kicker: 'Colaboradores', title: 'Con quienes trabajamos' },
  cta: { title: '¿Salimos esta noche?', body: 'Consigue entradas o una mesa VIP para la próxima fiesta, o cuéntanos qué quieres celebrar.', book: 'Entradas y mesas VIP', event: 'Organiza tu evento' },
  footer: { address: 'Centro Comercial Mar y Sol, Avenida Arenilla 2, 11310 Sotogrande, San Roque (Cádiz)', hours: 'Horarios por temporada en el calendario', follow: 'Síguenos', legal: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies', rights: 'Todos los derechos reservados.' },
  ui: {
    breadcrumbHome: 'Inicio',
    viewPage: 'Ver más',
    otherEvents: 'Otras celebraciones',
    faq: 'Preguntas frecuentes',
    weekly: 'Las noches de cada semana',
    every: 'Cada',
    menuSoon: 'La carta en PDF aparecerá aquí en cuanto esté cerrada la de la nueva temporada.',
    menuDownload: 'Descargar la carta (PDF)',
    menuOpen: 'Abrir la carta',
    bookExternal: 'Entradas y mesas en FourVenues',
    buyTickets: 'Entradas',
    bookTable: 'Mesas VIP',
    nextParty: 'Próxima fiesta',
    call: 'Llamar',
    directions: 'Cómo llegar',
    form: {
      title: 'Envíanos tu consulta',
      name: 'Nombre', email: 'Email', phone: 'Teléfono', type: 'Tipo de evento', date: 'Fecha', guests: 'Invitados', budget: 'Presupuesto (opcional)', message: 'Cuéntanos',
      types: ['Evento de empresa', 'Cena de Navidad', 'Boda', 'Cumpleaños o celebración', 'Graduación', 'Reserva de mesa', 'Otro'],
      submit: 'Enviar consulta', sending: 'Enviando…',
      ok: 'Gracias. Te respondemos en un día laborable.',
      fail: 'Algo ha fallado. Escríbenos a info@agorasotogrande.com.',
      privacy: 'Al enviar este formulario aceptas nuestra política de privacidad.',
    },
    cookieBanner: { text: 'Usamos cookies para entender cómo se usa la web. Acepta para permitir la analítica o quédate solo con las esenciales.', accept: 'Aceptar', reject: 'Solo esenciales', more: 'Política de cookies' },
  },
};

export const content = { en, es };
export type Content = typeof en;
