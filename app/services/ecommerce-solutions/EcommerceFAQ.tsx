
'use client';

import { useState } from 'react';

export default function EcommerceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "How long does e-commerce website development take?",
      answer: "E-commerce website development typically takes 4-12 weeks, depending on project complexity. Simple stores need 4-6 weeks, while complex multi-feature e-commerce platforms require 8-12 weeks. We provide detailed timeline planning before project start."
    },
    {
      question: "Which e-commerce platforms do you support?",
      answer: "We support multiple e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and other mainstream platforms. We can also develop completely custom e-commerce solutions. We recommend the most suitable platform based on your specific needs."
    },
    {
      question: "What does an e-commerce website cost?",
      answer: "Costs vary based on project requirements. Basic e-commerce websites start from $5,000, medium complexity projects range $10,000-$25,000, enterprise-level e-commerce platforms from $25,000+. We provide free consultation and detailed quotes."
    },
    {
      question: "What payment methods do you support?",
      answer: "We integrate all mainstream payment gateways including PayPal, Stripe, Square, Apple Pay, Google Pay, and more. We also support traditional payment methods like bank transfers and cash on delivery, ensuring customers have convenient payment options."
    },
    {
      question: "Are e-commerce websites mobile-friendly?",
      answer: "Yes, all our e-commerce websites use responsive design, perfectly adapting to mobile phones, tablets, and desktop devices. We can also develop dedicated mobile applications for enhanced mobile shopping experiences."
    },
    {
      question: "How do you manage inventory and orders?",
      answer: "We provide complete backend management systems including inventory tracking, automatic stock alerts, order management, customer management, and more. The system supports multi-warehouse management, supplier integration, and detailed sales reporting."
    },
    {
      question: "How do you ensure website security?",
      answer: "We implement multiple security measures including SSL encryption, PCI DSS compliance, secure payment processing, and regular security updates. All customer data and transaction information is encrypted and protected for absolute security."
    },
    {
      question: "Do you provide SEO optimization?",
      answer: "Yes, our e-commerce websites include built-in SEO best practices including optimized URL structure, meta tags, structured data, fast loading speeds, and more to help your store achieve better search engine rankings."
    },
    {
      question: "What support do you provide after project completion?",
      answer: "We provide 24/7 technical support, regular backups, security updates, performance monitoring, and maintenance services. We also provide staff training to ensure your team can efficiently use the management system."
    },
    {
      question: "Do you support multi-language and multi-currency?",
      answer: "Yes, we can build internationalized e-commerce platforms supporting multiple languages and currencies. The system automatically handles exchange rate conversion, tax calculations, and shipping rules for different regions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
            <i className="ri-question-line mr-2 text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-700">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">E-commerce Development</span> FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions and answers about e-commerce website development
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-blue-600 transition-transform duration-200`}></i>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Have more questions?</p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center mx-auto">
            <i className="ri-chat-3-line mr-3"></i>
            Contact Us for Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
}