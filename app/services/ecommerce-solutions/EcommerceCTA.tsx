
'use client';

import Link from 'next/link';

export default function EcommerceCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Store?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Start selling online with a professional e-commerce solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-shopping-cart-line mr-3"></i>
                Build Your Store
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-eye-line mr-2"></i>
                View Store Examples
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=successful%20online%20store%20dashboard%20showing%20sales%20analytics%2C%20order%20management%2C%20customer%20data%2C%20revenue%20charts%2C%20e-commerce%20success%20metrics%20with%20modern%20interface%20design&width=600&height=400&seq=ecommerce-success&orientation=landscape"
              alt="E-commerce Success Dashboard"
              className="w-full h-80 object-cover object-top rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
