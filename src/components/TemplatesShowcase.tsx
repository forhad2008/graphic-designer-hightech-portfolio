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
    title: 'Aura Botanicals: Organic Skincare Identity Deck',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    format: 'Adobe Illustrator · Figma',
    image: './tem1.webp',
    description: 'A refined brand presentation layout featuring natural botanical patterns, leaf monograms, and luxurious dropper bottle dielines.',
    gridRatio: '16:9 Landscape Layout',
    colors: [
      { name: 'Deep Forest Green', hex: '#112C20' },
      { name: 'Foliage Green', hex: '#305C33' },
      { name: 'Warm Cream', hex: '#F3F4F1' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    fonts: ['Modern Serif Display', 'Plus Jakarta Sans'],
    deliverables: ['Primary Brand System Deck', 'Cosmetic Dropper Dieline', 'Luxe Card Design', 'Packaging Board Asset']
  },
  {
    id: 'tem-2',
    title: 'Sleek SaaS Dashboard UI & Identity System',
    category: 'tech',
    categoryLabel: 'Tech Interface',
    format: 'Figma · SVG',
    image: './tem2.webp',
    description: 'An ultra-modern, dark-themed dashboard template utilizing clean spatial geometry, high-contrast violet indicators, and neon telemetry plots.',
    gridRatio: '1440px Grid Standard',
    colors: [
      { name: 'Midnight Obsidian', hex: '#070B12' },
      { name: 'Electric Violet', hex: '#8A2BE2' },
      { name: 'Glacier Cyan', hex: '#00A2FF' },
      { name: 'Deep Indigo', hex: '#1E0F35' }
    ],
    fonts: ['Space Grotesk', 'JetBrains Mono'],
    deliverables: ['Web Application Workspace', 'UI Component Library', 'Vector Technical Icon Kit', 'Neon Indicator Suite']
  },
  {
    id: 'tem-3',
    title: 'Geometric Brand Guidelines Master Layout',
    category: 'branding',
    categoryLabel: 'Editorial Design',
    format: 'Adobe InDesign · PDF',
    image: './tem3.webp',
    description: 'A high-contrast monochrome editorial layout with hairline borders, clean typography columns, and asymmetric margins.',
    gridRatio: 'A4 Portrait Grid',
    colors: [
      { name: 'Absolute Charcoal', hex: '#0D0D0D' },
      { name: 'Alabaster Silk', hex: '#EAE7E0' },
      { name: 'Muted Bronze', hex: '#BCA374' },
      { name: 'Sable Black', hex: '#1A1A1A' }
    ],
    fonts: ['Cinzel Display', 'Satoshi Sans'],
    deliverables: ['24-Page Brand Style Guide', 'Grid Column Presets', 'Asymmetric Layout Grid', 'Print Bleed Layout']
  },
  {
    id: 'tem-4',
    title: 'YouTube Viral Thumbnail CTR Canvas',
    category: 'social',
    categoryLabel: 'Social Media',
    format: 'Adobe Photoshop · PSD',
    image: './tem4.webp',
    description: 'A high-growth thumbnail creation canvas featuring aggressive red spotlights, chiseled 3D title text, and optimized focal zones.',
    gridRatio: '1920x1080 FHD Standard',
    colors: [
      { name: 'High-CTR Crimson', hex: '#E60000' },
      { name: 'Pure Dark Void', hex: '#0F0F0F' },
      { name: 'Impact White', hex: '#F2F2F2' },
      { name: 'Vibrant Amber', hex: '#FFBC00' }
    ],
    fonts: ['Impact Grunge Bold', 'Geometric Sans Display'],
    deliverables: ['Layered .PSD Thumbnail', 'CTR Heatmap Overlay', 'Color Grading Lut Preset', 'Editable 3D Textures']
  },
  {
    id: 'tem-5',
    title: 'Luxury Stationery & Foil Dieline Pack',
    category: 'print',
    categoryLabel: 'Luxe Print',
    format: 'Adobe Illustrator · CMYK',
    image: './tem5.webp',
    description: 'Tactile print layouts optimized for specialty printing, with separate vectors for gold hot foil stamping, debossing, and spot UV coating.',
    gridRatio: '300 DPI Press Ready',
    colors: [
      { name: 'Matte Charcoal', hex: '#1C1C1E' },
      { name: 'Foil Gold Accent', hex: '#D4AF37' },
      { name: 'Heavy Linen Ivory', hex: '#F9F8F6' },
      { name: 'Vivid Sangria Red', hex: '#800020' }
    ],
    fonts: ['Cabinet Grotesk', 'Lora Serif'],
    deliverables: ['Foil Business Card Layout', 'Debossed Letterhead Set', 'Corporate Envelope Vector', 'Box Die-Cut Template']
  },
  {
    id: 'tem-6',
    title: 'Apex Athletic Event Poster Design',
    category: 'social',
    categoryLabel: 'Sports & Event',
    format: 'Adobe Photoshop · PSD',
    image: './tem6.webp',
    description: 'A high-octane, grit-textured sports promotion layout combining half-tone backgrounds with distressed brush typography and athletic energy.',
    gridRatio: '18x24 Poster Ratio',
    colors: [
      { name: 'Adrenaline Red', hex: '#D32F2F' },
      { name: 'Grit Black Texture', hex: '#0D0D0D' },
      { name: 'Concrete Gray', hex: '#8C8C8C' },
      { name: 'Steel Off-White', hex: '#E0E0E0' }
    ],
    fonts: ['Distressed Brush Display', 'Bold Sans Body'],
    deliverables: ['Large-Format Event Poster', 'Instagram Story Poster Key', 'Direct Ticket Flyer Layout', 'Grit Texture Overlays']
  }
];

