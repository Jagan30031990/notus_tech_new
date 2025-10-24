
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="https://static.readdy.ai/image/0efc993ee4b8bc6e4e33939b16f3a514/745e34723c911cbc3edef14b18a1c26d.png" 
                alt="Notus Technologies" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions, marketing expertise, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 rounded-full cursor-pointer transition-all duration-300">
                <i className="ri-facebook-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 rounded-full cursor-pointer transition-all duration-300">
                <i className="ri-twitter-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 rounded-full cursor-pointer transition-all duration-300">
                <i className="ri-linkedin-fill text-lg"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 rounded-full cursor-pointer transition-all duration-300">
                <i className="ri-instagram-line text-lg"></i>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ai-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  AI & Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/branding-services" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Branding Services
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-solutions" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/creative-services" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  Creative Services
                </Link>
              </li>
              <li>
                <Link href="/services/api-development" className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer flex items-center">
                  <i className="ri-arrow-right-s-line mr-2"></i>
                  API Development
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white cursor-pointer">Testimonials</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white cursor-pointer">Blog</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white cursor-pointer">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-full mr-4">
                  <i className="ri-mail-line"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div>hello@notustechnologies.com</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-full mr-4">
                  <i className="ri-phone-line"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600/20 rounded-full mr-4">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Office</div>
                  <div>123 Tech Street, Digital City</div>
                </div>
              </div>
              <div className="flex items-center text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              2024 Notus Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
