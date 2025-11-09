'use client';

export default function ManagedServices() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-violet-500/10 to-orange-500/10 rounded-full border border-violet-200 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-violet-600">HOW TO MANAGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Our Managed IT Services Let You Concentrate On What Matters
            </h2>

            

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              Using an <span className="text-blue-600 font-semibold">agile approach</span>, we ensure flexibility and <span className="text-blue-600 font-semibold">adaptability</span> throughout the development process. Regular updates and collaborative decision loops keep you involved at every step, ensuring transparency and alignment.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <i className="ri-check-line text-emerald-600 text-xs md:text-sm"></i>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-slate-700">Efficient Sprint Planning</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <i className="ri-check-line text-emerald-600 text-xs md:text-sm"></i>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-slate-700">Iterative Delivery Approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <i className="ri-check-line text-emerald-600 text-xs md:text-sm"></i>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-slate-700">Standups and Demos</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-emerald-100 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <i className="ri-check-line text-emerald-600 text-xs md:text-sm"></i>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-slate-700">Problem-solving</span>
              </div>
            </div>

            {/* CTA Button */}
            {/* <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center text-sm md:text-base">
              Learn More
              <i className="ri-arrow-right-line ml-2"></i>
            </button> */}
          </div>

          {/* Right side - Image with stats */}
          <div className="relative">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://readdy.ai/api/search-image?query=diverse%20professional%20team%20collaborating%20in%20modern%20office%20environment%2C%20business%20people%20working%20together%20on%20technology%20project%20with%20laptops%20and%20documents%2C%20corporate%20meeting%20and%20teamwork%20scene%20with%20natural%20lighting&width=600&height=400&seq=managed-services&orientation=landscape"
                alt="Managed IT Services Team"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-top"
              />
              
              {/* Stats overlays */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-blue-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">98%</div>
                  <div className="text-xs md:text-sm opacity-90">Project Success</div>
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-white/20 rounded-full mt-2 md:mt-4 mx-auto">
                  <i className="ri-trophy-line text-xl md:text-2xl"></i>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white text-slate-800 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">63%</div>
                  <div className="text-xs md:text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-blue-100 rounded-full mt-2 md:mt-4 mx-auto">
                  <i className="ri-customer-service-line text-xl md:text-2xl text-blue-600"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}