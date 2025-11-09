
'use client';

import { useState, useEffect, useRef } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

export default function FAQSection({ faqs: customFAQs }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
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

  const defaultFAQs = [
    {
      question: "What services does Notus Technologies offer?",
      answer: "We provide comprehensive digital solutions including web development, mobile app development, digital marketing & SEO, cloud solutions, and custom software development. Our expert team delivers innovative technology solutions tailored to your business needs."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary based on complexity and scope. Web development projects typically take 4-8 weeks, mobile apps 8-16 weeks, and marketing campaigns 3-6 months for optimal results. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We offer 24/7 technical support and maintenance packages for all our solutions. This includes regular updates, security monitoring, performance optimization, and technical assistance to ensure your systems run smoothly."
    },
    {
      question: "What makes Notus Technologies different from other agencies?",
      answer: "Our unique combination of cutting-edge technology, proven expertise, and personalized service sets us apart. With 500+ successful projects, 98% success rate, and 24/7 support, we deliver exceptional results that drive real business growth."
    },
    {
      question: "Can you work with our existing systems and infrastructure?",
      answer: "Absolutely! We specialize in seamless integration with existing systems. Our team conducts thorough assessments to ensure compatibility and can migrate, upgrade, or enhance your current infrastructure without disrupting operations."
    },
    {
      question: "What is your pricing model and do you offer free consultations?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Every engagement starts with a free consultation where we assess your needs and provide transparent pricing with no hidden costs."
    },
    {
      question: "How do you ensure project quality and meet deadlines?",
      answer: "We use agile development methodologies with regular milestone reviews, automated testing, and quality assurance processes. Our project managers provide weekly updates and ensure deliverables meet specifications and timelines."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to Fortune 500 companies. We offer scalable solutions and flexible payment plans to accommodate different budgets and growth stages."
    }
  ];

  const faqs = customFAQs || defaultFAQs;

  // Fixed deterministic particle positions to prevent hydration mismatch
  const staticParticles = [
    { left: '23%', top: '17%' },
    { left: '46%', top: '37%' },
    { left: '69%', top: '57%' },
    { left: '92%', top: '77%' },
    { left: '15%', top: '97%' },
    { left: '38%', top: '9%' },
    { left: '61%', top: '29%' },
    { left: '84%', top: '49%' },
    { left: '7%', top: '69%' },
    { left: '30%', top: '89%' },
    { left: '53%', top: '1%' },
    { left: '76%', top: '21%' },
    { left: '99%', top: '41%' },
    { left: '22%', top: '61%' },
    { left: '45%', top: '81%' },
    { left: '68%', top: '3%' },
    { left: '91%', top: '23%' },
    { left: '14%', top: '43%' },
    { left: '37%', top: '63%' },
    { left: '60%', top: '83%' }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
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
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: `${(index * 0.3 + 0.5) % 4}s`,
              animationDuration: `${3 + (index % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header with blue theme */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-6 md:mb-8 transition-all duration-1000 hover:scale-105 cursor-pointer ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}>
            <i className="ri-question-line mr-2 md:mr-3 text-base md:text-lg text-blue-500"></i>
            Frequently Asked Questions
            <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full ml-2 md:ml-3 animate-pulse"></div>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8 px-4 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Got Questions?
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            Find answers to the most common questions about our services, process, and how we can help transform your business with innovative technology solutions.
          </p>
        </div>

        {/* FAQ Items with blue theme */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-blue-100 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all duration-300 cursor-pointer group-hover:scale-[1.02]"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 pr-2 md:pr-4">
                  {faq.question}
                </h3>
                <div className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0 transition-all duration-300 ${openFAQ === index ? 'bg-blue-600 rotate-180' : 'group-hover:bg-blue-200'}`}>
                  <i className={`ri-arrow-down-line text-base md:text-lg transition-colors duration-300 ${openFAQ === index ? 'text-white' : 'text-blue-600'}`}></i>
                </div>
              </button>
              
              <div className={`transition-all duration-500 overflow-hidden ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-4 md:px-6 md:pb-5 lg:px-8 lg:pb-6">
                  <div className="pt-4 border-t border-blue-100">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with blue theme */}
        <div className={`text-center mt-8 md:mt-12 lg:mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer">
            {/* Background elements with fixed positions */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300">
                <i className="ri-customer-service-line text-white mr-2 md:mr-3 text-sm md:text-base"></i>
                <span className="text-white font-medium text-xs sm:text-sm md:text-base">Still Have Questions?</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
                Let's Talk About Your Project
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Get personalized answers and a free consultation to discuss your specific needs and goals.
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <button className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap hover:shadow-2xl hover:scale-110 group/btn">
                  <span className="flex items-center justify-center">
                    <i className="ri-phone-line mr-2 md:mr-3 group/btn:hover:animate-bounce"></i>
                    Schedule Free Call
                  </span>
                </button>
                <button className="border-2 border-white/50 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap hover:bg-white/10 hover:scale-110">
                  <span className="flex items-center justify-center">
                    <i className="ri-mail-line mr-2 md:mr-3"></i>
                    Send Message
                  </span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
