import React from 'react';
import { FIVERR_GIGS } from '../data/portfolioData';
import { FiverrGig } from '../types';
import { Star, CheckCircle2, ExternalLink, Award } from 'lucide-react';
import { GlowCard } from './GlowCard';

interface ServicesGigsProps {
  onSelectGig: (gig: FiverrGig) => void;
}

export const ServicesGigs: React.FC<ServicesGigsProps> = ({ onSelectGig }) => {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <Award className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>FIVERR GIGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Specialized Services
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            Order via Fiverr escrow protection or commission direct milestones.
          </p>
        </div>

        {/* Gigs Grid with Rotating Conic Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FIVERR_GIGS.map((gig) => (
            <GlowCard key={gig.id} intensity="medium" rounded="rounded-3xl">
              <div
                className="bg-[#090714] liquid-glass-card rounded-3xl p-3 flex flex-col justify-between transition-all duration-300 group h-full"
              >
                <div>
                  {/* Media Header */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-black neu-3d-inset border border-white/10">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080712] via-transparent to-black/40" />

                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-[#dfa2da] border border-[#cf30aa]/30 shadow-sm">
                        {gig.badge || 'Gig'}
                      </span>
                      <span className="text-[10px] font-mono text-amber-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 shadow-sm">
                        {gig.ordersInQueue} in queue
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold bg-[#cf30aa]/30 px-2.5 py-0.5 rounded-lg border border-[#cf30aa]/50 shadow-sm">
                        {gig.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-[#dfa2da] transition-colors leading-snug">
                      {gig.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <div className="flex items-center text-amber-300">
                        <Star className="w-3.5 h-3.5 fill-amber-300" />
                        <span className="font-bold ml-1 text-white">{gig.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-slate-600">·</span>
                      <span>{gig.reviewsCount} reviews</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-[#dfa2da] font-semibold">100% On-Time</span>
                    </div>

                    <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
                      {gig.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#cf30aa] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="p-4 mt-2 neu-3d-inset rounded-2xl flex items-center justify-between border border-white/5 bg-[#0b0818]">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">From</span>
                    <p className="text-2xl font-bold text-white font-mono">
                      ${gig.startingPrice} <span className="text-xs font-normal text-slate-400 font-sans">USD</span>
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectGig(gig)}
                    className="px-5 py-2.5 text-xs font-black text-white btn-gradient-purple-pink rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(207,48,170,0.4)] hover:shadow-[0_0_24px_rgba(207,48,170,0.65)]"
                  >
                    <span>Order on Fiverr</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
