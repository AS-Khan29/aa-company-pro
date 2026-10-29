import type { MetadataRoute } from 'next';
import { PARTS_PAGES } from '@/lib/parts';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), priority: 1, changeFrequency: 'weekly' },
    { url: absoluteUrl('/products'), priority: 0.9, changeFrequency: 'weekly' },
    { url: absoluteUrl('/parts'), priority: 0.9, changeFrequency: 'weekly' },
    { url: absoluteUrl('/services'), priority: 0.7, changeFrequency: 'monthly' },
    { url: absoluteUrl('/about'), priority: 0.6, changeFrequency: 'monthly' },
    { url: absoluteUrl('/contact'), priority: 0.8, changeFrequency: 'monthly' },
    {
      url: absoluteUrl('/multi-brand-parts-catalog.pdf'),
      priority: 0.6,
      changeFrequency: 'monthly',
    },
    {
      url: absoluteUrl('/shock-absorbers-price-list.pdf'),
      priority: 0.6,
      changeFrequency: 'monthly',
    },
  ];
  const parts: MetadataRoute.Sitemap = PARTS_PAGES.map((p) => ({
    url: absoluteUrl(`/parts/${p.slug}`),
    priority: 0.8,
    changeFrequency: 'monthly',
  }));
  return [...core, ...parts].map((e) => ({ ...e, lastModified: now }));
}
