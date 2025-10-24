'use client';

export default function TestimonialsHero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20business%20team%20celebrating%20success%20in%20modern%20office%20environment%20with%20happy%20clients%20giving%20testimonials%2C%20clean%20corporate%20atmosphere%20with%20bright%20lighting%20and%20positive%20energy%2C%20business%20achievement%20and%20customer%20satisfaction%20theme%2C%20high-quality%20corporate%20photography%20style&width=1400&height=800&seq=testimonials-hero-bg&orientation=landscape')`
        }}
      />
      <div className="absolute inset-0 bg-blue-900/30" />
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block bg-blue-200/20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Client Success Stories
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          What Our <span className="text-blue-200">Clients</span> Say
        </h1>
        
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover why businesses trust us with their digital transformation. Read real stories from our satisfied clients who have achieved remarkable results with our solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-200 mb-2">500+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-200 mb-2">98%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-200 mb-2">4.9/5</div>
            <div className="text-blue-100">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}