interface TemplatesShowcaseProps {
  onOrderSimilar: (categoryOrTitle: string) => void;
}

export const TemplatesShowcase: React.FC<TemplatesShowcaseProps> = ({ onOrderSimilar }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateItem | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const filteredItems = filter === 'all' 
    ? TEMPLATE_ITEMS 
    : TEMPLATE_ITEMS.filter(item => item.category === filter);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <section id="design-templates" className="py-20 md:py-28 border-t border-white/5 bg-[#030208] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
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

        {/* Templates Grid - Sophisticated single elevation design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTemplate(item)}
              className="cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
            >
              <GlowCard intensity="subtle" rounded="rounded-3xl" customColors={item.colors.map(c => c.hex)}>
                <div className="bg-[#07060f] border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full relative">
                  
                  {/* Aspect Ratio Container for Template Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40 border-b border-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Linear contrast scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    
                    {/* Floating Formats */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                      <span className="text-[10px] font-mono font-bold bg-black/65 backdrop-blur border border-white/15 px-2.5 py-1 rounded-xl text-slate-100 uppercase">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[10px] font-mono font-bold bg-[#cf30aa]/40 backdrop-blur-md border border-[#cf30aa]/30 px-2.5 py-1 rounded-xl text-white">
                        {item.gridRatio}
                      </span>
                    </div>

                    {/* Interactive hover overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-semibold font-mono z-10">
                      <span>Inspect Template Specifications</span>
                      <ArrowUpRight className="w-4 h-4 text-[#dfa2da] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Information & Visual Identity Data */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Zero-Pill Unboxed Metadata with Bullet Separators */}
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 font-medium">
                        <span>{item.format}</span>
                        <span aria-hidden="true" className="text-[#cf30aa]">·</span>
                        <span>Vector Master</span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-[#dfa2da] transition-colors leading-snug font-display">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Color Palette Visualizer with click-to-copy Hex Codes */}
                    <div className="pt-4 border-t border-white/5 space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>COLOR SYSTEM</span>
                        <span>CLICK TO COPY HEX</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {item.colors.map((c, i) => (
                          <button
                            key={i}
                            title={`Copy ${c.hex} (${c.name})`}
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(c.hex);
                            }}
                            className="w-7 h-7 rounded-lg border border-white/10 shadow-md relative hover:scale-110 active:scale-95 transition-transform group/color cursor-pointer"
                            style={{ backgroundColor: c.hex }}
                          >
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity bg-black/40 rounded-lg">
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

                    {/* Primary Fonts & Specifications */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
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

        {/* Extended Specs Detail Drawer Modal for Selected Template */}
        {selectedTemplate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#090714] border border-white/15 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              
              {/* Left Side Preview */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative bg-black/40 border-b md:border-b-0 md:border-r border-white/5 overflow-hidden">
                <img
                  src={selectedTemplate.image}
                  alt={selectedTemplate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono bg-[#cf30aa]/40 text-white border border-[#cf30aa]/30 px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-2.5 inline-block">
                    {selectedTemplate.categoryLabel} Blueprint
                  </span>
                  <h4 className="text-xl font-bold text-white font-display leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {selectedTemplate.title}
                  </h4>
                </div>
              </div>

              {/* Right Side Specifications */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
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
                    
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
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
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">File Types</span>
                        <span className="text-xs text-white font-bold font-mono">{selectedTemplate.format}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Grid Ratio</span>
                        <span className="text-xs text-white font-bold font-mono">{selectedTemplate.gridRatio}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Corporate Color Scheme</span>
                      <div className="flex flex-wrap items-center gap-3">
                        {selectedTemplate.colors.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5 bg-black/30 p-1.5 rounded-xl border border-white/5 pr-3">
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
