'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import EcommerceHero from './EcommerceHero';
import EcommerceServices from './EcommerceServices';
import EcommerceFAQ from './EcommerceFAQ';
import EcommerceCTA from './EcommerceCTA';

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <EcommerceHero />
      <EcommerceServices />
      <EcommerceFAQ />
      <EcommerceCTA />
      <Footer />
    </div>
  );
}