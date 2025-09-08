import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  Heart, 
  Award, 
  Users, 
  Target, 
  Compass,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Crown,
  Diamond,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';
import heroJet from '@/assets/hero-jet.jpg';
import luxuryCar from '@/assets/luxury-car.jpg';
import resortLuxury from '@/assets/resort-luxury.jpg';
import aboutUsStory from '@/assets/about-us-story.jpg';
import yachtNight from '@/assets/yacht-night.jpg';
import logo from '@/assets/logo.png';
import whiteLogo from '@/assets/white_logo.png';
import whysail from '@/assets/whysail.png';
import waterBg from '@/assets/water_bg.png';

const AboutUs = () => {
  const [philosophyIndex, setPhilosophyIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [instantHide, setInstantHide] = useState(false);

  // Partners data for the continuous slider
  const partnersData = [
    { name: 'Rolls Royce', category: 'Automotive' },
    { name: 'Aman Resorts', category: 'Hospitality' },
    { name: 'NetJets', category: 'Aviation' },
    { name: 'Four Seasons', category: 'Hotels' },
    { name: 'Bugatti', category: 'Supercars' },
    { name: 'Ritz Carlton', category: 'Luxury Hotels' },
    { name: 'Gulfstream', category: 'Private Jets' },
    { name: 'Sunseeker', category: 'Yachts' }
  ];

  // Duplicate the partners array for seamless infinite scroll
  const allPartners = [...partnersData, ...partnersData];

  const philosophyPillars = [
    {
      id: 1,
      title: "Authenticity",
      description: "Every experience we create reflects the genuine essence of our clients, celebrating their unique story and vision.",
      subtitle: "Genuine Essence",
      icon: Heart,
      image: heroJet
    },
    {
      id: 2,
      title: "Excellence",
      description: "We pursue perfection in every detail, from the grandest gesture to the most subtle touch that makes all the difference.",
      subtitle: "Perfection in Detail",
      icon: Crown,
      image: luxuryCar
    },
    {
      id: 3,
      title: "Legacy",
      description: "We create moments that transcend time, becoming cherished memories that will be treasured for generations to come.",
      subtitle: "Timeless Memories",
      icon: Star,
      image: resortLuxury
    },
    {
      id: 4,
      title: "Innovation",
      description: "Pioneering new frontiers in luxury while honoring timeless traditions and creating experiences that push boundaries.",
      subtitle: "Pioneering Luxury",
      icon: Sparkles,
      image: yachtNight
    }
  ];

  const niches = [
    {
      icon: Heart,
      title: "Private Aviation",
      description: "Exclusive access to the world's most prestigious private jets and helicopter services.",
      image: heroJet
    },
    {
      icon: Sparkles,
      title: "Luxury Transportation",
      description: "Bespoke ground transportation with exotic cars and chauffeured services.",
      image: luxuryCar
    },
    {
      icon: Crown,
      title: "Premium Resorts",
      description: "Curated selection of the world's most exclusive hotels and resorts.",
      image: resortLuxury
    },
    {
      icon: Diamond,
      title: "Yacht Experiences",
      description: "Private yacht charters and maritime adventures in pristine waters.",
      image: yachtNight
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin with deep listening, understanding your vision, dreams, and unique story.",
      icon: Compass
    },
    {
      number: "02", 
      title: "Design",
      description: "Our team crafts a bespoke experience that reflects your personality and exceeds expectations.",
      icon: Target
    },
    {
      number: "03",
      title: "Coordination",
      description: "Every detail is meticulously planned and executed with precision and care.",
      icon: Users
    },
    {
      number: "04",
      title: "Celebration",
      description: "We ensure your moment unfolds flawlessly, allowing you to be fully present.",
      icon: Star
    }
  ];

  const team = [
    {
      name: "Victoria Chen",
      role: "Founder & Creative Director",
      credential: "15+ Years of Luxury Experiences",
      badge: "Award-winning"
    },
    {
      name: "Marcus Wellington",
      role: "Head of Aviation",
      credential: "Former Private Jet Executive",
      badge: "Certified"
    },
    {
      name: "Isabella Rodriguez",
      role: "Lead Concierge",
      credential: "International Service Awards",
      badge: "Certified"
    }
  ];

  const partners = [
    "NetJets", "Four Seasons", "Rolls-Royce", "Aman Resorts",
    "Bentley", "Ritz-Carlton", "Edition Hotels", "Rosewood"
  ];

  const handleCardClick = (index: number) => {
    setInstantHide(true);
    setExpandedIndex(index);
  };

  const handlePrevious = () => {
    setInstantHide(true);
    setExpandedIndex((prev) => (prev - 1 + niches.length) % niches.length);
  };

  const handleNext = () => {
    setInstantHide(true);
    setExpandedIndex((prev) => (prev + 1) % niches.length);
  };

  // Show expanded card content with a delayed fade-in
  useEffect(() => {
    setContentVisible(false);
    setInstantHide(true);
    const timerId = setTimeout(() => {
      setInstantHide(false);
      // Add a small delay to ensure the element is rendered before starting fade-in
      setTimeout(() => {
        setContentVisible(true);
      }, 50);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [expandedIndex]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroJet})` }}
        />
        <div className="absolute inset-0 bg-brand-primary opacity-70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-brand-fifth mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Crafting Experiences 
            <span className="text-[#efb958] block mt-2">Rooted in Meaning</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white font-secondary leading-relaxed max-w-2xl mx-auto">
            Where luxury meets purpose, and every detail tells your unique story.
          </p>
        </div>
      </section>

      {/* Combined gradient wrapper for Our Story + Our Specializations */}
      <section className="bg-gradient-to-b from-brand-primary to-brand-secondary">
      {/* Who We Are */}
      <section className="py-12 sm:py-16 md:py-20 bg-transparent relative">
        <div className="main-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image on the left with responsive height */}
            <div className="relative order-1 lg:order-1">
              <div className="rounded-2xl overflow-hidden backdrop-blur-[20px] border border-brand-tertiary/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" 
                   style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
                <img 
                  src={aboutUsStory} 
                  alt="Who We Are" 
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                />
              </div>
            </div>
            
            {/* Right section with logo, title and text content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-2 relative flex flex-col justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
              {/* Title and Logo centered in right section */}
              <div className="text-center lg:text-left mb-6 md:mb-8">
                {/* Circular monogram logo above title */}
                <div className="flex justify-center lg:justify-start mb-4 md:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#efb958] rounded-full flex items-center justify-center shadow-lg">
                    <img 
                      src={whiteLogo} 
                      alt="The Luxury Collab Agency" 
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-bold text-white mb-4 md:mb-6">
                  Who <span className="text-[#efb958]">We Are</span>
                </h2>
                <Separator className="w-12 sm:w-16 h-1 bg-[#efb958] mb-6 md:mb-8 mx-auto lg:mx-0" />
              </div>

              {/* Text content with dark background */}
              <div className="relative">
                {/* Dark semi-transparent background for text */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl -m-4 sm:-m-6 p-4 sm:p-6 backdrop-blur-sm"></div>
                
                <div className="relative z-10 space-y-4 md:space-y-6 text-white/90 font-secondary leading-relaxed">
                  <p className="text-base sm:text-lg">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-primary text-[#efb958] float-left mr-2 sm:mr-3 leading-none">F</span>
                    ounded in 2018 with a vision to transform how luxury experiences are conceived and delivered, 
                    The Luxury Collab Agency emerged from a simple belief: that every experience should be as unique as the 
                    individuals at its heart.
                  </p>
                  
                  <blockquote className="border-l-4 border-[#efb958] pl-4 sm:pl-6 py-3 sm:py-4 bg-black/30 rounded-r-lg backdrop-blur-sm">
                    <p className="text-base sm:text-lg italic text-[#efb958]">
                      "We don't just arrange experiences; we craft legacies that transcend generations."
                    </p>
                    <cite className="text-xs sm:text-sm text-white/70">— Victoria Chen, Founder</cite>
                  </blockquote>
                  
                  <p className="text-base sm:text-lg">
                    Our journey began with intimate gatherings and has evolved into orchestrating 
                    world-class experiences across six continents, always maintaining our commitment 
                    to authenticity, excellence, and emotional resonance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced gold bar - responsive positioning */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/12 right-1/12 h-4 sm:h-6 md:h-8 bg-gradient-to-r from-transparent via-[#efb958] to-transparent"></div>
      </section>

      {/* Niches */}
      <section className="py-20 bg-transparent">
        <div className="main-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Our <span className="text-[#efb958]">Specializations</span>
            </h2>
            <p className="text-xl text-white font-secondary max-w-2xl mx-auto">
              Dedicated expertise across the spectrum of luxury experiences
            </p>
          </div>
          
          {/* Desktop Card Slider - Responsive */}
          <div className="hidden lg:block">
            <div className="relative max-w-full overflow-hidden">
              {/* Navigation Buttons - Inside container */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-tertiary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-tertiary/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-tertiary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-tertiary/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Cards Container - Responsive height */}
              <div className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center">
                {niches.map((niche, index) => {
                  const isExpanded = index === expandedIndex;
                  const Icon = niche.icon;

                  return (
                    <div
                      key={niche.title}
                      onClick={() => handleCardClick(index)}
                      className={`flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer ${
                        isExpanded 
                          ? 'flex-[0_0_60%] h-full z-10' 
                          : 'flex-[0_0_20%] h-full z-0'
                      }`}
                    >
                      <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group mx-2">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${niche.image})` }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 transition-all duration-500 ${
                          isExpanded 
                            ? 'bg-gradient-to-t from-black via-black/50 to-transparent' 
                            : 'bg-gradient-to-t from-black via-black/60 to-transparent'
                        }`} />
                        
                        {/* Content */}
                        <div className="relative h-full p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                          {isExpanded ? (
                            // Expanded Card Content
                            !instantHide && (
                              <div
                                className={`transition-all ease-out mb-4 duration-1000 ${
                                  contentVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                }`}
                                style={{
                                  transitionProperty: 'opacity, transform',
                                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                              >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-tertiary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-brand-tertiary" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-primary font-bold text-white mb-3 sm:mb-4 italic">
                                  {niche.title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-white font-secondary leading-relaxed">
                                  {niche.description}
                                </p>
                              </div>
                            )
                          ) : (
                            // Collapsed Card Content
                            <div className="h-full flex flex-col justify-between items-center">
                              <div className="flex-1 flex items-center justify-center">
                                <p className="text-white font-secondary font-semibold text-center text-xs sm:text-sm">
                                  {niche.title}
                                </p>
                              </div>
                              <div className="mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-tertiary/20 hover:bg-brand-tertiary/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-brand-tertiary/30">
                                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-tertiary" />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Card Slider - Responsive */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Navigation Buttons for Mobile/Tablet */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-tertiary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-tertiary/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-tertiary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-tertiary/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Mobile Slider Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${expandedIndex * 100}%)` }}
                >
                  {niches.map((niche, index) => {
                    const Icon = niche.icon;
                    return (
                      <div
                        key={niche.title}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl relative">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${niche.image})` }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                          
                          <div className="relative h-full p-4 sm:p-6 flex flex-col justify-end">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-tertiary/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-tertiary" />
                            </div>
                            <div className="mb-4">
                              <h3 className="text-xl sm:text-2xl font-primary font-bold text-white mb-2 sm:mb-3 italic">
                                {niche.title}
                              </h3>
                              <p className="text-white font-secondary text-sm sm:text-base leading-relaxed">
                                {niche.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {niches.map((_, index) => (
              <button
                key={index}
                onClick={() => setExpandedIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === expandedIndex 
                    ? 'bg-brand-tertiary scale-125' 
                    : 'bg-brand-quaternary/50 hover:bg-brand-quaternary'
                }`}
              />
            ))}
          </div>

          {/* Fallback Grid for Very Small Screens */}
          <div className="sm:hidden mt-8">
            <div className="grid grid-cols-1 gap-4">
              {niches.map((niche, index) => {
                const Icon = niche.icon;
                return (
                  <div
                    key={niche.title}
                    className="h-64 rounded-2xl overflow-hidden shadow-xl relative"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${niche.image})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    <div className="relative h-full p-4 flex flex-col justify-end">
                      <div className="w-8 h-8 bg-brand-tertiary/20 rounded-full flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-brand-tertiary" />
                      </div>
                      <div className="mb-4">
                        <h3 className="text-lg font-primary font-bold text-white mb-2 italic">
                          {niche.title}
                        </h3>
                        <p className="text-white font-secondary text-xs leading-relaxed">
                          {niche.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </section>

      {/* Why Sail With Us Section */}
      <section className="py-20 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <img 
              src={whysail} 
              alt="Why Sail With Us" 
              className="w-[100%] mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${waterBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-brand-secondary/70 to-brand-secondary/50" />
        <div className="main-container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Our <span className="text-[#efb958]">Process</span>
            </h2>
            <p className="text-xl text-white font-secondary max-w-2xl mx-auto">
              A methodical approach to creating extraordinary experiences
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Luxury Arrow Path */}
            <div className="absolute inset-0 pointer-events-none">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 1600 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Extended Parabolic Arrow Path - Starting from screen edge */}
                <path 
                  d="M -100 150 Q 100 100 300 150 Q 500 200 700 150 Q 900 100 1100 150 Q 1300 180 1500 200" 
                  stroke="url(#goldGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
                
                {/* Arrow Head */}
                <path 
                  d="M 1490 195 L 1500 200 L 1490 205" 
                  stroke="url(#goldGradient)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#efb958" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#efb958" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#efb958" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Glow Effect */}
                <path 
                  d="M -100 150 Q 100 100 300 150 Q 500 200 700 150 Q 900 100 1100 150 Q 1300 180 1500 200" 
                  stroke="url(#goldGradient)" 
                  strokeWidth="8" 
                  fill="none"
                  opacity="0.3"
                  filter="blur(4px)"
                />
              </svg>
            </div>
            
            {/* Logo at the very end of the section */}
            <div className="absolute -bottom-8 -right-8 z-20">
              <div className="w-24 h-24 bg-brand-tertiary/20 rounded-full flex items-center justify-center border-2 border-brand-tertiary/40 backdrop-blur-sm shadow-lg">
                <img 
                  src={logo} 
                  alt="The Luxury Collab Agency" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="rounded-2xl p-8 hover:scale-105 transition-all duration-500 h-full bg-white shadow-xl border border-gray-200">
                      <div className="w-16 h-16 bg-[#efb958] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm font-secondary font-semibold text-[#efb958] tracking-wider">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-primary font-bold text-gray-700 mt-2">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-700 font-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>




      {/* Partners - Commented out for now */}
      {/*
      <section className="py-20 bg-brand-primary">
        <div className="main-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Trusted <span className="text-[#efb958]">Partnerships</span>
            </h2>
            <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
              Collaborating with the world's most prestigious brands
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-x-hidden mt-16 mb-16">
          <div className="flex gap-8 animate-partners-scroll min-w-max h-[180px] items-center">
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="glass-panel rounded-xl p-8 text-center min-w-[260px] max-w-xs flex-shrink-0 h-[160px] flex flex-col justify-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-brand-tertiary/20 to-brand-tertiary/5 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-primary font-bold text-brand-tertiary">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-primary font-semibold text-brand-fifth mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-brand-quaternary font-secondary">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="main-container mx-auto px-6">
          <div className="text-center mt-16">
            <p className="text-brand-quaternary font-secondary text-lg">
              Join our network of <span className="text-[#efb958] font-semibold">50+ premium partners</span> worldwide
            </p>
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section
        className="relative overflow-hidden py-16 pb-24 sm:py-20 md:py-28 lg:py-36"
        style={{
          backgroundImage: `url(${yachtNight})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 main-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Heading */}
            <div className="text-center lg:text-left">
              <img src={logo} alt="" className="w-24 sm:w-32 lg:w-36 h-auto mb-4 mx-auto lg:mx-0" />
              <div
                className="text-white font-primary font-bold tracking-[-0.01em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1]"
                style={{
                  fontFamily: 'Libre Bodoni, serif',
                }}
              >
                Have Questions?
              </div>
              <div
                className="text-[#efb958] -mt-1 font-primary font-bold tracking-[-0.01em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1]"
                style={{
                  fontFamily: 'Libre Bodoni, serif',
                }}
              >
                Get in Touch
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-4 sm:p-6 lg:p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="fullname" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    className="w-full rounded-lg border border-white/30 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-white/30 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Request Details
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    className="w-full rounded-lg border border-white/30 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base resize-none"
                    placeholder="Tell us about your ideal itinerary, dates, and preferences"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="premium-cta inline-block w-full px-6 sm:px-7 py-3 text-sm sm:text-base"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs; 