import { useEffect, useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import heroJet from '@/assets/hero-jet.jpg';
import luxuryCar from '@/assets/luxury-car.jpg';
import resortLuxury from '@/assets/resort-luxury.jpg';
import yachtNight from '@/assets/yacht-night.jpg';

const WhyChooseUsLight = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const [instantHide, setInstantHide] = useState(false);

  const cards = [
    {
      id: 1,
      title: 'Tailored Concierge Service',
      description:
        'Every detail meticulously crafted to exceed your expectations. Our dedicated team ensures your every desire is anticipated and fulfilled with precision.',
      image: heroJet,
      location: 'Private Aviation',
    },
    {
      id: 2,
      title: 'Global Access',
      description:
        "Exclusive partnerships spanning six continents. From private islands to urban sanctuaries, we unlock doors to the world's most prestigious destinations.",
      image: luxuryCar,
      location: 'Luxury Transportation',
    },
    {
      id: 3,
      title: 'Verified Experiences',
      description:
        'Rigorously vetted partners ensuring uncompromising quality. Every experience is personally tested and curated to meet our exacting standards.',
      image: resortLuxury,
      location: 'Premium Resorts',
    },
    {
      id: 4,
      title: 'Elite Network',
      description:
        "Exclusive access to the world's most prestigious venues. Our network spans the globe, connecting you to experiences beyond imagination.",
      image: yachtNight,
      location: 'Yacht Experiences',
    },
  ];

  const handleCardClick = (index: number) => {
    setInstantHide(true);
    setExpandedIndex(index);
  };

  const handlePrevious = () => {
    setInstantHide(true);
    setExpandedIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setInstantHide(true);
    setExpandedIndex((prev) => (prev + 1) % cards.length);
  };

  // Delayed fade-in for expanded content
  useEffect(() => {
    setContentVisible(false);
    const timerId = setTimeout(() => {
      setInstantHide(false);
      setContentVisible(true);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [expandedIndex]);

  return (
    <section id="about-light" className="py-24 bg-[#f3ede5] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-[#11353e] mb-6">
            Why <span className="text-[#efb958]">Elite</span> Clients Choose Us
          </h2>
          <p className="text-xl text-[#2a6781] font-secondary max-w-2xl mx-auto">
            Experience the pinnacle of luxury with our unparalleled service standards
          </p>
        </div>

        {/* Desktop Card Slider */}
        <div className="hidden lg:block">
          <div className="relative h-[500px] max-w-7xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#11353e]/80 hover:bg-[#11353e] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#11353e]/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-[#11353e]/80 hover:bg-[#11353e] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-[#11353e]/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div className="relative h-full flex items-center">
              {cards.map((card, index) => {
                const isExpanded = index === expandedIndex;

                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(index)}
                    className={`flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer ${
                      isExpanded ? 'flex-[0_0_55%] h-full z-10' : 'flex-[0_0_15%] h-full z-0'
                    }`}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${card.image})` }}
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          isExpanded ? 'bg-black/30' : 'bg-black/45'
                        }`}
                      />

                      {/* Content */}
                      <div className="relative h-full p-8 flex flex-col justify-between">
                        {isExpanded ? (
                          // Expanded Card Content
                          <div
                            className={`transition-all ease-out ${
                              contentVisible
                                ? 'opacity-100 translate-y-0 duration-700'
                                : instantHide
                                ? 'opacity-0 translate-y-2 duration-0'
                                : 'opacity-0 translate-y-2 duration-700'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="inline-block max-w-[85%] bg-black/60 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                                <h3 className="text-3xl font-primary font-bold text-white mb-3 italic">
                                  {card.title}
                                </h3>
                                                                  <p className="text-lg text-white font-secondary leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                            <div className="border-t border-white/30 pt-4">
                              <p className="text-[#efb958] font-secondary font-semibold">
                                {card.location}
                              </p>
                            </div>
                          </div>
                        ) : (
                          // Collapsed Card Content
                          <div className="h-full flex flex-col justify-between items-center">
                            <div className="flex-1 flex items-center justify-center">
                              <p className="text-white font-secondary font-semibold text-center text-sm">
                                {card.location}
                              </p>
                            </div>
                            <div className="mb-6">
                              <div className="w-12 h-12 bg-[#efb958]/20 hover:bg-[#efb958]/40 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-[#efb958]/30">
                                <Plus className="w-6 h-6 text-[#efb958]" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Card Slider */}
        <div className="lg:hidden">
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 w-max">
              {cards.map((card) => (
                <div key={card.id} className="w-80 h-96 rounded-2xl overflow-hidden shadow-xl relative flex-shrink-0">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div className="inline-block max-w-[90%] bg-black/60 backdrop-blur-sm rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
                      <h3 className="text-2xl font-primary font-bold text-white mb-2 italic">{card.title}</h3>
                      <p className="text-white font-secondary text-sm leading-relaxed">{card.description}</p>
                    </div>
                    <div className="border-t border-white/30 pt-3">
                      <p className="text-[#efb958] font-secondary font-semibold text-sm">{card.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setExpandedIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === expandedIndex ? 'bg-[#efb958] scale-125' : 'bg-[#2a6781]/50 hover:bg-[#2a6781]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsLight;


