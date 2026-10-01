import React, { useState } from 'react';
import { PRICING_PACKAGES } from '../data/portfolioData';
import { PricingPackage } from '../types';
import { Check, X, ArrowUpRight, Zap, Clock, Star } from 'lucide-react';
import { GlowCard } from './GlowCard';

interface PricingTiersProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onSelectPackage }) => {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP' | 'BDT'>('USD');

  const rates: Record<string, { symbol: string; rate: number }> = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    BDT: { symbol: '৳', rate: 118 },
  };

  const formatPrice = (usdPrice: number) => {
    const info = rates[currency];
    const converted = Math.round(usdPrice * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-white/5 relative bg-[#04030a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <Zap className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Transparent Packages
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            Fixed flat rates. Full vector master files &amp; commercial copyright included.
          </p>

          {/* Currency Toggle */}
          <div className="mt-5 inline-flex items-center gap-1.5 p-1.5 liquid-glass-pill rounded-2xl border border-[#402fb5]/30">
            {(['USD', 'EUR', 'GBP', 'BDT'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer ${
                  currency === curr
                    ? 'btn-gradient-purple-pink text-white shadow-[0_0_12px_rgba(207,48,170,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards with Rotating Conic Glow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <GlowCard
              key={pkg.id}
              alwaysGlow={pkg.popular}
              intensity={pkg.popular ? 'vibrant' : 'medium'}
              rounded="rounded-3xl"
              className={pkg.popular ? 'scale-[1.02] z-10' : ''}
            >
              <div
                className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative h-full bg-[#090714] ${
                  pkg.popular
                    ? 'liquid-glass-card p-7 sm:p-8'
                    : 'liquid-glass-card p-6 sm:p-7'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full btn-gradient-purple-pink text-white text-[10px] font-black font-mono uppercase tracking-wider shadow-[0_0_20px_rgba(207,48,170,0.7)]">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white font-display">
                      {pkg.name}
                    </h3>
                    <span className="text-xs font-mono text-[#dfa2da] font-bold px-2.5 py-1 rounded-xl neu-3d-inset border border-[#cf30aa]/20">
                      {pkg.initialConcepts} Concepts
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-1 min-h-[30px]">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="my-5 pb-5 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                        {formatPrice(pkg.priceUSD)}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">
                        / flat fee
                      </span>
                    </div>
                    
                    <div className="mt-2.5 flex items-center gap-3 text-xs font-mono text-slate-300">
                      <span className="flex items-center gap-1 text-[#dfa2da] font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#cf30aa]" />
                        {pkg.deliveryDays} Days Turnaround
                      </span>
                      <span>·</span>
                      <span className="text-amber-300 font-semibold drop-shadow">
                        {pkg.revisions}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        {feat.included ? (
                          <Check className="w-4 h-4 text-[#dfa2da] shrink-0 mt-0.5 stroke-[2.5]" />
                        ) : (
                          <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? 'text-slate-200 font-medium' : 'text-slate-500 line-through'}>
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-2xl neu-3d-inset mb-5 text-[11px] font-mono text-[#dfa2da] font-semibold border border-[#402fb5]/20">
                    {pkg.fileFormats.join(' · ')}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-4 rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'btn-gradient-purple-pink text-white shadow-[0_0_20px_rgba(207,48,170,0.5)]'
                      : 'neu-3d-btn text-white hover:text-[#dfa2da]'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </button>

              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
