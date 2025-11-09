
'use client';

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 p-12 relative overflow-hidden">
      {/* Background decorative elements matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Geometric shapes matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-12 h-12 bg-blue-500/15 rounded-xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-8 h-8 bg-indigo-600/15 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <i className="ri-message-3-line text-blue-600 text-sm"></i>
            <span className="text-blue-700 text-sm font-semibold tracking-wider uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Contact Our
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Expert Team</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We're here to answer your questions and help you find the perfect technology solution for your business needs.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="group hover:translate-x-2 transition-transform duration-300">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-5 group-hover:scale-110 transition-transform">
                <i className="ri-map-pin-line text-white text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Location</h4>
                <div className="text-gray-600 leading-relaxed">
                  <p className="font-medium">plot no 11, </p>
                  <p>siyaram enclave, bhondsi</p>
                  <p>sohna road, gurgaon 122102, haryana, india</p>
                  <p>Enclave Prashant Colony Road</p>
                  <p>Gurgaon-122102 Haryana</p>
                  <p className="font-medium text-blue-600">India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group hover:translate-x-2 transition-transform duration-300">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mr-5 group-hover:scale-110 transition-transform">
                <i className="ri-phone-line text-white text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us Directly</h4>
                <div className="text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <i className="ri-phone-fill text-indigo-600 text-sm"></i>
                    <span className="font-medium">+91 9911433392</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-phone-fill text-indigo-600 text-sm"></i>
                    <span className="font-medium">+91 8250983407</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group hover:translate-x-2 transition-transform duration-300">
            <div className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mr-5 group-hover:scale-110 transition-transform">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Email Support</h4>
                <div className="flex items-center gap-2">
                  <i className="ri-mail-fill text-blue-600 text-sm"></i>
                  <span className="text-gray-600 font-medium">info@notustechnologies.co.in</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100">
          <div 
            className="relative h-64"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20diverse%20business%20team%20collaborating%20in%20modern%20bright%20office%20space%20with%20technology%20and%20innovation%20focus%2C%20contemporary%20workspace%20with%20natural%20lighting%20and%20professional%20atmosphere%2C%20blue%20color%20theme%20matching%20homepage%20design&width=500&height=300&seq=contact-team-blue-theme&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-bold mb-2">Meet Our Team</h4>
              <p className="text-blue-100">Expert professionals ready to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
