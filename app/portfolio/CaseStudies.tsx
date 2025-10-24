
'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "TechStart Inc.",
      industry: "Technology Startup",
      problem: "Needed a complete digital presence including website, mobile app, and branding to launch their SaaS product",
      solution: "Developed a comprehensive digital ecosystem with responsive website, cross-platform mobile app, and integrated payment system",
      results: ["300% increase in user engagement", "50% faster time-to-market", "99.9% system uptime"],
      image: "https://readdy.ai/api/search-image?query=successful%20technology%20startup%20office%20with%20modern%20workspace%20and%20happy%20team%20celebrating%20business%20growth%2C%20corporate%20success%20story%20with%20blue%20and%20white%20theme&width=500&height=300&seq=case-techstart&orientation=landscape"
    },
    {
      title: "HealthCare Plus",
      industry: "Healthcare",
      problem: "Outdated patient management system causing inefficiencies and poor user experience",
      solution: "Built a modern, HIPAA-compliant patient portal with appointment scheduling, medical records, and telemedicine features",
      results: ["40% reduction in appointment scheduling time", "85% patient satisfaction score", "60% decrease in administrative costs"],
      image: "https://readdy.ai/api/search-image?query=modern%20healthcare%20facility%20with%20digital%20technology%20integration%2C%20medical%20professionals%20using%20tablets%20and%20modern%20equipment%20in%20clean%20hospital%20environment&width=500&height=300&seq=case-healthcare&orientation=landscape"
    },
    {
      title: "RetailMax",
      industry: "E-commerce",
      problem: "Low conversion rates and poor mobile experience on existing e-commerce platform",
      solution: "Redesigned the entire e-commerce platform with focus on mobile-first design and conversion optimization",
      results: ["150% increase in mobile conversions", "35% improvement in page load speed", "25% increase in average order value"],
      image: "https://readdy.ai/api/search-image?query=successful%20e-commerce%20business%20with%20modern%20retail%20environment%20and%20digital%20technology%2C%20online%20shopping%20success%20story%20with%20professional%20atmosphere&width=500&height=300&seq=case-retail&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of how we've helped businesses transform and achieve their goals
          </p>
        </div>
        
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-full text-sm mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{study.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                        <i className="ri-alert-line mr-2"></i>
                        Problem
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                        <i className="ri-lightbulb-line mr-2"></i>
                        Solution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
                        <i className="ri-trophy-line mr-2"></i>
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <i className="ri-check-line text-white text-sm"></i>
                            </div>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
