'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CloudSolutionsHero from './CloudSolutionsHero';
import CloudSolutionsServices from './CloudSolutionsServices';
import CloudSolutionsCTA from './CloudSolutionsCTA';

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CloudSolutionsHero />
      <CloudSolutionsServices />
      <CloudSolutionsCTA />
      <Footer />
    </div>
  );
}