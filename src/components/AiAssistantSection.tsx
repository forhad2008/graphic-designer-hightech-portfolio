import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, Loader2 } from 'lucide-react';
import { GlowCard } from './GlowCard';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const AiAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hello! I'm Abdullah Forhad's direct AI brand design assistant. How can I help you plan your logo, brand identity, or packaging project today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || chatLoading) return;

    const userText = inputMessage;
    const newMessages: Message[] = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setInputMessage('');
    setChatLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          systemInstruction: 'You are Abdullah Forhad\'s direct AI brand design assistant. Speak as Abdullah Forhad\'s expert studio representative. When clients want to create a logo or discuss a project, warmly invite them to contact Abdullah Forhad directly via WhatsApp (+880 1342 900364) or email (pchamza2025@gmail.com).'
        })
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', text: "I'd love to help you build your custom logo and brand identity! Let's connect directly so we can discuss your vision. You can reach me (Abdullah Forhad) instantly on WhatsApp at +880 1342 900364 or email pchamza2025@gmail.com." }]);
      }
    } catch (err) {
      console.error(err);
      setMessages([...newMessages, { role: 'assistant', text: "I'm ready to bring your logo and brand vision to life! Feel free to reach out to me (Abdullah Forhad) directly on WhatsApp at +880 1342 900364 or email pchamza2025@gmail.com to get started right away." }]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <section id="ai-intelligence" className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#cf30aa]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-3 border border-[#cf30aa]/30 shadow-[0_0_15px_rgba(207,48,170,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>AI DESIGN ADVISOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Chat with Abdullah Forhad AI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Discuss your brand identity, logo concepts, or packaging requirements with our intelligent design advisor.
          </p>
        </div>

        {/* Chat Box Card */}
        <GlowCard intensity="medium" rounded="rounded-3xl">
          <div className="bg-[#080712] liquid-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[520px]">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#cf30aa]/20 border border-[#cf30aa]/50 flex items-center justify-center text-[#dfa2da]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">Abdullah Forhad AI Brand Assistant</h3>
                  <p className="text-[11px] text-slate-400 font-mono">Multi-turn brand design advisor &amp; project consultant</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
                Active &amp; Ready
              </span>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 custom-scrollbar">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    m.role === 'user' ? 'bg-[#cf30aa] text-white' : 'bg-white/10 text-[#dfa2da] border border-white/15'
                  }`}>
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#cf30aa]/20 text-white border border-[#cf30aa]/40 rounded-tr-none'
                      : 'bg-white/[0.03] text-slate-200 border border-white/10 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-[#dfa2da] border border-white/15 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white/[0.03] text-slate-300 border border-white/10 p-3 rounded-2xl text-xs flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#cf30aa]" />
                    <span>Gemini is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendChat} className="relative mt-auto">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about brand strategy, logo concepts, or color palettes..."
                className="w-full pl-4 pr-24 py-3.5 rounded-2xl bg-[#04030a] border border-white/15 focus:border-[#cf30aa] focus:ring-2 focus:ring-[#cf30aa]/30 text-white placeholder-slate-400 text-xs sm:text-sm outline-none transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={chatLoading || !inputMessage.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl neu-3d-btn-primary text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-md"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        </GlowCard>

      </div>
    </section>
  );
};
