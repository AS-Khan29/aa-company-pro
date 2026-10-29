// Single source of truth for business details used in SEO metadata,
// structured data (JSON-LD), the sitemap and robots.txt.
// Set NEXT_PUBLIC_SITE_URL in Vercel if the live domain differs.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://aandacompany.com'
).replace(/\/$/, '');

export const SITE_NAME = 'A & A Company';

export const BUSINESS = {
  name: SITE_NAME,
  legalName: 'A & A Company',
  foundingYear: '1993',
  phone: '+92-321-2472470',
  phoneE164: '+923212472470',
  whatsapp: 'https://wa.me/923212472470',
  email: 'info@aandacompany.com',
  address: {
    street: 'F-95, 2nd Floor, Ruby Plaza, Preedy Street, Saddar',
    city: 'Karachi',
    region: 'Sindh',
    country: 'PK',
  },
  addressLine: 'F-95, 2nd Floor, Ruby Plaza, Preedy Street, Saddar, Karachi',
};

export const DEFAULT_DESCRIPTION =
  'Genuine auto & truck spare parts supplier in Karachi since 1993. HINO, Isuzu, Land Rover Defender, Toyota, Suzuki, Honda, Hyundai, Daihatsu, Mitsubishi, Nissan & Mazda parts, shock absorbers and NABCO brake parts. Wholesale & bulk supply across Pakistan.';

export const DEFAULT_KEYWORDS = [
  'auto parts Karachi',
  'auto spare parts Pakistan',
  'genuine spare parts Karachi',
  'wholesale auto parts Pakistan',
  'truck spare parts Karachi',
  'Hino truck parts Pakistan',
  'Isuzu truck parts Pakistan',
  'Land Rover Defender parts Pakistan',
  'shock absorbers price in Pakistan',
  'NABCO brake parts',
  'Toyota spare parts Karachi',
  'Suzuki spare parts Karachi',
  'Honda spare parts Karachi',
  'Preedy Street auto parts',
  'defence vehicle spare parts supplier',
];

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: SITE_URL,
  logo: absoluteUrl('/favicon.svg'),
  image: absoluteUrl('/favicon.svg'),
  description: DEFAULT_DESCRIPTION,
  foundingDate: BUSINESS.foundingYear,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: '$$',
  currenciesAccepted: 'PKR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country,
  },
  areaServed: { '@type': 'Country', name: 'Pakistan' },
  knowsAbout: [
    'HINO truck spare parts',
    'Isuzu truck spare parts',
    'Land Rover Defender spare parts',
    'Shock absorbers',
    'Toyota spare parts',
    'Suzuki spare parts',
    'Honda spare parts',
    'Hyundai spare parts',
    'Daihatsu spare parts',
    'Mitsubishi spare parts',
    'Nissan spare parts',
    'Mazda truck spare parts',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    contactType: 'sales',
    areaServed: 'PK',
    availableLanguage: ['English', 'Urdu'],
  },
};
