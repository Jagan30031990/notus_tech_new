'use client';

import Link from 'next/link';

export default function DigitalMarketingCTA() {
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
              <i className="ri-rocket-line mr-2 text-white"></i>
              <span className="text-sm font-semibold text-white">Ready to Grow?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Accelerate Your
              <span className="block text-blue-200">
                Business Growth
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's create a data-driven marketing strategy that drives real results for your business. Get started with a free marketing audit and consultation.
            </p>
            
            {/* Marketing Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-arrow-up-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">300%</div>
                    <div className="text-blue-200 text-sm">Average ROI</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-user-add-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">250%</div>
                    <div className="text-blue-200 text-sm">Lead Increase</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-line-chart-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">180%</div>
                    <div className="text-blue-200 text-sm">Traffic Growth</div>
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
                <i className="ri-bar-chart-line mr-3 group-hover:animate-bounce"></i>
                Start Marketing Campaign
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-eye-line mr-2"></i>
                View Case Studies
              </Link>
            </div>
          </div>
          
          {/* Right Content - Marketing Packages */}
          <div className="relative">
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=digital%20marketing%20analytics%20dashboard%20with%20charts%20graphs%20and%20performance%20metrics%2C%20modern%20marketing%20strategy%20presentation%20with%20blue%20and%20purple%20gradients%2C%20professional%20marketing%20team%20analyzing%20campaign%20data%20and%20ROI%20reports%2C%20business%20growth%20visualization%20with%20statistics&width=600&height=400&seq=marketing-cta-packages&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Packages</h3>
                  <p className="text-gray-600">Choose the perfect marketing solution for your business</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">Starter Package</div>
                      <div className="text-sm text-gray-600">SEO + Social Media + Email Marketing</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">$2,500/mo</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">Growth Package</div>
                      <div className="text-sm text-gray-600">Full marketing stack + PPC + Content</div>
                    </div>
                    <div className="text-2xl font-bold text-indigo-600">$5,000/mo</div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">Enterprise Package</div>
                      <div className="text-sm text-gray-600">Custom marketing solution + dedicated team</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">Custom</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex justify-center items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400 text-xl mr-1"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"Our ROI increased by 400% in just 6 months!"</p>
                  <p className="text-gray-900 font-semibold mt-2">- David Thompson, E-commerce CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}