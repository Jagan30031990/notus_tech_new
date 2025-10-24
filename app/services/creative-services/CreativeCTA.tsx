
'use client';

import Link from 'next/link';

export default function CreativeCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's collaborate to create visual content that tells your story and captivates your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-brush-line mr-3"></i>
                Start Your Project
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-gallery-line mr-2"></i>
                View Our Work
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=creative%20content%20showcase%20with%20various%20design%20projects%2C%20video%20production%20stills%2C%20photography%20samples%2C%20successful%20creative%20campaigns%2C%20professional%20creative%20portfolio%20presentation&width=600&height=400&seq=creative-success&orientation=landscape"
              alt="Creative Success Portfolio"
              className="w-full h-80 object-cover object-top rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
