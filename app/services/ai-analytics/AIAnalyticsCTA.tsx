'use client';

import Link from 'next/link';

export default function AIAnalyticsCTA() {
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
              <i className="ri-brain-line mr-2 text-white"></i>
              <span className="text-sm font-semibold text-white">Ready for AI?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform With
              <span className="block text-blue-200">
                Artificial Intelligence
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Start your AI journey today with a free consultation and data assessment from our AI specialists.
            </p>
            
            {/* AI Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-arrow-up-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-blue-200 text-sm">Efficiency Increase</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-file-check-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-blue-200 text-sm">Prediction Accuracy</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <i className="ri-money-dollar-circle-line text-white text-2xl mr-3"></i>
                  <div>
                    <div className="text-2xl font-bold text-white">60%</div>
                    <div className="text-blue-200 text-sm">Cost Reduction</div>
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
                <i className="ri-brain-line mr-3 group-hover:animate-bounce"></i>
                Start AI Project
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-file-search-line mr-2"></i>
                Free Data Audit
              </Link>
            </div>
          </div>
          
          {/* Right Content - AI Solutions Packages */}
          <div className="relative">
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=artificial%20intelligence%20analytics%20dashboard%20with%20neural%20networks%20machine%20learning%20models%20and%20data%20visualization%20charts%2C%20modern%20AI%20interface%20with%20blue%20and%20purple%20gradients%2C%20professional%20data%20science%20workspace%20with%20predictive%20analytics%20and%20algorithms%20visualization&width=600&height=400&seq=ai-cta-packages&orientation=landscape')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solution Packages</h3>
                  <p className="text-gray-600">Choose the right AI solution for your business needs</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">AI Starter</div>
                      <div className="text-sm text-gray-600">Basic analytics + simple ML model</div>
                    </div>
                    {/* <div className="text-2xl font-bold text-blue-600">$5,000</div> */}
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">AI Advanced</div>
                      <div className="text-sm text-gray-600">Custom ML models + deployment</div>
                    </div>
                    {/* <div className="text-2xl font-bold text-indigo-600">$15,000</div> */}
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">AI Enterprise</div>
                      <div className="text-sm text-gray-600">Full AI transformation + ongoing support</div>
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
                  <p className="text-gray-600 italic">"AI helped us automate 70% of our processes!"</p>
                  <p className="text-gray-900 font-semibold mt-2">- Lisa Wang, Operations Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}