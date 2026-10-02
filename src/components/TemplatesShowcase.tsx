import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  ChevronRight,
  FileCode,
  CheckCircle2,
  X,
  MessageCircle,
  Layers,
  Palette
} from 'lucide-react';
import { GlowCard } from './GlowCard';
import { DesignArtwork } from './DesignArtworks';

const getSafeAccent = (hexes: string[]): string => {
  for (const hex of hexes) {
    if (!hex || !hex.startsWith('#')) continue;
    const clean = hex.replace('#', '');
    let r = 0, g = 0, b = 0;
    if (clean.length === 3) {
      r = parseInt(clean[0] + clean[0], 16);
      g = parseInt(clean[1] + clean[1], 16);
      b = parseInt(clean[2] + clean[2], 16);
    } else if (clean.length === 6) {
      r = parseInt(clean.substring(0, 2), 16);
      g = parseInt(clean.substring(2, 4), 16);
      b = parseInt(clean.substring(4, 6), 16);
    }
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum >= 40 && lum <= 215) {
      return hex;
    }
  }
  return '#cf30aa';
};

export interface TemplateItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  format: string;
  image: string;
  description: string;
  gridRatio: string;
  colors: { name: string; hex: string }[];
  fonts: string[];
  deliverables: string[];
}

export const TEMPLATE_ITEMS: TemplateItem[] = [
  {
    id: 'tem-1',
    title: 'Thomas Shelby: Peaky Blinders Vintage Business Card',
    category: 'print',
    categoryLabel: 'Premium Business Card',
    format: 'Adobe Photoshop · Adobe Illustrator',
    image: './tem1.webp',
    description: 'A sophisticated, retro-inspired business card design featuring a dual-tone diagonal split in textured deep olive-bronze and warm champagne, highlighted by elegant metallic gold accents.',
    gridRatio: '3.5:2 Vertical Layout',
    colors: [
      { name: 'Bronze Brown', hex: '#4E4437' },
      { name: 'Champagne Gold', hex: '#D7D3C5' },
      { name: 'Accent Gold', hex: '#B88D3D' },
      { name: 'Deep Charcoal', hex: '#1A1917' }
    ],
    fonts: ['Cinzel Serif', 'Montserrat Sans'],
    deliverables: [
      'Print-Ready Vector PDF (300 DPI)',
      'Fully Layered PSD Mockup Asset',
      'Adobe Illustrator Vector Dielines',
      'High-Resolution CMYK Bleed Files'
    ]
  },
  {
    id: 'tem-2',
    title: 'Thomas Shelby: Golden Glitter Premium Identity Card',
    category: 'print',
    categoryLabel: 'Elegant Business Card',
    format: 'Adobe Illustrator · Photoshop',
    image: './tem2.webp',
    description: 'A sophisticated, textured business card design boasting a deep bronze-gold glitter finish, custom circular portrait placeholder, and luxury metallic accents.',
    gridRatio: '3.5:2 Standard Card',
    colors: [
      { name: 'Deep Bronze', hex: '#383129' },
      { name: 'Antique Gold', hex: '#987E4C' },
      { name: 'Warm Taupe', hex: '#5A4F41' },
      { name: 'Off-White', hex: '#E5E1DB' }
    ],
    fonts: ['Montserrat Sans', 'Cinzel Serif'],
    deliverables: [
      'Print-Ready Vector Files (.AI & .EPS)',
      'Double-Sided Layout Design with Bleeds',
      'Customizable Photo Placeholder PSD',
      'High-Resolution Realistic Mockup'
    ]
  },
  {
    id: 'tem-3',
    title: 'Thomas Shelby: Dark Bronze Metallic Hang Tag & Card',
    category: 'print',
    categoryLabel: 'Luxury Business Card',
    format: 'Adobe Photoshop · Illustrator',
    image: './tem3.webp',
    description: 'A luxury, textured business card and hangtag design showcasing a dark bronze-charcoal metallic finish accented by elegant gold typography and integrated portrait frame.',
    gridRatio: '3.5 x 2 Card Grid',
    colors: [
      { name: 'Dark Bronze Charcoal', hex: '#343129' },
      { name: 'Muted Gold', hex: '#B1966C' },
      { name: 'Off-White Linen', hex: '#E1DFD9' }
    ],
    fonts: ['Cinzel Serif', 'Montserrat Sans'],
    deliverables: [
      'Fully Layered PSD Mockup',
      'Print-Ready Vector Layout (AI/EPS)',
      'High-Resolution PDF with Bleed Marks',
      'Custom Gold Monogram Asset'
    ]
  },
  {
    id: 'tem-4',
    title: 'The Hunter: Rugged Vertical Linen Card Blueprint',
    category: 'print',
    categoryLabel: 'Vertical Business Card',
    format: 'Adobe Illustrator · Adobe Photoshop',
    image: './tem4.webp',
    description: 'A striking and rugged vertical business card design showcasing a detailed wolf head illustration alongside clean, structured typography on textured linen cardstock.',
    gridRatio: '3.5 x 2 Vertical Standard',
    colors: [
      { name: 'Textured Off-White', hex: '#E5E5E3' },
      { name: 'Deep Steel Blue', hex: '#1A3E5C' },
      { name: 'Ink Black', hex: '#111111' }
    ],
    fonts: ['Montserrat Sans', 'Cinzel Serif'],
    deliverables: [
      'Print-Ready Vector Template',
      'High-Resolution Wolf Illustration (.SVG)',
      'Layered PSD Mockup Asset',
      'Customizable Layout with 3mm Bleeds'
    ]
  },
  {
    id: 'tem-5',
    title: 'Thomas Shelby: Charcoal Black & Gold Industrial Set',
    category: 'print',
    categoryLabel: 'Business Card & Hang Tag',
    format: 'Adobe Photoshop · Illustrator',
    image: './tem5.webp',
    description: 'A sophisticated, dark-themed business card and hang tag design featuring a textured charcoal black background, striking gold accents, and vintage industrial aesthetics.',
    gridRatio: '3.5:2 Standard Layout',
    colors: [
      { name: 'Charcoal Black', hex: '#1E2022' },
      { name: 'Classic Gold', hex: '#C59B51' },
      { name: 'Muted Cream', hex: '#E6DCD0' }
    ],
    fonts: ['Cinzel Serif', 'Montserrat Sans', 'Playfair Display'],
    deliverables: [
      'Print-Ready Card Layout',
      'Fully Layered PSD Source File',
      'High-Resolution Realistic Mockup',
      'Customizable Vector Assets'
    ]
  },
  {
    id: 'tem-6',
    title: 'Thomas Shelby: Vintage Taupe Personal Branding Card',
    category: 'print',
    categoryLabel: 'Personal Business Card',
    format: 'Adobe Photoshop · Illustrator',
    image: './tem6.webp',
    description: 'This sophisticated business card template features a vintage-inspired aesthetic with a rich taupe background, luxurious gold accents, and a distinctive circular portrait frame.',
    gridRatio: '3.5 x 2 Standard Card',
    colors: [
      { name: 'Taupe Brown', hex: '#544A42' },
      { name: 'Vintage Gold', hex: '#C59D57' },
      { name: 'Soft Cream', hex: '#F0EBD9' },
      { name: 'Deep Charcoal', hex: '#3C352F' }
    ],
    fonts: ['Cinzel Serif', 'Montserrat Sans'],
    deliverables: [
      'Fully Customizable PSD Template',
      'High-Resolution Presentation Mockup',
      'Print-Ready CMYK Files with Bleed',
      'Organized Layers with Smart Objects'
    ]
  }
];

