
'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhyChooseSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation & Creativity',
      description: 'We leverage cutting-edge technology and creative thinking to deliver solutions that set you apart from the competition and drive market leadership.',
      stats: { value: '98%', label: 'Innovation Rate' }
    },
    {
      icon: 'ri-award-line',
      title: 'Proven Excellence',
      description: 'With 500+ successful projects and industry recognition, we deliver consistent results that exceed expectations and drive sustainable growth.',
      stats: { value: '500+', label: 'Projects Delivered' }
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience and expertise to every project, ensuring superior outcomes and technical excellence.',
      stats: { value: '50+', label: 'Expert Specialists' }
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Dedicated Support',
      description: 'Round-the-clock support and personalized service ensure your success at every stage of your journey with comprehensive assistance.',
      stats: { value: '24/7', label: 'Support Coverage' }
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Reliability',
      description: 'Enterprise-grade security and reliability ensure your data and operations are always protected with military-level encryption.',
      stats: { value: '99.9%', label: 'Uptime Guarantee' }
    },
    {
      icon: 'ri-rocket-line',
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business, providing flexibility and scalability for long-term success and sustainable expansion.',
      stats: { value: '10x', label: 'Growth Potential' }
    }
  ];

  // Fixed deterministic particle positions to prevent hydration mismatch
  const staticParticles = [
    { left: '23%', top: '17%' },
    { left: '42%', top: '48%' },
    { left: '61%', top: '79%' },
    { left: '80%', top: '10%' },
    { left: '99%', top: '41%' },
    { left: '18%', top: '72%' },
    { left: '37%', top: '3%' },
    { left: '56%', top: '34%' },
    { left: '75%', top: '65%' },
    { left: '94%', top: '96%' },
    { left: '13%', top: '27%' },
    { left: '32%', top: '58%' },
    { left: '51%', top: '89%' },
    { left: '70%', top: '20%' },
    { left: '89%', top: '51%' },
    { left: '8%', top: '82%' },
    { left: '27%', top: '13%' },
    { left: '46%', top: '44%' },
    { left: '65%', top: '75%' },
    { left: '84%', top: '6%' },
    { left: '3%', top: '37%' },
    { left: '22%', top: '68%' },
    { left: '41%', top: '99%' },
    { left: '60%', top: '30%' },
    { left: '79%', top: '61%' }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden py-12 md:py-20 lg:py-28"
    >
      {/* Background elements matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-4 md:left-8 lg:left-16 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-4 md:right-8 lg:right-16 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-8 md:right-16 lg:right-32 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-4 md:left-8 lg:left-1/4 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>

      {/* Blue themed floating particles with fixed positions */}
      <div className="absolute inset-0">
        {staticParticles.map((particle, index) => (
          <div
            key={index}
            className="absolute animate-ping"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: `${(index * 0.24 + 0.3) % 6}s`,
              animationDuration: `${2 + ((index * 0.16) % 4)}s`
            }}
          >
            <div className="w-1 h-1 rounded-full bg-blue-400/40"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        {/* Section header with blue theme */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <div className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 md:mb-8 shadow-lg transition-all duration-1000 hover:scale-110 cursor-pointer ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <i className="ri-star-line mr-2 md:mr-3 text-base md:text-lg text-blue-500 animate-spin" style={{ animationDuration: '4s' }}></i>
            Why Choose Notus Technologies
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full ml-2 md:ml-3 animate-pulse"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Your Success is Our Priority
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            Discover why leading brands trust Notus Technologies for their digital transformation and marketing solutions. Our commitment to excellence drives exceptional results.
          </p>
        </div>

        {/* Features grid with blue theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer border border-blue-100 overflow-hidden transform hover:scale-105 hover:-rotate-1 ${
                activeFeature === index ? 'ring-4 ring-blue-300/50 ring-offset-2 md:ring-offset-4 scale-105' : ''
              } ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${0.8 + index * 0.15}s`,
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => setActiveFeature(index)}
            >
              {/* Blue background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-90 transition-all duration-500"></div>

              {/* Blue themed icon */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl md:rounded-3xl mb-4 md:mb-6 lg:mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl mx-auto">
                <i className={`${feature.icon} text-2xl md:text-3xl text-white group-hover:animate-bounce`}></i>
                <div className="absolute inset-0 bg-white/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Blue pulsing ring effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 animate-ping group-hover:animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4 lg:mb-5 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 md:mb-6 lg:mb-8 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Stats with blue theme */}
                <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-blue-100 group-hover:border-blue-200 transition-colors duration-300">
                  <div className="text-left">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {feature.stats.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-500 group-hover:text-slate-600 transition-colors">{feature.stats.label}</div>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-200 group-hover:scale-125 transition-all duration-300 cursor-pointer">
                    <i className="ri-arrow-right-line text-blue-600 text-sm md:text-base group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300"></i>
                  </div>
                </div>

                {/* Blue progress bar */}
                <div className="mt-6 w-full bg-blue-100 rounded-full h-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: activeFeature === index ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              </div>

              {/* Blue decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin" style={{ animationDuration: '12s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping" style={{ animationDuration: '3s' }}></div>
            </div>
          ))}
        </div>

        {/* Bottom testimonial with blue theme */}
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 shadow-2xl border border-blue-200 transition-all duration-1000 delay-1200 hover:scale-105 cursor-pointer group ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <div className="flex justify-center mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className="ri-star-fill text-xl md:text-2xl lg:text-3xl mx-0.5 md:mx-1 animate-pulse group-hover:animate-bounce text-blue-400"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></i>
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-slate-900 mb-4 md:mb-6 lg:mb-8 italic leading-relaxed px-4 group-hover:text-slate-800 transition-colors duration-500">
              "Notus Technologies transformed our digital presence completely. Their innovative approach, dedicated support, and exceptional results made all the difference in our growth journey."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20executive%20headshot%2C%20confident%20CEO%20in%20modern%20office%2C%20professional%20corporate%20portrait%2C%20business%20leader%20with%20suit%2C%20clean%20background%2C%20professional%20lighting&width=80&height=80&seq=testimonial-ceo-v3&orientation=squarish" 
                alt="CEO"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-blue-200 group-hover:border-blue-300 transition-colors duration-300 flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-slate-900 text-base md:text-lg group-hover:text-slate-700 transition-colors">Sarah Johnson</div>
                <div className="text-slate-600 text-sm md:text-base group-hover:text-slate-700 transition-colors">CEO, TechCorp Inc.</div>
                <div className="text-xs md:text-sm text-slate-500">Fortune 500 Company</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300 px-4">
            <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">150+</div>
              <div className="text-xs md:text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="w-1 h-8 md:h-10 bg-gradient-to-b from-blue-300 to-indigo-500 rounded-full hidden sm:block"></div>
            <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">500+</div>
              <div className="text-xs md:text-sm text-slate-600">Successful Projects</div>
            </div>
            <div className="w-1 h-8 md:h-10 bg-gradient-to-b from-blue-300 to-indigo-500 rounded-full hidden sm:block"></div>
            <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">99%</div>
              <div className="text-xs md:text-sm text-slate-600">Success Rate</div>
            </div>
            <div className="w-1 h-8 md:h-10 bg-gradient-to-b from-blue-300 to-indigo-500 rounded-full hidden sm:block"></div>
            <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-xs md:text-sm text-slate-600">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
