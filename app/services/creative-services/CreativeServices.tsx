'use client';

import { useState } from 'react';

export default function CreativeServices() {
  const [activeTab, setActiveTab] = useState('services');

  const creativeServices = [
    {
      icon: "ri-image-line",
      title: "Graphic Design",
      description: "Eye-catching visual designs that communicate your message and strengthen your brand identity.",
      features: ["Logo & Identity", "Print Design", "Digital Graphics", "Infographics", "Marketing Materials"]
    },
    {
      icon: "ri-article-line",
      title: "Content Creation",
      description: "Compelling written content that engages your audience and drives action across all platforms.",
      features: ["Blog Writing", "Social Media Content", "Website Copy", "Marketing Materials", "SEO Content"]
    },
    {
      icon: "ri-video-line",
      title: "Video Production",
      description: "Professional video content from concept to completion that tells your story effectively.",
      features: ["Promotional Videos", "Explainer Videos", "Product Demos", "Social Media Videos", "Live Streaming"]
    },
    {
      icon: "ri-camera-line",
      title: "Photography Services",
      description: "High-quality photography for products, events, portraits, and commercial applications.",
      features: ["Product Photography", "Event Coverage", "Corporate Portraits", "Architecture", "Lifestyle Shots"]
    },
    {
      icon: "ri-movie-line",
      title: "Animation & Motion Graphics",
      description: "Dynamic animations and motion graphics that bring your ideas to life with engaging visuals.",
      features: ["2D Animation", "Motion Graphics", "Character Animation", "Explainer Animations", "Logo Animation"]
    },
    {
      icon: "ri-edit-line",
      title: "Post-Production",
      description: "Professional editing and post-production services to polish and perfect your creative content.",
      features: ["Video Editing", "Color Correction", "Sound Design", "Visual Effects", "Final Output"]
    }
  ];

  // New Technologies & Tools section
  const technologies = [
    {
      category: "Design Software",
      tools: ["Adobe Creative Suite (Photoshop, Illustrator, InDesign)", "Sketch", "Figma", "Canva", "CorelDRAW"]
    },
    {
      category: "Video & Animation",
      tools: ["Adobe After Effects", "Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "Cinema 4D"]
    },
    {
      category: "Photography",
      tools: ["Lightroom", "Capture One", "Phase One", "Professional Camera Systems"]
    },
    {
      category: "3D & Motion",
      tools: ["Blender", "Maya", "3ds Max", "Motion Graphics Templates"]
    }
  ];

  // Expanded services based on image content
  const expandedServices = [
    {
      category: "Logo Design",
      description: "Professional logo creation and brand mark development",
      services: ["Brand marks & icons", "Logo design & applications", "Logo usage guidelines"]
    },
    {
      category: "Marketing Collateral",
      description: "Complete marketing materials that support your campaigns and help communicate your brand message effectively",
      services: ["Flyers & posters", "Business cards & stationery", "Brochures", "Social media graphics & ads", "Business cards & stationery"]
    },
    {
      category: "Packaging Design",
      description: "Eye-catching packaging that makes your products stand out and drives sales",
      services: ["Brand & ecommerce packaging", "Eco-friendly & sustainable packaging designs", "Packaging prototypes optimization"]
    },
    {
      category: "Web Production & Animation",
      description: "Digital assets and animations that enhance your online presence",
      services: ["Website animations and interactive graphics", "Product demos & tutorials", "Animated explainer videos", "Interactive content design", "Motion graphics & icons"]
    }
  ];

  // Additional Creative Services from image
  const additionalServices = [
    "Infographics & Data Visualization",
    "Email Template Design",
    "Storyboard PSD & E-books",
    "Presentation Design (PowerPoint/Keynote)",
    "Event Branding & Signage"
  ];

  const creativeProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your creative vision and defining project goals to create strategic direction.",
      icon: "ri-search-line"
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Brainstorming and developing initial design concepts that align with your objectives.",
      icon: "ri-lightbulb-line"
    },
    {
      step: "03",
      title: "Design & Refinement",
      description: "Creating detailed designs and iterating based on your feedback and requirements.",
      icon: "ri-brush-line"
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery with ongoing support for any additional creative needs or implementations.",
      icon: "ri-download-line"
    }
  ];

  // FAQ Section in English
  const faqData = [
    {
      question: "What creative services do you offer?",
      answer: "We offer comprehensive creative services including graphic design, video production, photography, animation, content creation, post-production, logo design, marketing collateral, packaging design, and web production & animation."
    },
    {
      question: "How long does a typical creative project take?",
      answer: "Project timelines vary depending on scope and complexity. Simple designs may take 3-5 days, while comprehensive video productions or animation projects can take 2-4 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide revisions on creative work?",
      answer: "Yes! We include up to 3 rounds of revisions in our standard packages. Additional revisions can be accommodated for an additional fee. We want to ensure you're completely satisfied with the final creative output."
    },
    {
      question: "What file formats do you deliver?",
      answer: "We deliver files in industry-standard formats including AI, PSD, PDF, PNG, JPG for graphics, and MP4, MOV, AVI for video content. We also provide web-optimized versions and source files as needed."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines and style requirements. If you don't have brand guidelines, we can help create them as part of our brand identity services."
    },
    {
      question: "Do you offer rush or expedited creative services?",
      answer: "Yes, we offer rush services for urgent projects with a 50% surcharge. Rush projects can be completed in 24-48 hours depending on complexity. Contact us to discuss your timeline requirements."
    },
    {
      question: "What industries do you create content for?",
      answer: "We work with clients across all industries including technology, healthcare, retail, education, finance, real estate, hospitality, and more. Our creative team adapts to each industry's unique requirements and standards."
    },
    {
      question: "Do you provide creative concepts and strategy?",
      answer: "Yes! We don't just execute designs - we provide creative strategy, concept development, and strategic recommendations to ensure your creative content achieves your marketing and business objectives."
    },
    {
      question: "Can you handle large-scale creative campaigns?",
      answer: "Absolutely! We have experience managing large creative campaigns across multiple channels and formats. We can coordinate video, print, digital, and social media creative assets for comprehensive campaign rollouts."
    },
    {
      question: "What's included in your creative consultation?",
      answer: "Our creative consultation includes project discovery, creative strategy development, concept presentation, timeline planning, and detailed project proposals. The initial consultation is complimentary for qualified projects."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Creative Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-palette-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Creative Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Creative Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visual design to video production, we create content that captivates and converts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Specialized Creative <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions tailored to your specific needs and industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {expandedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.category}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Creative Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-xl">
                  <i className="ri-check-line text-blue-600 mr-3"></i>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading software and tools to deliver professional creative results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="text-sm text-gray-600">
                      • {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Creative <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to creating impactful visual content that achieves your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center mr-4">
                    {process.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <i className={`${process.icon} text-blue-600 text-xl`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our creative services
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-blue-100/50 transition-colors duration-200 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-blue-600 text-xl`}></i>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-blue-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}