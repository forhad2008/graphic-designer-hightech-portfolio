import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, Copy } from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface ContactBookingProps {
  initialService?: string;
  initialBudget?: string;
  initialTimeline?: string;
  initialDeliverables?: string[];
  initialNotes?: string;
}

export const ContactBooking: React.FC<ContactBookingProps> = ({
  initialService = '',
  initialBudget = '$120 USD (Standard Pro)',
  initialTimeline = '3 Business Days',
  initialDeliverables = [],
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Logo & Brand Identity',
    budget: initialBudget || '$120 USD (Standard Pro)',
    timeline: initialTimeline || '3 Business Days',
    projectDescription: initialNotes || '',
    referenceLink: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialService,
        budget: initialBudget || prev.budget,
        timeline: initialTimeline || prev.timeline,
        projectDescription: initialNotes || prev.projectDescription,
      }));
    }
  }, [initialService, initialBudget, initialTimeline, initialNotes]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getFormattedMessage = () => {
    return encodeURIComponent(
      `Hello Abdullah Forhad,\n\nI want to book a graphic design project!\n\n` +
      `👤 Name: ${formData.name || 'Not specified'}\n` +
      `📧 Email: ${formData.email || 'Not specified'}\n` +
      `🎨 Service: ${formData.serviceType}\n` +
      `💰 Budget: ${formData.budget}\n` +
      `⏱ Timeline: ${formData.timeline}\n` +
      `🔗 Moodboard: ${formData.referenceLink || 'None'}\n\n` +
      `📝 Brief:\n${formData.projectDescription || 'Details attached.'}`
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/5 relative bg-[#05080E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[#dfa2da] text-xs font-mono mb-2.5 border border-[#cf30aa]/30 shadow-[0_0_12px_rgba(207,48,170,0.25)]">
            <Mail className="w-3.5 h-3.5 text-[#cf30aa]" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Let&apos;s Build Your Brand
          </h2>
          <p className="text-slate-400 text-sm mt-1.5">
            Submit a brief or message directly on WhatsApp for an immediate consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-3">
                <ProfileAvatar sizeClassName="w-12 h-12 rounded-2xl" textSizeClassName="text-lg" />
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Abdullah Forhad</h3>
                  <p className="text-xs text-[#dfa2da] font-mono font-bold drop-shadow">Brand &amp; Graphic Designer</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1 text-xs">
                {/* Phone */}
                <div className="p-3.5 rounded-2xl neu-3d-raised-sm flex items-center justify-between border border-[#402fb5]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl neu-3d-inset flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#dfa2da]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">WhatsApp &amp; Phone</span>
                      <a href="https://wa.me/8801342900364" target="_blank" rel="noopener noreferrer" className="font-mono text-white font-bold hover:text-[#dfa2da]">
                        +880 1342 900364
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+8801342900364', 'phone')}
                    className="p-2 text-slate-400 hover:text-white neu-3d-inset rounded-xl cursor-pointer"
                    title="Copy"
                  >
                    {copiedContact === 'phone' ? <CheckCircle2 className="w-3.5 h-3.5 text-[#dfa2da]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-2xl neu-3d-raised-sm flex items-center justify-between border border-[#402fb5]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl neu-3d-inset flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#a099d8]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">Email</span>
                      <a href="mailto:forhadalpha08@gmail.com" className="font-mono text-white font-bold hover:text-[#a099d8]">
                        forhadalpha08@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('forhadalpha08@gmail.com', 'email')}
                    className="p-2 text-slate-400 hover:text-white neu-3d-inset rounded-xl cursor-pointer"
                    title="Copy"
                  >
                    {copiedContact === 'email' ? <CheckCircle2 className="w-3.5 h-3.5 text-[#dfa2da]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <a
                  href={`https://wa.me/8801342900364?text=${getFormattedMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl neu-3d-btn text-[#dfa2da] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm border border-[#cf30aa]/40"
                >
                  <MessageCircle className="w-4 h-4 text-[#dfa2da]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                100% Commercial Copyright · Fast 1h Response
              </div>
            </div>

          </div>

          {/* Right Column: Brief Form (7 cols) */}
          <div className="lg:col-span-7 neu-raised rounded-3xl p-6 sm:p-7 border border-[#402fb5]/30">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-2xl neu-inset text-[#dfa2da] border border-[#cf30aa]/30 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(207,48,170,0.3)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Brief Submitted</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Abdullah will reply to <span className="text-[#dfa2da] font-mono">{formData.email}</span> in under 1 hour.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/8801342900364?text=${getFormattedMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-extrabold text-white neu-3d-btn-primary rounded-2xl flex items-center gap-2 shadow-[0_0_15px_rgba(207,48,170,0.5)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-3 text-xs font-semibold text-slate-300 neu-raised-interactive rounded-2xl cursor-pointer"
                  >
                    New Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="font-mono text-slate-300 block mb-1.5 font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex / Brand Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl neu-inset neu-inset-focus text-white text-xs focus:outline-none focus:border-[#cf30aa]"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-slate-300 block mb-1.5 font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl neu-inset neu-inset-focus text-white text-xs focus:outline-none focus:border-[#cf30aa]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="font-mono text-slate-300 block mb-1.5 font-bold">Service Discipline</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl neu-inset neu-inset-focus text-white text-xs focus:outline-none bg-[#04070d]"
                    >
                      <option value="Logo & Brand Identity">Logo & Brand Identity</option>
                      <option value="Social Media Ads Kit">Social Media Ads Kit</option>
                      <option value="Product Packaging & Labels">Packaging & Dielines</option>
                      <option value="Viral YouTube Thumbnails">YouTube Graphics</option>
                      <option value="Corporate Stationery & Print">Corporate Print</option>
                      <option value="Custom Graphic Design">Custom Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-slate-300 block mb-1.5 font-bold">Budget Tier</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-2xl neu-inset neu-inset-focus text-white text-xs focus:outline-none bg-[#04070d]"
                    >
                      <option value="$45 USD (Starter)">$45 USD (Starter)</option>
                      <option value="$120 USD (Standard Pro)">$120 USD (Standard Pro)</option>
                      <option value="$280 USD (Premium Suite)">$280 USD (Premium Suite)</option>
                      <option value="$500+ USD (Custom)">$500+ USD (Custom)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-slate-300 block mb-1.5 font-bold">Project Details &amp; Notes *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your brand vision, colors, deliverables, and text requirements..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-2xl neu-inset neu-inset-focus text-white text-xs focus:outline-none resize-none focus:border-[#cf30aa]"
                  />
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-4 rounded-2xl neu-3d-btn-primary text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(207,48,170,0.5)]"
                  >
                    <span>Send Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/8801342900364?text=${getFormattedMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-2xl neu-raised-interactive text-[#dfa2da] text-xs flex items-center gap-2 font-semibold border border-[#cf30aa]/30"
                  >
                    <MessageCircle className="w-4 h-4 text-[#dfa2da]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
