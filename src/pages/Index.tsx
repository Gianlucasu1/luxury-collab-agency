import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhyChooseUsGrid from '@/components/WhyChooseUsGrid';
import OurOfferings from '@/components/OurOfferings';
import TestimonialSection from '@/components/TestimonialSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import BlogSubscription from '@/components/BlogSubscription';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseUs />
      <WhyChooseUsGrid />
      <div className="bg-elite-teal-light py-6">
        <div className="bg-accent h-0.5 w-80 mx-auto rounded-full" />
      </div>
      <OurOfferings />
      <BlogSubscription />
      <TestimonialSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
