
'use client';

export default function ContactMap() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements matching homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Geometric shapes matching homepage */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 right-32 w-16 h-16 bg-blue-500/15 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-indigo-600/15 rounded-xl rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <i className="ri-map-pin-line text-blue-600 text-sm"></i>
            <span className="text-blue-700 text-sm font-semibold tracking-wider uppercase">
              FIND US HERE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Visit Our
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Office Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Gurgaon, we're easily accessible and always ready to welcome you for a face-to-face discussion about your project needs.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.3970906763182!2d77.06797565212301!3d28.346469992865437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23900af74ea3%3A0xfabafb79489a7d4!2sSiyaram%20Enclave!5e0!3m2!1sen!2sin!4v1762700672736!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            
            {/* Overlay with contact info */}
            <div className="absolute top-2 right-2 bg-white rounded-2xl p-6 shadow-xl border border-blue-100 max-w-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Notus Technologies</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Plot no 11, Siyaram enclave, Bhondsi<br />
                    Sohna road, Gurgaon 122102, Haryana, India<br />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <i className="ri-phone-line text-blue-600 text-sm"></i>
                <span className="text-sm font-medium text-blue-600">+91 9911433392</span>
                <span className="text-sm font-medium text-blue-600">+91 8250983407</span>
              </div>
            </div>
            

            {/* Business hours overlay */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between gap-4">
                      <span>Mon - Fri:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
              <i className="ri-phone-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">Ready to discuss your project?</p>
            <p className="text-blue-600 font-medium mt-1">+91 991 1433 392</p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
              <i className="ri-mail-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">Send us your requirements</p>
            <p className="text-indigo-600 font-medium mt-1">support@notustechnologies.co.in</p>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
              <i className="ri-map-pin-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">Come see us in person</p>
            <p className="text-blue-600 font-medium mt-1">Gurgaon, Haryana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
