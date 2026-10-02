import React, { useState, useMemo, useRef, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { DesignArtwork } from './DesignArtworks';
import { ArrowUpRight, FolderKanban, Search, X, SearchX, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GlowCard } from './GlowCard';

interface PortfolioProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOrderSimilar: (category: string) => void;
}

const FILTER_TAGS = [
  { id: 'all', label: 'All Projects' },
  { id: 'branding', label: 'Brand Identity' },
  { id: 'apparel', label: 'Apparel & Fashion' },
  { id: 'tech', label: 'Tech & SaaS' },
  { id: 'packaging', label: 'Packaging & Boxes' },
  { id: 'print', label: 'Print & Retail' },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectItem, onOrderSimilar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Press '/' to focus search, 'Escape' to clear
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName;
      if (e.key === '/' && activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter items by title or category keywords
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PORTFOLIO_ITEMS.filter((item) => {
      // 1. Category Tag Filter
      const matchesCategory = (() => {
        if (selectedCategory === 'all') return true;
        if (selectedCategory === 'branding') {
          return item.category === 'branding';
        }
        if (selectedCategory === 'apparel') {
          return (
            item.categoryLabel.toLowerCase().includes('apparel') ||
            item.title.toLowerCase().includes('apparel') ||
            item.title.toLowerCase().includes('streetwear') ||
            item.deliverables?.some((d) => d.toLowerCase().includes('hoodie') || d.toLowerCase().includes('apparel') || d.toLowerCase().includes('tag'))
          );
        }
        if (selectedCategory === 'tech') {
          return (
            item.title.toLowerCase().includes('tech') ||
            item.categoryLabel.toLowerCase().includes('tech') ||
            item.mockupType === 'saas' ||
            item.title.toLowerCase().includes('vertex') ||
            item.title.toLowerCase().includes('qantra')
          );
        }
        if (selectedCategory === 'packaging') {
          return (
            item.category === 'packaging' ||
            item.categoryLabel.toLowerCase().includes('cosmetics') ||
            item.deliverables?.some((d) => d.toLowerCase().includes('packaging') || d.toLowerCase().includes('box') || d.toLowerCase().includes('bottle'))
          );
        }
        if (selectedCategory === 'print') {
          return (
            item.category === 'print' ||
            item.categoryLabel.toLowerCase().includes('print') ||
            item.mockupType === 'print' ||
            item.deliverables?.some((d) => d.toLowerCase().includes('card') || d.toLowerCase().includes('signage'))
          );
        }
        return true;
      })();

      if (!matchesCategory) return false;

      // 2. Keyword Search Query Filter
      if (!q) return true;

      const titleMatch = item.title.toLowerCase().includes(q);
      const categoryMatch =
        item.category.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      const clientMatch =
        item.client?.toLowerCase().includes(q) ||
        item.clientCountry?.toLowerCase().includes(q);
      const descMatch = item.description?.toLowerCase().includes(q);
      const deliverablesMatch = item.deliverables?.some((d) => d.toLowerCase().includes(q));
      const fontsMatch = item.fonts?.some((f) => f.toLowerCase().includes(q));

      return titleMatch || categoryMatch || clientMatch || descMatch || deliverablesMatch || fontsMatch;
    });
  }, [searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    searchInputRef.current?.focus();
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header & Integrated Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-1.5 font-bold">
              <FolderKanban className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>LOGO & BRANDING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Logo & Branding
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Brand systems, print packaging, and digital marketing assets. Search or filter by keywords.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="w-full lg:max-w-md flex flex-col gap-1.5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-[#dfa2da]" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by title or keyword (e.g. Zeora, Tech, Packaging)..."
                data-no-butterfly="true"
                className="w-full pl-10 pr-24 py-3 sm:py-2.5 min-h-[44px] rounded-2xl bg-[#090715]/90 border border-white/15 focus:border-[#cf30aa] focus:ring-2 focus:ring-[#cf30aa]/30 text-white placeholder-slate-400 text-[16px] sm:text-sm font-sans transition-all outline-none backdrop-blur-md shadow-inner no-butterfly"
              />
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-1.5">
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    data-no-butterfly="true"
                    className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer no-butterfly"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="hidden sm:inline-flex text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded border border-white/10 bg-white/5 pointer-events-none">
                    /
                  </span>
                )}
                <span className="text-[10px] font-mono font-bold text-[#dfa2da] px-2 py-0.5 rounded-lg bg-[#cf30aa]/20 border border-[#cf30aa]/35">
                  {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Keyword Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 custom-scrollbar no-scrollbar text-xs touch-pan-x overscroll-x-contain">
          <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mr-1 shrink-0">
            <SlidersHorizontal className="w-3 h-3 text-[#cf30aa]" />
            <span>Filter:</span>
          </div>
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setSelectedCategory(tag.id)}
              data-no-butterfly="true"
              className={`px-3.5 py-2 min-h-[40px] rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer no-butterfly shrink-0 flex items-center gap-1.5 active:scale-95 ${
                selectedCategory === tag.id
                  ? 'bg-gradient-to-r from-[#402fb5] to-[#cf30aa] text-white font-bold shadow-[0_0_15px_rgba(207,48,170,0.4)] border border-transparent'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              <span>{tag.label}</span>
              {tag.id === selectedCategory && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={handleReset}
              data-no-butterfly="true"
              className="px-3 py-2 min-h-[40px] rounded-xl font-mono text-xs text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 transition-all cursor-pointer no-butterfly shrink-0 flex items-center gap-1 active:scale-95"
              title="Reset all filters"
            >
              <X className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Portfolio Results Grid or Empty State */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center rounded-3xl bg-[#090715]/70 border border-white/10 p-8 max-w-xl mx-auto backdrop-blur-md">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-[#dfa2da]">
              <SearchX className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-400 mb-6 max-w-md mx-auto leading-relaxed">
              We couldn't find any portfolio projects matching &ldquo;<span className="text-white font-semibold">{searchQuery}</span>&rdquo;. Try searching for &ldquo;branding&rdquo;, &ldquo;packaging&rdquo;, &ldquo;apparel&rdquo;, or &ldquo;tech&rdquo;.
            </p>
            <button
              type="button"
              onClick={handleReset}
              data-no-butterfly="true"
              className="neu-3d-btn-primary px-5 py-2.5 rounded-xl text-xs font-bold text-white inline-flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(207,48,170,0.4)] no-butterfly"
            >
              <span>Clear All Search Filters</span>
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => onSelectItem(item)}
                  className="cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <GlowCard intensity="medium" rounded="rounded-3xl">
                    <div className="group relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-end border border-white/10 bg-[#07060f]">
                      
                      {/* Background Full Image */}
                      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                        <DesignArtwork
                          type={item.mockupType}
                          imageUrl={item.image}
                          altText={item.title}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Dark gradient backdrop to protect legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

                      {/* Liquid frosted glass hover cover overlay */}
                      <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-bold font-mono z-20">
                        <span className="tracking-wider">Explore Case Study</span>
                        <ArrowUpRight className="w-5 h-5 text-[#dfa2da]" />
                      </div>

                      {/* Overlaid Card Info (Legible on Gradient) */}
                      <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end space-y-3.5 pointer-events-none">
                        <div>
                          {/* Upper line */}
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-200 mb-1.5">
                            <span className="text-[#dfa2da] font-extrabold tracking-wider bg-black/40 backdrop-blur px-2.5 py-1 rounded-lg border border-white/5">{item.categoryLabel}</span>
                            <span className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur border border-white/5 text-[10px] text-slate-100 font-bold">{item.clientCountry}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-extrabold text-white font-display group-hover:text-[#dfa2da] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {item.description}
                          </p>
                        </div>

                        {/* Card Footer */}
                        <div className="pt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-300">
                          <div className="flex items-center gap-1.5 bg-black/25 px-2 py-1 rounded-lg">
                            {item.colors.slice(0, 4).map((c, i) => (
                              <span
                                key={i}
                                className="w-3.5 h-3.5 rounded-full border border-white/30 shadow-sm"
                                style={{ backgroundColor: c.hex }}
                              />
                            ))}
                          </div>
                          <span className="text-[#dfa2da] group-hover:text-white transition-colors font-bold flex items-center gap-1">
                            View Specs <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Minimal Bottom CTA Strip with Rotating Conic Glow */}
        <div className="mt-12">
          <GlowCard intensity="vibrant" rounded="rounded-3xl">
            <div className="p-6 bg-[#090714] liquid-glass flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white font-display">Need a custom design format?</h4>
                <p className="text-xs text-slate-300 mt-0.5">I create custom vector assets, 3D packaging wraps, and marketing kits.</p>
              </div>
              <button
                onClick={() => onOrderSimilar('Custom Project')}
                className="px-5 py-3 text-xs font-black text-white btn-gradient-purple-pink rounded-2xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-[0_0_20px_rgba(207,48,170,0.4)]"
              >
                <span>Request Custom Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </GlowCard>
        </div>

      </div>
    </section>
  );
};
