'use client';

export default function BlogNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-mail-line text-2xl text-white"></i>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Newsletter
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and industry updates delivered directly to your inbox. 
              Join over 10,000+ professionals who trust our content.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="ri-shield-check-line text-green-500 mr-2"></i>
                No spam, ever
              </div>
              <div className="flex items-center">
                <i className="ri-logout-box-line text-blue-500 mr-2"></i>
                Unsubscribe anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}