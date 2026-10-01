import React from 'react';
import { CLIENT_REVIEWS } from '../data/portfolioData';
import { Star, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { GlowCard } from './GlowCard';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Client Feedback
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            5.0 ★ rating from founders across 14+ countries.
          </p>
        </div>

        {/* Reviews Grid with Rotating Conic Glow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.slice(0, 3).map((rev) => (
            <GlowCard key={rev.id} intensity="medium" rounded="rounded-3xl">
              <div
                className="bg-[#090714] liquid-glass-card rounded-3xl p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-300 gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                      ))}
                    </div>

                    <span className="flex items-center gap-1 text-[10px] font-mono text-[#dfa2da] neu-3d-inset border border-[#cf30aa]/20 px-2.5 py-1 rounded-xl font-bold">
                      <CheckCircle2 className="w-3 h-3 text-[#cf30aa]" />
                      Verified ({rev.orderValue})
                    </span>
                  </div>

                  <p className="text-slate-200 text-xs leading-relaxed mb-5 italic">
                    &ldquo;{rev.reviewText}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {rev.avatarUrl && (
                      <img
                        src={rev.avatarUrl}
                        alt={rev.clientName}
                        className="w-9 h-9 rounded-xl object-cover border border-white/20 shadow-sm"
                      />
                    )}
                    <div>
                      <h4 className="font-bold text-white font-display text-xs">{rev.clientName}</h4>
                      <span className="text-[10px] font-mono text-slate-400">{rev.country} · {rev.projectType}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">{rev.date}</span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Minimal Country Ribbon */}
        <div className="mt-10 p-4 rounded-3xl neu-3d-inset border border-[#402fb5]/30 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-300 font-mono font-medium">
          <span>🇺🇸 United States</span>
          <span>🇬🇧 United Kingdom</span>
          <span>🇩🇪 Germany</span>
          <span>🇨🇦 Canada</span>
          <span>🇦🇺 Australia</span>
          <span>🇦🇪 UAE</span>
        </div>

      </div>
    </section>
  );
};
