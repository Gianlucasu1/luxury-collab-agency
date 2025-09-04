import { useRef } from 'react';

const PartnersSection = () => {
  const partners = [
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
  const allPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-24 relative bg-[#11353e]">
      <div className="text-center mb-16 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-primary font-bold text-foreground mb-6">
            Our <span className="text-[#efb958]">Prestigious</span> Partners
          </h2>
        <p className="text-xl text-muted-foreground font-secondary max-w-2xl mx-auto">
            Collaborating with the world's most distinguished luxury brands
          </p>
        </div>

      {/* Full-width Continuous Slider, now in normal flow with margin and no overflow */}
      <div className="relative w-full overflow-x-hidden mt-16 mb-16">
        <div className="flex gap-8 animate-partners-scroll min-w-max h-[180px] items-center">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="glass-panel rounded-xl p-8 text-center min-w-[260px] max-w-xs flex-shrink-0 h-[160px] flex flex-col justify-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#efb958]/20 to-[#efb958]/5 rounded-full flex items-center justify-center">
                <span className="text-2xl font-primary font-bold text-[#efb958]">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-primary font-semibold text-foreground mb-1">
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground font-secondary">
                {partner.category}
              </p>
            </div>
          ))}
        </div>
        </div>

      <div className="text-center mt-16 container mx-auto px-6">
        <p className="text-muted-foreground font-secondary text-lg">
            Join our network of <span className="text-[#efb958] font-semibold">50+ premium partners</span> worldwide
          </p>
      </div>
    </section>
  );
};

export default PartnersSection;