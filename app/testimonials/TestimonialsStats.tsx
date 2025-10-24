'use client';

export default function TestimonialsStats() {
  const stats = [
    {
      icon: 'ri-customer-service-2-line',
      number: '500+',
      label: 'Satisfied Clients',
      description: 'Businesses trust us with their digital transformation'
    },
    {
      icon: 'ri-trophy-line',
      number: '98%',
      label: 'Success Rate',
      description: 'Projects delivered on time and within budget'
    },
    {
      icon: 'ri-star-line',
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Average rating across all completed projects'
    },
    {
      icon: 'ri-refresh-line',
      number: '85%',
      label: 'Return Clients',
      description: 'Clients who choose us for multiple projects'
    }
  ];

  return (
    <div className="py-20 px-4 bg-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our track record demonstrates our commitment to delivering exceptional results and building lasting partnerships with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
                <i className={`${stat.icon} text-2xl text-white`} />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-3">
                {stat.label}
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}