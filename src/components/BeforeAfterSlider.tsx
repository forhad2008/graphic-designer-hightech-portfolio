import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { IMAGE_ASSETS } from '../data/imageAssets';

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
            Brand Transformation
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Slide to compare legacy raster logo vs modern luxury vector redesign.
          </p>

          {/* Quick preset buttons in 3D socket */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="p-1.5 neu-3d-inset rounded-2xl flex items-center gap-1.5 border border-[#402fb5]/30 bg-[#080614]">
              <button
                onClick={() => setSliderPosition(10)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  sliderPosition <= 20
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
                onClick={() => setSliderPosition(90)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  sliderPosition >= 80
                    ? 'neu-3d-btn text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                After
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Canvas in 3D Frame with Rotating Conic Glow */}
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
                className="relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl cursor-ew-resize bg-black"
              >
                {/* AFTER: Modern Brand */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={IMAGE_ASSETS.beforeAfter.afterRedesign}
                    alt="After Redesign"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-[#090714]/85 border border-[#cf30aa]/50 text-[#dfa2da] text-xs font-mono font-bold drop-shadow shadow-[0_0_15px_rgba(207,48,170,0.3)]">
                    AFTER: Vector Identity (2026)
                  </div>
                </div>

                {/* BEFORE: Legacy */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#cf30aa]"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div
                    className="absolute inset-0 h-full bg-[#18181B] flex flex-col items-center justify-center p-6 text-center"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    }}
                  >
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-red-950/80 backdrop-blur-md border border-red-500/30 text-red-300 text-xs font-mono font-bold shadow-md">
                      BEFORE: Legacy Mark
                    </div>

                    <div className="flex flex-col items-center max-w-xs opacity-75">
                      <span className="text-3xl mb-2">📉⚙️</span>
                      <h3 className="text-xl font-serif text-slate-300 line-through">
                        Nexus-Systems Co.
                      </h3>
                      <p className="text-[11px] text-red-300 font-mono mt-1">
                        72 DPI Raster • Unscalable
                      </p>
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
            <span>← Slide left for Before</span>
            <span className="text-[#dfa2da] font-semibold">Interactive Comparison</span>
            <span>Slide right for After →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
