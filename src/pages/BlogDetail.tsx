import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import blogHero from '@/assets/blog_detail_bg.png';
import blogFooterBg from '@/assets/blog_footer_bg.png';
import { Calendar, Clock, User, Tag, Share2, ArrowLeft, Bookmark, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
    const { id } = useParams();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // Mock blog post data
    const blogPost = {
        id: id || '1',
        title: 'The Ultimate Guide to Luxury Yacht Charters: Sailing the Mediterranean in Style',
        excerpt: 'Discover the secrets to planning the perfect luxury yacht charter experience, from selecting the right vessel to crafting unforgettable itineraries across the most breathtaking Mediterranean destinations.',
        author: 'Isabella Rodriguez',
        authorRole: 'Luxury Travel Curator',
        authorAvatar: '/src/assets/yacht_1.png',
        publishDate: 'Dec 15, 2024',
        readTime: '8 min read',
        category: 'Yacht Charters',
        tags: ['Luxury Travel', 'Mediterranean', 'Yachting', 'Lifestyle'],
        heroImage: '/src/assets/yacht_2.png',
        content: [
            {
                type: 'paragraph',
                text: 'The Mediterranean Sea has long been the playground of the world\'s most discerning travelers. With its azure waters, historic ports, and legendary islands, it offers an unparalleled backdrop for luxury yacht charters that combine adventure with sophistication.'
            },
            {
                type: 'paragraph',
                text: 'When embarking on a Mediterranean yacht charter, the first decision—and perhaps the most crucial—is selecting the perfect vessel. From sleek motor yachts that slice through the waves to graceful sailing yachts that harness the power of the wind, each type offers a distinct experience that shapes your journey.'
            },
            {
                type: 'heading',
                text: 'Choosing Your Perfect Vessel'
            },
            {
                type: 'paragraph',
                text: 'Motor yachts provide speed and stability, perfect for those who want to cover more ground and enjoy the journey as much as the destinations. They offer spacious decks for sunbathing, elegant dining areas for gourmet meals, and luxurious cabins that rival the finest hotels.'
            },
            {
                type: 'paragraph',
                text: 'Sailing yachts, on the other hand, offer a more authentic maritime experience. The gentle sound of wind in the sails, the thrill of tacking through the waves, and the eco-friendly nature of wind-powered travel create memories that last a lifetime.'
            },
            {
                type: 'heading',
                text: 'Crafting Your Itinerary'
            },
            {
                type: 'paragraph',
                text: 'The Mediterranean is a treasure trove of destinations, each with its own unique charm. Start your journey in the French Riviera, where glamour meets tradition. Portofino\'s colorful harbor, Monaco\'s sophisticated casinos, and Saint-Tropez\'s legendary beaches set the stage for an unforgettable adventure.'
            },
            {
                type: 'paragraph',
                text: 'Continue south to the Italian islands, where Sicily offers ancient ruins and volcanic landscapes, while Sardinia provides pristine beaches and crystal-clear waters. The Greek islands beckon with their white-washed architecture, rich history, and warm hospitality.'
            }
        ],
        relatedPosts: [
            { id: 2, title: 'Top 10 Mediterranean Destinations for 2024', image: '/src/assets/yacht_3.png', date: 'Dec 12, 2024' },
            { id: 3, title: 'Private Jet Etiquette: What Every Traveler Should Know', image: '/src/assets/jet_1.png', date: 'Dec 10, 2024' },
            { id: 4, title: 'Sustainable Luxury Travel: The Future is Green', image: '/src/assets/yacht_1.png', date: 'Dec 8, 2024' }
        ]
    };

    return (
        <div className="min-h-screen bg-white relative">
            <Navigation />

            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url(${blogHero})`, backgroundPosition: 'center center' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #11353e33, #2a67811a, #11353e59)' }} />
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl">
                            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6">
                                <ArrowLeft size={20} />
                                <span className="font-secondary">Back to Blog</span>
                            </Link>
                            <h1 className="text-white font-semibold [font-family:'Libre_Bodoni',serif] text-[40px] leading-[44px] tracking-[-1px] md:text-[64px] md:leading-[64px] lg:text-[81px] lg:leading-[80px]">
                                {blogPost.title}
                            </h1>
                            <p className="mt-6 font-secondary font-normal text-white/90 tracking-[-1px] text-[20px] leading-[30px] md:text-[28px] md:leading-[40px] lg:text-[36px] lg:leading-[50px]">
                                {blogPost.excerpt}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-[#11353e]">
                <div className=" mx-auto px-4 sm:px-6">
                    <div className="w-[90%] mx-auto bg-white rounded-2xl p-8 md:p-12 lg:p-16">
                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Main Content - Takes 2/3 of the space */}
                            <div className="lg:col-span-2">
                                {/* Hero Image with Read Time Overlay */}
                                <div className="mb-8 relative">
                                    <img 
                                        src={blogPost.heroImage} 
                                        alt={blogPost.title} 
                                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-t-2xl shadow-2xl"
                                    />
                                    {/* Read Time Overlay */}
                                    <div className="absolute top-4 right-4 bg-[#11353e]/80 text-white px-3 py-2 rounded-lg font-secondary text-sm">
                                        {blogPost.readTime}
                                    </div>
                                </div>

                                {/* Post Metadata */}
                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{blogPost.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{blogPost.publishDate}</span>
                                    </div>
                                </div>

                                {/* Post Title */}
                                <h1 className="text-[#11353e] [font-family:'Libre_Bodoni',serif] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
                                    {blogPost.title}
                                </h1>

                                {/* Article Content */}
                                <article className="prose prose-lg max-w-none mb-8">
                                    {blogPost.content.map((section, index) => (
                                        <div key={index} className="mb-6">
                                            {section.type === 'heading' ? (
                                                <h2 className="text-[#11353e] [font-family:'Libre_Bodoni',serif] font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 mt-8">
                                                    {section.text}
                                                </h2>
                                            ) : (
                                                <p className="text-gray-700 font-secondary text-lg leading-relaxed">
                                                    {section.text}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </article>

                                {/* Tags and Social Share */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                                    <div>
                                        <h3 className="text-[#11353e] font-secondary font-semibold text-lg mb-3">Tags</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {blogPost.tags.map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-4 py-2 bg-white text-[#11353e] rounded-full font-secondary text-sm hover:bg-[#efb958] hover:text-[#11353e] transition-all duration-300 cursor-pointer"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#11353e] font-secondary font-semibold text-sm">Share:</span>
                                        <button className="p-2 rounded-full bg-white text-[#11353e] hover:bg-[#efb958] hover:text-white transition-all duration-300">
                                            <Share2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar - Takes 1/3 of the space */}
                            <div className="lg:col-span-1">
                                {/* Author Widget */}
                                <div className="bg-white rounded-2xl p-6 mb-8">
                                    <h3 className="text-[#11353e] font-secondary font-semibold text-lg mb-4">About Author</h3>
                                    <div className="flex items-center gap-4 mb-4">
                                        <img 
                                            src={blogPost.authorAvatar} 
                                            alt={blogPost.author} 
                                            className="w-16 h-16 rounded-full object-cover border-4 border-[#efb958]"
                                        />
                                        <div>
                                            <h4 className="text-[#11353e] font-secondary font-semibold">{blogPost.author}</h4>
                                            <p className="text-gray-600 font-secondary text-sm">{blogPost.authorRole}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => setIsBookmarked(!isBookmarked)}
                                            className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 font-secondary text-sm ${
                                                isBookmarked 
                                                    ? 'bg-[#efb958] text-[#11353e]' 
                                                    : 'bg-white text-[#11353e] hover:bg-[#efb958] hover:text-[#11353e]'
                                            }`}
                                        >
                                            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                                        </button>
                                        <button 
                                            onClick={() => setIsLiked(!isLiked)}
                                            className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 font-secondary text-sm ${
                                                isLiked 
                                                    ? 'bg-red-500 text-white' 
                                                    : 'bg-white text-[#11353e] hover:bg-red-500 hover:text-white'
                                            }`}
                                        >
                                            {isLiked ? 'Liked' : 'Like'}
                                        </button>
                                    </div>
                                </div>

                                {/* Search Widget */}
                                <div className="bg-white rounded-2xl p-6 mb-8">
                                    <h3 className="text-[#11353e] font-secondary font-semibold text-lg mb-4">Search</h3>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Search here..." 
                                            className="w-full px-4 py-3 rounded-lg border-0 bg-white text-[#11353e] placeholder-gray-500 font-secondary focus:ring-2 focus:ring-[#efb958] focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Categories Widget */}
                                <div className="bg-white rounded-2xl p-8 mb-8">
                                    <h3 className="text-[#11353e] font-secondary font-semibold text-lg mb-4">Categories</h3>
                                    <div className="space-y-3">
                                        {['Yacht Charters', 'Private Jets', 'Luxury Getaways', 'Travel Tips', 'Destinations'].map((category, index) => (
                                            <div 
                                                key={index}
                                                className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                                    category === blogPost.category 
                                                        ? 'bg-[#efb958] text-[#11353e]' 
                                                        : 'bg-white text-[#11353e] hover:bg-[#efb958] hover:text-[#11353e]'
                                                }`}
                                            >
                                                {category}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tags Widget */}
                                <div className="bg-white rounded-2xl p-6 mb-8">
                                    <h3 className="text-[#11353e] font-secondary font-semibold text-lg mb-4">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Luxury', 'Travel', 'Yachting', 'Mediterranean', 'Adventure', 'Lifestyle', 'Premium', 'Experience'].map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-2 bg-white text-[#11353e] rounded-lg font-secondary text-sm hover:bg-[#efb958] hover:text-[#11353e] transition-all duration-300 cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-[#11353e]">
                <div className=" mx-auto px-4 sm:px-6">
                    <div className="w-[90%] mx-auto bg-white rounded-2xl p-6 md:p-8 lg:p-12 lg:pb-32">
                        <h2 className="text-[#11353e] [font-family:'Libre_Bodoni',serif] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 text-center">
                            Related Articles
                        </h2>
                        {/* Sorters */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#11353e] rounded-lg font-secondary font-medium hover:bg-[#efb958] hover:text-white transition-all duration-300">
                                        Latest
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                
                                <div className="relative">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#11353e] rounded-lg font-secondary font-medium hover:bg-[#efb958] hover:text-white transition-all duration-300">
                                        Categories
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                            {blogPost.relatedPosts.map((post) => (
                                <Link 
                                    to={`/blog/${post.id}`} 
                                    key={post.id} 
                                    className="group block rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#efb958] mb-8"
                                >
                                    <div className="relative">
                                        <img 
                                            src={post.image} 
                                            alt={post.title} 
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        
                                        {/* Title in white box at the bottom with overlap effect */}
                                        <div className="absolute w-[70%] mx-auto bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                                            <div className="w-[100%] bg-white shadow-2xl p-4 md:p-5">
                                                {/* Date positioned over the white box in left corner */}
                                                <div className="absolute -top-10 left-0">
                                                    <div className="bg-[#efb958] px-3 py-2 shadow-md">
                                                        <span className="text-[#11353e] font-secondary font-medium text-sm">
                                                            {post.date}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                {/* Title in the white box */}
                                                <h3 className="text-[#11353e] [font-family:'Libre_Bodoni',serif] font-bold text-base md:text-lg leading-tight mb-3">
                                                    {post.title}
                                                </h3>
                                                
                                                {/* Learn More button */}
                                                <div className="text-center">
                                                    <span className="inline-block px-4 py-2 text-[#efb958] font-secondary font-semibold text-sm hover:text-[#11353e] transition-all duration-300">
                                                        Learn More
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Subscription Section */}
            <section
                className="relative py-20 md:py-24 lg:py-32 overflow-hidden"
                style={{
                    backgroundImage: `url(${blogFooterBg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-[#11353e]/70" />
                <div className="relative z-10 container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-white [font-family:'Libre_Bodoni',serif] font-bold text-[40px] leading-[44px] tracking-[-0.01em] md:text-[56px] md:leading-[50px] lg:text-[64px] lg:leading-[56px] mb-6">
                            Stay Updated with
                            <br />
                            <span className="text-[#efb958]">Our Latest Stories</span>
                        </h2>
                        <p className="text-white/80 font-secondary text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
                            Get exclusive travel insights, luxury destination guides, and insider tips delivered directly to your inbox.
                        </p>
                        
                        {/* Email Subscription Form */}
                        <div className="max-w-2xl mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 outline-none border border-gray-300 font-secondary text-lg focus:ring-2 focus:ring-[#efb958] focus:border-[#efb958]"
                                />
                                <Button className="premium-cta px-8 h-[56px] font-secondary font-semibold whitespace-nowrap">
                                    Subscribe Now
                                </Button>
                            </div>
                            <p className="text-white/60 pt-4 font-secondary text-sm">
                                Join over 10,000 luxury travelers who trust us for premium travel experiences.
                                <br />
                                Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogDetail;
