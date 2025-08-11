import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';
import luxuryCollabLogo from '@/assets/luxurycollablogo.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    'Services': [
      'Private Jets',
      'Luxury Resorts',
      'Exotic Cars',
      'Yacht Charters',
      'Exclusive Events'
    ],
    'Company': [
      'About Us',
      'Our Partners',
      'Careers',
      'Press',
      'Contact'
    ],
    'Support': [
      'Help Center',
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'Accessibility'
    ]
  };

  return (
    <footer id="contact" className="bg-elite-teal-dark pt-32 pb-8 relative">
      {/* Centered Logo with Circular Frame */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 z-10">
        <div className="w-40 h-40 bg-elite-teal-dark rounded-full border-4 border-brand-tertiary/20 shadow-xl flex items-center justify-center">
          <img 
            src={logo} 
            alt="The Luxury Collab Agency" 
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={luxuryCollabLogo} 
                alt="The Luxury Collab Agency" 
                className="w-48 h-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground font-secondary leading-relaxed mb-6">
              Connecting elite clients with the world's most exclusive experiences. Where luxury meets perfection.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <span className="font-secondary">+1 (555) 123-LUXE</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <span className="font-secondary">concierge@luxora.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span className="font-secondary">Beverly Hills, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-primary font-semibold text-accent mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 font-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-accent/20 pt-12 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-primary font-semibold text-foreground mb-4">
              Stay in the <span className="text-accent">Loop</span>
            </h3>
            <p className="text-muted-foreground font-secondary mb-6">
              Subscribe to receive exclusive offers and luxury travel insights
            </p>
            <div className="flex gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-elite-teal-light border-accent/30 text-foreground placeholder:text-muted-foreground"
              />
              <Button className="luxury-button whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground font-secondary text-sm">
                © 2024 The Luxury Collab Agency. All rights reserved. Designed for the discerning few.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;