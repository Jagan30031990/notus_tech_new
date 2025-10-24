
'use client';

export default function ContactHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Background elements matching homepage exactly */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Geometric shapes matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-20 h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>

      {/* Enhanced contact-focused geometric shapes with homepage colors */}
      <div className="absolute inset-0">
        {/* Floating contact icons with glassmorphism effect */}
        <div className="absolute top-24 left-12 w-24 h-24 bg-blue-500/10 backdrop-blur-md rounded-3xl rotate-12 animate-pulse border border-blue-400/20 flex items-center justify-center">
          <i className="ri-mail-line text-2xl text-blue-600"></i>
        </div>
        <div className="absolute bottom-28 right-12 w-20 h-20 bg-indigo-600/10 backdrop-blur-sm rounded-2xl rotate-45 animate-pulse delay-1000 border border-indigo-400/30 flex items-center justify-center">
          <i className="ri-phone-line text-xl text-indigo-600"></i>
        </div>
        <div className="absolute top-1/3 right-24 w-16 h-16 bg-cyan-500/15 backdrop-blur-lg rounded-full animate-bounce border border-cyan-400/40 flex items-center justify-center">
          <i className="ri-map-pin-line text-lg text-cyan-600"></i>
        </div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-blue-400/15 backdrop-blur-md rounded-xl rotate-12 animate-pulse delay-500 border border-blue-400/30 flex items-center justify-center">
          <i className="ri-chat-3-line text-sm text-blue-600"></i>
        </div>

        {/* Additional floating elements for depth */}
        <div className="absolute top-16 right-1/3 w-8 h-8 bg-blue-400/20 backdrop-blur-sm rounded-lg rotate-45 animate-pulse delay-700 border border-blue-300/40"></div>
        <div className="absolute bottom-16 left-1/3 w-10 h-10 bg-gradient-to-r from-cyan-500/15 to-blue-400/20 backdrop-blur-md rounded-2xl animate-bounce delay-300 border border-blue-200/30"></div>
        <div className="absolute top-2/3 left-16 w-6 h-6 bg-indigo-400/25 backdrop-blur-lg rounded-full animate-pulse delay-1200 border border-indigo-300/50"></div>

        {/* Connecting lines between elements */}
        <div className="absolute top-32 left-24 w-32 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent rotate-45 animate-pulse delay-800"></div>
        <div className="absolute bottom-40 right-24 w-24 h-0.5 bg-gradient-to-l from-indigo-400/40 to-transparent rotate-12 animate-pulse delay-1400"></div>

        {/* Pulsing dots for connectivity theme */}
        <div className="absolute top-40 right-40 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-indigo-500 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
              <i className="ri-phone-line text-blue-600"></i>
              <span className="text-blue-700 text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your business with innovative technology solutions? 
              <span className="block mt-2 text-lg text-gray-500">Our experts are here to help you succeed.</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 backdrop-blur-sm border border-blue-200">
                <i className="ri-time-line text-blue-600"></i>
                <span className="text-blue-700">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 backdrop-blur-sm border border-blue-200">
                <i className="ri-shield-check-line text-blue-600"></i>
                <span className="text-blue-700">Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 backdrop-blur-sm border border-blue-200">
                <i className="ri-rocket-line text-blue-600"></i>
                <span className="text-blue-700">Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
