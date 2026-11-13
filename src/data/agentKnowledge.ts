export interface KnowledgeItem {
  id: string;
  category: 'pricing' | 'timeline' | 'files' | 'revisions' | 'packaging' | 'copyright' | 'social' | 'process' | 'contact' | 'tools';
  question: string;
  shortLabel: string;
  iconName: string;
  keywords: string[];
  summary: string;
  detailedAnswer: string;
  highlights: string[];
  suggestedAction?: {
    label: string;
    actionType: 'whatsapp' | 'email' | 'scroll' | 'link';
    target: string;
  };
}

export const AGENT_KNOWLEDGE_BASE: KnowledgeItem[] = [
  {
    id: 'pricing-packages',
    category: 'pricing',
    shortLabel: 'Pricing & Packages',
    iconName: 'BadgeDollarSign',
    question: 'What are your logo & brand design pricing packages?',
    keywords: [
      'price', 'pricing', 'cost', 'how much', 'package', 'packages', 'rate', 'rates', 
      'quote', 'starter', 'standard', 'premium', 'tier', 'budget', 'fee', 'charge', 'dollar', 'usd'
    ],
    summary: 'We offer 3 transparent tiers: Starter ($45), Standard Pro ($120 - Most Popular), and Premium Suite ($280).',
    detailedAnswer: 
`Here is our transparent, fixed-rate pricing structure:

• **Starter Package — $45 USD**
  - Best for solo founders and quick launches
  - 2 unique logo design concepts
  - High-res PNG & JPG (300 DPI) with transparent backgrounds
  - 3 iterative revisions | 2 business days delivery
  - Commercial usage rights included

• **Standard Pro Package — $120 USD (★ Most Popular)**
  - Comprehensive identity for growing brands and businesses
  - 4 bespoke design concepts
  - Full master vector source files: Adobe Illustrator (.AI), Scalable Vector (.SVG), EPS, Layered Photoshop (.PSD), and Print-ready CMYK PDF
  - 3D photorealistic mockups + Social Media Starter Kit (5 assets)
  - **Unlimited revisions** | 3 business days delivery
  - 100% exclusive commercial license

• **Premium Suite — $280 USD**
  - Full agency-grade corporate brand overhaul
  - 6 initial concepts + 24-page Brand Style Guidelines book
  - All master source files + Full stationery suite (business cards, letterhead, envelopes)
  - 15 social media post/cover templates + Packaging & Dielines setup
  - **Unlimited revisions + VIP Priority Fast-Track** | 5 business days delivery

Need a custom package or specific scope? Message Abdullah directly on WhatsApp for an immediate tailored quote!`,
    highlights: [
      'Starter: $45 (2 concepts, 2-day delivery)',
      'Standard Pro: $120 (4 concepts, vector files, unlimited revisions)',
      'Premium Suite: $280 (6 concepts, 24-page style guide, dielines, VIP)'
    ],
    suggestedAction: {
      label: 'View Pricing Tiers',
      actionType: 'scroll',
      target: 'pricing'
    }
  },
  {
    id: 'timeline-rush-delivery',
    category: 'timeline',
    shortLabel: '24h Rush Delivery',
    iconName: 'Zap',
    question: 'Can you deliver within 24 hours? What is your turnaround time?',
    keywords: [
      '24', '24h', '24 hours', 'rush', 'urgent', 'emergency', 'fast', 'express', 
      'time', 'turnaround', 'how long', 'days', 'deadline', 'delivery', 'quick', 'asap'
    ],
    summary: 'Yes! Urgent 24-hour express rush delivery is available on request. Standard turnaround is 2–4 business days.',
    detailedAnswer:
`**Yes, 24-Hour Express Rush Delivery is available!**

• **Urgent 24h Express Delivery**:
  If you have an impending investor pitch, product launch, or printing deadline, select the 24-hour fast-track option. We prioritize your brief immediately and deliver initial concepts within 12–24 hours.

• **Standard Turnaround Times**:
  - Starter Package: 2 business days
  - Standard Pro Package: 3 business days
  - Premium Brand Suite: 4–5 business days
  - Packaging & Dieline Projects: 3–4 business days

• **Fast Concept Turnaround**:
  We send initial design previews quickly so you can review early directions before final refinement. Revisions are usually completed within 12 to 24 hours.`,
    highlights: [
      '⚡ 24-hour express rush delivery available for urgent deadlines',
      'Standard turnaround: 2 to 4 business days',
      'Iterative revisions delivered within 12–24 hours'
    ],
    suggestedAction: {
      label: 'Request 24h Rush via WhatsApp',
      actionType: 'whatsapp',
      target: 'Hi Abdullah, I need an urgent 24-hour rush design project. Can we start immediately?'
    }
  },
  {
    id: 'source-files-deliverables',
    category: 'files',
    shortLabel: 'Source Files (.AI / .SVG)',
    iconName: 'FolderArchive',
    question: 'What source files and deliverables will I receive?',
    keywords: [
      'file', 'files', 'source', 'format', 'formats', 'ai', 'eps', 'svg', 'psd', 
      'pdf', 'png', 'vector', 'transparent', 'resolution', 'deliverables', 'what will i get'
    ],
    summary: 'You receive all industry-standard master vector and raster files: .AI, .SVG, .EPS, .PSD, 300 DPI CMYK PDF, and high-res transparent PNGs.',
    detailedAnswer:
`You receive a complete, production-ready master assets package:

1. **Adobe Illustrator (.AI)**: Fully editable master vector file with organized layers and outlined typography.
2. **Scalable Vector Graphics (.SVG)**: High-performance, lightweight vectors for websites, modern web apps, and digital UI.
3. **Encapsulated PostScript (.EPS)**: Industry standard format required by commercial billboards, screen-printers, and sign makers.
4. **Adobe Photoshop (.PSD)**: Multi-layered raster document with smart objects.
5. **Print-Ready PDF (.PDF)**: 300 DPI CMYK high-resolution file configured with crop marks and bleed zones.
6. **Transparent PNG (.PNG)**: High-resolution (300 DPI, 4000px+) assets with transparent background for immediate use on dark and light layouts.
7. **Social Media & Web JPG (.JPG)**: Optimized for fast loading across avatars, social posts, and digital presentations.`,
    highlights: [
      'Editable vector sources: .AI, .SVG, .EPS',
      'Layered .PSD with smart objects',
      'Print-ready 300 DPI CMYK PDF with bleeds'
    ],
    suggestedAction: {
      label: 'Explore Portfolio Quality',
      actionType: 'scroll',
      target: 'portfolio'
    }
  },
  {
    id: 'revisions-policy',
    category: 'revisions',
    shortLabel: 'Revision Policy',
    iconName: 'RefreshCw',
    question: 'How do revisions work and how many are included?',
    keywords: [
      'revision', 'revisions', 'changes', 'edit', 'edits', 'modify', 'adjust', 
      'unlimited', 'how many revisions', 'policy', 'feedback', 'satisfaction', 'guarantee'
    ],
    summary: 'Standard Pro & Premium packages include Unlimited Revisions. We refine until you are 100% happy.',
    detailedAnswer:
`Our revision process is smooth, collaborative, and risk-free:

• **Unlimited Revisions on Standard & Premium**:
  Both the Standard Pro and Premium Suite include unlimited revisions. We will continuously refine the colors, typography, layout, sizing, and balance until your vision is perfectly achieved.

• **Starter Package**:
  Includes 3 iterative revision rounds covering text, color adjustments, and minor structural refinements.

• **Fast Revision Turnaround**:
  Most revision requests are completed and delivered back to you within 12 to 24 hours.

• **What can be revised?**:
  - Color palettes and gradient shifts
  - Font pairings, kerning, and typographic layout
  - Icon shapes, geometric balance, and composition
  - Sizing, alignment, and dieline adjustments`,
    highlights: [
      'Unlimited revisions on Standard Pro and Premium Suite',
      '12 to 24 hour turnaround per revision cycle',
      '100% satisfaction commitment'
    ],
    suggestedAction: {
      label: 'Book a Project Risk-Free',
      actionType: 'scroll',
      target: 'contact'
    }
  },
  {
    id: 'commercial-copyright',
    category: 'copyright',
    shortLabel: 'Commercial Copyright',
    iconName: 'ShieldCheck',
    question: 'Do I get full commercial copyright and trademark ownership?',
    keywords: [
      'copyright', 'license', 'licensing', 'commercial', 'rights', 'trademark', 
      'ownership', 'legal', 'own', 'patent', 'monopoly', 'exclusive'
    ],
    summary: 'Yes, 100%! Upon final delivery, all exclusive commercial rights and intellectual property transfer entirely to you.',
    detailedAnswer:
`**Yes, 100% exclusive commercial rights and copyright are transferred to you!**

• **Exclusive Ownership**:
  Upon project sign-off and final delivery, all intellectual property rights belong exclusively to you or your company. There are zero royalties, licensing renewals, or hidden usage fees.

• **Trademark Ready**:
  All logo marks and vector designs are built from scratch without pre-made templates or stock clips, ensuring they meet the standards required for trademark and copyright registration.

• **Unrestricted Global Usage**:
  You are free to use your designs across:
  - Commercial merchandise, apparel, and packaging
  - Billboards, print media, magazine ads, and TV
  - Websites, mobile applications, and software
  - Global trademark filings`,
    highlights: [
      '100% exclusive intellectual property ownership',
      'Original vector creations, ready for trademark registration',
      'Zero royalties, zero renewal fees, global usage'
    ],
    suggestedAction: {
      label: 'Message Abdullah on WhatsApp',
      actionType: 'whatsapp',
      target: 'Hi Abdullah, I want to discuss a new brand identity project with full commercial ownership.'
    }
  },
  {
    id: 'packaging-dielines',
    category: 'packaging',
    shortLabel: 'Packaging & Dielines',
    iconName: 'PackageCheck',
    question: 'Do you design product packaging, labels, and box dielines?',
    keywords: [
      'packaging', 'package', 'box', 'dieline', 'dielines', 'label', 'labels', 
      'bottle', 'pouch', 'carton', 'tube', 'can', 'sticker', 'print ready', 'spot uv', 'emboss', 'foil'
    ],
    summary: 'Yes! We create industrial-grade, 300 DPI CMYK print-ready packaging with precision cut & fold dielines.',
    detailedAnswer:
`**Yes! Product packaging and technical dielines are one of our core specialties.**

• **What We Design**:
  - Rigid luxury presentation boxes and folding cartons
  - Cosmetic dropper bottles, cosmetic jars, and squeeze tubes
  - Food & beverage pouches (stand-up zipper pouches, craft coffee bags)
  - Can labels, wine/liquor labels, and supplements packaging
  - Corrugated shipping mailers and retail shopping bags

• **Technical Printing Specifications**:
  - Exact custom dielines with designated cut lines, fold/crease scores, and bleed safety margins (3mm / 0.125 in)
  - Spot UV, gold/silver foil stamping, and embossed plate separations
  - Barcode (UPC/EAN) placement and regulatory nutrition/ingredient typography
  - Output in 300 DPI CMYK vector .AI, .EPS, and press-quality .PDF

• **3D Photorealistic Previews**:
  We deliver 3D photorealistic mockups so you can see exactly how the packaging looks on shelf before sending to print!`,
    highlights: [
      '300 DPI CMYK bleed dielines accepted by any factory or print shop',
      'Foil, spot-UV, and embossing plate separation layers',
      'Photorealistic 3D unboxing and shelf renders included'
    ],
    suggestedAction: {
      label: 'Consult on Packaging Project',
      actionType: 'whatsapp',
      target: 'Hi Abdullah, I need custom packaging and dieline design for my product. Here are my dimensions and requirements:'
    }
  },
  {
    id: 'social-media-ads',
    category: 'social',
    shortLabel: 'Social Media & Ads',
    iconName: 'LayoutGrid',
    question: 'Do you design high-converting social media ads and banners?',
    keywords: [
      'social', 'media', 'ad', 'ads', 'banner', 'banners', 'youtube', 'thumbnail', 
      'thumbnails', 'instagram', 'facebook', 'linkedin', 'cover', 'covers', 'carousel', 'ctr'
    ],
    summary: 'Yes! High-CTR YouTube thumbnails, LinkedIn banners, Facebook covers, and multi-slide Instagram carousels.',
    detailedAnswer:
`**Yes! We craft high-converting visual assets engineered for maximum engagement and click-through rates (CTR).**

• **YouTube Graphics**:
  - High-CTR thumbnails with punchy 3D typography and vibrant color grading
  - Matching YouTube channel headers and profile branding

• **Social Network Banners**:
  - LinkedIn company and personal profile hero banners
  - Facebook page covers and event banners
  - Twitter/X headers and Discord community banners

• **Social Ad Creatives**:
  - Meta (Facebook & Instagram) feed & story ads in 1:1, 4:5, and 9:16 aspect ratios
  - Multi-slide Instagram educational carousels with smooth continuity
  - High-contrast visual hierarchy that stops user scrolling immediately`,
    highlights: [
      'CTR-optimized compositions with crisp typography',
      'Optimized for mobile viewing and exact platform dimensions',
      'Fast 24-hour turnaround available for content creators'
    ],
    suggestedAction: {
      label: 'View Social Covers Section',
      actionType: 'scroll',
      target: 'social-covers'
    }
  },
  {
    id: 'fiverr-vs-direct',
    category: 'process',
    shortLabel: 'Fiverr vs Direct Order',
    iconName: 'ExternalLink',
    question: 'Can I order directly through Fiverr, or should we work direct?',
    keywords: [
      'fiverr', 'order', 'platform', 'escrow', 'payment', 'paypal', 'bank', 
      'direct', 'how to buy', 'safe', 'secure', 'hire'
    ],
    summary: 'Both options are supported! You can order via Fiverr with escrow buyer protection or book directly with flexible terms.',
    detailedAnswer:
`**You have the freedom to choose your preferred workflow:**

• **Option 1: Order via Fiverr (Escrow Buyer Protection)**
  - Full Fiverr escrow buyer protection and milestone tracking
  - Verified reviews and transparent gig delivery
  - You can view our live Fiverr gigs in the Services section and order directly

• **Option 2: Direct Studio Booking (WhatsApp / Email)**
  - 1-on-1 direct communication without third-party platform service fees
  - Direct file exchange and instant feedback via WhatsApp (+880 1342 900364)
  - Flexible milestone billing via PayPal, Wise, or direct bank transfer
  - Priority VIP scheduling and customized project scopes`,
    highlights: [
      'Fiverr option: 100% escrow buyer protection',
      'Direct option: No platform fees, instant direct chat, custom milestones',
      'Both options guarantee master source files and full commercial rights'
    ],
    suggestedAction: {
      label: 'Explore Fiverr Gigs',
      actionType: 'scroll',
      target: 'services'
    }
  },
  {
    id: 'how-to-start',
    category: 'process',
    shortLabel: 'How to Start a Project',
    iconName: 'Rocket',
    question: 'How do we get started on my design project?',
    keywords: [
      'start', 'get started', 'begin', 'process', 'step', 'steps', 'workflow', 
      'how to hire', 'brief', 'contact', 'procedure'
    ],
    summary: 'Starting takes under 2 minutes: share your project requirements via WhatsApp or the Contact Form.',
    detailedAnswer:
`Getting started is straightforward and fast:

1. **Step 1 — Share Your Brief**:
   Tell us your brand name, industry, preferred style (minimalist, luxury, futuristic, bold), and any color preferences. Use the Project Estimator, Contact Form, or message on WhatsApp.

2. **Step 2 — Discovery & Quote Alignment**:
   We confirm the scope, deliverables, turnaround timeline, and quote.

3. **Step 3 — Concept Design & Presentation**:
   We research your niche and craft 2 to 6 unique vector concepts, presented on realistic 3D mockups.

4. **Step 4 — Refinement & Master Delivery**:
   We fine-tune your chosen direction until it is flawless, then deliver all master source files (.AI, .SVG, .EPS, .PSD, 300 DPI PDF) with full commercial copyright!`,
    highlights: [
      'Takes 2 minutes to submit your brief',
      'Personalized concept presentation with 3D mockups',
      'Full master handover and copyright sign-off upon completion'
    ],
    suggestedAction: {
      label: 'Open Project Estimator',
      actionType: 'scroll',
      target: 'estimator'
    }
  },
  {
    id: 'contact-channels',
    category: 'contact',
    shortLabel: 'Direct Contact Info',
    iconName: 'MessageSquare',
    question: 'How can I contact Abdullah Forhad directly right now?',
    keywords: [
      'contact', 'whatsapp', 'phone', 'call', 'number', 'email', 'reach', 
      'talk', 'chat', 'message', 'telegram', 'location', 'bangladesh', 'dhaka'
    ],
    summary: 'WhatsApp: +880 1342 900364 | Email: forhadalpha08@gmail.com | Average response time: under 15 minutes.',
    detailedAnswer:
`You can connect with Abdullah Forhad directly across these channels:

• **WhatsApp (Fastest)**:
  **+880 1342 900364**
  (Online daily — average response time under 15 minutes)

• **Email**:
  **forhadalpha08@gmail.com** (or pchamza2025@gmail.com)
  (Replies within 1–2 hours for project briefs & inquiries)

• **Direct Phone Call**:
  +880 1342 900364

• **Studio Location**:
  Dhaka, Bangladesh (Serving global clients across USA, UK, Germany, Canada, UAE, and Australia)`,
    highlights: [
      'WhatsApp: +880 1342 900364 (instant reply)',
      'Email: forhadalpha08@gmail.com',
      'Average response time: 15 minutes'
    ],
    suggestedAction: {
      label: 'Open WhatsApp Chat',
      actionType: 'whatsapp',
      target: 'Hi Abdullah, I am visiting your portfolio and would like to discuss a project.'
    }
  }
];

/**
 * Intelligent client-side question matcher that scores user queries
 * and retrieves the most specific, comprehensive answer.
 */
export function findMatchingKnowledge(query: string): KnowledgeItem | null {
  if (!query || typeof query !== 'string') return null;
  const clean = query.toLowerCase().trim();

  // 1. Direct exact or substring matches
  for (const item of AGENT_KNOWLEDGE_BASE) {
    if (clean.includes(item.shortLabel.toLowerCase()) || clean.includes(item.question.toLowerCase())) {
      return item;
    }
  }

  // 2. Score by keywords
  let bestItem: KnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of AGENT_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      if (clean.includes(kw.toLowerCase())) {
        score += kw.length > 4 ? 3 : 2;
      }
    }

    // Category boost
    if (clean.includes(item.category)) {
      score += 2;
    }

    if (score > highestScore && score >= 2) {
      highestScore = score;
      bestItem = item;
    }
  }

  return bestItem;
}
