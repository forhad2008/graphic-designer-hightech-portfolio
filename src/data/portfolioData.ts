import { PortfolioItem, FiverrGig, PricingPackage, ClientReview } from '../types';
import { IMAGE_ASSETS } from './imageAssets';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'zeora-apparel',
    title: 'ZEORA: Sophisticated Apparel Identity',
    client: 'Zeora Fashion House',
    clientCountry: 'USA',
    category: 'branding',
    categoryLabel: 'Apparel Identity',
    year: '2025',
    views: '5.8k',
    likes: '740',
    image: '/brand1.png',
    gallery: ['/brand1.png'],
    description: 'A comprehensive visual identity presentation for the fashion brand "ZEORA", showcasing the logo and typography across various premium retail and apparel branding touchpoints.',
    challenge: 'Needed an elegant, timeless identity translating minimalist luxury aesthetics for apparel tags and merchandise.',
    solution: 'Designed a bespoke serif-based logo system with geometric flourishes in the "O" character, paired with clean monochrome tag and retail assets.',
    deliverables: ['Logo mark', 'Hang tags', 'Woven labels', 'Shopping bag packaging', 'Cap branding', 'Zipper hardware'],
    formats: ['.AI', '.SVG', '.PDF', '.PSD'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Off-White/Cream', hex: '#D2C5B6' },
      { name: 'Silver/Metallic', hex: '#BDBDBD' }
    ],
    fonts: ['Elegant Serif', 'Plus Jakarta Sans'],
    mockupType: 'brand',
    featured: true,
    testimonial: {
      quote: "Sophisticated aesthetics. Complete design system delivered on time.",
      author: 'Victoria Ward',
      company: 'Creative Director, Zeora US',
      rating: 5
    }
  },
  {
    id: 'nexora-luxury',
    title: 'Nexora: Beyond Ordinary Luxury Visual Identity',
    client: 'Nexora Holdings',
    clientCountry: 'Germany',
    category: 'branding',
    categoryLabel: 'Luxury Identity',
    year: '2026',
    views: '6.4k',
    likes: '890',
    image: '/brand2.png',
    gallery: ['/brand2.png'],
    description: 'A cinematic, dark-themed brand identity presentation for luxury label Nexora, highlighting its sharp metallic "N" monogram across bespoke merchandise, packaging, and digital 3D environments.',
    challenge: 'Required a metallic geometric lettermark carrying both precision engineering and absolute high-fashion prestige.',
    solution: 'Crafted a faceted metallic "N" emblem using architectural grid ratios, with dark obsidian packaging boxes and topographic accent details.',
    deliverables: ['Monogram & Logotype Design', '3D Landscape Key Visual Render', 'Metallic Foil Embossed Paper Card', 'Embroidered Technical Outerwear Detail', 'Branded Baseball Cap', 'Rigid Luxury Box Packaging with Custom Ribbon', 'Matte Black Shopping Bag with Topographic Accents', 'Garment Hangtag'],
    formats: ['.AI', '.SVG', '.PDF', '.PSD', '3D OBJ'],
    colors: [
      { name: 'Obsidian Black', hex: '#0D0E11' },
      { name: 'Brushed Chrome', hex: '#C4C8CE' },
      { name: 'Dark Charcoal', hex: '#1E1F24' },
      { name: 'Ethereal Ice Glow', hex: '#B8D5E5' }
    ],
    fonts: ['Geometric Sans', 'Plus Jakarta Sans'],
    mockupType: 'brand',
    featured: true,
    testimonial: {
      quote: "Outstanding 3D renderings and material mockups. Nexora looks incredibly high-end.",
      author: 'Stephan Reinhardt',
      company: 'Brand Partner, Nexora Group',
      rating: 5
    }
  },
  {
    id: 'volt-lifestyle',
    title: 'VOLT: Energy & Lifestyle Brand Identity System',
    client: 'Volt Energy Ltd.',
    clientCountry: 'Australia',
    category: 'branding',
    categoryLabel: 'Energy Identity',
    year: '2026',
    views: '7.1k',
    likes: '920',
    image: '/brand3.png',
    gallery: ['/brand3.png'],
    description: 'A high-octane, fiery visual identity crafted for an energetic fitness and lifestyle brand, demonstrated across architectural retail spaces, premium merchandise, packaging, and digital 3D key visuals.',
    challenge: 'Needed a dynamic, chiseled logo conveying athletic intensity while transitioning easily across physical storefronts and garments.',
    solution: 'Engineered a sharp typographic system integrated with a negative-space flame icon, implemented onto sports water bottles, rigid presentation boxes, and premium hoodies.',
    deliverables: ['3D Hero Logo Key Visual', 'Primary Vector Logo & Flame Icon', 'Woven Fabric Apparel Tag', 'Matte Black Sports Water Bottle', 'Rigid Unboxing Presentation Box with Tissue Wrap', 'Retail Storefront & Interior Signage', 'Branded Streetwear Pullover Hoodie', 'Apparel Hangtags / Product Labels'],
    formats: ['.AI Dielines', '.SVG', '3D OBJ', '.PDF'],
    colors: [
      { name: 'Fiery Crimson Red', hex: '#E50914' },
      { name: 'Pitch Black', hex: '#0C0C0E' },
      { name: 'Molten Lava Orange', hex: '#FF4500' },
      { name: 'Metallic Silver', hex: '#2A2A2E' }
    ],
    fonts: ['Cabinet Grotesk', 'JetBrains Mono'],
    mockupType: 'brand',
    featured: true,
    testimonial: {
      quote: "Chiseled graphics and storefront mockups were absolute print-ready gold.",
      author: 'Liam Henderson',
      company: 'Marketing VP, Volt Energy',
      rating: 5
    }
  },
  {
    id: 'qantra-tech',
    title: 'QANTRA: A Vision of Intelligent Future Tech',
    client: 'Qantra Technologies',
    clientCountry: 'UK',
    category: 'branding',
    categoryLabel: 'Intelligent Tech',
    year: '2026',
    views: '4.9k',
    likes: '610',
    image: '/brand4.png',
    gallery: ['/brand4.png'],
    description: 'A comprehensive brand identity presentation for a tech company named Qantra, featuring a 3D isometric logo mark and a sleek, modern visual language.',
    challenge: 'Creating a smart, modern tech visual signature communicating intelligence, building on the slogan "Ideas to Intelligence".',
    solution: 'Developed a 3D isometric logo with a vibrant violet/purple neon color palette, office signage, tech hoodies, and a sleek color spectrum guide.',
    deliverables: ['Brand Identity Presentation', 'App Icon', 'Logo System', 'Business Cards', 'Office Exterior Signage', 'Merchandise (Hoodie, Shopping Bag)', 'Color Palette Specification', 'Typography Guide'],
    formats: ['.AI', '.SVG', '.PSD', 'Figma'],
    colors: [
      { name: 'Primary Purple', hex: '#8B5CF6' },
      { name: 'Dark Indigo', hex: '#6D28D9' },
      { name: 'Deep Tech Void', hex: '#08080F' },
      { name: 'Glacier Silver', hex: '#E5E7EB' }
    ],
    fonts: ['Modern Geometric Sans', 'Plus Jakarta Sans'],
    mockupType: 'saas',
    featured: false,
    testimonial: {
      quote: "Our new intelligent brand style pops beautifully across all digital interfaces.",
      author: 'Marcus Brody',
      company: 'CTO, Qantra Technologies',
      rating: 5
    }
  },
  {
    id: 'psychotic-luxury',
    title: 'Abdullah Psychotic: A Dark Luxury Brand Identity',
    client: 'Psychotic Label',
    clientCountry: 'Bangladesh',
    category: 'social',
    categoryLabel: 'Luxe Streetwear',
    year: '2026',
    views: '9.2k',
    likes: '1.4k',
    image: '/brand5.png',
    gallery: ['/brand5.png'],
    description: 'A comprehensive visual identity presentation for a lifestyle brand featuring a sharp, metallic emblem and a premium, high-contrast aesthetic.',
    challenge: 'Creating a bold, high-contrast visual asset kit combining dark street culture with high-fashion luxury.',
    solution: 'Designed a metallic AP emblem applied across storefront signage, leather jacket detailing, caps, and rigid unboxing boxes.',
    deliverables: ['Logo variations', 'App icon', 'Storefront signage', 'Business cards', 'Apparel collection', 'Premium packaging', 'Detail texture close-up'],
    formats: ['.AI', '.SVG', '.PSD', '.PNG'],
    colors: [
      { name: 'Matte Black', hex: '#000000' },
      { name: 'Dark Charcoal', hex: '#1A1A1A' },
      { name: 'Metallic Silver', hex: '#C0C0C0' },
      { name: 'Vibrant Red', hex: '#FF0000' }
    ],
    fonts: ['Sophisticated Serif', 'Cabinet Grotesk'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: "The raw dark-luxury vibe is exactly what our brand stood for. Brilliant execution.",
      author: 'Farhad AP',
      company: 'Owner, Psychotic Label',
      rating: 5
    }
  },
  {
    id: 'aura-botanicals',
    title: 'Aura Botanicals: Brand Identity & Packaging Showcase',
    client: 'Aura Skincare Ltd.',
    clientCountry: 'UK',
    category: 'packaging',
    categoryLabel: 'Botanical Cosmetics',
    year: '2026',
    views: '5.2k',
    likes: '680',
    image: '/brand6.png',
    gallery: ['/brand6.png'],
    description: 'A refined botanical wellness brand identity centered around a leaf-infused lettermark "A", showcased across luxury cosmetics packaging, app icons, and lush natural marketing visuals.',
    challenge: 'Needed a refined, organic, yet premium skincare identity conveying high-end wellness.',
    solution: 'Engineered leaf-infused geometric "A" monogram accompanied by elegant cosmetics boxes and dropper bottle mockups.',
    deliverables: ['Primary Logo & Wordmark', 'Monogram Icon Design', 'Cosmetics Dropper Bottle & Outer Box Packaging', 'Mobile Application Icon Mockup', 'Editorial / Social Media Brand Poster'],
    formats: ['.AI', '.SVG', '.PSD', '300 DPI CMYK'],
    colors: [
      { name: 'Deep Forest Green', hex: '#112C20' },
      { name: 'Foliage Green', hex: '#305C33' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Soft Cream', hex: '#F3F4F1' }
    ],
    fonts: ['Modern Sans-serif', 'Plus Jakarta Sans'],
    mockupType: 'packaging',
    featured: true,
    testimonial: {
      quote: "A truly beautiful organic luxury design system. Extremely elegant.",
      author: 'Eleanor Vance',
      company: 'Founder, Aura Botanicals',
      rating: 5
    }
  },
  {
    id: 'vertex-system',
    title: 'Vertex: Elevating Creative Technology Identity',
    client: 'Vertex Systems',
    clientCountry: 'Canada',
    category: 'branding',
    categoryLabel: 'Ascendant Tech',
    year: '2026',
    views: '8.2k',
    likes: '1.1k',
    image: '/brand7.png',
    gallery: ['/brand7.png', '/brand7.1.png', '/brand7.2.png'],
    description: 'A cutting-edge visual identity showcasing a multifaceted geometric "V" icon across digital interfaces, premium tactile packaging, and high-altitude brand storytelling.',
    challenge: 'Unifying multi-surface assets like app interfaces, rigid tech boxes, storefront neon signages, and tote bags under a single bold theme.',
    solution: "Designed Vertex: \"Build What's Next\" centered on a geometric faceted \"V\" with deep obsidian gradients and vibrant violet / cyan accents.",
    deliverables: ['App icon', 'Logo mark', 'Logo lockup', 'Branded stationery', 'Apparel (Tote bag)', 'Environmental signage', 'Rigid Tech Box & Edge-Gilded Business Cards'],
    formats: ['.AI', '.SVG', 'Figma', '.PSD'],
    colors: [
      { name: 'Midnight Obsidian', hex: '#070B12' },
      { name: 'Electric Purple', hex: '#8A2BE2' },
      { name: 'Deep Violet', hex: '#4B0082' },
      { name: 'Electric Cyan', hex: '#00A2FF' }
    ],
    fonts: ['Modern Futuristic Sans', 'Space Grotesk'],
    mockupType: 'brand',
    featured: true,
    testimonial: {
      quote: "A visionary geometric brand identity. The dynamic neon assets are simply incredible.",
      author: 'Tariq Al-Mansoor',
      company: 'VP Creative, Vertex Systems',
      rating: 5
    }
  },
  {
    id: 'psychotic-lifestyle',
    title: 'AP Psychotic Lifestyle: Luxe Dark Identity',
    client: 'Psychotic Label',
    clientCountry: 'USA',
    category: 'print',
    categoryLabel: 'Luxe Print & Accessories',
    year: '2026',
    views: '6.7k',
    likes: '980',
    image: '/brand8.png',
    gallery: ['/brand8.png'],
    description: 'A sophisticated brand identity showcase featuring a high-contrast, moody aesthetic applied across luxury lifestyle merchandise and stationery.',
    challenge: 'Creating highly finished tactile touchpoints (foil cards, custom clothing labels, key ring charms) for premium luxury distribution.',
    solution: 'Applied the AP dark-luxury design system with high-contrast matte black, off-white, and deep crimson red accents across custom retail deliverables.',
    deliverables: ['Logo mark', 'Hang tag design', 'Apparel branding (Cap)', 'Shopping bag design', 'Business card system', 'Custom merchandise labels', 'Luxury accessory mockup (Key ring)'],
    formats: ['.AI Vector', '300 DPI CMYK', '.PSD'],
    colors: [
      { name: 'Matte Black', hex: '#1A1A1A' },
      { name: 'Off-White/Silver', hex: '#E0E0E0' },
      { name: 'Deep Crimson Red', hex: '#B80000' }
    ],
    fonts: ['Elegant Modern Serif', 'Cabinet Grotesk'],
    mockupType: 'print',
    featured: true,
    testimonial: {
      quote: "Unbelievable detail on the print-ready templates and clothing tag specifications. Exceptionally premium.",
      author: 'Christian Dior',
      company: 'Merchandise Partner',
      rating: 5
    }
  }
];

