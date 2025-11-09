'use client';

export default function AIAnalyticsServices() {
  const aiServices = [
    {
      icon: "ri-brain-line",
      title: "Machine Learning Models",
      subtitle: "Predictive Intelligence",
      description: "Build custom ML models that predict outcomes, optimize processes, and automate decision-making.",
      features: ["Predictive Modeling", "Classification", "Regression Analysis", "Deep Learning", "Model Deployment"],
      price: "",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-bar-chart-line",
      title: "Business Intelligence",
      subtitle: "Data-Driven Insights",
      description: "Transform raw data into actionable insights with advanced analytics and interactive dashboards.",
      features: ["Data Visualization", "Interactive Dashboards", "KPI Tracking", "Reporting Automation", "Real-time Analytics"],
      price: "",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: "ri-eye-line",
      title: "Computer Vision",
      subtitle: "Visual Intelligence",
      description: "Implement AI systems that can analyze, understand, and process visual information from images and videos.",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"],
      price: "",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "ri-chat-3-line",
      title: "Natural Language Processing",
      subtitle: "Text Understanding",
      description: "Build intelligent systems that understand, interpret, and generate human language.",
      features: ["Sentiment Analysis", "Chatbots", "Text Classification", "Language Translation", "Content Generation"],
      price: "",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      icon: "ri-robot-line",
      title: "Process Automation",
      subtitle: "Intelligent Automation",
      description: "Automate complex business processes using AI to improve efficiency and reduce manual work.",
      features: ["RPA Implementation", "Workflow Automation", "Document Processing", "Smart Routing", "Exception Handling"],
      price: "",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: "ri-line-chart-line",
      title: "Predictive Analytics",
      subtitle: "Future Insights",
      description: "Forecast trends, identify patterns, and predict future outcomes to make proactive business decisions.",
      features: ["Trend Analysis", "Forecasting", "Risk Assessment", "Customer Behavior", "Market Prediction"],
      price: "",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const aiTechnologies = [
    {
      category: "Machine Learning",
      icon: "ri-brain-line",
      technologies: [
        { name: "TensorFlow", icon: "ri-cpu-line", color: "text-orange-500" },
        { name: "PyTorch", icon: "ri-fire-line", color: "text-red-500" },
        { name: "Scikit-learn", icon: "ri-flask-line", color: "text-blue-500" },
        { name: "XGBoost", icon: "ri-rocket-line", color: "text-green-500" }
      ]
    },
    {
      category: "Data Analytics",
      icon: "ri-bar-chart-line", 
      technologies: [
        { name: "Python", icon: "ri-code-line", color: "text-yellow-600" },
        { name: "R", icon: "ri-bar-chart-2-line", color: "text-blue-600" },
        { name: "Tableau", icon: "ri-dashboard-line", color: "text-orange-600" },
        { name: "Power BI", icon: "ri-microsoft-line", color: "text-blue-500" }
      ]
    },
    {
      category: "Cloud AI Platforms",
      icon: "ri-cloud-line",
      technologies: [
        { name: "AWS SageMaker", icon: "ri-amazon-line", color: "text-orange-500" },
        { name: "Google AI Platform", icon: "ri-google-line", color: "text-green-500" },
        { name: "Azure ML", icon: "ri-microsoft-line", color: "text-blue-500" },
        { name: "Databricks", icon: "ri-database-line", color: "text-red-500" }
      ]
    }
  ];

  const aiProcess = [
    {
      step: "01",
      title: "Data Assessment",
      description: "Analyze your data quality, availability, and structure to determine AI readiness and opportunities.",
      icon: "ri-search-2-line",
      duration: "1-2 weeks"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Define AI objectives, use cases, and create a roadmap aligned with your business goals or book a strategy call.",
      icon: "ri-lightbulb-line",
      duration: "1 week"
    },
    {
      step: "03",
      title: "Data Preparation",
      description: "Clean, transform, and prepare your data for machine learning model training and analysis or book a data preparation call.",
      icon: "ri-database-line",
      duration: "2-4 weeks"
    },
    {
      step: "04",
      title: "Model Development",
      description: "Build, train, and validate AI models using appropriate algorithms and techniques or book a model development call.",
      icon: "ri-brain-line",
      duration: "4-8 weeks"
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Test model performance, accuracy, and reliability with comprehensive validation processes.",
      icon: "ri-test-tube-line",
      duration: "2-3 weeks"
    },
    {
      step: "06",
      title: "Deployment & Monitoring",
      description: "Deploy AI solutions and provide ongoing monitoring and optimization for continuous improvement.",
      icon: "ri-rocket-line",
      duration: "Ongoing"
    }
  ];

  const aiUseCases = [
    { icon: "ri-shopping-cart-line", title: "Sales Forecasting", desc: "Predict future sales and demand patterns" },
    { icon: "ri-user-heart-line", title: "Customer Segmentation", desc: "Identify and target customer groups" },
    { icon: "ri-shield-check-line", title: "Fraud Detection", desc: "Detect suspicious activities in real-time" },
    { icon: "ri-tools-line", title: "Predictive Maintenance", desc: "Prevent equipment failures before they occur" },
    { icon: "ri-price-tag-line", title: "Dynamic Pricing", desc: "Optimize pricing based on market conditions" },
    { icon: "ri-chat-3-line", title: "Intelligent Chatbots", desc: "Provide 24/7 customer support" },
    { icon: "ri-file-search-line", title: "Document Analysis", desc: "Extract insights from unstructured documents" },
    { icon: "ri-eye-line", title: "Quality Control", desc: "Automated visual inspection and defect detection" }
  ];

  return (
    <div>
      {/* AI Analytics Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-brain-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">AI & Analytics Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Intelligent <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence and advanced analytics to drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
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

      {/* AI Use Cases */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-lightbulb-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">AI Use Cases</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real-World <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI can transform different aspects of your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${useCase.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
              <i className="ri-stack-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">AI Technologies</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest AI frameworks and tools to build robust, scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiTechnologies.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
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

      {/* AI Development Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full mb-6">
              <i className="ri-roadmap-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">AI Process</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How We Build <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful AI implementation and deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProcess.map((process, index) => (
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