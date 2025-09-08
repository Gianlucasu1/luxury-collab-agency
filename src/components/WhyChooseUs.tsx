import { useState, useEffect } from 'react';
import { UserCheck, Globe, Shield, Users, Clock, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const whyChooseUs = [
    { 
      title: 'Tailored Concierge Service', 
      description: 'Every detail meticulously crafted to exceed your expectations',
      icon: UserCheck 
    },
    { 
      title: 'Global Access Network', 
      description: 'Exclusive partnerships spanning six continents',
      icon: Globe 
    },
    { 
      title: 'Verified Luxury Experiences', 
      description: 'Rigorously vetted partners ensuring uncompromising quality',
      icon: Shield 
    },
    { 
      title: 'Elite Client Network', 
      description: 'Exclusive access to the world\'s most prestigious venues',
      icon: Users 
    },
    { 
      title: '24/7 Dedicated Support', 
      description: 'Round-the-clock assistance from our luxury specialists',
      icon: Clock 
    },
    { 
      title: 'Bespoke Experience Design', 
      description: 'Custom-crafted journeys tailored to your unique preferences',
      icon: Palette 
    },
  ];

  // Create duplicated array for infinite scroll
  const duplicatedItems = [...whyChooseUs, ...whyChooseUs];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        if (nextSlide >= whyChooseUs.length) {
          // When we reach the end, reset to 0 after a brief delay
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(0);
          }, 500);
          setIsTransitioning(true);
          return whyChooseUs.length; // Show the duplicated first item
        }
        return nextSlide;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, whyChooseUs.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // If at the beginning, go to the last item of the duplicated array
        return whyChooseUs.length - 1;
      }
      return prev - 1;
    });
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= whyChooseUs.length) {
        // When we reach the end, reset to 0 after a brief delay
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 500);
        setIsTransitioning(true);
        return whyChooseUs.length; // Show the duplicated first item
      }
      return nextSlide;
    });
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #11353e, #2a6781)',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <img
          src={logo}
          alt="The Luxury Collab Agency Background"
          className="w-[800px] h-auto object-contain"
        />
      </div>
      <div className="main-container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
            Why <span className="text-[#efb958]">Elite</span> Clients Choose Us
          </h2>
          <p className="text-xl text-white font-secondary max-w-2xl mx-auto">
            Experience the pinnacle of luxury with our unparalleled service standards
          </p>
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:block">
          <div className="relative mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#2a6781]/80 hover:bg-[#2a6781] text-[#efb958] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#efb958]/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#2a6781]/80 hover:bg-[#2a6781] text-[#efb958] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#efb958]/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? 'transition-none' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {duplicatedItems.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={`${benefit.title}-${index}`} className="w-1/3 flex-shrink-0 px-4">
                      <div className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group flex items-center justify-center" style={{ boxShadow: 'none' }}>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 bg-brand-tertiary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-tertiary/20 transition-colors duration-300">
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-lg font-primary font-semibold text-[#efb958] mb-3">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-white font-secondary leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden">
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons for Mobile/Tablet */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-[#2a6781]/80 hover:bg-[#2a6781] text-[#efb958] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#efb958]/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-[#2a6781]/80 hover:bg-[#2a6781] text-[#efb958] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#efb958]/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile Slider Container */}
            <div className="overflow-hidden">
              <div 
                className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? 'transition-none' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {duplicatedItems.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={`${benefit.title}-${index}`} className="w-full flex-shrink-0 px-4">
                      <div className="glass-panel p-6 rounded-2xl hover:scale-105 transition-all duration-300 group flex items-center justify-center" style={{ boxShadow: 'none' }}>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-brand-tertiary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-brand-tertiary/20 transition-colors duration-300">
                            <Icon className="w-10 h-10 text-[#efb958]" />
                          </div>
                          <h3 className="text-lg font-primary font-semibold text-brand-fifth mb-3">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-white font-secondary leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator - All Screen Sizes */}
        <div className="flex justify-center mt-8 space-x-3">
          {whyChooseUs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === (currentSlide % whyChooseUs.length)
                  ? 'bg-[#efb958] scale-125' 
                  : 'bg-[#ead4b7]/50 hover:bg-[#ead4b7]'
              }`}
            />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="premium-cta max-w-full px-8 py-4 text-lg">
            Start Your Luxury Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;