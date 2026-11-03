import type { Locale, PageKey } from '@/lib/routes';

/* Per-page copy and metadata. Draft v2 (19 Oct) — Adolfo reviews page by page.
   Paragraphs marked "recycled" are the old site's text kept on the same URL on purpose.
   Facts still to confirm with Adolfo are listed in docs/questions-for-adolfo.md. */

export type Faq = { q: string; a: string };
export type PageCopy = {
  title: string;          // <title>
  description: string;    // meta description
  kicker: string;
  h1: string;
  intro: string[];        // paragraphs under the H1
  sections?: { h2: string; body: string[]; bullets?: string[] }[];
  faqs?: Faq[];
  cta?: { label: string; to: PageKey; note?: string };
};

type Dict = Record<Exclude<PageKey, 'home'>, PageCopy>;

export const venue = {
  name: 'Ágora Sotogrande',
  street: 'Centro Comercial Mar y Sol, Avenida Arenilla 2',
  postcode: '11310',
  town: 'Sotogrande, San Roque',
  province: 'Cádiz',
  phone: '+34 669 99 78 88',
  phoneHref: 'tel:+34669997888',
  email: 'info@agorasotogrande.com',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=%C3%81gora+Sotogrande&query_place_id=ChIJmVaw4SfDDA0RM3IsvnbSuo4',
  reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJmVaw4SfDDA0RM3IsvnbSuo4',
  writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJmVaw4SfDDA0RM3IsvnbSuo4',
  facebook: 'https://www.facebook.com/agorasotogrande',
  instagram: 'https://www.instagram.com/agorasotogrande',
  rating: '4.5',
  reviewCount: 255,
};

