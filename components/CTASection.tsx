
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CTASection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const ctaOptions = [
    {
      icon: 'ri-rocket-line',
      title: 'Start Your Project',
      description: 'Transform your business with our cutting-edge solutions. Get a free consultation and discover how we can accelerate your growth.',
      action: 'Get Free Consultation',
      href: '/contact',
      price: 'Free',
      duration: '30 min'
    },
    {
      icon: 'ri-phone-line',
      title: 'Schedule a Call',
      description: 'Speak directly with our experts to explore tailored solutions that fit your specific business needs and objectives or book a strategy call.',
      action: 'Book Strategy Call',
      href: '/contact',
      price: 'Free',
      duration: '45 min'
    },
    {
      icon: 'ri-eye-line',
      title: 'View Portfolio',
      description: 'Explore our comprehensive portfolio of successful projects and see how we\'ve helped businesses like yours achieve remarkable results.',
      action: 'View Our Work',
      href: '/portfolio',
      price: 'Browse',
      duration: 'Free'
    }
  ];

  // Fixed deterministic particle positions to prevent hydration mismatch
  const staticParticles = [
    { left: '31%', top: '17%' },
    { left: '58%', top: '48%' },
    { left: '85%', top: '79%' },
    { left: '12%', top: '10%' },
    { left: '39%', top: '41%' },
    { left: '66%', top: '72%' },
    { left: '93%', top: '3%' },
    { left: '20%', top: '34%' },
    { left: '47%', top: '65%' },
    { left: '74%', top: '96%' },
    { left: '1%', top: '27%' },
    { left: '28%', top: '58%' },
    { left: '55%', top: '89%' },
    { left: '82%', top: '20%' },
    { left: '9%', top: '51%' },
    { left: '36%', top: '82%' },
    { left: '63%', top: '13%' },
    { left: '90%', top: '44%' },
    { left: '17%', top: '75%' },
    { left: '44%', top: '6%' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-white overflow-hidden py-28"
    >
      


      <div className="relative max-w-7xl mx-auto px-3">
        {/* Section header with blue theme */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg transition-all duration-1000 hover:scale-105 cursor-pointer ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <i className="ri-rocket-line mr-3 text-lg text-blue-500 animate-bounce"></i>
            Ready to Get Started?
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full ml-3 animate-pulse"></div>
          </div>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Let's Build Something Great
            </span>
          </h2>
          <p className={`text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            Transform your business with our innovative solutions. Choose how you'd like to begin your journey with us and start creating exceptional results today.
          </p>
        </div>

        {/* CTA Cards with blue theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer border border-blue-100 overflow-hidden transform hover:scale-110 ${hoveredCard === index ? 'scale-105' : ''} ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${0.8 + index * 0.2}s`,
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Blue background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-90 transition-all duration-500"></div>

              {/* Blue themed icon */}
              <div className="relative w-20 h-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg mx-auto">
                <i className={`${option.icon} text-3xl text-white group-hover:animate-bounce`}></i>
                <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  {option.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 group-hover:text-slate-700 transition-colors duration-300">
                  {option.description}
                </p>

                {/* Blue pricing and duration */}
                <div className="flex justify-between items-center mb-8 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-lg">{option.price}</div>
                    <div className="text-blue-500 text-sm">Cost</div>
                  </div>
                  <div className="w-1 h-8 bg-blue-200 rounded-full"></div>
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-lg">{option.duration}</div>
                    <div className="text-blue-500 text-sm">Duration</div>
                  </div>
                </div>

                {/* Blue CTA Button */}
                <Link
                  href={option.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 cursor-pointer whitespace-nowrap hover:shadow-2xl group-hover:scale-110 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="group-hover:mr-3 transition-all duration-300">{option.action}</span>
                    <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 text-xl"></i>
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              </div>

              {/* Blue decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Main CTA banner with blue theme */}
        <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-blue-800 via-indigo-800 to-blue-900 rounded-3xl p-16 relative overflow-hidden group hover:scale-105 transition-all duration-700 cursor-pointer">
            {/* Blue background elements with fixed positions */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/15 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-cyan-400/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
              <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-blue-300/12 rounded-full blur-2xl animate-pulse delay-3000"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-10 group-hover:scale-110 transition-all duration-300">
                <i className="ri-star-line text-blue-300 mr-3 animate-pulse"></i>
                <span className="text-white/90 font-medium">500+ Successful Projects Completed</span>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full ml-3 animate-ping"></div>
              </div>

              <h3 className="text-5xl md:text-7xl font-bold text-white mb-10 group-hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h3>
              <p className="text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                Join hundreds of successful businesses that trust us for their digital transformation journey. Let's create something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-12 py-6 rounded-2xl font-semibold text-xl transition-all duration-500 cursor-pointer whitespace-nowrap hover:shadow-2xl hover:scale-110 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="ri-rocket-line mr-4 text-xl md:text-2xl group/btn:hover:animate-bounce"></i>
                    <span className="text-base md:text-xl">Start Your Project Now</span>
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform translate-x-full group/btn:hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white/50 text-white px-12 py-6 rounded-2xl font-semibold text-xl transition-all duration-500 cursor-pointer whitespace-nowrap hover:bg-white/10 hover:scale-110 backdrop-blur-md"
                >
                  <span className="flex items-center justify-center">
                    <i className="ri-eye-line mr-4 text-2xl"></i>
                    View Our Portfolio
                  </span>
                </Link>
              </div>

              {/* Blue themed contact info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-blue-200">
                <a href="mailto:support@notustechnologies.co.in" className="flex items-center group/contact hover:text-blue-100 transition-colors duration-300 cursor-pointer">
                  <i className="ri-mail-line mr-3 group/contact:hover:animate-bounce"></i>
                  <span>support@notustechnologies.co.in</span>
                </a>
                <div className="flex items-center group/contact hover:text-blue-100 transition-colors duration-300">
                  <i className="ri-phone-line mr-3 group/contact:hover:animate-bounce"></i>
                  <span>+91 9911433392</span>
                </div>
                <div className="flex items-center group/contact hover:text-blue-100 transition-colors duration-300">
                  <i className="ri-phone-line mr-3 group/contact:hover:animate-bounce"></i>
                  <span>+91 8250983407</span>
                </div>
                <div className="flex items-center group/contact hover:text-blue-100 transition-colors duration-300">
                  <i className="ri-time-line mr-3 group/contact:hover:animate-bounce"></i>
                  <span>24/7 Expert Support</span>
                </div>
              </div>
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
