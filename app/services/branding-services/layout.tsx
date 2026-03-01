import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding Services | Logo Design & Brand Identity | Notus Technologies',
  description: 'Professional branding services in Gurgaon. Logo design, brand identity, brand strategy, visual branding, brand guidelines, and corporate identity design.',
  keywords: [
    'Branding Services Gurgaon',
    'Logo Design Company',
    'Brand Identity Design',
    'Corporate Branding',
    'Brand Strategy Services',
    'Visual Identity Design',
    'Brand Guidelines',
    'Branding Agency India',
  ],
  openGraph: {
    title: 'Branding Services | Notus Technologies',
    description: 'Logo design, brand identity, and corporate branding services.',
    url: 'https://notustechnologies.co.in/services/branding-services',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/branding-services',
  },
};

export default function BrandingServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
