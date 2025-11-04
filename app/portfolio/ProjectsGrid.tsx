
'use client';

export default function ProjectsGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20product%20listings%20and%20shopping%20cart%2C%20professional%20online%20store%20design%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=project-ecommerce&orientation=landscape",
      description: "Complete online shopping platform with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "https://readdy.ai/api/search-image?query=healthcare%20mobile%20app%20interface%20showing%20patient%20dashboard%20and%20medical%20records%2C%20clean%20medical%20app%20design%20with%20blue%20and%20white%20colors&width=600&height=400&seq=project-healthcare&orientation=landscape",
      description: "Patient management system with appointment scheduling",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"]
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      image: "https://readdy.ai/api/search-image?query=professional%20corporate%20website%20homepage%20with%20modern%20design%2C%20business%20website%20with%20clean%20layout%20and%20blue%20color%20scheme&width=600&height=400&seq=project-corporate&orientation=landscape",
      description: "Professional business website with CMS integration",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"]
    },
    {
      title: "Restaurant Management System",
      category: "Custom Software",
      image: "https://readdy.ai/api/search-image?query=restaurant%20point%20of%20sale%20system%20interface%20with%20menu%20management%20and%20order%20tracking%2C%20modern%20POS%20software%20with%20clean%20dashboard%20design&width=600&height=400&seq=project-restaurant&orientation=landscape",
      description: "Complete POS system with inventory management",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Social Media Dashboard",
      category: "Web Application",
      image: "https://readdy.ai/api/search-image?query=social%20media%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20modern%20web%20application%20interface%20with%20data%20visualization%20and%20blue%20color%20scheme&width=600&height=400&seq=project-social&orientation=landscape",
      description: "Analytics platform for social media management",
      technologies: ["React", "Chart.js", "Express", "MySQL"]
    },
    {
      title: "Learning Management System",
      category: "Education Platform",
      image: "https://readdy.ai/api/search-image?query=online%20learning%20platform%20interface%20with%20course%20listings%20and%20student%20dashboard%2C%20educational%20website%20design%20with%20modern%20clean%20layout&width=600&height=400&seq=project-learning&orientation=landscape",
      description: "Online education platform with video streaming",
      technologies: ["Angular", "NestJS", "MongoDB", "AWS"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Beautiful background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20modern%20office%20workspace%20with%20multiple%20computer%20screens%20displaying%20web%20development%20code%20and%20design%20interfaces%2C%20sophisticated%20blue%20and%20white%20technology%20environment%2C%20clean%20minimalist%20setup%20with%20coding%20projects%20visible%20on%20monitors%2C%20elegant%20workspace%20photography%20with%20soft%20lighting%20and%20contemporary%20design%20elements%2C%20high-tech%20development%20studio%20atmosphere&width=1920&height=1080&seq=projects-bg-v5&orientation=landscape')`
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/80 to-blue-800/85"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          {/* Main heading with stunning design */}
          <div className="relative mb-12">
            {/* Portfolio Showcase badge */}
            <div className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-2xl">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
              <i className="ri-briefcase-line text-blue-200 mr-2 text-lg"></i>
              <span className="text-lg font-bold text-white">Portfolio Showcase</span>
              <i className="ri-star-fill ml-3 text-yellow-400 text-lg"></i>
            </div>
            
            {/* Main title with dramatic effect */}
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl mb-4">Our Latest</span>
              <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Creative Works
              </span>
            </h2>
            
            {/* Decorative elements */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-6 animate-pulse"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full"></div>
            </div>
          </div>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our most innovative and impactful projects that have transformed businesses across various industries through cutting-edge technology and creative excellence
          </p>
          
          {/* Enhanced stats with glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Successful Projects', icon: 'ri-trophy-line' },
              { number: '15+', label: 'Industries Served', icon: 'ri-building-line' },
              { number: '100%', label: 'Client Satisfaction', icon: 'ri-heart-fill' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-white/20 hover:scale-105 hover:bg-white">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  View Project Details
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                </button> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-16">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-4 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-2xl text-lg">
            Explore All Our Work
          </button>
        </div> */}
      </div>
    </section>
  );
}
