import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Copy, Check, ChevronRight, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { DesignArtwork } from './DesignArtworks';

interface SocialItem {
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

const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'social-1',
    title: 'Neon Cyberpunk Stream & Social Media Header Kit',
    category: 'gaming',
    categoryLabel: 'Twitch / YouTube Banner',
    format: 'Adobe Photoshop · Illustrator',
    image: './social1.png',
    description: 'A vibrant, cyber-futuristic streaming and social media header featuring glowing neon pink and cyan aesthetics, high-tech geometric framing, and high-contrast typography.',
    gridRatio: '16:9 Landscape Banner',
    colors: [
      { name: 'Neon Pink', hex: '#FF2A85' },
      { name: 'Cyber Cyan', hex: '#00F0FF' },
      { name: 'Deep Space', hex: '#0A0915' },
      { name: 'Electric Violet', hex: '#9D00FF' }
    ],
    fonts: ['Rajdhani', 'Montserrat'],
    deliverables: [
      'Twitch & YouTube Banner (2560x1440px)',
      'Twitter / X Header (1500x500px)',
      'Layered PSD & AI Source Files',
      'High-Resolution Export Renders'
    ]
  },
  {
    id: 'social-2',
    title: "UFC Professional Fighter 'No Limits' Branding Banner",
    category: "sports",
    categoryLabel: "Twitter / X Header Banner",
    format: "Adobe Photoshop",
    image: "./social2.png",
    description: "A high-impact, dark, and gritty sports design banner featuring multiple exposures of a professional UFC fighter. The composition centers on a muscular back profile enhanced by dramatic red and white studio rim lighting, flanked by monochrome action shots and highly detailed portraits. Raw, textured brush typography is balanced by clean, widely tracked sans-serif sub-elements to convey an intense, motivational brand tone.",
    gridRatio: "3:1 Landscape Banner",
    colors: [
      { name: "Championship Red", hex: "#E10600" },
      { name: "Octagon Black", hex: "#0D0D0D" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Gritty Gray", hex: "#737373" }
    ],
    fonts: ["Montserrat", "Road Rage", "Signature Script"],
    deliverables: [
      "Twitter/X Header Banner (1500x500px)",
      "Layered Adobe Photoshop (PSD) Source Template",
      "High-Resolution Isolated Character Cutouts",
      "Social Media Graphic Asset Pack"
    ]
  },
  {
    id: 'social-3',
    title: "Vertex Corporate Brand Hero Banner",
    category: "corporate",
    categoryLabel: "Corporate Hero Banner",
    format: "Adobe Photoshop · Figma",
    image: "./social3.png",
    description: "A sophisticated, high-end corporate hero banner featuring a cinematic visual of an executive overlooking a modern city skyline at sunset from a luxury high-rise office. The left side showcases crisp, modern sans-serif typography in white and vibrant electric blue, establishing a tech-forward brand identity. Deep contrasts, dramatic backlighting, and a dark, moody color palette evoke a premium, visionary, and highly professional tone.",
    gridRatio: "21:9 Ultra-Wide Banner",
    colors: [
      { name: "Midnight Black", hex: "#070c14" },
      { name: "Electric Blue", hex: "#3fa9fc" },
      { name: "Platinum White", hex: "#f8fafc" },
      { name: "Muted Slate Blue", hex: "#475569" }
    ],
    fonts: ["Montserrat", "Inter", "Proxima Nova"],
    deliverables: [
      "Website Hero Banner Asset",
      "LinkedIn Company Page Header",
      "Social Media Advertising Creative",
      "Corporate Brand Style Guide Asset"
    ]
  },
  {
    id: 'social-4',
    title: "Alex Dante Graphic Designer Portfolio Cover",
    category: "portfolio",
    categoryLabel: "Behance Header Banner",
    format: "Adobe Photoshop · Adobe Illustrator · Adobe After Effects",
    image: "./social4.png",
    description: "A highly professional, dark-themed hero banner for a graphic design portfolio, blending a realistic, moody desk mockup with slick typographic elements. Glowing neon purple backlighting contrasts with warm desktop lamp illumination, highlighting custom branding elements like a 'Good Design Builds Brands' desktop screen and a styled 'Design Creates Value' coffee mug.",
    gridRatio: "3:1 Landscape Banner",
    colors: [
      { name: "Electric Purple", hex: "#7B3FE4" },
      { name: "Dark Charcoal", hex: "#0D0C10" },
      { name: "Warm Gold", hex: "#F0AC3A" },
      { name: "Pure White", hex: "#FFFFFF" }
    ],
    fonts: ["Montserrat", "Helvetica Neue"],
    deliverables: [
      "Behance Cover Banner",
      "LinkedIn Header Art",
      "Personal Portfolio Hero Banner",
      "Twitter Header"
    ]
  }
];

interface SocialShowcaseProps {
  onOrderSimilar: (categoryOrTitle: string) => void;
}

