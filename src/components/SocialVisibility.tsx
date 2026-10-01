import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { GlowCard } from './GlowCard';
import { IMAGE_ASSETS } from '../data/imageAssets';

export const SocialVisibility: React.FC = () => {
  const socialLinks = [
    {
      platform: 'Fiverr Pro',
      handle: '@abdullahforhad',
      url: 'https://fiverr.com',
      badge: '5.0 ★ Rating',
      followers: '180+ Orders',
      image: IMAGE_ASSETS.socialChannels.fiverrPro,
      description: 'Primary workspace with escrow buyer protection.'
    },
    {
      platform: 'Behance',
      handle: 'behance.net/abdullahforhad',
      url: 'https://behance.net',
      badge: 'Curated Works',
      followers: '14.8K Views',
      image: IMAGE_ASSETS.socialChannels.behance,
      description: 'Comprehensive brand identity and vector case studies.'
    },
    {
      platform: 'Dribbble',
      handle: 'dribbble.com/abdullahforhad',
      url: 'https://dribbble.com',
      badge: 'Daily Shots',
      followers: '6.2K Likes',
      image: IMAGE_ASSETS.socialChannels.dribbble,
      description: 'Vector logo marks, 3D explorations, and typography.'
    },
    {
      platform: 'LinkedIn',
      handle: 'Abdullah Forhad',
      url: 'https://linkedin.com',
      badge: 'Professional',
      followers: '3.2K Network',
      image: IMAGE_ASSETS.socialChannels.linkedIn,
      description: 'B2B brand strategy and client partnerships.'
    },
    {
      platform: 'Instagram',
      handle: '@forhad.design',
      url: 'https://instagram.com',
      badge: '19.4K Community',
      followers: 'Daily Reels',
      image: IMAGE_ASSETS.socialChannels.instagram,
      description: 'Behind-the-scenes illustrator timelapses & design tips.'
    },
    {
      platform: 'WhatsApp Direct',
      handle: '+880 1342 900364',
      url: 'https://wa.me/8801342900364',
      badge: '< 1h Reply',
      followers: 'Direct Desk',
      image: IMAGE_ASSETS.socialChannels.whatsApp,
      description: 'Instant chat for project briefs and custom quotes.'
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <Share2 className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Network &amp; Socials
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            Follow live design releases across platforms or message directly.
          </p>
        </div>

        {/* Social Cards Grid with Rotating Conic Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((item) => (
            <GlowCard key={item.platform} intensity="medium" rounded="rounded-3xl">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#090714] liquid-glass-card rounded-3xl p-3 flex flex-col justify-between group overflow-hidden h-full"
              >
                <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-black neu-3d-inset border border-white/10">
                  <img
                    src={item.image}
                    alt={item.platform}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080712] via-[#080712]/40 to-transparent" />
                  
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-200 uppercase bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 shadow-sm font-bold">
                      {item.platform}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md text-[#dfa2da] font-bold border border-[#cf30aa]/30 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white font-display group-hover:text-[#dfa2da] transition-colors flex items-center justify-between">
                      <span>{item.handle}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#dfa2da] font-bold">{item.followers}</span>
                    <span className="text-slate-400 group-hover:text-white transition-colors font-semibold">
                      Visit →
                    </span>
                  </div>
                </div>
              </a>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
