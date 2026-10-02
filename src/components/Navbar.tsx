import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  MessageCircle,
  Menu,
  X,
  Search,
  Sparkles,
  Layers,
  Zap,
  ChevronDown,
  Calendar,
  Send,
  Star,
  Globe,
  HelpCircle,
  Briefcase,
  Sliders,
  Workflow,
  Phone,
  Mail
} from 'lucide-react';
import { CommandPalette } from './CommandPalette';
import { FIVERR_GIGS } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection: propActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>(propActiveSection || 'portfolio');
  const [showTopNotice, setShowTopNotice] = useState(true);
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    const checkModals = () => {
      const modals = document.querySelectorAll('[data-modal="true"], [role="dialog"]');
      const otherModals = Array.from(modals).filter(m => {
        const ariaLabel = m.getAttribute('aria-label') || '';
        return !ariaLabel.includes('Site Navigation Menu');
      });
      setIsAnyModalOpen(otherModals.length > 0);
    };
    const interval = setInterval(checkModals, 100);
    checkModals();
    return () => clearInterval(interval);
  }, []);

  // Hover states for the circular symbolic buttons
  const [hoveredButton, setHoveredButton] = useState<'search' | 'whatsapp' | 'book' | 'menu' | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when mobile menu is open on any device
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / winHeight) * 100));
        setScrollProgress(progress);
      }

      const sections = ['portfolio', 'graphics-design', 'design-templates', 'social-banners', 'pricing', 'estimator', 'process', 'reviews', 'contact', 'faq'];
      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(id);
  };

  const handleMouseEnterDropdown = (menu: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const portfolioCategories = [
    { label: 'Logo & Branding', desc: 'Original brand system designs', icon: Sparkles, sectionId: 'portfolio' },
    { label: 'Graphics Design', desc: 'Packaging, SaaS branding, and print sets', icon: Layers, sectionId: 'graphics-design' },
    { label: 'Design Templates', desc: 'Premium resource blueprints', icon: Layers, sectionId: 'design-templates' },
    { label: 'Social Headers', desc: 'Gritty sports & luxury corporate banners', icon: Layers, sectionId: 'social-banners' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isAnyModalOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        
        {/* Top Minimal Notice Bar */}
        {showTopNotice && (
          <div className="bg-[#05080E] border-b border-white/5 text-xs text-slate-300 py-1.5 px-4 relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#cf30aa] animate-pulse shadow-[0_0_8px_#cf30aa]" />
                <span className="font-medium text-white">Available for Q2 Projects</span>
                <span className="hidden sm:inline text-slate-500">·</span>
                <span className="hidden sm:inline text-slate-400 font-mono text-[11px]">100% On-Time Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/8801342900364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#dfa2da] text-[11px] font-mono transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#dfa2da]" />
                  <span>WhatsApp: +880 1342 900364</span>
                </a>
                <button
                  onClick={() => setShowTopNotice(false)}
                  className="text-slate-500 hover:text-white transition-colors cursor-pointer"
                  aria-label="Dismiss notice"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Main Navbar Bar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'liquid-glass py-2.5 shadow-2xl border-b border-white/15'
              : 'bg-[#030609]/75 backdrop-blur-xl border-b border-white/10 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            {/* Brand */}
            <div className="flex items-center shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 group focus:outline-none"
              >
                <ProfileAvatar sizeClassName="w-8 h-8 rounded-xl" textSizeClassName="text-xs" />
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight font-display group-hover:text-[#dfa2da] transition-colors leading-tight whitespace-nowrap">
                    Abdullah Forhad
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5 whitespace-nowrap">
                    Brand &amp; Visual Design
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 text-xs font-medium p-1 liquid-glass-pill rounded-full">
              
              {/* Work */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnterDropdown('work')}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  onClick={() => handleLinkClick('portfolio')}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                    activeSection === 'portfolio'
                      ? 'text-white font-bold neu-3d-btn-primary'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Work</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                {activeDropdown === 'work' && (
                  <div className="absolute top-full left-0 mt-2 w-72 liquid-glass-card rounded-2xl p-2.5 shadow-2xl animate-fadeIn z-50">
                    <div className="space-y-1">
                      {portfolioCategories.map((cat, i) => (
                        <button
                          key={i}
                          onClick={() => handleLinkClick(cat.sectionId)}
                          className="w-full text-left p-2 rounded-xl hover:bg-white/10 transition-all flex items-center justify-between cursor-pointer group"
                        >
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-[#dfa2da] transition-colors">{cat.label}</div>
                            <div className="text-[10px] text-slate-400">{cat.desc}</div>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#dfa2da] transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <button
                onClick={() => handleLinkClick('pricing')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeSection === 'pricing'
                    ? 'text-[#dfa2da] bg-[#cf30aa]/15 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Pricing</span>
              </button>

              {/* Estimator */}
              <button
                onClick={() => handleLinkClick('estimator')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  activeSection === 'estimator'
                    ? 'text-[#dfa2da] bg-[#cf30aa]/15 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Estimator</span>
                <span className="text-[9px] font-mono px-1 rounded bg-[#cf30aa]/20 text-[#dfa2da] font-bold">
                  Tool
                </span>
              </button>

              {/* Process */}
              <button
                onClick={() => handleLinkClick('process')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeSection === 'process'
                    ? 'text-[#dfa2da] bg-[#cf30aa]/15 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Process</span>
              </button>

              {/* Reviews */}
              <button
                onClick={() => handleLinkClick('reviews')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeSection === 'reviews'
                    ? 'text-[#dfa2da] bg-[#cf30aa]/15 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Reviews</span>
              </button>

              {/* FAQ */}
              <button
                onClick={() => handleLinkClick('faq')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeSection === 'faq'
                    ? 'text-[#dfa2da] bg-[#cf30aa]/15 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>FAQ</span>
              </button>

            </nav>

            {/* Right Action Suite: Round Symbolic Icons with Spring Transition Reveal */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              
              {/* 1. ROUND SYMBOLIC SEARCH (⌘K) BUTTON WITH HOVER REVEAL */}
              <motion.button
                layout
                data-no-butterfly="true"
                data-round-icon="true"
                onMouseEnter={() => setHoveredButton('search')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => setCommandPaletteOpen(true)}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="relative h-9.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 hover:border-[#cf30aa]/50 flex items-center overflow-hidden cursor-pointer shadow-sm group select-none transition-colors shrink-0"
                style={{
                  paddingLeft: '0.65rem',
                  paddingRight: '0.65rem',
                }}
                aria-label="Quick Search (⌘K)"
                title="Search (⌘K)"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Search className="w-4 h-4 text-[#dfa2da] group-hover:scale-110 transition-transform" />
                </div>

                <AnimatePresence initial={false}>
                  {hoveredButton === 'search' ? (
                    <motion.div
                      key="search-label"
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="overflow-hidden whitespace-nowrap flex items-center gap-1.5 pr-1.5"
                    >
                      <span className="text-xs font-semibold text-white font-sans">
                        Quick Search
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                        ⌘K
                      </span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>

              {/* 2. ROUND SYMBOLIC WHATSAPP BUTTON WITH HOVER REVEAL */}
              <motion.a
                layout
                data-no-butterfly="true"
                data-round-icon="true"
                href="https://wa.me/8801342900364"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="hidden sm:flex relative h-9.5 rounded-full bg-[#cf30aa]/15 hover:bg-[#cf30aa]/25 active:bg-[#cf30aa]/35 border border-[#cf30aa]/40 hover:border-[#dfa2da]/60 items-center overflow-hidden cursor-pointer shadow-sm group select-none transition-all shrink-0"
                style={{
                  paddingLeft: '0.65rem',
                  paddingRight: '0.65rem',
                }}
                aria-label="Direct WhatsApp Chat"
                title="Chat on WhatsApp"
              >
                <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#dfa2da] group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#cf30aa] animate-pulse" />
                </div>

                <AnimatePresence initial={false}>
                  {hoveredButton === 'whatsapp' ? (
                    <motion.div
                      key="whatsapp-label"
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="overflow-hidden whitespace-nowrap flex items-center gap-1.5 pr-1.5"
                    >
                      <span className="text-xs font-semibold text-[#dfa2da] font-sans">
                        WhatsApp
                      </span>
                      <span className="text-[10px] font-mono text-[#a099d8]">
                        +880 1342
                      </span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.a>

              {/* 3. ROUND SYMBOLIC BOOK PROJECT BUTTON WITH HOVER REVEAL */}
              <motion.button
                layout
                data-no-butterfly="true"
                data-round-icon="true"
                onClick={() => handleLinkClick('contact')}
                onMouseEnter={() => setHoveredButton('book')}
                onMouseLeave={() => setHoveredButton(null)}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="relative h-9.5 rounded-full neu-3d-btn-primary text-white flex items-center overflow-hidden cursor-pointer shadow-[0_0_16px_rgba(207,48,170,0.4)] hover:shadow-[0_0_24px_rgba(207,48,170,0.6)] group select-none transition-shadow shrink-0 font-bold"
                style={{
                  paddingLeft: '0.65rem',
                  paddingRight: '0.65rem',
                }}
                aria-label="Book a Project"
                title="Book Project & Start Work"
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 stroke-[2.5] group-hover:rotate-12 transition-transform text-white" />
                </div>

                <AnimatePresence initial={false}>
                  {hoveredButton === 'book' ? (
                    <motion.div
                      key="book-label"
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="overflow-hidden whitespace-nowrap flex items-center gap-1 pr-1.5 text-xs font-extrabold text-white"
                    >
                      <span>Book Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>

              {/* 4. ROUND SYMBOLIC MENU TOGGLE BUTTON WITH HOVER REVEAL */}
              <motion.button
                layout
                data-no-butterfly="true"
                data-round-icon="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                onMouseEnter={() => setHoveredButton('menu')}
                onMouseLeave={() => setHoveredButton(null)}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className={`relative h-9.5 rounded-full flex items-center overflow-hidden cursor-pointer select-none transition-all shrink-0 ${
                  mobileMenuOpen
                    ? 'bg-[#cf30aa]/20 border border-[#cf30aa] text-[#dfa2da] shadow-[0_0_16px_rgba(207,48,170,0.3)]'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/10 hover:border-white/30 text-slate-300 hover:text-white'
                }`}
                style={{
                  paddingLeft: '0.65rem',
                  paddingRight: '0.65rem',
                }}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                title={mobileMenuOpen ? 'Close Menu (Esc)' : 'Open Quick Menu'}
              >
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close-icon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <X className="w-4 h-4 text-[#dfa2da] stroke-[2.5]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu-icon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Menu className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence initial={false}>
                  {hoveredButton === 'menu' ? (
                    <motion.div
                      key="menu-label"
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                      exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="overflow-hidden whitespace-nowrap flex items-center gap-1.5 pr-1.5 text-xs font-semibold"
                    >
                      <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
                      <span className="text-[10px] font-mono opacity-60">Esc</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>
            </div>

          </div>

          {/* Progress Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#402fb5] via-[#cf30aa] to-[#dfa2da]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

        </div>

      </header>

      {/* All-Device Supported Menu Drawer & Modal Window (Directly at root viewport for unconstrained stacking) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div 
            data-no-butterfly="true"
            data-visual-window="true"
            data-modal="true"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-xl overflow-hidden animate-fadeIn visual-window modal-window no-butterfly select-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop Click Dismiss */}
            <div className="fixed inset-0" onClick={() => setMobileMenuOpen(false)} />

            {/* Uiverse Glow Rotating Conic Border Wrapper with Stacking Isolation */}
            <div 
              data-no-butterfly="true"
              data-visual-window="true"
              className="relative w-full max-w-3xl p-[2px] rounded-[26px] overflow-hidden my-auto max-h-[92vh] flex flex-col z-10 visual-window no-butterfly shadow-[0_0_60px_rgba(207,48,170,0.35),0_0_35px_rgba(64,47,181,0.5)] transition-all duration-300"
              style={{ isolation: 'isolate' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Outer Diffuse Rotating Conic Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)] filter blur-[18px] opacity-75 pointer-events-none will-change-transform -z-20" />
              
              {/* Crisp Concentrated Rotating Conic Border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)] opacity-100 pointer-events-none will-change-transform -z-10" />

              {/* Modal Core Window */}
              <div className="relative z-10 w-full bg-[#080712] rounded-[24px] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl border border-white/10">
                
                {/* 1. Pinned Dedicated Window Header Bar (Zero Overlap with Content) */}
                <div className="px-4 sm:px-6 py-3.5 bg-[#0d0a1d]/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <ProfileAvatar sizeClassName="w-9 h-9 rounded-xl shadow-md ring-1 ring-white/15" textSizeClassName="text-xs" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white font-display">Abdullah Forhad</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#cf30aa]/20 text-[#dfa2da] border border-[#cf30aa]/40">
                          Navigator
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for Q2 Projects</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded-lg">
                      <span>ESC</span>
                    </span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#cf30aa] border border-white/15 hover:border-[#cf30aa] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                      aria-label="Close navigation menu"
                      title="Close Menu (Esc)"
                    >
                      <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* 2. Scrollable Body with Clean Single Scrollbar */}
                <div className="overflow-y-auto flex-1 p-4 sm:p-5 md:p-6 space-y-4 custom-scrollbar bg-[#05040d]">
                  
                  {/* Studio Overview Status Bar */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#120e29]/90 via-[#0d0a1f]/90 to-[#120e29]/90 border border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-[#dfa2da] font-bold">● Studio Directory</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-[11px] text-slate-400 font-mono">11 Sections · Instant Jump</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        100% On-Time
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-[#dfa2da] flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-[#dfa2da]" />
                        5.0★ (120+ Reviews)
                      </span>
                    </div>
                  </div>

                  {/* Primary Navigation Grid with Elemental Cards (No clipping, rich layout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                    {[
                      { id: 'portfolio', title: 'Featured Work & Portfolio', desc: 'Brand identity, original logo marks & SaaS UI systems', icon: Briefcase, tag: '01 Work' },
                      { id: 'graphics-design', title: 'Graphics & Visual Design', desc: 'Packaging dielines, apparel, print & brand assets', icon: Layers, tag: '02 Graphics' },
                      { id: 'design-templates', title: 'Design Templates Blueprint', desc: 'Premium Figma, Photoshop & vector resource sets', icon: Layers, tag: '03 Templates' },
                      { id: 'social-banners', title: 'Social & Visual Banners', desc: 'Gritty sports posters & luxury corporate ad campaigns', icon: Globe, tag: '04 Social' },
                      { id: 'services', title: 'Specialized Freelance Gigs', desc: 'Verified Fiverr Pro design services & rapid delivery', icon: Zap, tag: '05 Services' },
                      { id: 'pricing', title: 'Transparent Pricing Tiers', desc: 'Starter, Pro & Enterprise blueprints with deliverables', icon: Calendar, tag: '06 Pricing' },
                      { id: 'estimator', title: 'Project Cost Estimator', desc: 'Interactive scope calculator with real-time quote generation', icon: Sliders, tag: '07 Estimator' },
                      { id: 'process', title: '4-Step Design Pipeline', desc: 'Discovery, concept drafting, iterative polish & final handoff', icon: Workflow, tag: '08 Process' },
                      { id: 'reviews', title: 'Verified Client Reviews', desc: '5.0-star ratings and testimonials from 120+ founders', icon: Star, tag: '09 Reviews' },
                      { id: 'contact', title: 'Direct Client Booking & Quote', desc: 'Schedule your project, customize deliverables & start work', icon: Send, tag: '10 Booking' },
                      { id: 'faq', title: 'Frequently Asked Questions', desc: 'Turnaround speed, vector source files, revisions & copyright', icon: HelpCircle, tag: '11 FAQ' },
                    ].map((item) => {
                      const IconComponent = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleLinkClick(item.id);
                          }}
                          className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 flex items-start gap-3 cursor-pointer group border ${
                            isActive
                              ? 'bg-[#cf30aa]/20 text-white border-[#cf30aa]/70 shadow-[0_0_20px_rgba(207,48,170,0.3)] ring-1 ring-[#cf30aa]/50'
                              : 'bg-[#0c091d]/85 text-slate-200 hover:bg-[#151033] hover:text-white border-white/10 hover:border-[#cf30aa]/50 hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl border group-hover:scale-105 transition-transform shrink-0 ${
                            isActive 
                              ? 'bg-[#cf30aa]/30 border-[#cf30aa]/60 text-white shadow-[0_0_10px_#cf30aa]' 
                              : 'bg-black/40 border-white/10 text-[#dfa2da] group-hover:border-[#cf30aa]/40'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5 mb-1">
                              <span className="font-bold text-white font-display text-[13px] group-hover:text-[#dfa2da] transition-colors leading-tight">
                                {item.title}
                              </span>
                              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded shrink-0 border ${
                                isActive 
                                  ? 'bg-[#cf30aa]/40 text-white border-[#cf30aa]' 
                                  : 'bg-black/50 text-[#dfa2da] border-white/10'
                              }`}>
                                {item.tag}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                </div>

                {/* 3. Pinned Window Bottom Action Suite & Contact Bar */}
                <div className="p-3.5 sm:p-4 bg-[#0a0718]/95 backdrop-blur-xl border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                  
                  {/* Direct Communication Channels */}
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <a
                      href="mailto:contact@abdullahforhad.com"
                      className="flex items-center gap-1.5 hover:text-[#dfa2da] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#dfa2da]" />
                      <span className="font-mono">contact@abdullahforhad.com</span>
                    </a>
                    <span className="text-slate-700 hidden sm:inline">|</span>
                    <a
                      href="tel:+8801342900364"
                      className="flex items-center gap-1.5 hover:text-[#dfa2da] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#dfa2da]" />
                      <span className="font-mono">+880 1342 900364</span>
                    </a>
                  </div>

                  {/* 3 Quick Action Buttons */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setCommandPaletteOpen(true);
                      }}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all cursor-pointer"
                    >
                      <Search className="w-3.5 h-3.5 text-[#dfa2da]" />
                      <span>Search</span>
                      <span className="text-[10px] font-mono text-slate-400">⌘K</span>
                    </button>

                    <a
                      href="https://wa.me/8801342900364"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#dfa2da] bg-[#cf30aa]/15 hover:bg-[#cf30aa]/25 border border-[#cf30aa]/40 rounded-xl transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#dfa2da]" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleLinkClick('contact')}
                      className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-bold text-white neu-3d-btn-primary rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Book Project</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Modern Floating Mobile Bottom Navigation Dock (1-thumb touch navigation) */}
      <nav
        aria-label="Mobile Navigation Dock"
        data-no-butterfly="true"
        className="md:hidden fixed bottom-3 inset-x-3 z-40 max-w-sm mx-auto bg-[#070B13]/90 backdrop-blur-2xl border border-white/15 rounded-full p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.7)] flex items-center justify-around"
      >
        {/* 1. Work */}
        <button
          onClick={() => handleLinkClick('portfolio')}
          className={`relative px-2.5 py-2 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
            activeSection === 'portfolio'
              ? 'text-[#dfa2da] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Work"
        >
          <Briefcase className="w-4 h-4" />
          <span className="text-[10px] font-medium leading-none">Work</span>
          {activeSection === 'portfolio' && (
            <motion.span
              layoutId="mobile-dock-dot"
              className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-[#cf30aa] shadow-[0_0_8px_#cf30aa]"
            />
          )}
        </button>

        {/* 2. Pricing */}
        <button
          onClick={() => handleLinkClick('pricing')}
          className={`relative px-2.5 py-2 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
            activeSection === 'pricing'
              ? 'text-[#dfa2da] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Pricing"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-medium leading-none">Pricing</span>
          {activeSection === 'pricing' && (
            <motion.span
              layoutId="mobile-dock-dot"
              className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-[#cf30aa] shadow-[0_0_8px_#cf30aa]"
            />
          )}
        </button>

        {/* 3. Estimator */}
        <button
          onClick={() => handleLinkClick('estimator')}
          className={`relative px-2.5 py-2 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
            activeSection === 'estimator'
              ? 'text-[#dfa2da] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Price Estimator"
        >
          <div className="relative">
            <Zap className="w-4 h-4 text-[#dfa2da]" />
            <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-[#cf30aa] animate-ping" />
          </div>
          <span className="text-[10px] font-medium leading-none text-[#dfa2da]">Estimate</span>
          {activeSection === 'estimator' && (
            <motion.span
              layoutId="mobile-dock-dot"
              className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-[#cf30aa] shadow-[0_0_8px_#cf30aa]"
            />
          )}
        </button>

        {/* 4. WhatsApp */}
        <a
          href="https://wa.me/8801342900364"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-2.5 py-2 rounded-full flex flex-col items-center gap-0.5 text-[#dfa2da] hover:text-white transition-all cursor-pointer"
          title="WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#cf30aa] animate-pulse" />
          </div>
          <span className="text-[10px] font-medium leading-none">Chat</span>
        </a>

        {/* 5. Menu / More */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`relative px-2.5 py-2 rounded-full flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
            mobileMenuOpen
              ? 'text-[#dfa2da] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="More Sections"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="text-[10px] font-medium leading-none">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={handleLinkClick}
      />
    </>
  );
};
