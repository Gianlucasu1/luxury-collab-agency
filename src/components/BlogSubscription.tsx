import luxuryEscape2 from '@/assets/luxury escape2.jpg';

const BlogSubscription = () => {
  return (
    <section
      className="py-20 lg:py-0relative w-full min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '420px',
        backgroundImage: `url(${luxuryEscape2})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gentle Dark Overlay - using hex */}
      <div className="absolute inset-0" style={{ backgroundColor: '#00000080' }} />
      {/* Content (constrained by container) */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-white mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>
            <span className="text-[#efb958]" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}>Subscribe</span> to Our Luxury Blog
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
            Get exclusive insights, travel inspiration, and premium offers delivered to your inbox. Join our elite community!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/90 text-[#11353e] placeholder:text-[#11353e]/60 focus:outline-none focus:ring-2 focus:ring-accent text-lg shadow"
            />
            <button
              type="submit"
              className="premium-cta px-8 py-4 text-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogSubscription; 