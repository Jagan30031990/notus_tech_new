import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/sitemap'],
      },
    ],
    sitemap: 'https://notustechnologies.co.in/sitemap.xml',
    host: 'https://notustechnologies.co.in',
  };
}









