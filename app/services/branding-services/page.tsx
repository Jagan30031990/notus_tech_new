
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BrandingHero from './BrandingHero';
import BrandingServices from './BrandingServices';
import BrandingCTA from './BrandingCTA';

export default function BrandingServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BrandingHero />
      <BrandingServices />
      <BrandingCTA />
      <Footer />
    </div>
  );
}
