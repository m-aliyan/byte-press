"use client";

import './faq.css';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "WHO IS A GHOSTWRITER & HOW TO DISCOVER A GHOSTWRITER FOR HIRING?",
      answer: "A ghostwriter is an individual who composes for another person without including their name as the author; instead, the specific individual's name is utilized. This ghostwriting is typically connected with distributing a book. Ghostwriting is an inseparable part of advertising, corporate technologies, online networking, and various other fields driven by content."
    },
    {
      id: 2,
      question: "HOW TO AVAIL THE ASSISTANCE OF A GHOSTWRITER?",
      answer: "If you seek the assistance of a ghostwriter, we can help you out in this effort. If you're informed of common individuals or professionals who have utilized ghostwriters in the past, then ask them for guidance. Tell these individuals your specifications and parameters, as this preserves your time and prevents mental fatigue. Possessing liberty, you can search on online platforms for ghostwriters. By exploring distinct websites for specialist ghostwriters, you can guarantee yourself to avail yourself of the expertise and advice of a quality-driven ghostwriter who fulfills your expectations. This process helps you access ghostwriters experienced, have ample knowledge of the given field, and are skilled enough to translate excellence onto paper."
    },
    {
      id: 3,
      question: "OUR PURPOSE IN THE GHOST WRITING JIGSAW",
      answer: "Our primary purpose is to provide you with a ghostwriter that can satisfy your expectations, can follow your vision, and can blend their writing style with one required by you. There are still elements that you need to analyze before hiring a ghostwriter."
    },
    {
      id: 4,
      question: "THE GENERAL EXPENSE OF HIRING A GHOSTWRITER",
      answer: "Various components comprise the cost of a ghostwriter. They are inclusive of the project's complexity, varying elements enfolded within the project, the ghostwriter's experience, the skill demonstrated by the writer, and the time needed to complete the project."
    },
    {
      id: 5,
      question: "DO YOU OFFER ANY GUARANTEES?",
      answer: "Even though we don't guarantee any top-rankings, our track record showcases our ability to provide result-oriented results consistently. Avail our assistance to see, understand and realize the potential we can unleash for your projects by simply harnessing our experience and expertise."
    },
    {
      id: 6,
      question: "What is a Ghostwriter and How to Find a Ghostwriters for Hire?",
      answer: "A ghostwriter is a writer who gets compensated to write for another person supporting that specific individual's name. Generally, this kind of ghostwriting or ghostwriters is linked with distributing a book. Now, ghostwriting is also broadly used as a part of corporate interchanges, advertising, online networking, and numerous activities and fields that deliver more noticeable and more noteworthy written content measures."
    },
    {
      id: 7,
      question: "How to Hire a Ghostwriter?",
      answer: "If you search for an answer, how to hire a ghostwriter, we can assist you with that! If you know people who have employed ghostwriters or ghostwriting services, request them to recommend potential ghostwriters for your assignment. Tell them your obligations and desires, which can guide them to a perfect contender for you. It can help you with vitality, time, and even cash. You can search online freelance sites for ghostwriters if you like. Glancing through different websites for different ghostwriters and ghostwriting services can ensure that you get a quality ghostwriter who best meets your particular requirements. You can even consider securing a job posting for one of the ghostwriting services sites. Consolidate data, for example, your necessities and basics and your economic plan."
    },
    {
      id: 8,
      question: "Ghostwriter for Hire- Completed work through Our Service",
      answer: "Our primary thought is to give you a ghostwriter for hire and ghostwriting services that you can easily rely on to achieve amazing content. There are several things that you should consider when you hire a ghostwriter."
    },
    {
      id: 9,
      question: "The Expenses of Hiring a Ghostwriter",
      answer: "The expense of contracting a ghostwriter varies enormously, relying upon the project's circumstances, the skill of the writer, the many-sided tone of the topic, its complexity, and that's just the origin. When you hire a ghostwriter, you're spending their experience, ability, skill, and time."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <main className="faq-main">
        <div className="faq-container">
          <div className="faq-header">
            <h1 className="faq-title">
              Your Questions, Our Answers: FAQ Section
            </h1>
            <p className="faq-subtitle">
              Have Questions? Discover Tailored Solutions with Us!
            </p>
          </div>

          {/* FAQs Accordion */}
          <div className="faq-accordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-accordion-item">
                <button
                  className={`faq-accordion-button ${openFaq === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="faq-accordion-question">{faq.question}</span>
                  <span className="faq-accordion-icon">
                    {openFaq === faq.id ? '-' : '+'}
                  </span>
                </button>
                <div className={`faq-accordion-content ${openFaq === faq.id ? 'active' : ''}`}>
                  <div className="faq-accordion-answer">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="faq-help-section">
            <div className="faq-help-card">
              <div className="faq-help-icon-container">
                <svg className="faq-help-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="faq-help-title">
                Still Have Questions?
              </h3>
              <p className="faq-help-description">
                Our team is here to help! Schedule a free consultation call to discuss your book project and get personalized answers to all your questions.
              </p>
              <div className="faq-help-buttons">
                <a href="/contact" className="faq-primary-button">
                  Schedule Consultation
                </a>
                <a href="mailto:hello@bytepress.com" className="faq-secondary-button">
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Contact Cards Section */}
          <div className="faq-contact-cards-section">
            <h2 className="faq-contact-cards-title">Get in Touch</h2>
            <p className="faq-contact-cards-subtitle">We're here to help with all your questions</p>
            
            <div className="faq-contact-cards-grid">
              <div className="faq-contact-card">
                <div className="faq-contact-card-icon phone">
                  <svg className="faq-contact-card-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="faq-contact-card-title">Phone Support</h3>
                <p className="faq-contact-card-main">+1 (555) 123-4567</p>
                <p className="faq-contact-card-detail">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="faq-contact-card">
                <div className="faq-contact-card-icon email">
                  <svg className="faq-contact-card-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="faq-contact-card-title">Email Support</h3>
                <p className="faq-contact-card-main">hello@bytepress.com</p>
                <p className="faq-contact-card-detail">24/7 response time</p>
              </div>

              <div className="faq-contact-card">
                <div className="faq-contact-card-icon chat">
                  <svg className="faq-contact-card-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="faq-contact-card-title">Live Chat</h3>
                <p className="faq-contact-card-main">Available on website</p>
                <p className="faq-contact-card-detail">Instant responses</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
