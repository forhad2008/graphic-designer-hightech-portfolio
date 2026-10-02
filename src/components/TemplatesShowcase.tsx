import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Copy, Check, Sliders, ChevronRight, FileCode, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { DesignArtwork } from './DesignArtworks';

interface TemplateItem {
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

const TEMPLATE_ITEMS: TemplateItem[] = [
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
    deliverables: ['Print-Ready Vector PDF', 'Fully Layered PSD Mockup', 'Adobe Illustrator Source File', 'High-Resolution JPEG Previews']
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
    deliverables: ['Print-Ready Vector Files', 'Double-Sided Layout Design', 'Customizable Photo Placeholder', 'High-Resolution Mockup']
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
    deliverables: ['Fully Layered PSD Mockup', 'Print-Ready Vector Layout (AI/EPS)', 'High-Resolution PDF with Bleed Marks', 'Custom Gold Monogram Asset']
  },
  {
    id: 'tem-4',
    title: 'The Hunter: Rugged Vertical Linen Card Blueprint',
    category: 'print',
    categoryLabel: 'Vertical Business Card',
    format: 'Adobe Illustrator · Adobe Photoshop',
    image: './tem4.webp',
    description: 'A striking and rugged vertical business card design showcasing a detailed wolf head illustration alongside clean, structured typography on textured linen cardstock.',
    gridRatio: '3.5 x 2 Vertical standard',
    colors: [
      { name: 'Textured Off-White', hex: '#E5E5E3' },
      { name: 'Deep Steel Blue', hex: '#1A3E5C' },
      { name: 'Ink Black', hex: '#111111' }
    ],
    fonts: ['Montserrat Sans', 'Cinzel Serif'],
    deliverables: ['Print-Ready Vector Template', 'High-Resolution Wolf Illustration', 'Layered PSD Mockup Asset', 'Customizable Layout with Bleeds']
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
    deliverables: ['Print-Ready Card Layout', 'Fully Layered PSD Source File', 'High-Resolution Realistic Mockup', 'Customizable Vector Assets']
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
    deliverables: ['Fully Customizable PSD Template', 'High-Resolution Presentation Mockup', 'Print-Ready CMYK Files with Bleed', 'Organized Layers with Smart Objects']
  }
];

interface TemplatesShowcaseProps {
  onOrderSimilar: (categoryOrTitle: string) => void;
}

