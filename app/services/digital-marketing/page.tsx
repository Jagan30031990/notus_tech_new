'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DigitalMarketingHero from './DigitalMarketingHero';
import DigitalMarketingServices from './DigitalMarketingServices';
import DigitalMarketingCTA from './DigitalMarketingCTA';

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <DigitalMarketingHero />
      <DigitalMarketingServices />
      <DigitalMarketingCTA />
      <Footer />
    </div>
  );
}