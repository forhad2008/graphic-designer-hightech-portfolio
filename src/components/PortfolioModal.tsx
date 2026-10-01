import React, { useEffect, useState } from 'react';
import { PortfolioItem } from '../types';
import {
  X,
  Check,
  ArrowUpRight,
  CheckCircle,
  MessageCircle,
  Star,
  Layers,
  DownloadCloud,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookSimilar: (itemTitle: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose, onBookSimilar }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const galleryImages = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  // Dynamic style extraction based on the design's own color palette
  const hexes = item.colors && item.colors.length > 0 ? item.colors.map((c) => c.hex) : ['#402fb5', '#cf30aa'];
  const c1 = hexes[0] || '#402fb5';
  const c2 = hexes[1] || hexes[0] || '#a099d8';
  const c3 = hexes[2] || hexes[1] || hexes[0] || '#cf30aa';
  const c4 = hexes[3] || hexes[2] || hexes[1] || hexes[0] || '#dfa2da';

  const conicBackground = `conic-gradient(rgba(0,0,0,0) 0%, ${c1} 12%, ${c2} 22%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 50%, ${c3} 65%, ${c4} 75%, rgba(0,0,0,0) 90%)`;

  return (
    <div
      data-no-butterfly="true"
      data-visual-window="true"
      data-modal="true"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn visual-window modal-window no-butterfly"
    >
      <div className="fixed inset-0" onClick={onClose} />

      {/* Uiverse Glow Rotating Conic Border Wrapper with Dynamic Shadows */}
      <div 
        data-no-butterfly="true"
        data-visual-window="true"
        className="relative w-full max-w-5xl p-[2px] rounded-3xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10 visual-window no-butterfly transition-all duration-500"
        style={{
          boxShadow: `0 0 50px ${c3}30, 0 0 30px ${c1}40`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Outer Rotating Conic Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] filter blur-[18px] opacity-75 pointer-events-none -z-20"
          style={{ backgroundImage: conicBackground }}
        />
        
        {/* Crisp Rotating Conic Border */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] opacity-100 pointer-events-none -z-10"
          style={{ backgroundImage: conicBackground }}
        />

        {/* Modal Core Window */}
        <div className="relative w-full bg-[#080712] rounded-[22px] overflow-hidden flex flex-col max-h-[90vh]">
          
          {/* Floating Absolute Close Button (Sleek Circular Glass over the Image) */}
          <button
            onMouseEnter={() => setIsCloseHovered(true)}
            onMouseLeave={() => setIsCloseHovered(false)}
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white/90 border border-white/10 hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer"
            style={isCloseHovered ? { backgroundColor: c3, borderColor: 'transparent', color: '#fff' } : {}}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content Wrapper (Scrollable) */}
          <div className="overflow-y-auto flex-1 flex flex-col custom-scrollbar bg-[#05040d]">
            
            {/* Full Width & Height Stacked Gallery Presentation */}
            <div className="flex flex-col w-full bg-[#020108] border-b border-white/10 divide-y divide-white/5">
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${item.title} Presentation - Part ${idx + 1}`}
                  className="w-full h-auto block select-none"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Description, Specs, Palette (Padded Area) */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title & Description */}
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-white font-display tracking-tight sm:text-3xl">
                  {item.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-2xl bg-[#090715]/75 border border-white/5 text-xs shadow-lg backdrop-blur-sm">
                <div className="space-y-1.5">
                  <span className="font-mono font-bold uppercase tracking-wider block" style={{ color: c2 }}>Challenge</span>
                  <p className="text-slate-300 leading-relaxed">{item.challenge}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="font-mono font-bold uppercase tracking-wider block" style={{ color: c3 }}>Solution</span>
                  <p className="text-slate-300 leading-relaxed">{item.solution}</p>
                </div>
              </div>

              {/* Deliverables & Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 space-y-2.5 shadow-lg backdrop-blur-sm">
                  <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block">Deliverables</span>
                  <ul className="space-y-2 text-slate-200">
                    {item.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: c3 }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 space-y-3.5 shadow-lg backdrop-blur-sm">
                  <div>
                    <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-2">Master Formats</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.formats.map((f, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 font-mono font-semibold text-[10px]" style={{ color: c3, borderColor: `${c3}30` }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">Typography</span>
                    <p className="font-mono text-slate-300 font-semibold">{item.fonts.join('  •  ')}</p>
                  </div>
                </div>
              </div>

              {/* Color Palette */}
              <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-slate-400 uppercase font-bold tracking-wider">Color Palette</span>
                  <span className="text-slate-500 font-semibold">Click swatch to copy hex</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
                  {item.colors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => copyColor(c.hex)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#cf30aa]/30 transition-all text-center cursor-pointer group"
                    >
                      <div
                        className="w-full h-10 rounded-lg mb-2 border border-white/10 flex items-center justify-center shadow-inner transition-transform group-hover:scale-[1.04]"
                        style={{ backgroundColor: c.hex }}
                      >
                        {copiedHex === c.hex && <Check className="w-4 h-4 text-white font-extrabold drop-shadow" />}
                      </div>
                      <span className="text-xs font-bold text-white block truncate">{c.name}</span>
                      <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{c.hex}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[#0d0a1f] border-t border-white/10 flex items-center justify-between gap-3">
            <a
              href="https://wa.me/8801342900364"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-[#dfa2da]" style={{ color: c3 }} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookSimilar(item.title);
              }}
              className="px-5 py-2 text-xs font-extrabold text-white rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: c3,
                boxShadow: `0 0 20px ${c3}60`,
              }}
            >
              <span>Order Similar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
