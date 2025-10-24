'use client';

export default function ExperiencedServices() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">500+ TRUSTED OUR CLIENTS</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Most Experienced
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-violet-300 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Delivering tailor-made software solutions that align with your business goals.
          </p>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center mx-auto">
            Explore Our Service
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Countries Represented */}
          <div className="text-center group">
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-global-line text-3xl text-white"></i>
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">0+</span>
            </div>
            <div className="text-lg">
              <div className="text-white font-semibold">Countries</div>
              <div className="text-blue-200">Represented</div>
            </div>
          </div>

          {/* IT Consulting */}
          <div className="text-center group">
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-computer-line text-3xl text-white"></i>
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-300 to-white bg-clip-text text-transparent">0+</span>
            </div>
            <div className="text-lg">
              <div className="text-white font-semibold">IT</div>
              <div className="text-blue-200">Consulting</div>
            </div>
          </div>

          {/* Client Served */}
          <div className="text-center group">
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="ri-bar-chart-line text-3xl text-white"></i>
            </div>
            <div className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent">20+</span>
            </div>
            <div className="text-lg">
              <div className="text-white font-semibold">Client</div>
              <div className="text-blue-200">served</div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center">
              <i className="ri-time-line text-emerald-400 mr-3 text-xl"></i>
              <div>
                <div className="text-sm text-blue-200">OPEN HOURS</div>
                <div className="text-white font-semibold">MON-FRI: 9 AM - 6 PM SATURDAY: 9 AM - 4 PM SUNDAY: CLOSED</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-phone-line text-violet-400 mr-3 text-xl"></i>
              <div>
                <div className="text-sm text-blue-200">GET IN TOUCH</div>
                <div className="text-white font-semibold">PHONE: +91-9914333902</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-time-line text-orange-400 mr-3 text-xl"></i>
              <div>
                <div className="text-sm text-blue-200">OPEN HOURS</div>
                <div className="text-white font-semibold">MON-FRI: 9 AM - 6 PM SATURDAY: 9 AM - 4 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}