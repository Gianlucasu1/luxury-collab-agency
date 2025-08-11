import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote: "Luxora transformed our anniversary celebration into an absolutely magical experience. The attention to detail and personalized service exceeded all expectations.",
      author: "Victoria Hamilton",
      title: "CEO, Hamilton Enterprises",
      rating: 5
    },
    {
      quote: "The private jet experience was flawless. From departure to arrival, every moment was curated to perfection. This is luxury redefined.",
      author: "Marcus Chen",
      title: "Investment Director",
      rating: 5
    },
    {
      quote: "Their yacht charter service opened doors to destinations I never imagined. The crew's professionalism and the vessel's elegance were unmatched.",
      author: "Isabella Rodriguez",
      title: "Fashion Entrepreneur",
      rating: 5
    },
    {
      quote: "Luxora doesn't just provide services; they create lifetime memories. Their bespoke approach truly understands what luxury means.",
      author: "James Wellington",
      title: "Real Estate Mogul",
      rating: 5
    }
  ];

  const handleSlide = (direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      } else {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 600);
  };

  const nextTestimonial = () => handleSlide('next');
  const prevTestimonial = () => handleSlide('prev');

  const getTestimonialIndex = (offset: number) => {
    return (currentTestimonial + offset + testimonials.length) % testimonials.length;
  };

  const getCardPosition = (offset: number) => {
    const baseRotation = (offset * 120) % 360;
    const transitionRotation = isTransitioning ? (offset * 120 + (offset > 0 ? 60 : -60)) % 360 : baseRotation;
    
    const radius = 400; // Distance from center
    const x = Math.sin((transitionRotation * Math.PI) / 180) * radius;
    const z = Math.cos((transitionRotation * Math.PI) / 180) * radius;
    
    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${transitionRotation}deg)`,
      opacity: Math.abs(offset) <= 1 ? 1 : 0.3,
      scale: Math.abs(offset) === 0 ? 1 : 0.8,
      zIndex: Math.abs(offset) === 0 ? 20 : Math.abs(offset) === 1 ? 10 : 5
    };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-elite-teal-light to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-foreground mb-6">
            What Our <span className="text-accent">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground font-secondary max-w-2xl mx-auto">
            Testimonials from those who've experienced the pinnacle of luxury
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto h-[600px] flex items-center justify-center overflow-hidden perspective-1000">
          {/* Carousel Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Previous Card */}
            <div 
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={getCardPosition(-1)}
            >
            <div className="glass-panel rounded-2xl p-8 w-80 text-center relative">
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-12 h-12 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[getTestimonialIndex(-1)].rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                                  <blockquote className="text-lg font-primary text-foreground mb-6 leading-relaxed italic line-clamp-3">
                  "{testimonials[getTestimonialIndex(-1)].quote}"
                </blockquote>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="text-lg font-primary font-semibold text-accent mb-1">
                    {testimonials[getTestimonialIndex(-1)].author}
                  </h4>
                  <p className="text-sm text-muted-foreground font-secondary">
                    {testimonials[getTestimonialIndex(-1)].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Current Card (Center) */}
            <div 
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={getCardPosition(0)}
            >
            <div className="glass-panel rounded-2xl p-12 w-[500px] max-w-[90vw] text-center relative shadow-2xl border border-accent/10">
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-16 h-16 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-accent mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                                  <blockquote className="text-2xl md:text-3xl font-primary text-foreground mb-8 leading-relaxed italic px-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="border-t border-accent/20 pt-6">
                  <h4 className="text-xl font-primary font-semibold text-accent mb-1">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-muted-foreground font-secondary">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Next Card */}
            <div 
              className="absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={getCardPosition(1)}
            >
            <div className="glass-panel rounded-2xl p-8 w-80 text-center relative">
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-12 h-12 text-accent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[getTestimonialIndex(1)].rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                                  <blockquote className="text-lg font-primary text-foreground mb-6 leading-relaxed italic line-clamp-3">
                  "{testimonials[getTestimonialIndex(1)].quote}"
                </blockquote>

                <div className="border-t border-accent/20 pt-4">
                  <h4 className="text-lg font-primary font-semibold text-accent mb-1">
                    {testimonials[getTestimonialIndex(1)].author}
                  </h4>
                  <p className="text-sm text-muted-foreground font-secondary">
                    {testimonials[getTestimonialIndex(1)].title}
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-30 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/20 hover:border-accent/40 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-8 h-8 text-accent" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-30 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-accent/20 hover:border-accent/40 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-8 h-8 text-accent" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && setCurrentTestimonial(index)}
              disabled={isTransitioning}
              className={`w-4 h-4 rounded-full transition-all duration-500 hover:scale-125 ${
                index === currentTestimonial 
                  ? 'bg-accent shadow-lg shadow-accent/30 scale-125' 
                  : 'bg-accent/30 hover:bg-accent/50'
              } disabled:cursor-not-allowed`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;