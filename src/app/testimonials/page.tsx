export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bestselling Author",
      company: "Independent Publisher",
      content: "BytePress transformed my rough manuscript into a polished bestseller. Their editing team's attention to detail and marketing support helped me reach #1 on Amazon. I couldn't have done it without them!",
      rating: 5,
      book: "The Midnight Garden",
      sales: "50K+ copies sold"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Consultant",
      company: "Growth Strategies Inc.",
      content: "Working with BytePress was a game-changer for my business book. Their professional writing team captured my expertise perfectly, and the cover design is absolutely stunning. Highly recommended!",
      rating: 5,
      book: "Business Growth Strategies",
      sales: "25K+ copies sold"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Psychologist & Author",
      company: "Mindful Living Institute",
      content: "The team at BytePress understood my vision for a self-help book that could truly help people. Their editing expertise and marketing strategies exceeded my expectations. My book is now helping thousands!",
      rating: 5,
      book: "The Art of Mindfulness",
      sales: "35K+ copies sold"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Chef & Food Blogger",
      company: "Culinary Adventures",
      content: "BytePress helped me create a cookbook that's more than just recipes - it's a cultural journey. Their design team created a beautiful book that perfectly captures the essence of my cooking philosophy.",
      rating: 5,
      book: "Culinary Adventures",
      sales: "20K+ copies sold"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Tech Entrepreneur",
      company: "Innovation Labs",
      content: "As a first-time author, I was nervous about the publishing process. BytePress guided me through every step with patience and expertise. My book is now a go-to resource in the tech industry.",
      rating: 5,
      book: "Tech Revolution 2024",
      sales: "30K+ copies sold"
    },
    {
      id: 6,
      name: "David & Maria Williams",
      role: "Children's Book Authors",
      company: "Adventure Stories Co.",
      content: "Creating a children's book series was our dream, and BytePress made it a reality. Their understanding of children's literature and beautiful illustrations helped us create books that kids and parents love.",
      rating: 5,
      book: "Children's Adventure Series",
      sales: "100K+ copies sold"
    }
  ];

  const stats = [
    { label: "Happy Authors", value: "500+", icon: "👨‍💻" },
    { label: "Books Published", value: "750+", icon: "📚" },
    { label: "Bestsellers", value: "50+", icon: "🏆" },
    { label: "5-Star Reviews", value: "98%", icon: "⭐" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            What Our Authors Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what authors who've worked with BytePress have to say about their experience and success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Book Info */}
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <div className="text-sm font-medium text-blue-900">{testimonial.book}</div>
                <div className="text-xs text-blue-700">{testimonial.sales}</div>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Success Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Success Story
            </h2>
            <p className="text-lg text-gray-600">
              From Manuscript to Bestseller in 6 Months
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                "The Midnight Garden" by Sarah Johnson
              </h3>
              <p className="text-gray-700 mb-6">
                Sarah came to us with a rough fantasy manuscript and a dream of becoming a published author. Our team worked closely with her to develop the story, polish the writing, and create a stunning cover design.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">#1</div>
                  <div className="text-sm text-gray-600">Amazon Bestseller</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Copies Sold</div>
                </div>
              </div>
              <a href="/portfolio" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                View Full Portfolio
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">📚</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Bestseller Status</div>
              <div className="text-gray-600">Achieved in just 6 months</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of successful authors who've transformed their ideas into bestselling books with BytePress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Start Your Journey
              </a>
              <a href="/services" className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
