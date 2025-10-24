
'use client';

import Link from 'next/link';

export default function APIDevCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's build powerful APIs and integrations that streamline your business processes and unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-chat-3-line mr-3"></i>
                Discuss Your Project
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-eye-line mr-2"></i>
                View API Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=API%20integration%20success%20dashboard%20showing%20connected%20systems%2C%20data%20flow%20visualization%2C%20successful%20API%20endpoints%20status%2C%20modern%20technical%20interface%20with%20green%20success%20indicators%2C%20professional%20development%20environment&width=600&height=400&seq=api-success-dashboard&orientation=landscape"
              alt="API Integration Success"
              className="w-full h-80 object-cover object-top rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
