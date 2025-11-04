'use client';

export default function UIUXHero() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background with animated elements - matching home page colors */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20UI%20UX%20design%20workspace%20with%20multiple%20screens%20showing%20beautiful%20user%20interface%20designs%2C%20clean%20design%20studio%20environment%20with%20blue%20and%20purple%20ambient%20lighting%2C%20professional%20UX%20designers%20working%20on%20wireframes%20and%20prototypes%2C%20design%20thinking%20process%20visualization%2C%20creative%20workspace%20with%20design%20tools%20and%20sketches&width=1400&height=800&seq=uiux-hero&orientation=landscape')`,
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
                <i className="ri-palette-line text-blue-600 mr-2"></i>
                <span className="text-sm font-semibold text-blue-700">User-Centered Design Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Design That
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Converts
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Create exceptional user experiences that delight customers and drive business growth through thoughtful design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105">
                  Start Design Project
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                  View Design Portfolio
                </button>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-gray-600 text-sm">Designs Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">5.0★</div>
                  <div className="text-gray-600 text-sm">Client Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600 text-sm">User Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Design Process Preview */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "ri-user-heart-line", title: "User Research", color: "from-blue-500 to-blue-600" },
                  { icon: "ri-pencil-ruler-line", title: "Wireframing", color: "from-indigo-500 to-indigo-600" },
                  { icon: "ri-palette-line", title: "Visual Design", color: "from-blue-400 to-indigo-500" },
                  { icon: "ri-presentation-line", title: "Prototyping", color: "from-indigo-600 to-blue-700" }
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