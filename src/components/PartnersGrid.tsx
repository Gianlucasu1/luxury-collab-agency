import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import luxuryCollabLogoPng from '@/assets/luxurycollablogo.png';
import luxuryCollabLogoWebp from '@/assets/luxurycollablogo.webp';
import whiteLogo from '@/assets/lc_logo.png';

const PartnersGrid = () => {
  const partners = [
    { name: 'The Luxury Collab', logo: luxuryCollabLogoPng },
    { name: 'The Luxury Collab (WebP)', logo: whiteLogo },
    { name: 'TLCA Monogram', logo: logo },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #11353e, #2a6781)',
        opacity: '0.9',
      }}
    >
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <img
          src={whiteLogo}
          alt="The Luxury Collab Agency Background"
          className="w-[500px] h-auto object-contain"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-brand-fifth mb-6">
            Our Prestigious <span className="text-[#efb958]">Partners</span>
          </h2>
          <p className="text-xl text-brand-quaternary font-secondary max-w-2xl mx-auto">
            Trusted collaborations powering unparalleled luxury experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-8 rounded-2xl hover:scale-105 transition-all duration-300 group flex items-center justify-center backdrop-blur-[20px] border border-white/10"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-tertiary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-tertiary/20 transition-colors duration-300">
                  <img src={partner.logo} alt={partner.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-lg font-primary font-semibold text-brand-fifth">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="premium-cta px-8 py-4 text-lg">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersGrid;