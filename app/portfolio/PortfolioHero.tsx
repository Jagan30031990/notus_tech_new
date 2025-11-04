
'use client';

import { useState, useEffect } from 'react';

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden py-10">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-blue-300/8 to-indigo-300/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl rotate-12 animate-pulse backdrop-blur-sm border border-blue-200/30"></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 bg-gradient-to-br from-indigo-600/25 to-blue-600/25 rounded-2xl rotate-45 animate-bounce backdrop-blur-sm border border-indigo-200/30"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-16 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg rotate-45 animate-bounce delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full">
          {/* Top section with badge and stats */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8 shadow-lg hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Premium Portfolio</span>
              <i className="ri-star-fill ml-3 text-yellow-500 text-lg"></i>
            </div>

            <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
              <span className="block text-gray-900">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-slideInUp delay-300' : 'opacity-0'}`}>
              We transform innovative ideas into stunning digital experiences through cutting-edge technology, creative design, and strategic thinking that drives business growth.
            </p>

            {/* Interactive stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: '200+', label: 'Projects Completed', icon: 'ri-rocket-line', delay: '0.6s' },
                { number: '98%', label: 'Client Satisfaction', icon: 'ri-heart-fill', delay: '0.8s' },
                { number: '50+', label: 'Global Clients', icon: 'ri-global-line', delay: '1s' },
                { number: '24/7', label: 'Support Available', icon: 'ri-customer-service-2-line', delay: '1.2s' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-blue-100/50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <i className={`${stat.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured project showcase */}
          <div className={`relative ${isVisible ? 'animate-slideInUp delay-1000' : 'opacity-0'}`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
                    <i className="ri-trophy-line text-blue-600 mr-2"></i>
                    <span className="text-sm font-semibold text-blue-700">Featured Project</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Next-Gen E-commerce Platform
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A comprehensive digital transformation project featuring advanced AI recommendations, real-time analytics, and seamless multi-platform integration that increased client revenue by 300%.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Node.js', 'AI/ML', 'Cloud', 'Mobile'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                    View Case Study
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button> */}
                </div>
                
                <div className="relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20sleek%20e-commerce%20website%20interface%20displayed%20on%20multiple%20devices%20including%20desktop%20computer%2C%20tablet%20and%20smartphone%2C%20showing%20beautiful%20product%20galleries%20and%20shopping%20cart%20functionality%2C%20professional%20blue%20color%20scheme%20with%20clean%20white%20background%2C%20high-quality%20product%20photography%2C%20modern%20UI%2FUX%20design%20elements%2C%20minimalist%20layout%20with%20blue%20accent%20colors%20matching%20website%20theme&width=600&height=400&seq=portfolio-featured-project-v3&orientation=landscape"
                    alt="Featured project showcase"
                    className="w-full h-80 object-cover object-top rounded-2xl shadow-xl"
                  />
                  
                  {/* Success metrics overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-green-100">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3">
                        <i className="ri-trending-up-line text-white text-xl"></i>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">+300%</div>
                        <div className="text-xs text-gray-600">Revenue Growth</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client testimonial */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-blue-100 max-w-[200px]">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">"Absolutely transformed our business!"</p>
                    <div className="text-xs font-semibold text-gray-900">- TechCorp CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          {/* <div className={`text-center mt-16 ${isVisible ? 'animate-slideInUp delay-1500' : 'opacity-0'}`}>
            <div className="flex items-center justify-center text-gray-500">
              <div className="w-12 h-12 border-2 border-blue-300 rounded-full flex items-center justify-center mr-4 hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
                <i className="ri-arrow-down-line animate-bounce text-blue-600"></i>
              </div>
              <span className="text-lg font-medium">Explore More Projects Below</span>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
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
        
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