export const TemplatesShowcase: React.FC<TemplatesShowcaseProps> = ({ onOrderSimilar }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [hoveredTemplateId, setHoveredTemplateId] = useState<string | null>(null);
  const [isCloseHovered, setIsCloseHovered] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTemplate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTemplate]);

  const filteredItems = filter === 'all' 
    ? TEMPLATE_ITEMS 
    : TEMPLATE_ITEMS.filter(item => item.category === filter);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <section id="design-templates" className="py-20 md:py-28 border-t border-white/5 bg-[#030208] relative overflow-hidden transition-colors duration-1000">
      
      {/* 3. Full dynamic background for the entire templates section using the WebP mockup images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {TEMPLATE_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              hoveredTemplateId === item.id || (hoveredTemplateId === null && item.id === 'tem-1')
                ? 'opacity-[0.15]'
                : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover filter blur-[80px] scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Deep visual gradient overlay to ensure outstanding section readability */}
        <div className="absolute inset-0 bg-[#030208]/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-2 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>Premium Resource Hub</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Design Templates &amp; Core Blueprints
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Explore my production-ready design templates. Use their raw visual identity systems as a robust layout foundation for your next brand launch.
            </p>
          </div>

          {/* Interactive Filter segmented controls - Non-pill unboxed styling */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/[0.03] rounded-2xl border border-white/5 self-start">
            {['all', 'branding', 'tech', 'social', 'print'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all capitalize cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#cf30aa]/20 to-[#dfa2da]/20 text-[#dfa2da] border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.15)] font-extrabold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat === 'all' ? 'All Templates' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid - Full background image per product card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTemplate(item)}
              onMouseEnter={() => setHoveredTemplateId(item.id)}
              onMouseLeave={() => setHoveredTemplateId(null)}
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            >
              <GlowCard intensity="medium" rounded="rounded-3xl" customColors={item.colors.map(c => c.hex)}>
                <div className="group relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-end border border-white/10 bg-[#07060f]">
                  
                  {/* Background Full Image Window */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <DesignArtwork
                      type={item.category as any}
                      imageUrl={item.image}
                      altText={item.title}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Dark gradient backdrop to protect legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Liquid frosted glass hover cover overlay */}
                  <div className="absolute inset-0 bg-black/55 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-bold font-mono z-20">
                    <span className="tracking-wider">Explore Template Specs</span>
                    <ArrowUpRight className="w-5 h-5 text-[#dfa2da]" />
                  </div>

                  {/* Overlaid Card Info (Legible on Gradient) */}
                  <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end space-y-3.5 pointer-events-none">
                    <div>
                      {/* Upper line */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-200 mb-1.5">
                        <span className="text-[#dfa2da] font-extrabold tracking-wider bg-black/40 backdrop-blur px-2.5 py-1 rounded-lg border border-white/5">{item.categoryLabel}</span>
                        <span className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur border border-white/5 text-[10px] text-slate-100 font-bold">{item.gridRatio}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold text-white font-display group-hover:text-[#dfa2da] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer with Color Swatches */}
                    <div className="pt-3.5 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <div className="flex items-center gap-1.5 bg-black/25 px-2 py-1 rounded-lg pointer-events-auto">
                        {item.colors.slice(0, 4).map((c, i) => (
                          <button
                            key={i}
                            title={`Copy ${c.hex} (${c.name})`}
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(c.hex);
                            }}
                            className="w-3.5 h-3.5 rounded-full border border-white/30 shadow-sm relative hover:scale-125 transition-transform cursor-pointer"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                      <span className="text-[#dfa2da] group-hover:text-white transition-colors font-bold flex items-center gap-1">
                        Blueprint Specs <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* Extended Specs Detail Drawer Modal for Selected Template (The 2nd Window Style) */}
        {selectedTemplate && (() => {
          const hexes = selectedTemplate.colors ? selectedTemplate.colors.map(c => c.hex) : ['#402fb5', '#cf30aa'];
          const c1 = hexes[0] || '#402fb5';
          const c2 = hexes[1] || c1 || '#a099d8';
          const c3 = hexes[2] || c2 || c1 || '#cf30aa';
          const c4 = hexes[3] || c3 || c2 || c1 || '#dfa2da';
          const conicBackground = `conic-gradient(rgba(0,0,0,0) 0%, ${c1} 12%, ${c2} 22%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 50%, ${c3} 65%, ${c4} 75%, rgba(0,0,0,0) 90%)`;

          return (
            <div 
              data-no-butterfly="true"
              data-visual-window="true"
              data-modal="true"
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-hidden animate-fadeIn visual-window modal-window no-butterfly"
              onClick={() => setSelectedTemplate(null)}
            >
              <div className="fixed inset-0" onClick={() => setSelectedTemplate(null)} />

              {/* Uiverse Glow Rotating Conic Border Wrapper with Dynamic Shadows */}
              <div 
                data-no-butterfly="true"
                data-visual-window="true"
                className="relative w-full max-w-5xl p-[2px] rounded-3xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10 visual-window no-butterfly transition-all duration-500"
                style={{
                  boxShadow: `0 0 50px ${c3}30, 0 0 30px ${c1}40`,
                  isolation: 'isolate',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Outer Rotating Conic Glow */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] filter blur-[18px] opacity-75 pointer-events-none will-change-transform -z-20"
                  style={{ backgroundImage: conicBackground }}
                />
                
                {/* Crisp Rotating Conic Border */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] opacity-100 pointer-events-none will-change-transform -z-10"
                  style={{ backgroundImage: conicBackground }}
                />

                {/* Modal Core Window */}
                <div className="relative w-full bg-[#080712] rounded-[22px] overflow-hidden flex flex-col max-h-[90vh]">
                  
                  {/* Floating Absolute Close Button */}
                  <button
                    onMouseEnter={() => setIsCloseHovered(true)}
                    onMouseLeave={() => setIsCloseHovered(false)}
                    onClick={() => setSelectedTemplate(null)}
                    className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/80 text-white border border-white/20 hover:scale-105 active:scale-95 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.7)] backdrop-blur-xl cursor-pointer"
                    style={isCloseHovered ? { backgroundColor: c3, borderColor: 'transparent', color: '#fff' } : {}}
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  {/* Content Wrapper (Scrollable) */}
                  <div className="overflow-y-auto flex-1 flex flex-col custom-scrollbar bg-[#05040d]">
                    
                    {/* Full Stacked Image Presentation */}
                    <div className="flex flex-col w-full bg-[#020108] border-b border-white/10">
                      <img
                        src={selectedTemplate.image}
                        alt={selectedTemplate.title}
                        className="w-full h-auto block select-none"
                        loading="lazy"
                      />
                    </div>

                    {/* Description, Specs, Palette (Padded Area) */}
                    <div className="p-6 sm:p-8 space-y-6">
                      
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg uppercase font-bold tracking-wider inline-block" style={{ backgroundColor: `${c3}25`, color: c3, border: `1px solid ${c3}40` }}>
                          {selectedTemplate.categoryLabel} Blueprint
                        </span>
                        <h2 className="text-2xl font-extrabold text-white font-display tracking-tight sm:text-3xl">
                          {selectedTemplate.title}
                        </h2>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                          {selectedTemplate.description}
                        </p>
                      </div>

                      {/* Deliverables & Specs Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                        <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 space-y-2.5 shadow-lg backdrop-blur-sm">
                          <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block">Master Deliverables Included</span>
                          <ul className="space-y-2 text-slate-200">
                            {selectedTemplate.deliverables.map((d, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: c3 }} />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 space-y-3.5 shadow-lg backdrop-blur-sm">
                          <div>
                            <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">File Types / Format</span>
                            <span className="font-mono text-white font-bold">{selectedTemplate.format}</span>
                          </div>
                          <div>
                            <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">Grid Ratio</span>
                            <span className="font-mono text-white font-bold">{selectedTemplate.gridRatio}</span>
                          </div>
                          <div>
                            <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">Primary Fonts</span>
                            <span className="font-mono text-slate-300 font-semibold">{selectedTemplate.fonts.join(' • ')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Color Palette */}
                      <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 shadow-lg backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-3 text-xs font-mono">
                          <span className="text-slate-400 uppercase font-bold tracking-wider">Corporate Color Scheme</span>
                          <span className="text-slate-500 font-semibold">Click swatch to copy hex</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {selectedTemplate.colors.map((c) => (
                            <button
                              key={c.hex}
                              onClick={() => {
                                navigator.clipboard.writeText(c.hex);
                              }}
                              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-center cursor-pointer group"
                            >
                              <div
                                className="w-full h-10 rounded-lg mb-2 border border-white/10 flex items-center justify-center shadow-inner transition-transform group-hover:scale-[1.04]"
                                style={{ backgroundColor: c.hex }}
                              />
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
                      <MessageCircle className="w-4 h-4" style={{ color: c3 }} />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        const title = selectedTemplate.title;
                        setSelectedTemplate(null);
                        onOrderSimilar(`Template: ${title}`);
                      }}
                      className="px-5 py-2 text-xs font-extrabold text-white rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: c3,
                        boxShadow: `0 0 20px ${c3}60`,
                      }}
                    >
                      <span>Use This Template Identity</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
