import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Pic1 from '@/assets/luxurycollablogo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Luxury Yachts', href: '#about' },
    { label: 'Private Jets', href: '#partners' },
    { label: 'Luxury Gateways', href: '#contact' },
    { label: 'Blog', href: '#contact' },
    { label: 'Contact US', href: '#contact' }


  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <img src={Pic1} alt="The Luxury Collab Agency" className="w-40 h-auto object-contain" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-brand-fifth hover:text-brand-tertiary transition-colors duration-300 font-secondary font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-tertiary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-brand-primary font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hidden md:block">
            Request Access
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-brand-tertiary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;