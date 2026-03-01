import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development | Android & iOS Apps | Notus Technologies',
  description: 'Expert mobile app development services in Gurgaon. We build native Android & iOS apps, cross-platform solutions using React Native and Flutter, and enterprise mobile applications.',
  keywords: [
    'Mobile App Development Gurgaon',
    'Android App Development',
    'iOS App Development',
    'React Native Development',
    'Flutter App Development',
    'Cross-Platform Mobile Apps',
    'Enterprise Mobile Solutions',
    'Mobile App Company India',
  ],
  openGraph: {
    title: 'Mobile App Development | Notus Technologies',
    description: 'Expert Android & iOS app development, React Native, and Flutter solutions.',
    url: 'https://notustechnologies.co.in/services/mobile-development',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/mobile-development',
  },
};

export default function MobileDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
