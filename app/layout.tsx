import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import ToasterProvider from "@/components/ToasterProvider";
import StructuredData from "@/components/StructuredData";
import CustomMetaTags from "@/components/CustomMetaTags";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://notustechnologies.co.in'),
  title: {
    default: "Best Information Technology Company in Gurgaon, India",
    template: "%s | Notus Technologies"
  },
  description: "Notus Technologies is the best Information Technology company in Gurgaon, India, offering expert solutions in web, app development, digital marketing, and IT consulting.",
  keywords: [
    "Best Information Technology Company in Gurgaon",
    "Best Digital Marketing Agency in Gurgaon",
    "Best Digital Marketing Company in Gurgaon",
    "top 10 digital marketing companies in Gurgaon",
    "IT Companies in Gurgaon",
    "Software IT Companies in Gurgaon",
    "Digital Marketing Company in Gurgaon",
    "Best Android & iOS Mobile App Development Company in Gurgaon",
    "Best Software Development Company in Gurgaon",
    "Technology Company in Gurgaon",
    "Best Website Development Company in Gurgaon",
    "IT Services",
    "Web Development Company in Gurgaon",
    "Mobile App Development Company in Gurgaon",
    "Cloud Solutions Provider in Gurgaon",
    "AI Analytics Company in Gurgaon"
  ],
  authors: [{ name: "Notus Technologies" }],
  creator: "Notus Technologies",
  publisher: "Notus Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://notustechnologies.co.in',
    siteName: 'notustechnologies.co.in',
    title: 'Best Information Technology Company in Gurgaon, India',
    description: 'Notus Technologies is the best Information Technology company in Gurgaon, India, offering expert solutions in web, app development, digital marketing, and IT consulting.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Notus Technologies - Best IT Company in Gurgaon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Information Technology Company in Gurgaon | Notus Technologies',
    description: 'Notus Technologies is the best Information Technology company in Gurgaon, India, offering expert solutions in web, app development, digital marketing, and IT consulting.',
    images: ['/logo.png'],
    creator: '@notustechnologies',
  },
  alternates: {
    canonical: 'https://notustechnologies.co.in',
  },
  verification: {
    google: 'JkSb-y_SWXjvoUa7AyC6ll81IOTnK2Cj-xYjqGsrKmg', // Update with your actual Google verification code
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <CustomMetaTags />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
