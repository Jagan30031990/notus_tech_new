
'use client';

import Link from 'next/link';

export default function BrandingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's create a powerful brand identity that connects with your audience and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-palette-line mr-3"></i>
                Start Your Brand
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-image-line mr-2"></i>
                View Brand Work
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=successful%20brand%20identity%20showcase%20with%20multiple%20brand%20applications%2C%20business%20cards%2C%20letterheads%2C%20digital%20assets%2C%20logo%20variations%2C%20professional%20branding%20presentation%20with%20modern%20design%20elements&width=600&height=400&seq=branding-success&orientation=landscape"
              alt="Brand Identity Success"
              className="w-full h-80 object-cover object-top rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
