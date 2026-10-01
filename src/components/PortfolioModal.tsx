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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveImageIndex(0);
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

  return (
    <div
      data-no-butterfly="true"
      data-visual-window="true"
      data-modal="true"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn visual-window modal-window no-butterfly"
    >
      <div className="fixed inset-0" onClick={onClose} />

      {/* Uiverse Glow Rotating Conic Border Wrapper */}
      <div 
        data-no-butterfly="true"
        data-visual-window="true"
        className="relative w-full max-w-4xl p-[2px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(207,48,170,0.35),0_0_30px_rgba(64,47,181,0.5)] my-auto max-h-[92vh] flex flex-col z-10 visual-window no-butterfly"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Outer Rotating Conic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)] filter blur-[18px] opacity-75 pointer-events-none -z-20" />
        
        {/* Crisp Rotating Conic Border */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)] opacity-100 pointer-events-none -z-10" />

        {/* Modal Core Window */}
        <div className="relative w-full bg-[#080712] rounded-[22px] overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d0a1f]/90">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-[#dfa2da] font-bold">{item.categoryLabel}</span>
              <span className="text-slate-600">/</span>
              <span>{item.year}</span>
              <span className="text-slate-600">/</span>
              <span>{item.client}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {/* Gallery Image */}
            <div className="space-y-2">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-black neu-3d-inset">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {galleryImages.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
                      className="p-1.5 rounded-full bg-black/70 text-white border border-white/20 pointer-events-auto hover:bg-[#cf30aa] hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
                      className="p-1.5 rounded-full bg-black/70 text-white border border-white/20 pointer-events-auto hover:bg-[#cf30aa] hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#cf30aa] shadow-[0_0_10px_rgba(207,48,170,0.5)]' : 'border-white/10 opacity-60'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Description */}
            <div>
              <h2 className="text-2xl font-bold text-white font-display">
                {item.title}
              </h2>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0e0b24]/60 border border-[#402fb5]/30 text-xs">
              <div>
                <span className="text-amber-400 font-mono font-bold uppercase block mb-1">Challenge</span>
                <p className="text-slate-300 leading-relaxed">{item.challenge}</p>
              </div>
              <div>
                <span className="text-[#dfa2da] font-mono font-bold uppercase block mb-1">Solution</span>
                <p className="text-slate-300 leading-relaxed">{item.solution}</p>
              </div>
            </div>

            {/* Deliverables & Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#0e0b24]/60 border border-[#402fb5]/30 space-y-2">
                <span className="font-mono text-slate-400 uppercase font-semibold block">Deliverables</span>
                <ul className="space-y-1.5 text-slate-200">
                  {item.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#cf30aa]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#0e0b24]/60 border border-[#402fb5]/30 space-y-3">
                <div>
                  <span className="font-mono text-slate-400 uppercase font-semibold block mb-1.5">Master Formats</span>
                  <div className="flex flex-wrap gap-1">
                    {item.formats.map((f, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-lg bg-white/5 border border-[#cf30aa]/30 font-mono text-[#dfa2da]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-slate-400 uppercase font-semibold block mb-1">Typography</span>
                  <p className="font-mono text-slate-300">{item.fonts.join(' • ')}</p>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="p-4 rounded-2xl bg-[#0e0b24]/60 border border-[#402fb5]/30">
              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span className="text-slate-400 uppercase font-semibold">Color Palette</span>
                <span className="text-slate-500">Click to copy</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {item.colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => copyColor(c.hex)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-center cursor-pointer"
                  >
                    <div
                      className="w-full h-8 rounded-lg mb-1.5 border border-white/10 flex items-center justify-center shadow-inner"
                      style={{ backgroundColor: c.hex }}
                    >
                      {copiedHex === c.hex && <Check className="w-3.5 h-3.5 text-white font-bold" />}
                    </div>
                    <span className="text-xs font-bold text-white block truncate">{c.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{c.hex}</span>
                  </button>
                ))}
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
              <MessageCircle className="w-4 h-4 text-[#dfa2da]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookSimilar(item.title);
              }}
              className="px-5 py-2 text-xs font-extrabold text-white neu-3d-btn-primary rounded-xl flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(207,48,170,0.5)]"
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
