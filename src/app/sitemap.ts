import { MetadataRoute } from 'next'
import { keyStages } from './data/keystage'
export default function sitemap(): MetadataRoute.Sitemap {


  
  return [
    {
      url: `${process.env.NEXT_WEBSITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}