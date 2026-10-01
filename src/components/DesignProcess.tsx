import React from 'react';
import { Compass, Palette, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { GlowCard } from './GlowCard';

export const DesignProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Brief & Direction',
      description: 'Review audience, benchmarks, aesthetic goals, and project scope.',
      icon: Compass,
      tool: 'Figma / Brief',
    },
    {
      number: '02',
      title: 'Vector Exploration',
      description: 'Draft 2 to 6 unique vector concepts adhering to strict grid geometry.',
      icon: Palette,
      tool: 'Illustrator',
    },
    {
      number: '03',
      title: 'Iterative Refinement',
      description: 'Fine-tune typography, color palettes, spacing, and 3D mockups.',
      icon: RefreshCw,
      tool: 'Photoshop',
    },
    {
      number: '04',
      title: 'Master Delivery',
      description: 'Package all vector source files, print PDFs, and copyright assignment.',
      icon: Send,
      tool: 'Vector Kits',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Design Workflow
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            4-step streamlined pipeline from creative brief to master vector delivery.
          </p>
        </div>

        {/* 4 Steps Grid with Rotating Conic Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <GlowCard key={step.number} intensity="medium" rounded="rounded-3xl">
                <div
                  className="bg-[#090714] liquid-glass-card rounded-3xl p-6 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-extrabold text-white/20 font-mono group-hover:text-[#dfa2da] transition-colors">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-2xl neu-3d-inset text-[#dfa2da] flex items-center justify-center border border-[#cf30aa]/20 shadow-inner group-hover:shadow-[inset_0_0_12px_rgba(207,48,170,0.4)]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#dfa2da] font-bold block mb-1">
                      {step.tool}
                    </span>

                    <h3 className="text-base font-bold text-white font-display mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
