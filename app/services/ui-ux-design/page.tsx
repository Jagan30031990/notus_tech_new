
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import UIUXHero from './UIUXHero';
import UIUXServices from './UIUXServices';
import UIUXCTA from './UIUXCTA';

// FAQ Section Component
function UIUXFAQSection() {
  const faqs = [
    {
      question: "What is included in your UI/UX design process?",
      answer: "Our comprehensive UI/UX design process includes user research and persona development, information architecture, wireframing, visual design, prototyping, user testing, and design system creation. We ensure every step focuses on creating exceptional user experiences that drive business results."
    },
    {
      question: "How long does a typical UI/UX design project take?",
      answer: "Project timelines vary based on complexity and scope. Simple redesigns take 4-6 weeks, while comprehensive UI/UX projects for complex applications can take 8-16 weeks. We provide detailed timelines and milestones during our initial consultation to ensure clear expectations."
    },
    {
      question: "Do you conduct user research and testing?",
      answer: "Absolutely! User research and testing are fundamental to our design process. We conduct user interviews, surveys, usability testing, A/B testing, and analyze user behavior data to make informed design decisions that truly meet your users' needs and expectations."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Yes! We excel at working within existing brand guidelines while enhancing the user experience. We can adapt your current brand elements into compelling digital experiences or help evolve your brand identity to better serve your digital products and users."
    },
    {
      question: "What tools and software do you use for UI/UX design?",
      answer: "We use industry-leading tools including Figma, Adobe XD, Sketch for design, InVision and Marvel for prototyping, Hotjar and Google Analytics for user research, and various testing platforms like Maze and UsabilityHub for user validation and feedback collection."
    },
    {
      question: "Do you provide responsive design for mobile devices?",
      answer: "Absolutely! All our designs follow a mobile-first approach and are fully responsive across all devices and screen sizes. We ensure optimal user experience on smartphones, tablets, desktops, and other devices, with careful attention to touch interactions and mobile usability principles."
    },
    {
      question: "How do you ensure accessibility in your designs?",
      answer: "We follow WCAG (Web Content Accessibility Guidelines) standards to ensure our designs are inclusive and accessible to users with disabilities. This includes proper color contrast, keyboard navigation, screen reader compatibility, alternative text for images, and other accessibility best practices."
    },
    {
      question: "What's the difference between UI and UX design?",
      answer: "UX (User Experience) design focuses on the overall user journey, research, and how users interact with your product, while UI (User Interface) design focuses on the visual elements, layouts, and interactive components. We provide both services as they work together to create exceptional digital experiences."
    },
    {
      question: "Do you provide design systems and style guides?",
      answer: "Yes! We create comprehensive design systems that include component libraries, style guides, design tokens, brand standards, and detailed documentation. This ensures consistency across your product and makes future development and design work more efficient and cohesive."
    },
    {
      question: "Can you redesign our existing application or website?",
      answer: "Absolutely! We specialize in redesigning existing applications and websites to improve user experience, modernize the visual design, and enhance functionality. We start with a thorough UX audit to identify areas for improvement and then create solutions that address specific user pain points and business goals."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
            <i className="ri-question-line mr-2 text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-700">UI/UX Design FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our UI/UX design process, methodologies, and services
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q</span>
                  </div>
                  {faq.question}
                </h3>
                <div className="ml-12">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions About UI/UX Design?</h3>
            <p className="text-xl text-blue-100 mb-8">Get personalized answers and start your design project with a free consultation</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
              Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UIUXDesignPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <UIUXHero />
      <UIUXServices />
      <UIUXFAQSection />
      <UIUXCTA />
      <Footer />
    </div>
  );
}
