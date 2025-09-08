import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Pic1 from '@/assets/luxurycollablogo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        ...(isScrolled ? { 
          background: 'linear-gradient(to bottom, rgba(17, 53, 62, 0.95) 0%, rgba(17, 53, 62, 0.8) 30%, rgba(17, 53, 62, 0.6) 60%, rgba(17, 53, 62, 0.3) 85%, rgba(17, 53, 62, 0.1) 95%, rgba(17, 53, 62, 0) 100%)'
        } : {})
      }}
    >
      <div className="main-container mx-auto px-0 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src={Pic1} 
                alt="The Luxury Collab Agency" 
                className="w-32 sm:w-36 lg:w-40 h-auto object-contain" 
              />
            </a>
          </div>

          {/* Navigation Links (desktop only) */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-4">
            <div className="flex items-center justify-around w-full max-w-4xl">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="relative text-white hover:text-[#efb958] transition-colors duration-300 font-secondary font-medium group max-w-[12rem] text-center leading-tight whitespace-normal break-words text-sm xl:text-base 2xl:text-lg"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#efb958] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Account Button (desktop only) */}
          <Button className="hidden lg:flex lg:place-items-center lg:justify-center premium-cta text-sm xl:text-base 2xl:text-lg px-4 py-2 xl:px-6 xl:py-3">
            Account
          </Button>

          {/* Mobile/Tablet Menu */}
          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger className={`text-[#efb958] hover:text-[#efb958]/80 transition-colors duration-200 p-1 ${isSheetOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-[#11353e] text-white border-l border-[#ffffff1a]">
                <div className="mt-16 sm:mt-20 space-y-4 sm:space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      className="block px-4 py-4 sm:py-5 rounded-md hover:bg-[#ffffff0d] transition-colors font-secondary text-base sm:text-lg md:text-xl"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-6 sm:pt-8">
                    <Button className="w-full premium-cta bg-[#11353e] hover:bg-[#11353e]/95 text-white font-semibold rounded-lg whitesand-glow text-sm sm:text-base py-3">
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