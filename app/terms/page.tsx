'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <i className="ri-file-text-line mr-2"></i>
            Legal Terms & Conditions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By using our services, you agree to these terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="text-blue-800 font-medium mb-2">Last Updated: January 15, 2024</p>
              <p className="text-blue-700">These Terms of Service govern your use of Notus Technologies' website and services. By accessing or using our services, you agree to be bound by these terms.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">By accessing and using the services provided by Notus Technologies ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Services Description</h2>
            <p className="text-gray-600 mb-6">Notus Technologies provides digital transformation services including:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Web development and design services</li>
              <li>Mobile application development</li>
              <li>UI/UX design and consultation</li>
              <li>Digital marketing and branding services</li>
              <li>Cloud solutions and infrastructure</li>
              <li>AI analytics and data services</li>
              <li>E-commerce development</li>
              <li>API development and integration</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Obligations</h2>
            <p className="text-gray-600 mb-6">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Respect intellectual property rights of all parties</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
            <p className="text-gray-600 mb-6">Payment terms for our services:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Payment schedules are defined in individual service agreements</li>
              <li>All payments are due within 30 days of invoice date unless otherwise specified</li>
              <li>Late payments may incur additional fees as outlined in the service agreement</li>
              <li>Refunds are subject to the specific terms of each service agreement</li>
              <li>All prices are exclusive of applicable taxes unless otherwise stated</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">Intellectual property ownership is defined as follows:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>We retain ownership of our proprietary methodologies and frameworks</li>
              <li>Client retains ownership of their business data and content</li>
              <li>Custom work product ownership is defined in individual service agreements</li>
              <li>Third-party tools and services retain their respective ownership rights</li>
              <li>Both parties respect and protect each other's intellectual property</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Confidentiality</h2>
            <p className="text-gray-600 mb-8">We maintain strict confidentiality regarding all client information, business data, and project details. Both parties agree to protect confidential information disclosed during the course of our business relationship and not to disclose such information to third parties without explicit written consent.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">Our liability is limited as follows:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>We provide services on an "as is" basis without warranties</li>
              <li>We are not liable for indirect, consequential, or punitive damages</li>
              <li>Our total liability shall not exceed the fees paid for the specific service</li>
              <li>We are not responsible for third-party service failures or interruptions</li>
              <li>Clients are responsible for backing up their data and content</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Service Availability</h2>
            <p className="text-gray-600 mb-8">While we strive to maintain high service availability, we do not guarantee uninterrupted access to our services. Scheduled maintenance, upgrades, and unforeseen technical issues may cause temporary service interruptions. We will make reasonable efforts to notify clients of planned maintenance in advance.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
            <p className="text-gray-600 mb-6">Either party may terminate services under the following conditions:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
              <li>Breach of agreement terms by either party</li>
              <li>Non-payment of fees after reasonable notice</li>
              <li>Mutual agreement to terminate services</li>
              <li>Completion of project scope as defined in service agreement</li>
              <li>30-day written notice for ongoing service agreements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
            <p className="text-gray-600 mb-8">These terms shall be governed by and construed in accordance with the laws of the jurisdiction where Notus Technologies is incorporated. Any disputes arising from these terms or our services shall be resolved through binding arbitration or in the courts of that jurisdiction.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-8">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes are posted constitutes acceptance of the modified terms. We recommend reviewing these terms periodically for updates.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Severability</h2>
            <p className="text-gray-600 mb-8">If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms of Service will otherwise remain in full force and effect.</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <i className="ri-mail-line mr-3 text-blue-600"></i>
                  <span>info@notustechnologies.co.in</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line mr-3 text-blue-600"></i>
                  <span>+91 9911433392,  </span>
                  <span>+91 8250983407</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-pin-line mr-3 text-blue-600"></i>
                  <span>Plot no 11, Siyaram enclave, Bhondsi, </span>
                  <span>Sohna road, Gurgaon 122102, Haryana, India</span>
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