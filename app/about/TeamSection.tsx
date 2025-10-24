
'use client';

import { useState, useEffect } from 'react';

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('team-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years in technology leadership and business strategy",
      image: "https://readdy.ai/api/search-image?query=professional%20business%20woman%20CEO%20with%20confident%20smile%2C%20corporate%20headshot%20with%20modern%20office%20background%2C%20executive%20leader%20in%20technology%20industry%20wearing%20business%20attire&width=300&height=300&seq=team-ceo&orientation=squarish",
      color: "blue"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Expert in full-stack development and cloud architecture",
      image: "https://readdy.ai/api/search-image?query=professional%20technology%20executive%20male%20CTO%20with%20glasses%20and%20friendly%20smile%2C%20corporate%20headshot%20with%20modern%20tech%20office%20background%2C%20senior%20developer%20and%20technical%20leader&width=300&height=300&seq=team-cto&orientation=squarish",
      color: "indigo"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Award-winning UI/UX designer with 10+ years experience",
      image: "https://readdy.ai/api/search-image?query=professional%20female%20UI%20UX%20designer%20with%20creative%20background%2C%20corporate%20headshot%20with%20modern%20design%20studio%20environment%2C%20head%20of%20design%20with%20artistic%20and%20professional%20appearance&width=300&height=300&seq=team-designer&orientation=squarish",
      color: "blue"
    },
    {
      name: "David Park",
      role: "Lead Developer",
      description: "Full-stack developer specializing in React and Node.js",
      image: "https://readdy.ai/api/search-image?query=professional%20male%20software%20developer%20with%20casual%20business%20attire%2C%20corporate%20headshot%20with%20modern%20coding%20environment%20background%2C%20lead%20programmer%20with%20friendly%20professional%20appearance&width=300&height=300&seq=team-lead-dev&orientation=squarish",
      color: "indigo"
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      description: "Agile project management expert with proven track record",
      image: "https://readdy.ai/api/search-image?query=professional%20female%20project%20manager%20with%20confident%20smile%2C%20corporate%20headshot%20with%20modern%20office%20background%2C%20business%20professional%20in%20technology%20industry%20with%20organized%20appearance&width=300&height=300&seq=team-pm&orientation=squarish",
      color: "blue"
    },
    {
      name: "Alex Thompson",
      role: "Marketing Director",
      description: "Digital marketing strategist with focus on tech companies",
      image: "https://readdy.ai/api/search-image?query=professional%20male%20marketing%20director%20with%20modern%20business%20attire%2C%20corporate%20headshot%20with%20creative%20marketing%20office%20background%2C%20digital%20marketing%20expert%20with%20professional%20appearance&width=300&height=300&seq=team-marketing&orientation=squarish",
      color: "indigo"
    }
  ];

  return (
    <section id="team-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header - matching home page colors */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Our People</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of experts passionate about creating exceptional digital experiences
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`group ${member.color === 'blue' ? 'bg-blue-50 hover:bg-blue-100/50 hover:border-blue-200' : 'bg-indigo-50 hover:bg-indigo-100/50 hover:border-indigo-200'} border border-gray-100 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:scale-110 transition-transform">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className={`font-semibold mb-4 ${member.color === 'blue' ? 'text-blue-600' : 'text-indigo-600'}`}>
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.description}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <div className={`w-10 h-10 flex items-center justify-center ${member.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'} hover:scale-110 rounded-full cursor-pointer transition-all`}>
                  <i className="ri-linkedin-fill"></i>
                </div>
                <div className={`w-10 h-10 flex items-center justify-center ${member.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'} hover:scale-110 rounded-full cursor-pointer transition-all`}>
                  <i className="ri-twitter-fill"></i>
                </div>
                <div className={`w-10 h-10 flex items-center justify-center ${member.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'} hover:scale-110 rounded-full cursor-pointer transition-all`}>
                  <i className="ri-mail-fill"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA - matching home page colors */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6">We're always looking for talented individuals to join our growing team</p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg shadow-blue-500/25">
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
