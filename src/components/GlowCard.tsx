import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
  alwaysGlow?: boolean;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  rounded?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowClassName = '',
  alwaysGlow = false,
  intensity = 'medium',
  rounded = 'rounded-3xl',
}) => {
  const glowOpacity =
    intensity === 'vibrant'
      ? 'opacity-90'
      : intensity === 'subtle'
      ? 'opacity-50 group-hover:opacity-80'
      : 'opacity-70 group-hover:opacity-100';

  return (
    <div
      className={`relative group isolation-auto ${rounded} p-[1.5px] transition-all duration-300 ${className}`}
    >
      {/* Outer Rotating Conic Glow Aura */}
      <div
        className={`absolute -inset-[3px] ${rounded} overflow-hidden pointer-events-none -z-20 filter blur-[18px] transition-opacity duration-500 ${
          alwaysGlow ? 'opacity-85' : glowOpacity
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_5s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)]" />
      </div>

      {/* Crisp Rotating Conic Border Sweep */}
      <div
        className={`absolute inset-0 ${rounded} overflow-hidden pointer-events-none -z-10 transition-opacity duration-300 ${
          alwaysGlow ? 'opacity-100' : 'opacity-75 group-hover:opacity-100'
        } ${glowClassName}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_4s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)]" />
      </div>

      {/* Inner Card Surface */}
      <div className={`relative z-10 w-full h-full ${rounded} overflow-hidden`}>
        {children}
      </div>
    </div>
  );
};
