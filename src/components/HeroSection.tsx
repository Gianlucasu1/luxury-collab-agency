import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroJet from '@/assets/hero-jet.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroJet})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Overlay - Dark blue and Nordic Tide */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #11353eB3, #2a678173, #11353eD9)',
        }}
      />
      
      {/* Strong Radial Shadow for Maximum Text Readability (hex colors only) */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: 'radial-gradient(circle at center, #0000 0%, #0000 60%, #000000CC 100%)'
        }}
      />
      
      {/* Content (constrained) */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto relative">
          {/* Semi-transparent background for text */}
          <div
            className="absolute inset-0 rounded-2xl -m-8"
            style={{ backgroundColor: '#00000033' }}
          />
          <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-primary font-bold text-white mb-6 hero-text fade-in">
            Unlock the World's Most
            <span className="block text-[#efb958]">Exclusive Experiences</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-secondary font-light max-w-2xl mx-auto fade-in drop-shadow-2xl [text-shadow:_0_4px_12px_rgba(0,0,0,0.9)]">
            Private Jets, Luxury Villas, Exotic Cars – At Your Fingertips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Button className="premium-cta-dark text-lg px-10 py-6">
              Explore Experiences
            </Button>
            <Button className="premium-cta text-lg px-10 py-6">
              Watch Our Story
            </Button>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Positioned at bottom of hero section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#efb958' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#efb958' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;