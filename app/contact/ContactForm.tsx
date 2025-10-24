
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-12 relative overflow-hidden">
      {/* Background decorative elements matching homepage colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Geometric shapes matching homepage */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-12 h-12 bg-blue-500/15 rounded-xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-indigo-600/15 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <i className="ri-edit-line text-blue-600 text-sm"></i>
            <span className="text-blue-700 text-sm font-semibold tracking-wider uppercase">
              SEND MESSAGE
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Fill Up The 
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent block">Contact Form</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Your email address will not be published. Required fields are marked 
            <span className="text-red-500 font-semibold"> *</span>
          </p>
        </div>

        {showSuccess && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-4">
                <i className="ri-check-line text-green-600 text-lg"></i>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-1">Message Sent Successfully!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        <form id="contact-form" onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your first name"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className="ri-user-line text-gray-400 group-focus-within:text-blue-600"></i>
                </div>
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your last name"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className="ri-user-line text-gray-400 group-focus-within:text-blue-600"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your email address"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400 group-focus-within:text-blue-600"></i>
                </div>
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white"
                  placeholder="Enter your phone number"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className="ri-phone-line text-gray-400 group-focus-within:text-blue-600"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
              Write Your Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white"
                placeholder="Tell us about your project requirements, questions, or how we can help you..."
              ></textarea>
              <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                {formData.message.length}/500
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line group-hover:translate-x-1 transition-transform"></i>
                    Send Us Message
                  </>
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
