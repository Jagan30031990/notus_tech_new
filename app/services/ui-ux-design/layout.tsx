import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI/UX Design Services | User Experience & Interface Design | Notus Technologies',
  description: 'Professional UI/UX design services in Gurgaon. User experience design, user interface design, wireframing, prototyping, usability testing, and design systems.',
  keywords: [
    'UI/UX Design Gurgaon',
    'User Experience Design',
    'User Interface Design',
    'UX Research Services',
    'Wireframing & Prototyping',
    'Mobile App Design',
    'Web Design Services',
    'Design Agency India',
  ],
  openGraph: {
    title: 'UI/UX Design Services | Notus Technologies',
    description: 'User experience design, interface design, and prototyping services.',
    url: 'https://notustechnologies.co.in/services/ui-ux-design',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/ui-ux-design',
  },
};

export default function UIUXDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
