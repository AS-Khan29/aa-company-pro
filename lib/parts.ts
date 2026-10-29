// Keyword landing pages for /parts/[slug].
// Content is drawn from A & A Company's own price lists in /public
// (multi-brand-parts-catalog.pdf, shock-absorbers-price-list.pdf) and the
// existing site copy. Keep claims here in line with what the business stocks.

export type PartsFaq = { q: string; a: string };

export type PartsPage = {
  slug: string;
  /** Short label used in nav, cards and breadcrumbs */
  label: string;
  /** Visible H1 */
  h1: string;
  /** <title> (the layout appends "| A & A Company") */
  title: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  models: string[];
  categories: string[];
  /** Real lines taken from the price list PDFs */
  sampleItems?: string[];
  catalogPdf?: { href: string; label: string };
  faqs: PartsFaq[];
};

const MULTI_BRAND_PDF = {
  href: '/multi-brand-parts-catalog.pdf',
  label: 'Download the multi-brand parts price list (PDF)',
};
const SHOCKS_PDF = {
  href: '/shock-absorbers-price-list.pdf',
  label: 'Download the shock absorbers list (PDF)',
};

const orderFaq = (brand: string): PartsFaq => ({
  q: `How do I order ${brand} spare parts from A & A Company?`,
  a: `Call or WhatsApp +92-321-2472470, email info@aandacompany.com, or send a quote request with the part name, part number or vehicle model. Bulk pricing applies to orders of 25 units or more.`,
});

const deliveryFaq: PartsFaq = {
  q: 'Do you deliver outside Karachi?',
  a: 'Yes. We are based on Preedy Street, Saddar, Karachi and supply workshops, fleet operators and dealers across Pakistan. Contact us with your city and order details for delivery arrangements.',
};

