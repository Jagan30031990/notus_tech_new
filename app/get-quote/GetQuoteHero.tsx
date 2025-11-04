'use client';

export default function GetQuoteHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden py-10">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-20 h-20 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-32 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-blue-400/15 rounded-xl rotate-45 animate-pulse delay-1500"></div>
      </div>

      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20business%20consultation%20meeting%20with%20team%20members%20reviewing%20project%20proposals%20and%20digital%20solutions%2C%20modern%20office%20environment%20with%20laptops%20showing%20web%20development%20and%20design%20work%2C%20blue%20and%20indigo%20color%20scheme%2C%20collaborative%20workspace%20atmosphere%2C%20project%20planning%20and%20strategy%20discussion&width=1920&height=1080&seq=quote-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="text-left">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-8">
              <i className="ri-file-text-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">Free Project Quote</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Get Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Custom Quote
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Tell us about your project and receive a detailed proposal with transparent pricing, timeline, and deliverables within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24-Hour Response</h3>
                  <p className="text-gray-600 text-sm">Quick turnaround on quotes</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">No hidden fees or surprises</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-user-star-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Consultation</h3>
                  <p className="text-gray-600 text-sm">Free strategy session included</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-shield-check-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">No Commitment</h3>
                  <p className="text-gray-600 text-sm">Quote with zero obligation</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-file-text-line mr-3"></i>
                Get Quote Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-phone-line mr-2"></i>
                Call for Consultation
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20project%20proposal%20document%20with%20charts%20graphs%20and%20timeline%2C%20business%20planning%20materials%20on%20modern%20desk%2C%20digital%20project%20management%20interface%20showing%20milestones%20and%20deliverables%2C%20clean%20organized%20workspace%20with%20blue%20accent%20colors&width=600&height=500&seq=quote-proposal-interface&orientation=portrait"
                alt="Project Quote Interface"
                className="w-full h-80 object-cover object-top rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <i className="ri-calculator-line text-3xl"></i>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-90">Projects Quoted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}