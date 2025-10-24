import TestimonialsHero from './TestimonialsHero';
import TestimonialsGrid from './TestimonialsGrid';
import TestimonialsStats from './TestimonialsStats';
import TestimonialsCTA from './TestimonialsCTA';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsStats />
      <TestimonialsCTA />
      <Footer />
    </div>
  );
}