const en: Dict = {
  about: {
    title: 'What Makes Us Unique · Ágora Sotogrande',
    description: 'Ágora Sotogrande was born to create a nightlife experience worthy of the Mediterranean’s most exclusive destination: nightclub, garden terrace and private events in one venue.',
    kicker: 'About us',
    h1: 'What Makes Us Unique',
    intro: [
      // recycled
      'ÁGORA Sotogrande was born from a simple idea: to create a nightlife experience worthy of one of the Mediterranean’s most exclusive destinations.',
      'Founded by a team of local professionals with extensive experience in hospitality, entertainment, and events, ÁGORA has become a place where people come together to enjoy exceptional music, a unique atmosphere, and unforgettable moments.',
    ],
    sections: [
      { h2: 'Who we are', body: [
        // recycled
        'Inspired by the world’s most renowned nightlife destinations, we have created a vibrant and sophisticated venue designed for those who appreciate quality experiences and meaningful connections. Whether enjoying a night with friends, celebrating a special occasion, or discovering a new event, every visit to ÁGORA is designed to feel different.',
        'At the heart of our philosophy is a commitment to bringing people together through music, energy, and shared experiences. More than a nightclub, ÁGORA is a meeting point for locals, visitors, and everyone who wants to be part of Sotogrande’s most exciting nights.',
      ]},
      { h2: 'One venue, built for the night', body: [
        'A garden terrace under the palms, an open-air bar and the club floor after midnight. Four resident nights a week in season, VIP tables with bottle service, and the whole place available for private events: group dinners, company parties, pre-wedding celebrations and graduations.',
      ], bullets: ['Club floor with resident DJs and guest artists', 'Garden terrace and open-air bar', 'VIP tables and bottle service on every club night', 'Private events for groups of every size'] },
      { h2: 'Where we are', body: [
        'Centro Comercial Mar y Sol, in Sotogrande (San Roque, Cádiz), on the western Costa del Sol. Fifteen minutes from Gibraltar, forty-five from Marbella and an hour from Málaga airport. Parking next to the venue.',
      ]},
      { h2: 'Our summer parties', body: [
        'Four nights a week all summer, each with its own personality: Clandestina on Tuesdays, Oasis on Thursdays with a different theme every week, Perreo Lab on Fridays and Daikiri on Saturdays. Dates and tickets are on the calendar.',
      ]},
    ],
    cta: { label: 'See what’s on', to: 'events' },
  },

  events: {
    title: 'What’s On at Ágora · Parties and Events in Sotogrande',
    description: 'Weekly parties at Ágora Sotogrande: Clandestina, Oasis, Perreo Lab and Daikiri. Dates, times, tickets and VIP tables for every night.',
    kicker: 'Calendar',
    h1: 'What’s On',
    intro: ['Every party at Ágora, with tickets and VIP tables. Buy online and walk straight in.'],
    sections: [
      { h2: 'Tickets and VIP tables', body: ['Each night has general tickets and a small number of VIP tables with bottle service. Tables are sold per group with a deposit; the rest is settled on the night. Doors are usually by 1:00 am for table bookings, so arrive early.'] },
      { h2: 'Through the season', body: ['The resident line-up runs all season. Special events, guest DJs and holiday nights are added to the calendar above as they are confirmed.'] },
    ],
    faqs: [
      { q: 'Do I need a ticket if I have a table?', a: 'A table booking covers entry for the number of guests on the booking. Extra guests pay the per-person supplement shown when you book.' },
      { q: 'What is the dress code?', a: 'Smart. Many nights are themed; check the event on the calendar and dress up if you like.' },
      { q: 'What is the minimum age?', a: 'Club nights are 18+. Bring photo ID.' },
      { q: 'Can I book a table for a birthday?', a: 'Yes. Book the table through the calendar and tell us in the notes; see the birthdays page for what we can add on the night.' },
    ],
    cta: { label: 'Celebrate something?', to: 'privateEvents', note: 'Tickets and tables are sold through FourVenues.' },
  },

  menu: {
    title: 'Group Dinners and Menus · Ágora Sotogrande',
    description: 'Group dinners at Ágora Sotogrande: pre-booked menus for companies, celebrations and groups of friends on the garden terrace, then the party on the club floor. See the menus and book.',
    kicker: 'Group dinners',
    h1: 'Group Dinners',
    intro: [
      'The restaurant at Ágora opens for pre-booked groups: company dinners, birthdays, pre-wedding dinners and friends who want dinner and the party in the same place. We do not run a walk-in service; every dinner is arranged in advance with a set menu.',
      'Mediterranean kitchen with a nod to the south, served on the garden terrace. Menus change with the season; the current version is below.',
    ],
    sections: [
      { h2: 'How a group dinner works', body: ['Tell us the date, the number of guests and the occasion. We send the menus and a quote, you confirm with a deposit, and on the night your table is ready on the terrace with the party afterwards a few steps away.'], bullets: ['Groups from 25 guests', 'Set menus with welcome drink and wine included', 'Vegetarian, vegan and allergen-free options on every menu', 'Tables and bottle service on the club floor reserved for dinner groups'] },
    ],
    faqs: [
      { q: 'Can I book a table for two for dinner?', a: 'Not at the moment. Dinners are for pre-booked groups from 25 guests. For a night out, book a VIP table on a club night through the calendar.' },
      { q: 'Do group dinners run all year?', a: 'Yes, by arrangement, including outside the club season. Weekday dinners are available for companies.' },
      { q: 'Can we choose dishes individually?', a: 'Menus are set per group so the kitchen can serve everyone together, with alternatives for dietary needs chosen in advance.' },
    ],
    cta: { label: 'Book a group dinner', to: 'contact' },
  },

  contact: {
    title: 'Contact and Enquiries · Ágora Sotogrande',
    description: 'Contact Ágora Sotogrande: private events, group dinners and corporate enquiries. Address, phone, opening hours and enquiry form.',
    kicker: 'Contact',
    h1: 'Contact',
    intro: ['Tell us what you want to celebrate and we will call you back. For tickets and VIP tables on club nights, use the calendar.'],
    sections: [
      { h2: 'Get in touch', body: ['Centro Comercial Mar y Sol, Avenida Arenilla 2, 11310 Sotogrande, San Roque (Cádiz).', 'Opening hours change by season. Check the calendar for this week.'] },
      // recycled heading from the old page
      { h2: 'Follow us', body: ['Live the Ágora experience on social media.'] },
    ],
  },

  privateEvents: {
    title: 'Private Event Venue in Sotogrande · Ágora',
    description: 'Private events at Ágora Sotogrande: corporate events, Christmas parties, pre-wedding celebrations, birthdays and graduations in a garden terrace and nightclub near Gibraltar and Marbella. Request a quote.',
    kicker: 'Private events',
    h1: 'Celebrate at Ágora',
    intro: [
      // recycled
      'From intimate celebrations and milestone birthdays to exclusive corporate gatherings, ÁGORA provides a distinctive setting where every event is elevated into an unforgettable experience. Our dedicated team curates every detail with precision, delivering bespoke occasions defined by exceptional service, vibrant energy, and effortless sophistication.',
      'Dinner, drinks and the party in one place, with a team that runs events every week of the season. You choose the format; we take care of the kitchen, the bar, the sound and the lights.',
    ],
    sections: [
      { h2: 'Spaces', body: ['Three areas that can be booked on their own or together, from a group dinner to a full-venue party. Tell us your numbers and we will tell you how we would set it up.'], bullets: ['Garden terrace: seated dinners and cocktail receptions under the palms', 'Open-air bar: standing receptions and welcome drinks', 'Club floor: parties with full sound and lighting rig, stage and screens', 'Full venue: exclusive hire with private entrance'] },
      { h2: 'What we do well', body: ['We are a nightclub first, so the part of an event most venues struggle with, the party, is the part we do every week. Resident DJs, a professional sound and lighting system, bar staff used to serving hundreds of guests an hour, and security on the door.'], bullets: ['Dedicated event manager from first contact to the night', 'Set menus from our kitchen, adapted to dietary needs', 'Bottle service and VIP tables inside your event', 'Resident DJ or your own artists with our technical team', 'Screens and stage for presentations, videos and speeches', 'Door control, guest lists and security'] },
      { h2: 'Types of event', body: ['Each has its own page with formats, details and answers to the usual questions.'], bullets: ['Corporate events and team dinners', 'Christmas parties and tardeos', 'Pre-wedding dinners and wedding parties', 'Birthdays and VIP tables', 'Graduations and end-of-year parties'] },
      { h2: 'How it works', body: ['Send the enquiry form with the date, number of guests and the type of event. We reply within one working day with availability and a proposal. Events are confirmed with a signed quote and a deposit, not online.'] },
    ],
    faqs: [
      { q: 'What is the minimum number of guests?', a: 'Group dinners start at 25 guests. Exclusive hire of the whole venue depends on the date and the format, so ask us with your numbers.' },
      { q: 'What is the maximum capacity?', a: 'It depends on the format: a seated dinner, a cocktail reception and a party on the club floor all work differently between the terrace and inside. Send us your numbers and we will tell you what fits and how we would set it up.' },
      { q: 'Can we bring our own DJ or band?', a: 'Yes. The club has a full sound and lighting rig; external artists are welcome with our technical team.' },
      { q: 'Can we hire the venue on a weekday?', a: 'Yes. Outside club nights the venue is available for private hire, which usually means Monday, Wednesday and Sunday in season and most days outside it.' },
      { q: 'Is there parking?', a: 'Parking next to the venue at the Mar y Sol shopping centre, and taxi and transfer services from Sotogrande, Gibraltar and Marbella.' },
      { q: 'How far in advance should we book?', a: 'Summer weekends and December fill up months ahead. For a weekday or off-season date a few weeks is usually enough.' },
    ],
    cta: { label: 'Request a quote', to: 'contact' },
  },

  corporate: {
    title: 'Corporate Events and Team Dinners in Sotogrande · Ágora',
    description: 'Corporate events at Ágora Sotogrande: team dinners, awards nights, product launches and incentive trips, with garden terrace and club under one roof, 15 minutes from Gibraltar. Request a quote.',
    kicker: 'Corporate events',
    h1: 'Corporate Events',
    intro: [
      'Team dinners, awards nights, product launches, end-of-year parties and incentive trips. Ágora gives companies a venue that moves from a seated dinner to a party without changing address, fifteen minutes from Gibraltar and forty-five from Marbella.',
    ],
    sections: [
      { h2: 'Formats', body: ['Every event is built around your programme.'], bullets: ['Seated dinner with set menu on the garden terrace, from 25 guests', 'Standing cocktail reception with welcome drinks and canapés', 'Presentation or awards with stage, screen and microphones', 'After-party on the club floor with resident DJ and bottle service', 'Full-venue hire for conferences, launches and incentive groups'] },
      { h2: 'What is included', body: ['One contact from the first email to the night itself.'], bullets: ['Dedicated event manager', 'Menus adapted to dietary needs', 'Professional sound, lighting and screens', 'Branding of the space: logos on screens, signage and welcome', 'Invoice with VAT and a single point of contact', 'Help with transfers and hotel recommendations for groups from Gibraltar, Marbella and abroad'] },
      { h2: 'Why companies choose Ágora', body: ['Most corporate events end up in a hotel function room with a hired DJ. At Ágora the party is the venue: a real club floor, a team that runs it every week and a garden terrace for the dinner before. For Gibraltar companies it is the closest venue of its kind, and for teams flying in it is forty-five minutes from Marbella and an hour from Málaga airport.'] },
    ],
    faqs: [
      { q: 'Can we hire the venue on a weekday?', a: 'Yes. Outside club nights the venue is available for exclusive hire, including weekdays year-round.' },
      { q: 'Do you work with companies in Gibraltar?', a: 'A large share of our corporate clients are Gibraltar-based firms. The venue is fifteen minutes from the border.' },
      { q: 'Can you invoice a company abroad?', a: 'Yes. We invoice with Spanish VAT to companies in Spain, Gibraltar and the rest of the EU and UK.' },
      { q: 'How many people can a company dinner be?', a: 'Seated dinners start at 25 guests on the terrace. For larger groups we combine dinner with a reception format or move the party to the club floor. Tell us your numbers and we will propose the set-up.' },
      { q: 'Can we do a presentation before dinner?', a: 'Yes. Stage, screen, microphones and a technician are available for speeches, awards and product presentations.' },
    ],
    cta: { label: 'Request a quote', to: 'contact' },
  },

  christmas: {
    title: 'Christmas Parties and Group Dinners in Sotogrande · Ágora',
    description: 'Christmas parties at Ágora Sotogrande: group menus for companies and friends from 25 guests, afternoon tardeos and the party on the club floor. Book your date.',
    kicker: 'Christmas',
    h1: 'Christmas Parties',
    intro: [
      'Dinner first, party after, all in one place. Group menus for companies, clubs and groups of friends from late November through the holidays, with the club floor open after dinner and afternoon tardeos on weekends.',
    ],
    sections: [
      { h2: 'Group menus', body: ['Set menus for groups from 25 guests, with a welcome drink and wine included. Vegetarian, vegan and allergen-free options on every menu. Lunches and dinners available.'] },
      { h2: 'Tardeos', body: ['Through the Christmas season Ágora opens in the afternoon for tardeos: afterwork and afternoon sessions with DJ, drinks and tables, so you can celebrate with the team or your friends and still be home at a reasonable hour. Dates are published on the calendar.'] },
      { h2: 'The party after', body: ['Tables and bottle service on the club floor are reserved for dinner groups on request. Special nights over the holidays are announced on the calendar.'] },
      { h2: 'For companies', body: ['One invoice, one contact, a private area for your group and the option of exclusive hire for larger companies. Branding on the screens and a short awards or speech moment can be added.'] },
    ],
    faqs: [
      { q: 'When should we book?', a: 'December weekends fill up by mid-October. Weekdays and tardeos are usually available later.' },
      { q: 'What is the minimum group size?', a: 'Christmas menus are for groups of 25 or more. Smaller groups can join a tardeo or book a VIP table on a club night.' },
      { q: 'Can we do a lunch instead of a dinner?', a: 'Yes. Christmas lunches on the terrace are available for groups of 25 or more.' },
      { q: 'What is a tardeo?', a: 'An afternoon party, typically from mid-afternoon to late evening, with DJ, drinks and tables. Popular with companies and groups who want the party without the late night.' },
      { q: 'Can we reserve a table on the club floor after dinner?', a: 'Yes. Dinner groups have priority on VIP tables and bottle service for the same night; tell us when you book.' },
    ],
    cta: { label: 'Book your date', to: 'contact' },
  },

  weddings: {
    title: 'Pre-Wedding Dinners and Wedding Parties in Sotogrande · Ágora',
    description: 'Pre-wedding dinners, wedding parties and weddings at Ágora Sotogrande: dinner on the garden terrace and the party until late on the club floor. One venue, one team. Request a visit.',
    kicker: 'Weddings',
    h1: 'Pre-Weddings and Wedding Parties',
    intro: [
      'The night before, the party after, or the whole day. Ágora is built for the part of a wedding where everyone dances: a garden terrace for dinner under the palms and a club floor with no curfew at midnight, with no transfers between venues.',
    ],
    sections: [
      { h2: 'Pre-wedding dinners', body: ['The dinner the night before, for the two families and the friends who have travelled. A set menu on the terrace, a welcome drink in the garden and, if you want, the club floor afterwards. Groups from 25 guests.'] },
      { h2: 'Wedding parties', body: ['Ceremony and dinner elsewhere, party at Ágora. Guests arrive after dinner to a reserved venue, your playlist or our resident DJ, bottle service at the tables and a late bar. The easiest way to give a wedding a proper night out.'] },
      { h2: 'The whole day', body: ['For couples who want everything in one place.'], bullets: ['Welcome cocktail in the garden', 'Seated dinner on the terrace', 'First dance and party on the club floor with resident DJ or your own', 'Late bar and after-party', 'Exclusive hire of the whole venue'] },
      { h2: 'Also for', body: ['Rehearsal dinners, the day-after brunch, and engagement parties.'] },
    ],
    faqs: [
      { q: 'What time does the party end?', a: 'The club licence allows us to run until the early hours. We agree the end time with you.' },
      { q: 'Can we book only the party?', a: 'Yes. Wedding parties after a dinner elsewhere are one of our most common formats.' },
      { q: 'How many guests can a pre-wedding dinner be?', a: 'From 25 guests. Larger groups are welcome: tell us your numbers and we will suggest a seated dinner, a reception format or a mix of both.' },
      { q: 'Can we visit?', a: 'Yes. Send the form with your date and we will arrange a visit, ideally on an evening when the venue is set up.' },
    ],
    cta: { label: 'Request a visit', to: 'contact' },
  },

  birthdays: {
    title: 'Birthday Parties and VIP Tables in Sotogrande · Ágora',
    description: 'Birthdays at Ágora Sotogrande: VIP tables with bottle service and sparklers on club nights, group dinners and private parties. Book your table.',
    kicker: 'Birthdays and celebrations',
    h1: 'Birthdays and Celebrations',
    intro: [
      'A VIP table on a Saturday night with bottles arriving with sparklers, a group dinner for thirty on the terrace, or the whole venue for a milestone birthday. Pick the size; we do the rest.',
    ],
    sections: [
      { h2: 'VIP tables on club nights', body: ['The classic Ágora birthday. Book a VIP table for your group on any club night through the calendar: entry for everyone on the booking, a reserved table on the floor and bottle service all night.'], bullets: ['Bottles arrive at the table with sparklers', 'Name or “Happy Birthday” boards carried in with the bottles', 'Premium bottle packages on request', 'Deposit online, the rest settled on the night'] },
      { h2: 'Group dinners', body: ['A set menu on the garden terrace for groups from 25, then straight onto the club floor with a table reserved for the group.'] },
      { h2: 'Private parties', body: ['For a milestone birthday, exclusive hire of a space or the whole venue, with your own guest list, DJ and timings.'] },
    ],
    faqs: [
      { q: 'How do I book a VIP table for a club night?', a: 'Through the calendar: pick the night, then the table. A deposit is paid online and you receive the confirmation by email.' },
      { q: 'Is there a minimum spend?', a: 'Each table has a price for a set number of guests and bottles, plus a per-person supplement for extra guests. It is shown when you book.' },
      { q: 'Can we bring a cake?', a: 'We do not serve cakes. The birthday moment at Ágora is the bottle with sparklers and the name board at the table.' },
      { q: 'What time should we arrive?', a: 'Tables are held until the arrival time shown on the booking, usually 1:00 or 2:00 am. After that the table is released and the deposit is not refunded.' },
      { q: 'Is there an age limit?', a: 'Club nights are 18+. Private dinners and daytime events can be arranged for younger guests.' },
    ],
    cta: { label: 'Book a VIP table', to: 'events' },
  },

  graduations: {
    title: 'Graduation and End-of-Year Parties in Sotogrande · Ágora',
    description: 'Graduation parties at Ágora Sotogrande for schools and universities: dinner, party and a private, secure venue for end-of-year celebrations near Gibraltar and Marbella.',
    kicker: 'Graduations',
    h1: 'Graduations',
    intro: [
      'End-of-year parties for the schools and universities of Sotogrande, Gibraltar and the Costa del Sol. Dinner, a private party and a team used to working with schools and parents’ associations.',
    ],
    sections: [
      { h2: 'What we offer', body: ['The venue closed to the public for the school, with the kitchen, bar, DJ and security all in-house.'], bullets: ['Exclusive hire of the venue for the school, no outside public', 'Seated dinner or buffet, with non-alcoholic bars for under-18 events', 'DJ, photo wall and screens for the year’s photos', 'Security and controlled entry list', 'Pick-up point for parents and transfers'] },
      { h2: 'For organisers', body: ['One contact, one invoice. We send a proposal with menu, timings and price per student, and we can work with the parents’ association directly. Several international schools in the area return every year.'] },
      { h2: 'University and leavers’ parties', body: ['For over-18 groups the format opens up: VIP tables, bottle service and the club floor as on any Saturday, reserved for your group or as a private night.'] },
    ],
    faqs: [
      { q: 'Can you host under-18 events?', a: 'Yes, as private events with no alcohol service, controlled entry and an agreed end time.' },
      { q: 'How far in advance do schools book?', a: 'June dates are usually booked by February.' },
      { q: 'How many students can you take?', a: 'From 25 for a dinner up to a party format with the whole venue. Send us your numbers and we will tell you what fits.' },
      { q: 'Can parents attend?', a: 'Yes, for dinner or the first part of the evening, with a separate area if the school prefers.' },
    ],
    cta: { label: 'Request a proposal', to: 'contact' },
  },

  legal: {
    title: 'Legal Notice · Ágora Sotogrande',
    description: 'Legal notice and terms of use of agorasotogrande.com.',
    kicker: 'Legal',
    h1: 'Legal Notice',
    intro: ['This website is operated by [COMPANY LEGAL NAME], CIF [CIF], registered address [ADDRESS], Sotogrande, San Roque (Cádiz), Spain. Contact: info@agorasotogrande.com.'],
    sections: [
      { h2: 'Use of the site', body: ['Access to and use of this website is subject to these terms. The content is for information purposes; event availability and prices are confirmed in writing when you book.'] },
      { h2: 'Intellectual property', body: ['Texts, images, logos and video on this site belong to the operator or are used under licence. Reproduction without written permission is not allowed.'] },
      { h2: 'Applicable law', body: ['These terms are governed by Spanish law. Any dispute is submitted to the courts of San Roque (Cádiz).'] },
    ],
  },
  privacy: {
    title: 'Privacy Policy · Ágora Sotogrande',
    description: 'How Ágora Sotogrande collects and uses personal data from enquiries and bookings, under the GDPR and Spanish data protection law.',
    kicker: 'Legal',
    h1: 'Privacy Policy',
    intro: ['[COMPANY LEGAL NAME] is the data controller for the personal data you send through this website.'],
    sections: [
      { h2: 'What we collect and why', body: ['Name, email, phone and the details of your enquiry, to answer it and prepare a proposal. Legal basis: pre-contractual measures at your request.'] },
      { h2: 'How long we keep it', body: ['Enquiries are kept for one year. Data linked to a booking is kept for the period required by tax law.'] },
      { h2: 'Who we share it with', body: ['Nobody outside the company, except the providers who host this site and our email, under data processing agreements. Ticket and table sales are processed by FourVenues under its own privacy policy.'] },
      { h2: 'Your rights', body: ['Access, rectification, erasure, restriction, portability and objection, by writing to info@agorasotogrande.com. You can also complain to the Spanish Data Protection Agency (aepd.es).'] },
    ],
  },
  cookies: {
    title: 'Cookie Policy · Ágora Sotogrande',
    description: 'Cookies used on agorasotogrande.com and how to manage them.',
    kicker: 'Legal',
    h1: 'Cookie Policy',
    intro: ['This site uses its own technical cookies and, with your consent, analytics cookies.'],
    sections: [
      { h2: 'Technical cookies', body: ['Needed for the site to work and to remember your language and cookie choice. They do not need consent.'] },
      { h2: 'Analytics', body: ['Google Analytics 4, to understand how the site is used. Only loaded if you accept in the banner. You can change your choice at any time from the link in the footer.'] },
      { h2: 'Third parties', body: ['The event calendar is embedded from FourVenues and the Instagram feed is loaded from Instagram; both may set their own cookies when you interact with them.'] },
    ],
  },
};

