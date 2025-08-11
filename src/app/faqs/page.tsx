export default function FAQsPage() {
  const faqs = [
    {
      id: 1,
      question: "How long does it take to publish a book?",
      answer: "The timeline varies depending on the service package and book complexity. A basic editing package typically takes 4-6 weeks, while a full ghostwriting project can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      category: "Timeline"
    },
    {
      id: 2,
      question: "What genres do you specialize in?",
      answer: "We work across all major genres including fiction (romance, mystery, sci-fi, fantasy), non-fiction (business, self-help, memoir), children's books, academic works, and specialized publications. Our team has expertise in diverse subject matters.",
      category: "Services"
    },
    {
      id: 3,
      question: "Do you offer self-publishing or traditional publishing support?",
      answer: "We primarily focus on self-publishing support, helping authors navigate platforms like Amazon KDP, Barnes & Noble Press, and others. We also provide guidance for authors seeking traditional publishing and can help prepare submissions.",
      category: "Publishing"
    },
    {
      id: 4,
      question: "How much does it cost to publish a book?",
      answer: "Our pricing varies based on services needed. Basic editing starts at $500, while comprehensive packages including writing, editing, design, and marketing can range from $2,000 to $15,000+. We offer flexible payment plans and will provide a detailed quote after reviewing your project.",
      category: "Pricing"
    },
    {
      id: 5,
      question: "Can you help with book marketing and promotion?",
      answer: "Yes! We offer comprehensive marketing services including social media campaigns, email marketing, book launch strategies, Amazon ads management, and PR outreach. Marketing is crucial for book success, and we have proven strategies to boost visibility and sales.",
      category: "Marketing"
    },
    {
      id: 6,
      question: "What if I'm not satisfied with the work?",
      answer: "We stand behind our work with a satisfaction guarantee. We offer unlimited revisions within the scope of your project and will work with you until you're completely satisfied. Your success is our success, and we're committed to delivering quality results.",
      category: "Quality"
    },
    {
      id: 7,
      question: "Do you work with international authors?",
      answer: "Absolutely! We work with authors from around the world. Our services are available in English, and we can accommodate different time zones for consultations. We've helped authors from over 30 countries publish their books successfully.",
      category: "International"
    },
    {
      id: 8,
      question: "Can you help with book cover design?",
      answer: "Yes! Our design team creates professional, eye-catching covers that follow genre conventions and market trends. We offer multiple design concepts, and you'll have input throughout the process. A great cover is essential for book sales, and we ensure yours stands out.",
      category: "Design"
    },
    {
      id: 9,
      question: "What makes BytePress different from other services?",
      answer: "We combine professional expertise with personalized attention. Our team includes published authors, industry professionals, and marketing experts. We don't just edit your book—we become your publishing partner, guiding you through every step of the process.",
      category: "Company"
    },
    {
      id: 10,
      question: "How do I get started with my book project?",
      answer: "Getting started is easy! Simply schedule a free consultation call where we'll discuss your project, goals, and timeline. We'll provide a custom quote and project plan. Once you're ready, we'll begin with a detailed project brief and kickoff meeting.",
      category: "Getting Started"
    }
  ];

  const categories = ["All", "Timeline", "Services", "Publishing", "Pricing", "Marketing", "Quality", "International", "Design", "Company", "Getting Started"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our book publishing services. Can't find what you're looking for? Contact us directly!
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

        {/* FAQs Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mr-3">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
                <div className="ml-6 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Schedule a free consultation call to discuss your book project and get personalized answers to all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </a>
              <a href="mailto:hello@bytepress.com" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
            <p className="text-gray-600">hello@bytepress.com</p>
            <p className="text-sm text-gray-500">24/7 response time</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600">Available on website</p>
            <p className="text-sm text-gray-500">Instant responses</p>
          </div>
        </div>
      </div>
    </main>
  )
}
