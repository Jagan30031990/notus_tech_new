'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GetQuoteHero from './GetQuoteHero';
import QuoteForm from './QuoteForm';
import ServicePackages from './ServicePackages';
import QuoteTestimonials from './QuoteTestimonials';

export default function GetQuotePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <GetQuoteHero />
      <QuoteForm />
      {/* <ServicePackages /> */}
      <QuoteTestimonials />
      <Footer />
    </div>
  );
}