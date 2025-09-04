import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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

  const navItems: { key: string; label: React.ReactNode; href: string }[] = [
    { key: 'about', label: 'About us', href: '/about-us' },
    { key: 'yachts', label: (<><span>Luxury Yachts</span><br /><span>&amp; Sailing</span></>), href: '/yacht-services' },
    { key: 'jets', label: 'Private Jets & Aerial Escapes', href: '/private-jets' },
    { key: 'getaways', label: 'Luxury Getaways', href: '/luxury-getaways' },
    { key: 'blog', label: 'Blog', href: '/blog' },
    { key: 'contact', label: 'Contact Us', href: '/contact-us' }
  ];

  return (
    <nav
      className={`transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        ...(isScrolled ? { 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0.1) 95%, rgba(0, 0, 0, 0) 100%)'
        } : {})
      }}
    >
      <div className="container mx-auto px-0 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <img src={Pic1} alt="The Luxury Collab Agency" className="w-40 h-auto object-contain" />
            </a>
          </div>

          {/* Navigation Links (desktop only) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-x-12 xl:gap-x-16 2xl:gap-x-20">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="relative text-white hover:text-[#efb958] transition-colors duration-300 font-secondary font-medium group max-w-[12rem] text-center leading-tight whitespace-normal break-words"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#efb958] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Account Button (desktop only) */}
          <Button className="premium-cta">
            Account
          </Button>

          {/* Mobile/Tablet Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="text-[#efb958]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[380px] bg-[#11353e] text-white border-l border-[#ffffff1a]">
                <div className="mt-10 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="block px-2 py-2 rounded-md hover:bg-[#ffffff0d] transition-colors font-secondary text-lg"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-2">
                    <Button className="w-full bg-[#11353e] hover:bg-[#11353e]/95 text-white font-semibold rounded-lg whitesand-glow">
                      Account
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;