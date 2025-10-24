'use client';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Why Choose TechCraft Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-100/50 hover:shadow-blue-200/50 hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-award-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Proven Excellence</h3>
            <p className="text-gray-600 leading-relaxed">Over 500 successful projects delivered with 98% client satisfaction rate</p>
          </div>

          <div className="group bg-indigo-50 border border-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-100/50 hover:shadow-indigo-200/50 hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-team-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Team</h3>
            <p className="text-gray-600 leading-relaxed">Certified professionals with extensive experience in cutting-edge technologies</p>
          </div>

          <div className="group bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-100/50 hover:shadow-blue-200/50 hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-time-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">On-Time Delivery</h3>
            <p className="text-gray-600 leading-relaxed">We respect deadlines and deliver projects on schedule without compromising quality</p>
          </div>

          <div className="group bg-indigo-50 border border-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-100/50 hover:shadow-indigo-200/50 hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-customer-service-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600 leading-relaxed">Round-the-clock technical support and maintenance for all our solutions</p>
          </div>

          <div className="group bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-100/50 hover:shadow-blue-200/50 hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-shield-check-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Security First</h3>
            <p className="text-gray-600 leading-relaxed">Enterprise-grade security measures and best practices in every project</p>
          </div>

          <div className="group bg-indigo-50 border border-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-100/50 hover:shadow-indigo-200/50 hover:scale-105">
            <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-price-tag-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Competitive Pricing</h3>
            <p className="text-gray-600 leading-relaxed">Transparent pricing with no hidden costs and flexible payment options</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl shadow-blue-500/25">
              Start Your Project Today
            </button>
          </div>
        </div>

        {/* Decorative elements matching home page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-200/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}