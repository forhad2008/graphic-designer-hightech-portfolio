import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, CategoryType } from '../types';
import { DesignArtwork } from './DesignArtworks';
import { ArrowUpRight, FolderKanban, Eye, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GlowCard } from './GlowCard';

interface PortfolioProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOrderSimilar: (category: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectItem, onOrderSimilar }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'branding', label: 'Branding' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'social', label: 'Social Ads' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'print', label: 'Print' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-1.5 font-bold">
              <FolderKanban className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Selected Work
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Brand systems, print packaging, and digital marketing assets.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 neu-inset rounded-2xl overflow-x-auto border border-[#402fb5]/30">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'btn-gradient-purple-pink text-white font-bold shadow-[0_0_12px_rgba(207,48,170,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid with Rotating Conic Glow on Every Card */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectItem(item)}
                className="cursor-pointer"
              >
                <GlowCard intensity="medium" rounded="rounded-3xl">
                  <div className="group bg-[#090715]/95 liquid-glass-card rounded-3xl p-2.5 overflow-hidden transition-all duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black neu-3d-inset border border-white/10">
                      <DesignArtwork
                        type={item.mockupType}
                        imageUrl={item.image}
                        altText={item.title}
                      />

                      {/* Hover overlay with liquid frosted glass */}
                      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-bold font-mono">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 text-[#dfa2da]" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                          <span className="text-[#dfa2da] font-bold tracking-wide drop-shadow">{item.categoryLabel}</span>
                          <span className="px-2 py-0.5 rounded-lg bg-white/5 border border-[#cf30aa]/30 text-[10px] text-slate-200">{item.clientCountry}</span>
                        </div>

                        <h3 className="text-base font-bold text-white font-display group-hover:text-[#dfa2da] transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          {item.colors.slice(0, 4).map((c, i) => (
                            <span
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-white/30 shadow-sm"
                              style={{ backgroundColor: c.hex }}
                            />
                          ))}
                        </div>
                        <span className="text-slate-300 group-hover:text-[#dfa2da] transition-colors font-semibold">
                          Specs →
                        </span>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
