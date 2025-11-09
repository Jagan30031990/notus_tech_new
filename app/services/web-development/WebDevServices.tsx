
'use client';

export default function WebDevServices() {
  const webDevServices = [
    {
      icon: "ri-window-line",
      title: "Custom Web Development",
      subtitle: "Tailored Solutions",
      description: "We develop state-of-the-art websites in more than just a digital presence – it's your brand's impression, a powerful tool that engages customers and drives business growth.",
      features: ["Modern HTML & CSS3", "Responsive Design", "Cross-browser Compatibility", "SEO-Friendly Structure", "Performance Optimized"],
      price: "",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobile App Development", 
      subtitle: "Native & Cross-Platform",
      description: "Whether seeking a sleek, HTML5 enterprise, or robust app with development services to meet your business demands and objectives.",
      features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Optimization", "Push Notifications"],
      price: "",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "ri-shopping-cart-line",
      title: "E-commerce Website Development",
      subtitle: "Complete Online Stores",
      description: "We develop secure, scalable, and user-focused e-commerce platforms that provide a seamless shopping experience from product discovery to purchase.",
      features: ["Shopify Development", "WooCommerce", "Payment Gateway Integration", "Inventory Management", "Order Tracking"],
      price: "",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "ri-layout-line",
      title: "Content Management Systems (CMS)",
      subtitle: "Easy Content Updates",
      description: "Our website development team makes it easy for you to manage and update your content with user-friendly CMS that streamlines your content updates.",
      features: ["WordPress Development", "Custom CMS", "Content Optimization", "User Role Management", "SEO Tools Integration"],
      price: "",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      icon: "ri-search-line",
      title: "SEO & Conversion Focused",
      subtitle: "Results-Driven Approach",
      description: "We deliver fast-loading, high-converting websites with advanced SEO fundamentals and conversion optimization for the best possible results.",
      features: ["Technical SEO", "Page Speed Optimization", "Conversion Rate Optimization", "Analytics Integration", "Schema Markup"],
      price: "",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: "ri-cloud-line",
      title: "Website Optimization & Support",
      subtitle: "Ongoing Maintenance",
      description: "Keep your website secure, updated, and performing optimally with comprehensive maintenance, monitoring, and optimization services.",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "Backup Management", "24/7 Support"],
      price: "",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: "ri-trophy-line",
      title: "Fast Loading & High Performance",
      description: "We understand the importance of fast-loading websites - slow sites create an bad user experience and high bounce rates."
    },
    {
      icon: "ri-phone-line", 
      title: "Fully Responsive Design",
      description: "Our websites look and work wonderfully across all devices (desktops, laptops, tablets, and phones)."
    },
    {
      icon: "ri-shield-check-line",
      title: "Security & Compliance",
      description: "We follow best practices to ensure your website is built with advanced security measures and compliance standards."
    },
    {
      icon: "ri-search-eye-line",
      title: "SEO & Conversion Focused",
      description: "We deliver fast-loading, high-converting websites built with advanced SEO fundamentals to optimize results."
    }
  ];

  const ourExpertise = [
    {
      category: "Custom Web Development",
      description: "We design and develop websites that are created to meet your business's specific needs and requirements.",
      services: ["Business websites & design", "Advanced web functionalities", "Full-stack development (frontend & backend)", "Performance optimization & fine tuning"]
    },
    {
      category: "CMS Development", 
      description: "We specialize in Content Management Systems (CMS) that make it easy for you to manage and update your content.",
      services: ["WordPress development", "Drupal", "Joomla", "Custom CMS Solutions"]
    },
    {
      category: "E-commerce Website Development",
      description: "We develop secure, scalable, and user-focused e-commerce platforms that provide a seamless shopping experience.",
      services: ["Custom E-commerce Development", "Magento", "Shopify", "WooCommerce", "Payment gateway integration", "Inventory & order management", "Performance monitoring & ongoing support"]
    },
    {
      category: "Website Optimization & Support",
      description: "Keep your website secure, updated, and performing optimally with our website optimization and support services.",
      services: ["Load product enhancements", "Customer portal & dashboards", "A/B testing integration", "Performance monitoring & ongoing support"]
    }
  ];

  const managedServices = [
    {
      icon: "ri-window-line",
      title: "Website Development",
      description: "We develop experienced modern teams offering end-to-end development services including frontend and backend development for your business and online operations.",
      features: ["Fast, secure & mobile-friendly websites", "Responsive design across all devices", "SEO optimization & performance tuning", "Advanced security & site hardening"]
    },
    {
      icon: "ri-shopping-cart-line", 
      title: "E-commerce Solutions",
      description: "We provide fully managed e-commerce solutions that are designed to streamline your sales processes and enhance customer experience.",
      features: ["Complete online store setup", "Payment integration & security", "Inventory management systems", "Performance monitoring & support to help grow your conversions online and boost your bottom line"]
    }
  ];

  const trustedSolutions = [
    {
      title: "Scalable & Future-Proof",
      description: "Engineered for growth, ready to evolve with your business.",
      icon: "ri-line-chart-line"
    },
    {
      title: "Website Optimization & Support",
      description: "Real-time monitoring and support to keep your site secure and help with any issues.",
      icon: "ri-customer-service-line"
    }
  ];

  const technologies = [
    {
      category: "Frontend Technologies",
      icon: "ri-window-line",
      techs: [
        { name: "React", icon: "ri-reactjs-line", color: "text-blue-500" },
        { name: "Next.js", icon: "ri-nextjs-line", color: "text-gray-900" },
        { name: "Vue.js", icon: "ri-vuejs-line", color: "text-green-500" },
        { name: "Angular", icon: "ri-angularjs-line", color: "text-red-500" }
      ]
    },
    {
      category: "Backend & Databases",
      icon: "ri-server-line", 
      techs: [
        { name: "Node.js", icon: "ri-nodejs-line", color: "text-green-600" },
        { name: "Python", icon: "ri-file-code-line", color: "text-blue-600" },
        { name: "PHP", icon: "ri-file-code-line", color: "text-purple-600" },
        { name: "MongoDB", icon: "ri-database-line", color: "text-green-500" }
      ]
    },
    {
      category: "Development Tools",
      icon: "ri-tools-line",
      techs: [
        { name: "Git", icon: "ri-git-branch-line", color: "text-orange-500" },
        { name: "Docker", icon: "ri-container-line", color: "text-blue-500" },
        { name: "AWS", icon: "ri-cloud-line", color: "text-orange-400" },
        { name: "Figma", icon: "ri-palette-line", color: "text-pink-500" }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your business, audience, and requirements to create a detailed project roadmap.",
      icon: "ri-search-2-line",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Design & Wireframing", 
      description: "Creating wireframes, design prototypes and mockups that align with your brand and user experience goals.",
      icon: "ri-palette-line",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Bringing your design to life with clean, responsive code and rigorous testing across all devices and browsers.",
      icon: "ri-code-line",
      duration: "4-8 weeks"
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Comprehensive testing including functionality, performance, security, and compatibility testing.",
      icon: "ri-shield-check-line",
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Launch & Deployment", 
      description: "Deploying your website to production with SSL certificates, performance optimization and monitoring setup.",
      icon: "ri-rocket-line",
      duration: "1 week"
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing monitoring, updates, security patches, and support to keep your website running smoothly.",
      icon: "ri-customer-service-line", 
      duration: "Ongoing"
    }
  ];

  return (
    <div>
      {/* Web Development Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-code-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Web Development Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Web <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom websites to e-commerce platforms, we deliver comprehensive web development services that drive results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webDevServices.map((service, index) => (
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
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Get Started
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-star-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Why Choose Our Web Development Services?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Built for <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our developers are experienced in latest web technologies and understand what it takes to create a business website that delivers excellent user experience and high-quality solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-lightbulb-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy and design to development and ongoing support, we offer complete web solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ourExpertise.map((expertise, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{expertise.category}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{expertise.description}</p>
                <div className="space-y-3">
                  {expertise.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-settings-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Managed Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Experienced <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have the expertise to handle every aspect of your web project, from development to ongoing maintenance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {managedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-shield-check-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Trusted Solutions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Reliable & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Scalable</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustedSolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <i className={`${solution.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-stack-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Technologies & Tools We Use</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies and frameworks to build exceptional web experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <i className={`${tech.icon} text-xl ${tech.color} mr-3`}></i>
                      <span className="font-medium text-gray-900">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Website Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Website Development Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven development methodology ensures successful project delivery from concept to launch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl mr-4">
                      {process.step}
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
                      <i className={`${process.icon} text-blue-600 text-xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{process.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-blue-200 mt-auto">
                    <i className="ri-time-line text-blue-600 mr-2"></i>
                    <span className="text-sm font-medium text-blue-700">{process.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build Your Online Success Story */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-8">
            <i className="ri-rocket-line mr-2 text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-700">Let's Build Your Online Success Story</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Get Started with Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Web Application</span>?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Contact us today to get started with a free consultation and learn how our website design and development team can build you the perfect website system with the right features for your business and users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105">
              <i className="ri-chat-3-line mr-3 group-hover:animate-bounce"></i>
              Get Free Consultation
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </button> */}
            {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-portfolio-line mr-2"></i>
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