export const FIVERR_GIGS: FiverrGig[] = [
  {
    id: 'gig-brand-identity',
    title: 'Minimalist Luxury Logo & Brand Identity',
    rating: 5.0,
    reviewsCount: 124,
    startingPrice: 45,
    ordersInQueue: 4,
    category: 'Brand Identity',
    image: IMAGE_ASSETS.fiverrGigs.brandIdentity,
    badge: 'Top Rated',
    features: [
      '2 to 6 Custom Logo Concepts',
      'Vector Files (.AI, .EPS, .SVG, .PDF)',
      '3D Realistic Mockups & Social Kit',
      'Brand Guidelines & Color System',
      '100% Commercial Copyright'
    ],
    fiverrUrl: 'https://fiverr.com'
  },
  {
    id: 'gig-social-ads',
    title: 'High-Converting Social Media Ads & Posts',
    rating: 5.0,
    reviewsCount: 88,
    startingPrice: 35,
    ordersInQueue: 3,
    category: 'Social Media',
    image: IMAGE_ASSETS.fiverrGigs.socialAds,
    badge: 'High CTR',
    features: [
      'Feed Posts, Stories & Reels Covers',
      'Facebook, Instagram & X Graphics',
      'High-CTR Tested Visual Layouts',
      'Editable PSD / Canva Sources',
      '24-Hour Delivery Option'
    ],
    fiverrUrl: 'https://fiverr.com'
  },
  {
    id: 'gig-packaging',
    title: 'Product Packaging, Label & Box Dielines',
    rating: 4.9,
    reviewsCount: 65,
    startingPrice: 65,
    ordersInQueue: 2,
    category: 'Packaging',
    image: IMAGE_ASSETS.fiverrGigs.packaging,
    badge: 'Print Ready',
    features: [
      '300 DPI CMYK Bleed Dielines',
      'Photorealistic 3D Renders',
      'Barcode & Compliance Layouts',
      'Spot UV / Foil Separation',
      'Unlimited Revisions'
    ],
    fiverrUrl: 'https://fiverr.com'
  },
  {
    id: 'gig-thumbnails',
    title: 'Viral YouTube Thumbnails & Banners',
    rating: 5.0,
    reviewsCount: 92,
    startingPrice: 25,
    ordersInQueue: 5,
    category: 'YouTube Media',
    image: IMAGE_ASSETS.fiverrGigs.thumbnails,
    badge: 'Viral CTR',
    features: [
      'High-CTR Tested Composition',
      '3D Typography & Face Grading',
      'FHD 1920x1080 PNG & PSD',
      'Matching Channel Banner',
      'Express 12-24h Delivery'
    ],
    fiverrUrl: 'https://fiverr.com'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for fast launches and solo founders',
    priceUSD: 45,
    deliveryDays: 2,
    revisions: '3 Revisions',
    initialConcepts: 2,
    idealFor: 'Quick logo refresh or single visual asset',
    features: [
      { included: true, label: '2 Initial Concepts' },
      { included: true, label: 'High-Res PNG & JPG (300 DPI)' },
      { included: true, label: 'Transparent Backgrounds' },
      { included: true, label: '3 Iterative Revisions' },
      { included: true, label: 'Commercial Rights' },
      { included: false, label: 'Vector Source Files (.AI, .EPS)' },
      { included: false, label: 'Brand Guidelines Document' },
      { included: false, label: 'Priority VIP Support' }
    ],
    fileFormats: ['PNG', 'JPG', 'PDF']
  },
  {
    id: 'standard',
    name: 'Standard Pro',
    tagline: 'Most popular for growing brands & startups',
    priceUSD: 120,
    deliveryDays: 3,
    revisions: 'Unlimited',
    initialConcepts: 4,
    popular: true,
    idealFor: 'Complete identity with full vector source files',
    features: [
      { included: true, label: '4 Custom Concepts' },
      { included: true, label: 'Master Vector Files (.AI, .EPS, .SVG)' },
      { included: true, label: 'Print-Ready PDF (300 DPI Bleeds)' },
      { included: true, label: 'Layered PSD Files' },
      { included: true, label: '3D Client Mockups' },
      { included: true, label: 'Social Media Kit (5 Assets)' },
      { included: true, label: 'Unlimited Revisions' },
      { included: true, label: 'Full Commercial License' }
    ],
    fileFormats: ['.AI', '.EPS', '.SVG', '.PDF', '.PSD', 'PNG']
  },
  {
    id: 'premium',
    name: 'Premium Suite',
    tagline: 'Complete comprehensive brand transformation',
    priceUSD: 280,
    deliveryDays: 5,
    revisions: 'Unlimited + VIP',
    initialConcepts: 6,
    idealFor: 'Full corporate identity, guidelines & packaging',
    features: [
      { included: true, label: '6 Comprehensive Concepts' },
      { included: true, label: 'All Master Source Files' },
      { included: true, label: '24-Page Brand Style Guide' },
      { included: true, label: 'Stationery Suite (Cards, Letterhead)' },
      { included: true, label: 'Social Media Pack (15 Templates)' },
      { included: true, label: 'Packaging / Dieline Setup' },
      { included: true, label: 'Font & Color Licensing Guide' },
      { included: true, label: 'VIP Priority Fast-Track' }
    ],
    fileFormats: ['.AI', '.EPS', '.SVG', '.PDF', '.PSD', '.INDD']
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    clientName: 'Sarah Jenkins',
    country: 'United States',
    countryCode: 'US',
    projectType: 'Brand Identity',
    rating: 5,
    date: '3 days ago',
    orderValue: '$180',
    avatarUrl: IMAGE_ASSETS.clientAvatars.sarahJenkins,
    reviewText: 'Abdullah delivered 4 concepts, all looking like a top agency. Clean, organized vectors ready for production.',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    clientName: 'Oliver Smith',
    country: 'United Kingdom',
    countryCode: 'GB',
    projectType: 'Packaging & Dieline',
    rating: 5,
    date: '1 week ago',
    orderValue: '$260',
    avatarUrl: IMAGE_ASSETS.clientAvatars.oliverSmith,
    reviewText: 'Flawless printer bleeds, barcode positioning, and foil plates. Our local print shop approved without a single change.',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    clientName: 'Lukas Meyer',
    country: 'Germany',
    countryCode: 'DE',
    projectType: 'SaaS App Icon & UI',
    rating: 5,
    date: '2 weeks ago',
    orderValue: '$140',
    avatarUrl: IMAGE_ASSETS.clientAvatars.lukasMeyer,
    reviewText: 'Fast turnaround and crisp geometric design. Abdullah revised every variation promptly until we got the exact look.',
    verifiedBuyer: true
  },
  {
    id: 'rev-4',
    clientName: 'Alexandre Dupont',
    country: 'Canada',
    countryCode: 'CA',
    projectType: 'YouTube Graphics',
    rating: 5,
    date: '3 weeks ago',
    orderValue: '$95',
    avatarUrl: IMAGE_ASSETS.clientAvatars.alexandreDupont,
    reviewText: 'Our YouTube click-through rate jumped noticeably. The text pops with clarity even on small mobile screens.',
    verifiedBuyer: true
  },
  {
    id: 'rev-5',
    clientName: 'Fatima Al-Sayed',
    country: 'UAE',
    countryCode: 'AE',
    projectType: 'Corporate Stationery',
    rating: 5,
    date: '1 month ago',
    orderValue: '$320',
    avatarUrl: IMAGE_ASSETS.clientAvatars.fatimaAlSayed,
    reviewText: 'True professionalism. Gold foil cards, presentation decks, and a 16-page booklet delivered on schedule.',
    verifiedBuyer: true
  }
];

export const FAQS = [
  {
    question: 'What source files will I receive?',
    answer: 'Master editable vector files: Adobe Illustrator (.AI), Scalable Vector (.SVG & .EPS), Adobe Photoshop (.PSD), and 300 DPI CMYK print-ready PDF.'
  },
  {
    question: 'Do I get full commercial copyright?',
    answer: 'Yes. Upon delivery, you receive 100% exclusive commercial rights and copyright ownership for digital, print, and trademark use.'
  },
  {
    question: 'Can I order directly through Fiverr?',
    answer: 'Yes. You can order via Fiverr for escrow buyer protection or book directly via the contact form or WhatsApp.'
  },
  {
    question: 'How do revisions work?',
    answer: 'Quick iterative adjustments on typography, colors, and layout. Standard and Premium packages include unlimited revisions.'
  },
  {
    question: 'What is your turnaround time?',
    answer: 'Standard delivery is 2–4 business days. Urgent 24-hour express delivery is available upon request.'
  },
  {
    question: 'How do we start a project?',
    answer: 'Use the Cost Estimator or Contact Form below, or message directly on WhatsApp (+880 1342 900364) to start immediately.'
  }
];
