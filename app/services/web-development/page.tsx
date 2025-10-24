'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import WebDevHero from './WebDevHero';
import WebDevServices from './WebDevServices';
import WebDevCTA from './WebDevCTA';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <WebDevHero />
      <WebDevServices />
      <WebDevCTA />
      <Footer />
    </div>
  );
}