import brandLogo from '@/assets/luxurycollablogo.png';
import heroJet from '@/assets/hero-jet.jpg';

const ComingSoon = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroJet})` }}
        />
        {/* Overlay using provided colors: Dark blue (#11353e) and Nordic Tide (#2a6781) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(17,53,62,0.70), rgba(42,103,129,0.45), rgba(17,53,62,0.85))',
          }}
        />
        {/* Radial Shadow */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-3xl w-full text-center">
            {/* Enlarged logo inside circle with tighter padding, using gold (#efb958) and Nordic Tide (#2a6781) */}
            <div
              className="mx-auto mb-10 w-56 h-56 rounded-full flex items-center justify-center backdrop-blur-sm border-2"
              style={{ backgroundColor: '#2a6781', borderColor: '#efb958' }}
            >
              <img src={brandLogo} alt="The Luxury Collab Agency" className="w-44 h-44 object-contain" />
            </div>
            <h1 className="text-5xl md:text-7xl font-primary font-bold text-white mb-4">
              Coming <span className="text-[#efb958]">Soon</span>
            </h1>
            <p className="text-lg md:text-xl text-white font-secondary">
              We’re putting the final touches on our new website. Please check back soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
