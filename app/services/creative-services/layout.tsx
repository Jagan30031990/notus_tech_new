import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative Services | Graphic Design & Visual Content | Notus Technologies',
  description: 'Creative design services in Gurgaon. Graphic design, video production, motion graphics, presentation design, marketing collateral, and creative consulting.',
  keywords: [
    'Creative Services Gurgaon',
    'Graphic Design Company',
    'Video Production Services',
    'Motion Graphics',
    'Marketing Collateral Design',
    'Presentation Design',
    'Creative Agency India',
    'Visual Content Creation',
  ],
  openGraph: {
    title: 'Creative Services | Notus Technologies',
    description: 'Graphic design, video production, and creative design services.',
    url: 'https://notustechnologies.co.in/services/creative-services',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/creative-services',
  },
};

export default function CreativeServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
