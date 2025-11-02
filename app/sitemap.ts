import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://geovanedd.me';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}

