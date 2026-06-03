import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${site.baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${site.baseUrl}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
