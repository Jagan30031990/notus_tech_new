
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioHero from './PortfolioHero';
import ProjectsGrid from './ProjectsGrid';
import CaseStudies from './CaseStudies';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PortfolioHero />
      <ProjectsGrid />
      <CaseStudies />
      <Footer />
    </div>
  );
}