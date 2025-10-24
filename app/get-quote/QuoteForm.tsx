'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="quote-form" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
            <i className="ri-file-edit-line mr-2 text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-700">Project Details</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tell Us About Your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The more details you provide, the more accurate and comprehensive your quote will be
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              {submitStatus === 'success' && (
                <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center">
                  <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                  <span className="text-green-700">Quote request submitted successfully! We'll respond within 24 hours.</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-900 font-semibold mb-3">Project Type *</label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-8 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="ecommerce">E-commerce Solutions</option>
                    <option value="api-development">API Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="ai-analytics">AI & Analytics</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="branding">Branding Services</option>
                    <option value="creative-services">Creative Services</option>
                    <option value="other">Other</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Budget Range *</label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-8 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">Timeline *</label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-8 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush Project)</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-months-plus">6+ Months</option>
                      <option value="flexible">Flexible Timeline</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-900 font-semibold mb-3">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Describe your project in detail. Include goals, features, target audience, and any specific requirements..."
                ></textarea>
                <div className="mt-2 text-sm text-gray-500 text-right">
                  {formData.description.length}/500 characters
                </div>
              </div>

              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" required className="mr-3" />
                  <span className="text-gray-700">I agree to the terms and conditions and privacy policy</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line mr-3 animate-spin"></i>
                    Submitting Quote Request...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-3"></i>
                    Get My Custom Quote
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quote Benefits */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Receive</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Detailed project breakdown</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Transparent pricing structure</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Project timeline & milestones</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Technology recommendations</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-blue-600 mr-3 mt-1"></i>
                  <span className="text-gray-700">Free consultation call</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-headphone-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">Speak with our project specialists</p>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  Schedule Call
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Client Success</h3>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg mr-1"></i>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"The quote was detailed and transparent. Project delivered exactly as promised!"</p>
              <div className="flex items-center">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20business%20woman%20headshot%20portrait%2C%20confident%20CEO%20or%20executive%2C%20modern%20corporate%20photography%2C%20professional%20attire%2C%20clean%20background&width=100&height=100&seq=client-testimonial-2&orientation=squarish"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}