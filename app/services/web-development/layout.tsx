import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services | Custom Websites & Web Apps | Notus Technologies',
  description: 'Professional web development services in Gurgaon. We build responsive websites, custom web applications, CMS solutions, and progressive web apps using React, Next.js, and modern technologies.',
  keywords: [
    'Web Development Company Gurgaon',
    'Custom Website Development',
    'React Development Services',
    'Next.js Development',
    'Responsive Web Design',
    'Web Application Development',
    'Frontend Development',
    'Full Stack Development',
  ],
  openGraph: {
    title: 'Web Development Services | Notus Technologies',
    description: 'Professional web development services including responsive websites, custom web apps, and CMS solutions.',
    url: 'https://notustechnologies.co.in/services/web-development',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/web-development',
  },
};

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
