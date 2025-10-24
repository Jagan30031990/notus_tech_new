'use client';

export default function QuoteTestimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO, FinanceFlow",
      image: "professional business man headshot portrait, confident CTO or tech executive, modern corporate photography, professional attire, clean background",
      quote: "The quote process was incredibly thorough and transparent. They delivered exactly what was promised, on time and within budget.",
      rating: 5,
      project: "Web Application Development",
      budget: "$25,000"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director, GrowthLab",
      image: "professional business woman headshot portrait, confident marketing director or executive, modern corporate photography, professional attire, clean background",
      quote: "From quote to completion, the communication was excellent. The detailed breakdown helped us understand exactly what we were paying for.",
      rating: 5,
      project: "E-commerce Platform",
      budget: "$18,000"
    },
    {
      name: "David Kim",
      role: "Founder, StartupTech",
      image: "young professional startup founder headshot portrait, confident entrepreneur, modern corporate photography, professional attire, clean background",
      quote: "They provided multiple options within our budget range. The quote accuracy was impressive - final cost matched exactly.",
      rating: 5,
      project: "Mobile App Development",
      budget: "$35,000"
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager, RetailPlus",
      image: "professional business woman headshot portrait, confident operations manager or executive, modern corporate photography, professional attire, clean background",
      quote: "The quote included everything - no hidden fees or surprise costs. Project management was seamless from start to finish.",
      rating: 5,
      project: "API Integration",
      budget: "$12,000"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Quoted",
      icon: "ri-file-text-line"
    },
    {
      number: "95%",
      label: "Quote Accuracy",
      icon: "ri-target-line"
    },
    {
      number: "24hr",
      label: "Response Time",
      icon: "ri-time-line"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: "ri-heart-line"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-6">
            <i className="ri-chat-quote-line mr-2 text-blue-600"></i>
            <span className="text-sm font-semibold text-blue-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from businesses who trusted us with their projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-xl mr-1"></i>
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={`https://readdy.ai/api/search-image?query=$%7Btestimonial.image%7D&width=100&height=100&seq=testimonial-${index}&orientation=squarish`}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{testimonial.project}</div>
                  <div className="font-bold text-blue-600">{testimonial.budget}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Quote Process</h3>
            <p className="text-lg text-gray-600">Simple, transparent, and efficient</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Submit Request</h4>
              <p className="text-gray-600 text-sm">Fill out our detailed project form with your requirements</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Analysis & Review</h4>
              <p className="text-gray-600 text-sm">Our team analyzes your project and prepares a comprehensive quote</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Detailed Proposal</h4>
              <p className="text-gray-600 text-sm">Receive detailed breakdown within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Consultation Call</h4>
              <p className="text-gray-600 text-sm">Free consultation to refine details and answer questions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}