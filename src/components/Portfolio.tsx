import React from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { DesignArtwork } from './DesignArtworks';
import { ArrowUpRight, FolderKanban, Eye, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GlowCard } from './GlowCard';

interface PortfolioProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOrderSimilar: (category: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectItem, onOrderSimilar }) => {
  return (
    <section className="py-20 md:py-28 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-1.5 font-bold">
              <FolderKanban className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>LOGO & BRANDING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Logo & Branding
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Brand systems, print packaging, and digital marketing assets.
            </p>
          </div>
        </div>

        {/* Portfolio Grid with Rotating Conic Glow on Every Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.id}
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
            </div>
          ))}
        </div>

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
