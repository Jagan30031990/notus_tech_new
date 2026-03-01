import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Analytics Services | Machine Learning & Data Analytics | Notus Technologies',
  description: 'Advanced AI and analytics services in Gurgaon. Machine learning solutions, data analytics, business intelligence, predictive analytics, and AI-powered automation.',
  keywords: [
    'AI Services Gurgaon',
    'Machine Learning Company',
    'Data Analytics Services',
    'Business Intelligence Solutions',
    'Predictive Analytics',
    'AI Automation',
    'Big Data Analytics',
    'AI Consulting India',
  ],
  openGraph: {
    title: 'AI & Analytics Services | Notus Technologies',
    description: 'Machine learning, data analytics, and AI-powered business solutions.',
    url: 'https://notustechnologies.co.in/services/ai-analytics',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/ai-analytics',
  },
};

export default function AIAnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
