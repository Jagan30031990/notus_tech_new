'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogHero from './BlogHero';
import BlogGrid from './BlogGrid';
import BlogNewsletter from './BlogNewsletter';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogGrid />
      {/* <BlogNewsletter /> */}
      <Footer />
    </div>
  );
}