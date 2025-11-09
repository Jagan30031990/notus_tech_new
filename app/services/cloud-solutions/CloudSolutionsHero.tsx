'use client';

export default function CloudSolutionsHero() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background with animated elements - matching home page colors */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20cloud%20computing%20infrastructure%20with%20servers%20data%20centers%20and%20network%20connections%2C%20clean%20technology%20environment%20with%20blue%20and%20purple%20ambient%20lighting%2C%20professional%20cloud%20architects%20working%20on%20scalable%20solutions%2C%20cloud%20infrastructure%20visualization%20with%20AWS%20Azure%20servers&width=1400&height=800&seq=cloud-solutions-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-indigo-50/90"></div>
      </div>
      
      {/* Enhanced background decorative elements - matching home page */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced geometric shapes - matching home page */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-20 h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-gray-900">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-8">
                <i className="ri-cloud-line text-blue-600 mr-2"></i>
                <span className="text-sm font-semibold text-blue-700">Scalable Cloud Infrastructure</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Scale Your Business
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  To The Cloud
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Migrate, optimize, and scale your applications with secure, reliable cloud infrastructure solutions
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105">
                  Start Cloud Migration
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Free Cloud Assessment
                </button>
              </div> */}
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">120+</div>
                  <div className="text-gray-600 text-sm">Cloud Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">99.9%</div>
                  <div className="text-gray-600 text-sm">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50%</div>
                  <div className="text-gray-600 text-sm">Cost Reduction</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Cloud Platforms Preview */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "ri-amazon-line", title: "AWS", color: "from-orange-500 to-orange-600" },
                  { icon: "ri-microsoft-line", title: "Azure", color: "from-blue-500 to-blue-600" },
                  { icon: "ri-google-line", title: "Google Cloud", color: "from-green-500 to-green-600" },
                  { icon: "ri-cloud-line", title: "Multi-Cloud", color: "from-indigo-500 to-purple-600" }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-4">
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-white font-bold">{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}