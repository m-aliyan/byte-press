import Footer from '@/components/Footer';

export default function PricingPage() {
  const packages = [
    {
      name: "Starter",
      price: "$500",
      description: "Perfect for authors who need basic editing and formatting",
      features: [
        "Manuscript review & feedback",
        "Basic copy editing (up to 50,000 words)",
        "Formatting for self-publishing",
        "Basic cover design template",
        "Publishing checklist",
        "Email support",
        "Basic author bio template",
        "Formatting guidelines",
        "Publishing platform guidance",
        "Basic marketing tips",
        "Copyright information"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: "$2,500",
      description: "Comprehensive package for serious authors",
      features: [
        "Everything in Starter, plus:",
        "Professional line editing",
        "Content development consultation",
        "Custom cover design (3 concepts)",
        "Interior layout design",
        "ISBN registration assistance",
        "Basic marketing strategy",
        "Priority support",
        "2 rounds of revisions",
        "Author bio and back cover copy",
        "Book metadata optimization",
        "E-book formatting (EPUB & PDF)"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Premium",
      price: "$5,000",
      description: "Full-service package for bestseller potential",
      features: [
        "Everything in Professional, plus:",
        "Ghostwriting (up to 80,000 words)",
        "Advanced content strategy",
        "Professional proofreading",
        "Advanced cover design with illustrations",
        "Complete interior design",
        "Marketing campaign development",
        "Social media setup",
        "Amazon optimization",
        "Unlimited revisions",
        "Dedicated project manager"
      ],
      popular: false,
      color: "green"
    },
    {
      name: "Enterprise",
      price: "$15,000+",
      description: "Custom solution for complex projects",
      features: [
        "Everything in Premium, plus:",
        "Custom ghostwriting (any length)",
        "Research and fact-checking",
        "Professional illustrations",
        "Audiobook production",
        "International distribution setup",
        "Advanced marketing campaigns",
        "PR and media outreach",
        "Sales funnel optimization",
        "Ongoing support (6 months)",
        "Quarterly strategy sessions"
      ],
      popular: false,
      color: "indigo"
    }
  ];

  const addOns = [
    {
      name: "Cover Design",
      price: "$300",
      description: "Professional cover design with 3 concept options",
      features: ["Custom illustration", "Typography design", "Market research", "3 revisions"]
    },
    {
      name: "Marketing Package",
      price: "$800",
      description: "Comprehensive marketing strategy and execution",
      features: ["Social media setup", "Email marketing", "Amazon ads", "PR outreach"]
    },
    {
      name: "Audiobook Production",
      price: "$1,200",
      description: "Professional audiobook recording and production",
      features: ["Professional narrator", "Audio editing", "Distribution setup", "Quality assurance"]
    },
    {
      name: "Illustration Package",
      price: "$500",
      description: "Custom illustrations for your book",
      features: ["5-10 illustrations", "Style consultation", "2 revision rounds", "Commercial rights"]
    }
  ];

           return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 pt-24 pb-16">
            <div className="text-center mb-24">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect package for your book project. All prices are transparent with no hidden fees. Need something custom? Let's discuss your specific requirements.
              </p>
            </div>

        {/* Main Packages */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Additional Services
          </h2>
          <p className="text-lg text-gray-600">
            Need specific services? Add these to any package or purchase separately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {addOns.map((addon, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{addon.name}</h3>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">{addon.price}</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {addon.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="w-full block text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Add to Package
              </a>
            </div>
          ))}
        </div>

        {/* Payment Plans */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-gray-600">
              We understand that publishing a book is an investment. We offer flexible payment plans to make it easier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pay in Full</h3>
              <p className="text-gray-600">Get a 10% discount when you pay the full amount upfront.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Payments</h3>
              <p className="text-gray-600">Spread the cost over 3-12 months with 0% interest.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Milestone Payments</h3>
              <p className="text-gray-600">Pay at key project milestones as work is completed.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the price?</h3>
              <p className="text-gray-600">All packages include the services listed, plus email support and project management. Additional services can be added à la carte.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">We offer a satisfaction guarantee. If you're not happy with our work, we'll revise until you're satisfied or provide a partial refund.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade my package?</h3>
              <p className="text-gray-600">Yes! You can upgrade to a higher package at any time. We'll credit what you've already paid toward the new package.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What about ongoing costs?</h3>
              <p className="text-gray-600">Our packages are one-time fees. The only ongoing costs are optional services like continued marketing support or new editions.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Book Project?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Schedule a free consultation to discuss your project and get a personalized quote based on your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 hover:text-white transition-colors">
                Get Free Quote
              </a>
              <a href="/faqs" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-600 hover:text-white transition-colors">
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
