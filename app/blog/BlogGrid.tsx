'use client';

import Link from 'next/link';

export default function BlogGrid() {
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of AI in Web Development: Transforming Digital Experiences',
      excerpt: 'Discover how artificial intelligence is revolutionizing web development, from automated coding to personalized user experiences. Learn about the latest AI tools and techniques.',
      category: 'AI & Technology',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=modern%20artificial%20intelligence%20technology%20in%20web%20development%20with%20futuristic%20interface%20elements%2C%20clean%20blue%20and%20white%20tech%20background%2C%20professional%20digital%20workspace%2C%20AI%20coding%20interface%2C%20neural%20network%20visualizations%2C%20modern%20tech%20aesthetic&width=600&height=400&seq=blog1&orientation=landscape',
      tags: ['AI', 'Web Development', 'Future Tech']
    },
    {
      id: '2',
      title: 'Cloud Migration Success Stories: Real Business Transformations',
      excerpt: 'Explore real-world case studies of businesses that successfully migrated to the cloud. Learn about challenges, solutions, and measurable ROI improvements.',
      category: 'Cloud Solutions',
      author: 'Michael Rodriguez',
      date: 'March 12, 2024',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=cloud%20computing%20infrastructure%20with%20servers%20and%20data%20centers%2C%20modern%20business%20technology%2C%20blue%20sky%20with%20white%20clouds%2C%20professional%20tech%20environment%2C%20digital%20transformation%20concept%2C%20clean%20minimalist%20background&width=600&height=400&seq=blog2&orientation=landscape',
      tags: ['Cloud', 'Case Study', 'Business Growth']
    },
    {
      id: '3',
      title: 'Mobile-First Design: Creating Apps That Users Love',
      excerpt: 'Master the principles of mobile-first design and user experience. Discover best practices for creating intuitive mobile applications that drive engagement.',
      category: 'UI/UX Design',
      author: 'Emily Zhang',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=mobile%20app%20design%20interface%20with%20clean%20UI%20elements%2C%20smartphone%20mockups%20showing%20beautiful%20app%20screens%2C%20modern%20design%20tools%2C%20user%20experience%20workflow%2C%20bright%20professional%20workspace%2C%20blue%20accent%20colors&width=600&height=400&seq=blog3&orientation=landscape',
      tags: ['Mobile Design', 'UX', 'App Development']
    },
    {
      id: '4',
      title: 'Digital Marketing ROI: Measuring What Matters in 2024',
      excerpt: 'Learn how to track and optimize your digital marketing campaigns for maximum ROI. Discover key metrics, tools, and strategies that drive results.',
      category: 'Digital Marketing',
      author: 'James Wilson',
      date: 'March 8, 2024',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=digital%20marketing%20analytics%20dashboard%20with%20charts%20graphs%20and%20performance%20metrics%2C%20modern%20business%20analytics%20interface%2C%20data%20visualization%2C%20marketing%20ROI%20analysis%2C%20professional%20blue%20color%20scheme%20background&width=600&height=400&seq=blog4&orientation=landscape',
      tags: ['Marketing', 'Analytics', 'ROI']
    },
    {
      id: '5',
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Protect your business from cyber threats with proven security strategies. Learn about the latest security technologies and implementation best practices.',
      category: 'Security',
      author: 'David Park',
      date: 'March 5, 2024',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20shield%20protection%20with%20digital%20lock%20and%20security%20elements%2C%20modern%20tech%20security%20interface%2C%20professional%20blue%20tones%2C%20secure%20network%20visualization%2C%20business%20protection%20concept%2C%20clean%20tech%20background&width=600&height=400&seq=blog5&orientation=landscape',
      tags: ['Security', 'Best Practices', 'Business']
    },
    {
      id: '6',
      title: 'The Rise of Progressive Web Apps: Why PWAs Matter',
      excerpt: 'Understand the benefits of Progressive Web Apps and how they bridge the gap between web and mobile experiences. Learn implementation strategies.',
      category: 'Web Development',
      author: 'Lisa Thompson',
      date: 'March 3, 2024',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=progressive%20web%20app%20development%20with%20multiple%20device%20screens%20showing%20responsive%20design%2C%20modern%20web%20technology%2C%20cross-platform%20compatibility%2C%20clean%20professional%20workspace%2C%20blue%20and%20white%20tech%20aesthetic&width=600&height=400&seq=blog6&orientation=landscape',
      tags: ['PWA', 'Web Development', 'Mobile']
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Solutions', 'UI/UX Design', 'Digital Marketing', 'Security', 'Web Development'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 hover:from-blue-600 hover:to-indigo-600 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer">
              <Link href={`/blog/${post.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span className="mr-4">{post.date}</span>
                    <i className="ri-time-line mr-2"></i>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium cursor-pointer">
                      Read More
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {/* Load More Button */}
        {/* <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
            Load More Posts
          </button>
        </div> */}
      </div>
    </section>
  );
}