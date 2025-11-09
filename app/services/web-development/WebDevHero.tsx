'use client';

export default function WebDevHero() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background with animated elements - matching home page colors */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20web%20development%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20React%20and%20JavaScript%20frameworks%2C%20clean%20minimalist%20office%20setup%20with%20blue%20ambient%20lighting%2C%20professional%20developer%20environment%20with%20modern%20computers%20and%20coding%20interfaces&width=1400&height=800&seq=webdev-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-indigo-50/90"></div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced geometric shapes */}
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
                <i className="ri-code-line text-blue-600 mr-2"></i>
                <span className="text-sm font-semibold text-blue-700">Professional Web Development</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Modern Web
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Create stunning, responsive websites and web applications that drive engagement and deliver exceptional user experiences across all devices
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105">
                  Start Your Project
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                  View Portfolio
                </button>
              </div> */}
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600 text-sm">Websites Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">99%</div>
                  <div className="text-gray-600 text-sm">Uptime Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">3s</div>
                  <div className="text-gray-600 text-sm">Load Time</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Technology Stack Preview */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "ri-reactjs-line", title: "React", desc: "Modern UI", color: "from-blue-500 to-blue-600" },
                  { icon: "ri-html5-line", title: "HTML5", desc: "Semantic Web", color: "from-indigo-500 to-indigo-600" },
                  { icon: "ri-css3-line", title: "CSS3", desc: "Beautiful Design", color: "from-blue-400 to-indigo-500" },
                  { icon: "ri-javascript-line", title: "JavaScript", desc: "Interactive", color: "from-indigo-600 to-blue-700" }
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${tech.color} p-6 rounded-2xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mb-4">
                      <i className={`${tech.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-white font-bold mb-1">{tech.title}</h3>
                    <p className="text-white/80 text-sm">{tech.desc}</p>
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