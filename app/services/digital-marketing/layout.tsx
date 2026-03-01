import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, PPC, Social Media | Notus Technologies',
  description: 'Result-driven digital marketing services in Gurgaon. SEO, PPC advertising, social media marketing, content marketing, email marketing, and online reputation management.',
  keywords: [
    'Digital Marketing Agency Gurgaon',
    'SEO Services India',
    'PPC Advertising',
    'Social Media Marketing',
    'Content Marketing Services',
    'Email Marketing',
    'Online Marketing Company',
    'Best Digital Marketing Gurgaon',
  ],
  openGraph: {
    title: 'Digital Marketing Services | Notus Technologies',
    description: 'SEO, PPC, social media marketing, and content marketing services.',
    url: 'https://notustechnologies.co.in/services/digital-marketing',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/digital-marketing',
  },
};

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