export const SocialShowcase: React.FC<SocialShowcaseProps> = ({ onOrderSimilar }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedSocial, setSelectedSocial] = useState<SocialItem | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [hoveredSocialId, setHoveredSocialId] = useState<string | null>(null);
  const [isCloseHovered, setIsCloseHovered] = useState<boolean>(false);

  const filteredItems = filter === 'all' 
    ? SOCIAL_ITEMS 
    : SOCIAL_ITEMS.filter(item => item.category === filter);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <section id="social-banners" className="py-20 md:py-28 border-t border-white/5 bg-[#020106] relative overflow-hidden transition-colors duration-1000">
      
      {/* Ambient Section Background covered by full WebP/PNG images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {SOCIAL_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              hoveredSocialId === item.id || (hoveredSocialId === null && item.id === 'social-1')
                ? 'opacity-[0.14]'
                : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover filter blur-[70px] scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Soft dark overlay for outstanding typography legibility */}
        <div className="absolute inset-0 bg-[#020106]/92 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#dfa2da] mb-2 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>Premium Identity Assets</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Social Media Headers &amp; Visual Banners
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Explore my custom social header designs. Hand-crafted layouts built to capture corporate authority, athletic grit, and elite artistic portfolios.
            </p>
          </div>

          {/* Interactive Filter segmented controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/[0.03] rounded-2xl border border-white/5 self-start">
            {['all', 'gaming', 'sports', 'corporate', 'portfolio'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all capitalize cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#cf30aa]/20 to-[#dfa2da]/20 text-[#dfa2da] border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.15)] font-extrabold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                {cat === 'all' ? 'All Headers' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Banners Grid - Full background image per product card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedSocial(item)}
              onMouseEnter={() => setHoveredSocialId(item.id)}
              onMouseLeave={() => setHoveredSocialId(null)}
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
                    <span className="tracking-wider">Explore Banner Specs</span>
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

        {/* Extended Specs Detail Drawer Modal for Selected Banner (The 2nd Window Style) */}
        {selectedSocial && (() => {
          const hexes = selectedSocial.colors ? selectedSocial.colors.map(c => c.hex) : ['#402fb5', '#cf30aa'];
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
              className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fadeIn visual-window modal-window no-butterfly"
              onClick={() => setSelectedSocial(null)}
            >
              <div className="fixed inset-0" onClick={() => setSelectedSocial(null)} />

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
                  
                  {/* Floating Absolute Close Button */}
                  <button
                    onMouseEnter={() => setIsCloseHovered(true)}
                    onMouseLeave={() => setIsCloseHovered(false)}
                    onClick={() => setSelectedSocial(null)}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white/90 border border-white/10 hover:scale-105 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer"
                    style={isCloseHovered ? { backgroundColor: c3, borderColor: 'transparent', color: '#fff' } : {}}
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Content Wrapper (Scrollable) */}
                  <div className="overflow-y-auto flex-1 flex flex-col custom-scrollbar bg-[#05040d]">
                    
                    {/* Full Stacked Image Presentation */}
                    <div className="flex flex-col w-full bg-[#020108] border-b border-white/10">
                      <img
                        src={selectedSocial.image}
                        alt={selectedSocial.title}
                        className="w-full h-auto block select-none"
                        loading="lazy"
                      />
                    </div>

                    {/* Description, Specs, Palette (Padded Area) */}
                    <div className="p-6 sm:p-8 space-y-6">
                      
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg uppercase font-bold tracking-wider inline-block" style={{ backgroundColor: `${c3}25`, color: c3, border: `1px solid ${c3}40` }}>
                          {selectedSocial.categoryLabel} Banner
                        </span>
                        <h2 className="text-2xl font-extrabold text-white font-display tracking-tight sm:text-3xl">
                          {selectedSocial.title}
                        </h2>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                          {selectedSocial.description}
                        </p>
                      </div>

                      {/* Deliverables & Specs Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                        <div className="p-5 rounded-2xl bg-[#090715]/75 border border-white/5 space-y-2.5 shadow-lg backdrop-blur-sm">
                          <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block">Master Deliverables Included</span>
                          <ul className="space-y-2 text-slate-200">
                            {selectedSocial.deliverables.map((d, i) => (
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
                            <span className="font-mono text-white font-bold">{selectedSocial.format}</span>
                          </div>
                          <div>
                            <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">Grid Ratio</span>
                            <span className="font-mono text-white font-bold">{selectedSocial.gridRatio}</span>
                          </div>
                          <div>
                            <span className="font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">Primary Fonts</span>
                            <span className="font-mono text-slate-300 font-semibold">{selectedSocial.fonts.join(' • ')}</span>
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
                          {selectedSocial.colors.map((c) => (
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
                        const title = selectedSocial.title;
                        setSelectedSocial(null);
                        onOrderSimilar(`Banner: ${title}`);
                      }}
                      className="px-5 py-2 text-xs font-extrabold text-white rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95"
                      style={{
                        backgroundColor: c3,
                        boxShadow: `0 0 20px ${c3}60`,
                      }}
                    >
                      <span>Order Similar Identity</span>
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
