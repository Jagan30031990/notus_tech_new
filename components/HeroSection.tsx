
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden py-8 md:py-12 lg:py-5">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-4 md:left-8 lg:left-16 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-4 md:right-8 lg:right-16 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-8 md:right-16 lg:right-32 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-4 md:left-8 lg:left-1/4 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center w-full">
          {/* Left content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Enhanced badge */}
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6 md:mb-8 animate-slideInUp hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-semibold text-blue-700">Premium Software Solutions</span>
              <i className="ri-arrow-right-line ml-2 text-blue-600 text-xs md:text-sm"></i>
            </div>

            {/* Enhanced main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-gray-900">
              <span className="block animate-slideInUp">Transform Your Business</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                With Cutting-Edge
              </span>
              <span className="block animate-slideInUp" style={{ animationDelay: '0.4s' }}>
                Digital Solutions
              </span>
            </h1>

            {/* Enhanced description */}
            <p className={`text-base sm:text-lg md:text-xl mb-6 md:mb-8 lg:mb-10 text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              We deliver innovative technology solutions that drive growth, enhance efficiency, and create exceptional user experiences. Partner with us to accelerate your digital transformation journey.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-10 lg:mb-12">
              <Link 
                href="/contact"
                className="group relative px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl md:rounded-2xl font-semibold text-base md:text-lg overflow-hidden hover:shadow-2xl transition-all duration-300 whitespace-nowrap cursor-pointer animate-slideInLeft hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <i className="ri-rocket-line mr-2 md:mr-3 group-hover:animate-bounce"></i>
                  Get Started Today
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                href="/portfolio"
                className="group px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 border-2 border-blue-600 text-blue-600 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer animate-slideInRight hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <i className="ri-play-circle-line mr-2 md:mr-3 group-hover:animate-pulse"></i>
                  View Our Work
                </span>
              </Link>
            </div>

            {/* Enhanced stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
              <div className="text-center animate-slideInUp" style={{ animationDelay: '0.6s' }}>
                <div className="text-xl md:text-2xl font-bold text-blue-600">500+</div>
                <div className="text-xs md:text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center animate-slideInUp" style={{ animationDelay: '0.8s' }}>
                <div className="text-xl md:text-2xl font-bold text-indigo-600">98%</div>
                <div className="text-xs md:text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center animate-slideInUp" style={{ animationDelay: '1s' }}>
                <div className="text-xl md:text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs md:text-sm text-gray-600">Support</div>
              </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="flex items-center text-gray-500 animate-slideInUp" style={{ animationDelay: '1.2s' }}>
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-blue-300 rounded-full flex items-center justify-center mr-3 md:mr-4 hover:bg-blue-50 transition-colors duration-300">
                <i className="ri-arrow-down-line animate-bounce text-blue-600 text-sm md:text-base"></i>
              </div>
              <span className="text-xs md:text-sm font-medium">Discover Our Solutions</span>
            </div>
          </div>

          {/* Right content - Enhanced Hero image */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Enhanced main image container */}
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 relative overflow-hidden">
                  {/* Hero person image */}
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20confident%20business%20person%20in%20blue%20shirt%20pointing%20upward%20with%20positive%20expression%2C%20modern%20tech%20office%20background%20with%20blue%20lighting%2C%20clean%20corporate%20photography%20style%2C%20technology%20professional%20with%20laptop%20and%20digital%20devices%2C%20blue%20theme%20suitable%20for%20hero%20section&width=400&height=500&seq=hero-person-blue-v1&orientation=portrait"
                    alt="Professional business person"
                    className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover object-center rounded-lg md:rounded-xl hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Enhanced decorative elements overlay */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl md:rounded-2xl opacity-30 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg md:rounded-xl opacity-40 animate-pulse delay-500"></div>
                  
                  {/* Additional floating elements */}
                  <div className="absolute top-1/2 left-2 md:left-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-blue-400/20 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/4 right-4 md:right-8 w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-indigo-400/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>
                </div>
                
                {/* Enhanced floating decorative shapes */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl md:rounded-3xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl opacity-40 animate-pulse delay-500"></div>
                <div className="absolute top-1/2 -right-4 md:-right-8 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full opacity-30 animate-bounce"></div>
              </div>

              {/* Enhanced floating success metrics */}
              <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-xl border border-blue-100 animate-slideInUp hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1s' }}>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-2 md:mr-3 lg:mr-4">
                    <i className="ri-check-line text-white text-sm md:text-base lg:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-gray-900">Success Rate</div>
                    <div className="text-green-600 font-bold text-lg md:text-xl">98%</div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating project counter */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-xl border border-blue-100 animate-slideInUp hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-2 md:mr-3 lg:mr-4">
                    <i className="ri-trophy-line text-white text-sm md:text-base lg:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-gray-900">Projects Done</div>
                    <div className="text-blue-600 font-bold text-lg md:text-xl">500+</div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating testimonial */}
              <div className="absolute top-8 -right-6 md:top-16 md:-right-12 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-xl border border-blue-100 animate-slideInUp hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1.4s' }}>
                <div className="flex items-center mb-1 md:mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xs md:text-sm"></i>
                  ))}
                </div>
                <div className="text-xs text-gray-600 max-w-[100px] md:max-w-[120px]">"Amazing results!"</div>
                <div className="text-xs font-semibold text-gray-900">- Sarah Johnson</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