export const PARTS_PAGES: PartsPage[] = [
  {
    slug: 'hino-truck-parts',
    label: 'HINO Truck Parts',
    h1: 'HINO Truck Spare Parts in Karachi',
    title: 'HINO Truck Spare Parts in Karachi, Pakistan',
    metaDescription:
      'HINO truck spare parts supplier in Karachi since 1993: engine, transmission, brake, radiator and cooling parts, heavy-duty shock absorbers and cabin shocks. Bulk supply across Pakistan.',
    keywords: [
      'Hino truck parts Pakistan',
      'Hino spare parts Karachi',
      'Hino truck spare parts price',
      'Hino 500 parts',
      'Hino cabin shock absorber',
      'Hino brake parts',
    ],
    intro:
      'A & A Company has supplied HINO truck components to fleet operators, workshops and defence-sector buyers from Karachi for decades. We source engine, transmission, braking and cooling parts for HINO trucks, plus heavy-duty front and rear shock absorbers and cabin shocks.',
    models: ['HINO heavy-duty trucks', 'HINO Super', 'HINO FY'],
    categories: [
      'Engine block assemblies and engine components',
      'Transmission units',
      'Brake pad sets and brake assemblies',
      'Radiator assemblies and cooling systems',
      'Heavy-duty front & rear shock absorbers',
      'Cabin shocks (HINO Super, L6, FY)',
    ],
    sampleItems: [
      'HINO HEAVY DUTY shock absorbers (front & rear)',
      'HINO / ISUZU HEAVY DUTY shock absorbers',
      'HINO SUPER / L6 cabin shocks',
      'HINO FY cabin shocks (new addition)',
    ],
    catalogPdf: SHOCKS_PDF,
    faqs: [
      {
        q: 'Which HINO truck parts do you supply?',
        a: 'Engine, transmission, brake, radiator and cooling-system parts, heavy-duty shock absorbers and cabin shocks. For parts not listed, send us the part number and we will source it.',
      },
      orderFaq('HINO'),
      deliveryFaq,
    ],
  },
  {
    slug: 'isuzu-truck-parts',
    label: 'Isuzu Truck Parts',
    h1: 'Isuzu Truck Spare Parts in Karachi',
    title: 'Isuzu Truck Spare Parts in Karachi, Pakistan',
    metaDescription:
      'Isuzu truck spare parts in Karachi: hydraulic pumps, cooling fans, fuel injectors, starter motors, heavy-duty shock absorbers and steering dampers. Wholesale supply across Pakistan.',
    keywords: [
      'Isuzu truck parts Pakistan',
      'Isuzu spare parts Karachi',
      'Isuzu fuel injector price',
      'Isuzu starter motor',
      'Isuzu shock absorber',
    ],
    intro:
      'We supply Isuzu truck and bus parts to logistics fleets and workshops across Pakistan, covering hydraulic, cooling, fuel-injection and starting systems along with heavy-duty suspension parts.',
    models: ['Isuzu trucks', 'Isuzu / Daewoo buses', 'Isuzu heavy-duty'],
    categories: [
      'Hydraulic pumps',
      'Electric cooling fan assemblies',
      'Fuel injectors',
      'Heavy-duty starter motors',
      'Front & rear shock absorbers',
      'Steering dampers',
    ],
    sampleItems: [
      'DAEWOO BUS / ISUZU YELLOW shock absorbers',
      'HINO / ISUZU HEAVY DUTY shock absorbers',
      'ISUZU / SJ 410 Potohar / Willys Jeep steering damper',
    ],
    catalogPdf: SHOCKS_PDF,
    faqs: [
      {
        q: 'Do you stock Isuzu fuel injectors and starter motors?',
        a: 'Yes. We supply precision fuel injectors, heavy-duty starter motors, hydraulic pumps and cooling fans for Isuzu trucks. Contact us with the model or part number for price and availability.',
      },
      orderFaq('Isuzu'),
      deliveryFaq,
    ],
  },
  {
    slug: 'land-rover-defender-parts',
    label: 'Land Rover Defender Parts',
    h1: 'Land Rover Defender Spare Parts in Pakistan',
    title: 'Land Rover Defender Spare Parts in Pakistan',
    metaDescription:
      'Land Rover Defender spare parts in Karachi: suspension kits, shock absorbers, fuel tanks, alternators, batteries and electrical parts. Defence and civilian supply across Pakistan.',
    keywords: [
      'Land Rover Defender parts Pakistan',
      'Defender spare parts Karachi',
      'Defender shock absorber',
      'Defender suspension kit',
      'Range Rover steering damper',
    ],
    intro:
      'A & A Company supplies Land Rover Defender parts for defence-sector and civilian fleets, from complete suspension kits and shock absorbers to fuel, electrical and battery systems.',
    models: ['Land Rover Defender', 'Range Rover'],
    categories: [
      'Complete suspension kits',
      'Shock absorbers',
      'Steering dampers (Range Rover)',
      'Stainless steel fuel tanks',
      'Heavy-duty alternators',
      'Batteries and electrical components',
    ],
    sampleItems: [
      'LAND ROVER DEFENDER shock absorbers',
      'RANGE ROVER steering damper',
    ],
    catalogPdf: SHOCKS_PDF,
    faqs: [
      {
        q: 'Which Defender parts are available?',
        a: 'Suspension kits, shock absorbers, fuel tanks, alternators, batteries and electrical parts. Send the part number for anything else and we will confirm availability.',
      },
      orderFaq('Land Rover Defender'),
      deliveryFaq,
    ],
  },
  {
    slug: 'shock-absorbers',
    label: 'Shock Absorbers',
    h1: 'Shock Absorbers in Karachi for Cars, Pickups & Trucks',
    title: 'Shock Absorbers Price List in Pakistan: Cars, Hiace, Hino',
    metaDescription:
      'Front & rear shock absorbers in Karachi for Corolla, Mehran, Cultus, Alto, Wagon R, City, Civic, Hiace, Hilux, Vigo, Revo, Hino, Isuzu and Defender, plus steering dampers and cabin shocks.',
    keywords: [
      'shock absorbers price in Pakistan',
      'shock absorber Karachi',
      'Corolla shock absorber price',
      'Mehran shock absorber price',
      'Hiace shock absorber',
      'Hino cabin shock',
      'steering damper Pakistan',
    ],
    intro:
      'Our shock absorber range covers popular Pakistani cars, vans, pickups, jeeps and heavy trucks, with front and rear units, steering dampers and HINO cabin shocks. Download the compatibility list below and contact us for current prices.',
    models: [
      'Toyota Corolla (Indus, XLi/GLi, Grande)',
      'Toyota Corolla Cross, Yaris, Axio / Premio, Vitz',
      'Toyota Hiace, Hilux 4x2 & 4x4, Vigo, Revo, Fortuner',
      'Suzuki Mehran, Alto 660cc, Cultus, Wagon R, Swift',
      'Suzuki Khyber, Liana / Baleno, Jimny, Potohar',
      'Honda City GM & Civic Reborn',
      'Hyundai Santro, Shehzore, Daihatsu Cuore',
      'Mazda T-3500, Land Rover Defender',
      'HINO and Isuzu heavy-duty, Daewoo buses',
    ],
    categories: [
      'Standard front & rear shock absorbers',
      'Heavy-duty truck and bus shock absorbers',
      'Steering dampers',
      'Cabin shocks',
    ],
    sampleItems: [
      'COROLLA (2014 onwards) (Grande)',
      'COROLLA (2009-2013) (XLi-GLi)',
      'MEHRAN 800 CC',
      'ALTO 660 CC',
      'HONDA CITY GM & CIVIC REBORN',
      'REVO / VIGO 4x4 / FORTUNER',
      'HIACE / SHAHZORE / WILLYS JEEP / HILUX 4x2',
      'HINO HEAVY DUTY',
    ],
    catalogPdf: SHOCKS_PDF,
    faqs: [
      {
        q: 'What is the shock absorber price for my car?',
        a: 'Prices change with stock and brand. Download our compatibility list, then call or WhatsApp +92-321-2472470 with your vehicle model for the current price.',
      },
      {
        q: 'Do you have shock absorbers for vehicles not on the list?',
        a: 'More vehicles are being added. Contact us with your make and model and we will check availability.',
      },
      orderFaq('shock absorber'),
    ],
  },
  {
    slug: 'toyota-spare-parts',
    label: 'Toyota Spare Parts',
    h1: 'Toyota Spare Parts in Karachi',
    title: 'Toyota Spare Parts in Karachi: Hiace, Hilux, Corolla',
    metaDescription:
      'Toyota spare parts wholesale in Karachi for Hiace, Hilux, Vigo, Revo, Corolla, Vitz and Land Cruiser: NABCO brake and clutch repair kits, fuel pumps, belts, filters and more. 200+ items listed.',
    keywords: [
      'Toyota spare parts Karachi',
      'Toyota parts price in Pakistan',
      'Hiace spare parts',
      'Hilux spare parts',
      'Vigo spare parts',
      'Corolla spare parts',
      'NABCO brake master cylinder kit',
    ],
    intro:
      'Our Toyota range is the largest section of our price list, with more than 200 coded items for Hiace, Hilux, Vigo, Revo, Corolla, Vitz and older Land Cruiser models. Most lines are NABCO, with Japanese and Taiwanese alternatives.',
    models: [
      'Hiace (2TR, 2005)',
      'Hilux, Vigo, Revo',
      'Corolla (KE, EE80, EE90, EE100, Altis, NZE)',
      'Vitz',
      'Land Cruiser FJ40, BJ40/60, HZJ80',
    ],
    categories: [
      'Brake & clutch master cylinders and repair kits',
      'Disc brake seal kits',
      'Fan belts',
      'Carburetor and distributor parts',
      'Fuel and diesel feed pumps',
      'Door locks, handles, mirrors and lamps',
      'Radiator parts and oil gauges',
      'Power steering kits and wiper blades',
    ],
    sampleItems: [
      'NABCO BRAKE M CYLINDER HIACE 2005',
      'NABCO CLUTCH M CYLINDER HIACE/05 2TR',
      'NABCO B.M.C REPAIR KIT EE80 12130 13/16"',
      'NABCO SEAL KIT DISC BRAKE ALTIS',
      'NABCO DIESEL FEED PUMP HILUX',
      'NABCO FEED PUMP VIGO / REVO',
      'NABCO BELT FAN 5PK1070',
      'NABCO HANDLE INNER VIGO',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [
      {
        q: 'Do you stock Toyota Hiace and Hilux spare parts?',
        a: 'Yes. Hiace, Hilux, Vigo and Revo are among our most-stocked models, including brake and clutch cylinders, repair kits, feed pumps, belts and body parts.',
      },
      orderFaq('Toyota'),
      deliveryFaq,
    ],
  },
  {
    slug: 'suzuki-spare-parts',
    label: 'Suzuki Spare Parts',
    h1: 'Suzuki Spare Parts in Karachi',
    title: 'Suzuki Spare Parts in Karachi: Mehran, Cultus, Bolan',
    metaDescription:
      'Suzuki spare parts in Karachi for Mehran, Cultus, Khyber, FX, Bolan (ST308), Potohar (SJ410), Swift, Liana and Vitara: carburetor, distributor, fuel pump, wiper and engine parts.',
    keywords: [
      'Suzuki spare parts Karachi',
      'Mehran spare parts price',
      'Cultus spare parts',
      'Bolan spare parts',
      'Potohar SJ410 parts',
      'Khyber spare parts',
    ],
    intro:
      'We stock fast-moving Suzuki parts for the cars and carry vans that keep Pakistan moving, from Mehran and Cultus to Bolan (ST308) and Potohar (SJ410).',
    models: [
      'Mehran',
      'Cultus (carb & EFI)',
      'Khyber, FX',
      'Bolan / Ravi (ST308)',
      'Potohar / Jeep (SJ410)',
      'Swift, Liana, Vitara, APV',
    ],
    categories: [
      'Carburetor parts (needle valves, plunger pumps)',
      'Distributor caps and modules',
      'Fuel pumps, fuel filters, fuel tank caps and gauges',
      'Oil pump kits and synchro rings',
      'Fuel locks, handles and switches',
      'Wiper blades and wiper arms',
      'Radiator caps',
    ],
    sampleItems: [
      'NABCO DISTRIBUTOR CAP CULTUS',
      'NABCO DISTRIBUTOR CAP ST-308',
      'NABCO FUEL PUMP SJ410',
      'NABCO FUEL FILTER CULTUS EFI',
      'NABCO OIL PUMP KIT ST308',
      'NABCO FUEL LOCK MEHRAN',
      'SOFT WIPER BLADE+ARM MEHRAN',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [
      {
        q: 'Which Suzuki models do you have parts for?',
        a: 'Mehran, Cultus, Khyber, FX, Bolan/Ravi (ST308), Potohar (SJ410), Swift, Liana, Vitara and APV. Contact us for models not listed.',
      },
      orderFaq('Suzuki'),
      deliveryFaq,
    ],
  },
  {
    slug: 'honda-spare-parts',
    label: 'Honda Spare Parts',
    h1: 'Honda Civic & City Spare Parts in Karachi',
    title: 'Honda Civic & City Spare Parts in Karachi',
    metaDescription:
      'Honda Civic and City spare parts in Karachi: brake master cylinders, oil pump kits, thermostats, bearings, handles, lamps, bumper clips and wiper arms for 1988-2009 models.',
    keywords: [
      'Honda spare parts Karachi',
      'Honda Civic spare parts price',
      'Honda City spare parts',
      'Civic oil pump kit',
      'Civic brake master cylinder',
    ],
    intro:
      'Our Honda section focuses on Civic and City, the two Honda models with the most demand in Pakistan, across generations from 1988 to 2009.',
    models: [
      'Civic 1988, 1992, 1996, 2004, 2009',
      'City 1996, 2003',
      'Accord (carburetor models)',
    ],
    categories: [
      'Brake master cylinders',
      'Oil pump kits',
      'Thermostats and thermostat covers',
      'Bearings, bushes and bigends',
      'Fuel filters and carburetor parts',
      'Outer handles, lamps and bumper clips',
      'Wiper arms',
    ],
    sampleItems: [
      'NABCO KIT OIL PUMP CIVIC 2004',
      'NABCO KIT OIL PUMP CIVIC 96',
      'ASCO BRAKE M CYLINDER CIVIC 96 7/8"',
      'TAIWAN THERMOSTAT COVER CIVIC 96',
      'TAIWAN HANDLE OUTER CITY 96',
      'SOFT WIPER ARM CIVIC 2009',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [orderFaq('Honda'), deliveryFaq],
  },
  {
    slug: 'hyundai-spare-parts',
    label: 'Hyundai Spare Parts',
    h1: 'Hyundai Santro & Shehzore Spare Parts in Karachi',
    title: 'Hyundai Santro & Shehzore Spare Parts in Karachi',
    metaDescription:
      'Hyundai spare parts in Karachi for Santro, Shehzore and Excel: brake and clutch repair kits, sensors, crank sprockets, piston rings (MOBIS), fuel pumps, switches and wiper blades.',
    keywords: [
      'Hyundai spare parts Karachi',
      'Santro spare parts',
      'Shehzore spare parts',
      'Shehzore parts price',
      'MOBIS parts Pakistan',
    ],
    intro:
      'We carry Hyundai parts for Santro and the Shehzore light truck, including MOBIS piston rings alongside NABCO, Korean and Taiwanese lines.',
    models: ['Santro, Santro Club', 'Shehzore', 'Excel'],
    categories: [
      'Brake and clutch master cylinder repair kits',
      'Cam and crank sensors, MAP sensors',
      'Crank sprockets and timing parts',
      'Piston rings (MOBIS)',
      'Fuel pumps, filters and gauges',
      'Switches, lamps and wiper blades',
    ],
    sampleItems: [
      'NABCO BMC REPAIR KIT SHEHZORE 1"',
      'KOREA CMC REPAIR KIT SHEHZORE',
      'MOBIS PISTON RING SANTRO',
      'SOFT CRANK SPROCKET SHAFT SANTRO CLUB',
      'NABCO FUEL PUMP SANTRO',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [orderFaq('Hyundai'), deliveryFaq],
  },
  {
    slug: 'daihatsu-spare-parts',
    label: 'Daihatsu Spare Parts',
    h1: 'Daihatsu Cuore & Charade Spare Parts in Karachi',
    title: 'Daihatsu Cuore & Charade Spare Parts in Karachi',
    metaDescription:
      'Daihatsu Cuore and Charade (G10, G11) spare parts in Karachi: carburetor jets and needle valves, oil pump kits, distributor caps, thrust washers, door locks, switches and wipers.',
    keywords: [
      'Daihatsu Cuore spare parts',
      'Cuore parts price',
      'Daihatsu Charade parts',
      'Daihatsu spare parts Karachi',
    ],
    intro:
      'Parts for Daihatsu Cuore and Charade (G10/G11), still common on Pakistani roads, from carburetor and distributor parts to engine and body items.',
    models: ['Cuore', 'Charade G10, G11, G11R'],
    categories: [
      'Carburetor main jets and needle valves',
      'Oil pump kits and thrust washers',
      'Distributor caps and ignition coils',
      'Door locks, switches and handles',
      'Clutch cables, wipers and antennas',
    ],
    sampleItems: [
      'NABCO OIL PUMP KIT COURE OLD',
      'NABCO OIL PUMP KIT G11',
      'JAPAN DISTRIBUTOR CAP COURE 2004',
      'NABCO CABLE CLUTCH COURE REAR',
      'TAIWAN SWITCH IGNITION G11',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [orderFaq('Daihatsu'), deliveryFaq],
  },
  {
    slug: 'mitsubishi-spare-parts',
    label: 'Mitsubishi Spare Parts',
    h1: 'Mitsubishi L200, Pajero & Lancer Spare Parts',
    title: 'Mitsubishi L200, Pajero & Lancer Spare Parts in Karachi',
    metaDescription:
      'Mitsubishi spare parts in Karachi for L200, L300, Pajero, Lancer and Fuso: brake and clutch cylinder repair kits, disc seal kits, carburetor kits and valve lifters.',
    keywords: [
      'Mitsubishi spare parts Karachi',
      'L200 spare parts',
      'Pajero spare parts Pakistan',
      'Lancer spare parts',
    ],
    intro:
      'Brake, clutch and engine parts for Mitsubishi pickups, jeeps and cars, plus Fuso clutch cylinders.',
    models: ['L200, L300', 'Pajero', 'Lancer', 'Fuso'],
    categories: [
      'Brake and clutch master/operating cylinder repair kits',
      'Disc seal kits',
      'Carburetor repair and packing kits',
      'Valve lifters, rocker and timing parts',
    ],
    sampleItems: [
      'NABCO CMC REPAIR KIT L200 / L300 NEW 3/4"',
      'NABCO COC REPAIR KIT PAJERO 87 3/4"',
      'NABCO DISC SEAL KIT L200 NEW',
      'NABCO CARB REPAIR KIT LANCER',
      'TAIWAN CLUTCH M CYLINDER FUSO',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [orderFaq('Mitsubishi'), deliveryFaq],
  },
  {
    slug: 'nissan-spare-parts',
    label: 'Nissan Spare Parts',
    h1: 'Nissan Sunny Spare Parts in Karachi',
    title: 'Nissan Sunny (B11, B12, B13, B310) Spare Parts in Karachi',
    metaDescription:
      'Nissan Sunny spare parts in Karachi for B11, B12, B13 and B310: carburetor kits, brake master cylinders, fuel gauges, locks, handles, gear lever kits and wipers.',
    keywords: [
      'Nissan Sunny spare parts',
      'Nissan spare parts Karachi',
      'Sunny B12 parts',
      'Sunny B310 parts',
    ],
    intro:
      'Parts for classic Nissan Sunny models still running in Pakistan, covering carburetor, brake, fuel, body and gearbox items.',
    models: ['Sunny B11, B12, B13', 'B310, B210, B110'],
    categories: [
      'Carburetor repair kits, jets and needle valves',
      'Brake and clutch master cylinders',
      'Fuel gauges, fuel locks and tank caps',
      'Handles, regulator handles and gear lever kits',
      'Speedometer cables, switches and wipers',
    ],
    sampleItems: [
      'NAPCO CARB REPAIR KIT B210/110',
      'NABCO BRAKE M CYLINDER B110 11/16"',
      'TAIWAN GEAR LEVER KIT B12',
      'NABCO CABLE SPEEDO METER B310',
      'TAIWAN FUEL GUAGE B13',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [orderFaq('Nissan'), deliveryFaq],
  },
  {
    slug: 'mazda-truck-parts',
    label: 'Mazda Truck Parts',
    h1: 'Mazda T-3500 Truck Spare Parts in Karachi',
    title: 'Mazda T-3500 & B2200 Truck Spare Parts in Karachi',
    metaDescription:
      'Mazda truck spare parts in Karachi for T-3500, B2200 and E2200: timing belts, brake and clutch repair kits, distributor parts, switches, door locks and heavy-duty shock absorbers.',
    keywords: [
      'Mazda T3500 parts',
      'Mazda truck spare parts Pakistan',
      'Mazda B2200 parts',
      'Mazda T3500 shock absorber',
    ],
    intro:
      'Spare parts for Mazda light trucks widely used for goods transport in Pakistan, including the T-3500 and B2200.',
    models: ['T-3500', 'B2200', 'E2200'],
    categories: [
      'Timing belts',
      'BMC and COC repair kits, clutch cylinders',
      'Distributor caps, rotors and condensers',
      'Oil, temperature and ignition switches',
      'Door locks, handles and window regulators',
      'Standard and heavy-duty shock absorbers',
    ],
    sampleItems: [
      'MAZDA T-3500 shock absorbers',
      'MAZDA T-3500 HEAVY DUTY shock absorbers',
    ],
    catalogPdf: MULTI_BRAND_PDF,
    faqs: [orderFaq('Mazda'), deliveryFaq],
  },
];

export function getPartsPage(slug: string) {
  return PARTS_PAGES.find((p) => p.slug === slug);
}
