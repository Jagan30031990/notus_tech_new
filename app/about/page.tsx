'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import TrustedSolutions from './TrustedSolutions';
import MissionVision from './MissionVision';
import ManagedServices from './ManagedServices';
import TeamSection from './TeamSection';
import WhyChooseUs from './WhyChooseUs';
import ExperiencedServices from './ExperiencedServices';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <TrustedSolutions />
      <MissionVision />
      <ManagedServices />
      {/* <TeamSection /> */}
      <WhyChooseUs />
      <ExperiencedServices />
      <Footer />
    </div>
  );
}