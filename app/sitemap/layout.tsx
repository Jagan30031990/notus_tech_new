import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Notus Technologies',
  description: 'Navigate all pages and sections of Notus Technologies website. Find our services, portfolio, blog, and contact information.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/sitemap',
  },
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
