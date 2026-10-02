import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
}

export function ButterflyCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only enable on fine pointer desktop/laptop devices with sufficient screen width
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches || window.innerWidth < 768) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        const isClickable =
          computedStyle.cursor === 'pointer' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null;
        setIsPointer(isClickable);
      }

      // Add particle trail
      if (Math.random() < 0.6) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() * 10 - 5),
          y: e.clientY + (Math.random() * 10 - 5),
          size: Math.random() * 4 + 2,
          color: Math.random() > 0.5 ? '#cf30aa' : '#dfa2da',
          opacity: 0.8,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 1.0,
        });
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation loop for smooth lerp and canvas particles
    let animationFrameId: number;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const update = () => {
      // Smooth lerp (spring easing) towards target
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      
      currentPos.current.x += dx * 0.18;
      currentPos.current.y += dy * 0.18;

      setPos({ x: currentPos.current.x, y: currentPos.current.y });

      // Render canvas particles
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const particles = particlesRef.current;
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.03;
          p.opacity = p.life * 0.8;

          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  // Calculate slight tilt based on movement direction
  const dx = targetPos.current.x - currentPos.current.x;
  const rotation = Math.max(-25, Math.min(25, dx * 0.6));

  return (
    <>
      {/* Particle Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[999999]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Live Butterfly Cursor */}
      <div
        className="fixed pointer-events-none z-[9999999] transition-transform duration-75 ease-out select-none"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${isMouseDown ? 0.8 : isPointer ? 1.25 : 1})`,
        }}
      >
        <div className="relative w-10 h-10 -ml-2 -mt-2 filter drop-shadow-[0_0_10px_rgba(207,48,170,0.8)]">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-[flutter_0.35s_ease-in-out_infinite_alternate]"
            style={{ transformOrigin: 'center' }}
          >
            <defs>
              <linearGradient id="butterflyWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cf30aa" />
                <stop offset="50%" stopColor="#402fb5" />
                <stop offset="100%" stopColor="#dfa2da" />
              </linearGradient>
            </defs>

            {/* Left Wing */}
            <path
              d="M50 50 C20 15 5 25 2 45 C-1 65 20 85 50 65 Z"
              fill="url(#butterflyWingGrad)"
              stroke="#ffffff"
              strokeWidth="1.5"
              className="opacity-95"
            />
            <circle cx="25" cy="40" r="4" fill="#ffffff" className="opacity-9" />
            <circle cx="32" cy="55" r="3" fill="#dfa2da" className="opacity-8" />

            {/* Right Wing */}
            <path
              d="M50 50 C80 15 95 25 98 45 C101 65 80 85 50 65 Z"
              fill="url(#butterflyWingGrad)"
              stroke="#ffffff"
              strokeWidth="1.5"
              className="opacity-95"
            />
            <circle cx="75" cy="40" r="4" fill="#ffffff" className="opacity-9" />
            <circle cx="68" cy="55" r="3" fill="#dfa2da" className="opacity-8" />

            {/* Butterfly Body / Antennae */}
            <ellipse cx="50" cy="50" rx="3.5" ry="18" fill="#151226" stroke="#cf30aa" strokeWidth="1" />
            <path d="M48 34 Q40 22 35 25" fill="none" stroke="#dfa2da" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M52 34 Q60 22 65 25" fill="none" stroke="#dfa2da" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </>
  );
}
