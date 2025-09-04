'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import './page.css';

export default function PricingPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate elements when section enters viewport
            if (entry.target.id === 'pricing-questions') {
              console.log('Pricing Questions section entered viewport - triggering animations');
              
              const fadeUpElements = entry.target.querySelectorAll('.fade-up');
              const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
              const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
              const fadeRightElements = entry.target.querySelectorAll('.fade-right');
              const revealImgElements = entry.target.querySelectorAll('.reveal-img');
              
              console.log('Found elements:', {
                fadeUp: fadeUpElements.length,
                fadeScale: fadeScaleElements.length,
                fadeLeft: fadeLeftElements.length,
                fadeRight: fadeRightElements.length,
                revealImg: revealImgElements.length
              });
              
              // Add animation classes with a small delay to ensure smooth triggering
              setTimeout(() => {
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
                fadeLeftElements.forEach(el => el.classList.add('animate'));
                fadeRightElements.forEach(el => el.classList.add('animate'));
                revealImgElements.forEach(el => el.classList.add('animate'));
              }, 100);
            } else if (entry.target.id === 'cta-section') {
              console.log('CTA section entered viewport - triggering animations');
              
              const fadeUpElements = entry.target.querySelectorAll('.fade-up');
              const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
              
              console.log('Found CTA elements:', {
                fadeUp: fadeUpElements.length,
                fadeScale: fadeScaleElements.length
              });
              
              // Add animation classes with a small delay to ensure smooth triggering
              setTimeout(() => {
                fadeUpElements.forEach(el => el.classList.add('animate'));
                fadeScaleElements.forEach(el => el.classList.add('animate'));
              }, 100);
            }
          } else {
            // Reset animations when section leaves viewport
            if (entry.target.id === 'pricing-questions') {
              console.log('Pricing Questions section left viewport - resetting animations');
              
              const fadeUpElements = entry.target.querySelectorAll('.fade-up');
              const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
              const fadeLeftElements = entry.target.querySelectorAll('.fade-left');
              const fadeRightElements = entry.target.querySelectorAll('.fade-right');
              const revealImgElements = entry.target.querySelectorAll('.reveal-img');
              
              fadeUpElements.forEach(el => el.classList.remove('animate'));
              fadeScaleElements.forEach(el => el.classList.remove('animate'));
              fadeLeftElements.forEach(el => el.classList.remove('animate'));
              fadeRightElements.forEach(el => el.classList.remove('animate'));
              revealImgElements.forEach(el => el.classList.remove('animate'));
            } else if (entry.target.id === 'cta-section') {
              console.log('CTA section left viewport - resetting animations');
              
              const fadeUpElements = entry.target.querySelectorAll('.fade-up');
              const fadeScaleElements = entry.target.querySelectorAll('.fade-scale');
              
              fadeUpElements.forEach(el => el.classList.remove('animate'));
              fadeScaleElements.forEach(el => el.classList.remove('animate'));
            }
          }
        });
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before section is fully visible
      }
    );

    // Observe the pricing questions section
    const pricingQuestionsSection = document.getElementById('pricing-questions');
    if (pricingQuestionsSection) {
      console.log('Observing pricing questions section');
      observer.observe(pricingQuestionsSection);
    } else {
      console.error('Pricing questions section not found!');
    }

    // Observe the CTA section
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      console.log('Observing CTA section');
      observer.observe(ctaSection);
    } else {
      console.error('CTA section not found!');
    }

    return () => {
      if (pricingQuestionsSection) {
        observer.unobserve(pricingQuestionsSection);
      }
      if (ctaSection) {
        observer.unobserve(ctaSection);
      }
    };
  }, []);

  const ebookCategories = [
    {
      id: 'ghostwriting',
      category: 'GHOSTWRITING',
      title: 'Creative Ghost Writing At Book Writing Lane',
      description: 'Our wide range of ghostwriting services at reasonable rates offer you a certified group of expert writers, editors, publishing mavericks who work cooperatively to compose a book that hits the tracks superbly.',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'Creative content with a range of 200-300 pages.',
          priceRange: '$2,500 - $3,500',
          note: '(Approx. $120/page)'
        },
        premium: {
          name: 'PREMIUM',
          description: 'Professionally designed content with a range of 350 pages & beyond.',
          priceRange: '$4,500 - $6,000',
          note: '(Approx. $100/page)'
        }
      },
      features: [
        'Professional ghostwriters with industry experience',
        'Comprehensive research and fact-checking',
        'Multiple revision rounds included',
        'Confidentiality agreement protection',
        'Genre-specific expertise available',
        'Collaborative writing process',
        'Manuscript development consultation',
        'Style guide adherence'
      ]
    },
    {
      id: 'cover-design',
      category: 'COVER DESIGNING',
      title: 'Professional Cover Designing',
      description: 'The presentation of the book plays a pivotal role in publishing. Our professional and expert designers create striking book designs that are creative and leave the readers stunned.',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'Team of 2 creative designers’ research and provide 4 different concepts.',
          priceRange: '$599.00',
          note: 'Standard Package'
        },
        premium: {
          name: 'PREMIUM',
          description: 'Team of 3 creative designers’ conceptually design 6 unique concepts.',
          priceRange: '$999.00',
          note: 'Premium Package'
        }
      },
      features: [
        'Custom artwork and typography',
        'Market research and genre analysis',
        'Multiple design concepts',
        'High-resolution files for print and digital',
        'Spine and back cover design',
        'Unlimited revisions until satisfied',
        'Print-ready specifications',
        'Commercial usage rights'
      ]
    },
    {
      id: 'book-trailer',
      category: 'BOOK TRAILER',
      title: 'Alluring Book Trailer',
      description: 'Book Trailer videos work as a fire in the jungle in order to promote your book and expand the reach of your audience worldwide and amplify the sales',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'Trailer is shot completely in HD. We collaboratively work with clients to deliver the message.',
          priceRange: '$7,500.00',
          note: 'Standard Package'
        },
        premium: {
          name: 'PREMIUM',
          description: 'Trailer is shot completely in HD. We collaboratively work with clients to deliver the message..',
          priceRange: '$10,000.00',
          note: 'Premium Package'
        }
      },
      features: [
        'Professional scriptwriting',
        'Custom animations and graphics',
        'Professional voiceover talent',
        'Background music and sound effects',
        'Multiple format delivery',
        'Social media optimization',
        'Revision rounds included',
        'Commercial usage rights'
      ]
    },
    {
      id: 'author-website',
      category: 'AUTHOR WEBSITE',
      title: 'Interactive Author Website',
      description: 'E-stores have become the top destinations for bookselling. The internet has totally transformed the traditional book marketplaces into user-friendly online stores.',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'A fully responsive website consisting of 3 to 5 pages. Adequate for a blooming author.',
          priceRange: '$2,499.00',
          note: 'Standard Package'
        },
        premium: {
          name: 'PREMIUM',
          description: 'E-stores have become the top destinations for bookselling. The internet has totally transformed the traditional book marketplaces into user-friendly online stores.',
          priceRange: '$4,999.00',
          note: 'Premium Package'
        }
      },
      features: [
        'Responsive mobile-friendly design',
        'Author bio and book showcase',
        'Contact forms and social integration',
        'Blog functionality',
        'SEO optimization',
        'E-commerce integration',
        'Analytics setup',
        '6 months free hosting'
      ]
    },
    {
      id: 'audiobook',
      category: 'AUDIOBOOK',
      title: 'High Quality Audio Book',
      description: 'There has been a drastic demand for audiobooks for several years. The prime reason is that it is convenient to download and acquire information easily for the readers.',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'Note: Prices are subject to change depending on the duration and use of sound effects.',
          priceRange: '$4,999 - $10.000',
          note: 'Standard Package'
        },
        premium: {
          name: 'PREMIUM',
          description: 'Note: Premium package includes professional narration, background music, and advanced sound design for a more engaging listening experience.',
          priceRange: '$12,000 - $20,000',
          note: 'Premium Package'
        }
      },
      features: [
        'Professional voice talent selection',
        'Studio-quality recording',
        'Audio editing and mastering',
        'Chapter markers and metadata',
        'Multiple format delivery',
        'Distribution platform setup',
        'Quality assurance testing',
        'Revision rounds included'
      ]
    },
    {
      id: 'publishing',
      category: 'PUBLISHING',
      title: 'Online Book Publishing',
      description: 'Let our experts publish your book that is a cumbersome task for many publishers. We ensure your book must be accessible to a huge audience globally.',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'We provide publishing services to ensure your book isn’t just another manuscript but rather a book by potential bestselling author. We guarantee to publish your book on well-known platforms including Amazon.com, CreateSpace and Amazon Kindle.',
          priceRange: '$2,999.00',
          note: 'Standard Package'
        },
        premium: {
          name: 'PREMIUM',
          description: 'Comprehensive publishing with global distribution and marketing.',
          priceRange: '$1,500 - $2,500',
          note: 'Premium Package'
        }
      },
      features: [
        'Professional manuscript formatting',
        'ISBN registration and assignment',
        'Copyright registration assistance',
        'Multi-platform distribution',
        'Print-on-demand setup',
        'E-book conversion and optimization',
        'Metadata optimization',
        'Launch strategy consultation'
      ]
    },
    {
      id: 'marketing',
      category: 'MARKETING',
      title: 'Persuasive Book Marketing',
      description: 'Our digital marketing experts devise unique digital marketing strategies with a blend of multiple social media channels to reach your prospective audience across the globe.',
      pricing: {
        standard: {
          name: 'STANDARD',
          description: 'BBasic marketing including promoting your book on various social media platforms.',
          priceRange: '$5,000 - $25,000',
          note: 'Standard Package'
        },
        premium: {
          name: 'PREMIUM',
          description: 'Strategic marketing ensuring your book has sufficient digital exposure as well as social media promotion and SEO service.',
          priceRange: '$25,000 - $75,000',
          note: 'Premium Package'
        }
      },
      features: [
        'Social media campaign management',
        'Email marketing sequences',
        'Press release writing and distribution',
        'Book review outreach',
        'Amazon advertising campaigns',
        'Influencer collaboration',
        'Analytics and reporting',
        'Ongoing campaign optimization'
      ]
    }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '64px 32px',
        textAlign: 'center' as const
      }}>
        <div className="container mx-auto max-w-6xl">
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '1.2',
            fontFamily: 'Arial, sans-serif',
            color: '#2C2C54',
            marginBottom: '24px',
            animation: 'fadeInUp 1s ease-out',
            opacity: '1'
          }}>
            Discover Our Competitive Pricing Packages
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6C6C6C',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
            animation: 'fadeInUp 1s ease-out 0.3s both',
            opacity: '0'
          }}>
            Do you want to see your published content ranked among the spotlighted work across social media platforms as a published writer? Dream of owning a well-written book to your name?
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section style={{ padding: '32px' }}>
        <div className="container mx-auto max-w-6xl">
          {ebookCategories.map((category) => (
            <div key={category.id} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              marginBottom: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              animation: `fadeInUp 0.6s ease-out ${0.1 * ebookCategories.indexOf(category)}s both`,
              opacity: '0',
              transition: 'all 0.3s ease'
            }}>
              {/* Service Card Header - Clickable to expand */}
              <div 
                onClick={() => toggleCategory(category.id)}
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  const parent = e.currentTarget.parentElement as HTMLElement;
                  if (parent) {
                    parent.style.transform = 'translateY(-2px)';
                    parent.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseOut={(e) => {
                  const parent = e.currentTarget.parentElement as HTMLElement;
                  if (parent) {
                    parent.style.transform = 'translateY(0px)';
                    parent.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  }
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#2E8B8B',
                    textTransform: 'uppercase' as const,
                    marginBottom: '12px',
                    fontFamily: 'Arial, sans-serif'
                  }}>
                    {category.category}
                  </div>
                  <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#2C2C54',
                    marginBottom: '12px',
                    fontFamily: 'Arial, sans-serif'
                  }}>
                    {category.title}
                  </h2>
                  <p style={{
                    fontSize: '16px',
                    color: '#6C6C6C',
                    marginBottom: '16px',
                    lineHeight: '1.6',
                    fontFamily: 'Arial, sans-serif'
                  }}>
                    {category.description}
                  </p>
                </div>
                
                {/* Plus/Minus Icon */}
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#2E8B8B',
                  marginLeft: '24px',
                  transition: 'transform 0.3s ease'
                }}>
                  {expandedCategory === category.id ? '−' : '+'}
                </div>
              </div>

              {/* Expandable Pricing Section */}
              <div
                style={{
                  borderTop: '1px solid #2A4A6B',
                  padding: expandedCategory === category.id ? '16px' : '0px',
                  backgroundColor: '#E8E9EA',
                  maxHeight: expandedCategory === category.id ? '1200px' : '0px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                  opacity: expandedCategory === category.id ? 1 : 0,
                }}
              >
                  {/* Pricing Table */}
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    padding: '24px',
                    borderRadius: '8px',
                    marginBottom: '24px',
                    border: '1px solid #E0E0E0'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#2C2C54',
                      marginBottom: '20px',
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      Pricing Options
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Standard Tier */}
                      <div style={{
                        backgroundColor: '#F8F9FA',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #E0E0E0'
                      }}>
                        <h4 style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: '#2C2C54',
                          marginBottom: '8px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.standard.name}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          color: '#6C6C6C',
                          marginBottom: '12px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.standard.description}
                        </p>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#2E8B8B',
                          marginBottom: '8px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.standard.priceRange}
                        </div>
                        <span style={{
                          fontSize: '12px',
                          color: '#000000',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.standard.note}
                        </span>
                      </div>

                                        {/* Premium Tier */}
                  <div style={{
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid #E0E0E0'
                  }}>
                        <h4 style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          color: '#2C2C54',
                          marginBottom: '8px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.premium.name}
                        </h4>
                        <p style={{
                          fontSize: '14px',
                          color: '#6C6C6C',
                          marginBottom: '12px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.premium.description}
                        </p>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#2E8B8B',
                          marginBottom: '8px',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.premium.priceRange}
                        </div>
                        <span style={{
                          fontSize: '12px',
                          color: '#000000',
                          fontFamily: 'Arial, sans-serif'
                        }}>
                          {category.pricing.premium.note}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{
                    backgroundColor: '#1E3A5F',
                    padding: '24px',
                    borderRadius: '8px',
                    border: '1px solid #2A4A6B'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#FFFFFF',
                      marginBottom: '16px',
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      What's Included:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg 
                            className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                            style={{ color: '#7ED321' }}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          <span style={{
                            fontSize: '16px',
                            color: '#B8D4F0',
                            fontFamily: 'Arial, sans-serif'
                          }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <a
                      href="/contact"
                      style={{
                        backgroundColor: '#2E8B8B',
                        color: '#FFFFFF',
                        padding: '12px 24px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600',
                        textTransform: 'uppercase' as const,
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Arial, sans-serif',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 4px 8px rgba(46, 139, 139, 0.3)',
                        transform: 'translateY(0px)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#1F5F5F';
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(46, 139, 139, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#2E8B8B';
                        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(46, 139, 139, 0.3)';
                      }}
                    >
                      ACTIVATE NOW
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="pricing-questions" style={{
        backgroundColor: '#FFFFFF',
        padding: '64px 32px'
      }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="fade-up" style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#2C2C54',
              marginBottom: '16px',
              fontFamily: 'Arial, sans-serif'
            }}>
              Pricing Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-left" style={{
              backgroundColor: '#1E3A5F',
              border: '1px solid #2A4A6B',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 95, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 95, 0.3)';
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '8px',
                fontFamily: 'Arial, sans-serif'
              }}>
                What's included in the price?
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#B8D4F0',
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif'
              }}>
                All packages include the services listed, plus email support and project management. Additional services can be added à la carte.
              </p>
            </div>

            <div className="fade-right" style={{
              backgroundColor: '#1E3A5F',
              border: '1px solid #2A4A6B',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 95, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 95, 0.3)';
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '8px',
                fontFamily: 'Arial, sans-serif'
              }}>
                Do you offer refunds?
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#B8D4F0',
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif'
              }}>
                We offer a satisfaction guarantee. If you're not happy with our work, we'll revise until you're satisfied or provide a partial refund.
              </p>
            </div>

            <div className="fade-left" style={{
              backgroundColor: '#1E3A5F',
              border: '1px solid #2A4A6B',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 95, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 95, 0.3)';
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '8px',
                fontFamily: 'Arial, sans-serif'
              }}>
                Can I upgrade my package?
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#B8D4F0',
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif'
              }}>
                Yes! You can upgrade to a higher package at any time. We'll credit what you've already paid toward the new package.
              </p>
            </div>

            <div className="fade-right" style={{
              backgroundColor: '#1E3A5F',
              border: '1px solid #2A4A6B',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 95, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 95, 0.3)';
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '8px',
                fontFamily: 'Arial, sans-serif'
              }}>
                What about ongoing costs?
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#B8D4F0',
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif'
              }}>
                Our packages are one-time fees. The only ongoing costs are optional services like continued marketing support or new editions.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <div className="fade-scale" style={{ transitionDelay: '200ms' }}>
              <a href="/contact" className="inline-flex items-center gap-2 bg-[#0B3C74] hover:bg-[#0A2E5C] active:bg-[#0A2E5C] text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors duration-300 no-underline">
                <span className="text-white">GET STARTED NOW</span>
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" style={{
        backgroundColor: '#2C2C54',
        color: '#FFFFFF',
        padding: '64px 32px',
        textAlign: 'center' as const,
        backgroundImage: 'url("/neon.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(44, 44, 84, 0.3)',
          zIndex: 1
        }}></div>
        <div className="container mx-auto max-w-4xl" style={{ position: 'relative', zIndex: 2 }}>
          <p className="fade-up" style={{
            fontSize: '16px',
            marginBottom: '16px',
            fontFamily: 'Arial, sans-serif',
            transitionDelay: '120ms'
          }}>
            Struggling To Sell More Books?
          </p>
          <h2 className="fade-up" style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '32px',
            fontFamily: 'Arial, sans-serif'
          }}>
            Why Not Hire Expert Book Marketing Professionals To Promote Your Book!
          </h2>
          <div className="flex justify-center fade-scale" style={{ transitionDelay: '200ms' }}>
            <a
              href="/contact"
              style={{
                backgroundColor: '#0B3C74',
                color: '#FFFFFF',
                padding: '16px 32px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'Arial, sans-serif',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 6px 12px rgba(11, 60, 116, 0.3)',
                transform: 'translateY(0px)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#0A2E5C';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(11, 60, 116, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#0B3C74';
                e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(11, 60, 116, 0.3)';
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Spacer between CTA and Footer */}
      <div style={{ height: '80px' }}></div>

      <Footer />
    </main>
  );
}
