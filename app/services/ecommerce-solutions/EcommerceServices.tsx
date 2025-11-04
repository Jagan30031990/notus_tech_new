
'use client';

export default function EcommerceServices() {
  const ecommerceServices = [
    {
      icon: "ri-store-line",
      title: "Custom E-commerce Development",
      description: "Build online stores tailored to your business needs with unique features and completely personalized shopping experiences.",
      features: ["Custom Design", "Unique Features", "Scalable Architecture", "Performance Optimization", "SEO Ready"]
    },
    {
      icon: "ri-shopping-bag-line",
      title: "Shopify Development",
      description: "Professional Shopify store development including custom themes, applications, and third-party integration services.",
      features: ["Theme Customization", "App Development", "Third-party Integration", "Migration Services", "Store Optimization"]
    },
    {
      icon: "ri-bank-card-line",
      title: "Payment Integration",
      description: "Secure payment processing systems supporting multiple payment gateways and cryptocurrency payment options.",
      features: ["Multiple Payment Gateways", "Secure Processing", "Fraud Protection", "Recurring Payments", "Global Currencies"]
    },
    {
      icon: "ri-database-line",
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems to streamline your operations and improve efficiency.",
      features: ["Inventory Tracking", "Automatic Alerts", "Multi-location Management", "Supplier Integration", "Reporting Analytics"]
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobile Commerce",
      description: "Mobile-optimized shopping experiences and native mobile application development for iOS and Android.",
      features: ["Responsive Design", "Mobile Apps", "Push Notifications", "Mobile Payments", "Offline Functionality"]
    },
    {
      icon: "ri-share-line",
      title: "Multi-channel Sales",
      description: "Sell across multiple platforms including e-commerce platforms, social media, and physical stores.",
      features: ["Marketplace Integration", "Social Commerce", "POS Systems", "Unified Inventory", "Cross-platform Sync"]
    },
    {
      icon: "ri-global-line",
      title: "Cross-border E-commerce",
      description: "International e-commerce solutions supporting multi-language, multi-currency, and global logistics.",
      features: ["Multi-language Support", "Multi-currency Processing", "Global Shipping", "Tax Calculation", "Localization Services"]
    },
    {
      icon: "ri-line-chart-line",
      title: "Data Analytics",
      description: "In-depth sales analysis and customer behavior data to help you make informed business decisions.",
      features: ["Sales Reports", "Customer Analytics", "Conversion Tracking", "A/B Testing", "ROI Analysis"]
    },
    {
      icon: "ri-customer-service-line",
      title: "Customer Service Integration",
      description: "Complete customer service system including live chat, order tracking, and return management.",
      features: ["Live Chat", "Order Management", "Return System", "Customer Support", "FAQ System"]
    }
  ];

  const whyChooseUs = [
    {
      icon: "ri-rocket-line",
      title: "Fast Launch",
      description: "Efficient development process ensures your e-commerce website launches quickly"
    },
    {
      icon: "ri-shield-check-line",
      title: "Secure & Reliable",
      description: "Using the highest security standards to protect customer data and transaction security"
    },
    {
      icon: "ri-tools-line",
      title: "Custom Solutions",
      description: "Provide completely customized solutions based on your specific business needs"
    },
    {
      icon: "ri-chat-3-line",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services to ensure stable operation"
    }
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "Deep understanding of your business needs and target customers"
    },
    {
      step: "2", 
      title: "Design Planning",
      description: "Create user-friendly interface design and shopping flow"
    },
    {
      step: "3",
      title: "Development Integration",
      description: "Build fully functional e-commerce platform and payment systems"
    },
    {
      step: "4",
      title: "Testing & Deployment",
      description: "Comprehensive testing and deployment to production environment"
    },
    {
      step: "5",
      title: "Training & Support",
      description: "Provide usage training and ongoing technical support"
    }
  ];

  const ecommercePlatforms = [
    { name: "Shopify", logo: "ri-shopping-bag-line", description: "World's leading e-commerce platform" },
    { name: "WooCommerce", logo: "ri-wordpress-line", description: "WordPress-powered online stores" },
    { name: "Magento", logo: "ri-store-line", description: "Enterprise-level e-commerce solutions" },
    { name: "BigCommerce", logo: "ri-shopping-cart-2-line", description: "Scalable commerce platform" },
    { name: "Custom Solutions", logo: "ri-code-line", description: "Tailored e-commerce platforms" },
    { name: "Headless Commerce", logo: "ri-terminal-line", description: "API-first architecture" }
  ];

  return (
    <div>
      {/* E-commerce Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-store-2-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our E-commerce Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">E-commerce Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to conversion, we build e-commerce experiences that drive sales growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceServices.map((service, index) => (
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing you with the highest quality e-commerce solutions and service experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${item.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Development <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional development process ensures smooth project execution and successful delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <i className="ri-arrow-right-line text-blue-400 text-xl"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Platforms */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              E-commerce <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading e-commerce platforms to build the perfect solution for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommercePlatforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`${platform.logo} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}