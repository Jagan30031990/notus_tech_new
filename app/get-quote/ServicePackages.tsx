'use client';

export default function ServicePackages() {
  const packages = [
    {
      name: "Starter Package",
      price: "$5,000 - $15,000",
      description: "Perfect for small businesses and startups",
      features: [
        "5-10 page website",
        "Responsive design",
        "Basic SEO optimization",
        "Contact forms",
        "1 month support",
        "Analytics setup"
      ],
      icon: "ri-rocket-line",
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      name: "Professional Package",
      price: "$15,000 - $50,000",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Custom web application",
        "Database integration",
        "User authentication",
        "Admin dashboard",
        "API development",
        "3 months support",
        "Advanced SEO",
        "Performance optimization"
      ],
      icon: "ri-crown-line",
      color: "from-indigo-500 to-indigo-600",
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "$50,000+",
      description: "Full-scale solutions for large organizations",
      features: [
        "Complex web platform",
        "Mobile applications",
        "Third-party integrations",
        "Advanced security",
        "Scalable architecture",
        "6 months support",
        "AI/ML integration",
        "Dedicated project manager",
        "24/7 monitoring"
      ],
      icon: "ri-building-line",
      color: "from-blue-600 to-indigo-600",
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: "UI/UX Design",
      price: "$2,000 - $8,000",
      icon: "ri-palette-line",
      description: "User interface and experience design"
    },
    {
      name: "Mobile App Development",
      price: "$10,000 - $30,000",
      icon: "ri-smartphone-line",
      description: "iOS and Android applications"
    },
    {
      name: "E-commerce Solutions",
      price: "$8,000 - $25,000",
      icon: "ri-shopping-cart-line",
      description: "Online store development"
    },
    {
      name: "Digital Marketing",
      price: "$1,500 - $5,000/mo",
      icon: "ri-megaphone-line",
      description: "SEO, PPC, and social media marketing"
    },
    {
      name: "AI & Analytics",
      price: "$15,000 - $40,000",
      icon: "ri-brain-line",
      description: "Machine learning and data analytics"
    },
    {
      name: "Cloud Solutions",
      price: "$5,000 - $20,000",
      icon: "ri-cloud-line",
      description: "Cloud infrastructure and deployment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
            <i className="ri-price-tag-3-line mr-2 text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-700">Pricing Packages</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for every business size and requirement
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${pkg.popular ? 'border-indigo-200' : 'border-blue-100'} hover:shadow-2xl transition-all duration-300`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${pkg.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${pkg.popular 
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:shadow-xl' 
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
              >
                Get Quote for {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h3>
            <p className="text-lg text-gray-600">Expand your project with these complementary services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <i className={`${service.icon} text-xl text-white`}></i>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{service.price}</div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every project is unique. Get a personalized quote tailored to your specific requirements and budget.
            </p>
            <button 
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center mx-auto"
            >
              <i className="ri-calculator-line mr-3"></i>
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}