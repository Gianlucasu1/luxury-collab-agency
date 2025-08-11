import { Plane, Hotel, Car, Anchor, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resortLuxury from '@/assets/resort-luxury.jpg';
import luxuryCar from '@/assets/luxury-car.jpg';
import yachtNight from '@/assets/yacht-night.jpg';
import jet2 from '@/assets/jet-2.jpg';
import luxuryEscape2 from '@/assets/luxury escape2.jpg';
import yacht2 from '@/assets/yacht2.jpg';

const OurOfferings = () => {
  const offerings = [
    {
      icon: Plane,
      title: 'Private Jets',
      description: 'Access to the world\'s most exclusive fleet of private aircraft',
      image: jet2,
      features: ['On-demand availability', 'Global destinations', 'Luxury amenities'],
      badge: 'Most Popular'
    },
    {
      icon: Hotel,
      title: 'Luxury Resorts',
      description: 'Curated collection of the world\'s finest hotels and resorts',
      image: luxuryEscape2,
      features: ['5-star properties', 'Exclusive suites', 'Personal butler service'],
      badge: 'Top Pick'
    },
    {
      icon: Car,
      title: 'Exotic Cars',
      description: 'Premium fleet of supercars and luxury vehicles',
      image: luxuryCar,
      features: ['Latest models', 'Professional chauffeurs', 'Flexible rentals'],
      badge: 'Limited'
    },
    {
      icon: Anchor,
      title: 'Luxury Yachts',
      description: 'Exclusive yacht charters for unforgettable maritime experiences',
      image: yacht2,
      features: ['Private crew', 'Custom itineraries', 'Gourmet dining'],
      badge: 'Exclusive'
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'VIP access to the world\'s most prestigious events',
      image: jet2,
      features: ['Private boxes', 'Meet & greets', 'Behind-the-scenes access'],
      badge: 'VIP Only'
    },
    {
      icon: Users,
      title: 'Bespoke Services',
      description: 'Fully customized experiences tailored to your desires',
      image: luxuryEscape2,
      features: ['Personal planning', 'Unique experiences', '24/7 concierge'],
      badge: 'Custom'
    }
  ];

  return (
    <section id="offerings" className="py-24 bg-elite-teal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-foreground mb-6">
            Our <span className="text-accent">Premium</span> Offerings
          </h2>
          <p className="text-xl text-muted-foreground font-secondary max-w-2xl mx-auto">
            Discover a world of unparalleled luxury and exclusive experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div 
                key={index}
                className="glass-panel rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={offering.image} 
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {offering.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-elite-teal/80 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-primary font-semibold text-foreground">
                      {offering.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground font-secondary mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full luxury-button">
                    Explore {offering.title}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;