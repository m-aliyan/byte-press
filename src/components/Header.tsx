'use client';

import FreeQuoteForm from '@/components/ui/FreeQuoteForm';

export default function Header() {
  return (
    <section className="hero-section" data-section="hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Hero Content */}
            <div className="hero-content text-center lg:text-left hero-text-slide-in">
              {/* Eyebrow */}
              <p className="hero-eyebrow hero-fade-up">
                Bytes Press
              </p>
              
              {/* Main H1 */}
              <h1 className="hero-title hero-fade-up">
                <span>The Book Publishing Company</span><br />
                <span>That Moves Your Story</span><br />
                <span>Forward</span>
              </h1>
              
              {/* Paragraph body */}
              <p className="hero-description hero-fade-up">
                At Bytes Press, we don't just print pages. We help launch careers. From self publishing services to sharp book marketing, we're the publishing company that puts your goals at the center. Fiction, nonfiction, memoirs, or academic work — if it matters to you, it matters here.
              </p>
              
              {/* Buttons with better spacing */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 hero-fade-scale">
                <a href="/contact" className="fancy">
                  <span className="top-key"></span>
                  <span className="text">Start Your Book Project</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
                <a href="/services" className="fancy">
                  <span className="top-key"></span>
                  <span className="text">View Our Services</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>
            
            {/* Free Quote Form */}
            <div className="flex justify-center lg:justify-end accordion-fade-left">
              <FreeQuoteForm />
            </div>
        </div>
      </div>
    </section>
  );
}
