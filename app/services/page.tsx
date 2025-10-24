
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ServicesCTA from './ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer />
      {/* Enhanced geometric shapes with technology graphics */}
      <div className="absolute inset-0">
        {/* Technology Icons */}
        <div className="absolute top-32 left-16 w-20 h-20 bg-blue-500/10 rounded-2xl rotate-12 animate-pulse flex items-center justify-center">
          <i className="ri-html5-line text-2xl text-blue-500/60"></i>
        </div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-600/10 rounded-xl rotate-45 animate-pulse delay-1000 flex items-center justify-center">
          <i className="ri-css3-line text-xl text-indigo-600/60"></i>
        </div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-blue-400/15 rounded-full animate-bounce flex items-center justify-center">
          <i className="ri-reactjs-line text-lg text-blue-400/70"></i>
        </div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/15 rounded-lg rotate-12 animate-pulse delay-500 flex items-center justify-center">
          <i className="ri-javascript-line text-sm text-cyan-500/70"></i>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-indigo-500/10 rounded-2xl rotate-45 animate-pulse delay-1500 flex items-center justify-center">
          <i className="ri-nodejs-line text-base text-indigo-500/60"></i>
        </div>
        
        {/* Additional Technology Elements */}
        <div className="absolute top-20 right-20 w-14 h-14 bg-blue-600/10 rounded-full animate-pulse delay-2000 flex items-center justify-center">
          <i className="ri-database-line text-lg text-blue-600/60"></i>
        </div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-500/10 rounded-xl rotate-12 animate-pulse delay-2500 flex items-center justify-center">
          <i className="ri-vuejs-line text-base text-green-500/60"></i>
        </div>
        <div className="absolute top-2/3 left-16 w-16 h-16 bg-purple-500/10 rounded-2xl rotate-45 animate-pulse delay-3000 flex items-center justify-center">
          <i className="ri-flutter-line text-lg text-purple-500/60"></i>
        </div>
        <div className="absolute top-1/3 right-20 w-10 h-10 bg-orange-500/10 rounded-lg animate-pulse delay-3500 flex items-center justify-center">
          <i className="ri-fire-line text-sm text-orange-500/60"></i>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-red-500/10 rounded-full rotate-12 animate-pulse delay-4000 flex items-center justify-center">
          <i className="ri-angularjs-line text-xs text-red-500/60"></i>
        </div>
      </div>
    </div>
  );
}
