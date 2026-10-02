import React, { useState } from 'react';
import { Sparkles, Send, Globe, MapPin, Bot, User, Loader2, Search } from 'lucide-react';
import { GlowCard } from './GlowCard';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const GeminiIntelligenceHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'search' | 'maps'>('chat');
  
  // Chat state
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hello! I'm Abdullah Forhad's AI Design & Brand Advisor powered by Gemini. How can I help you plan your branding, packaging, or custom design project today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  // Search Grounding state
  const [searchPrompt, setSearchPrompt] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [searchMetadata, setSearchMetadata] = useState<any>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  // Maps Grounding state
  const [mapsPrompt, setMapsPrompt] = useState('');
  const [mapsResult, setMapsResult] = useState<string | null>(null);
  const [mapsLoading, setMapsLoading] = useState(false);

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

  const handleRunSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPrompt.trim() || searchLoading) return;

    setSearchLoading(true);
    setSearchResult(null);
    setSearchMetadata(null);

    try {
      const res = await fetch('/api/search-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: searchPrompt })
      });
      const data = await res.json();
      setSearchResult(data.text);
      setSearchMetadata(data.groundingMetadata);
    } catch (err) {
      console.error(err);
      setSearchResult("Error fetching live search data.");
    } finally {
      setSearchLoading(false);
    }
  };

  const handleRunMaps = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mapsPrompt.trim() || mapsLoading) return;

    setMapsLoading(true);
    setMapsResult(null);

    let userLocation = null;
    if (navigator.geolocation) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 4000 });
        });
        userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      } catch (e) {
        // Geolocation optional
      }
    }

    try {
      const res = await fetch('/api/maps-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: mapsPrompt, userLocation })
      });
      const data = await res.json();
      setMapsResult(data.text);
    } catch (err) {
      console.error(err);
      setMapsResult("Error fetching map and location data.");
    } finally {
      setMapsLoading(false);
    }
  };

  return (
    <section id="ai-intelligence" className="py-20 md:py-28 border-t border-white/5 bg-[#04030a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#cf30aa]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-3 border border-[#cf30aa]/30 shadow-[0_0_15px_rgba(207,48,170,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>GEMINI INTELLIGENCE HUB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            AI Design Advisor &amp; Grounding Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Interact with our multi-turn Gemini brand advisor, query real-time design trends via Google Search, or explore global location data via Google Maps.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'chat'
                ? 'neu-3d-btn-primary text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            <Bot className="w-4 h-4 text-[#dfa2da]" />
            <span>Gemini Brand Advisor</span>
          </button>

          <button
            onClick={() => setActiveTab('search')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'search'
                ? 'neu-3d-btn-primary text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            <Globe className="w-4 h-4 text-[#dfa2da]" />
            <span>Google Search Grounding</span>
          </button>

          <button
            onClick={() => setActiveTab('maps')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'maps'
                ? 'neu-3d-btn-primary text-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#dfa2da]" />
            <span>Google Maps Grounding</span>
          </button>
        </div>

        {/* Tab Content Box */}
        <GlowCard intensity="medium" rounded="rounded-3xl">
          <div className="bg-[#080712] liquid-glass-card rounded-3xl p-6 sm:p-8 min-h-[500px] flex flex-col justify-between">
            
            {/* TAB 1: GEMINI CHATBOT */}
            {activeTab === 'chat' && (
              <div className="flex flex-col h-full flex-1">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#cf30aa]/20 border border-[#cf30aa]/50 flex items-center justify-center text-[#dfa2da]">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">Abdullah Forhad AI Brand Assistant</h3>
                      <p className="text-[11px] text-slate-400 font-mono">Multi-turn chat with custom brand design system prompt</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
                    Active &amp; Ready
                  </span>
                </div>

                {/* Messages Thread */}
                <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4 pr-2 mb-4 custom-scrollbar">
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
            )}

            {/* TAB 2: GOOGLE SEARCH GROUNDING */}
            {activeTab === 'search' && (
              <div className="flex flex-col h-full flex-1">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#cf30aa]/20 border border-[#cf30aa]/50 flex items-center justify-center text-[#dfa2da]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">Google Search Grounding</h3>
                      <p className="text-[11px] text-slate-400 font-mono">Real-time web search for up-to-date design trends &amp; benchmarks</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-mono">
                    Live Web Data
                  </span>
                </div>

                <form onSubmit={handleRunSearch} className="relative mb-6">
                  <input
                    type="text"
                    value={searchPrompt}
                    onChange={(e) => setSearchPrompt(e.target.value)}
                    placeholder="e.g., What are the top brand identity color trends for 2026?"
                    className="w-full pl-4 pr-28 py-3.5 rounded-2xl bg-[#04030a] border border-white/15 focus:border-[#cf30aa] focus:ring-2 focus:ring-[#cf30aa]/30 text-white placeholder-slate-400 text-xs sm:text-sm outline-none transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    disabled={searchLoading || !searchPrompt.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl neu-3d-btn-primary text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    {searchLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                    <span>Search Web</span>
                  </button>
                </form>

                {searchResult && (
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-4">
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {searchResult}
                    </div>

                    {searchMetadata?.webSearchQueries && (
                      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
                        <span className="text-[#dfa2da]">Queries:</span>
                        {searchMetadata.webSearchQueries.map((q: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-black/40 border border-white/10">{q}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: GOOGLE MAPS GROUNDING */}
            {activeTab === 'maps' && (
              <div className="flex flex-col h-full flex-1">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#cf30aa]/20 border border-[#cf30aa]/50 flex items-center justify-center text-[#dfa2da]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">Google Maps Grounding</h3>
                      <p className="text-[11px] text-slate-400 font-mono">Location-aware queries for global client hubs, design agencies &amp; studios</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[10px] font-mono">
                    Maps Grounding
                  </span>
                </div>

                <form onSubmit={handleRunMaps} className="relative mb-6">
                  <input
                    type="text"
                    value={mapsPrompt}
                    onChange={(e) => setMapsPrompt(e.target.value)}
                    placeholder="e.g., Where are top design innovation hubs in New York or London?"
                    className="w-full pl-4 pr-32 py-3.5 rounded-2xl bg-[#04030a] border border-white/15 focus:border-[#cf30aa] focus:ring-2 focus:ring-[#cf30aa]/30 text-white placeholder-slate-400 text-xs sm:text-sm outline-none transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    disabled={mapsLoading || !mapsPrompt.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl neu-3d-btn-primary text-white text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    {mapsLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <MapPin className="w-3.5 h-3.5" />}
                    <span>Query Maps</span>
                  </button>
                </form>

                {mapsResult && (
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-4">
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                      {mapsResult}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        </GlowCard>

      </div>
    </section>
  );
};
