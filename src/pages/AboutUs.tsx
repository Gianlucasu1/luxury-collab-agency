import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  ChevronRight
} from 'lucide-react';
import heroJet from '@/assets/hero-jet.jpg';
import luxuryCar from '@/assets/luxury-car.jpg';
import resortLuxury from '@/assets/resort-luxury.jpg';
import yachtNight from '@/assets/yacht-night.jpg';
import logo from '@/assets/logo.png';

const AboutUs = () => {
  const [philosophyIndex, setPhilosophyIndex] = useState(0);

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroJet})` }}
        />
        <div className="absolute inset-0 bg-brand-primary opacity-70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-primary font-bold text-brand-fifth mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Crafting Experiences 
            <span className="text-brand-tertiary block mt-2">Rooted in Meaning</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-quaternary font-secondary leading-relaxed max-w-2xl mx-auto">
            Where luxury meets purpose, and every detail tells your unique story.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden backdrop-blur-[20px] border border-brand-tertiary/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" 
                   style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
                <img 
                  src={resortLuxury} 
                  alt="Our Story" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-tertiary rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-brand-primary" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
                  Our <span className="text-brand-tertiary">Story</span>
                </h2>
                <Separator className="w-16 h-1 bg-brand-tertiary mb-8" />
              </div>
              
              <div className="space-y-6 text-brand-quaternary font-secondary leading-relaxed">
                <p className="text-lg">
                  <span className="text-5xl font-primary text-brand-tertiary float-left mr-3 leading-none">F</span>
                  ounded in 2018 with a vision to transform how luxury experiences are conceived and delivered, 
                  The Luxury Collab Agency emerged from a simple belief: that every experience should be as unique as the 
                  individuals at its heart.
                </p>
                
                <blockquote className="border-l-4 border-brand-tertiary pl-6 py-4 bg-brand-primary/50 rounded-r-lg">
                  <p className="text-lg italic text-brand-tertiary">
                    "We don't just arrange experiences; we craft legacies that transcend generations."
                  </p>
                  <cite className="text-sm text-brand-quaternary">— Victoria Chen, Founder</cite>
                </blockquote>
                
                <p className="text-lg">
                  Our journey began with intimate gatherings and has evolved into orchestrating 
                  world-class experiences across six continents, always maintaining our commitment 
                  to authenticity, excellence, and emotional resonance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Our <span className="text-brand-tertiary">Specializations</span>
            </h2>
            <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
              Dedicated expertise across the spectrum of luxury experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {niches.map((niche, index) => {
              const Icon = niche.icon;
              return (
                <div 
                  key={index}
                  className="rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden backdrop-blur-[20px] border border-brand-tertiary/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${niche.image})` }}
                  />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-brand-tertiary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-tertiary/30 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-brand-tertiary" />
                    </div>
                    <h3 className="text-xl font-primary font-semibold text-brand-fifth mb-4">
                      {niche.title}
                    </h3>
                    <p className="text-brand-quaternary font-secondary leading-relaxed">
                      {niche.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Our <span className="text-brand-tertiary">Process</span>
            </h2>
            <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
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
                    <stop offset="0%" stopColor="#feb958" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#feb958" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#feb958" stopOpacity="0.3" />
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
                    <div className="rounded-2xl p-8 hover:scale-105 transition-all duration-500 h-full backdrop-blur-[20px] border border-brand-tertiary/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                         style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
                      <div className="w-16 h-16 bg-brand-tertiary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-sm font-secondary font-semibold text-brand-tertiary tracking-wider">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-primary font-semibold text-brand-fifth mt-2">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-brand-quaternary font-secondary leading-relaxed">
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

      {/* Our Philosophy */}
      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Our <span className="text-brand-tertiary">Philosophy</span>
            </h2>
            <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
              The four pillars that guide every experience we create
            </p>
          </div>

          {/* Philosophy Slider */}
          <div className="hidden lg:block">
            <div className="relative h-[500px] max-w-7xl mx-auto">
              {/* Navigation Buttons */}
              <button
                onClick={() => setPhilosophyIndex((prev) => (prev - 1 + philosophyPillars.length) % philosophyPillars.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-tertiary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-tertiary/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setPhilosophyIndex((prev) => (prev + 1) % philosophyPillars.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-brand-secondary/80 hover:bg-brand-secondary text-brand-tertiary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-brand-tertiary/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Cards Container */}
              <div className="relative h-full flex items-center">
                {philosophyPillars.map((pillar, index) => {
                  const isExpanded = index === philosophyIndex;

                  return (
                    <div
                      key={pillar.id}
                      onClick={() => setPhilosophyIndex(index)}
                      className={`flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer ${
                        isExpanded 
                          ? 'flex-[0_0_55%] h-full z-10' 
                          : 'flex-[0_0_15%] h-full z-0'
                      }`}
                    >
                      <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${pillar.image})` }}
                        />
                        
                        {/* Overlay */}
                        <div className={`absolute inset-0 transition-all duration-500 ${
                          isExpanded ? 'bg-black/40' : 'bg-black/60'
                        }`} />
                        
                        {/* Content */}
                        <div className="relative h-full p-8 flex flex-col justify-between">
                          {isExpanded ? (
                            // Expanded Card Content
                            <>
                              <div className="flex-1">
                                <div className="w-16 h-16 bg-brand-tertiary/20 rounded-full flex items-center justify-center mb-6">
                                  <pillar.icon className="w-8 h-8 text-brand-tertiary" />
                                </div>
                                <h3 className="text-3xl font-primary font-bold text-brand-fifth mb-4 italic">
                                  {pillar.title}
                                </h3>
                                <p className="text-lg text-brand-quaternary font-secondary leading-relaxed">
                                  {pillar.description}
                                </p>
                              </div>
                              <div className="border-t border-brand-tertiary/30 pt-4">
                                <p className="text-brand-tertiary font-secondary font-semibold">
                                  {pillar.subtitle}
                                </p>
                              </div>
                            </>
                          ) : (
                            // Collapsed Card Content
                            <div className="h-full flex flex-col justify-between items-center">
                              <div className="flex-1 flex items-center justify-center">
                                <p className="text-brand-fifth font-secondary font-semibold text-center text-sm">
                                  {pillar.subtitle}
                                </p>
                              </div>
                              <div className="mb-6">
                                <div className="w-12 h-12 bg-brand-tertiary/20 hover:bg-brand-tertiary/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-brand-tertiary/30">
                                  <pillar.icon className="w-6 h-6 text-brand-tertiary" />
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

          {/* Mobile Philosophy Grid */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophyPillars.map((pillar, index) => (
                <div
                  key={pillar.id}
                  className="rounded-2xl overflow-hidden shadow-xl relative h-64"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${pillar.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-brand-tertiary/20 rounded-full flex items-center justify-center mb-4">
                        <pillar.icon className="w-6 h-6 text-brand-tertiary" />
                      </div>
                      <h3 className="text-xl font-primary font-bold text-brand-fifth mb-2 italic">
                        {pillar.title}
                      </h3>
                      <p className="text-brand-quaternary font-secondary text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="border-t border-brand-tertiary/30 pt-3">
                      <p className="text-brand-tertiary font-secondary font-semibold text-sm">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {philosophyPillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setPhilosophyIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === philosophyIndex 
                    ? 'bg-brand-tertiary scale-125' 
                    : 'bg-brand-quaternary/50 hover:bg-brand-quaternary'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curators of Excellence */}
      <section className="py-20 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Curators of <span className="text-brand-tertiary">Excellence</span>
            </h2>
            <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
              Meet the visionaries behind every extraordinary experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 backdrop-blur-[20px] border border-brand-tertiary/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                   style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-brand-tertiary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-brand-tertiary" />
                  </div>
                  <div className="absolute top-0 right-4 bg-brand-tertiary px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-brand-primary">
                      {member.badge}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-primary font-semibold text-brand-fifth mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-tertiary font-secondary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-brand-quaternary font-secondary">
                  {member.credential}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
              Trusted <span className="text-brand-tertiary">Partnerships</span>
            </h2>
            <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
              Collaborating with the world's most prestigious brands
            </p>
          </div>
        </div>

        {/* Full-width Continuous Slider - spans entire screen */}
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

        <div className="container mx-auto px-6">
          <div className="text-center mt-16">
            <p className="text-brand-quaternary font-secondary text-lg">
              Join our network of <span className="text-brand-tertiary font-semibold">50+ premium partners</span> worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 pb-32 bg-brand-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
                Let's Begin the <span className="text-brand-tertiary">Conversation</span>
              </h2>
              <p className="text-xl text-brand-quaternary font-secondary">
                Share your vision with us, and let's create something extraordinary together.
              </p>
            </div>
            
            <div className="rounded-2xl p-8 md:p-12 backdrop-blur-[20px] border border-brand-tertiary/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                 style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      placeholder="Your Name"
                      className="bg-brand-secondary border-brand-tertiary/30 text-brand-fifth placeholder:text-brand-quaternary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email Address"
                      className="bg-brand-secondary border-brand-tertiary/30 text-brand-fifth placeholder:text-brand-quaternary"
                    />
                  </div>
                </div>
                
                <Textarea 
                  placeholder="Tell us about your vision..."
                  rows={6}
                  className="bg-brand-secondary border-brand-tertiary/30 text-brand-fifth placeholder:text-brand-quaternary resize-none"
                />
                
                <div className="text-center">
                  <Button className="relative overflow-hidden bg-brand-tertiary text-brand-primary px-12 py-4 text-lg rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_-5px_rgba(255,215,0,0.3)]">
                    Start Our Journey Together
                  </Button>
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