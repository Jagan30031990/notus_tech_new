'use client';

export default function ManagedServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/10 to-orange-500/10 rounded-full border border-violet-200 mb-6">
              <div className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-violet-600">HOW TO MANAGE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Our Managed IT Services Let You Concentrate On What Matters
            </h2>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-200 rounded-full p-1 mb-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium whitespace-nowrap cursor-pointer">
                Our Approach
              </button>
              <button className="px-6 py-3 text-slate-600 hover:bg-white rounded-full font-medium whitespace-nowrap cursor-pointer transition-colors">
                Project Goals
              </button>
              <button className="px-6 py-3 text-slate-600 hover:bg-white rounded-full font-medium whitespace-nowrap cursor-pointer transition-colors">
                Advisory
              </button>
            </div>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Using an <span className="text-blue-600 font-semibold">agile approach</span>, we ensure flexibility and <span className="text-blue-600 font-semibold">adaptability</span> throughout the development process. Regular updates and collaborative decision loops keep you involved at every step, ensuring transparency and alignment.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Efficient Sprint Planning</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Iterative Delivery Approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Standups and Demos</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-3">
                  <i className="ri-check-line text-emerald-600 text-sm"></i>
                </div>
                <span className="text-slate-700">Problem-solving</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center">
              Learn More
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>

          {/* Right side - Image with stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20professional%20team%20collaborating%20in%20modern%20office%20environment%2C%20business%20people%20working%20together%20on%20technology%20project%20with%20laptops%20and%20documents%2C%20corporate%20meeting%20and%20teamwork%20scene%20with%20natural%20lighting&width=600&height=400&seq=managed-services&orientation=landscape"
                alt="Managed IT Services Team"
                className="w-full h-96 object-cover object-top"
              />
              
              {/* Stats overlays */}
              <div className="absolute top-8 right-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm opacity-90">Project Success</div>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mt-4 mx-auto">
                  <i className="ri-trophy-line text-2xl"></i>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white text-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">63%</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mt-4 mx-auto">
                  <i className="ri-customer-service-line text-2xl text-blue-600"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}