
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CreativeHero from './CreativeHero';
import CreativeServices from './CreativeServices';
import CreativeCTA from './CreativeCTA';

export default function CreativeServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CreativeHero />
      <CreativeServices />
      <CreativeCTA />
      <Footer />
    </div>
  );
}
