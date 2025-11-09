'use client';

export default function MobileDevHero() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background with animated elements - matching home page colors */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20mobile%20app%20development%20workspace%20with%20smartphones%20and%20tablets%20displaying%20various%20mobile%20applications%2C%20clean%20tech%20office%20environment%20with%20blue%20and%20purple%20ambient%20lighting%2C%20professional%20mobile%20developers%20working%20on%20iOS%20and%20Android%20apps%2C%20multiple%20devices%20testing%20setup&width=1400&height=800&seq=mobile-dev-hero&orientation=landscape')`,
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
                <i className="ri-smartphone-line text-blue-600 mr-2"></i>
                <span className="text-sm font-semibold text-blue-700">Native & Cross-Platform Apps</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Build Amazing
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Create powerful iOS and Android applications that deliver exceptional user experiences and drive business growth
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105">
                  Start App Development
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                  View App Portfolio
                </button>
              </div> */}
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600 text-sm">Apps Launched</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">4.8★</div>
                  <div className="text-gray-600 text-sm">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">2M+</div>
                  <div className="text-gray-600 text-sm">Downloads</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Mobile App Preview */}
            {/* <div className="relative">
              <div className="flex justify-center items-center space-x-8"> */}
                {/* iPhone mockup */}
                {/* <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl w-64 h-128 overflow-hidden relative">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-full flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-smartphone-line text-2xl text-white"></i>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">iOS App</h3>
                      <p className="text-white/80 text-sm text-center">Native iOS Development</p>
                    </div>
                  </div>
                </div> */}
                
                {/* Android mockup */}
                {/* <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl w-64 h-128 overflow-hidden relative">
                    <div className="bg-gradient-to-br from-indigo-500 to-blue-600 h-full flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <i className="ri-android-line text-2xl text-white"></i>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">Android App</h3>
                      <p className="text-white/80 text-sm text-center">Native Android Development</p>
                    </div>
                  </div>
                </div> */}
              {/* </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}