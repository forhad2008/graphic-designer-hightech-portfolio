import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  ArrowUpRight,
  Sparkles,
  Bot,
  User,
  Loader2,
  RotateCcw,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProfileAvatar } from './ProfileAvatar';
import {
  ChatMessage,
  sendChatMessage,
  INITIAL_ASSISTANT_MESSAGE
} from '../utils/chatEngine';

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [chatLoading, setChatLoading] = useState<boolean>(false);
  const chatScrollContainerRef = useRef<HTMLDivElement>(null);
  const latestAnswerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_ASSISTANT_MESSAGE]);

  useEffect(() => {
    const checkModals = () => {
      const modals = document.querySelectorAll('[data-modal="true"], [role="dialog"]');
      const otherModals = Array.from(modals).filter(m => {
        const ariaLabel = m.getAttribute('aria-label') || '';
        return !ariaLabel.includes('Message and Project Inquiry Window');
      });
      const hasOther = otherModals.length > 0;
      setIsModalOpen(hasOther);
      if (hasOther) {
        setIsOpen(false);
      }
    };

    const observer = new MutationObserver(checkModals);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-modal', 'role']
    });
    checkModals();
    return () => observer.disconnect();
  }, []);

  // Auto-scroll smoothly to reveal the new assistant answer and options
  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === 'assistant' && messages.length > 1) {
      const timer = setTimeout(() => {
        if (chatScrollContainerRef.current) {
          chatScrollContainerRef.current.scrollTo({
            top: chatScrollContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const quickPrompts = [
    { label: '💼 Logo & Brand Identity Quote', query: 'What are your logo & brand design pricing packages?' },
    { label: '⚡ Deliver within 24 hours?', query: 'Can you deliver within 24 hours? What is your turnaround time?' },
    { label: '📁 What source files do I get?', query: 'What source files and deliverables will I receive?' },
    { label: '📦 Product Packaging & Dielines', query: 'Do you design product packaging, labels, and box dielines?' },
    { label: '🔄 How do revisions work?', query: 'How do revisions work and how many are included?' },
    { label: '📱 Social Media & YouTube Ads', query: 'Do you design high-converting social media ads and banners?' },
  ];

  const handleSendMessage = async (customText?: string) => {
    const text = (customText || userMessage).trim();
    if (!text || chatLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    if (!customText) setUserMessage('');
    setChatLoading(true);

    try {
      const reply = await sendChatMessage(messages, text);
      setMessages([...newHistory, reply]);
    } catch (err) {
      console.error(err);
    } finally {
      setChatLoading(false);
    }
  };

  const handleOpenWhatsAppDirect = (customText?: string) => {
    const message = customText || 'Hi Abdullah, I am visiting your portfolio and would like to discuss a project.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801342900364?text=${encoded}`, '_blank');
  };

  const handleActionClick = (action: ChatMessage['suggestedAction']) => {
    if (!action) return;
    if (action.actionType === 'whatsapp') {
      handleOpenWhatsAppDirect(action.target);
    } else if (action.actionType === 'scroll') {
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else if (action.actionType === 'email') {
      window.open(`mailto:${action.target}`, '_blank');
    } else if (action.actionType === 'link') {
      window.open(action.target, '_blank');
    }
  };

  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-1">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1" />;

          const parts = line.split(/(\*\*[^*]+\*\*)/g);
          const renderedParts = parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-white tracking-wide">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={pIdx}>{part}</span>;
          });

          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-0.5">
                <span className="text-[#dfa2da] text-xs leading-tight">•</span>
                <p className="flex-1 text-slate-300 text-xs leading-relaxed">{renderedParts}</p>
              </div>
            );
          }

          return (
            <p key={idx} className="text-slate-300 text-xs leading-relaxed">
              {renderedParts}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`fixed bottom-4 right-3.5 sm:bottom-5 sm:right-5 md:bottom-5 md:right-5 z-40 flex flex-col items-end transition-all duration-300 ${
        isModalOpen ? 'opacity-0 pointer-events-none translate-y-24 scale-75' : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
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
              stiffness: 320
            }}
            className="mb-3.5 w-[calc(100vw-1.75rem)] sm:w-[410px] max-w-[420px] p-[2px] rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(207,48,170,0.35),0_0_30px_rgba(64,47,181,0.5)] flex flex-col visual-window chat-window no-butterfly"
            style={{ isolation: 'isolate' }}
          >
            {/* Outer Rotating Conic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_20%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_75%,rgba(0,0,0,0)_90%)] filter blur-[15px] opacity-80 pointer-events-none will-change-transform -z-20" />

            {/* Crisp Rotating Conic Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] animate-[conicRotate_6s_linear_infinite] bg-[conic-gradient(rgba(0,0,0,0)_0%,#402fb5_12%,#a099d8_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_50%,#cf30aa_65%,#dfa2da_72%,rgba(0,0,0,0)_85%)] opacity-100 pointer-events-none will-change-transform -z-10" />

            {/* Inner Chat Container */}
            <div className="relative w-full bg-[#080712] rounded-[22px] overflow-hidden flex flex-col h-[540px]">
              {/* Chat Header */}
              <div className="p-3.5 bg-[#0d0a1f]/95 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <ProfileAvatar sizeClassName="w-9 h-9 rounded-2xl" textSizeClassName="text-xs" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#06090F] animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-display flex items-center gap-1.5">
                      <span>Abdullah Forhad AI</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#cf30aa]/20 text-[#dfa2da] border border-[#cf30aa]/40">
                        Advisor
                      </span>
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <span className="text-emerald-400">● Live Answers</span>
                      <span>· WhatsApp: 15m</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setMessages([INITIAL_ASSISTANT_MESSAGE])}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    title="Reset chat"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg neu-3d-btn cursor-pointer border border-white/10"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Chat Body & Conversation Thread */}
              <div ref={chatScrollContainerRef} className="relative flex-1 p-3.5 space-y-3 overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#080712] to-[#05040d]">
                {/* Message list */}
                {messages.map((m, idx) => {
                  const isLatestAnswer = m.role === 'assistant' && idx === messages.length - 1;
                  return (
                    <div
                      key={m.id}
                      ref={isLatestAnswer ? latestAnswerRef : undefined}
                      className={`flex items-start gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                        m.role === 'user'
                          ? 'bg-[#cf30aa] text-white'
                          : 'bg-white/10 text-[#dfa2da] border border-white/15'
                      }`}
                    >
                      {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    </div>

                    <div className={`max-w-[85%] flex flex-col gap-1.5 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div
                        className={`p-3 rounded-2xl text-xs leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-[#cf30aa]/25 text-white border border-[#cf30aa]/40 rounded-tr-none'
                            : 'neu-3d-raised-sm bg-[#0e0b24] text-slate-200 border border-[#402fb5]/30 rounded-tl-none shadow-sm'
                        }`}
                      >
                        {m.role === 'assistant' ? renderFormattedText(m.text) : m.text}

                        {/* Highlights */}
                        {m.highlights && m.highlights.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-white/10 space-y-1">
                            {m.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-1.5 text-[10px] font-mono text-[#dfa2da]">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Interactive Service & Question Options */}
                        {m.options && m.options.length > 0 && (
                          <div className="mt-2.5 pt-2.5 border-t border-white/10 space-y-1">
                            <p className="text-[10px] font-mono text-[#dfa2da] mb-1 font-semibold">
                              👇 Tap an option to explore:
                            </p>
                            <div className="grid grid-cols-1 gap-1">
                              {m.options.map((opt, optIdx) => (
                                <button
                                  key={optIdx}
                                  type="button"
                                  onClick={() => handleSendMessage(opt.query)}
                                  disabled={chatLoading}
                                  className="w-full p-2 rounded-xl bg-white/[0.04] hover:bg-[#cf30aa]/20 border border-white/10 hover:border-[#cf30aa]/50 text-left transition-all flex items-center justify-between group cursor-pointer disabled:opacity-40"
                                >
                                  <div className="flex flex-col truncate pr-1">
                                    <span className="text-[11px] font-semibold text-white group-hover:text-[#dfa2da]">
                                      {opt.label}
                                    </span>
                                    {opt.description && (
                                      <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-300 truncate">
                                        {opt.description}
                                      </span>
                                    )}
                                  </div>
                                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#dfa2da] shrink-0" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Suggested Action Button */}
                      {m.suggestedAction && (
                        <button
                          type="button"
                          onClick={() => handleActionClick(m.suggestedAction)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#cf30aa]/20 hover:bg-[#cf30aa]/30 border border-[#cf30aa]/40 text-[#dfa2da] hover:text-white text-[11px] font-mono font-medium transition-all cursor-pointer"
                        >
                          <span>{m.suggestedAction.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#dfa2da]" />
                        </button>
                      )}

                      <span className="text-[9px] font-mono text-slate-500 px-0.5">
                        {m.timestamp}
                      </span>
                    </div>
                  </div>
                ); })}

                {chatLoading && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-white/10 text-[#dfa2da] border border-white/15 flex items-center justify-center">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="bg-[#0e0b24] text-slate-300 border border-[#402fb5]/30 p-2.5 rounded-2xl rounded-tl-none text-xs flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-[#cf30aa]" />
                      <span className="text-[11px] font-mono">Finding answer...</span>
                    </div>
                  </div>
                )}

                {/* Quick Prompts Suggestions (always visible for easy 1-click inquiries) */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    ⚡ Instant Question Answers:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {quickPrompts.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(p.query)}
                        disabled={chatLoading}
                        className="w-full p-2 rounded-xl neu-3d-interactive text-left text-xs text-slate-300 hover:text-white transition-all flex items-center justify-between group cursor-pointer border border-[#402fb5]/20 hover:border-[#cf30aa]/50 bg-white/[0.02]"
                      >
                        <span className="truncate pr-2">{p.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#dfa2da] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Channels Footer Bar */}
              <div className="px-3 py-2 bg-[#0d0a1f] border-t border-white/10 grid grid-cols-3 gap-1.5 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => handleOpenWhatsAppDirect()}
                  className="p-1.5 rounded-lg neu-3d-btn text-emerald-400 hover:text-white flex items-center justify-center gap-1 text-[10px] transition-colors border border-emerald-500/20"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </button>
                <a
                  href="tel:+8801342900364"
                  className="p-1.5 rounded-lg neu-3d-btn text-slate-300 flex items-center justify-center gap-1 text-[10px] transition-colors border border-[#402fb5]/30"
                >
                  <Phone className="w-3 h-3 text-[#dfa2da]" />
                  <span>Call</span>
                </a>
                <a
                  href="mailto:forhadalpha08@gmail.com"
                  className="p-1.5 rounded-lg neu-3d-btn text-slate-300 flex items-center justify-center gap-1 text-[10px] transition-colors border border-[#402fb5]/30"
                >
                  <Mail className="w-3 h-3 text-[#a099d8]" />
                  <span>Email</span>
                </a>
              </div>

              {/* Chat Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-2.5 bg-[#0a0818] border-t border-white/10 flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask a question or request a quote..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl neu-3d-inset text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#cf30aa] border border-white/10"
                />
                <motion.button
                  type="submit"
                  disabled={chatLoading || !userMessage.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-xl neu-3d-btn-primary text-white font-bold cursor-pointer disabled:opacity-50 shadow-[0_0_12px_rgba(207,48,170,0.5)] shrink-0"
                  title="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
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
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 26 }}
        className="relative h-13 rounded-full neu-3d-btn-primary text-white font-extrabold flex items-center overflow-hidden cursor-pointer select-none group transition-shadow"
        style={{
          paddingLeft: '0.95rem',
          paddingRight: '0.95rem'
        }}
        title="Chat with Abdullah AI"
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
              <span>{isOpen ? 'Close Assistant' : 'Chat with Abdullah AI'}</span>
              {!isOpen && <span className="text-[10px] font-sans opacity-75 font-normal">· Instant</span>}
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
