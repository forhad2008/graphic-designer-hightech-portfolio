import React, { useState } from 'react';
import { IMAGE_ASSETS } from '../data/imageAssets';
import { Sparkles, Layers, Box, Film, FileText, Layout } from 'lucide-react';

interface ArtworkProps {
  type: 'brand' | 'social' | 'packaging' | 'youtube' | 'print' | 'saas';
  imageUrl?: string;
  className?: string;
  altText?: string;
}

const DEFAULT_IMAGES: Record<string, string> = IMAGE_ASSETS.defaultArtworks;

const TYPE_ICONS = {
  brand: Sparkles,
  social: Film,
  packaging: Box,
  youtube: Film,
  print: FileText,
  saas: Layout,
};

export const DesignArtwork: React.FC<ArtworkProps> = ({
  type,
  imageUrl,
  className = '',
  altText = 'Graphic design showcase preview'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const initialSrc = imageUrl || DEFAULT_IMAGES[type] || DEFAULT_IMAGES.brand;
  const Icon = TYPE_ICONS[type] || Sparkles;

  return (
    <div className={`relative w-full h-full min-h-[260px] overflow-hidden bg-[#070A10] group select-none ${className}`}>
      {/* Background image with subtle zoom on card hover */}
      {!hasError ? (
        <img
          src={initialSrc}
          alt={altText}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        /* Styled CSS Fallback Container if Image Fails */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0c0818] via-[#120a24] to-[#080612]">
          <div className="w-14 h-14 rounded-2xl bg-[#cf30aa]/15 border border-[#cf30aa]/40 text-[#dfa2da] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(207,48,170,0.3)]">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-white font-display mb-1">{altText}</span>
          <span className="text-[10px] font-mono text-[#dfa2da] uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/40 border border-white/10">
            {type} Design Specs
          </span>
        </div>
      )}

      {/* Loading Skeleton */}
      {!imageLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C111C] via-[#141C2E] to-[#0C111C] animate-pulse" />
      )}

      {/* Dark Vignette and Specular Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030609] via-transparent to-[#030609]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[#cf30aa]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Top Floating Glass Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/90">
        <span className="w-1.5 h-1.5 rounded-full bg-[#cf30aa] animate-pulse" />
        <span className="uppercase tracking-wider font-semibold">{type}</span>
      </div>

      {/* Top Right High-Res Tag */}
      <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-white/10 backdrop-blur-md text-[9px] font-mono text-slate-300 border border-white/10">
        VECTOR / 4K
      </div>
    </div>
  );
};
