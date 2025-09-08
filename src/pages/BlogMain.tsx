import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import blogHero from '@/assets/blog_hero_bg.png';
import blogFooterBg from '@/assets/blog_footer_bg.png';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from '@/components/ui/pagination';
import { sanityClient } from '@/lib/sanityClient';

// TypeScript interfaces for Sanity data - matching your actual schema
interface SanityImage {
    asset: {
        _ref: string;
        _type: string;
    };
    hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
    };
    crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
}

interface BlogPost {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    excerpt: string;
    heroImage: SanityImage;
    publishDate: string;
    readTime: string;
    category: string;
    tags: string[];
    author: {
        _ref: string;
        name: string;
        role: string;
        avatar: SanityImage;
    };
    isPublished: boolean;
}

// Interface for mock data
interface MockBlogPost {
    id: number;
    title: string;
    photo: string;
    date: string;
    excerpt: string;
}

// Mock data for display
const mockBlogPosts = [
    {
        id: 1,
        title: 'The Ultimate Guide to Luxury Yacht Charters',
        photo: '/src/assets/yacht_1.png',
        date: 'Dec 15, 2024',
        excerpt: 'Discover the secrets to planning the perfect luxury yacht charter experience.'
    },
    {
        id: 2,
        title: 'Top 10 Mediterranean Destinations for 2024',
        photo: '/src/assets/yacht_2.png',
        date: 'Dec 12, 2024',
        excerpt: 'Explore the most breathtaking Mediterranean destinations this season.'
    },
    {
        id: 3,
        title: 'Private Jet Etiquette: What Every Traveler Should Know',
        photo: '/src/assets/jet_1.png',
        date: 'Dec 10, 2024',
        excerpt: 'Master the art of private jet travel with our comprehensive etiquette guide.'
    },
    {
        id: 4,
        title: 'Sustainable Luxury Travel: The Future is Green',
        photo: '/src/assets/yacht_3.png',
        date: 'Dec 8, 2024',
        excerpt: 'How luxury travel is evolving to embrace sustainability without compromise.'
    },
    {
        id: 5,
        title: 'Culinary Adventures on the High Seas',
        photo: '/src/assets/yacht_1.png',
        date: 'Dec 5, 2024',
        excerpt: 'Experience world-class dining while cruising the most beautiful waters.'
    },
    {
        id: 6,
        title: 'The Art of Personalized Travel Experiences',
        photo: '/src/assets/jet_2.png',
        date: 'Dec 3, 2024',
        excerpt: 'Why bespoke travel planning makes all the difference in luxury tourism.'
    },
    {
        id: 7,
        title: 'Winter Getaways: Escaping to Paradise',
        photo: '/src/assets/yacht_2.png',
        date: 'Nov 30, 2024',
        excerpt: 'The best tropical destinations for your winter luxury escape.'
    },
    {
        id: 8,
        title: 'Technology Meets Luxury: Smart Yacht Features',
        photo: '/src/assets/yacht_3.png',
        date: 'Nov 28, 2024',
        excerpt: 'Discover how cutting-edge technology enhances the luxury yachting experience.'
    },
    {
        id: 9,
        title: 'Planning the Perfect Corporate Retreat',
        photo: '/src/assets/jet_3.png',
        date: 'Nov 25, 2024',
        excerpt: 'Elevate your business events with luxury travel and exclusive venues.'
    },
] as const;

