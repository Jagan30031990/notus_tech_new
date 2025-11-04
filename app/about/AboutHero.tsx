
'use client';

import { useState, useEffect } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden py-8 md:py-12 lg:py-5">
      {/* Background elements matching homepage exactly */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Geometric shapes matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-4 md:left-8 lg:left-16 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-4 md:right-8 lg:right-16 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-8 md:right-16 lg:right-32 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-4 md:left-8 lg:left-1/4 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-4 md:left-8 lg:left-1/3 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-blue-400/15 rounded-xl rotate-45 animate-pulse delay-1500"></div>
        <div className="absolute top-2/3 right-4 md:right-8 lg:right-1/4 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-indigo-500/20 rounded-full animate-bounce delay-2000"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59,130,246,0.2) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(99,102,241,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 75% 25%, rgba(59,130,246,0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center min-h-screen">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Company Badge - matching home page colors */}
          <div className={`inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full hover:scale-105 transition-all duration-300 animate-slideInUp`}>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-blue-700">ABOUT TECHCRAFT</span>
            <i className="ri-arrow-right-line text-blue-600 text-xs md:text-sm"></i>
          </div>

          {/* Main Heading - matching home page gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold mb-6 md:mb-8 leading-tight text-gray-900 px-4">
            <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent animate-slideInUp`} style={{ animationDelay: '0.2s' }}>
              Innovation
            </div>
            <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent animate-slideInUp`} style={{ animationDelay: '0.4s' }}>
              Meets Purpose
            </div>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 lg:mb-12 max-w-5xl mx-auto leading-relaxed text-gray-600 font-light px-4 animate-slideInUp`} style={{ animationDelay: '0.6s' }}>
            We're not just a tech company – we're visionaries, creators, and innovators who transform ambitious ideas into extraordinary digital realities that reshape industries and inspire change.
          </p>

          {/* Feature Pills - matching home page colors */}
          <div className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12 px-4 animate-slideInUp`} style={{ animationDelay: '0.8s' }}>
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 backdrop-blur-sm rounded-full border border-blue-200 text-blue-600 text-xs sm:text-sm font-medium hover:scale-105 hover:bg-blue-200 transition-all duration-300">
              <i className="ri-lightbulb-line mr-1 md:mr-2 text-xs md:text-sm"></i>
              Innovative Solutions
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-indigo-100 backdrop-blur-sm rounded-full border border-indigo-200 text-indigo-600 text-xs sm:text-sm font-medium hover:scale-105 hover:bg-indigo-200 transition-all duration-300">
              <i className="ri-team-line mr-1 md:mr-2 text-xs md:text-sm"></i>
              Expert Team
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 backdrop-blur-sm rounded-full border border-blue-200 text-blue-600 text-xs sm:text-sm font-medium hover:scale-105 hover:bg-blue-200 transition-all duration-300">
              <i className="ri-rocket-2-line mr-1 md:mr-2 text-xs md:text-sm"></i>
              Fast Delivery
            </div>
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-indigo-100 backdrop-blur-sm rounded-full border border-indigo-200 text-indigo-600 text-xs sm:text-sm font-medium hover:scale-105 hover:bg-indigo-200 transition-all duration-300">
              <i className="ri-shield-check-line mr-1 md:mr-2 text-xs md:text-sm"></i>
              Quality Assured
            </div>
          </div>

          {/* Action Buttons - matching home page gradient */}
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-12 lg:mb-16 px-4 animate-slideInUp`} style={{ animationDelay: '1s' }}>
            <button className="group relative px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-white overflow-hidden hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl shadow-blue-500/25 text-sm md:text-base">
              <span className="relative z-10 flex items-center justify-center">
                <i className="ri-play-circle-fill mr-2 md:mr-3 text-base md:text-lg group-hover:animate-bounce"></i>
                Discover Our Story
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 border-2 border-blue-600 bg-blue-50 backdrop-blur-sm rounded-full font-semibold text-blue-600 hover:bg-blue-100 transition-all duration-300 whitespace-nowrap cursor-pointer relative overflow-hidden hover:scale-105 text-sm md:text-base">
              <span className="relative z-10 flex items-center justify-center">
                <i className="ri-user-star-line mr-2 md:mr-3 text-base md:text-lg group-hover:animate-pulse"></i>
                Meet Our Experts
              </span>
            </button>
          </div>

          {/* Stats Grid - matching home page colors */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4 animate-slideInUp`} style={{ animationDelay: '1.2s' }}>
            <div className="group p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">750+</div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">Projects Delivered</div>
              
            </div>
            
            <div className="group p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">99%</div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">Client Success Rate</div>
            </div>
            
            <div className="group p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">Years Experience</div>
            </div>
            
            <div className="group p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">Global Support</div>
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
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
