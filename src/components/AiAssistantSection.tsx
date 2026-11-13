import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Bot,
  User,
  Loader2,
  RotateCcw,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
  Zap
} from 'lucide-react';
import { GlowCard } from './GlowCard';
import {
  ChatMessage,
  INITIAL_ASSISTANT_MESSAGE,
  QUICK_QUESTION_PROMPTS,
  sendChatMessage
} from '../utils/chatEngine';

export const AiAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_ASSISTANT_MESSAGE]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesBottomRef = useRef<HTMLDivElement>(null);
  const latestAssistantMsgRef = useRef<HTMLDivElement>(null);

  // Reliable, smooth auto-scroll inside the chat container
  const scrollToReply = (behavior: ScrollBehavior = 'smooth') => {
    if (!chatContainerRef.current) return;
    const container = chatContainerRef.current;
    const lastMsg = messages[messages.length - 1];

    if (lastMsg?.role === 'assistant' && latestAssistantMsgRef.current && messages.length > 1) {
      // Smoothly scroll container to the start of the assistant's reply so user can read immediately
      const offsetTop = latestAssistantMsgRef.current.offsetTop;
      container.scrollTo({
        top: Math.max(0, offsetTop - 12),
        behavior
      });
    } else {
      // Scroll to bottom (e.g., when user sends a message or during loading)
      container.scrollTo({
        top: container.scrollHeight,
        behavior
      });
    }
  };

  // Auto-scroll when new messages arrive or loading state changes
  useEffect(() => {
    if (messages.length <= 1) return;

    // Run across multiple animation frames to ensure full markdown/button layout rendering
    const rafId = requestAnimationFrame(() => scrollToReply('smooth'));
    const t1 = setTimeout(() => scrollToReply('smooth'), 60);
    const t2 = setTimeout(() => scrollToReply('smooth'), 180);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [messages, chatLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || chatLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    if (!textToSend) setInputMessage('');
    setChatLoading(true);

    // Scroll immediately to show the user's message & loading state
    requestAnimationFrame(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    });

    try {
      const assistantReply = await sendChatMessage(newHistory, text);
      setMessages([...newHistory, assistantReply]);
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setChatLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_ASSISTANT_MESSAGE]);
    setInputMessage('');
  };

  const handleActionClick = (action: ChatMessage['suggestedAction']) => {
    if (!action) return;
    if (action.actionType === 'whatsapp') {
      const url = `https://wa.me/8801342900364?text=${encodeURIComponent(action.target)}`;
      window.open(url, '_blank');
    } else if (action.actionType === 'scroll') {
      const el = document.getElementById(action.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.actionType === 'email') {
      window.open(`mailto:${action.target}`, '_blank');
    } else if (action.actionType === 'link') {
      window.open(action.target, '_blank');
    }
  };

  // Helper to render text with bold formatting and bullets
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-1.5">
        {lines.map((line, idx) => {
          if (!line.trim()) {
            return <div key={idx} className="h-1.5" />;
          }

          // Parse markdown bold **text**
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
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-[#dfa2da] text-xs mt-0.5">•</span>
                <p className="flex-1 text-slate-300">{renderedParts}</p>
              </div>
            );
          }

          return (
            <p key={idx} className="text-slate-300">
              {renderedParts}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <section id="ai-intelligence" className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#cf30aa]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-3 border border-[#cf30aa]/30 shadow-[0_0_15px_rgba(207,48,170,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>AI STUDIO ADVISOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Chat with Abdullah Forhad AI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Get instant, accurate answers about pricing packages, 24-hour rush delivery, master vector formats (.AI/.SVG), product packaging dielines, and commercial licensing.
          </p>
        </div>

        {/* Quick Question Chips Carousel */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#cf30aa]" />
              <span>Tap a popular question for an instant answer:</span>
            </span>
            <span className="text-[11px] font-mono text-[#dfa2da] hidden sm:inline-block">
              Specific &amp; Pre-Verified
            </span>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {QUICK_QUESTION_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt.query)}
                disabled={chatLoading}
                className="shrink-0 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-[#cf30aa]/15 border border-white/10 hover:border-[#cf30aa]/40 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
              >
                <span>{prompt.label}</span>
                {prompt.shortTag && (
                  <span className="text-[10px] font-semibold text-[#dfa2da] opacity-90">({prompt.shortTag})</span>
                )}
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Chat Box Container */}
        <GlowCard intensity="medium" rounded="rounded-3xl">
          <div className="bg-[#080712] liquid-glass-card rounded-3xl p-4 sm:p-6 md:p-7 flex flex-col justify-between min-h-[580px] h-[640px] border border-white/10 shadow-[0_0_40px_rgba(207,48,170,0.15)]">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cf30aa]/20 to-[#402fb5]/30 border border-[#cf30aa]/50 flex items-center justify-center text-[#dfa2da] shadow-inner">
                  <Bot className="w-5 h-5 text-[#dfa2da]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <span>Abdullah Forhad AI Brand Agent</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Trained on studio packages, dielines, turnaround times &amp; deliverables
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors text-xs font-mono flex items-center gap-1.5 cursor-pointer"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>

            {/* Messages Thread */}
            <div ref={chatContainerRef} className="relative flex-1 overflow-y-auto space-y-4 pr-2 mb-3 custom-scrollbar">
              {messages.map((m, mIdx) => {
                const isLatestAssistant = m.role === 'assistant' && mIdx === messages.length - 1;
                return (
                  <div
                    key={m.id}
                    ref={isLatestAssistant ? latestAssistantMsgRef : undefined}
                    className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      m.role === 'user'
                        ? 'bg-[#cf30aa] text-white shadow-[0_0_10px_rgba(207,48,170,0.4)]'
                        : 'bg-white/10 text-[#dfa2da] border border-white/15'
                    }`}
                  >
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className={`max-w-[85%] sm:max-w-[78%] flex flex-col gap-2 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-[#cf30aa]/20 text-white border border-[#cf30aa]/40 rounded-tr-none'
                          : 'bg-white/[0.03] text-slate-200 border border-white/10 rounded-tl-none shadow-sm'
                      }`}
                    >
                      {m.role === 'assistant' ? renderFormattedText(m.text) : m.text}

                      {/* Highlights Pill Badges */}
                      {m.highlights && m.highlights.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/10 space-y-1">
                          {m.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5 text-[11px] font-mono text-[#dfa2da]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Interactive Service & Question Options */}
                      {m.options && m.options.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <div className="flex items-center justify-between mb-2 px-0.5">
                            <span className="text-[11px] font-mono font-semibold text-[#dfa2da] flex items-center gap-1.5">
                              <span>Select an option for immediate answers:</span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline-block">
                              Instant Verified Info
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {m.options.map((opt, optIdx) => (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() => handleSend(opt.query)}
                                disabled={chatLoading}
                                className="px-3 py-2 rounded-xl bg-white/[0.03] hover:bg-[#cf30aa]/15 border border-white/10 hover:border-[#cf30aa]/50 text-left transition-all flex items-center justify-between gap-2 group cursor-pointer disabled:opacity-40 shadow-sm"
                              >
                                <span className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                                  {opt.label}
                                </span>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  {opt.shortTag && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#cf30aa]/15 text-[#dfa2da] border border-[#cf30aa]/30 font-semibold group-hover:bg-[#cf30aa]/25 transition-colors">
                                      {opt.shortTag}
                                    </span>
                                  )}
                                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#dfa2da] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#cf30aa]/20 to-[#402fb5]/30 hover:from-[#cf30aa]/30 hover:to-[#402fb5]/50 border border-[#cf30aa]/40 text-[#dfa2da] hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
                      >
                        <span>{m.suggestedAction.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#dfa2da]" />
                      </button>
                    )}

                    <span className="text-[10px] font-mono text-slate-500 px-1">
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

              {chatLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-[#dfa2da] border border-white/15 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white/[0.03] text-slate-300 border border-white/10 p-3.5 rounded-2xl rounded-tl-none text-xs flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#cf30aa]" />
                    <span className="font-mono">Analyzing studio knowledge &amp; answering...</span>
                  </div>
                </div>
              )}
              <div ref={messagesBottomRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative mt-auto pt-2"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask about pricing, 24h delivery, .AI/.SVG formats, packaging dielines..."
                  className="w-full pl-4 pr-24 py-3.5 rounded-2xl bg-[#04030a] border border-white/15 focus:border-[#cf30aa] focus:ring-2 focus:ring-[#cf30aa]/30 text-white placeholder-slate-500 text-xs sm:text-sm outline-none transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={chatLoading || !inputMessage.trim()}
                  className="absolute right-2 px-4 py-2 rounded-xl neu-3d-btn-primary text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-2 px-1 text-[11px] font-mono text-slate-400">
                <span>Direct WhatsApp: +880 1342 900364</span>
                <span className="hidden sm:inline">100% Commercial Copyright Guaranteed</span>
              </div>
            </form>

          </div>
        </GlowCard>

      </div>
    </section>
  );
};
