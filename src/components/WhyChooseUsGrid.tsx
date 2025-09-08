import { Shield, Globe, Crown, Clock, Heart, Star } from 'lucide-react';
import logo from '@/assets/logo.png';

const WhyChooseUsGrid = () => {
  const features = [
    {
      icon: Crown,
      title: 'Tailored Concierge Service',
      description: 'Every detail meticulously crafted to exceed your expectations'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Exclusive partnerships spanning six continents'
    },
    {
      icon: Shield,
      title: 'Verified Experiences',
      description: 'Rigorously vetted partners ensuring uncompromising quality'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support for your spontaneous desires'
    },
    {
      icon: Heart,
      title: 'Bespoke Curation',
      description: 'Personalized experiences crafted for your unique preferences'
    },
    {
      icon: Star,
      title: 'Elite Network',
      description: 'Exclusive access to the world\'s most prestigious venues'
    }
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #11353e, #2a6781), linear-gradient(to bottom, rgba(17,53,62,0.6), rgba(42,103,129,0.2))',
        backgroundBlendMode: 'overlay'
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
            Why <span className="text-brand-tertiary">Elite</span> Clients Choose Us
          </h2>
          <p className="text-xl text-white font-secondary max-w-2xl mx-auto">
            Experience the pinnacle of luxury with our unparalleled service standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="glass-panel p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-tertiary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-tertiary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-brand-tertiary" />
                </div>
                <h3 className="text-xl font-primary font-semibold text-brand-fifth mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-white font-secondary text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsGrid; 