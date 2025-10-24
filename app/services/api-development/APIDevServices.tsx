
'use client';

export default function APIDevServices() {
  const apiServices = [
    {
      icon: "ri-code-s-slash-line",
      title: "REST API Development",
      description: "Build robust RESTful APIs with proper authentication, rate limiting, and comprehensive documentation.",
      features: ["HTTP Methods", "JSON Responses", "Authentication", "Rate Limiting", "API Versioning"]
    },
    {
      icon: "ri-database-2-line",
      title: "GraphQL Implementation",
      description: "Flexible GraphQL APIs that allow clients to request exactly the data they need with type safety.",
      features: ["Query Optimization", "Real-time Subscriptions", "Type Safety", "Schema Design", "Resolver Logic"]
    },
    {
      icon: "ri-links-line",
      title: "Third-party Integrations",
      description: "Seamlessly connect with popular services and platforms to extend your application's capabilities.",
      features: ["Payment Gateways", "Social Media APIs", "Cloud Services", "Analytics Tools", "Communication APIs"]
    },
    {
      icon: "ri-service-line",
      title: "Microservices Architecture",
      description: "Design and implement scalable microservices that communicate efficiently across distributed systems.",
      features: ["Service Discovery", "Load Balancing", "Circuit Breakers", "Message Queues", "Container Orchestration"]
    },
    {
      icon: "ri-shield-check-line",
      title: "API Security & Authentication",
      description: "Implement robust security measures to protect your APIs from unauthorized access and attacks.",
      features: ["JWT Tokens", "OAuth 2.0", "API Keys", "CORS Configuration", "Input Validation"]
    },
    {
      icon: "ri-file-text-line",
      title: "API Documentation",
      description: "Comprehensive documentation that makes it easy for developers to understand and use your APIs.",
      features: ["Interactive Docs", "Code Examples", "Testing Interface", "Version History", "SDK Generation"]
    }
  ];

  const integrationPartners = [
    { name: "Stripe", logo: "ri-bank-card-line", category: "Payment Processing" },
    { name: "AWS", logo: "ri-cloud-line", category: "Cloud Services" },
    { name: "Shopify", logo: "ri-shopping-cart-line", category: "E-commerce" },
    { name: "Salesforce", logo: "ri-user-star-line", category: "CRM" },
    { name: "Google APIs", logo: "ri-google-line", category: "Maps & Analytics" },
    { name: "Slack", logo: "ri-chat-3-line", category: "Communication" },
    { name: "SendGrid", logo: "ri-mail-send-line", category: "Email Service" },
    { name: "Twilio", logo: "ri-phone-line", category: "SMS & Voice" }
  ];

  return (
    <div>
      {/* API Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-settings-3-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Our API Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">API Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to deployment, we provide end-to-end API development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
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

      {/* Integration Partners */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Integration <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with leading platforms and services to extend your application's capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrationPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${partner.logo} text-2xl text-white`}></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
