'use client';

export default function TestimonialsGrid() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Solutions",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20headshot%2C%20confident%20smile%2C%20corporate%20attire%2C%20clean%20professional%20background%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-sarah&orientation=squarish",
      rating: 5,
      text: "Working with this team transformed our entire digital presence. The web development project exceeded our expectations, and our online sales increased by 250% within just 3 months. Their attention to detail and commitment to quality is unmatched.",
      project: "E-commerce Platform Development",
      results: "250% increase in online sales"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "InnovateTech Corp",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20man%20CTO%20headshot%2C%20confident%20expression%2C%20modern%20corporate%20setting%2C%20clean%20professional%20background%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-michael&orientation=squarish",
      rating: 5,
      text: "The mobile app development was flawless from start to finish. They understood our complex requirements and delivered a solution that our users absolutely love. The app has been downloaded over 100K times in just 6 months.",
      project: "Mobile App Development",
      results: "100K+ app downloads"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthMax Agency",
      image: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20business%20woman%20marketing%20director%20headshot%2C%20warm%20smile%2C%20modern%20office%20background%2C%20professional%20attire%2C%20high-quality%20corporate%20portrait%20photography&width=100&height=100&seq=testimonial-emily&orientation=squarish",
      rating: 5,
      text: "Their digital marketing expertise helped us achieve remarkable results. Our lead generation improved by 400%, and our brand visibility skyrocketed. They truly understand how to drive business growth through digital channels.",
      project: "Digital Marketing Campaign",
      results: "400% increase in leads"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder",
      company: "CloudVenture Inc",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20founder%20headshot%2C%20confident%20demeanor%2C%20startup%20office%20environment%2C%20casual%20professional%20attire%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-david&orientation=squarish",
      rating: 5,
      text: "The cloud migration project was handled with exceptional professionalism. They reduced our infrastructure costs by 60% while improving performance significantly. Our team productivity has never been better.",
      project: "Cloud Infrastructure Migration",
      results: "60% cost reduction"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Product Manager",
      company: "DesignFlow Studio",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20business%20woman%20product%20manager%20headshot%2C%20friendly%20smile%2C%20modern%20creative%20office%20space%2C%20professional%20styling%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-lisa&orientation=squarish",
      rating: 5,
      text: "The UI/UX design work was absolutely stunning. Our user engagement increased by 180%, and customer feedback has been overwhelmingly positive. They have a true understanding of user experience principles.",
      project: "UI/UX Design Overhaul",
      results: "180% increase in engagement"
    },
    {
      id: 6,
      name: "Robert Martinez",
      position: "Operations Director",
      company: "LogiTech Systems",
      image: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20business%20man%20operations%20director%20headshot%2C%20authoritative%20presence%2C%20corporate%20office%20setting%2C%20business%20suit%2C%20high-quality%20professional%20portrait%20photography&width=100&height=100&seq=testimonial-robert&orientation=squarish",
      rating: 5,
      text: "Their AI analytics implementation revolutionized our decision-making process. We now have real-time insights that drive our business strategy. The ROI has been incredible - over 300% in the first year alone.",
      project: "AI Analytics Platform",
      results: "300% ROI in first year"
    },
    {
      id: 7,
      name: "Jennifer Adams",
      position: "Brand Manager",
      company: "StyleCraft Brands",
      image: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20brand%20manager%20headshot%2C%20creative%20expression%2C%20modern%20marketing%20office%2C%20stylish%20professional%20attire%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-jennifer&orientation=squarish",
      rating: 5,
      text: "The branding project completely transformed our company image. Our brand recognition increased by 220%, and we've seen a significant uptick in premium client acquisitions. Exceptional creative work and strategic thinking.",
      project: "Complete Brand Redesign",
      results: "220% brand recognition increase"
    },
    {
      id: 8,
      name: "Alex Kumar",
      position: "Technical Lead",
      company: "DataFlow Solutions",
      image: "https://readdy.ai/api/search-image?query=Professional%20Indian%20business%20man%20technical%20lead%20headshot%2C%20intelligent%20expression%2C%20tech%20company%20office%20environment%2C%20modern%20professional%20attire%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-alex&orientation=squarish",
      rating: 5,
      text: "The API development project was executed flawlessly. They created a robust, scalable solution that handles millions of requests daily. Our system performance improved by 400%, and integration was seamless.",
      project: "Enterprise API Development",
      results: "400% performance improvement"
    },
    {
      id: 9,
      name: "Maria Santos",
      position: "Digital Strategy Manager",
      company: "NextGen Marketing",
      image: "https://readdy.ai/api/search-image?query=Professional%20Latina%20business%20woman%20digital%20strategy%20manager%20headshot%2C%20confident%20smile%2C%20modern%20digital%20agency%20office%2C%20contemporary%20professional%20styling%2C%20high-quality%20business%20portrait%20photography&width=100&height=100&seq=testimonial-maria&orientation=squarish",
      rating: 5,
      text: "Their creative services team delivered beyond our wildest expectations. The campaign materials they created helped us win 3 major industry awards and increased our client base by 150%. Pure creative genius.",
      project: "Creative Campaign Development",
      results: "3 industry awards won"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`ri-star-${index < rating ? 'fill' : 'line'} text-yellow-400`}
      />
    ));
  };

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how our solutions have helped companies across industries achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4 text-lg">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-600">Project:</span>
                  <p className="text-blue-600 font-semibold">{testimonial.project}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Results:</span>
                  <p className="text-green-600 font-semibold">{testimonial.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}