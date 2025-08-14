import TestimonialsChain from '@/components/TestimonialsChain';

export default function TestimonialsPage() {
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

        {/* Testimonials Chain Component */}
        <TestimonialsChain />

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
