import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Copy, Check, Sliders, ChevronRight, FileCode, CheckCircle2 } from 'lucide-react';
import { GlowCard } from './GlowCard';

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

        {/* Templates Grid - 1 & 2. Full Background image box implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTemplate(item)}
              onMouseEnter={() => setHoveredTemplateId(item.id)}
              onMouseLeave={() => setHoveredTemplateId(null)}
              className="cursor-pointer transition-all duration-300 hover:-translate-y-2 group relative rounded-3xl overflow-hidden min-h-[490px] flex flex-col justify-between"
            >
              <GlowCard intensity="subtle" rounded="rounded-3xl" customColors={item.colors.map(c => c.hex)}>
                <div className="relative w-full h-full flex flex-col justify-between p-4 min-h-[490px]">
                  
                  {/* Absolute Full Cover Image background - Completely bright with no dark overlays */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Clean glass reflection highlight on card boundary */}
                    <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-[#cf30aa]/55 transition-colors" />
                  </div>

                  {/* Header Metadata Container - Clean dark glass floating tags */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-xl text-slate-100 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-[#cf30aa]/75 backdrop-blur-md border border-[#cf30aa]/35 px-2.5 py-1 rounded-xl text-white">
                      {item.gridRatio}
                    </span>
                  </div>

                  {/* Body Content Overlay - Contained in highly-opaque dark glass card for outstanding readability and WCAG AA compliance */}
                  <div className="relative z-10 space-y-4 bg-black/90 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-2xl mt-auto">
                    <div className="space-y-2">
                      {/* Zero-Pill Unboxed Format Metadata */}
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#dfa2da]/90 font-medium">
                        <span>{item.format}</span>
                        <span aria-hidden="true" className="text-[#cf30aa]">·</span>
                        <span>Vector Master</span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-[#dfa2da] transition-colors leading-snug font-display">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Color Palette Visualizer with click-to-copy Hex Codes */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>COLOR SYSTEM</span>
                        <span>CLICK TO COPY HEX</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        {item.colors.map((c, i) => (
                          <button
                            key={i}
                            title={`Copy ${c.hex} (${c.name})`}
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(c.hex);
                            }}
                            className="w-7 h-7 rounded-lg border border-white/15 shadow-md relative hover:scale-110 active:scale-95 transition-transform group/color cursor-pointer"
                            style={{ backgroundColor: c.hex }}
                          >
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity bg-black/50 rounded-lg">
                              {copiedColor === c.hex ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 text-white" />
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Primary Fonts & Affordance indicator */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1 border-t border-white/5">
                      <span>FONTS: <span className="text-slate-200 font-semibold">{item.fonts.join(' / ')}</span></span>
                      <span className="text-[#dfa2da] font-bold group-hover:underline flex items-center gap-0.5">
                        Blueprint Specs <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* Extended Specs Detail Drawer Modal for Selected Template (The Window) */}
        {selectedTemplate && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedTemplate(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#090714] border border-white/15 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              
              {/* 2. Full Background image of the Window covered by webp image with glass backdrop effects */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                  src={selectedTemplate.image}
                  alt=""
                  className="w-full h-full object-cover filter blur-[20px] opacity-[0.35] scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-[#090714]/95 to-[#090714]" />
              </div>

              {/* Left Side Preview Container - Mockup fully bright, no dark overlay */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative bg-black/20 border-b md:border-b-0 md:border-r border-white/5 overflow-hidden z-10 flex flex-col justify-end">
                <img
                  src={selectedTemplate.image}
                  alt={selectedTemplate.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Title overlay in a high-contrast dark glass container */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                  <span className="text-[10px] font-mono bg-[#cf30aa]/60 text-white border border-[#cf30aa]/30 px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wider mb-2 inline-block">
                    {selectedTemplate.categoryLabel} Blueprint
                  </span>
                  <h4 className="text-base font-bold text-white font-display leading-tight">
                    {selectedTemplate.title}
                  </h4>
                </div>
              </div>

              {/* Right Side Specifications (Elevated via z-10 to sit above blurred background) */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6 z-10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400">TEMPLATE BLUEPRINT SPECS</span>
                    <button
                      onClick={() => setSelectedTemplate(null)}
                      className="text-slate-400 hover:text-white transition-colors text-xs font-mono border border-white/10 rounded-xl px-3 py-1 hover:bg-white/5 cursor-pointer"
                    >
                      Close [Esc]
                    </button>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {selectedTemplate.description}
                  </p>

                  {/* Specifications details */}
                  <div className="space-y-4">
                    
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                      <div className="text-[10px] font-mono text-slate-400 mb-2 uppercase font-bold tracking-wider">Master Deliverables Included</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {selectedTemplate.deliverables.map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#cf30aa] shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">File Types</span>
                        <span className="text-xs text-white font-bold font-mono">{selectedTemplate.format}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Grid Ratio</span>
                        <span className="text-xs text-white font-bold font-mono">{selectedTemplate.gridRatio}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Corporate Color Scheme</span>
                      <div className="flex flex-wrap items-center gap-3">
                        {selectedTemplate.colors.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5 bg-black/45 p-1.5 rounded-xl border border-white/5 pr-3">
                            <span className="w-4 h-4 rounded-md border border-white/20" style={{ backgroundColor: c.hex }} />
                            <div className="text-[10px] font-mono">
                              <span className="text-slate-100 block font-bold leading-none">{c.hex}</span>
                              <span className="text-slate-400 text-[8px] leading-none">{c.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <button
                    onClick={() => {
                      onOrderSimilar(`Template: ${selectedTemplate.title}`);
                      setSelectedTemplate(null);
                    }}
                    className="flex-1 py-3 text-xs font-black text-white btn-gradient-purple-pink rounded-xl text-center shadow-[0_0_15px_rgba(207,48,170,0.4)] hover:shadow-[0_0_24px_rgba(207,48,170,0.65)] cursor-pointer"
                  >
                    Use This Template Identity
                  </button>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    className="px-5 py-3 text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
