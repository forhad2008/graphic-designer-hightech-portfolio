import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { GlowCard } from './GlowCard';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            Key details on deliverables, licensing, and turnaround.
          </p>
        </div>

        {/* Accordion list with Rotating Conic Glow */}
        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <GlowCard
                key={i}
                alwaysGlow={isOpen}
                intensity={isOpen ? 'medium' : 'subtle'}
                rounded="rounded-2xl"
              >
                <div
                  className="rounded-2xl bg-[#090714] liquid-glass-card overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white font-display">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-xl neu-3d-inset border border-[#cf30aa]/20 flex items-center justify-center text-slate-400 shrink-0 shadow-inner">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#dfa2da]" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 animate-fadeIn font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </GlowCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