interface TemplatesShowcaseProps {
  onOrderSimilar: (categoryOrTitle: string) => void;
}

export const TemplatesShowcase: React.FC<TemplatesShowcaseProps> = ({ onOrderSimilar }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTemplate(null);
    };
    if (selectedTemplate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedTemplate]);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  return (
    <section id="design-templates" className="py-20 md:py-28 border-t border-white/5 relative bg-[#030209]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-2 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>DESIGN BLUEPRINTS & TEMPLATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Design Templates
            </h2>
            <p className="text-slate-400 text-sm mt-1.5 max-w-2xl leading-relaxed">
              Print-ready tactile business cards, luxury stationery, and corporate identity blueprints crafted with precision bleed margins and metallic foil plates.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#cf30aa] animate-pulse shadow-[0_0_8px_#cf30aa]" />
            <span>300 DPI CMYK Bleeds Ready</span>
          </div>
        </div>

        {/* Templates Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATE_ITEMS.map((item) => {
            const hexes = item.colors.map((c) => c.hex);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedTemplate(item)}
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              >
                <GlowCard intensity="subtle" rounded="rounded-3xl" customColors={hexes}>
                  <div className="group relative w-full h-[400px] sm:h-[440px] rounded-3xl overflow-hidden flex flex-col justify-end border border-white/10 bg-[#070511]">
                    
                    {/* Image Render */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                      <DesignArtwork
                        type="print"
                        imageUrl={item.image}
                        altText={item.title}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-95" />
                    
                    {/* Hover Action Cue */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-bold font-mono z-20">
                      <span className="tracking-wider">Inspect Blueprint Specs</span>
                      <ArrowUpRight className="w-4 h-4 text-[#dfa2da]" />
                    </div>

                    {/* Content Details */}
                    <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end space-y-3.5 pointer-events-none">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-200 mb-2">
                          <span className="text-[#dfa2da] font-extrabold tracking-wider bg-black/50 backdrop-blur px-2.5 py-1 rounded-lg border border-white/10 uppercase">
                            {item.categoryLabel}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur border border-white/10 text-[10px] text-slate-300 font-mono">
                            {item.gridRatio}
                          </span>
                        </div>
                        
                        <h3 className="text-base sm:text-lg font-extrabold text-white font-display group-hover:text-[#dfa2da] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-snug">
                          {item.title}
                        </h3>
                        
                        <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Color Palette Preview */}
                      <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <div className="flex items-center gap-1.5 bg-black/30 px-2 py-1 rounded-lg border border-white/5">
                          {item.colors.slice(0, 4).map((c, i) => (
                            <span
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-white/30 shadow-sm"
                              style={{ backgroundColor: c.hex }}
                              title={`${c.name} (${c.hex})`}
                            />
                          ))}
                        </div>
                        <span className="text-[#dfa2da] group-hover:text-white transition-colors font-bold flex items-center gap-1">
                          Specs &amp; Files <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>

      </div>

      {/* Blueprint Lightbox Modal */}
      {selectedTemplate && typeof document !== 'undefined' && createPortal(
        <div
          data-no-butterfly="true"
          data-visual-window="true"
          data-modal="true"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-hidden animate-fadeIn visual-window modal-window no-butterfly"
        >
          <div className="fixed inset-0" onClick={() => setSelectedTemplate(null)} />

          <div
            data-no-butterfly="true"
            data-visual-window="true"
            className="relative w-full max-w-4xl p-[2px] rounded-3xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10 visual-window no-butterfly shadow-[0_0_60px_rgba(207,48,170,0.4)]"
            style={{ isolation: 'isolate' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outer Rotating Conic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_7s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_22%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)] filter blur-[20px] opacity-80 pointer-events-none will-change-transform -z-20" />
            
            {/* Border glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_7s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)] opacity-100 pointer-events-none will-change-transform -z-10" />

            {/* Modal Interior */}
            <div className="relative z-10 w-full bg-[#080712]/98 backdrop-blur-2xl rounded-[22px] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl border border-white/10">
              
              {/* Header */}
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#0d0a1d]/90 border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#cf30aa]/20 border border-[#cf30aa]/40 flex items-center justify-center text-[#dfa2da] shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white font-display truncate">
                      {selectedTemplate.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
                      {selectedTemplate.categoryLabel} · {selectedTemplate.format}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-xl bg-white/5 hover:bg-[#cf30aa] border border-white/15 hover:border-[#cf30aa] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    title="Close (Esc)"
                    aria-label="Close template modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6 custom-scrollbar flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                  
                  {/* Image View */}
                  <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-black/60 border border-white/10 relative neu-3d-inset min-h-[220px] sm:min-h-[320px] flex items-center justify-center">
                    <img
                      src={selectedTemplate.image}
                      alt={selectedTemplate.title}
                      className="w-full h-full object-contain max-h-[460px]"
                    />
                  </div>

                  {/* Specs & Palette */}
                  <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">
                        Overview
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedTemplate.description}
                      </p>
                    </div>

                    {/* Palette */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                        <span className="font-bold flex items-center gap-1.5">
                          <Palette className="w-3.5 h-3.5 text-[#dfa2da]" />
                          Color Palette
                        </span>
                        <span className="text-[10px] text-[#dfa2da]">Click dot to copy</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {selectedTemplate.colors.map((c) => (
                          <button
                            key={c.hex}
                            onClick={() => copyHex(c.hex)}
                            className="flex items-center gap-2 p-2 rounded-xl bg-black/40 hover:bg-white/10 border border-white/5 transition-all text-left cursor-pointer group"
                          >
                            <span
                              className="w-4 h-4 rounded-md border border-white/20 shrink-0"
                              style={{ backgroundColor: c.hex }}
                            />
                            <div className="min-w-0">
                              <span className="block text-[10px] font-mono text-slate-300 group-hover:text-white truncate">
                                {c.name}
                              </span>
                              <span className="block text-[9px] font-mono text-slate-400">
                                {c.hex}
                              </span>
                            </div>
                            {copiedColor === c.hex && (
                              <Check className="w-3 h-3 text-emerald-400 ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Typography Pairing */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 block mb-1 uppercase font-bold">
                        Typography Pairing
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedTemplate.fonts.map((f, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-lg bg-black/50 text-white font-mono border border-white/10"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase font-bold">
                        Included Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {selectedTemplate.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#dfa2da] shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => {
                        const title = selectedTemplate.title;
                        setSelectedTemplate(null);
                        onOrderSimilar(title);
                      }}
                      className="w-full py-4 px-4 min-h-[48px] rounded-2xl btn-gradient-purple-pink text-white font-bold text-xs flex items-center justify-center gap-2 tracking-wide shadow-[0_0_20px_rgba(207,48,170,0.5)] cursor-pointer hover:shadow-[0_0_30px_rgba(207,48,170,0.7)] transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order Custom Version of This Blueprint</span>
                    </button>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
};
