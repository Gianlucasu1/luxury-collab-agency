import { UserCheck, Globe, Shield, Users, Clock, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const WhyChooseUs = () => {
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
            Why <span className="text-[#efb958]">Elite</span> Clients Choose Us
          </h2>
          <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
            Experience the pinnacle of luxury with our unparalleled service standards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group flex items-center justify-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-brand-tertiary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-tertiary/20 transition-colors duration-300">
                    <Icon className="w-12 h-12 text-[#efb958]" />
                  </div>
                  <h3 className="text-lg font-primary font-semibold text-brand-fifth mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-brand-quaternary font-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="premium-cta px-8 py-4 text-lg">
            Start Your Luxury Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;