import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationsSection from '@/components/DestinationsSection';
import jetHero from '@/assets/yacht_main_detail.png';
import yacht1 from '@/assets/yacht_1.png';
import yacht2 from '@/assets/yacht_2.png';
import yacht3 from '@/assets/yacht_3.png';
import yachtAlt from '@/assets/yacht2.jpg';
import { Check } from 'lucide-react';
import yachtVector from '@/assets/yacht_vector.png';

const YachtDetail = () => {
  const [selectedHero, setSelectedHero] = useState<string>(jetHero);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== '1') {
            navigate('/yacht/1', { replace: true });
        }
    }, [id, navigate]);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Split-background hero: dark ocean-blue top, white bottom; image overlaps into white */}
            <section className="relative w-full">
                {/* Top dark backdrop */}
                <div className="bg-[#11353e] h-[40vh]" />

				{/* Featured image block overlapping down into the white area */}
				<div className="container mx-auto px-6 -mt-[16vh] md:-mt-[18vh] lg:-mt-[22vh] relative z-10">
                    <div className="max-w-[90rem] mx-auto">
                        {/* Full-width wrapper for layout */}
                        <div className="w-full">
                            {/* Image region at 85% width aligned right */}
                            <div className="relative w-full ml-auto">
                                {/* Main image */}
                                <img
                                    src={selectedHero}
									alt="Private jet above desert"
									className="w-full rounded-2xl shadow-2xl object-cover h-[70vh] md:h-[75vh] lg:h-[80vh] max-h-[900px]"
								/>

                                {/* Heading overlay top-left (on the image) */}
                                <div className="absolute top-3 xs:top-4 sm:top-6 md:top-8 left-3 xs:left-4 sm:left-6 md:left-8">
                                    <div className="[font-family:'Libre_Bodoni',serif] text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.02em]">
                                        Jet 9786
                                    </div>
                                    <div className="[font-family:'Libre_Bodoni',serif] text-[#efb958] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight -mt-1">
                                        Details
                                    </div>
                                </div>

                                {/* Inquire button bottom-right (on the image) */}
                                <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 right-3 xs:right-4 sm:right-6 md:right-8">
                                    <a
                                        href="#inquire"
                                        className="premium-cta inline-block px-4 xs:px-5 sm:px-6 md:px-7 py-2 xs:py-2.5 sm:py-3"
                                    >
                                        Inquire
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thumbnails row under the hero image */}
                <div className="main-container mx-auto px-6 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-10 md:pb-14">
                     <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
                         <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                             {[yacht1, yacht2, yacht3, yachtAlt].map((src, idx) => (
                                 <button
                                     key={idx}
                                     type="button"
                                     onClick={() => setSelectedHero(src)}
                                     className={`overflow-hidden rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#efb958] ${selectedHero === src ? 'border-2 border-[#efb958]' : 'border border-transparent'}`}
                                 >
                                     <img src={src} alt="Yacht thumbnail" loading="lazy" className="w-full h-16 sm:h-20 md:h-24 lg:h-28 object-cover cursor-pointer" />
                                 </button>
                             ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Description & Specs Section */}
            <section className="bg-white">
                <div className="main-container mx-auto px-6 py-12 md:py-16 lg:py-20">
                    <div className="max-w-[90rem] mx-auto">
                        <div className="w-full md:w-[72%]">
                            <h2 className="[font-family:'Libre_Bodoni',serif] text-2xl sm:text-3xl md:text-4xl font-bold text-[#11353e]">
                                Overview
                            </h2>
                            <p className="mt-4 text-gray-700 font-secondary leading-relaxed">
                                Bask in the comfort of a meticulously appointed yacht designed for effortless cruising and refined living. 
                                Expansive lounges, panoramic windows, and handcrafted finishes create a serene atmosphere for family escapes or celebratory voyages.
                            </p>
                            <p className="mt-4 text-gray-700 font-secondary leading-relaxed">
                                From sunrise breakfasts on the foredeck to starlit dinners on the aft terrace, every moment is curated to your preferences. 
                                Our experienced crew anticipates needs before they arise, ensuring a seamless, world‑class journey.
                            </p>

                            {/* Specs box */}
                            <div className="mt-8 md:mt-10 rounded-2xl border border-[#efb958]/50 bg-gray-50 p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                    {/* Left column */}
                                    <div className="space-y-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Yacht measures:</span>
                                            <span className="text-gray-700">38m length / 7.2m beam</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Maximum crew:</span>
                                            <span className="text-gray-700">8</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Maximum guests:</span>
                                            <span className="text-gray-700">12</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Engines:</span>
                                            <span className="text-gray-700">2x MTU 2000hp</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">WC / Showers:</span>
                                            <span className="text-gray-700">6 / 6</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Double cabins:</span>
                                            <span className="text-gray-700">4</span>
                                        </div>
                                    </div>
                                    {/* Right column */}
                                    <div className="space-y-3">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Beam & draft:</span>
                                            <span className="text-gray-700">7.2m / 2.1m</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Crew cabins:</span>
                                            <span className="text-gray-700">3</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Staterooms:</span>
                                            <span className="text-gray-700">5</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Cruising speed:</span>
                                            <span className="text-gray-700">18 knots</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Single cabins:</span>
                                            <span className="text-gray-700">2</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-semibold text-black">Berths:</span>
                                            <span className="text-gray-700">12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Amenities */}
                            <h3 className="mt-10 md:mt-12 [font-family:'Libre_Bodoni',serif] text-xl sm:text-2xl font-bold text-[#11353e]">
                                Amenities & Comforts
                            </h3>
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                  'Sun deck lounge',
                                  'Outdoor dining table',
                                  'Stabilizers at anchor',
                                  'Wi‑Fi & streaming',
                                  'Water toys set',
                                  'Fully stocked bar',
                                ].map((item) => (
                                  <span key={item} className="inline-block rounded-full border border-[#efb958]/40 px-3 py-1 text-sm text-[#11353e] bg-white">
                                    {item}
                                  </span>
                                ))}
                            </div>

                            {/* Highlights */}
                            <h3 className="mt-10 [font-family:'Libre_Bodoni',serif] text-xl sm:text-2xl font-bold text-[#11353e]">
                                Voyage Highlights
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {[
                                  'Chef‑crafted menus tailored to your tastes',
                                  'Custom itineraries across iconic coastlines',
                                  'Dedicated concierge for on‑shore reservations',
                                  'Quiet cabins with premium linens',
                                ].map((h, i) => (
                                  <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1 text-[#efb958]"><Check size={18} /></span>
                                    <span className="font-secondary leading-relaxed">{h}</span>
                                  </li>
                                ))}
                            </ul>

                            {/* Additional description */}
                            <p className="mt-8 text-gray-700 font-secondary leading-relaxed">
                                Whether a weekend escape or a multi‑week exploration, our team handles every detail—from provisioning and permits to experiences ashore—
                                so you can relax and enjoy the journey.
                            </p>

                            {/* CTA */}
                            <div className="mt-8 flex justify-start">
                                <a
                                    href="#book"
                                    className="premium-cta inline-block px-7 py-3"
                                >
                                    Book Now
                                </a>
                            </div>

                            {/* Requirements */}
                            <div className="mt-12 md:mt-14">
                                <h3 className="[font-family:'Libre_Bodoni',serif] text-xl sm:text-2xl md:text-3xl font-bold text-[#11353e]">
                                    Requirements for this Booking
                                </h3>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        'Valid identification and booking confirmation',
                                        'Security deposit prior to embarkation',
                                        'Compliance with onboard safety briefing',
                                        'Adherence to crew instructions and maritime regulations',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <span className="mt-1 text-[#efb958]"><Check size={18} /></span>
                                            <span className="font-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <DestinationsSection />


			{/* Contact Section */}
            <section
                className="pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36"
                style={{
                    background: 'linear-gradient(to bottom, #11353e 0%, #11353e 40%, #14404a 60%, #1a4f5c 75%, #20596a 85%, #266276 95%, #2a6781 100%)'
                }}
            >
                <div className="main-container mx-auto px-6">
                    <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left: Heading */}
                        <div className="text-center md:text-left">
                            <img src={yachtVector} alt="" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto mb-4 mx-auto md:mx-0" />
                            <div
                                className="text-white font-primary font-bold tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1]"
                                style={{
                                    fontFamily: 'Libre Bodoni, serif',
                                }}
                            >
                                Have Questions?
                            </div>
                            <div
                                className="text-[#efb958] -mt-1 font-primary font-bold tracking-[-0.01em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1]"
                                style={{
                                    fontFamily: 'Libre Bodoni, serif',
                                }}
                            >
                                Get in Touch
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="p-4 sm:p-6 lg:p-8">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
                                <div>
                                    <label htmlFor="fullname" className="block text-sm sm:text-base font-medium text-white mb-2">Full Name</label>
                                    <input
                                        id="fullname"
                                        type="text"
                                        className="w-full rounded-lg border border-[#efb958]/60 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full rounded-lg border border-[#efb958]/60 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="details" className="block text-sm sm:text-base font-medium text-white mb-2">Request Details</label>
                                    <textarea
                                        id="details"
                                        rows={4}
                                        className="w-full rounded-lg border border-[#efb958]/60 px-4 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base resize-none"
                                        placeholder="Tell us about your ideal itinerary, dates, and preferences"
                                        required
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="premium-cta inline-block w-full px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default YachtDetail;


