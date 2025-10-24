
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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

  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Build responsive, high-performance websites and web applications that engage users and drive business growth with modern technologies.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'Performance Optimization'],
      image: 'https://readdy.ai/api/search-image?query=Web%20development%20team%20coding%20with%20blue-themed%20IDE%20and%20websites%2C%20responsive%20design%20on%20multiple%20screens%2C%20modern%20blue%20interface%20elements%2C%20developers%20working%20on%20laptops%2C%20blue%20and%20white%20workspace%2C%20clean%20development%20environment&width=600&height=400&seq=web-blue-v1&orientation=landscape',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      price: '$2,999',
      duration: '2-4 months',
      link: '/services/web-development'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications with cutting-edge technology, intuitive design, and seamless user experiences across all platforms.',
      features: ['iOS & Android Apps', 'Cross-Platform Development', 'UI/UX Design', 'App Store Optimization'],
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20with%20blue%20interface%20design%2C%20developers%20working%20on%20smartphones%20and%20tablets%2C%20modern%20blue-themed%20app%20mockups%2C%20iOS%20and%20Android%20development%20workspace%2C%20blue%20UI%20elements%2C%20clean%20tech%20environment&width=600&height=400&seq=mobile-blue-v1&orientation=landscape',
      color: 'from-indigo-600 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50',
      price: '$15,999',
      duration: '4-6 months',
      link: '/services/mobile-development'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user satisfaction and drive business results through thoughtful user experience research and testing.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      image: 'https://readdy.ai/api/search-image?query=UI%20UX%20design%20workspace%20with%20blue-themed%20interface%20mockups%2C%20designers%20working%20on%20wireframes%20and%20prototypes%2C%20modern%20design%20tools%2C%20blue%20color%20palette%2C%20creative%20design%20environment%2C%20user%20experience%20research&width=600&height=400&seq=uiux-blue-v1&orientation=landscape',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      price: '$4,999',
      duration: '2-3 months',
      link: '/services/ui-ux-design'
    },
    {
      icon: 'ri-search-line',
      title: 'Digital Marketing',
      description: 'Boost your online presence with data-driven marketing strategies, comprehensive SEO optimization, and targeted campaigns that deliver measurable results.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
      image: 'https://readdy.ai/api/search-image?query=Digital%20marketing%20team%20working%20with%20blue-themed%20analytics%20dashboard%2C%20SEO%20optimization%20tools%20on%20screens%2C%20modern%20office%20with%20blue%20lighting%2C%20marketing%20professionals%20analyzing%20data%2C%20blue%20and%20white%20color%20scheme%2C%20clean%20tech%20workspace&width=600&height=400&seq=marketing-blue-v1&orientation=landscape',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      price: '$2,499',
      duration: '3-6 months',
      link: '/services/digital-marketing'
    }
  ];

  const additionalServices = [
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Transform your business with scalable cloud infrastructure, seamless migrations, and robust security solutions.',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/cloud-solutions'
    },
    {
      icon: 'ri-brain-line',
      title: 'AI & Analytics',
      description: 'Advanced AI solutions and data analytics to unlock insights and automate business processes intelligently.',
      color: 'from-indigo-600 to-blue-600',
      link: '/services/ai-analytics'
    }
  ];

  // Generate deterministic particle positions
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      // Use deterministic values based on index
      const left = ((i * 23 + 17) % 100);
      const top = ((i * 37 + 29) % 100);
      const delay = (i * 0.7 + 0.5) % 5;
      const duration = 3 + (i % 4);
      
      particles.push({
        id: i,
        left: `${left}%`,
        top: `${top}%`,
        delay: `${delay}s`,
        duration: `${duration}s`
      });
    }
    return particles;
  };

  return (
    <section ref={sectionRef} className="py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/8 to-blue-300/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Deterministic floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {generateParticles().map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced section header */}
        <div className="text-center mb-24">
          <div className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-700 rounded-full text-sm font-semibold mb-8 transition-all duration-1000 hover:scale-105 cursor-pointer ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <i className="ri-service-line mr-3 text-lg"></i>
            Comprehensive Solutions
            <div className="w-3 h-3 bg-blue-500 rounded-full ml-3 animate-pulse"></div>
          </div>
          <h2 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            We deliver innovative solutions that transform your business through cutting-edge technology, strategic expertise, and exceptional results.
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-blue-100 cursor-pointer transform hover:scale-105 ${
                activeService === index ? 'ring-4 ring-blue-300 ring-offset-4 scale-105' : ''
              } ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${0.8 + index * 0.2}s`,
                transitionDelay: `${index * 100}ms`
              }}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Enhanced background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-90 transition-all duration-500`}></div>
              
              {/* Enhanced service image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-blue-900/30 group-hover:from-blue-900/80 transition-all duration-500"></div>
                
                {/* Enhanced service icon */}
                <div className={`absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-gradient-to-r ${service.color} rounded-2xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  <i className={`${service.icon} text-2xl text-white group-hover:animate-bounce`}></i>
                </div>

                {/* Pricing badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200 group-hover:scale-110 transition-all duration-300">
                  <div className="text-blue-600 font-bold text-sm">{service.price}</div>
                </div>

                {/* Duration indicator */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200 group-hover:scale-110 transition-all duration-300">
                  <div className="text-blue-600 font-medium text-sm">{service.duration}</div>
                </div>
              </div>
              
              {/* Enhanced content */}
              <div className="p-10 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5 group-hover:text-blue-600 transition-all duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Enhanced features list */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center group/feature hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:animate-pulse`}></div>
                      <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced CTA button with link */}
                <Link 
                  href={service.link}
                  className={`block w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-semibold transition-all duration-500 cursor-pointer whitespace-nowrap hover:shadow-2xl hover:scale-105 relative overflow-hidden text-center`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="group-hover:mr-2 transition-all duration-300">Learn More</span>
                    <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"></i>
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {additionalServices.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-200 cursor-pointer hover:scale-105 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${1.6 + index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${service.color} rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-all duration-300">
                Explore Service
                <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced bottom CTA section */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 rounded-3xl p-16 relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer">
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 group-hover:scale-110 transition-all duration-300">
                <i className="ri-star-line text-yellow-400 mr-2 animate-pulse"></i>
                <span className="text-white text-sm font-medium">Ready to Transform Your Business?</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 group-hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Let's Build Something Amazing
                </span>
              </h3>
              <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join 500+ successful businesses that trust us for their digital transformation. Start your project today and see the difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap hover:shadow-2xl hover:scale-110 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <i className="ri-rocket-line mr-3 group/btn-hover:animate-bounce"></i>
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform translate-x-full group/btn-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-white/10 hover:scale-110 backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center">
                    <i className="ri-eye-line mr-3"></i>
                    View All Services
                  </span>
                </Link>
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
