
'use client';

import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
      {/* Enhanced background decorative elements - matching home page */}
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
              <i className="ri-chat-3-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Ready to Start?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your ideas into reality with our expert team. Get started with a free consultation and discover how we can accelerate your digital transformation.
            </p>
            
            {/* Contact methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-blue-600 font-medium">+91 9911433392</p>
                <p className="text-blue-600 font-medium">+91 8250983407</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-blue-600 font-medium text-wrap">support@notustechnologies.co.in</p>
              </div>
              
              {/* <div className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <i className="ri-calendar-line text-white text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
                <p className="text-blue-600 font-medium">Book a Meeting</p>
              </div> */}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105"
              >
                <i className="ri-rocket-line mr-3 group-hover:animate-bounce"></i>
                Start Your Project
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-eye-line mr-2"></i>
                View Portfolio
              </Link>
            </div>
          </div>
          
          {/* Right Content - Success Metrics */}
          <div className="relative">
            <div 
              className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20business%20team%20celebrating%20success%20with%20laptops%20and%20documents%2C%20modern%20office%20environment%20with%20blue%20lighting%2C%20happy%20diverse%20professionals%20working%20together%2C%20technology%20company%20success%20meeting&width=600&height=400&seq=services-cta-success&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Success Metrics</h3>
                  <p className="text-gray-600">Results that speak for themselves</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex justify-center items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-xl mr-1"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"Outstanding service and exceptional results!"</p>
                  <p className="text-gray-900 font-semibold mt-2">- Sarah Johnson, CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
