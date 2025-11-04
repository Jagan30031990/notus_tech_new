
'use client';

export default function MobileDevServices() {
  const mobileServices = [
    {
      icon: "ri-apple-line",
      title: "Native iOS Development",
      subtitle: "Swift & Objective-C",
      description: "Build high-performance native iOS apps for iPhones, iPads and Apple Watch. Our apps are built using Swift and Objective-C to deliver exceptional performance and user experience.",
      features: ["Swift Programming", "iOS SDK", "Xcode Development", "App Store Optimization", "TestFlight Beta Testing"],
      price: "",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-android-line",
      title: "Native Android Development",
      subtitle: "Kotlin & Java",
      description: "Create powerful Android applications using modern Kotlin and Java for seamless performance across all Android devices, smartphones, and tablets.",
      features: ["Kotlin Programming", "Android Studio", "Material Design", "Google Play Optimization", "Firebase Integration"],
      price: "",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "ri-smartphone-line",
      title: "Cross-Platform Development",
      subtitle: "React Native & Flutter",
      description: "We have frameworks like Flutter, React Native, and Xamarin to develop apps that run seamlessly across iOS and Android, saving time to market and reducing development cost and complication.",
      features: ["React Native", "Flutter Development", "Xamarin", "Shared Codebase", "Platform Optimization"],
      price: "",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "ri-palette-line",
      title: "UI & UX Design",
      subtitle: "User-Centered Design",
      description: "Our experienced creative team at Dreamidus is based around multiple devices, platforms, and user experience optimization for your mobile application.",
      features: ["Mobile UI Design", "User Experience Design", "Prototyping", "Usability Testing", "Design Systems"],
      price: "",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      icon: "ri-code-line",
      title: "Mobile App Testing & Quality Assurance",
      subtitle: "Comprehensive Testing",
      description: "Our QA engineers ensure your app is functional tested across multiple devices, platforms, and operating systems with comprehensive quality assurance.",
      features: ["Manual & Automated Testing", "Performance & Stress Testing", "Usability & Accessibility Checks", "Security & Compliance Audits"],
      price: "",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: "ri-tools-line",
      title: "App Maintenance & Support",
      subtitle: "Ongoing Support",
      description: "We provide continuous maintenance post-launch, including regular bug fixes & security patches, OS & device compatibility updates, performance optimization, and new feature rollouts.",
      features: ["24/7 monitoring and support plans", "Regular Bug Fixes", "Security Updates", "Performance Optimization", "Feature Enhancements"],
      price: "",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Consultation & Requirement Analysis",
      description: "We discuss your vision, business goals, and technical needs to create a comprehensive project roadmap.",
      icon: "ri-lightbulb-line",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating wireframes and designing a user-friendly interface that enhances user experience and engagement.",
      icon: "ri-palette-line",
      duration: "2-4 weeks"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Our developers code following a fully functional app with robust backend systems and third-party integrations.",
      icon: "ri-code-line",
      duration: "6-12 weeks"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing to ensure the app's functionality, security, and performance across multiple devices and platforms.",
      icon: "ri-shield-check-line",
      duration: "2-3 weeks"
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We assist with app store submissions and post-launch monitoring to ensure successful market entry.",
      icon: "ri-rocket-line",
      duration: "1-2 weeks"
    },
    {
      step: "06",
      title: "Maintenance & Growth",
      description: "Ongoing support to keep your app updated and up to date with regular updates and feature enhancements.",
      icon: "ri-tools-line",
      duration: "Ongoing"
    }
  ];

  const whyChooseUs = [
    {
      icon: "ri-speed-line",
      title: "Fast-Loading Performance",
      description: "We ensure fast loading, smooth transitions, and a seamless user journey, regardless of device or network connection."
    },
    {
      icon: "ri-device-line",
      title: "Scalable Architecture",
      description: "Built to grow with your business, our apps can handle increased user loads and feature expansions."
    },
    {
      icon: "ri-shield-check-line",
      title: "Custom-Built Solutions",
      description: "Do new businesses on the scene, and further our deep gigs. We quickly pog additional to your specific and technical needs."
    },
    {
      icon: "ri-search-line",
      title: "Performance Optimized",
      description: "We ensure fast loading, smooth transitions, and a seamless user journey, regardless of device or network connection."
    }
  ];

  const specializedServices = [
    {
      icon: "ri-smartphone-line",
      title: "Native App Development",
      description: "We deliver high-performance native apps for iOS/iPhone, iPod touch capabilities and provide optimal user experiences using Swift for iOS and Kotlin for Android.",
      features: ["iOS Development using Swift and Objective-C", "Android Development using Kotlin and Java", "Apple Watch and Android Wear integration"]
    },
    {
      icon: "ri-code-line",
      title: "Cross-Platform App Development",
      description: "We use frameworks like Flutter, React Native, and Xamarin to develop apps that run seamlessly across iOS and Android, saving time to market and reducing development cost and complication.",
      features: ["React Native Development", "Flutter Development", "Xamarin Development"]
    },
    {
      icon: "ri-palette-line",
      title: "IoT & Wearable Apps",
      description: "We create smart applications that connect with IoT devices, smart home gadgets, health trackers, and wearable tech. Our solutions enhance user interactions and bring real-time data and control to your users' fingertips.",
      features: ["IoT Device Integration", "Wearable App Development", "Smart Home Solutions"]
    }
  ];

  const technologies = [
    {
      category: "Native iOS",
      icon: "ri-apple-line",
      techs: [
        { name: "Swift", icon: "ri-code-line", color: "text-orange-500" },
        { name: "Objective-C", icon: "ri-code-line", color: "text-blue-500" },
        { name: "Xcode", icon: "ri-tools-line", color: "text-blue-600" },
        { name: "CoreData", icon: "ri-database-line", color: "text-green-500" }
      ]
    },
    {
      category: "Native Android",
      icon: "ri-android-line",
      techs: [
        { name: "Kotlin", icon: "ri-code-line", color: "text-purple-600" },
        { name: "Java", icon: "ri-code-line", color: "text-red-600" },
        { name: "Android Studio", icon: "ri-tools-line", color: "text-green-600" },
        { name: "Room Database", icon: "ri-database-line", color: "text-blue-500" }
      ]
    },
    {
      category: "Cross-Platform",
      icon: "ri-smartphone-line",
      techs: [
        { name: "React Native", icon: "ri-reactjs-line", color: "text-blue-500" },
        { name: "Flutter", icon: "ri-flutter-line", color: "text-cyan-500" },
        { name: "Xamarin", icon: "ri-microsoft-line", color: "text-purple-500" },
        { name: "Ionic", icon: "ri-ionic-line", color: "text-blue-400" }
      ]
    }
  ];

  const appFeatures = [
    { icon: "ri-notification-line", title: "Push Notifications", desc: "Engage users with timely updates" },
    { icon: "ri-wifi-off-line", title: "Offline Functionality", desc: "Work without internet connection" },
    { icon: "ri-fingerprint-line", title: "Biometric Authentication", desc: "Secure login with Touch/Face ID" },
    { icon: "ri-map-pin-line", title: "GPS & Location Services", desc: "Location-based features" },
    { icon: "ri-camera-line", title: "Camera Integration", desc: "Photo and video capture" },
    { icon: "ri-bank-card-line", title: "Payment Integration", desc: "Secure in-app purchases" },
    { icon: "ri-share-line", title: "Social Media Sharing", desc: "Easy content sharing" },
    { icon: "ri-cloud-line", title: "Cloud Synchronization", desc: "Data sync across devices" }
  ];

  return (
    <div>
      {/* Specialized Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-smartphone-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Specialized Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert Mobile <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native development to cross-platform solutions, we deliver comprehensive mobile app development services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-star-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Why Choose Our Mobile App Development Services?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Expertise First, We understand the latest trends and new technologies to deliver exceptional mobile app development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${reason.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Development Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-smartphone-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Mobile Development Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Mobile <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to App Store, we deliver end-to-end mobile development services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobileServices.map((service, index) => (
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

      {/* App Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-star-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">App Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential features that make your mobile app stand out and deliver exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-stack-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Technology Stack</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build high-performance mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
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

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our Development Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Develop</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven mobile app development process ensures successful launch and user adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Next Big App!
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ninja Technologies: Our premier apple tech community designed - and beyond. Let's collaborate to bring your vision to life and create a product app that truly stands out expectations.
          </p>
          <p className="text-lg text-blue-200 mb-10">
            Contact us today to get started with a free consultation!
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
