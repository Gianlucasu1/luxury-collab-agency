import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/white_logo.png';
import luxuryCollabLogo from '@/assets/white_logo_complete.png';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    'Services': [
      { label: 'Luxury Yachts & Sailing', href: '/yacht-services' },
      { label: 'Private Jets & Aerial Escapes', href: '/private-jets' },
      { label: 'Luxury Getaways', href: '/luxury-getaways' },
    ],
    'Company': [
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '#' },
      { label: 'Blog', href: '/blog' },
    ],
    'Support': [
      { label: 'Help Center', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ]
  } as const;

  return (
    <footer id="contact" className="bg-[#11353e] pt-32 pb-8 relative">
      {/* Centered Logo with Circular Frame */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 z-10">
        <div className="w-48 h-48 bg-[#11353e] rounded-full flex items-center justify-center">
          <img
            src={logo}
            alt="The Luxury Collab Agency"
            className="w-36 h-36 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* First Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={luxuryCollabLogo}
                alt="The Luxury Collab Agency"
                className="w-48 h-auto object-contain"
              />
            </div>
            <p className="text-white font-secondary leading-relaxed mb-6">
              Connecting elite clients with the world's most exclusive experiences. Where luxury meets perfection.
            </p>
          </div>

          {/* Links Sections (middle) with separators */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <div key={category} className={`${idx > 0 ? 'sm:border-l sm:border-white/20 sm:pl-6' : ''} text-center`}>
                <h3 className="text-xl text-[#efb958] font-primary font-semibold mb-6">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white hover:text-[#efb958] transition-colors duration-300 font-secondary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Last section: Social + Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex space-x-6 mb-6 justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-white/90 hover:text-[#efb958] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-4">
              <div className="flex items-start text-white">
                <MapPin className="w-5 h-5 mr-3 text-[#efb958] flex-shrink-0 mt-0.5" />
                <span className="font-secondary">Location in the US</span>
              </div>
              <div className="flex items-start text-white">
                <Mail className="w-5 h-5 mr-3 text-[#efb958] flex-shrink-0 mt-0.5" />
                <span className="font-secondary text-sm lg:text-base whitespace-nowrap">
                  contact@theluxurycollabagency.com
                </span>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
