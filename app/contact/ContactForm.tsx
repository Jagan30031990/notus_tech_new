
'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    // Extract only digits from the phone number
    const digitsOnly = phone.replace(/\D/g, '');
    // Check if it's exactly 10 digits
    return digitsOnly.length === 10;
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          return 'First name is required';
        }
        if (value.trim().length < 2) {
          return 'First name must be at least 2 characters';
        }
        if (value.trim().length > 50) {
          return 'First name must not exceed 50 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return 'First name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return undefined;

      case 'lastName':
        if (!value.trim()) {
          return 'Last name is required';
        }
        if (value.trim().length < 2) {
          return 'Last name must be at least 2 characters';
        }
        if (value.trim().length > 50) {
          return 'Last name must not exceed 50 characters';
        }
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          return 'Last name can only contain letters, spaces, hyphens, and apostrophes';
        }
        return undefined;

      case 'email':
        if (!value.trim()) {
          return 'Email address is required';
        }
        if (!validateEmail(value.trim())) {
          return 'Please enter a valid email address';
        }
        // Check for common invalid email patterns
        const emailParts = value.trim().split('@');
        if (emailParts.length !== 2) {
          return 'Please enter a valid email address';
        }
        const domain = emailParts[1].toLowerCase();
        
        // Check for invalid/test domains
        const invalidDomains = ['example.com', 'test.com', 'invalid.com', 'domain.com', 'gggg.com', 'aaaa.com', 'test.test'];
        if (invalidDomains.includes(domain)) {
          return 'Please use a valid email domain';
        }
        
        // Check domain format (must have valid TLD structure)
        const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
        if (!domainRegex.test(domain)) {
          return 'Please enter a valid email domain';
        }
        
        // Check for suspicious patterns (all same characters, too short, etc.)
        const domainWithoutTld = domain.split('.').slice(0, -1).join('.');
        if (domainWithoutTld.length < 2) {
          return 'Please enter a valid email domain';
        }
        
        // Check if domain name looks suspicious (all same character repeated)
        if (domainWithoutTld.length > 1 && /^(.)\1+$/.test(domainWithoutTld)) {
          return 'Please use a valid email domain';
        }
        
        return undefined;

      case 'phone':
        if (value) {
          const digitsOnly = value.replace(/\D/g, '');
          if (digitsOnly.length !== 10) {
            return 'Phone number must be exactly 10 digits';
          }
        }
        return undefined;

      case 'message':
        if (!value.trim()) {
          return 'Message is required';
        }
        if (value.trim().length < 10) {
          return 'Message must be at least 10 characters';
        }
        if (value.length > 500) {
          return 'Message must not exceed 500 characters';
        }
        return undefined;

      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedDigits = digitsOnly.slice(0, 10);
    
    // Format as (XXX) XXX-XXXX
    if (limitedDigits.length === 0) return '';
    if (limitedDigits.length <= 3) return `(${limitedDigits}`;
    if (limitedDigits.length <= 6) return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
    return `(${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Format phone number if it's the phone field
    let processedValue = value;
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value);
    }
    
    setFormData({
      ...formData,
      [name]: processedValue
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }

    // Real-time validation for message length
    if (name === 'message' && value.length > 500) {
      setErrors({
        ...errors,
        message: 'Message must not exceed 500 characters'
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    if (error) {
      setErrors({
        ...errors,
        [name]: error
      });
    } else {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true
    });

    // Validate form before submission
    if (!validateForm()) {
      toast.error('Please fix the errors in the form before submitting.', {
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);
    setShowSuccess(false);
    setErrorMessage(null);

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim()
        })
      });

      const data = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.ok && data.success) {
        // Show success toast with API message
        toast.success(data.message || 'Your message has been sent successfully. We will get back to you soon!', {
          duration: 5000,
        });
        
        setShowSuccess(true);
        setErrorMessage(null);
        setErrors({});
        setTouched({});
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        // Show error toast with API error message
        const errorMsg = data.errors && data.errors.length > 0 
          ? data.errors.join('. ') 
          : (data.message || 'Failed to send message. Please try again.');
        
        toast.error(errorMsg, {
          duration: 5000,
        });
        
        setErrorMessage(errorMsg);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      // Show error toast
      const errorMsg = 'An error occurred while sending your message. Please try again later.';
      toast.error(errorMsg, {
        duration: 5000,
      });
      
      setErrorMessage(errorMsg);
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

        {errorMessage && (
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full mr-4">
                <i className="ri-error-warning-line text-red-600 text-lg"></i>
              </div>
              <div>
                <h3 className="font-semibold text-red-800 mb-1">Error Sending Message</h3>
                <p className="text-red-700">{errorMessage}</p>
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
                  onBlur={handleBlur}
                  required
                  className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white ${
                    errors.firstName && touched.firstName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="Enter your first name"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className={`ri-user-line ${
                    errors.firstName && touched.firstName
                      ? 'text-red-500'
                      : 'text-gray-400 group-focus-within:text-blue-600'
                  }`}></i>
                </div>
              </div>
              {errors.firstName && touched.firstName && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  {errors.firstName}
                </p>
              )}
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
                  onBlur={handleBlur}
                  required
                  className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white ${
                    errors.lastName && touched.lastName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="Enter your last name"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className={`ri-user-line ${
                    errors.lastName && touched.lastName
                      ? 'text-red-500'
                      : 'text-gray-400 group-focus-within:text-blue-600'
                  }`}></i>
                </div>
              </div>
              {errors.lastName && touched.lastName && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  {errors.lastName}
                </p>
              )}
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
                  onBlur={handleBlur}
                  required
                  className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="Enter your email address"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className={`ri-mail-line ${
                    errors.email && touched.email
                      ? 'text-red-500'
                      : 'text-gray-400 group-focus-within:text-blue-600'
                  }`}></i>
                </div>
              </div>
              {errors.email && touched.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  {errors.email}
                </p>
              )}
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
                  onBlur={handleBlur}
                  className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white ${
                    errors.phone && touched.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="(123) 456-7890"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <i className={`ri-phone-line ${
                    errors.phone && touched.phone
                      ? 'text-red-500'
                      : 'text-gray-400 group-focus-within:text-blue-600'
                  }`}></i>
                </div>
              </div>
              {errors.phone && touched.phone && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <i className="ri-error-warning-line"></i>
                  {errors.phone}
                </p>
              )}
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
                onBlur={handleBlur}
                required
                rows={6}
                maxLength={500}
                className={`w-full px-5 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-all duration-300 group-hover:border-blue-300 bg-gray-50 focus:bg-white ${
                  errors.message && touched.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-200'
                }`}
                placeholder="Tell us about your project requirements, questions, or how we can help you..."
              ></textarea>
              <div className={`absolute bottom-4 right-4 text-xs bg-white px-2 py-1 rounded ${
                formData.message.length > 500
                  ? 'text-red-500'
                  : formData.message.length > 450
                  ? 'text-yellow-500'
                  : 'text-gray-500'
              }`}>
                {formData.message.length}/500
              </div>
            </div>
            {errors.message && touched.message && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <i className="ri-error-warning-line"></i>
                {errors.message}
              </p>
            )}
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
