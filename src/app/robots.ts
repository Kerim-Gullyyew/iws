import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/cambridge-a-level',           // Disallow the base path
          '/cambridge-a-level/*',        // Disallow all subdirectories and files under this path
          '*?gclid=*'   // Disallow URLs with gclid parameters
        ]
      }
    ],
    sitemap: `${process.env.NEXT_WEBSITE_URL}/sitemap.xml`
  };
}
