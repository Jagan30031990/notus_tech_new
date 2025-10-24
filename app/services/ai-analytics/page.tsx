'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AIAnalyticsHero from './AIAnalyticsHero';
import AIAnalyticsServices from './AIAnalyticsServices';
import AIAnalyticsCTA from './AIAnalyticsCTA';

export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AIAnalyticsHero />
      <AIAnalyticsServices />
      <AIAnalyticsCTA />
      <Footer />
    </div>
  );
}