
'use client';

export default function UIUXServices() {
  const uiuxServices = [
    {
      icon: "ri-user-heart-line",
      title: "User Research & Persona Development",
      subtitle: "Understanding Your Users",
      description: "Deep dive into user behavior, needs, and pain points through comprehensive research methodologies to create detailed user personas and journey maps.",
      features: ["User Interviews & Surveys", "Persona Development", "Journey Mapping", "Competitive Analysis", "User Testing"],
      price: "",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-pencil-ruler-line",
      title: "Information Architecture & Wireframing",
      subtitle: "Structural Foundation",
      description: "Create intuitive information architecture and detailed wireframes that ensure seamless user flow and optimal user experience.",
      features: ["Site Mapping", "User Flow Design", "Low-fi Wireframes", "High-fi Wireframes", "Interactive Prototypes"],
      price: "",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "ri-palette-line",
      title: "Visual Design & UI Creation",
      subtitle: "Beautiful Interfaces",
      description: "Design stunning visual interfaces that align with your brand and create memorable user experiences across all touchpoints.",
      features: ["Visual Design Systems", "Brand Integration", "Color & Typography", "Icon & Illustration", "Responsive Design"],
      price: "",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobile & Responsive Design",
      subtitle: "Multi-Device Excellence",
      description: "Create seamless experiences across all devices with mobile-first design approach and responsive layouts.",
      features: ["Mobile-First Design", "Cross-Platform Compatibility", "Touch Interface Optimization", "Responsive Layouts", "Device Testing"],
      price: "",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      icon: "ri-presentation-line",
      title: "Prototyping & User Testing",
      subtitle: "Validate & Iterate",
      description: "Build interactive prototypes and conduct comprehensive user testing to validate design decisions and optimize user experience.",
      features: ["Interactive Prototypes", "Usability Testing", "A/B Testing", "User Feedback Analysis", "Design Iteration"],
      price: "",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: "ri-settings-3-line",
      title: "Design Systems & Style Guides",
      subtitle: "Scalable Design Framework",
      description: "Develop comprehensive design systems and style guides to ensure consistency and scalability across your product.",
      features: ["Component Libraries", "Design Tokens", "Style Guidelines", "Brand Standards", "Documentation"],
      price: "",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  // Why Choose Our UI/UX Design Services
  const whyChooseFeatures = [
    {
      icon: "ri-trophy-line",
      title: "User-Centered Approach",
      description: "We put users at the center of everything we design, ensuring optimal user experience and satisfaction."
    },
    {
      icon: "ri-speed-line",
      title: "Rapid Delivery",
      description: "Efficient design process that delivers high-quality results within agreed timelines without compromising quality."
    },
    {
      icon: "ri-refresh-line",
      title: "Iterative Process",
      description: "Continuous improvement through user feedback and testing to refine and perfect the design."
    },
    {
      icon: "ri-team-line",
      title: "Expert Team",
      description: "Skilled designers with deep understanding of user psychology, design principles, and industry best practices."
    }
  ];

  // Our Process
  const designProcess = [
    {
      step: "01",
      title: "User Research & Persona Development",
      description: "Conduct comprehensive user research to understand target audience, their behaviors, needs, and pain points. Create detailed user personas and journey maps.",
      icon: "ri-search-2-line",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Information Architecture & Wireframing",
      description: "Design the structural foundation of your product with intuitive information architecture and detailed wireframing.",
      icon: "ri-organization-chart",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Visual Design & Prototyping",
      description: "Create stunning visual designs and interactive prototypes that bring your product to life with beautiful interfaces.",
      icon: "ri-palette-line",
      duration: "3-4 weeks"
    },
    {
      step: "04",
      title: "User Testing & Quality Assurance",
      description: "Conduct thorough user testing and quality assurance to ensure the design meets user expectations and business goals.",
      icon: "ri-test-tube-line",
      duration: "1-2 weeks"
    }
  ];

  // Additional UI/UX Services
  const additionalServices = [
    {
      title: "Interaction Design (IxD)",
      description: "Creating micro-interactions and animations that enhance user engagement and delight.",
      icon: "ri-cursor-line"
    },
    {
      title: "Information Architecture (IA)",
      description: "Structuring content and functionality for intuitive navigation and user experience.",
      icon: "ri-organization-chart"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Refining designs to drive actions and achieve business ROI through strategic design improvements.",
      icon: "ri-line-chart-line"
    },
    {
      title: "Accessibility & Inclusive Design",
      description: "Ensuring your design is usable by all, including users with disabilities, following WCAG guidelines.",
      icon: "ri-user-star-line"
    }
  ];

  const designTools = [
    {
      category: "Design Tools",
      icon: "ri-palette-line",
      tools: [
        { name: "Figma", icon: "ri-palette-line", color: "text-purple-500" },
        { name: "Adobe XD", icon: "ri-palette-line", color: "text-pink-500" },
        { name: "Sketch", icon: "ri-palette-line", color: "text-orange-500" },
        { name: "Zeplin", icon: "ri-palette-line", color: "text-red-500" }
      ]
    },
    {
      category: "Research Tools",
      icon: "ri-search-line", 
      tools: [
        { name: "Hotjar", icon: "ri-search-line", color: "text-orange-600" },
        { name: "Google Analytics", icon: "ri-bar-chart-line", color: "text-blue-600" },
        { name: "Maze", icon: "ri-route-line", color: "text-green-500" },
        { name: "UsabilityHub", icon: "ri-group-line", color: "text-purple-600" }
      ]
    },
    {
      category: "Prototyping",
      icon: "ri-presentation-line",
      tools: [
        { name: "Principle", icon: "ri-play-line", color: "text-blue-500" },
        { name: "Framer", icon: "ri-layout-line", color: "text-indigo-500" },
        { name: "InVision", icon: "ri-eye-line", color: "text-green-600" },
        { name: "Marvel", icon: "ri-magic-line", color: "text-red-400" }
      ]
    }
  ];

  const designPhilosophy = [
    {
      icon: "ri-focus-3-line",
      title: "Empathy-Driven",
      description: "We design with real users in mind, solving their challenges and addressing their needs."
    },
    {
      icon: "ri-eye-line",
      title: "Simplicity & Clarity",
      description: "We focus on clean, minimalistic designs that communicate clearly and reduce cognitive load."
    },
    {
      icon: "ri-bar-chart-line",
      title: "Data-Informed",
      description: "We balance the latest trends and technologies to keep your product fresh and competitive."
    }
  ];

  return (
    <div>
      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-palette-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">UI/UX Design Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Design <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From user research to final design handoff, we deliver comprehensive UI/UX services that create impactful user experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {uiuxServices.map((service, index) => (
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
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our UI/UX Design Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">UI/UX Design Services?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Process <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Includes</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl mr-4">
                      {process.step}
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md">
                      <i className={`${process.icon} text-blue-600 text-xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{process.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-blue-200">
                    <i className="ri-time-line text-blue-600 mr-2"></i>
                    <span className="text-sm font-medium text-blue-700">{process.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional UI/UX Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Additional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">UI/UX Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Design <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Philosophy</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designPhilosophy.map((philosophy, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${philosophy.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{philosophy.title}</h3>
                <p className="text-gray-600">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-tools-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Tools & Technologies</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tools & Technologies <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">We Use</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designTools.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <i className={`${tool.icon} text-xl ${tool.color} mr-3`}></i>
                      <span className="font-medium text-gray-900">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            🚀 Let's Create Impactful User Experiences
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you need to design a new product, revamp an existing app, or enhance usability, Notus Technologies is here to transform your ideas into engaging and intuitive digital experiences.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer hover:scale-105">
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
