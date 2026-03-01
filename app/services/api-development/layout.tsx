import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Development Services | RESTful & GraphQL APIs | Notus Technologies',
  description: 'Expert API development services in Gurgaon. RESTful APIs, GraphQL, API integration, microservices architecture, and third-party API integration services.',
  keywords: [
    'API Development Gurgaon',
    'RESTful API Services',
    'GraphQL Development',
    'API Integration Services',
    'Microservices Development',
    'Backend Development',
    'API Consulting',
    'Third-party API Integration',
  ],
  openGraph: {
    title: 'API Development Services | Notus Technologies',
    description: 'RESTful APIs, GraphQL, microservices, and API integration services.',
    url: 'https://notustechnologies.co.in/services/api-development',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/api-development',
  },
};

export default function APIDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
