
'use client';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 rounded-full border border-emerald-200 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-600">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Driving digital transformation through innovative technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100/50">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-target-line text-2xl text-emerald-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in creating digital experiences that not only meet but exceed our clients' expectations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-check-line text-emerald-500 mr-3 mt-1"></i>
                <span className="text-slate-700">Deliver exceptional digital solutions</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-emerald-500 mr-3 mt-1"></i>
                <span className="text-slate-700">Build long-term partnerships</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-emerald-500 mr-3 mt-1"></i>
                <span className="text-slate-700">Foster innovation and creativity</span>
              </li>
            </ul>
          </div>
          
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100/50">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-violet-100 to-violet-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <i className="ri-eye-line text-2xl text-violet-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              To become the leading technology partner for businesses worldwide, recognized for our innovation, reliability, and commitment to excellence in every project we undertake.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-check-line text-violet-500 mr-3 mt-1"></i>
                <span className="text-slate-700">Global technology leadership</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-violet-500 mr-3 mt-1"></i>
                <span className="text-slate-700">Sustainable digital transformation</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-violet-500 mr-3 mt-1"></i>
                <span className="text-slate-700">Empowering future technologies</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-violet-200/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}