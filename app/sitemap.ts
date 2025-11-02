import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://geovanedd.me';
  // Use current date for lastModified - update when content changes
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Note: Fragment URLs (#projects) are not included per Bing guidelines
    // Only canonical URLs should be listed in sitemaps
  ];
}

