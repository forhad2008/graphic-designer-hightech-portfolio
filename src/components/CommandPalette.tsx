import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Search,
  X,
  Briefcase,
  Layers,
  DollarSign,
  Calculator,
  MessageCircle,
  HelpCircle,
  Star,
  Zap,
  Mail,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_ITEMS, FIVERR_GIGS, PRICING_PACKAGES } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Section' | 'Work' | 'Gig' | 'Pricing' | 'Action';
  icon: React.ElementType;
  action: () => void;
  badge?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const items: SearchItem[] = [
    {
      id: 'sec-portfolio',
      title: 'Portfolio',
      subtitle: 'Brand identity, packaging, and social design',
      category: 'Section',
      icon: Briefcase,
      action: () => { onNavigate('portfolio'); onClose(); },
      badge: 'Featured'
    },
    {
      id: 'sec-services',
      title: 'Fiverr Gigs',
      subtitle: '5.0-star services starting from $25',
      category: 'Section',
      icon: Layers,
      action: () => { onNavigate('services'); onClose(); },
      badge: '5.0 ★'
    },
    {
      id: 'sec-estimator',
      title: 'Cost Estimator',
      subtitle: 'Calculate project budget & timeline',
      category: 'Section',
      icon: Calculator,
      action: () => { onNavigate('estimator'); onClose(); },
      badge: 'Tool'
    },
    {
      id: 'sec-pricing',
      title: 'Pricing Tiers',
      subtitle: 'Starter ($45), Standard ($120), Premium ($280)',
      category: 'Section',
      icon: DollarSign,
      action: () => { onNavigate('pricing'); onClose(); },
      badge: '3 Tiers'
    },
    {
      id: 'sec-process',
      title: 'Workflow',
      subtitle: '4-step design pipeline',
      category: 'Section',
      icon: Zap,
      action: () => { onNavigate('process'); onClose(); }
    },
    {
      id: 'sec-reviews',
      title: 'Reviews',
      subtitle: 'Verified client testimonials',
      category: 'Section',
      icon: Star,
      action: () => { onNavigate('reviews'); onClose(); },
      badge: '5.0 ★'
    },
    {
      id: 'sec-contact',
      title: 'Book a Project',
      subtitle: 'Direct brief submission',
      category: 'Section',
      icon: Mail,
      action: () => { onNavigate('contact'); onClose(); }
    },
    {
      id: 'sec-faq',
      title: 'FAQ',
      subtitle: 'Licensing, formats, and turnaround',
      category: 'Section',
      icon: HelpCircle,
      action: () => { onNavigate('faq'); onClose(); }
    },

    // Work items
    ...PORTFOLIO_ITEMS.map((item) => ({
      id: `port-${item.id}`,
      title: item.title,
      subtitle: `${item.categoryLabel} · ${item.clientCountry || 'Client'}`,
      category: 'Work' as const,
      icon: Sparkles,
      action: () => {
        onNavigate('portfolio');
        onClose();
      },
      badge: item.year
    })),

    // Fiverr Gigs
    ...FIVERR_GIGS.map((gig) => ({
      id: `gig-${gig.id}`,
      title: gig.title,
      subtitle: `${gig.category} · from $${gig.startingPrice}`,
      category: 'Gig' as const,
      icon: Layers,
      action: () => {
        window.open(gig.fiverrUrl, '_blank');
        onClose();
      },
      badge: `${gig.rating}★`
    })),

    // Pricing Packages
    ...PRICING_PACKAGES.map((pkg) => ({
      id: `pkg-${pkg.id}`,
      title: `${pkg.name} Tier ($${pkg.priceUSD})`,
      subtitle: `${pkg.deliveryDays} Days · ${pkg.revisions} · ${pkg.initialConcepts} Concepts`,
      category: 'Pricing' as const,
      icon: DollarSign,
      action: () => {
        onNavigate('pricing');
        onClose();
      },
      badge: pkg.popular ? 'Popular' : undefined
    })),

    // Actions
    {
      id: 'act-whatsapp',
      title: 'WhatsApp Chat',
      subtitle: '+880 1342 900364',
      category: 'Action',
      icon: MessageCircle,
      action: () => {
        window.open('https://wa.me/8801342900364', '_blank');
        onClose();
      },
      badge: 'Online'
    },
    {
      id: 'act-email',
      title: 'Email Inquiry',
      subtitle: 'forhadalpha08@gmail.com',
      category: 'Action',
      icon: Mail,
      action: () => {
        window.open('mailto:forhadalpha08@gmail.com', '_blank');
        onClose();
      },
      badge: '< 1h'
    }
  ];

  const filteredItems = items.filter((item) => {
    const text = `${item.title} ${item.subtitle} ${item.category} ${item.badge || ''}`.toLowerCase();
    return text.includes(query.toLowerCase().trim());
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      data-no-butterfly="true"
      data-visual-window="true"
      data-modal="true"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[99999] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-xl animate-fadeIn visual-window modal-window no-butterfly"
    >
      <div className="fixed inset-0" onClick={onClose} />

      {/* Uiverse Glow Rotating Conic Border Wrapper */}
      <div
        data-no-butterfly="true"
        data-visual-window="true"
        className="relative w-full max-w-xl p-[2px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(207,48,170,0.35),0_0_30px_rgba(64,47,181,0.5)] z-10 visual-window no-butterfly"
        style={{ isolation: 'isolate' }}
      >
        {/* Outer Rotating Conic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_5s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)] filter blur-[15px] opacity-80 pointer-events-none will-change-transform -z-20" />
        
        {/* Crisp Rotating Conic Border */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_5s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)] opacity-100 pointer-events-none will-change-transform -z-10" />

        {/* Content Box */}
        <div className="relative w-full bg-[#080712] rounded-[22px] overflow-hidden flex flex-col max-h-[75vh]">
          
          {/* Search Input Bar with Uiverse styling */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#0d0a1f]/90">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#402fb5] to-[#cf30aa] flex items-center justify-center text-white shadow-[0_0_12px_rgba(207,48,170,0.5)] shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, services, pricing..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-white p-1 rounded-md cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2 py-1 text-[10px] font-mono uppercase text-slate-300 hover:text-white bg-white/10 rounded-lg border border-white/15 cursor-pointer"
            >
              ESC
            </button>
          </div>

          {/* Results */}
          <div ref={listRef} className="overflow-y-auto p-2 space-y-1 divide-y divide-white/5 custom-scrollbar bg-[#080712]">
            {filteredItems.length === 0 ? (
              <div className="py-10 text-center text-slate-400 text-xs font-mono">
                No results for &ldquo;{query}&rdquo;
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left p-3 rounded-2xl flex items-center justify-between gap-3 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#402fb5]/30 via-[#cf30aa]/20 to-transparent border border-[#cf30aa]/40 text-white shadow-[0_0_15px_rgba(207,48,170,0.2)]'
                        : 'hover:bg-white/5 text-slate-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-gradient-to-br from-[#cf30aa] to-[#402fb5] text-white font-bold shadow-[0_0_10px_rgba(207,48,170,0.4)]' : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-white truncate">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#cf30aa]/20 text-[#dfa2da] border border-[#cf30aa]/40 shrink-0 font-bold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#dfa2da]' : 'text-slate-600'}`} />
                  </button>
                );
              })
            )}
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
};
