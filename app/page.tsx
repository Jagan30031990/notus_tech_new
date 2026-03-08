import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

// Lazy load below-fold sections to reduce initial bundle size and improve LCP
const StatsSection = nextDynamic(() => import('../components/StatsSection'));
const ServicesSection = nextDynamic(() => import('../components/ServicesSection'));
const WhyChooseSection = nextDynamic(() => import('../components/WhyChooseSection'));
const TestimonialsSection = nextDynamic(() => import('../components/TestimonialsSection'));
const FAQSection = nextDynamic(() => import('../components/FAQSection'));
const CTASection = nextDynamic(() => import('../components/CTASection'));
const Footer = nextDynamic(() => import('../components/Footer'));

export const metadata: Metadata = {
  title: "Best Information Technology Company in Gurgaon | Notus Technologies",
  description: "Notus Technologies is the best Information Technology company in Gurgaon, India, offering expert solutions in web development, Android & iOS mobile app development, digital marketing, cloud solutions, AI analytics, and IT consulting services.",
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
    "IT Services"
  ],
  openGraph: {
    title: "Best Information Technology Company in Gurgaon, India | Notus Technologies",
    description: "Notus Technologies is the best Information Technology company in Gurgaon, India, offering expert solutions in web, app development, digital marketing, and IT consulting.",
    url: "https://notustechnologies.co.in",
    siteName: "Notus Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Notus Technologies - Best IT Company in Gurgaon",
      },
    ],
  },
  alternates: {
    canonical: "https://notustechnologies.co.in",
  },
};

// Pre-render at build time so first request gets instant HTML (no SSR wait)
export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}