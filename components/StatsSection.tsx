'use client';
import { useEffect, useState, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: '500',
      suffix: '+',
      label: 'Projects Completed',
      icon: 'ri-code-s-slash-line'
    },
    {
      number: '150',
      suffix: '+',
      label: 'Happy Clients',
      icon: 'ri-team-line'
    },
    {
      number: '99',
      suffix: '%',
      label: 'Success Rate',
      icon: 'ri-award-line'
    },
    {
      number: '24',
      suffix: '/7',
      label: 'Support Available',
      icon: 'ri-customer-service-line'
    }
  ];

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

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6 px-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                isVisible ? 'animate-slideInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-3 md:mb-4 lg:mb-6">
                <i className={`${stat.icon} text-xl md:text-2xl text-blue-600`}></i>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                {stat.number}<span className="text-blue-600">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
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
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}