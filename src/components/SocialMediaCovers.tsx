import React from 'react';
import { Share2, ArrowUpRight, Sparkles, Star } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { PortfolioItem } from '../types';

interface SocialMediaCoversProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOrderSimilar: (category: string) => void;
}

const SOCIAL_COVER_ITEMS: PortfolioItem[] = [
  {
    id: 'social-cover-1',
    title: 'High-Impact YouTube & Social Banner System',
    client: 'Creator & Brand Media',
    clientCountry: 'Global',
    category: 'social',
    categoryLabel: 'Social Media Cover',
    year: '2026',
    views: '8.4k',
    likes: '1.2k',
    image: './social1.png',
    gallery: ['./social1.png'],
    description: 'A striking, high-conversion social media banner system designed for top-tier creators and digital brands, optimizing visual hierarchy across YouTube, Twitter/X, and Facebook headers.',
    challenge: 'Needed a vibrant, high-contrast header composition capturing viewer attention immediately while maintaining professional typography.',
    solution: 'Crafted dynamic color grading, custom lighting glows, and balanced typographic placement tailored for multi-platform banner dimensions.',
    deliverables: ['YouTube Channel Art (2560x1440)', 'Twitter/X Header (1500x500)', 'Facebook Cover (820x312)', 'Source PSD & Vector Assets'],
    formats: ['.PSD', '.AI', '.PNG'],
    colors: [
      { name: 'Vibrant Magenta', hex: '#CF30AA' },
      { name: 'Electric Violet', hex: '#402FB5' },
      { name: 'Pitch Black', hex: '#050409' }
    ],
    fonts: ['Cabinet Grotesk', 'Plus Jakarta Sans'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: "The banner click-through rate skyrocketed after applying this new cover system!",
      author: 'Damian Vance',
      company: 'Tech Streamer & Creator',
      rating: 5
    }
  },
  {
    id: 'social-cover-2',
    title: 'Dark Luxury Instagram Feed & Carousel Covers',
    client: 'Aesthetic Apparel & Luxury',
    clientCountry: 'USA',
    category: 'social',
    categoryLabel: 'Instagram Cover',
    year: '2026',
    views: '9.1k',
    likes: '1.5k',
    image: './social2.png',
    gallery: ['./social2.png'],
    description: 'An elite set of dark obsidian-themed Instagram grid covers and promotional ad carousels designed to captivate high-end fashion and lifestyle audiences.',
    challenge: 'Creating a cohesive, premium grid layout that looks arresting in a fast-scrolling social media feed.',
    solution: 'Engineered minimalist typography paired with dramatic chiaroscuro photography lighting and metallic gold/silver accent frames.',
    deliverables: ['Instagram Grid Templates', 'Carousel Cover Designs', 'Story Highlights Icons', 'Ad Creative Variations'],
    formats: ['.PSD', '.FIG', '.PNG'],
    colors: [
      { name: 'Obsidian', hex: '#0B0A10' },
      { name: 'Champagne Gold', hex: '#DFA2DA' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    fonts: ['Sophisticated Serif', 'Plus Jakarta Sans'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: "Flawless luxury aesthetic. Our Instagram engagement doubled within a week.",
      author: 'Sophia Sterling',
      company: 'Creative Lead, Lusso',
      rating: 5
    }
  },
  {
    id: 'social-cover-3',
    title: 'LinkedIn Professional Thought Leadership Cover',
    client: 'B2B Enterprise Solutions',
    clientCountry: 'UK',
    category: 'social',
    categoryLabel: 'LinkedIn Cover',
    year: '2026',
    views: '6.7k',
    likes: '890',
    image: './social3.png',
    gallery: ['./social3.png'],
    description: 'A polished, authoritative LinkedIn company page banner and executive profile cover emphasizing trust, technological innovation, and enterprise prestige.',
    challenge: 'Communicating high-tech corporate reliability without appearing sterile or boring.',
    solution: 'Designed abstract geometric data-flow patterns in deep indigo and neon purple, paired with crisp typography and clear value propositions.',
    deliverables: ['LinkedIn Company Banner (1128x191)', 'Executive Personal Cover', 'Brand Guidelines Kit'],
    formats: ['.AI', '.PSD', '.PNG'],
    colors: [
      { name: 'Deep Indigo', hex: '#402FB5' },
      { name: 'Neon Cyan Glow', hex: '#00F0FF' },
      { name: 'Dark Void', hex: '#030206' }
    ],
    fonts: ['Inter', 'Plus Jakarta Sans'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: "Our corporate profile looks exceptionally professional and enterprise-ready.",
      author: 'Arthur Pendelton',
      company: 'Managing Director, Quantum B2B',
      rating: 5
    }
  },
  {
    id: 'social-cover-4',
    title: 'Cyberpunk & Gaming Stream Event Cover',
    client: 'Apex Esports & Gaming',
    clientCountry: 'Germany',
    category: 'social',
    categoryLabel: 'Stream Cover',
    year: '2026',
    views: '11.2k',
    likes: '2.1k',
    image: './social4.png',
    gallery: ['./social4.png'],
    description: 'An electrifying cyberpunk-themed tournament flyer and streaming platform cover featuring neon lighting fx, metallic badges, and aggressive typography.',
    challenge: 'Capturing the raw energy of competitive esports while maintaining pristine legibility on mobile and desktop streams.',
    solution: 'Combined heavy glitch textures, neon pink/purple lighting cones, and chiseled metallic lettering.',
    deliverables: ['Twitch / YouTube Stream Offline Banners', 'Tournament Announcement Graphics', 'Event Flyers', 'Profile Avatars'],
    formats: ['.PSD', '.AI', '.PNG'],
    colors: [
      { name: 'Cyber Pink', hex: '#CF30AA' },
      { name: 'Electric Purple', hex: '#6D28D9' },
      { name: 'Matrix Black', hex: '#05030A' }
    ],
    fonts: ['Cabinet Grotesk', 'JetBrains Mono'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: "The visual intensity of these stream covers is off the charts. Absolute masterpiece!",
      author: 'Kaelen Voss',
      company: 'Director, Apex Esports',
      rating: 5
    }
  }
];

export const SocialMediaCovers: React.FC<SocialMediaCoversProps> = ({ onSelectItem, onOrderSimilar }) => {
  return (
    <section id="social-covers" className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#cf30aa]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-3 border border-[#cf30aa]/30 shadow-[0_0_15px_rgba(207,48,170,0.25)]">
            <Share2 className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>SOCIAL MEDIA COVERS &amp; BANNERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Social Media Covers &amp; Banners
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            High-converting YouTube banners, Instagram grid feeds, LinkedIn professional headers, and cyberpunk stream artwork engineered for maximum engagement.
          </p>
        </div>

        {/* Social Covers Grid with Full Background Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_COVER_ITEMS.map((item) => (
            <GlowCard key={item.id} intensity="medium" rounded="rounded-3xl">
              <div
                onClick={() => onSelectItem(item)}
                className="relative w-full h-[420px] sm:h-[460px] rounded-3xl overflow-hidden bg-[#080712] group cursor-pointer flex flex-col justify-between p-6 sm:p-8"
              >
                {/* Full Card Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                />

                {/* Multi-stop Gradient Overlays for perfect legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04030a] via-[#04030a]/80 to-[#04030a]/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Header / Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 font-bold shadow-md">
                    {item.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-[#dfa2da] text-[11px] font-mono font-bold border border-[#cf30aa]/40 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#dfa2da] text-[#dfa2da]" />
                    <span>{item.testimonial?.rating}.0 ({item.views})</span>
                  </div>
                </div>

                {/* Bottom Content & Actions */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#dfa2da]">
                    <span>{item.client}</span>
                    <span>·</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display group-hover:text-[#dfa2da] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOrderSimilar(item.title);
                      }}
                      className="flex-1 py-2.5 px-4 rounded-xl neu-3d-btn-primary text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all hover:scale-102"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Order Similar Banner</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectItem(item);
                      }}
                      className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#dfa2da]" />
                    </button>
                  </div>
                </div>

              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
