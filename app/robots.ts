import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://geovanedd.me';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

