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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-elite-teal/60 via-elite-teal/40 to-elite-teal/80" />
      
      {/* Strong Radial Shadow for Maximum Text Readability */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/80 pointer-events-none z-5" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6 relative">
          {/* Semi-transparent background for text */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl backdrop-blur-sm -m-8" />
          <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-primary font-bold text-foreground mb-6 hero-text fade-in">
            Unlock the World's Most
            <span className="block text-accent">Exclusive Experiences</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-secondary font-light max-w-2xl mx-auto fade-in drop-shadow-2xl [text-shadow:_0_4px_12px_rgba(0,0,0,0.9)]">
            Private Jets, Luxury Villas, Exotic Cars – At Your Fingertips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Button className="luxury-button text-lg px-10 py-6">
              Explore Experiences
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-6 text-lg glass-panel">
              Watch Our Story
            </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Positioned at bottom of hero section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;