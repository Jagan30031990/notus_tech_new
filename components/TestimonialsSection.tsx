
'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp Inc.",
      company: "TechCorp Inc.",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20headshot%2C%20confident%20female%20executive%20in%20modern%20office%2C%20professional%20corporate%20portrait%2C%20business%20leader%20with%20suit%2C%20clean%20background%2C%20professional%20studio%20lighting&width=100&height=100&seq=testimonial-sarah-v3&orientation=squarish",
      content: "Notus Technologies completely transformed our digital marketing strategy with their innovative approach. Their data-driven solutions increased our ROI by 300% within just six months. The team's expertise, dedication, and commitment to excellence are truly unmatched in the industry.",
      rating: 5,
      project: "Digital Marketing Transformation",
      industry: "Technology",
      resultMetric: "300% ROI Increase"
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateLabs",
      company: "InnovateLabs",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20man%20CTO%20headshot%2C%20confident%20male%20executive%20in%20modern%20office%2C%20professional%20corporate%20portrait%2C%20tech%20leader%20with%20suit%2C%20clean%20background%2C%20professional%20lighting&width=100&height=100&seq=testimonial-michael-v3&orientation=squarish",
      content: "The mobile app development project exceeded all our expectations in every aspect. Notus delivered a cutting-edge solution that our users absolutely love, with exceptional performance and user experience. Their attention to detail and technical expertise was truly impressive throughout the entire process.",
      rating: 5,
      project: "Mobile App Development",
      industry: "Healthcare Technology",
      resultMetric: "4.9★ App Store Rating"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      image: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20business%20woman%20marketing%20director%20headshot%2C%20confident%20female%20executive%20in%20modern%20office%2C%20professional%20corporate%20portrait%2C%20marketing%20leader%20with%20suit%2C%20clean%20background%2C%20studio%20lighting&width=100&height=100&seq=testimonial-emily-v3&orientation=squarish",
      content: "Working with Notus on our experiential marketing campaign was an absolute game-changer for our brand. They created immersive, innovative experiences that drove incredible engagement and significantly boosted our brand awareness for our major product launch. Simply outstanding results and creativity.",
      rating: 5,
      project: "Experiential Marketing Campaign",
      industry: "Consumer Products",
      resultMetric: "250% Brand Awareness"
    },
    {
      name: "David Thompson",
      position: "Founder, StartupXYZ",
      company: "StartupXYZ",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20founder%20headshot%2C%20confident%20male%20entrepreneur%20in%20modern%20office%2C%20professional%20corporate%20portrait%2C%20startup%20founder%20with%20casual%20business%20attire%2C%20clean%20background%2C%20natural%20lighting&width=100&height=100&seq=testimonial-david-v3&orientation=squarish",
      content: "From initial concept to successful launch, Notus Technologies provided exceptional support and expertise at every step. Their comprehensive cloud solutions and strategic consulting services helped us scale rapidly while maintaining top-tier security and optimal performance. Truly a game-changing partnership.",
      rating: 5,
      project: "Cloud Infrastructure & Scaling",
      industry: "Financial Technology",
      resultMetric: "500% Growth in 12 Months"
    }
  ];

  // Fixed deterministic particle positions to prevent hydration mismatch
  const staticParticles = [
    { left: '29%', top: '17%' },
    { left: '42%', top: '48%' },
    { left: '55%', top: '79%' },
    { left: '68%', top: '10%' },
    { left: '81%', top: '41%' },
    { left: '94%', top: '72%' },
    { left: '7%', top: '3%' },
    { left: '20%', top: '34%' },
    { left: '33%', top: '65%' },
    { left: '46%', top: '96%' },
    { left: '59%', top: '27%' },
    { left: '72%', top: '58%' },
    { left: '85%', top: '89%' },
    { left: '98%', top: '20%' },
    { left: '11%', top: '51%' },
    { left: '24%', top: '82%' },
    { left: '37%', top: '13%' },
    { left: '50%', top: '44%' },
    { left: '63%', top: '75%' },
    { left: '76%', top: '6%' },
    { left: '89%', top: '37%' },
    { left: '2%', top: '68%' },
    { left: '15%', top: '99%' },
    { left: '28%', top: '30%' },
    { left: '41%', top: '61%' },
    { left: '54%', top: '92%' },
    { left: '67%', top: '23%' },
    { left: '80%', top: '54%' },
    { left: '93%', top: '85%' },
    { left: '6%', top: '16%' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-12 md:py-20 lg:py-28"
    >
      {/* Background elements matching homepage blue theme */}
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

      {/* Blue themed animated particles with fixed positions */}
      <div className="absolute inset-0">
        {staticParticles.map((particle, index) => (
          <div
            key={index}
            className="absolute animate-ping"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: `${(index * 0.17 + 0.2) % 5}s`,
              animationDuration: `${2 + ((index * 0.13) % 4)}s`
            }}
          >
            <div className="w-1 h-1 rounded-full blur-sm bg-blue-300/50"></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
        {/* Section header with blue theme */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-blue-300/20 mb-6 md:mb-8 transition-all duration-1000 hover:scale-110 cursor-pointer ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <i className="ri-chat-quote-line text-blue-300 mr-2 md:mr-3 text-base md:text-lg animate-pulse"></i>
            <span className="text-xs sm:text-sm font-medium text-white/90">Client Success Stories & Testimonials</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full ml-2 md:ml-3 animate-ping"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            Don't just take our word for it. Here's what industry leaders and innovative companies have to say about their transformative experiences working with Notus Technologies.
          </p>
        </div>

        {/* Main testimonial with blue theme */}
        <div className="relative max-w-6xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className={`bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 border border-blue-300/20 shadow-2xl hover:scale-105 transition-all duration-700 cursor-pointer group ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            {/* Blue themed quote icon */}
            <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <i className="ri-double-quotes-r text-2xl md:text-3xl lg:text-4xl text-white group-hover:animate-bounce"></i>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Testimonial content */}
            <div className="text-center mb-6 md:mb-8 lg:mb-10">
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white mb-4 md:mb-6 lg:mb-8 leading-relaxed px-2 group-hover:text-slate-100 transition-colors duration-500">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              {/* Blue themed rating */}
              <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className="ri-star-fill text-xl md:text-2xl lg:text-3xl mx-0.5 md:mx-1 animate-pulse group-hover:animate-bounce transition-all duration-300 hover:scale-125 cursor-pointer text-blue-400"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></i>
                ))}
              </div>

              {/* Blue result metric badge */}
              <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 backdrop-blur-sm rounded-full border border-blue-300/30 mb-4 md:mb-6 lg:mb-8">
                <i className="ri-trophy-line text-blue-300 mr-2 animate-pulse text-sm md:text-base"></i>
                <span className="text-white font-medium text-sm md:text-base">{testimonials[currentTestimonial].resultMetric}</span>
              </div>
            </div>

            {/* Client info with blue theme */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 group-hover:scale-105 transition-transform duration-300">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-blue-300/30 group-hover:border-blue-300/50 transition-all duration-300 flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-white text-lg md:text-xl lg:text-2xl group-hover:text-blue-100 transition-colors duration-300">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-200 text-sm md:text-base lg:text-lg">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-blue-300 text-xs md:text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-blue-200 font-medium text-sm md:text-base lg:text-lg">
                  {testimonials[currentTestimonial].project}
                </div>
                <div className="text-blue-300 text-xs md:text-sm">Project Type</div>
                <div className="text-blue-100 text-xs md:text-sm font-medium">
                  {testimonials[currentTestimonial].industry}
                </div>
              </div>
            </div>

            {/* Blue floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500/15 to-indigo-600/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
          </div>

          {/* Blue themed navigation */}
          <div className={`flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-6 md:mt-8 lg:mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-300/20 hover:bg-blue-500/20 hover:scale-125 transition-all duration-300 cursor-pointer group"
            >
              <i className="ri-arrow-left-line text-white text-lg md:text-xl group-hover:-translate-x-1 transition-transform duration-300"></i>
            </button>

            <div className="flex space-x-2 md:space-x-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-500 cursor-pointer hover:scale-125 ${
                    index === currentTestimonial 
                      ? 'w-8 h-3 md:w-10 md:h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full' 
                      : 'w-3 h-3 md:w-4 md:h-4 bg-white/40 hover:bg-blue-400/60 rounded-full'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-blue-300/20 hover:bg-blue-500/20 hover:scale-125 transition-all duration-300 cursor-pointer group"
            >
              <i className="ri-arrow-right-line text-white text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
          </div>
        </div>

        {/* Blue themed client logos section */}
        <div className={`mt-12 md:mt-16 lg:mt-24 transition-all duration-1000 delay-1200 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <div className="text-center mb-6 md:mb-8 lg:mb-12 px-4">
            <p className="text-blue-300 font-medium text-sm md:text-base">Trusted by industry leaders and innovative companies worldwide</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500 px-4">
            {[
              { name: "TechCorp", delay: '0s' },
              { name: "InnovateLabs", delay: '0.5s' },
              { name: "GrowthCo", delay: '1s' },
              { name: "StartupXYZ", delay: '1.5s' }
            ].map((company, index) => (
              <div key={index} className="text-center group flex items-center">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl font-bold group-hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse"
                  style={{ animationDelay: company.delay, animationDuration: '3s' }}
                >
                  {company.name}
                </div>
                {index < 3 && <div className="w-1 h-6 md:h-8 bg-blue-400/20 rounded-full mx-4 md:mx-6 lg:mx-8 group-hover:bg-blue-400/40 transition-colors duration-300"></div>}
              </div>
            ))}
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
