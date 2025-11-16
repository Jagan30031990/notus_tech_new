'use client';

export default function ExperiencedServices() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 md:mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium">500+ TRUSTED OUR CLIENTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
            Most Experienced
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-violet-300 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12 px-4">
            Delivering tailor-made software solutions that align with your business goals.
          </p>

          {/* <button className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center mx-auto text-sm md:text-base">
            Explore Our Service
            <i className="ri-arrow-right-line ml-2"></i>
          </button> */}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {/* Countries Represented */}
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-global-line text-2xl md:text-3xl text-white"></i>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">1+</span>
            </div>
            <div className="text-sm md:text-base lg:text-lg">
              <div className="text-white font-semibold">Countries</div>
              <div className="text-blue-200">Represented</div>
            </div>
          </div>

          {/* IT Consulting */}
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-computer-line text-2xl md:text-3xl text-white"></i>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-violet-300 to-white bg-clip-text text-transparent">10+</span>
            </div>
            <div className="text-sm md:text-base lg:text-lg">
              <div className="text-white font-semibold">IT</div>
              <div className="text-blue-200">Consulting</div>
            </div>
          </div>

          {/* Client Served */}
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-bar-chart-line text-2xl md:text-3xl text-white"></i>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent">20+</span>
            </div>
            <div className="text-sm md:text-base lg:text-lg">
              <div className="text-white font-semibold">Client</div>
              <div className="text-blue-200">served</div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-10 md:mt-14 lg:mt-16 bg-slate-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
              <i className="ri-time-line text-emerald-400 text-lg md:text-xl"></i>
              <div>
                <div className="text-xs sm:text-sm text-blue-200">OPEN HOURS</div>
                <div className="text-white font-semibold text-xs sm:text-sm md:text-base">MON-FRI: 9 AM - 6 PM SATURDAY: 9 AM - 4 PM SUNDAY: CLOSED</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
              <i className="ri-phone-line text-violet-400 text-lg md:text-xl"></i>
              <div>
                <div className="text-xs sm:text-sm text-blue-200">GET IN TOUCH</div>
                <div className="text-white font-semibold text-xs sm:text-sm md:text-base">PHONE: +91 9911433392</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
              <i className="ri-time-line text-orange-400 text-lg md:text-xl"></i>
              <div>
                <div className="text-xs sm:text-sm text-blue-200">OPEN HOURS</div>
                <div className="text-white font-semibold text-xs sm:text-sm md:text-base">MON-FRI: 9 AM - 6 PM SATURDAY: 9 AM - 4 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}