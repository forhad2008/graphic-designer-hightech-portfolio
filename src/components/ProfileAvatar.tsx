import React, { useState } from 'react';
import { IMAGE_ASSETS } from '../data/imageAssets';

interface ProfileAvatarProps {
  className?: string;
  sizeClassName?: string;
  textSizeClassName?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className = '',
  sizeClassName = 'w-8 h-8 rounded-xl',
  textSizeClassName = 'text-xs',
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);

  // Candidate image paths for GitHub Pages subfolders, Vite static dist, and local dev
  const photoCandidates = [
    IMAGE_ASSETS.profilePhoto,
    './1p.jpg',
    '1p.jpg',
    '/1p.jpg',
    './photo.png',
    'photo.png',
    '/photo.png',
  ].filter((src, idx, self) => Boolean(src) && self.indexOf(src) === idx);

  const currentSrc = photoCandidates[candidateIndex];

  const handleImgError = () => {
    if (candidateIndex < photoCandidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setCandidateIndex(-1); // Show AF monogram fallback if photo fails or is 0 bytes
    }
  };

  return (
    <div className={`relative ${sizeClassName} overflow-hidden border border-[#cf30aa]/40 shadow-sm animated-border shrink-0 bg-[#0d1424] ${className}`}>
      {candidateIndex >= 0 && currentSrc ? (
        <img
          src={currentSrc}
          alt="Abdullah Forhad"
          onError={handleImgError}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br from-[#cf30aa] via-[#8b5cf6] to-[#402fb5] flex items-center justify-center text-white font-black font-display shadow-[0_0_15px_rgba(207,48,170,0.5)] ${textSizeClassName}`}>
          AF
        </div>
      )}
    </div>
  );
};
