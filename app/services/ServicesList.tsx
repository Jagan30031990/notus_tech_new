
'use client';

import Link from 'next/link';

export default function ServicesList() {
  const mainServices = [
    {
      icon: "ri-code-line",
      title: "Web Development",
      subtitle: "Modern & Responsive",
      description: "Custom websites and web applications built with cutting-edge technologies for exceptional performance and user engagement.",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "API Integration", "SEO Optimization"],
      stats: { projects: "200+", rating: "4.9" },
      gradient: "from-blue-500 to-blue-600",
      link: "/services/web-development"
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobile App Development",
      subtitle: "iOS & Android",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      features: ["Native iOS & Android", "React Native", "Flutter Development", "App Store Optimization", "Push Notifications"],
      stats: { projects: "150+", rating: "4.8" },
      gradient: "from-indigo-500 to-indigo-600",
      link: "/services/mobile-development"
    },
    {
      icon: "ri-palette-line",
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description: "Beautiful, intuitive designs that enhance user satisfaction and drive business results through thoughtful user experience.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems", "Usability Testing"],
      stats: { projects: "300+", rating: "5.0" },
      gradient: "from-blue-400 to-indigo-500",
      link: "/services/ui-ux-design"
    },
    {
      icon: "ri-search-line",
      title: "Digital Marketing",
      subtitle: "Growth & Performance",
      description: "Data-driven digital marketing strategies that boost your online presence and generate measurable results.",
      features: ["SEO & Content Marketing", "Social Media Strategy", "PPC Advertising", "Analytics & Reporting", "Conversion Optimization"],
      stats: { projects: "180+", rating: "4.9" },
      gradient: "from-blue-600 to-indigo-700",
      link: "/services/digital-marketing"
    },
    {
      icon: "ri-cloud-line",
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure",
      description: "Robust cloud infrastructure and DevOps solutions for scalable, secure, and high-performance applications.",
      features: ["AWS & Azure", "DevOps Automation", "Cloud Migration", "Security Implementation", "Performance Monitoring"],
      stats: { projects: "120+", rating: "4.8" },
      gradient: "from-indigo-600 to-blue-700",
      link: "/services/cloud-solutions"
    },
    {
      icon: "ri-brain-line",
      title: "AI & Analytics",
      subtitle: "Data-Driven Intelligence",
      description: "Advanced AI solutions and data analytics to unlock insights and automate business processes intelligently.",
      features: ["Machine Learning", "Predictive Analytics", "Business Intelligence", "Data Visualization", "Automation Tools"],
      stats: { projects: "80+", rating: "4.9" },
      gradient: "from-blue-500 to-indigo-600",
      link: "/services/ai-analytics"
    },
    {
      icon: "ri-paint-brush-line",
      title: "Branding Services",
      subtitle: "Brand Identity & Strategy",
      description: "Complete branding solutions that establish strong brand identity and create memorable experiences across all touchpoints.",
      features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Positioning"],
      stats: { projects: "250+", rating: "4.9" },
      gradient: "from-blue-500 to-indigo-600",
      link: "/services/branding-services"
    },
    {
      icon: "ri-shopping-cart-line",
      title: "E-commerce Solutions",
      subtitle: "Online Store Development",
      description: "Full-featured e-commerce platforms that drive sales and provide exceptional shopping experiences for your customers.",
      features: ["Shopify Development", "WooCommerce", "Payment Integration", "Inventory Management", "Multi-channel Sales"],
      stats: { projects: "160+", rating: "4.8" },
      gradient: "from-indigo-500 to-blue-600",
      link: "/services/ecommerce-solutions",
      graphics: [
        { type: "circle", size: "w-8 h-8", position: "top-4 right-4", color: "from-indigo-400 to-blue-500", animation: "animate-pulse" },
        { type: "square", size: "w-6 h-6", position: "bottom-6 left-6", color: "from-blue-400 to-indigo-500", animation: "animate-bounce" },
        { type: "diamond", size: "w-5 h-5", position: "top-1/2 right-8", color: "from-indigo-300 to-blue-400", animation: "animate-ping" }
      ]
    },
    {
      icon: "ri-magic-line",
      title: "Creative Services",
      subtitle: "Visual & Content Creation",
      description: "Creative design and content solutions that captivate your audience and communicate your brand message effectively.",
      features: ["Graphic Design", "Content Creation", "Video Production", "Photography", "Animation & Motion Graphics"],
      stats: { projects: "320+", rating: "4.9" },
      gradient: "from-blue-400 to-indigo-500",
      link: "/services/creative-services"
    },
    {
      icon: "ri-plug-line",
      title: "Custom API Development & Integration",
      subtitle: "Seamless Connectivity",
      description: "Custom API development and third-party integrations that connect your systems and enable seamless data flow across platforms.",
      features: ["REST API Development", "GraphQL Implementation", "Third-party Integrations", "Microservices Architecture", "API Security & Documentation"],
      stats: { projects: "140+", rating: "4.8" },
      gradient: "from-blue-600 to-indigo-600",
      link: "/services/api-development"
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      icon: "ri-search-2-line"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the final product before development begins.",
      icon: "ri-palette-line"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build your solution using best practices, clean code, and seamless third-party integrations for optimal performance.",
      icon: "ri-code-line"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices, browsers, and platforms to ensure bug-free, secure, and high-performance delivery.",
      icon: "ri-shield-check-line"
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description: "Smooth deployment to production with proper monitoring, backup systems, and post-launch optimization.",
      icon: "ri-rocket-line"
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements to keep your solution running smoothly and up-to-date.",
      icon: "ri-customer-service-line"
    }
  ];

  const techCategories = [
    {
      category: "Frontend Technologies",
      icon: "ri-window-line",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "Backend & Server",
      icon: "ri-server-line",
      technologies: ["Node.js", "Python", "Java", "PHP", "C#", ".NET"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      category: "Mobile Development",
      icon: "ri-smartphone-line",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      category: "Database Systems",
      icon: "ri-database-line",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "DynamoDB"],
      color: "from-indigo-600 to-blue-700"
    },
    {
      category: "Cloud & DevOps",
      icon: "ri-cloud-line",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Jenkins"],
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const industryExpertise = [
    { icon: "ri-shopping-cart-line", title: "E-commerce & Retail", count: "50+" },
    { icon: "ri-heart-pulse-line", title: "Healthcare & Medical", count: "35+" },
    { icon: "ri-bank-line", title: "Finance & Banking", count: "40+" },
    { icon: "ri-graduation-cap-line", title: "Education & E-learning", count: "30+" },
    { icon: "ri-car-line", title: "Transportation & Logistics", count: "25+" },
    { icon: "ri-home-line", title: "Real Estate & Property", count: "20+" }
  ];

  return (
    <div>
      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-service-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Core Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and accelerate growth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {/* Graphics for E-commerce Solutions */}
                {service.graphics && (
                  <div className="absolute inset-0 pointer-events-none">
                    {service.graphics.map((graphic, gIndex) => (
                      <div
                        key={gIndex}
                        className={`absolute ${graphic.position} ${graphic.size} bg-gradient-to-r ${graphic.color} ${graphic.animation} opacity-20 ${
                          graphic.type === 'circle' ? 'rounded-full' :
                          graphic.type === 'diamond' ? 'rotate-45 rounded-sm' : 'rounded-lg'
                        }`}
                      ></div>
                    ))}
                  </div>
                )}
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${service.gradient} rounded-2xl`}>
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <i className="ri-star-fill mr-1"></i>
                        <span className="text-gray-900 font-bold">{service.stats.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">{service.stats.projects} projects</div>
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
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  {service.link ? (
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-blue-600 hover:text-indigo-600 font-semibold group-hover:translate-x-2 transition-all duration-300 cursor-pointer"
                    >
                      Learn More
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to completion
            </p>
          </div>
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentProcess.map((process, index) => (
                <div key={index} className="relative">
                  {/* Process card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl mr-4">
                        {process.step}
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl">
                        <i className={`${process.icon} text-blue-600 text-xl`}></i>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/8 to-blue-300/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-16 w-20 h-20 bg-blue-500/10 rounded-2xl rotate-12 animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-600/10 rounded-xl rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-32 w-12 h-12 bg-blue-400/15 rounded-full animate-bounce"></div>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/15 rounded-lg rotate-12 animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-indigo-500/10 rounded-2xl rotate-45 animate-pulse delay-1500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-8 hover:scale-105 transition-all duration-300">
              <i className="ri-stack-line mr-3 text-blue-600 text-lg"></i>
              <span className="text-sm font-semibold text-blue-700">Technology Stack</span>
              <div className="w-3 h-3 bg-blue-500 rounded-full ml-3 animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest and most reliable technologies to build exceptional solutions that drive innovation and success
            </p>
          </div>
          {/* Redesigned Technology Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {techCategories.map((category, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm hover:bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl border border-blue-100 hover:border-blue-300 hover:scale-105 overflow-hidden">
                {/* Card background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-3xl`}></div>
                {/* Icon with enhanced styling */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-r ${category.color} rounded-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                    <i className={`${category.icon} text-3xl text-white group-hover:animate-pulse`}></i>
                  </div>
                  {/* Decorative ring */}
                  <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-500 animate-pulse`}></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {category.category}
                </h3>
                {/* Enhanced technology grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="group/tech flex items-center p-3 bg-blue-50/50 hover:bg-blue-100/70 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 group-hover:animate-pulse group/tech-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 font-medium text-sm group/tech-hover:text-blue-600 transition-colors duration-300">{tech}</span>
                    </div>
                  ))}
                </div>
                {/* Hover effect indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="ri-arrow-right-up-line text-white text-sm"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Technology Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[ 
              { number: "50+", label: "Technologies", icon: "ri-code-line" }, 
              { number: "10+", label: "Years Experience", icon: "ri-time-line" }, 
              { number: "500+", label: "Projects Built", icon: "ri-trophy-line" }, 
              { number: "24/7", label: "Support", icon: "ri-customer-service-line" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Technology Expertise CTA */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/30 rounded-xl rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-2xl rotate-12"></div>
            </div>
            <div className="relative text-center">
              <div className="flex justify-center items-center mb-8">
                {/* Stacked technology icons */}
                <div className="flex items-center -space-x-2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <i className="ri-reactjs-line text-2xl text-white"></i>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <i className="ri-nodejs-line text-2xl text-white"></i>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <i className="ri-database-line text-2xl text-white"></i>
                  </div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                    <i className="ri-cloud-line text-2xl text-white"></i>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Expert Technology Consultation?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our technology experts help you choose the right stack for your project and guide you through the entire development process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 flex items-center justify-center">
                  <i className="ri-chat-3-line mr-2"></i>
                  Free Consultation
                </button> */}
                {/* <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105 flex items-center justify-center">
                  <i className="ri-download-line mr-2"></i>
                  Technology Guide
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <i className="ri-building-line mr-2 text-white"></i>
              <span className="text-sm font-semibold text-white">Industry Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Deep domain expertise across multiple industries with proven track record
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExpertise.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl">
                    <i className={`${industry.icon} text-2xl text-white`}></i>
                  </div>
                  <span className="text-2xl font-bold text-white">{industry.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
