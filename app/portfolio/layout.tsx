import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://notustechnologies.co.in/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
