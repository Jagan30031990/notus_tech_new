import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Solutions | Online Store Development | Notus Technologies',
  description: 'Complete e-commerce solutions in Gurgaon. Shopify, WooCommerce, custom e-commerce development, payment integration, inventory management, and online marketplace solutions.',
  keywords: [
    'E-commerce Development Gurgaon',
    'Shopify Development',
    'WooCommerce Development',
    'Online Store Development',
    'E-commerce Website Design',
    'Payment Gateway Integration',
    'Custom E-commerce Solutions',
    'E-commerce Company India',
  ],
  openGraph: {
    title: 'E-commerce Solutions | Notus Technologies',
    description: 'Shopify, WooCommerce, and custom e-commerce development services.',
    url: 'https://notustechnologies.co.in/services/ecommerce-solutions',
    siteName: 'Notus Technologies',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in/services/ecommerce-solutions',
  },
};

export default function EcommerceSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
