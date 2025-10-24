'use client';

import Link from 'next/link';

export default function WebDevCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-8">
              <i className="ri-rocket-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Launch Your
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Dream Website
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your vision into a powerful web presence. Get a free consultation and discover how we can build the perfect website for your business.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Free initial consultation & project estimation",
                "30-day money-back guarantee on all projects",
                "Dedicated project manager & regular updates",
                "Post-launch support & maintenance included"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105"
              >
                <i className="ri-chat-3-line mr-3 group-hover:animate-bounce"></i>
                Get Free Quote
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-phone-line mr-2"></i>
                Call (555) 123-4567
              </button>
            </div>
          </div>
          
          {/* Right Content - Project Timeline */}
          <div className="relative">
            <div 
              className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20web%20development%20project%20timeline%20and%20milestones%2C%20clean%20project%20management%20dashboard%20with%20progress%20indicators%2C%20professional%20development%20workflow%20visualization%20with%20blue%20color%20scheme&width=600&height=500&seq=webdev-timeline&orientation=portrait')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Timeline</h3>
                  <p className="text-gray-600">From concept to launch in weeks, not months</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { phase: "Discovery", duration: "Week 1", icon: "ri-search-line", color: "blue" },
                    { phase: "Design", duration: "Week 2-3", icon: "ri-palette-line", color: "indigo" },
                    { phase: "Development", duration: "Week 4-7", icon: "ri-code-line", color: "blue" },
                    { phase: "Testing", duration: "Week 8", icon: "ri-shield-check-line", color: "indigo" },
                    { phase: "Launch", duration: "Week 9", icon: "ri-rocket-line", color: "blue" }
                  ].map((phase, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className={`w-12 h-12 bg-gradient-to-r ${phase.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-indigo-500 to-indigo-600'} rounded-xl flex items-center justify-center mr-4`}>
                        <i className={`${phase.icon} text-white text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{phase.phase}</div>
                        <div className="text-gray-600 text-sm">{phase.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9 Weeks</div>
                  <p className="text-gray-600">Average project completion time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}