
'use client';

export default function DigitalMarketingServices() {
  const marketingServices = [
    {
      icon: "ri-search-line",
      title: "Search Engine Optimization (SEO)",
      subtitle: "Organic Growth",
      description: "We enhance your organic visibility to attract high-quality traffic and more leads from local customers.",
      features: ["Keyword Research & Strategy", "On-Page Optimization", "Technical SEO", "Local SEO for geo-targeted reach", "SEO audit & competitor analysis"],
      price: "Starting at $2,000/month",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-advertisement-line",
      title: "Pay-Per-Click (PPC) Advertising",
      subtitle: "Instant Results", 
      description: "Launch high-converting ad campaigns that get you found in front of the right audience at the perfect time.",
      features: ["Google Ads (Search, Display, Shopping)", "Social media ads (Facebook, Instagram, LinkedIn, YouTube)", "Amazon PPC", "Landing page optimization", "Budget management & ROI tracking"],
      price: "Starting at $1,500/month",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "ri-share-line",
      title: "Social Media Marketing",
      subtitle: "Brand Engagement",
      description: "We create and execute social media campaigns that deliver leads, organic comments, and engagements from your target audience.",
      features: ["Automated daily campaigns", "Foundation & promotional content", "Segmentation & personalization", "Influencing & optimization"],
      price: "Starting at $1,200/month",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "ri-mail-line",
      title: "Email Marketing",
      subtitle: "Direct Communication",
      description: "Nurture leads and retain customers with personalized email campaigns and automated marketing sequences.",
      features: ["Email Campaigns", "Marketing Automation", "Segmentation", "A/B Testing", "Performance Tracking"],
      price: "Starting at $800/month",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      icon: "ri-article-line",
      title: "Content Marketing",
      subtitle: "Valuable Content",
      description: "Engaging blogs, articles, and whitepapers that drive traffic and establish authority.",
      features: ["Blog Writing & Content Creation", "Influencer Partnerships", "Video content production", "Content distribution & performance", "Social media management (Facebook, Instagram, LinkedIn, Twitter & more)"],
      price: "Starting at $1,500/month",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: "ri-bar-chart-line",
      title: "Analytics & Reporting",
      subtitle: "Data Insights",
      description: "Track, measure, and optimize your marketing performance with comprehensive analytics and regular reporting.",
      features: ["Google Analytics & Google Analytics", "Conversion Tracking", "ROI Analysis", "Custom Reports", "Performance Insights"],
      price: "Starting at $600/month",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const additionalServices = [
    {
      icon: "ri-megaphone-line",
      title: "Content Marketing",
      description: "Engaging blogs, articles, and whitepapers that drive traffic and establish authority.",
      features: ["Blog content creation", "Influencer partnerships", "Video content production", "Content strategy & distribution"]
    },
    {
      icon: "ri-customer-service-line",
      title: "Online Reputation Management",
      description: "Protect and enhance your brand reputation across all online platforms.",
      features: ["Review management", "Crisis communication", "Brand monitoring", "Reputation recovery"]
    },
    {
      icon: "ri-smartphone-line",
      title: "App/Web Development",
      description: "AAMS: Boost visibility and downloads for your mobile apps.",
      features: ["App store optimization", "Mobile app marketing", "Web development", "User acquisition campaigns"]
    }
  ];

  const platformsAndTools = [
    { name: "Google Ads & Google Analytics", icon: "ri-google-line", color: "text-red-500" },
    { name: "Facebook Ads Manager", icon: "ri-facebook-line", color: "text-blue-600" },
    { name: "LinkedIn Ads Tool", icon: "ri-linkedin-line", color: "text-blue-700" },
    { name: "Marketing Workflow Automation", icon: "ri-settings-line", color: "text-purple-600" },
    { name: "Hootsuite, Buffer, Sprout Social", icon: "ri-calendar-line", color: "text-green-600" },
    { name: "Mailchimp, Constant Contact", icon: "ri-mail-line", color: "text-yellow-600" },
    { name: "Canva, Adobe Creative Suite", icon: "ri-palette-line", color: "text-pink-600" },
    { name: "SEMrush, Ahrefs, Moz", icon: "ri-search-line", color: "text-indigo-600" }
  ];

  const marketingProcess = [
    {
      step: "01",
      title: "Audit & Strategy Development",
      description: "We analyze your current digital presence and craft a tailored marketing strategy.",
      icon: "ri-search-line",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Campaign Creation & Execution",
      description: "Create compelling campaigns with targeted messaging that resonates with your audience and get tracking.",
      icon: "ri-rocket-line",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Implementation & Deployment",
      description: "Execute campaigns across all relevant channels and begin intensive tracking to ensure we get results.",
      icon: "ri-settings-line",
      duration: "1 week"
    },
    {
      step: "04",
      title: "Reporting & Analysis",
      description: "We collect data reports and actionable insights for your next steps.",
      icon: "ri-bar-chart-line",
      duration: "Weekly/Monthly"
    }
  ];

  const faqItems = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer comprehensive digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing, Email Marketing, Content Marketing, Online Reputation Management, Analytics & Reporting, and App/Web Development services."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary by service type. PPC advertising can show immediate results within days, while SEO typically takes 3-6 months to show significant improvements. Social media marketing and content marketing usually show engagement improvements within 2-4 weeks, with lead generation improving over 2-3 months."
    },
    {
      question: "What platforms do you use for digital marketing campaigns?",
      answer: "We use industry-leading platforms including Google Ads & Analytics, Facebook Ads Manager, LinkedIn Ads, Instagram, YouTube, Amazon PPC, along with tools like SEMrush, Ahrefs, Mailchimp, Hootsuite, and Adobe Creative Suite for comprehensive campaign management."
    },
    {
      question: "Do you provide monthly reporting and analytics?",
      answer: "Yes, we provide detailed monthly reports including Google Analytics data, conversion tracking, ROI analysis, campaign performance metrics, and actionable insights. We also offer weekly check-ins for ongoing campaign optimization."
    },
    {
      question: "Can you help with local SEO and geo-targeted marketing?",
      answer: "Absolutely! We specialize in local SEO optimization, Google My Business management, local directory listings, geo-targeted PPC campaigns, and location-based social media marketing to help you reach customers in your specific geographic area."
    },
    {
      question: "What's included in your social media marketing services?",
      answer: "Our social media marketing includes content creation and curation, automated daily campaigns, community management, influencer partnerships, paid social advertising, audience engagement, analytics tracking, and management across Facebook, Instagram, LinkedIn, Twitter, and YouTube."
    },
    {
      question: "Do you offer content creation services?",
      answer: "Yes, we provide comprehensive content marketing including blog writing, article creation, whitepapers, video content production, infographics, social media content, email newsletters, and content distribution across multiple channels."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We track key performance indicators (KPIs) including website traffic, lead generation, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), engagement rates, brand awareness metrics, and overall return on investment (ROI)."
    },
    {
      question: "Can you help with online reputation management?",
      answer: "Yes, we offer online reputation management services including review monitoring and response, crisis communication strategies, brand mention tracking, negative content suppression, and proactive reputation building across all digital platforms."
    },
    {
      question: "What makes your digital marketing approach different?",
      answer: "Our approach combines data-driven strategies with creative execution, focusing on measurable results and ROI. We provide personalized service with dedicated account management, use cutting-edge tools and technologies, and maintain transparent reporting with regular strategy optimization."
    }
  ];

  return (
    <div>
      {/* Digital Marketing Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-bar-chart-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Digital Marketing Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Marketing <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive growth and revenue with our comprehensive digital marketing services that deliver measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${service.gradient} rounded-2xl`}>
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                      {service.subtitle}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <i className="ri-check-line text-blue-600 mr-2"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-add-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Additional Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Extended <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to amplify your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-blue-600 mr-2"></i>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-tools-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Platforms & Tools We Use</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading platforms and tools for maximum marketing impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformsAndTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                    <i className={`${tool.icon} text-xl ${tool.color}`}></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{tool.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Digital Marketing Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Execute</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven marketing process delivers consistent results and measurable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl mr-4">
                      {process.step}
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                      <i className={`${process.icon} text-blue-600 text-xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{process.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                    <i className="ri-time-line text-blue-600 mr-2"></i>
                    <span className="text-sm font-medium text-blue-700">{process.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-question-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our digital marketing services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
