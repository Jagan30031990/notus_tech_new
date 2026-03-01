import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Services | Web Development, Mobile Apps, Cloud Solutions | Notus Technologies',
  description: 'Comprehensive IT services including web development, mobile app development, cloud solutions, AI analytics, digital marketing, UI/UX design, and e-commerce solutions in Gurgaon, India.',
  keywords: [
    'IT Services Gurgaon',
    'Web Development Services',
    'Mobile App Development',
    'Cloud Solutions Provider',
    'AI Analytics Services',
    'Digital Marketing Agency',
    'UI/UX Design Company',
    'E-commerce Development',
    'API Development Services',
    'Software Development Company Gurgaon',
  ],
  openGraph: {
    title: 'IT Services | Notus Technologies',
    description: 'Comprehensive IT services including web development, mobile apps, cloud solutions, and digital marketing in Gurgaon.',
    url: 'https://notustechnologies.co.in/services',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services | Notus Technologies',
    description: 'Web development, mobile apps, cloud solutions, and digital marketing services.',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
