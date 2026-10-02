import React from 'react';
import { GRAPHICS_DESIGN_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';
import { DesignArtwork } from './DesignArtworks';
import { GlowCard } from './GlowCard';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ShowcaseProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOrderSimilar: (category: string) => void;
}

export const GraphicsDesignShowcase: React.FC<ShowcaseProps> = ({ onSelectItem, onOrderSimilar }) => {
  return (
    <section id="graphics-design" className="py-20 md:py-24 border-t border-white/5 relative bg-[#030208]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>GRAPHICS DESIGN PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Graphics Design
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              A curated showcase of commercial advertisements, editorial campaigns, theatrical posters, and luxury fashion visual assets.
            </p>
          </div>
        </div>

        {/* 12-Item Curated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GRAPHICS_DESIGN_ITEMS.map((item) => {
            const hexes = item.colors ? item.colors.map((c) => c.hex) : [];
            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              >
                <GlowCard intensity="subtle" rounded="rounded-3xl" customColors={hexes}>
                <div className="group relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden flex flex-col justify-end border border-white/10 bg-[#07060f]">
                  
                  {/* Image Render */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <DesignArtwork
                      type={item.mockupType}
                      imageUrl={item.image}
                      altText={item.title}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Image Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                  
                  <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-bold font-mono z-20">
                    <span className="tracking-wider">Explore Design Specs</span>
                    <ArrowUpRight className="w-5 h-5 text-[#dfa2da]" />
                  </div>

                  {/* Specs & Information */}
                  <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end space-y-3.5 pointer-events-none">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-200 mb-1.5">
                        <span className="text-[#dfa2da] font-extrabold tracking-wider bg-black/40 backdrop-blur px-2.5 py-1 rounded-lg border border-white/5 uppercase">
                          {item.categoryLabel}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur border border-white/5 text-[10px] text-slate-100 font-bold uppercase">
                          {item.clientCountry}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-extrabold text-white font-display group-hover:text-[#dfa2da] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {item.description}
                      </p>
                    </div>

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
          );
        })}
        </div>

      </div>
    </section>
  );
};
