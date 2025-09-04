import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Send,
  Mail,
  Phone,
  Instagram
} from 'lucide-react';
import heroJet from '@/assets/about_hero_bg.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };



  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Similar to About Us */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroJet})` }}
        />
        <div className="absolute inset-0 bg-brand-primary opacity-50" />
        
        <div className="w-full relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-primary font-bold text-brand-fifth mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                Let's Start Your
                <span className="text-[#efb958] block mt-2">Luxury Journey</span>
              </h1>
              <p className="text-xl text-brand-quaternary font-secondary leading-relaxed max-w-2xl">
                Ready to transform your dreams into extraordinary experiences? We're here to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Two Column Layout */}
      <section className="pt-20 pb-0 bg-[#11353e]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* White Background Box with Two Columns */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Contact Form */}
                <div className="p-12 md:p-16">
                  <h2 className="text-3xl md:text-4xl font-primary font-bold text-brand-primary mb-8">
                    Contact Us
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                        FULL NAME
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-[#efb958] focus:border-[#efb958] text-brand-primary placeholder:text-gray-500 font-secondary"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                        EMAIL
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-[#efb958] focus:border-[#efb958] text-brand-primary placeholder:text-gray-500 font-secondary"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                        REQUEST DETAILS
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-[#efb958] focus:border-[#efb958] text-brand-primary placeholder:text-gray-500 font-secondary resize-none"
                        placeholder="Tell us about your dream experience, preferred dates, budget range, and any specific requirements..."
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full premium-cta font-secondary font-semibold px-8 py-4"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Right Column - Get in Touch */}
                <div className="p-12 md:p-16 bg-gray-50">
                  <h2 className="text-3xl md:text-4xl font-primary font-bold text-brand-primary mb-6">
                    Get in touch
                  </h2>
                  
                  <p className="text-gray-600 font-secondary mb-12 leading-relaxed">
                    Your journey starts here. Reach out to our team, we're ready to assist with anything you need.
                  </p>
                  
                  <div className="space-y-8">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#efb958] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-secondary text-sm mb-1">Have any questions</p>
                        <p className="text-brand-primary font-secondary font-semibold">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#efb958] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-secondary text-sm mb-1">Send us an email</p>
                        <p className="text-brand-primary font-secondary font-semibold">contact@theluxurycollabagency.com</p>
                      </div>
                    </div>
                    
                    {/* Instagram */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#efb958] rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-secondary text-sm mb-1">Follow us</p>
                        <p className="text-brand-primary font-secondary font-semibold">@luxurycollab</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer - No padding between sections */}
      <Footer />
    </div>
  );
};

export default ContactUs;
