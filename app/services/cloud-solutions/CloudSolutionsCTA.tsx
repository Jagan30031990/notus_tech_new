'use client';

import Link from 'next/link';

export default function CloudSolutionsCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-xl rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-2xl rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <i className="ri-cloud-line mr-2 text-white"></i>
              <span className="text-sm font-semibold text-white">Ready to Migrate?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-blue-200">
                Infrastructure
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Start your cloud journey today with a free consultation and infrastructure assessment from our cloud experts.
            </p>
            
            {/* Cloud Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-arrow-down-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">50%</div>
                    <div className="text-blue-200 text-sm">Cost Reduction</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-speed-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">3x</div>
                    <div className="text-blue-200 text-sm">Faster Performance</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-shield-check-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-blue-200 text-sm">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center hover:scale-105"
              >
                <i className="ri-cloud-line mr-3 group-hover:animate-bounce"></i>
                Start Cloud Migration
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-file-list-line mr-2"></i>
                Free Assessment
              </Link>
            </div>
          </div>
          
          {/* Right Content - Cloud Migration Packages */}
          <div className="relative">
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=cloud%20infrastructure%20dashboard%20with%20server%20monitoring%20charts%20and%20network%20topology%20visualization%2C%20modern%20cloud%20management%20interface%20with%20blue%20and%20purple%20gradients%2C%20professional%20cloud%20architecture%20diagrams%20and%20performance%20metrics%2C%20scalable%20cloud%20infrastructure%20visualization&width=600&height=400&seq=cloud-cta-packages&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration Packages</h3>
                  <p className="text-gray-600">Choose the right cloud solution for your business</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">Basic Migration</div>
                      <div className="text-sm text-gray-600">Simple lift and shift to cloud</div>
                    </div>
                    {/* <div className="text-2xl font-bold text-blue-600">$5,000</div> */}
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">Advanced Migration</div>
                      <div className="text-sm text-gray-600">Full cloud transformation + optimization</div>
                    </div>
                    {/* <div className="text-2xl font-bold text-indigo-600">$15,000</div> */}
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">Enterprise Package</div>
                      <div className="text-sm text-gray-600">Multi-cloud strategy + managed services</div>
                    </div>
                    {/* <div className="text-2xl font-bold text-blue-600">Custom</div> */}
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex justify-center items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-xl mr-1"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"Our cloud migration reduced costs by 60%!"</p>
                  <p className="text-gray-900 font-semibold mt-2">- Robert Kim, CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}