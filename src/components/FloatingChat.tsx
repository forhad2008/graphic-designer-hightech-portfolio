import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGE_ASSETS } from '../data/imageAssets';

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>('');

  const quickPrompts = [
    '💼 Need a Brand Identity & Logo quote',
    '⚡ Can you deliver within 24 hours?',
    '📦 Need Product Packaging & Dielines',
    '📱 High-converting Social Media Ads',
  ];

  const handleSendPrompt = (promptText: string) => {
    const encoded = encodeURIComponent(`Hi Abdullah, ${promptText}. Can we discuss details?`);
    window.open(`https://wa.me/8801342900364?text=${encoded}`, '_blank');
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;
    const encoded = encodeURIComponent(`Hi Abdullah,\n\n${userMessage}`);
    window.open(`https://wa.me/8801342900364?text=${encoded}`, '_blank');
    setUserMessage('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Animated Chat & Work Process Inquiry Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-no-butterfly="true"
            data-visual-window="true"
            data-modal="true"
            role="dialog"
            aria-modal="true"
            aria-label="Message and Project Inquiry Window"
            initial={{ opacity: 0, y: 25, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{
              type: 'spring',
              damping: 24,
              stiffness: 320,
            }}
            className="mb-3.5 w-[340px] sm:w-[380px] p-[2px] rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(207,48,170,0.35),0_0_30px_rgba(64,47,181,0.5)] flex flex-col visual-window chat-window no-butterfly"
          >
            {/* Outer Rotating Conic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)] filter blur-[15px] opacity-80 pointer-events-none -z-20" />
            
            {/* Crisp Rotating Conic Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)] opacity-100 pointer-events-none -z-10" />

            {/* Inner Chat Container */}
            <div className="relative w-full bg-[#080712] rounded-[22px] overflow-hidden flex flex-col">
              {/* Chat Header */}
              <div className="p-4 bg-[#0d0a1f]/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl overflow-hidden border border-[#cf30aa]/50 shadow-[0_0_12px_rgba(207,48,170,0.5)] animated-border shrink-0 bg-[#0d1424]">
                      <img
                        src={IMAGE_ASSETS.profilePhoto}
                        alt="Abdullah Forhad"
                        onError={(e) => {
                          e.currentTarget.src = IMAGE_ASSETS.profilePhotoFallback;
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#cf30aa] border-2 border-[#06090F] animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">Abdullah Forhad</h4>
                    <p className="text-[10px] font-mono text-[#dfa2da] flex items-center gap-1">
                      <span>● Online on WhatsApp</span>
                      <span className="text-slate-400">· Avg reply: 15m</span>
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl neu-3d-btn cursor-pointer border border-white/10"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Chat Body & Quick Prompts */}
              <div className="p-4 space-y-3 max-h-[360px] overflow-y-auto custom-scrollbar">
                
                {/* Greeting bubble */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="neu-3d-raised-sm rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-200 leading-relaxed border border-[#402fb5]/30 bg-[#0e0b24]"
                >
                  <p className="font-semibold text-white mb-1">👋 Welcome to my design studio!</p>
                  <p className="text-slate-300">
                    Select a project category below to continue work process directly or type a custom message.
                  </p>
                </motion.div>

                {/* Quick action buttons with stagger */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Quick Project Inquiries:
                  </span>
                  {quickPrompts.map((prompt, idx) => (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05 }}
                      whileHover={{ scale: 1.01, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSendPrompt(prompt)}
                      className="w-full p-2.5 rounded-xl neu-3d-interactive text-left text-xs text-slate-300 hover:text-white transition-all flex items-center justify-between group cursor-pointer border border-[#402fb5]/20 hover:border-[#cf30aa]/50"
                    >
                      <span>{prompt}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#dfa2da] shrink-0" />
                    </motion.button>
                  ))}
                </div>

                {/* Direct Channels */}
                <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href="tel:+8801342900364"
                    className="p-2.5 rounded-xl neu-3d-btn text-slate-300 flex items-center justify-center gap-1.5 text-[11px] transition-colors border border-[#402fb5]/30"
                  >
                    <Phone className="w-3 h-3 text-[#dfa2da]" />
                    <span>+8801342900364</span>
                  </a>
                  <a
                    href="mailto:forhadalpha08@gmail.com"
                    className="p-2.5 rounded-xl neu-3d-btn text-slate-300 flex items-center justify-center gap-1.5 text-[11px] transition-colors border border-[#402fb5]/30"
                  >
                    <Mail className="w-3 h-3 text-[#a099d8]" />
                    <span>Email Direct</span>
                  </a>
                </div>

              </div>

              {/* Chat Input */}
              <form onSubmit={handleCustomSend} className="p-3 bg-[#0d0a1f] border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your design brief / question..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl neu-3d-inset text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#cf30aa] border border-white/10"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2.5 rounded-xl neu-3d-btn-primary text-white font-bold cursor-pointer shadow-[0_0_12px_rgba(207,48,170,0.5)]"
                  title="Send to WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Round Symbolic Floating Action Button with Cool Hover Reveal */}
      <motion.button
        layout
        data-no-butterfly="true"
        data-round-icon="true"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
        className="relative h-13 rounded-full neu-3d-btn-primary text-white font-extrabold flex items-center overflow-hidden cursor-pointer select-none group transition-shadow"
        style={{
          paddingLeft: '0.95rem',
          paddingRight: '0.95rem',
        }}
        title="Chat with Abdullah"
      >
        {/* Animated Icon Transition */}
        <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </motion.div>
            ) : (
              <motion.div
                key="message-icon"
                initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 fill-current stroke-[2.5] group-hover:scale-110 transition-transform" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Label Reveal on Hover */}
        <AnimatePresence initial={false}>
          {isHovered || isOpen ? (
            <motion.div
              key="chat-label"
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: 'auto', marginLeft: 10 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              className="overflow-hidden whitespace-nowrap flex items-center gap-1.5 pr-1.5 font-mono text-xs font-black tracking-tight"
            >
              <span>{isOpen ? 'Close Window' : 'Chat with Abdullah'}</span>
              {!isOpen && <span className="text-[10px] font-sans opacity-75 font-normal">· 15m</span>}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Pulse beacon when closed */}
        {!isOpen && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#030609] animate-ping" />
        )}
      </motion.button>

    </div>
  );
};
