'use client';

export default function TrustedSolutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images and Award */}
          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20business%20team%20meeting%20in%20modern%20office%20with%20two%20men%20discussing%20technology%20solutions%2C%20corporate%20environment%20with%20laptops%20and%20documents%20on%20table%2C%20business%20consultation%20and%20collaboration%20scene&width=500&height=300&seq=trusted-main&orientation=landscape"
                  alt="Professional Team Meeting"
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              
              {/* Overlapping image */}
              <div className="absolute -bottom-16 -right-8 w-64 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://readdy.ai/api/search-image?query=diverse%20business%20team%20working%20together%20on%20technology%20project%2C%20professional%20woman%20and%20colleagues%20collaborating%20in%20modern%20office%20environment%2C%20teamwork%20and%20innovation%20in%20IT%20industry&width=300&height=200&seq=trusted-team&orientation=landscape"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Award badge */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl">
                <div className="text-xs font-bold">Best</div>
                <div className="text-xs">AWARD</div>
                <div className="flex text-yellow-400 text-xs">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full border border-blue-200 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600">500+ TRUSTED OUR CLIENTS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              We Prominent Truly Trusted IT Business Solutions
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              <span className="text-blue-600 font-semibold">Highlights</span> the company's focus on trustworthiness and dependability. Suggests that the company is experienced and capable of delivering <span className="text-blue-600 font-semibold">high-quality IT solutions</span> tailored to business needs.
            </p>

            {/* Stats */}
            <div className="flex space-x-12 mb-8">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="transparent"/>
                    <circle cx="40" cy="40" r="36" stroke="#3b82f6" strokeWidth="8" fill="transparent" 
                      strokeDasharray="226" strokeDashoffset="22" className="transition-all duration-1000"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">90%</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium">Business<br/>Strategy</p>
              </div>
              
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="transparent"/>
                    <circle cx="40" cy="40" r="36" stroke="#10b981" strokeWidth="8" fill="transparent" 
                      strokeDasharray="226" strokeDashoffset="4" className="transition-all duration-1000"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">97%</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium">Technology<br/>Solutions</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Professional Team Member</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Awards Winning IT Solutions Company</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Dedicated Tech Services</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center">
              Explore More About
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}