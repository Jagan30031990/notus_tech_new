
'use client';

export default function EcommerceHero() {
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
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-indigo-500/20 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20e-commerce%20shopping%20interface%20with%20product%20displays%2C%20shopping%20cart%2C%20payment%20system%2C%20online%20store%20dashboard%2C%20mobile%20shopping%20app%2C%20digital%20commerce%20platform%20with%20blue%20and%20indigo%20design%20elements&width=1920&height=1080&seq=ecommerce-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div className="text-left">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-8">
              <i className="ri-shopping-cart-line mr-2 text-blue-600"></i>
              <span className="text-sm font-semibold text-blue-700">E-commerce Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Build Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Online Store
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Create powerful e-commerce experiences that drive sales and delight customers. From custom online stores to marketplace integrations, we build solutions that grow with your business.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                <i className="ri-store-line mr-2"></i>
                Custom Stores
              </div>
              <div className="px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium">
                <i className="ri-bank-card-line mr-2"></i>
                Payment Integration
              </div>
              <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                <i className="ri-smartphone-line mr-2"></i>
                Mobile Optimized
              </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-shopping-bag-line mr-3"></i>
                Launch Your Store
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-eye-line mr-2"></i>
                View Demo Stores
              </button>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20e-commerce%20store%20interface%20showing%20product%20catalog%2C%20shopping%20cart%2C%20checkout%20process%2C%20payment%20options%2C%20mobile-responsive%20design%2C%20professional%20online%20shopping%20experience%20with%20clean%20layout&width=600&height=500&seq=ecommerce-interface&orientation=portrait"
                alt="E-commerce Store Interface"
                className="w-full h-80 object-cover object-top rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <i className="ri-shopping-cart-line text-3xl"></i>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-2xl font-bold">160+</div>
              <div className="text-sm opacity-90">Stores Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
