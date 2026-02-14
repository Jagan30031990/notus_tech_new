import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://notustechnologies.co.in/get-quote',
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
