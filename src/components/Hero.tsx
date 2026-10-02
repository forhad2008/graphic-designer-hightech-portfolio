import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  Zap,
  Gem,
  ShieldCheck,
  Check,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { GlowCard } from './GlowCard';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { ProfileAvatar } from './ProfileAvatar';
import { VeoCinematicVideo } from './VeoCinematicVideo';

interface HeroProps {
  onExploreWork: () => void;
  onBookProject: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onBookProject, onOpenEstimator }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<'brand' | 'packaging' | 'social' | 'veo'>('brand');

  const showcaseItems = {
    brand: {
      title: 'Aura Botanicals',
      category: 'Brand Identity',
      image: './brand6.png',
      tag: 'Vector AI / 300DPI',
      font: 'Modern Sans-serif + Plus Jakarta Sans',
      colors: [
        { hex: '#112C20', name: 'Forest Green' },
        { hex: '#305C33', name: 'Foliage' },
        { hex: '#FFFFFF', name: 'Pure White' },
        { hex: '#F3F4F1', name: 'Soft Cream' },
      ]
    },
    packaging: {
      title: 'Volt Energy Can',
      category: 'Packaging Dieline',
      image: './brand3.png',
      tag: 'CMYK Bleeds + Foil',
      font: 'Cabinet Grotesk + JetBrains Mono',
      colors: [
        { hex: '#E50914', name: 'Crimson' },
        { hex: '#0C0C0E', name: 'Pitch Black' },
        { hex: '#FF4500', name: 'Lava Orange' },
        { hex: '#BDBDBD', name: 'Silver' },
      ]
    },
    social: {
      title: 'Abdullah Psychotic Luxe',
      category: 'Social Ad Campaign',
      image: './brand5.png',
      tag: 'Feed & Story PSD',
      font: 'Sophisticated Serif + Cabinet Grotesk',
      colors: [
        { hex: '#000000', name: 'Matte Black' },
        { hex: '#FF0000', name: 'Vibrant Red' },
        { hex: '#C0C0C0', name: 'Silver' },
        { hex: '#1A1A1A', name: 'Dark Charcoal' },
      ]
    },
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const activeItem = showcaseItems[activeShowcaseTab];

  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background ambient lighting with fluid floating purple & magenta liquid blobs */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[500px] bg-gradient-to-tr from-[#402fb5]/25 via-[#cf30aa]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-liquid-blob-1" />
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-gradient-to-br from-[#cf30aa]/20 via-[#402fb5]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10 animate-liquid-blob-2" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8 items-center">
          
          {/* LEFT COLUMN: Minimal Typography & Call to Action */}
          <div className="xl:col-span-5 space-y-5 text-left">
            
            {/* Uiverse Glow Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-mono border border-[#cf30aa]/30 shadow-[0_0_15px_rgba(207,48,170,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#cf30aa] animate-pulse shadow-[0_0_10px_#cf30aa]" />
              <span className="text-white font-medium">Available for Q2 Projects</span>
              <span className="text-slate-500">·</span>
              <span className="text-[#dfa2da] font-semibold drop-shadow">5.0 ★ (120+ Reviews)</span>
            </div>

            {/* Clean Punchy Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] font-display">
              Strategic Design.<br />
              <span className="text-gradient-purple-pink">Memorable Brands.</span>
            </h1>

            {/* Short Minimal Subcopy */}
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed font-normal">
              Brand identity, print packaging, and high-CTR visual assets for founders and creators worldwide.
            </p>

            {/* 4 Minimal Metric Badges with Rotating Conic Glow */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
              <GlowCard intensity="subtle" rounded="rounded-2xl">
                <div className="p-3 bg-[#090714] neu-3d-raised-sm">
                  <span className="text-[#dfa2da] font-mono block font-bold text-sm drop-shadow-[0_2px_8px_rgba(207,48,170,0.5)]">100%</span>
                  <span className="text-[11px] text-slate-300 font-medium">On-Time</span>
                </div>
              </GlowCard>
              <GlowCard intensity="subtle" rounded="rounded-2xl">
                <div className="p-3 bg-[#090714] neu-3d-raised-sm">
                  <span className="text-[#dfa2da] font-mono block font-bold text-sm drop-shadow-[0_2px_8px_rgba(207,48,170,0.5)]">24-48h</span>
                  <span className="text-[11px] text-slate-300 font-medium">Turnaround</span>
                </div>
              </GlowCard>
              <GlowCard intensity="subtle" rounded="rounded-2xl">
                <div className="p-3 bg-[#090714] neu-3d-raised-sm">
                  <span className="text-[#dfa2da] font-mono block font-bold text-sm drop-shadow-[0_2px_8px_rgba(207,48,170,0.5)]">Vector</span>
                  <span className="text-[11px] text-slate-300 font-medium">Master Files</span>
                </div>
              </GlowCard>
              <GlowCard intensity="subtle" rounded="rounded-2xl">
                <div className="p-3 bg-[#090714] neu-3d-raised-sm">
                  <span className="text-[#dfa2da] font-mono block font-bold text-sm drop-shadow-[0_2px_8px_rgba(207,48,170,0.5)]">Full Rights</span>
                  <span className="text-[11px] text-slate-300 font-medium">Commercial</span>
                </div>
              </GlowCard>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 text-xs font-black text-white btn-gradient-purple-pink rounded-2xl flex items-center gap-2 tracking-wide shadow-[0_0_24px_rgba(207,48,170,0.4)] hover:shadow-[0_0_35px_rgba(207,48,170,0.65)] hover:-translate-y-0.5 active:translate-y-1 transition-all cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-5 py-3.5 text-xs font-semibold text-white neu-3d-btn rounded-2xl flex items-center gap-2 border border-[#402fb5]/40 hover:border-[#cf30aa]/50"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#dfa2da]" />
                <span>Estimate Project</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Minimal Design Showcase Container (7 cols) with Rotating Conic Glow */}
          <div className="xl:col-span-7">
            <GlowCard alwaysGlow intensity="vibrant" rounded="rounded-3xl">
              <div className="relative rounded-3xl bg-[#090714]/90 neu-3d-raised-lg p-5 sm:p-6 backdrop-blur-xl">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2.5">
                    <ProfileAvatar sizeClassName="w-8 h-8 rounded-xl" textSizeClassName="text-xs" />
                    <span className="text-xs font-bold text-white font-display tracking-wide">
                      Featured Case Studies
                    </span>
                  </div>

                  {/* Tabs inside 3D sunken socket */}
                  <div className="flex items-center gap-1 p-1.5 neu-3d-inset rounded-2xl border border-white/5">
                    {(['brand', 'packaging', 'social', 'veo'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveShowcaseTab(tab)}
                        className={`px-3 py-1.5 text-[11px] font-mono uppercase rounded-xl transition-all cursor-pointer ${
                          activeShowcaseTab === tab
                            ? 'btn-gradient-purple-pink text-white font-bold shadow-[0_0_12px_rgba(207,48,170,0.4)]'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {tab === 'veo' ? 'Veo Video' : tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Showcase Grid */}
                {activeShowcaseTab === 'veo' ? (
                  <div className="w-full">
                    <VeoCinematicVideo />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  
                  {/* Image Card (8 cols) */}
                  <div className="lg:col-span-8 rounded-2xl neu-3d-inset relative overflow-hidden group min-h-[260px] p-1.5 border border-white/10">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <img
                        src={activeItem.image}
                        alt={activeItem.title}
                        className="w-full h-full object-cover min-h-[260px] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#dfa2da] block font-bold tracking-wider drop-shadow">
                            {activeItem.category}
                          </span>
                          <h3 className="text-base font-bold text-white font-display">
                            {activeItem.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-xl bg-black/80 text-slate-200 border border-[#cf30aa]/30 shadow-sm">
                          {activeItem.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Specs (4 cols) */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-3">
                    
                    {/* Palette */}
                    <div className="p-3.5 rounded-2xl neu-3d-raised-sm bg-[#0d0a1b]">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mb-2.5">
                        <span className="font-semibold">Palette</span>
                        <span className="text-[9px] text-[#dfa2da] font-semibold">Click to copy</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {activeItem.colors.map((c) => (
                          <button
                            key={c.hex}
                            onClick={() => copyHex(c.hex)}
                            className="flex flex-col items-center cursor-pointer group/c"
                            title={`Copy ${c.hex}`}
                          >
                            <div
                              className="w-full aspect-square rounded-xl mb-1 border border-white/20 transition-all duration-150 group-hover/c:scale-110 group-hover/c:shadow-[0_0_12px_rgba(207,48,170,0.5)] flex items-center justify-center shadow-inner"
                              style={{ backgroundColor: c.hex }}
                            >
                              {copiedHex === c.hex && (
                                <Check className="w-3.5 h-3.5 text-white font-black" />
                              )}
                            </div>
                            <span className="text-[7px] font-mono text-slate-400 truncate w-full text-center">
                              {c.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font pairing */}
                    <div className="p-3.5 rounded-2xl neu-3d-raised-sm bg-[#0d0a1b]">
                      <span className="text-[10px] font-mono text-slate-400 block mb-1">Typography</span>
                      <span className="text-xs font-bold text-white block truncate">{activeItem.font}</span>
                    </div>

                    {/* Start project link */}
                    <button
                      onClick={onBookProject}
                      className="p-3.5 rounded-2xl neu-3d-btn text-[#dfa2da] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer border border-[#cf30aa]/30 shadow-[0_0_15px_rgba(207,48,170,0.2)]"
                    >
                      <span>Start Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                  </div>

                </div>
                )}

              </div>
            </GlowCard>
          </div>

        </div>

      </div>
    </section>
  );
};
