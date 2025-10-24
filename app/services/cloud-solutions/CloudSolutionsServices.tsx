'use client';

export default function CloudSolutionsServices() {
  const cloudServices = [
    {
      icon: "ri-upload-cloud-line",
      title: "Cloud Migration",
      subtitle: "Seamless Transition",
      description: "Migrate your applications and data to the cloud with zero downtime and improved performance.",
      features: ["Migration Planning", "Data Transfer", "Application Modernization", "Testing & Validation", "Go-Live Support"],
      price: "Starting at $5,000",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-server-line",
      title: "Infrastructure as Code",
      subtitle: "Automated Provisioning",
      description: "Deploy and manage cloud infrastructure using code for consistency, scalability, and version control.",
      features: ["Terraform", "CloudFormation", "Automated Deployment", "Version Control", "Infrastructure Templates"],
      price: "Starting at $3,500",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "ri-shield-check-line",
      title: "Cloud Security",
      subtitle: "Enterprise-Grade Protection",
      description: "Implement comprehensive security measures to protect your cloud infrastructure and applications.",
      features: ["Security Assessment", "Access Management", "Encryption", "Compliance", "Monitoring"],
      price: "Starting at $4,000",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "ri-settings-line",
      title: "DevOps Automation",
      subtitle: "CI/CD Pipelines",
      description: "Streamline your development process with automated testing, deployment, and monitoring pipelines.",
      features: ["CI/CD Setup", "Automated Testing", "Deployment Automation", "Monitoring", "Performance Optimization"],
      price: "Starting at $4,500",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      icon: "ri-bar-chart-line",
      title: "Cloud Monitoring",
      subtitle: "24/7 Oversight",
      description: "Monitor your cloud infrastructure and applications with real-time alerts and comprehensive dashboards.",
      features: ["Real-time Monitoring", "Custom Dashboards", "Alert Management", "Performance Analytics", "Cost Optimization"],
      price: "Starting at $2,000/month",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: "ri-tools-line",
      title: "Managed Services",
      subtitle: "Ongoing Support",
      description: "Let our experts manage your cloud infrastructure so you can focus on your core business.",
      features: ["24/7 Support", "Maintenance", "Updates & Patches", "Backup Management", "Disaster Recovery"],
      price: "Starting at $3,000/month",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const cloudPlatforms = [
    {
      category: "Amazon Web Services",
      icon: "ri-amazon-line",
      services: [
        { name: "EC2", icon: "ri-server-line", color: "text-orange-500" },
        { name: "S3", icon: "ri-database-line", color: "text-orange-600" },
        { name: "Lambda", icon: "ri-functions-line", color: "text-orange-400" },
        { name: "RDS", icon: "ri-database-2-line", color: "text-orange-700" }
      ]
    },
    {
      category: "Microsoft Azure",
      icon: "ri-microsoft-line", 
      services: [
        { name: "Virtual Machines", icon: "ri-server-line", color: "text-blue-500" },
        { name: "Blob Storage", icon: "ri-database-line", color: "text-blue-600" },
        { name: "Functions", icon: "ri-functions-line", color: "text-blue-400" },
        { name: "SQL Database", icon: "ri-database-2-line", color: "text-blue-700" }
      ]
    },
    {
      category: "Google Cloud Platform",
      icon: "ri-google-line",
      services: [
        { name: "Compute Engine", icon: "ri-server-line", color: "text-green-500" },
        { name: "Cloud Storage", icon: "ri-database-line", color: "text-green-600" },
        { name: "Cloud Functions", icon: "ri-functions-line", color: "text-green-400" },
        { name: "Cloud SQL", icon: "ri-database-2-line", color: "text-green-700" }
      ]
    }
  ];

  const cloudProcess = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze your current infrastructure and create a comprehensive migration strategy tailored to your needs.",
      icon: "ri-search-2-line",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Design scalable, secure cloud architecture that meets your performance and compliance requirements.",
      icon: "ri-building-line",
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Migration Execution",
      description: "Execute the migration plan with minimal downtime using proven tools and best practices.",
      icon: "ri-upload-cloud-line",
      duration: "2-6 weeks"
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thoroughly test migrated systems and optimize performance, security, and cost efficiency.",
      icon: "ri-test-tube-line",
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Go-Live & Support",
      description: "Switch to production environment with full support and monitoring to ensure smooth operation.",
      icon: "ri-rocket-line",
      duration: "1 week"
    },
    {
      step: "06",
      title: "Ongoing Management",
      description: "Provide continuous monitoring, maintenance, and optimization for your cloud infrastructure.",
      icon: "ri-customer-service-line",
      duration: "Ongoing"
    }
  ];

  const cloudBenefits = [
    { icon: "ri-money-dollar-circle-line", title: "Cost Reduction", desc: "Save up to 50% on infrastructure costs" },
    { icon: "ri-speed-line", title: "Enhanced Performance", desc: "Faster application response times" },
    { icon: "ri-shield-check-line", title: "Improved Security", desc: "Enterprise-grade security measures" },
    { icon: "ri-arrow-up-line", title: "Scalability", desc: "Scale resources up or down on demand" },
    { icon: "ri-time-line", title: "High Availability", desc: "99.9% uptime with disaster recovery" },
    { icon: "ri-global-line", title: "Global Reach", desc: "Deploy applications worldwide instantly" },
    { icon: "ri-leaf-line", title: "Eco-Friendly", desc: "Reduce carbon footprint with green cloud" },
    { icon: "ri-focus-line", title: "Business Focus", desc: "Focus on core business, not infrastructure" }
  ];

  return (
    <div>
      {/* Cloud Solutions Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-cloud-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Cloud Solutions Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Cloud <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From migration to management, we provide end-to-end cloud services for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
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

      {/* Cloud Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-trophy-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Cloud Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Cloud</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the full potential of your business with cloud transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-stack-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Cloud Platforms</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Multi-Cloud <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major cloud platforms to find the best solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${platform.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{platform.category}</h3>
                <div className="space-y-4">
                  {platform.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
                      <i className={`${service.icon} text-xl ${service.color} mr-3`}></i>
                      <span className="font-medium text-gray-900">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Migration Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Migration Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Migrate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven cloud migration process ensures smooth transition with minimal disruption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudProcess.map((process, index) => (
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
    </div>
  );
}