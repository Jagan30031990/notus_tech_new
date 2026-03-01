import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Blog | Insights on Web Development, AI & Digital Marketing | Notus Technologies',
  description: 'Explore our tech blog for insights on web development, mobile apps, cloud solutions, AI analytics, digital marketing, and cybersecurity. Stay updated with the latest industry trends.',
  keywords: [
    'Tech Blog',
    'Web Development Blog',
    'AI Technology Blog',
    'Digital Marketing Insights',
    'Cloud Computing Articles',
    'Mobile App Development Tips',
    'IT Industry News Gurgaon',
    'Technology Trends India',
  ],
  openGraph: {
    title: 'Tech Blog | Notus Technologies',
    description: 'Explore insights on web development, AI, cloud solutions, and digital marketing from Notus Technologies.',
    url: 'https://notustechnologies.co.in/blog',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Blog | Notus Technologies',
    description: 'Explore insights on web development, AI, cloud solutions, and digital marketing.',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
