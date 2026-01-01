'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <i className="ri-shield-check-line mr-2"></i>
            Privacy & Data Protection
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="text-blue-800 font-medium mb-2">Last Updated: January 15, 2024</p>
              <p className="text-blue-700">This Privacy Policy describes how Notus Technologies collects, uses, and shares your personal information when you visit our website or use our services.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <p className="text-gray-600 mb-6">When you contact us or use our services, we may collect:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company information and job title</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Information</h3>
            <p className="text-gray-600 mb-6">We automatically collect certain technical information when you visit our website:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website and search terms used</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Provide and improve our digital services</li>
              <li>Communicate with you about projects and inquiries</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations and resolve disputes</li>
              <li>Protect against fraud and security threats</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
            <p className="text-gray-600 mb-6">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>With trusted service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-600 mb-8">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-6">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Access and review the information we have about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability where applicable</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies Policy</h2>
            <p className="text-gray-600 mb-6">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-gray-600 mb-8">You can control cookies through your browser settings, but some website features may not function properly if cookies are disabled.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            <p className="text-gray-600 mb-8">Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
            <p className="text-gray-600 mb-8">Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-600 mb-8">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <i className="ri-mail-line mr-3 text-blue-600"></i>
                  <span>support@notustechnologies.co.in</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line mr-3 text-blue-600"></i>
                  <span>+91 9911433392,  </span>
                  <span>+91 8250983407</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-pin-line mr-3 text-blue-600"></i>
                  <span>Plot no 11, Siyaram enclave, Bhondsi, </span>
                  <span> Sohna road, Gurgaon 122102, Haryana, India</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}