const BlogMain = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<MockBlogPost[]>([]);
    const [loading, setLoading] = useState(false); // Changed to false since we're showing mock data
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    // Initialize with mock data
    useEffect(() => {
        setFilteredPosts([...mockBlogPosts]);
    }, []);

    // Fetch blog posts from Sanity in background (for logging/debugging)
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                console.log('🔍 Fetching blog posts from Sanity...');
                
                // Simple query to test connection
                const query = `*[_type == "blogPost" && isPublished == true]{
                    _id,
                    title,
                    slug,
                    excerpt,
                    heroImage,
                    publishDate,
                    readTime,
                    category,
                    tags,
                    "author": author->{
                        _id,
                        name,
                        role,
                        avatar
                    }
                }`;
                
                const posts = await sanityClient.fetch(query);
                console.log('✅ Sanity posts fetched successfully:', posts);
                console.log('📊 Number of posts from Sanity:', posts.length);
                
                // Store Sanity posts but don't display them yet
                setBlogPosts(posts);
                
                if (posts.length > 0) {
                    console.log('🎉 Sanity integration working! You can now switch to real data.');
                } else {
                    console.log('⚠️ No published posts found in Sanity. Check your content and isPublished field.');
                }
                
            } catch (err) {
                console.error('❌ Error fetching from Sanity:', err);
                setError(`Sanity fetch failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
            }
        };

        fetchBlogPosts();
    }, []);

    // Filter posts based on search term and category
    useEffect(() => {
        let filtered = [...mockBlogPosts]; // Use mock data for display

        // Filter by search term
        if (searchTerm.trim()) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category (using mock categories for now)
        if (selectedCategory !== 'All') {
            // Mock categories based on content
            const mockCategories = {
                'Yacht Charters': [0, 1, 4, 7, 8],
                'Private Jets': [2, 5, 9],
                'Luxury Getaways': [6],
                'Travel Tips': [2, 6],
                'Destinations': [1, 7]
            };
            
            if (mockCategories[selectedCategory as keyof typeof mockCategories]) {
                filtered = filtered.filter((_, index) => 
                    mockCategories[selectedCategory as keyof typeof mockCategories].includes(index)
                );
            }
        }

        setFilteredPosts(filtered);
        setCurrentPage(1); // Reset to first page when filtering
    }, [searchTerm, selectedCategory]);

    // Get unique categories from mock data
    const categories = ['All', 'Yacht Charters', 'Private Jets', 'Luxury Getaways', 'Travel Tips', 'Destinations'];

    // Get current posts for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Handle search
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search is already handled by useEffect
    };

    // Handle category selection
    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Format date
    const formatDate = (dateString: string) => {
        if (!dateString) return 'No date';
        
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (err) {
            console.error('Error formatting date:', dateString, err);
            return 'Invalid date';
        }
    };

    // Build image URL from Sanity (for future use)
    const buildImageUrl = (image: SanityImage) => {
        if (!image?.asset?._ref) return '/src/assets/placeholder.svg';
        
        const ref = image.asset._ref;
        const [file, dimensions, format] = ref.split('-');
        const [width, height] = dimensions.split('x');
        
        return `https://cdn.sanity.io/images/80yxq4ba/production/${file}-${width}x${height}.${format}`;
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
                        <div className="max-w-3xl">
                            <h1
                                className="text-white mt-3 font-semibold [font-family:'Libre_Bodoni',serif] text-[40px] leading-[44px] tracking-[-1px] md:text-[64px] md:leading-[64px] lg:text-[81px] lg:leading-[80px]"
                            >
                                Travel
                                <br />
                                <span className="text-[#efb958]">Stories & Insights</span>
                            </h1>
                            <p
                                className="mt-4 font-secondary font-normal text-white tracking-[-1px] text-[20px] leading-[30px] md:text-[28px] md:leading-[40px] lg:text-[36px] lg:leading-[50px]"
                            >
                                Discover luxury travel experiences
                                <br />
                                and insider secrets
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Filter Bar */}
            <section className="bg-[#11353e] pt-8 pb-4 md:pt-12 md:pb-6">
                <div className="px-6 mx-auto">
                    <div className="w-[90%] mx-auto">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 outline-none border-2 border-[#efb958] font-secondary text-lg focus:ring-2 focus:ring-[#efb958] focus:border-[#efb958] shadow-lg"
                                    placeholder="Search articles, destinations, tips..."
                                />
                            </div>
                            <button type="submit" className="premium-cta px-8 py-4 font-secondary font-semibold whitespace-nowrap">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section
                id="blog-posts"
                className="pb-16 md:pb-28 lg:pb-22 py-4 md:py-8 lg:py-22 bg-[#11353e]"
            >
                <div className=" mx-auto px-4 sm:px-6 pt-22">
                    <div className="w-[90%] mx-auto bg-white rounded-2xl pb-22 p-6 md:p-8 lg:p-12">
                        {/* Sorters and Category Filters */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-4 flex-wrap">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategorySelect(category)}
                                        className={`px-4 py-2 rounded-lg font-secondary font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? 'bg-[#efb958] text-[#11353e]'
                                                : 'bg-white text-[#11353e] hover:bg-[#efb958] hover:text-white'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                            
                            <div className="text-sm text-gray-600 font-secondary">
                                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                            </div>
                        </div>

                        {/* Blog Posts Grid */}
                        {currentPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-20 pb-16 md:pb-20">
                                {currentPosts.map((post: any) => (
                                    <Link 
                                        to={`/blog/${post.id}`} 
                                        key={post.id} 
                                        className="block rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#efb958] mb-16 md:mb-20"
                                    >
                                        {/* Image container with overlay content */}
                                        <div className="relative">
                                            <img 
                                                src={post.photo} 
                                                alt={post.title} 
                                                className="w-full h-64 md:h-72 xl:h-80 object-cover rounded-t-2xl" 
                                            />

                                            {/* Title in white box at the bottom with overlap effect */}
                                            <div className="absolute w-[85%] md:w-[70%] mx-auto bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                                                <div className="w-[100%] bg-white shadow-2xl p-4 md:p-5 rounded-lg">
                                                    {/* Date positioned over the white box in left corner */}
                                                    <div className="absolute -top-10 left-0">
                                                        <div className="bg-[#efb958] px-3 py-2 shadow-md rounded">
                                                            <span className="text-[#11353e] font-secondary font-medium text-sm">
                                                                {post.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Title in the white box */}
                                                    <h3 className="text-[#11353e] [font-family:'Libre_Bodoni',serif] font-bold text-sm md:text-base lg:text-lg xl:text-xl leading-tight mb-3">
                                                        {post.title}
                                                    </h3>
                                                    
                                                    {/* Learn More button */}
                                                    <div className="text-center">
                                                        <span className="inline-block px-3 py-1 md:px-4 md:py-2 text-[#efb958] font-secondary font-semibold text-xs md:text-sm hover:text-[#11353e] transition-all duration-300">
                                                            Learn More
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-gray-500 font-secondary text-lg">
                                    No articles found matching your criteria.
                                </p>
                                <button 
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('All');
                                    }}
                                    className="mt-4 premium-cta px-6 py-3 font-secondary"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-10 md:mt-12 lg:mt-16">
                                <Pagination className="overflow-x-auto">
                                    <PaginationContent className="w-max">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                                            <PaginationItem key={n}>
                                                <PaginationLink
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePageChange(n);
                                                    }}
                                                    className={`shrink-0 text-[#11353e] border-[#11353e]/30 hover:bg-[#efb958] hover:text-[#11353e] transition-all duration-300 ${
                                                        n === currentPage ? 'bg-[#efb958] text-[#11353e]' : ''
                                                    }`}
                                                >
                                                    {n}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Blog Subscription Section */}
            <section
                className="relative py-20 md:py-24 lg:py-32 pb-32 md:pb-40 overflow-hidden"
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
                            <p className="text-white/60 font-secondary text-sm mt-4">
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

export default BlogMain;
