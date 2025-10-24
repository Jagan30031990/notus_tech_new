
'use client';

export default function BrandingServices() {
  const brandingServices = [
    {
      icon: "ri-palette-line",
      title: "Brand Logo & Identity Design",
      description: "Create unique brand logos and visual identities that reflect your brand's personality and values.",
      features: ["Custom Logo Design", "Icon Development", "Brand Symbols", "Logo Variations", "Usage Guidelines"]
    },
    {
      icon: "ri-layout-line", 
      title: "Visual Identity System",
      description: "Complete visual language including colors, fonts and design elements ensuring brand consistency.",
      features: ["Color Palette", "Typography Selection", "Image Style", "Layout Grid", "Visual Elements"]
    },
    {
      icon: "ri-book-open-line",
      title: "Brand Guidelines Manual",
      description: "Detailed brand standards ensuring consistent application of brand elements across all marketing materials.",
      features: ["Brand Manual", "Usage Rules", "Usage Restrictions", "Application Examples", "Digital Assets"]
    },
    {
      icon: "ri-lightbulb-line",
      title: "Brand Strategy Planning",
      description: "Strategic brand positioning and messaging that resonates with your target audience.",
      features: ["Brand Positioning", "Target Audience", "Message Framework", "Brand Voice", "Competitive Analysis"]
    },
    {
      icon: "ri-printer-line",
      title: "Print & Marketing Materials Design",
      description: "Professional print materials that reinforce your brand image across all touchpoints.",
      features: ["Business Card Design", "Letterhead Design", "Brochures", "Packaging Design", "Marketing Materials"]
    },
    {
      icon: "ri-computer-line",
      title: "Digital Brand Assets",
      description: "Digital brand elements optimized for websites, social media and digital platforms.",
      features: ["Website Elements", "Social Media Assets", "Email Templates", "Digital Banners", "App Icons"]
    },
    {
      icon: "ri-team-line",
      title: "Brand Naming & Positioning",
      description: "Create unique and meaningful names for your brand, establishing clear market positioning.",
      features: ["Brand Naming", "Market Positioning", "Brand Story", "Value Proposition", "Differentiation Strategy"]
    },
    {
      icon: "ri-megaphone-line",
      title: "Brand Marketing Support",
      description: "Provide brand promotion and marketing campaign support to ensure effective brand message delivery.",
      features: ["Marketing Strategy", "Brand Communication", "Campaign Support", "Media Planning", "Performance Monitoring"]
    },
    {
      icon: "ri-refresh-line",
      title: "Brand Redesign Services",
      description: "Comprehensive redesign and upgrade services for existing brands.",
      features: ["Brand Audit", "Repositioning", "Visual Upgrade", "Market Repositioning", "Brand Migration"]
    }
  ];

  const brandingProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep understanding of your business, values, target audience and competitive landscape to build a solid foundation.",
      icon: "ri-search-line"
    },
    {
      step: "02", 
      title: "Concept Development",
      description: "Creative ideation and initial design concepts based on research insights and brand strategy.",
      icon: "ri-lightbulb-line"
    },
    {
      step: "03",
      title: "Design & Refinement", 
      description: "Iterative design process with client feedback to perfect the visual identity and brand elements.",
      icon: "ri-edit-line"
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final asset delivery with comprehensive guidelines and ongoing support for brand implementation.",
      icon: "ri-rocket-line"
    }
  ];

  const whyChooseUs = [
    {
      icon: "ri-user-heart-line",
      title: "Client-Centered Approach",
      description: "We place client needs and goals at the core of every branding decision."
    },
    {
      icon: "ri-time-line",
      title: "Rapid Delivery",
      description: "Efficient workflow that delivers branding projects quickly without compromising quality."
    },
    {
      icon: "ri-refresh-line",
      title: "Iterative Optimization Process",
      description: "Continuous feedback and improvement ensures final brand results exceed expectations."
    },
    {
      icon: "ri-team-line",
      title: "Expert Brand Team",
      description: "Professional team of experienced brand designers and strategy specialists."
    }
  ];

  const brandingTools = [
    {
      icon: "ri-palette-fill",
      title: "Brand Design Software",
      description: "Professional design tools for creating exceptional brand identities"
    },
    {
      icon: "ri-layout-fill",
      title: "Brand Management Systems",
      description: "Advanced systems for brand asset management and guidelines"
    },
    {
      icon: "ri-color-filter-fill", 
      title: "Color Management Tools",
      description: "Precise color systems and palette management technology"
    },
    {
      icon: "ri-file-text-fill",
      title: "Brand Documentation",
      description: "Comprehensive brand manual and guideline creation tools"
    }
  ];

  const additionalServices = [
    {
      icon: "ri-palette-fill",
      title: "Brand Strategy Development",
      description: "Comprehensive brand strategy development including internal and external brand strategies"
    },
    {
      icon: "ri-layout-fill", 
      title: "Brand Manual & Management",
      description: "Detailed brand usage manual and brand asset management system"
    },
    {
      icon: "ri-image-fill",
      title: "Visual Identity Design",
      description: "Complete visual identity system including logos, colors, fonts and graphic elements"
    },
    {
      icon: "ri-refresh-fill",
      title: "Rebrand Existing Brands",
      description: "Comprehensive redesign and upgrade services for existing brands"
    }
  ];

  return (
    <div>
      {/* Branding Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-paint-brush-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Branding Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Brand Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to implementation, we create cohesive brand identities that leave lasting impressions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Branding Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic approach ensures your brand stands out and connects with your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Branding <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to creating powerful brands that resonate with your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingProcess.map((process, index) => (
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

      {/* Branding Tools & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Branding <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Tools & Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional tools and systems for delivering exceptional branding results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${tool.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Branding Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Additional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Branding Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for all your branding and identity needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-700 rounded-full text-sm font-semibold mb-8">
              <i className="ri-question-line mr-3 text-lg text-blue-500"></i>
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Branding Services FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our branding and identity services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What branding services do you offer?",
                answer: "We provide comprehensive branding services including brand logo & identity design, visual identity systems, brand guidelines manual, brand strategy planning, print & marketing materials, digital brand assets, brand naming & positioning, brand marketing support, and brand redesign services. Our focus is on creating cohesive brand identities that resonate with your target audience."
              },
              {
                question: "How long does a typical branding project take?",
                answer: "Branding project timelines vary based on scope and complexity. Simple logo designs take 2-3 weeks, complete brand identity packages require 4-6 weeks, while comprehensive branding projects with strategy and multiple deliverables may take 8-12 weeks. We provide detailed timelines during our discovery phase and keep you updated throughout the branding process."
              },
              {
                question: "What's included in your brand guidelines package?",
                answer: "Our brand guidelines include logo usage specifications, color systems (RGB, CMYK, Pantone), typography standards, imagery style guides, layout principles, brand voice and tone, application examples across various mediums, usage restrictions, file formats for different applications, and digital asset libraries. This ensures consistent brand application across all touchpoints."
              },
              {
                question: "Do you help with brand strategy and positioning?",
                answer: "Yes, we offer comprehensive brand strategy services including brand positioning, target audience analysis, competitive analysis, message framework development, brand voice definition, value proposition creation, and differentiation strategy. We help establish a strong foundation for your brand before moving into visual identity design."
              },
              {
                question: "Can you redesign our existing brand?",
                answer: "Absolutely! We specialize in brand redesign and repositioning services including brand audits, visual upgrades, market repositioning, and brand migration support. We analyze your current brand performance and market position to create a refreshed identity that better serves your business goals while maintaining brand equity where appropriate."
              },
              {
                question: "What's your branding process from start to finish?",
                answer: "Our 4-step branding process includes: 1) Discovery & Research - understanding your business, values, and target audience; 2) Concept Development - creative ideation based on research insights; 3) Design & Refinement - iterative design process with your feedback; 4) Delivery & Support - final asset delivery with comprehensive guidelines and ongoing implementation support."
              },
              {
                question: "How do you ensure brand consistency across all materials?",
                answer: "We maintain brand consistency through comprehensive brand guidelines, systematic design processes, regular quality checks, and centralized brand asset management. Every branded material references your brand standards, and we provide training and support to ensure your team can maintain consistency in future brand applications."
              },
              {
                question: "Do you provide digital brand assets for online use?",
                answer: "Yes, we create comprehensive digital brand assets including website elements, social media assets, email templates, digital banners, app icons, and web-optimized logos. All digital assets are optimized for various platforms and screen sizes while maintaining brand consistency across all digital touchpoints."
              },
              {
                question: "Can you help with brand naming for new businesses?",
                answer: "Yes, we offer brand naming services including name generation, trademark research, domain availability checks, brand story development, and market positioning. We create unique and meaningful names that align with your business goals and resonate with your target audience while ensuring legal availability."
              },
              {
                question: "Do you offer ongoing brand support after project completion?",
                answer: "Yes, we provide ongoing brand support including brand application guidance, asset updates, brand compliance monitoring, additional branded materials, brand evolution consultation, and marketing support. We offer flexible retainer packages and project-based support to help your brand grow and adapt over time."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}