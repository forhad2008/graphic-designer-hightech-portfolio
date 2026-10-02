import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Film } from 'lucide-react';

export const VeoCinematicVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden neu-3d-inset border border-white/15 bg-[#05030e] group shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-video sm:aspect-[16/9]">
      {/* Background Cinematic Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.12] scale-105 transition-transform duration-1000 group-hover:scale-100"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          poster="./design1.webp"
        />
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04030a] via-[#04030a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04030a]/80 via-transparent to-[#04030a]/60" />
      </div>

      {/* Floating Veo Cinematic Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white shadow-lg">
        <Film className="w-3.5 h-3.5 text-[#cf30aa] animate-pulse" />
        <span className="font-bold tracking-wider">Veo AI Cinematic Montage</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
      </div>

      {/* Video Control Bar */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 shadow-xl">
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-xl hover:bg-white/15 text-white transition-colors cursor-pointer"
          title={isPlaying ? 'Pause Montage' : 'Play Montage'}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-[#dfa2da]" /> : <Play className="w-4 h-4 text-[#dfa2da]" />}
        </button>
        <div className="w-[1px] h-4 bg-white/20" />
        <button
          onClick={toggleMute}
          className="p-1.5 rounded-xl hover:bg-white/15 text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#dfa2da]" />}
        </button>
      </div>

      {/* Bottom Process Caption Overlay */}
      <div className="absolute bottom-4 left-4 right-28 z-20 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfa2da] font-extrabold block drop-shadow">
          Workflow Architecture
        </span>
        <h4 className="text-sm sm:text-base font-bold text-white font-display tracking-tight drop-shadow-md">
          From Wireframe Sketch to Immersive Brand Reality
        </h4>
      </div>
    </div>
  );
};
