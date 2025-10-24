
'use client';

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-blue-50/30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 text-sm font-medium mb-8">
            <i className="ri-article-line mr-2"></i>
            Latest Insights & Updates
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stay updated with the latest trends in technology, digital marketing, and business insights. 
            Discover expert tips, industry analysis, and success stories from our team.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center text-gray-600">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3">
                <i className="ri-calendar-line text-blue-600"></i>
              </div>
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-full mr-3">
                <i className="ri-team-line text-indigo-600"></i>
              </div>
              <span>Expert Authors</span>
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-full mr-3">
                <i className="ri-lightbulb-line text-cyan-600"></i>
              </div>
              <span>Actionable Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
