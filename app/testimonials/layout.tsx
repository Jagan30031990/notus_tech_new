import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://notustechnologies.co.in/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
