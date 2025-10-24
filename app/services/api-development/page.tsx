
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import APIDevHero from './APIDevHero';
import APIDevServices from './APIDevServices';
import APIDevCTA from './APIDevCTA';

export default function APIDevPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <APIDevHero />
      <APIDevServices />
      <APIDevCTA />
      <Footer />
    </div>
  );
}