const es: Dict = {
  about: {
    title: 'Quiénes somos · Ágora Sotogrande',
    description: 'Ágora Sotogrande nació para crear una experiencia de noche a la altura del destino más exclusivo del Mediterráneo: discoteca, terraza jardín y eventos privados en un mismo local.',
    kicker: 'Sobre nosotros',
    h1: 'Lo que nos hace únicos',
    intro: [
      'ÁGORA Sotogrande nace de una idea sencilla: crear una experiencia de noche a la altura de uno de los destinos más exclusivos del Mediterráneo.',
      'Fundado por un equipo de profesionales de la zona con años de experiencia en hostelería, entretenimiento y eventos, ÁGORA se ha convertido en el sitio donde la gente se junta para disfrutar de buena música, un ambiente distinto y noches que se recuerdan.',
    ],
    sections: [
      { h2: 'Quiénes somos', body: [
        'Inspirados por los locales de noche más reconocidos del mundo, hemos creado un espacio vivo y sofisticado para quienes valoran las experiencias de calidad y la buena compañía. Una noche con amigos, una celebración especial o una fiesta nueva: cada visita a ÁGORA está pensada para sentirse diferente.',
        'En el centro de nuestra filosofía está la idea de juntar a la gente a través de la música, la energía y las experiencias compartidas. Más que una discoteca, ÁGORA es el punto de encuentro de residentes, visitantes y de todo el que quiera formar parte de las mejores noches de Sotogrande.',
      ]},
      { h2: 'Un local hecho para la noche', body: [
        'Una terraza jardín bajo las palmeras, barra al aire libre y la pista a partir de medianoche. Cuatro noches residentes a la semana en temporada, mesas VIP con servicio de botellas y el local completo para eventos privados: cenas de grupo, fiestas de empresa, prebodas y graduaciones.',
      ], bullets: ['Pista con DJs residentes y artistas invitados', 'Terraza jardín y barra al aire libre', 'Mesas VIP y servicio de botellas todas las noches de club', 'Eventos privados para grupos de cualquier tamaño'] },
      { h2: 'Dónde estamos', body: [
        'Centro Comercial Mar y Sol, en Sotogrande (San Roque, Cádiz), en la Costa del Sol occidental. A quince minutos de Gibraltar, cuarenta y cinco de Marbella y una hora del aeropuerto de Málaga. Aparcamiento junto al local.',
      ]},
      { h2: 'Nuestras fiestas de verano', body: [
        'Cuatro noches a la semana todo el verano, cada una con su personalidad: Clandestina los martes, Oasis los jueves con una temática distinta cada semana, Perreo Lab los viernes y Daikiri los sábados. Fechas y entradas en el calendario.',
      ]},
    ],
    cta: { label: 'Ver el calendario', to: 'events' },
  },

  events: {
    title: 'Calendario de fiestas · Ágora Sotogrande',
    description: 'Las fiestas de cada semana en Ágora Sotogrande: Clandestina, Oasis, Perreo Lab y Daikiri. Fechas, horarios, entradas y mesas VIP de cada noche.',
    kicker: 'Calendario',
    h1: 'Próximas fiestas',
    intro: ['Todas las fiestas de Ágora, con entradas y mesas VIP. Compra online y entra directo.'],
    sections: [
      { h2: 'Entradas y mesas VIP', body: ['Cada noche tiene entradas generales y un número limitado de mesas VIP con servicio de botellas. Las mesas se venden por grupo con un depósito; el resto se paga la misma noche. La hora máxima de llegada para las mesas suele ser la 1:00, así que llega pronto.'] },
      { h2: 'Durante la temporada', body: ['La programación residente dura toda la temporada. Los eventos especiales, DJs invitados y noches de festivo se van añadiendo al calendario según se confirman.'] },
    ],
    faqs: [
      { q: '¿Necesito entrada si tengo mesa?', a: 'La reserva de mesa incluye la entrada de las personas que figuran en la reserva. Los invitados extra pagan el suplemento por persona que se indica al reservar.' },
      { q: '¿Hay código de vestimenta?', a: 'Arreglado. Muchas noches son temáticas; mira el evento en el calendario y disfrázate si te apetece.' },
      { q: '¿Cuál es la edad mínima?', a: 'Las noches de club son para mayores de 18. Trae el DNI.' },
      { q: '¿Puedo reservar mesa para un cumpleaños?', a: 'Sí. Reserva la mesa desde el calendario y cuéntanoslo en las notas; en la página de cumpleaños tienes lo que podemos añadir esa noche.' },
    ],
    cta: { label: '¿Celebras algo?', to: 'privateEvents', note: 'Las entradas y mesas se venden a través de FourVenues.' },
  },

  menu: {
    title: 'Cenas de grupo y menús · Ágora Sotogrande',
    description: 'Cenas de grupo en Ágora Sotogrande: menús reservados para empresas, celebraciones y grupos de amigos en la terraza jardín, y después la fiesta en la pista. Consulta los menús y reserva.',
    kicker: 'Cenas de grupo',
    h1: 'Cenas de grupo',
    intro: [
      'El restaurante de Ágora abre para grupos con reserva: cenas de empresa, cumpleaños, prebodas y grupos de amigos que quieren cenar y seguir de fiesta en el mismo sitio. No tenemos servicio para público general; cada cena se organiza con antelación con un menú cerrado.',
      'Cocina mediterránea con acento del sur, servida en la terraza jardín. Los menús cambian con la temporada; aquí tienes la versión actual.',
    ],
    sections: [
      { h2: 'Cómo funciona una cena de grupo', body: ['Dinos la fecha, el número de personas y la ocasión. Te enviamos los menús y un presupuesto, confirmas con un depósito y esa noche tu mesa está lista en la terraza, con la fiesta a unos pasos.'], bullets: ['Grupos a partir de 25 personas', 'Menús cerrados con copa de bienvenida y vino incluidos', 'Opciones vegetarianas, veganas y sin alérgenos en todos los menús', 'Mesas y servicio de botellas en la pista reservados para los grupos de cena'] },
    ],
    faqs: [
      { q: '¿Puedo reservar mesa para dos para cenar?', a: 'Por ahora no. Las cenas son para grupos con reserva a partir de 25 personas. Para salir de noche, reserva una mesa VIP en una noche de club desde el calendario.' },
      { q: '¿Hay cenas de grupo todo el año?', a: 'Sí, bajo reserva, también fuera de la temporada de club. Entre semana hay cenas disponibles para empresas.' },
      { q: '¿Podemos elegir los platos por separado?', a: 'Los menús se cierran por grupo para que la cocina sirva a todos a la vez, con alternativas para alergias e intolerancias elegidas con antelación.' },
    ],
    cta: { label: 'Reservar una cena de grupo', to: 'contact' },
  },

  contact: {
    title: 'Contacto y presupuestos · Ágora Sotogrande',
    description: 'Contacta con Ágora Sotogrande: eventos privados, cenas de grupo y eventos de empresa. Dirección, teléfono, horarios y formulario de contacto.',
    kicker: 'Contacto',
    h1: 'Contacto',
    intro: ['Cuéntanos qué quieres celebrar y te llamamos. Para entradas y mesas VIP en noches de club, usa el calendario.'],
    sections: [
      { h2: 'Dónde y cuándo', body: ['Centro Comercial Mar y Sol, Avenida Arenilla 2, 11310 Sotogrande, San Roque (Cádiz).', 'Los horarios cambian por temporada. Consulta el calendario de esta semana.'] },
      { h2: 'Síguenos', body: ['Vive la experiencia Ágora en redes sociales.'] },
    ],
  },

  privateEvents: {
    title: 'Eventos privados en Sotogrande · Ágora',
    description: 'Eventos privados en Ágora Sotogrande: eventos de empresa, cenas de Navidad, prebodas, cumpleaños y graduaciones en una terraza jardín y discoteca cerca de Gibraltar y Marbella. Pide presupuesto.',
    kicker: 'Eventos privados',
    h1: 'Celebra en Ágora',
    intro: [
      'Desde celebraciones íntimas y cumpleaños señalados hasta eventos de empresa exclusivos, ÁGORA ofrece un escenario único donde cada evento se convierte en una experiencia inolvidable. Nuestro equipo cuida cada detalle: servicio impecable, energía y una sofisticación sin esfuerzo.',
      'Cena, copas y fiesta en el mismo sitio, con un equipo que monta eventos todas las semanas de la temporada. Tú eliges el formato; nosotros ponemos la cocina, la barra, el sonido y las luces.',
    ],
    sections: [
      { h2: 'Espacios', body: ['Tres zonas que se reservan por separado o juntas, desde una cena de grupo hasta una fiesta con el local completo. Dinos cuántos sois y te proponemos cómo montarlo.'], bullets: ['Terraza jardín: cenas sentadas y cócteles bajo las palmeras', 'Barra al aire libre: recepciones de pie y copa de bienvenida', 'Pista: fiestas con equipo completo de sonido e iluminación, escenario y pantallas', 'Local completo: en exclusiva y con entrada privada'] },
      { h2: 'Lo que hacemos bien', body: ['Somos una discoteca antes que nada, así que la parte de un evento que más cuesta a otros locales, la fiesta, es la que nosotros hacemos cada semana. DJs residentes, sistema profesional de sonido e iluminación, personal de barra acostumbrado a servir a cientos de personas por hora y seguridad en la puerta.'], bullets: ['Responsable de evento desde el primer contacto hasta la noche', 'Menús cerrados de nuestra cocina, adaptados a alergias e intolerancias', 'Servicio de botellas y mesas VIP dentro de tu evento', 'DJ residente o tus propios artistas con nuestro equipo técnico', 'Pantallas y escenario para presentaciones, vídeos y discursos', 'Control de puerta, listas de invitados y seguridad'] },
      { h2: 'Tipos de evento', body: ['Cada uno tiene su página con formatos, detalles y respuestas a las preguntas habituales.'], bullets: ['Eventos de empresa y cenas de equipo', 'Cenas de Navidad y tardeos', 'Prebodas y fiestas de boda', 'Cumpleaños y mesas VIP', 'Graduaciones y fiestas de fin de curso'] },
      { h2: 'Cómo funciona', body: ['Envíanos el formulario con la fecha, el número de invitados y el tipo de evento. Respondemos en un día laborable con disponibilidad y propuesta. Los eventos se cierran con el presupuesto firmado y un depósito, no online.'] },
    ],
    faqs: [
      { q: '¿Cuál es el mínimo de invitados?', a: 'Las cenas de grupo empiezan en 25 personas. El local en exclusiva depende de la fecha y del formato, así que consúltanos con vuestro número.' },
      { q: '¿Cuál es el aforo máximo?', a: 'Depende del formato: una cena sentada, un cóctel y una fiesta en la pista funcionan de forma distinta entre la terraza y el interior. Dinos cuántos sois y te decimos qué encaja y cómo lo montaríamos.' },
      { q: '¿Podemos traer nuestro propio DJ o grupo?', a: 'Sí. La pista tiene equipo completo de sonido e iluminación; los artistas externos trabajan con nuestro equipo técnico.' },
      { q: '¿Se puede reservar el local entre semana?', a: 'Sí. Fuera de las noches de club el local está disponible en exclusiva, normalmente lunes, miércoles y domingo en temporada y casi cualquier día fuera de ella.' },
      { q: '¿Hay aparcamiento?', a: 'Aparcamiento junto al local en el centro comercial Mar y Sol, y servicio de taxi y transfer desde Sotogrande, Gibraltar y Marbella.' },
      { q: '¿Con cuánta antelación hay que reservar?', a: 'Los fines de semana de verano y diciembre se llenan con meses de antelación. Para una fecha entre semana o fuera de temporada suelen bastar unas semanas.' },
    ],
    cta: { label: 'Pide presupuesto', to: 'contact' },
  },

  corporate: {
    title: 'Eventos de empresa en Sotogrande · Ágora',
    description: 'Eventos de empresa en Ágora Sotogrande: cenas de equipo, entregas de premios, presentaciones de producto y viajes de incentivo, con terraza jardín y discoteca bajo el mismo techo, a 15 minutos de Gibraltar. Pide presupuesto.',
    kicker: 'Eventos de empresa',
    h1: 'Eventos de empresa',
    intro: [
      'Cenas de equipo, entregas de premios, presentaciones de producto, fiestas de fin de año y viajes de incentivo. Ágora da a las empresas un local que pasa de la cena sentada a la fiesta sin cambiar de dirección, a quince minutos de Gibraltar y cuarenta y cinco de Marbella.',
    ],
    sections: [
      { h2: 'Formatos', body: ['Cada evento se monta alrededor de tu programa.'], bullets: ['Cena sentada con menú cerrado en la terraza jardín, a partir de 25 personas', 'Cóctel de pie con copa de bienvenida y canapés', 'Presentación o entrega de premios con escenario, pantalla y micrófonos', 'After-party en la pista con DJ residente y servicio de botellas', 'Local completo para convenciones, lanzamientos y grupos de incentivo'] },
      { h2: 'Qué incluye', body: ['Un único interlocutor desde el primer email hasta la noche del evento.'], bullets: ['Responsable de evento', 'Menús adaptados a alergias e intolerancias', 'Sonido, iluminación y pantallas profesionales', 'Imagen de marca en el espacio: logos en pantallas, señalética y bienvenida', 'Factura con IVA y un único interlocutor', 'Ayuda con transfers y hoteles para grupos de Gibraltar, Marbella y del extranjero'] },
      { h2: 'Por qué las empresas eligen Ágora', body: ['La mayoría de eventos de empresa acaban en el salón de un hotel con un DJ contratado. En Ágora la fiesta es el local: una pista de verdad, un equipo que la gestiona cada semana y una terraza jardín para la cena de antes. Para las empresas de Gibraltar es el local más cercano de su tipo, y para equipos que vienen en avión está a cuarenta y cinco minutos de Marbella y a una hora del aeropuerto de Málaga.'] },
    ],
    faqs: [
      { q: '¿Se puede reservar el local entre semana?', a: 'Sí. Fuera de las noches de club el local está disponible en exclusiva, también entre semana durante todo el año.' },
      { q: '¿Trabajáis con empresas de Gibraltar?', a: 'Buena parte de nuestros clientes de empresa son firmas de Gibraltar. El local está a quince minutos de la frontera.' },
      { q: '¿Podéis facturar a una empresa extranjera?', a: 'Sí. Facturamos con IVA español a empresas de España, Gibraltar y el resto de la UE y Reino Unido.' },
      { q: '¿De cuántas personas puede ser una cena de empresa?', a: 'Las cenas sentadas empiezan en 25 personas en la terraza. Para grupos más grandes combinamos la cena con formato cóctel o llevamos la fiesta a la pista. Dinos cuántos sois y te proponemos el montaje.' },
      { q: '¿Podemos hacer una presentación antes de la cena?', a: 'Sí. Escenario, pantalla, micrófonos y un técnico para discursos, premios y presentaciones de producto.' },
    ],
    cta: { label: 'Pide presupuesto', to: 'contact' },
  },

  christmas: {
    title: 'Cenas de Navidad en Sotogrande · Ágora',
    description: 'Cenas de Navidad en Ágora Sotogrande: menús de grupo para empresas y amigos a partir de 25 personas, tardeos y fiesta en la pista. Reserva tu fecha.',
    kicker: 'Navidad',
    h1: 'Cenas de Navidad',
    intro: [
      'Primero la cena, después la fiesta, todo en el mismo sitio. Menús de grupo para empresas, clubes y grupos de amigos desde finales de noviembre y durante las fiestas, con la pista abierta después de cenar y tardeos los fines de semana.',
    ],
    sections: [
      { h2: 'Menús de grupo', body: ['Menús cerrados para grupos a partir de 25 personas, con copa de bienvenida y vino incluidos. Opciones vegetarianas, veganas y sin alérgenos en todos los menús. Comidas y cenas.'] },
      { h2: 'Tardeos', body: ['Durante la Navidad Ágora abre por la tarde para tardeos: sesiones de afterwork y de tarde con DJ, copas y mesas, para celebrarlo con el equipo o con los amigos y estar en casa a una hora razonable. Las fechas se publican en el calendario.'] },
      { h2: 'La fiesta de después', body: ['Las mesas y el servicio de botellas en la pista se reservan para los grupos de cena bajo petición. Las noches especiales de las fiestas se anuncian en el calendario.'] },
      { h2: 'Para empresas', body: ['Una factura, un interlocutor, una zona privada para tu grupo y la opción de local en exclusiva para empresas grandes. Se puede añadir imagen de marca en las pantallas y un momento de premios o discurso.'] },
    ],
    faqs: [
      { q: '¿Cuándo hay que reservar?', a: 'Los fines de semana de diciembre se llenan a mediados de octubre. Entre semana y los tardeos suele haber sitio más tarde.' },
      { q: '¿Cuál es el grupo mínimo?', a: 'Los menús de Navidad son para grupos de 25 o más. Los grupos más pequeños pueden venir a un tardeo o reservar una mesa VIP en una noche de club.' },
      { q: '¿Se puede hacer comida en vez de cena?', a: 'Sí. Comidas de Navidad en la terraza para grupos de 25 o más.' },
      { q: '¿Qué es un tardeo?', a: 'Una fiesta de tarde, normalmente desde media tarde hasta última hora, con DJ, copas y mesas. Muy popular entre empresas y grupos que quieren la fiesta sin trasnochar.' },
      { q: '¿Podemos reservar mesa en la pista después de cenar?', a: 'Sí. Los grupos de cena tienen prioridad en las mesas VIP y el servicio de botellas de esa misma noche; dínoslo al reservar.' },
    ],
    cta: { label: 'Reserva tu fecha', to: 'contact' },
  },

  weddings: {
    title: 'Prebodas y fiestas de boda en Sotogrande · Ágora',
    description: 'Prebodas, fiestas de boda y bodas en Ágora Sotogrande: cena en la terraza jardín y fiesta hasta tarde en la pista. Un local, un equipo. Pide una visita.',
    kicker: 'Bodas',
    h1: 'Prebodas y fiestas de boda',
    intro: [
      'La noche de antes, la fiesta de después o el día entero. Ágora está hecho para la parte de la boda en la que todo el mundo baila: una terraza jardín para cenar bajo las palmeras y una pista sin cierre a medianoche, sin traslados entre sitios.',
    ],
    sections: [
      { h2: 'Cenas de preboda', body: ['La cena de la noche anterior, para las dos familias y los amigos que han viajado. Menú cerrado en la terraza, copa de bienvenida en el jardín y, si queréis, la pista después. Grupos a partir de 25 personas.'] },
      { h2: 'Fiestas de boda', body: ['Ceremonia y cena en otro sitio, fiesta en Ágora. Los invitados llegan después de cenar a un local reservado, con vuestra playlist o nuestro DJ residente, servicio de botellas en las mesas y barra hasta tarde. La forma más fácil de darle a una boda una noche de verdad.'] },
      { h2: 'El día entero', body: ['Para parejas que lo quieren todo en el mismo sitio.'], bullets: ['Cóctel de bienvenida en el jardín', 'Cena sentada en la terraza', 'Primer baile y fiesta en la pista con DJ residente o el vuestro', 'Barra libre y after', 'Local completo en exclusiva'] },
      { h2: 'También para', body: ['Cenas de ensayo, el brunch del día siguiente y fiestas de pedida.'] },
    ],
    faqs: [
      { q: '¿A qué hora termina la fiesta?', a: 'La licencia de discoteca nos permite seguir hasta la madrugada. La hora de cierre la acordamos con vosotros.' },
      { q: '¿Podemos reservar solo la fiesta?', a: 'Sí. La fiesta de boda después de una cena en otro sitio es uno de nuestros formatos más habituales.' },
      { q: '¿De cuántas personas puede ser una cena de preboda?', a: 'A partir de 25. Los grupos grandes son bienvenidos: dinos cuántos sois y os proponemos cena sentada, formato cóctel o una mezcla de ambos.' },
      { q: '¿Podemos visitar el local?', a: 'Sí. Enviadnos el formulario con vuestra fecha y organizamos una visita, mejor una tarde con el local montado.' },
    ],
    cta: { label: 'Pide una visita', to: 'contact' },
  },

  birthdays: {
    title: 'Cumpleaños y celebraciones en Sotogrande · Ágora',
    description: 'Cumpleaños en Ágora Sotogrande: mesas VIP con servicio de botellas y bengalas en noches de club, cenas de grupo y fiestas privadas. Reserva tu mesa.',
    kicker: 'Cumpleaños y celebraciones',
    h1: 'Cumpleaños y celebraciones',
    intro: [
      'Una mesa VIP un sábado por la noche con las botellas llegando con bengalas, una cena de grupo para treinta en la terraza o el local entero para un cumpleaños redondo. Elige el tamaño; del resto nos encargamos nosotros.',
    ],
    sections: [
      { h2: 'Mesas VIP en noches de club', body: ['El cumpleaños clásico de Ágora. Reserva una mesa VIP para tu grupo cualquier noche de club desde el calendario: entrada para todos los de la reserva, mesa reservada en la pista y servicio de botellas toda la noche.'], bullets: ['Las botellas llegan a la mesa con bengalas', 'Carteles con el nombre o “Feliz cumpleaños” que entran con las botellas', 'Packs de botellas premium bajo petición', 'Depósito online y el resto se paga esa noche'] },
      { h2: 'Cenas de grupo', body: ['Menú cerrado en la terraza jardín para grupos a partir de 25, y después directo a la pista con una mesa reservada para el grupo.'] },
      { h2: 'Fiestas privadas', body: ['Para un cumpleaños redondo, un espacio o el local completo en exclusiva, con vuestra lista de invitados, DJ y horarios.'] },
    ],
    faqs: [
      { q: '¿Cómo reservo una mesa VIP para una noche de club?', a: 'Desde el calendario: eliges la noche y después la mesa. Se paga un depósito online y recibes la confirmación por email.' },
      { q: '¿Hay consumo mínimo?', a: 'Cada mesa tiene un precio para un número de personas y botellas, más un suplemento por persona extra. Se ve al reservar.' },
      { q: '¿Podemos traer tarta?', a: 'No servimos tartas. El momento cumpleaños en Ágora es la botella con bengalas y el cartel con el nombre en la mesa.' },
      { q: '¿A qué hora hay que llegar?', a: 'Las mesas se mantienen hasta la hora de llegada indicada en la reserva, normalmente la 1:00 o las 2:00. Después la mesa se libera y el depósito no se devuelve.' },
      { q: '¿Hay límite de edad?', a: 'Las noches de club son para mayores de 18. Las cenas privadas y los eventos de día se pueden organizar para invitados más jóvenes.' },
    ],
    cta: { label: 'Reservar mesa VIP', to: 'events' },
  },

  graduations: {
    title: 'Graduaciones en Sotogrande · Ágora',
    description: 'Fiestas de graduación en Ágora Sotogrande para colegios y universidades: cena, fiesta y un local privado y seguro para las celebraciones de fin de curso cerca de Gibraltar y Marbella.',
    kicker: 'Graduaciones',
    h1: 'Graduaciones',
    intro: [
      'Fiestas de fin de curso para los colegios y universidades de Sotogrande, Gibraltar y la Costa del Sol. Cena, fiesta privada y un equipo acostumbrado a trabajar con colegios y AMPAs.',
    ],
    sections: [
      { h2: 'Qué ofrecemos', body: ['El local cerrado al público para el colegio, con cocina, barra, DJ y seguridad propios.'], bullets: ['Local en exclusiva para el colegio, sin público externo', 'Cena sentada o bufé, con barras sin alcohol en eventos de menores', 'DJ, photocall y pantallas con las fotos del curso', 'Seguridad y lista de acceso controlada', 'Punto de recogida para padres y transfers'] },
      { h2: 'Para organizadores', body: ['Un solo interlocutor y una sola factura. Enviamos propuesta con menú, horarios y precio por alumno, y podemos tratar directamente con el AMPA. Varios colegios internacionales de la zona repiten cada año.'] },
      { h2: 'Universidad y fin de etapa', body: ['Para grupos mayores de 18 el formato se abre: mesas VIP, servicio de botellas y la pista como cualquier sábado, reservada para vuestro grupo o como noche privada.'] },
    ],
    faqs: [
      { q: '¿Hacéis eventos para menores de 18?', a: 'Sí, como eventos privados sin servicio de alcohol, con acceso controlado y hora de cierre acordada.' },
      { q: '¿Con cuánta antelación reservan los colegios?', a: 'Las fechas de junio suelen estar reservadas en febrero.' },
      { q: '¿Cuántos alumnos podéis acoger?', a: 'Desde 25 para una cena hasta formato fiesta con el local completo. Dinos cuántos sois y te decimos qué encaja.' },
      { q: '¿Pueden asistir los padres?', a: 'Sí, a la cena o a la primera parte de la noche, con una zona separada si el colegio lo prefiere.' },
    ],
    cta: { label: 'Pide propuesta', to: 'contact' },
  },

  legal: {
    title: 'Aviso legal · Ágora Sotogrande',
    description: 'Aviso legal y condiciones de uso de agorasotogrande.com.',
    kicker: 'Legal',
    h1: 'Aviso legal',
    intro: ['Este sitio web es titularidad de [RAZÓN SOCIAL], CIF [CIF], con domicilio en [DIRECCIÓN], Sotogrande, San Roque (Cádiz). Contacto: info@agorasotogrande.com.'],
    sections: [
      { h2: 'Uso del sitio', body: ['El acceso y uso de este sitio web se rigen por estas condiciones. El contenido es informativo; la disponibilidad y los precios de los eventos se confirman por escrito al reservar.'] },
      { h2: 'Propiedad intelectual', body: ['Los textos, imágenes, logotipos y vídeos de este sitio pertenecen al titular o se usan bajo licencia. No está permitida su reproducción sin autorización escrita.'] },
      { h2: 'Legislación aplicable', body: ['Estas condiciones se rigen por la legislación española. Cualquier conflicto se somete a los juzgados de San Roque (Cádiz).'] },
    ],
  },
  privacy: {
    title: 'Política de privacidad · Ágora Sotogrande',
    description: 'Cómo recoge y usa Ágora Sotogrande los datos personales de consultas y reservas, conforme al RGPD y la LOPDGDD.',
    kicker: 'Legal',
    h1: 'Política de privacidad',
    intro: ['[RAZÓN SOCIAL] es la responsable del tratamiento de los datos personales que envías a través de este sitio web.'],
    sections: [
      { h2: 'Qué datos recogemos y para qué', body: ['Nombre, email, teléfono y los detalles de tu consulta, para responderla y preparar una propuesta. Base legal: medidas precontractuales a petición del interesado.'] },
      { h2: 'Cuánto tiempo los guardamos', body: ['Las consultas se conservan un año. Los datos vinculados a una reserva se conservan el plazo que exige la normativa fiscal.'] },
      { h2: 'Con quién los compartimos', body: ['Con nadie fuera de la empresa, salvo los proveedores que alojan este sitio y nuestro correo, bajo contrato de encargado de tratamiento. La venta de entradas y mesas la gestiona FourVenues bajo su propia política de privacidad.'] },
      { h2: 'Tus derechos', body: ['Acceso, rectificación, supresión, limitación, portabilidad y oposición, escribiendo a info@agorasotogrande.com. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).'] },
    ],
  },
  cookies: {
    title: 'Política de cookies · Ágora Sotogrande',
    description: 'Cookies que usa agorasotogrande.com y cómo gestionarlas.',
    kicker: 'Legal',
    h1: 'Política de cookies',
    intro: ['Este sitio usa cookies técnicas propias y, con tu consentimiento, cookies de analítica.'],
    sections: [
      { h2: 'Cookies técnicas', body: ['Necesarias para que el sitio funcione y recuerde tu idioma y tu elección de cookies. No requieren consentimiento.'] },
      { h2: 'Analítica', body: ['Google Analytics 4, para entender cómo se usa el sitio. Solo se carga si aceptas en el aviso. Puedes cambiar tu elección en cualquier momento desde el enlace del pie de página.'] },
      { h2: 'Terceros', body: ['El calendario de eventos está incrustado desde FourVenues y el feed de Instagram se carga desde Instagram; ambos pueden instalar sus propias cookies cuando interactúas con ellos.'] },
    ],
  },
};

export const pages: Record<Locale, Dict> = { en, es };

export const weeklyNights = [
  { day: { en: 'Tuesday', es: 'Martes' }, name: 'Clandestina', time: '23:00', weekday: 'Tuesday', poster: 'tuesday' as const, desc: { en: "Sotogrande's most underground night.", es: 'La noche más underground de Sotogrande.' } },
  { day: { en: 'Thursday', es: 'Jueves' }, name: 'Oasis', time: '23:30', weekday: 'Thursday', poster: 'oasis' as const, desc: { en: 'A different theme every Thursday: foam, Candyland, Carnaval and more.', es: 'Una temática distinta cada jueves: espuma, Candyland, Carnaval y más.' } },
  { day: { en: 'Friday', es: 'Viernes' }, name: 'Perreo Lab', time: '23:30', weekday: 'Friday', poster: 'perreo' as const, desc: { en: 'Reggaeton and urban, unfiltered.', es: 'Reggaetón y urbano sin filtro.' } },
  { day: { en: 'Saturday', es: 'Sábado' }, name: 'Daikiri', time: '23:30', weekday: 'Saturday', poster: 'saturday' as const, desc: { en: 'Tropical flavour for summer nights.', es: 'Sabor tropical para las noches de verano.' } },
];
