import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Solutions | AWS, Azure, GCP Services | Notus Technologies',
  description: 'Comprehensive cloud solutions in Gurgaon. Cloud migration, AWS, Microsoft Azure, Google Cloud Platform services, DevOps, and cloud infrastructure management.',
  keywords: [
    'Cloud Solutions Gurgaon',
    'AWS Services India',
    'Microsoft Azure Partner',
    'Google Cloud Services',
    'Cloud Migration Services',
    'DevOps Solutions',
    'Cloud Infrastructure',
    'Managed Cloud Services',
  ],
  openGraph: {
    title: 'Cloud Solutions | Notus Technologies',
    description: 'AWS, Azure, GCP cloud services, migration, and infrastructure management.',
    url: 'https://notustechnologies.co.in/services/cloud-solutions',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/cloud-solutions',
  },
};

export default function CloudSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
