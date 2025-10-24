'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SitemapPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <i className="ri-links-line mr-2"></i>
            Website Navigation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find all pages and sections of our website organized for easy navigation and discovery.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Main Pages */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                  <i className="ri-home-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Main Pages</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Services Overview
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Development Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                  <i className="ri-code-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Development</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/web-development" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/api-development" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    API Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ecommerce-solutions" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    E-commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Design & Creative */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                  <i className="ri-palette-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Design & Creative</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/ui-ux-design" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/branding-services" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Branding Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/creative-services" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Creative Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Marketing & Analytics */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                  <i className="ri-line-chart-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Marketing & Analytics</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/digital-marketing" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-analytics" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    AI & Analytics
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                  <i className="ri-cloud-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cloud & Infrastructure</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/cloud-solutions" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                  <i className="ri-shield-check-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Legal & Policies</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Quick Navigation */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Quick Navigation</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Use our quick navigation links below or contact us directly for assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-home-line mr-2"></i>
                Back to Home
              </Link>
              <Link href="/services" className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-service-line mr-2"></i>
                View All Services
              </Link>
              <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-mail-line mr-2"></i>
                Contact Support
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}