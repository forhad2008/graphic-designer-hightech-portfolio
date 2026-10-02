import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Determine hero section boundary (either hero element height or 450px threshold)
      const heroElement = document.getElementById('hero');
      const heroThreshold = heroElement ? heroElement.offsetHeight * 0.75 : 450;

      setIsVisible(scrollY > heroThreshold);

      // Compute scroll percentage for the circular progress ring
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for open modals to avoid UI clutter
  useEffect(() => {
    const checkModals = () => {
      const modals = document.querySelectorAll('[data-modal="true"], [role="dialog"]');
      setIsModalOpen(modals.length > 0);
    };

    const observer = new MutationObserver(checkModals);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-modal', 'role'] });
    checkModals();
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circular progress math
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && !isModalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', damping: 24, stiffness: 350 }}
          className="fixed bottom-20 sm:bottom-[76px] right-3.5 sm:right-6 z-30 flex items-center gap-2 pointer-events-auto"
        >
          {/* Tooltip on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#080712]/95 border border-white/15 text-[11px] font-mono text-slate-200 shadow-xl backdrop-blur-md pointer-events-none select-none"
              >
                <span className="font-bold text-[#dfa2da]">{Math.round(scrollProgress)}%</span>
                <span className="text-slate-400">· Back to top</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button with Progress Ring */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-no-butterfly="true"
            data-round-icon="true"
            aria-label="Back to top of page"
            title="Scroll to top"
            className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#080712]/90 hover:bg-[#0f0c22] border border-white/15 hover:border-[#cf30aa]/60 flex items-center justify-center cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.6),0_0_20px_rgba(207,48,170,0.25)] hover:shadow-[0_4px_28px_rgba(0,0,0,0.7),0_0_30px_rgba(207,48,170,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 no-butterfly"
            style={{ isolation: 'isolate' }}
          >
            {/* SVG Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
              viewBox="0 0 44 44"
            >
              {/* Background Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-white/10 fill-none"
                strokeWidth="2.5"
              />
              {/* Progress Stroke */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="fill-none transition-all duration-150"
                stroke="url(#backToTopGradient)"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="backToTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#402fb5" />
                  <stop offset="60%" stopColor="#cf30aa" />
                  <stop offset="100%" stopColor="#dfa2da" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Accent Inner Backdrop */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* Arrow Icon with dynamic hover lift */}
            <div className="relative z-10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform duration-200 text-[#dfa2da] group-hover:text-white" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
