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
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative ${sizeClassName} overflow-hidden border border-[#cf30aa]/40 shadow-sm animated-border shrink-0 bg-[#0d1424] ${className}`}>
      {!imgError ? (
        <img
          src={IMAGE_ASSETS.profilePhoto}
          alt="Abdullah Forhad"
          onError={() => setImgError(true)}
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
