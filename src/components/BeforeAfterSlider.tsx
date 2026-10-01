import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { IMAGE_ASSETS } from '../data/imageAssets';

const RobustImage: React.FC<{
  sources: string[];
  alt: string;
  className?: string;
  isAfter?: boolean;
}> = ({ sources, alt, className = '', isAfter = false }) => {
  const [index, setIndex] = useState(0);

  const candidateList = sources.filter(Boolean);
  const currentSrc = candidateList[index];

  if (!currentSrc || index >= candidateList.length) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none ${
        isAfter
          ? 'bg-gradient-to-br from-[#130722] via-[#090714] to-[#1a0833]'
          : 'bg-gradient-to-br from-[#160a0f] via-[#080612] to-[#12080a]'
      }`}>
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-2xl border ${
          isAfter
            ? 'bg-[#cf30aa]/10 border-[#cf30aa]/40 text-[#dfa2da]'
            : 'bg-red-500/10 border-red-500/30 text-red-300'
        }`}>
          <span className="text-3xl font-black font-display">{isAfter ? 'AB' : 'L'}</span>
        </div>
        <h4 className="text-base font-bold text-white font-display mb-1">
          {isAfter ? 'Aura Botanicals Redesign' : 'Aura Legacy Concept'}
        </h4>
        <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 shadow-inner">
          {isAfter ? 'Aura Skincare Packaging Showcase' : 'Initial Draft Outline'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => {
        setIndex((prev) => prev + 1);
      }}
      className={className}
    />
  );
};

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/5 bg-[#04030a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Case Study: Aura Botanicals
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Slide to compare the legacy wellness mark against the fully realized organic skincare identity &amp; premium cosmetics packaging.
          </p>

          {/* Quick preset buttons in 3D socket */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="p-1.5 neu-3d-inset rounded-2xl flex items-center gap-1.5 border border-[#402fb5]/30 bg-[#080614]">
              <button
                onClick={() => setSliderPosition(90)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  sliderPosition >= 80
                    ? 'neu-3d-btn text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  sliderPosition > 20 && sliderPosition < 80
                    ? 'btn-gradient-purple-pink text-white font-bold shadow-[0_0_12px_rgba(207,48,170,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Split View
              </button>
              <button
                onClick={() => setSliderPosition(10)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  sliderPosition <= 20
                    ? 'neu-3d-btn text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                After
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Canvas in 3D Frame */}
        <div className="max-w-4xl mx-auto">
          <GlowCard alwaysGlow intensity="vibrant" rounded="rounded-3xl">
            <div className="bg-[#090714] liquid-glass-card p-2.5 sm:p-3 rounded-3xl">
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl cursor-ew-resize bg-[#06040d]"
              >
                {/* AFTER: Modern Brand (brand6.png showcase) */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#12081f] via-[#080612] to-[#1e0a2b]">
                  {/* Subtle technical brand lines grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  <RobustImage
                    sources={[
                      './brand6.png',
                      './brand6.png',
                      'brand6.png',
                      './logo1p.png',
                      IMAGE_ASSETS.beforeAfter.afterRedesign,
                      'https://images.unsplash.com/photo-1608248597359-009947e45260?auto=format&fit=crop&w=1200&q=80'
                    ]}
                    isAfter={true}
                    alt="After Transformed Logo"
                    className="w-full h-full object-cover z-10 transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-emerald-950/85 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold drop-shadow shadow-[0_0_15px_rgba(16,185,129,0.3)] z-20">
                    AFTER: Aura Botanicals Packaging
                  </div>
                </div>

                {/* BEFORE: Legacy Brand (logo1.png or high quality legacy fallback) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#cf30aa] z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div
                    className="absolute inset-0 h-full bg-gradient-to-br from-[#180a0f] via-[#090712] to-[#12080c] flex items-center justify-center"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    }}
                  >
                    {/* Retro architectural branding lines grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
                    <RobustImage
                      sources={[
                        './logo1.png',
                        './logo1.png',
                        'logo1.png',
                        IMAGE_ASSETS.beforeAfter.beforeLegacy,
                        'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80'
                      ]}
                      isAfter={false}
                      alt="Before Legacy Logo"
                      className="w-full h-full object-cover z-10 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/50 text-slate-300 text-xs font-mono font-bold shadow-md z-20">
                      BEFORE: Legacy Design Draft
                    </div>
                  </div>
                </div>

                {/* Drag Handle 3D Dial */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#cf30aa] to-[#402fb5] shadow-[0_0_18px_#cf30aa] z-30 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full btn-gradient-purple-pink flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(207,48,170,0.6)]">
                    <ArrowLeftRight className="w-4 h-4 stroke-[3] text-white" />
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>

          <div className="flex items-center justify-between mt-3 text-xs text-slate-500 font-mono px-1">
            <span>← Slide left to view Transformed Aura Botanicals</span>
            <span className="text-[#dfa2da] font-semibold">Case Study Comparison</span>
            <span>Slide right to view Original Concept →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
