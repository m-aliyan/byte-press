export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "The Midnight Garden",
      category: "Fiction",
      description: "A bestselling fantasy novel that reached #1 on Amazon charts",
      image: "/api/placeholder/400/300",
      stats: { sales: "50K+", rating: "4.8", reviews: "2.3K" }
    },
    {
      id: 2,
      title: "Business Growth Strategies",
      category: "Non-Fiction",
      description: "A comprehensive guide for entrepreneurs and business leaders",
      image: "/api/placeholder/400/300",
      stats: { sales: "25K+", rating: "4.9", reviews: "1.8K" }
    },
    {
      id: 3,
      title: "The Art of Mindfulness",
      category: "Self-Help",
      description: "A transformative book on mental wellness and personal growth",
      image: "/api/placeholder/400/300",
      stats: { sales: "35K+", rating: "4.7", reviews: "1.5K" }
    },
    {
      id: 4,
      title: "Culinary Adventures",
      category: "Cookbook",
      description: "A collection of international recipes with cultural stories",
      image: "/api/placeholder/400/300",
      stats: { sales: "20K+", rating: "4.6", reviews: "950" }
    },
    {
      id: 5,
      title: "Tech Revolution 2024",
      category: "Technology",
      description: "Insights into emerging technologies and their impact",
      image: "/api/placeholder/400/300",
      stats: { sales: "30K+", rating: "4.8", reviews: "1.2K" }
    },
    {
      id: 6,
      title: "Children's Adventure Series",
      category: "Children's Books",
      description: "A 5-book series that became a classroom favorite",
      image: "/api/placeholder/400/300",
      stats: { sales: "100K+", rating: "4.9", reviews: "5.1K" }
    }
  ];

  const categories = ["All", "Fiction", "Non-Fiction", "Self-Help", "Cookbook", "Technology", "Children's Books"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Book Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of books we've helped bring to life. Each project represents our commitment to quality and excellence in the publishing world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Book Cover</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-700">{project.stats.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Sales: {project.stats.sales}</span>
                  <span>{project.stats.reviews} reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Book Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help bring your book idea to life and join our portfolio of successful publications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="/services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
