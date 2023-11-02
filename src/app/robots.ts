import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // Enter sitemap
    // sitemap: 'https://acme.com/sitemap.xml',
  };
}
