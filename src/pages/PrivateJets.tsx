import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import jetHero from '@/assets/jet_hero.png';
import jet_1 from '@/assets/jet_1.png';
import jet_2 from '@/assets/jet_2.png';
import jet_3 from '@/assets/jet_3.png';
import { Search, Plus, MapPin, Users as UsersIcon, Minus, ChevronDown } from 'lucide-react';
import faqsLogo from '@/assets/ank.png';
import jetFooterCover from '@/assets/jet_footer_cover.png';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '@/assets/lc_logo.png';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

const PrivateJets = () => {
  const filters = ['All', 'Light Jet', 'Midsize Jet', 'Heavy Jet', 'Ultra Long Range'];

  const jetPhotos: Record<string, string> = {
    jet_1,
    jet_2,
    jet_3,
  };

  const jets = [
    { id: 1, name: 'Astra Elite', photo: 'jet_1', address: 'Teterboro Airport (TEB), NJ', dimensions: 'W 16.0m / L 17.7m', capacity: 7, priceFrom: '$7,800' },
    { id: 2, name: 'Falcon Spirit', photo: 'jet_2', address: 'Van Nuys Airport (VNY), CA', dimensions: 'W 19.3m / L 20.2m', capacity: 9, priceFrom: '$10,200' },
    { id: 3, name: 'Gulfstream Nova', photo: 'jet_3', address: 'Miami Opa-Locka (OPF), FL', dimensions: 'W 23.5m / L 26.2m', capacity: 12, priceFrom: '$14,900' },
    { id: 4, name: 'Aquila LX', photo: 'jet_1', address: 'Farnborough (FAB), UK', dimensions: 'W 18.1m / L 20.5m', capacity: 8, priceFrom: '$9,600' },
    { id: 5, name: 'Aurora Jet', photo: 'jet_2', address: 'Le Bourget (LBG), FR', dimensions: 'W 20.8m / L 24.4m', capacity: 10, priceFrom: '$11,800' },
    { id: 6, name: 'Stratos One', photo: 'jet_3', address: 'Dubai Al Maktoum (DWC), UAE', dimensions: 'W 24.1m / L 29.0m', capacity: 13, priceFrom: '$16,500' },
    { id: 7, name: 'Sky Sovereign', photo: 'jet_1', address: 'Zurich (ZRH), CH', dimensions: 'W 17.2m / L 18.9m', capacity: 7, priceFrom: '$8,100' },
    { id: 8, name: 'Nimbus X', photo: 'jet_2', address: 'Singapore Seletar (XSP)', dimensions: 'W 19.7m / L 21.6m', capacity: 9, priceFrom: '$10,900' },
    { id: 9, name: 'Celestial 9', photo: 'jet_3', address: 'Sydney Kingsford (SYD), AU', dimensions: 'W 24.5m / L 29.4m', capacity: 13, priceFrom: '$17,200' },
  ] as const;

  const faqs = Array.from({ length: 5 }, () => ({
    q: 'What is the process of chartering a jet with TLCA?',
    a: 'We start with your route and preferences, curate aircraft options, arrange viewings (virtual or in-person), and handle all logistics from crew to ground transfers.'
  }));

  const gridRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const [faqTop, setFaqTop] = useState<number | null>(null);
  const [overlapHalf, setOverlapHalf] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [openSelects, setOpenSelects] = useState<Set<string>>(new Set());

  const handleSelectFocus = (selectName: string) => {
    setOpenSelects(prev => new Set(prev).add(selectName));
  };

  const handleSelectBlur = (selectName: string) => {
    // Small delay to allow for option selection
    setTimeout(() => {
      setOpenSelects(prev => {
        const newSet = new Set(prev);
        newSet.delete(selectName);
        return newSet;
      });
    }, 100);
  };

  const handleSelectChange = (selectName: string, e: React.ChangeEvent<HTMLSelectElement>) => {
    // Force blur so the control is not left focused, which also resets the arrow
    e.currentTarget.blur();
    handleSelectBlur(selectName);
  };

  const computeFaqPosition = useCallback(() => {
    if (!gridRef.current || !faqRef.current) return;
    requestAnimationFrame(() => {
      if (!gridRef.current || !faqRef.current) return;
      const gridRect = gridRef.current.getBoundingClientRect();
      const docTop = window.scrollY || document.documentElement.scrollTop;
      const gridBottom = docTop + gridRect.top + gridRef.current.offsetHeight;
      const faqHeight = faqRef.current.offsetHeight;
      const top = gridBottom - faqHeight / 2;
      setFaqTop(top);
      setOverlapHalf(Math.ceil(faqHeight / 2) + 64);
    });
  }, []);

  useEffect(() => {
    computeFaqPosition();

    window.addEventListener('resize', computeFaqPosition);
    window.addEventListener('load', computeFaqPosition);

    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(() => computeFaqPosition());
    }

    const observers: ResizeObserver[] = [];
    if ('ResizeObserver' in window) {
      const gridObserver = new ResizeObserver(() => computeFaqPosition());
      const faqObserver = new ResizeObserver(() => computeFaqPosition());
      if (gridRef.current) gridObserver.observe(gridRef.current);
      if (faqRef.current) faqObserver.observe(faqRef.current);
      observers.push(gridObserver, faqObserver);
    }

    const imgs = gridRef.current?.querySelectorAll('img') ?? [];
    const handlers: Array<{ img: HTMLImageElement; handler: () => void }> = [];
    imgs.forEach((img) => {
      const handler = () => computeFaqPosition();
      if (!img.complete) {
        img.addEventListener('load', handler);
        handlers.push({ img, handler });
      }
    });

    return () => {
      window.removeEventListener('resize', computeFaqPosition);
      window.removeEventListener('load', computeFaqPosition);
      observers.forEach((o) => o.disconnect());
      handlers.forEach(({ img, handler }) => img.removeEventListener('load', handler));
    };
  }, [computeFaqPosition]);

  useEffect(() => {
    const updateBreakpoint = () => setIsDesktop(window.innerWidth >= 1024);
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return (
    <div className="min-h-screen bg-[#11353e] relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${jetHero})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #11353e33, #2a67811a, #11353e59)' }} />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="text-white mt-3 font-semibold [font-family:'Libre_Bodoni',serif] text-[40px] leading-[44px] tracking-[-1px] md:text-[64px] md:leading-[64px] lg:text-[81px] lg:leading-[80px]">
                Private Jets
                <br />
                <span className="text-[#efb958]">and Aerial Escapes</span>
              </h1>
              <p className="mt-4 font-secondary font-normal text-white tracking-[-1px] text-[20px] leading-[30px] md:text-[28px] md:leading-[40px] lg:text-[36px] lg:leading-[50px]">
                Curated experiences in the
                <br />
                palm of your hands
              </p>
              <a href="#jets" className="inline-block mt-8 px-8 py-4 premium-cta font-secondary">
                Explore Jets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Jets Grid */}
      <section
        ref={gridRef}
        id="jets"
        className="relative py-16 md:py-20 lg:py-24"
        style={{
          paddingBottom: isDesktop && overlapHalf ? `${overlapHalf}px` : undefined,
          backgroundImage:
            'linear-gradient(to right, #11353e, #2a6781), linear-gradient(to bottom, rgba(17,53,62,0.6), rgba(42,103,129,0.2))',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Floating filter panel overlaps hero and this section ~50/50 */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-0 -translate-y-1/2 z-30 w-full">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="rounded-2xl bg-[#2a6781]/90 shadow-2xl ring-1 ring-white/10 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5 md:py-6">
              <form className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white/90 font-secondary text-sm">
                  <span className="whitespace-nowrap">Sort by</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
                    <div className="relative">
                      <select 
                        className="w-full appearance-none rounded-md bg-white text-[#11353e] px-3 py-2 text-sm border border-white/60 outline-none focus:ring-2 focus:ring-[#efb958] shadow-md"
                        onFocus={() => handleSelectFocus('destination')}
                        onBlur={() => handleSelectBlur('destination')}
                        onChange={(e) => handleSelectChange('destination', e)}
                      >
                        <option>Destination</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>Miami</option>
                      </select>
                      <ChevronDown 
                        size={16} 
                        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#11353e]/70 transition-transform duration-200 ${
                          openSelects.has('destination') ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none rounded-md bg-white text-[#11353e] px-3 py-2 text-sm border border-white/60 outline-none focus:ring-2 focus:ring-[#efb958] shadow-md"
                        onFocus={() => handleSelectFocus('jetName')}
                        onBlur={() => handleSelectBlur('jetName')}
                        onChange={(e) => handleSelectChange('jetName', e)}
                      >
                        <option>Jet Name</option>
                        <option>Astra Elite</option>
                        <option>Falcon Spirit</option>
                        <option>Gulfstream Nova</option>
                      </select>
                      <ChevronDown 
                        size={16} 
                        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#11353e]/70 transition-transform duration-200 ${
                          openSelects.has('jetName') ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none rounded-md bg-white text-[#11353e] px-3 py-2 text-sm border border-white/60 outline-none focus:ring-2 focus:ring-[#efb958] shadow-md"
                        onFocus={() => handleSelectFocus('jetType')}
                        onBlur={() => handleSelectBlur('jetType')}
                        onChange={(e) => handleSelectChange('jetType', e)}
                      >
                        <option>Jet Type</option>
                        <option>Light Jet</option>
                        <option>Midsize Jet</option>
                        <option>Heavy Jet</option>
                        <option>Ultra Long Range</option>
                      </select>
                      <ChevronDown 
                        size={16} 
                        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#11353e]/70 transition-transform duration-200 ${
                          openSelects.has('jetType') ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none rounded-md bg-white text-[#11353e] px-3 py-2 text-sm border border-white/60 outline-none focus:ring-2 focus:ring-[#efb958] shadow-md"
                        onFocus={() => handleSelectFocus('passengers')}
                        onBlur={() => handleSelectBlur('passengers')}
                        onChange={(e) => handleSelectChange('passengers', e)}
                      >
                        <option>Passengers</option>
                        <option>1-6</option>
                        <option>7-10</option>
                        <option>11-13</option>
                      </select>
                      <ChevronDown 
                        size={16} 
                        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#11353e]/70 transition-transform duration-200 ${
                          openSelects.has('passengers') ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    <div className="relative">
                      <select 
                        className="w-full appearance-none rounded-md bg-white text-[#11353e] px-3 py-2 text-sm border border-white/60 outline-none focus:ring-2 focus:ring-[#efb958] shadow-md"
                        onFocus={() => handleSelectFocus('price')}
                        onBlur={() => handleSelectBlur('price')}
                        onChange={(e) => handleSelectChange('price', e)}
                      >
                        <option>Price</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                      </select>
                      <ChevronDown 
                        size={16} 
                        className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#11353e]/70 transition-transform duration-200 ${
                          openSelects.has('price') ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#11353e]/60" size={16} />
                      <input
                        className="w-full rounded-md bg-white text-[#11353e] pl-9 pr-3 py-2 text-sm border border-white/60 outline-none focus:ring-2 focus:ring-[#efb958] shadow-md"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {jets.map((j) => (
              <Link to={`/jet/${j.id}`} key={j.id} className="block rounded-2xl overflow-hidden shadow-xl focus:outline-none focus:ring-2 focus:ring-[#efb958]">
                <div className="relative bg-[#11353e]">
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 rounded-full font-secondary font-bold uppercase text-sm bg-[#efb958] text-[#11353e]">
                      {j.name}
                    </span>
                  </div>
                  <img src={jetPhotos[j.photo]} alt={j.name} className="w-full h-56 object-cover" />
                </div>
                <div className="bg-white p-5 font-secondary">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#374151]">
                      <MapPin size={18} />
                      <span className="text-sm font-medium">{j.address}</span>
                    </div>
                    <div className="text-[#9CA3AF] text-xs">{j.dimensions}</div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 text-[#374151]">
                      <UsersIcon size={18} />
                      <span className="text-sm font-medium">{j.capacity}</span>
                    </div>
                    <div className="text-[#111827] text-base font-semibold">From {j.priceFrom}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 md:mt-12 lg:mt-16">
            <Pagination className="overflow-x-auto">
              <PaginationContent className="w-max">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <PaginationItem key={n}>
                    <PaginationLink
                      href="#"
                      className="shrink-0 text-[#efb958] border-[#efb958]/50 data-[state=active]:bg-[#efb958] data-[state=active]:text-[#11353e]"
                      aria-current={n === 1 ? 'page' : undefined}
                      data-state={n === 1 ? 'active' : undefined}
                    >
                      {n}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={isDesktop ? 'absolute left-0 right-0 z-30' : 'relative z-30 my-10 md:my-12'} style={isDesktop && faqTop !== null ? { top: `${faqTop}px` } : undefined}>
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={faqRef} className="relative rounded-2xl px-10 py-8 md:px-16 md:py-12 lg:px-20 lg:py-14 overflow-hidden shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
            <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
              <img src={whiteLogo} alt="" className="opacity-15 md:opacity-20" style={{ width: 'min(60%, 520px)', height: 'auto' }} />
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(17,53,62,0.88) 0%, rgba(42,103,129,0.85) 100%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.25) 100%)' }} />

            <div className="relative z-10 flex items-center gap-3 mb-6 md:mb-8">
              <img src={faqsLogo} alt="FAQs" className="object-contain align-middle w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
              <h2 className="[font-family:'Libre_Bodoni',serif] font-bold text-[#efb958] text-[40px] leading-[36px] tracking-[-0.01em] md:text-[56px] md:leading-[40px] lg:text-[64px] lg:leading-[39px]">
                FAQs
              </h2>
            </div>

            <div className="relative z-10">
              {faqs.map((f, idx) => (
                <details key={idx} className="group py-4 md:py-5 border-b border-white/30">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4 py-2">
                    <span className="font-secondary font-normal text-white text-[18px] leading-[32px] md:text-[24px] md:leading-[44px] lg:text-[32px] lg:leading-[59px] tracking-[-0.01em]">
                      {f.q}
                    </span>
                    <Plus className="text-white group-open:hidden transition-transform duration-300" size={20} />
                    <Minus className="text-white hidden group-open:block transition-transform duration-300" size={20} />
                  </summary>
                  <div className="overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="mt-2 md:mt-3 text-white/80 font-secondary text-sm md:text-base transform transition-all duration-300 group-open:translate-y-0 translate-y-[-10px] opacity-0 group-open:opacity-100">
                      {f.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden w-full h-[460px] sm:h-[560px] md:h-[760px] lg:h-[960px]"
        style={{
          backgroundImage: `url(${jetFooterCover})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full" style={{ paddingTop: isDesktop && overlapHalf ? `${overlapHalf}px` : undefined }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-end">
            <div className="pb-[20%] sm:pb-[25%] md:pb-[30%] lg:pb-[35%] text-left">
              <h2 className="text-white [font-family:'Libre_Bodoni',serif] font-bold tracking-[-0.01em] text-[40px] leading-[44px] md:text-[56px] md:leading-[50px] lg:text-[64px] lg:leading-[56px]">
                <span className="block">Unlock Curated</span>
                <span className="block">Esapes</span>
              </h2>
              <div className="mt-6">
                <Button asChild className="premium-cta px-8 py-4 font-semibold">
                  <a href="/contact-us">Contact Us</a>
                </Button>
              </div>
            </div>
            <div className="pb-[20%] sm:pb-[25%] md:pb-[30%] lg:pb-[35%] text-right">
              <p className="[font-family:'Sacramento',cursive] font-normal tracking-[-0.01em] text-white text-[36px] leading-[28px] sm:text-[48px] sm:leading-[34px] md:text-[56px] md:leading-[36px] lg:text-[64px] lg:leading-[39px]">
                Fly exclusive
                <br />
                with us...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateJets;


