
'use client';

import { useState, useEffect } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Background elements matching homepage exactly */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Geometric shapes matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-20 h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-blue-400/15 rounded-xl rotate-45 animate-pulse delay-1500"></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-indigo-500/20 rounded-full animate-bounce delay-2000"></div>
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

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Company Badge - matching home page colors */}
          <div className={`inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full hover:scale-105 transition-all duration-300 animate-slideInUp`}>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">ABOUT TECHCRAFT</span>
            <i className="ri-arrow-right-line text-blue-600"></i>
          </div>

          {/* Main Heading - matching home page gradient */}
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight text-gray-900">
            <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent animate-slideInUp`} style={{ animationDelay: '0.2s' }}>
              Innovation
            </div>
            <div className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent animate-slideInUp`} style={{ animationDelay: '0.4s' }}>
              Meets Purpose
            </div>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed text-gray-600 font-light animate-slideInUp`} style={{ animationDelay: '0.6s' }}>
            We're not just a tech company – we're visionaries, creators, and innovators who transform ambitious ideas into extraordinary digital realities that reshape industries and inspire change.
          </p>

          {/* Feature Pills - matching home page colors */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 animate-slideInUp`} style={{ animationDelay: '0.8s' }}>
            <div className="px-4 py-2 bg-blue-100 backdrop-blur-sm rounded-full border border-blue-200 text-blue-600 text-sm font-medium hover:scale-105 hover:bg-blue-200 transition-all duration-300">
              <i className="ri-lightbulb-line mr-2"></i>
              Innovative Solutions
            </div>
            <div className="px-4 py-2 bg-indigo-100 backdrop-blur-sm rounded-full border border-indigo-200 text-indigo-600 text-sm font-medium hover:scale-105 hover:bg-indigo-200 transition-all duration-300">
              <i className="ri-team-line mr-2"></i>
              Expert Team
            </div>
            <div className="px-4 py-2 bg-blue-100 backdrop-blur-sm rounded-full border border-blue-200 text-blue-600 text-sm font-medium hover:scale-105 hover:bg-blue-200 transition-all duration-300">
              <i className="ri-rocket-2-line mr-2"></i>
              Fast Delivery
            </div>
            <div className="px-4 py-2 bg-indigo-100 backdrop-blur-sm rounded-full border border-indigo-200 text-indigo-600 text-sm font-medium hover:scale-105 hover:bg-indigo-200 transition-all duration-300">
              <i className="ri-shield-check-line mr-2"></i>
              Quality Assured
            </div>
          </div>

          {/* Action Buttons - matching home page gradient */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slideInUp`} style={{ animationDelay: '1s' }}>
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-white overflow-hidden hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl shadow-blue-500/25">
              <span className="relative z-10 flex items-center justify-center">
                <i className="ri-play-circle-fill mr-3 text-lg group-hover:animate-bounce"></i>
                Discover Our Story
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-10 py-4 border-2 border-blue-600 bg-blue-50 backdrop-blur-sm rounded-full font-semibold text-blue-600 hover:bg-blue-100 transition-all duration-300 whitespace-nowrap cursor-pointer relative overflow-hidden hover:scale-105">
              <span className="relative z-10 flex items-center justify-center">
                <i className="ri-user-star-line mr-3 text-lg group-hover:animate-pulse"></i>
                Meet Our Experts
              </span>
            </button>
          </div>

          {/* Stats Grid - matching home page colors */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-slideInUp`} style={{ animationDelay: '1.2s' }}>
            <div className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">750+</div>
              <div className="text-gray-600 text-sm font-medium">Projects Delivered</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3"></div>
            </div>
            
            <div className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">99%</div>
              <div className="text-gray-600 text-sm font-medium">Client Success Rate</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3"></div>
            </div>
            
            <div className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600 text-sm font-medium">Years Experience</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3"></div>
            </div>
            
            <div className="group p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600 text-sm font-medium">Global Support</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator - matching home page colors */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-slideInUp`} style={{ animationDelay: '1.4s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-600 font-medium tracking-wider">SCROLL DOWN</span>
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mt-2 animate-pulse"></div>
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
