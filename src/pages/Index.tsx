import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhyChooseUsGrid from '@/components/WhyChooseUsGrid';
import OurOfferings from '@/components/OurOfferings';
import VideoSection from '@/components/VideoSection';
import TestimonialSection from '@/components/TestimonialSection';
import PartnersSection from '@/components/PartnersSection';
import PartnersGrid from '@/components/PartnersGrid';
import Footer from '@/components/Footer';
import BlogSubscription from '@/components/BlogSubscription';
import { Button } from '@/components/ui/button';
import yachtFooterCover from '@/assets/yacht_footer_cover.png';
import WhyChooseUsLight from '@/components/WhyChooseUsLight';
import yachtVector from '@/assets/yacht_vector.png';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurOfferings />
      <VideoSection />
      <WhyChooseUs />
      {/*
      <WhyChooseUsLight />
      {/*
      <WhyChooseUsGrid />
       */}
      <BlogSubscription />
      {/* Testimonial Section 
      <TestimonialSection />
      */}
      <PartnersGrid />
      {/* Contact Section */}
      <section
        className="relative overflow-hidden py-20 sm:py-22 md:py-28 lg:py-36"
        style={{
          backgroundImage: `url(${yachtFooterCover})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 main-container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Heading */}
            <div className="text-center lg:text-left">
              <img src={yachtVector} alt="" className="w-24 sm:w-32 lg:w-36 h-auto mb-4 mx-auto lg:mx-0" />
              <div
                className="text-white font-primary font-bold tracking-[-0.01em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1]"
                style={{
                  fontFamily: 'Libre Bodoni, serif',
                }}
              >
                Have Questions?
              </div>
              <div
                className="text-[#efb958] -mt-1 font-primary font-bold tracking-[-0.01em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1]"
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
                  <label htmlFor="fullname" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    className="w-full rounded-lg border border-white/30 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-white/30 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Request Details
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    className="w-full rounded-lg border border-white/30 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:ring-2 focus:ring-[#efb958] text-[#11353e] placeholder:text-gray-500 text-sm sm:text-base resize-none"
                    placeholder="Tell us about your ideal itinerary, dates, and preferences"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="premium-cta inline-block w-full px-6 sm:px-7 py-3 text-sm sm:text-base"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Separator (similar to YachtServices footer CTA) 
      <section
        className="relative overflow-hidden w-full h-[460px] sm:h-[560px] md:h-[760px] lg:h-[960px]"
        style={{
          backgroundImage: `url(${yachtFooterCover})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-end">
            <div className="pb-[20%] sm:pb-[25%] md:pb-[30%] lg:pb-[35%] text-left">
              <h2 className="text-white [font-family:'Libre_Bodoni',serif] font-bold tracking-[-0.01em] text-[40px] leading-[44px] md:text-[56px] md:leading-[50px] lg:text-[64px] lg:leading-[56px]">
                <span className="block">Start Your</span>
                <span className="block">Journey</span>
                <span className="block">Here</span>
              </h2>
              <div className="mt-6">
                <Button asChild className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-brand-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <a href="/contact-us">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="pb-[20%] sm:pb-[25%] md:pb-[30%] lg:pb-[35%] text-right">
              <p className="[font-family:'Sacramento',cursive] font-normal tracking-[-0.01em] text-white text-[36px] leading-[28px] sm:text-[48px] sm:leading-[34px] md:text-[56px] md:leading-[36px] lg:text-[64px] lg:leading-[39px]">
                An
                <br />
                unforgetable
                <br />
                experience
              </p>
            </div>
          </div>
        </div>
    */}
      <Footer />
    </div>
  );
};

export default Index;
