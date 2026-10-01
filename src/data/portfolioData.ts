import { PortfolioItem, FiverrGig, PricingPackage, ClientReview } from '../types';
import { IMAGE_ASSETS } from './imageAssets';

// 1. Logo & Branding section items (using original brand1.png to brand8.png)
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
    image: './brand1.png',
    gallery: ['./brand1.png'],
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
    image: './brand2.png',
    gallery: ['./brand2.png'],
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
    image: './brand3.png',
    gallery: ['./brand3.png'],
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
    image: './brand4.png',
    gallery: ['./brand4.png'],
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
    image: './brand5.png',
    gallery: ['./brand5.png'],
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
    image: './brand6.png',
    gallery: ['./brand6.png'],
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
    image: './brand7.png',
    gallery: ['./brand7.png', './brand7.1.png', './brand7.2.png'],
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
    image: './brand8.png',
    gallery: ['./brand8.png'],
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

// 2. Combined Graphic Design Section Items (all 16 design files: design1 to design16)
export const GRAPHICS_DESIGN_ITEMS: PortfolioItem[] = [
  {
    id: 'design-1',
    title: 'Abdullah Psychotic Premium Food Menu Promo',
    client: 'Abdullah Psychotic',
    clientCountry: 'United Arab Emirates',
    category: 'social',
    categoryLabel: 'Premium Food & Beverage Social Media Promo',
    year: '2026',
    views: '9.2k',
    likes: '1140',
    image: './design1.webp',
    gallery: ['./design1.webp'],
    description: 'A high-impact digital advertisement showcasing a curated selection of premium dishes and artisanal drinks from the Abdullah Psychotic food series. The design leverages moody, high-contrast photography to emphasize texture and appetite appeal in a restaurant marketing context.',
    challenge: 'The challenge was to organize multiple menu items into a cohesive visual structure that maintains luxury brand perception while clearly communicating pricing and appetite-stimulating imagery.',
    solution: 'The solution employs a bold, aggressive \'brush-stroke\' typography style paired with deep, dark-toned textures to establish a high-end, premium aesthetic that commands immediate visual attention.',
    deliverables: ['Digital Menu Card', 'Instagram Feed Advertisement', 'Food Photography Editorial', 'Social Media Branding Kit'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Deep Charcoal Black', hex: '#0D0D0D' },
      { name: 'Vibrant Blood Red', hex: '#D91E18' },
      { name: 'Off-White Cream', hex: '#F2F2F2' }
    ],
    fonts: ['Distressed Brush Typeface', 'Geometric Sans-Serif'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: 'A bold, beautiful aesthetic. Complete design system delivered on time.',
      author: 'Farhad AP',
      company: 'Owner, Psychotic Label',
      rating: 5
    }
  },
  {
    id: 'design-2',
    title: 'Luxury Watch E-Commerce Promo',
    client: 'Luxury Lifestyle',
    clientCountry: 'Switzerland',
    category: 'social',
    categoryLabel: 'Premium Watch E-Commerce Social Media Ad',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design2.webp',
    gallery: ['./design2.webp'],
    description: 'This sophisticated social media advertisement showcases a high-end, gold and black chronograph watch resting on a textured obsidian platform. The composition emphasizes elegance and craftsmanship through dramatic spotlighting and a dark, moody aesthetic.',
    challenge: 'The design challenge was to elevate the perceived value of the timepiece while maintaining visual clarity for the discount offer and product specifications.',
    solution: 'We utilized a high-contrast palette of gold and deep black combined with bold, modern typography to create a sense of exclusivity and urgency.',
    deliverables: ['Instagram Feed Ad', 'Facebook Promotion Banner', 'E-commerce Product Detail Graphic', 'Story/Reels Overlay Asset'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Metallic Gold', hex: '#C59955' },
      { name: 'Obsidian Black', hex: '#0D0D0D' },
      { name: 'Soft Warm Amber', hex: '#E0B772' }
    ],
    fonts: ['Bold Serif Heading', 'Geometric Sans-Serif Body'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: 'Stunning product visualization. High CTR conversions reached instantly.',
      author: 'Beat Keller',
      company: 'Horology Specialist',
      rating: 5
    }
  },
  {
    id: 'design-3',
    title: 'Internal Psycho Movie Poster',
    client: 'Internal Psycho',
    clientCountry: 'United Kingdom',
    category: 'youtube',
    categoryLabel: 'Cinematic Movie Poster and Promotional Artwork',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design3.webp',
    gallery: ['./design3.webp'],
    description: 'A dark, psychological thriller movie poster featuring a striking double-exposure portrait of the protagonist set against a moody city skyline. The design utilizes a high-contrast aesthetic to evoke themes of fractured identity and mental instability.',
    challenge: 'The challenge was to visually represent the concept of a \'split mind\' and psychological instability within a single, cohesive cinematic frame.',
    solution: 'We utilized a layered composition with dramatic red accents, distressed typography, and shadowy silhouettes to create an atmosphere of intense psychological suspense.',
    deliverables: ['Main Movie Poster', 'Social Media Promotional Banner', 'Digital Title Treatment', 'Atmospheric Character Key Art'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Vivid Crimson', hex: '#D11A1A' },
      { name: 'Midnight Charcoal', hex: '#121212' },
      { name: 'Dark Slate', hex: '#262626' },
      { name: 'Off-White', hex: '#E0E0E0' }
    ],
    fonts: ['Distressed Grunge Serif', 'Clean Geometric Sans Serif'],
    mockupType: 'youtube',
    featured: false,
    testimonial: {
      quote: 'Incredibly atmospheric. Evokes intense psychological suspense.',
      author: 'Marcus Brody',
      company: 'Producer',
      rating: 5
    }
  },
  {
    id: 'design-4',
    title: 'Abdullah Psychotic Signature Sneakers: Bite the Bullet',
    client: 'Abdullah Psychotic',
    clientCountry: 'United Arab Emirates',
    category: 'branding',
    categoryLabel: 'High-End Sportswear Marketing Campaign',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design4.webp',
    gallery: ['./design4.webp'],
    description: 'A high-impact promotional composition showcasing the \'Abdullah Psychotic\' signature high-top sneakers, emphasizing a gritty, aggressive aesthetic. The visual narrative combines dark atmospheric textures with bold, blood-red accents to establish a powerful, premium streetwear brand identity.',
    challenge: 'The challenge was to translate the concept of \'Bite the Bullet\' into a visual language that feels both high-fashion and rebellious while maintaining clarity for product feature highlighting.',
    solution: 'The design utilizes a stark high-contrast color palette, dramatic spotlighting, and structured modular callouts to blend lifestyle storytelling with clear, feature-focused technical presentation.',
    deliverables: ['Full-page promotional poster', 'Detailed technical feature breakdown', 'Brand-specific lifestyle lookbook asset', 'Social media advertising creative'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Vantablack', hex: '#0D0D0D' },
      { name: 'Blood Crimson', hex: '#A10505' },
      { name: 'Off-White Smoke', hex: '#F2F2F2' }
    ],
    fonts: ['Calligraphic Script', 'Bold Geometric Sans'],
    mockupType: 'brand',
    featured: true,
    testimonial: {
      quote: 'An elite streetwear marketing campaign asset. Aggressive and striking.',
      author: 'Farhad AP',
      company: 'Owner, Psychotic Label',
      rating: 5
    }
  },
  {
    id: 'design-5',
    title: 'ABDULLAH IN ACTION Film Poster',
    client: 'ABDULLAH STUDIO',
    clientCountry: 'United Arab Emirates',
    category: 'branding',
    categoryLabel: 'Cinematic Movie Poster Design',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design5.webp',
    gallery: ['./design5.webp'],
    description: 'This cinematic movie poster features a central mysterious protagonist in a hoodie surrounded by a squad of suited men, conveying themes of power and disciplined action. The high-contrast lighting and gritty, dark atmosphere create an intense visual narrative suggestive of a high-stakes action film.',
    challenge: 'The challenge was to establish a sense of authority and enigma through visual composition, ensuring the hierarchy clearly distinguishes the leader from the supporting team while maintaining a cohesive, suspenseful atmosphere.',
    solution: 'The solution utilizes a striking contrast between deep shadows and sharp crimson accents, paired with a bold, weathered brush-stroke typography to evoke an edgy, cinematic action aesthetic.',
    deliverables: ['Theatrical Movie Poster', 'Social Media Promotional Banner', 'Digital Marketing Asset', 'Film Title Key Art'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Midnight Black', hex: '#0D0D0D' },
      { name: 'Crimson Red', hex: '#D10000' },
      { name: 'Slate Grey', hex: '#4A4A4A' },
      { name: 'Ghost White', hex: '#F0F0F0' }
    ],
    fonts: ['Distressed Serif', 'Bold Geometric Sans'],
    mockupType: 'brand',
    featured: false,
    testimonial: {
      quote: 'Outstanding theatrical poster layout. Gritty, moody and beautifully intense.',
      author: 'Producer',
      company: 'Abdullah Action Films',
      rating: 5
    }
  },
  {
    id: 'design-6',
    title: 'Internal Psycho Film Poster',
    client: 'Internal Psycho',
    clientCountry: 'India',
    category: 'youtube',
    categoryLabel: 'Cinematic Film Poster',
    year: '2026',
    views: '9.2k',
    likes: '1250',
    image: './design6.webp',
    gallery: ['./design6.webp'],
    description: 'This cinematic film poster features a psychological thriller aesthetic, utilizing intense lighting and double exposure to convey a complex mental state. The composition emphasizes duality, balancing the protagonist\'s portrait with a dramatic urban silhouette against a dark, moody backdrop.',
    challenge: 'The challenge was to visually represent the psychological fragmentation and \'inner\' turmoil of the character using a cohesive, high-contrast dark palette.',
    solution: 'We utilized a bold, distressed \'brushed\' typeface paired with a deep crimson and charcoal color scheme to evoke a sense of impending psychological intensity.',
    deliverables: ['High-Resolution Film Poster', 'Social Media Promo Banner', 'YouTube Video Thumbnail', 'Digital Marketing Teaser'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Crimson Red', hex: '#D32F2F' },
      { name: 'Charcoal Black', hex: '#0D0D0D' },
      { name: 'Off-White Smoke', hex: '#E0E0E0' }
    ],
    fonts: ['Distressed Brush Serif', 'Clean Geometric Sans-Serif'],
    mockupType: 'youtube',
    featured: false,
    testimonial: {
      quote: 'A bold cinematic piece with highly emotional visual depth.',
      author: 'Vikram Sen',
      company: 'Film Director',
      rating: 5
    }
  },
  {
    id: 'design-7',
    title: 'WE FLY Premium Sneaker Campaign',
    client: 'Abdullah Psychotic',
    clientCountry: 'United Arab Emirates',
    category: 'social',
    categoryLabel: 'High-End Sportswear Retail Social Media Advertisement',
    year: '2026',
    views: '9.2k',
    likes: '1250',
    image: './design7.webp',
    gallery: ['./design7.webp'],
    description: 'A high-impact promotional graphic for a luxury sneaker release, featuring a dramatic split-screen composition that balances a bold, typographic message with a centered, floating Jordan 1 silhouette. The design utilizes deep, moody tones and sharp contrasts to evoke a sense of exclusivity and high-performance lifestyle branding.',
    challenge: 'To effectively showcase a premium footwear product within a crowded fashion market while maintaining brand prestige and visual hierarchy.',
    solution: 'Leveraging a powerful, oversized \'WE FLY\' headline with a grunge-textured treatment against a dark, contrasting background to create instant visual authority.',
    deliverables: ['Social Media Post', 'Digital Advertisement', 'Website Hero Banner', 'Marketing Campaign Asset'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Deep Black', hex: '#0D0D0D' },
      { name: 'Vibrant Red', hex: '#A81717' },
      { name: 'Off-White', hex: '#E0E0E0' }
    ],
    fonts: ['Impact', 'Gotham Bold'],
    mockupType: 'social',
    featured: true,
    testimonial: {
      quote: 'Outstanding high-fashion sneaker asset. Reaches extreme organic engagement.',
      author: 'Farhad AP',
      company: 'Sneakers Director',
      rating: 5
    }
  },
  {
    id: 'design-8',
    title: 'Special Steak Premium Food Promo',
    client: 'The Grill House',
    clientCountry: 'Bangladesh',
    category: 'social',
    categoryLabel: 'Premium Food Promo Social Media Ad',
    year: '2026',
    views: '9.2k',
    likes: '1120',
    image: './design8.webp',
    gallery: ['./design8.webp'],
    description: 'This premium social media advertisement showcases a mouth-watering grilled steak dish, emphasizing high-quality ingredients and a luxurious dining experience. The dark, sophisticated aesthetic is designed to immediately capture the viewer\'s attention and drive appetite for a high-end restaurant menu.',
    challenge: 'The design challenge was to balance a dark, moody background with appetizing food photography while ensuring key promotional details like pricing and contact info remained legible.',
    solution: 'The solution utilized high-contrast typography—pairing a bold, weathered script with clean sans-serif fonts—and a vibrant golden-yellow accent color to create a focal point for the price and brand message.',
    deliverables: ['Social Media Feed Post', 'Story Advertisement', 'Website Menu Banner', 'Restaurant Printed Flyer'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Deep Charcoal', hex: '#131313' },
      { name: 'Golden Saffron', hex: '#F4B324' },
      { name: 'Creamy White', hex: '#FDFDFD' },
      { name: 'Muted Sage', hex: '#5D675A' }
    ],
    fonts: ['Brush Script Display', 'Geometric Sans-Serif'],
    mockupType: 'social',
    featured: false,
    testimonial: {
      quote: 'Highly Appetite stimulating! Outstanding balance of colors and text.',
      author: 'Owner, Grill House',
      company: 'The Grill House',
      rating: 5
    }
  },
  {
    id: 'design-9',
    title: 'Apex Fighting League Achievement Certificate',
    client: 'Apex Fighting League',
    clientCountry: 'United States',
    category: 'print',
    categoryLabel: 'Premium Combat Sports Achievement Certificate',
    year: '2026',
    views: '9.2k',
    likes: '1120',
    image: './design9.webp',
    gallery: ['./design9.webp'],
    description: 'A high-impact, dark-themed achievement certificate designed for an elite combat sports league. The layout expertly blends dramatic black-and-white portrait photography with bold, red-accented typography to convey prestige and athletic intensity.',
    challenge: 'The challenge was to create a commemorative document that feels both official and aggressive, moving away from traditional, sterile corporate certificate aesthetics.',
    solution: 'The design utilizes a high-contrast dark aesthetic combined with clean, elegant script typography and bold serif headers to strike a balance between professional validation and gritty combat-sport identity.',
    deliverables: ['High-resolution Print Certificate', 'Digital Award Graphic', 'Social Media Recognition Asset', 'League Identity Seal'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Pitch Black', hex: '#0D0D0D' },
      { name: 'Champion Red', hex: '#B41416' },
      { name: 'Off-White Mist', hex: '#E0E0E0' }
    ],
    fonts: ['Modern Serif Display', 'Signature Script'],
    mockupType: 'print',
    featured: false,
    testimonial: {
      quote: 'Prestige, honor and raw energy. Absolute masterpiece.',
      author: 'Mark Hunt',
      company: 'League Admin, AFL',
      rating: 5
    }
  },
  {
    id: 'design-10',
    title: 'Annual Athletics Championship Event Poster',
    client: 'Apex Sports',
    clientCountry: 'Bangladesh',
    category: 'print',
    categoryLabel: 'Sports Event Promotional Poster',
    year: '2025',
    views: '8.2k',
    likes: '1140',
    image: './design10.webp',
    gallery: ['./design10.webp'],
    description: 'This dynamic promotional poster captures the raw intensity of a competitive track event with a high-contrast, professional athlete-focused visual. The bold, gritty typography and energetic color palette effectively communicate the urgency and prestige of the upcoming annual sports championship.',
    challenge: 'The challenge was to translate the raw energy and high-stakes environment of a stadium athletics competition into a cohesive, readable visual layout for a large-format event poster.',
    solution: 'We utilized a dramatic low-angle photography perspective paired with a distressed, heavy-weight typography system and a high-contrast black and gold color scheme to create a sense of movement and athletic determination.',
    deliverables: ['Event Poster', 'Social Media Teaser', 'Digital Banner Ad', 'Event Flyer'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Deep Black', hex: '#0D0D0D' },
      { name: 'Goldenrod', hex: '#D4A31D' },
      { name: 'Off-White', hex: '#F2F2F2' }
    ],
    fonts: ['Distressed Display Sans-Serif', 'Modern Geometric Sans-Serif', 'Calligraphic Script'],
    mockupType: 'print',
    featured: false,
    testimonial: {
      quote: 'Captured our athletic championship\'s momentum and power flawlessly.',
      author: 'Sajib Al-Hasan',
      company: 'Director, Apex Sports',
      rating: 5
    }
  },
  {
    id: 'design-11',
    title: 'Bang & Olufsen PLAY Campaign',
    client: 'Bang & Olufsen',
    clientCountry: 'Denmark',
    category: 'social',
    categoryLabel: 'Premium Electronics Social Media Ad',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design11.webp',
    gallery: ['./design11.webp'],
    description: 'This sleek advertising asset showcases the minimalist aesthetic of Bang & Olufsen wireless headphones, emphasized by a bold split-tone background. The design balances high-end audio technology with clean, modern typography to project luxury and pure sound performance.',
    challenge: 'The challenge was to convey the premium, tactile nature of high-end audio equipment through a static two-dimensional social media advertisement.',
    solution: 'The design utilized a dramatic bisected color palette combined with centered, high-contrast typography to anchor the floating product as the primary focal point, reinforcing the brand\'s sophisticated identity.',
    deliverables: ['Instagram Feed Post', 'Facebook Promotion Banner', 'Product Hero Asset', 'Digital Marketing Web Slider'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Obsidian Black', hex: '#0D0D0D' },
      { name: 'Sage Green', hex: '#848D79' },
      { name: 'Cream White', hex: '#EFEFEF' }
    ],
    fonts: ['Geometric Sans Serif'],
    mockupType: 'social',
    featured: false,
    testimonial: {
      quote: 'Sleek and minimalist audio product presentation. Highly representative.',
      author: 'Niels Larsen',
      company: 'Global Brand Manager, B&O',
      rating: 5
    }
  },
  {
    id: 'design-12',
    title: 'Abdullah Psychotic Premium Ramen Series',
    client: 'Abdullah Psychotic',
    clientCountry: 'Indonesia',
    category: 'social',
    categoryLabel: 'Premium Food Promo Ad',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design12.webp',
    gallery: ['./design12.webp'],
    description: 'This premium food marketing advertisement showcases the Dragon Ramen and Sakura Ramen series, emphasizing flavor profiles through high-contrast photography. The layout perfectly balances bold, aggressive red accents with sophisticated dark aesthetics to appeal to adventurous culinary enthusiasts.',
    challenge: 'The design challenge was to effectively market two contrasting ramen varieties—one spicy and one floral—within a single, cohesive visual advertisement that highlights the brand\'s \'premium\' identity.',
    solution: 'The solution utilizes a split-layout composition, distinct color psychology with vibrant red accents against deep black backgrounds, and high-impact brush-stroke typography to evoke a sense of authenticity and culinary excitement.',
    deliverables: ['Instagram Feed Ad Graphic', 'Digital Menu Board Banner', 'Social Media Story Promo', 'Promotional Flyer for Print'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Lava Red', hex: '#DA251D' },
      { name: 'Midnight Black', hex: '#0D0D0D' },
      { name: 'Soft Sakura', hex: '#E3A3B4' }
    ],
    fonts: ['Brush Script Display', 'Bold Geometric Sans Serif'],
    mockupType: 'social',
    featured: false,
    testimonial: {
      quote: 'Sensational appetite appeal! Truly amazing split design.',
      author: 'Siti Rahma',
      company: 'Ramen Series Partner',
      rating: 5
    }
  },
  {
    id: 'design-13',
    title: 'PODCAST TIME: Live Podcast Event Poster',
    client: 'Sailor Enterprise',
    clientCountry: 'United States',
    category: 'social',
    categoryLabel: 'Event Promotional Poster',
    year: '2026',
    views: '9.2k',
    likes: '1150',
    image: './design13.webp',
    gallery: ['./design13.webp'],
    description: 'This high-energy poster design promotes a live podcast session titled \'PODCAST TIME\' featuring a gritty, stencil-art aesthetic. The composition centers on a passionate speaker shouting into a megaphone, symbolizing the power of authentic human connection and vocal expression.',
    challenge: 'The challenge was to capture the raw, unfiltered essence of \'real talk\' podcasting while maintaining high visual impact and readability in a crowded social media feed.',
    solution: 'We utilized a high-contrast red and black grunge aesthetic with distressed textures, bold hand-drawn style typography, and a dynamic layout to convey urgency and authenticity.',
    deliverables: ['Event Promotional Poster', 'Social Media Square Feed Asset', 'Digital Banner Advertisement', 'Event Landing Page Header'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Vivid Crimson', hex: '#E60000' },
      { name: 'Void Black', hex: '#0F0F0F' },
      { name: 'Paper White', hex: '#F2F2F2' }
    ],
    fonts: ['Distressed Brush Script', 'Bold Geometric Sans-Serif'],
    mockupType: 'social',
    featured: false,
    testimonial: {
      quote: 'Loud, punchy and extremely effective at grabbing attention.',
      author: 'Jim Sailor',
      company: 'CEO, Sailor Enterprise',
      rating: 5
    }
  },
  {
    id: 'design-14',
    title: 'Visual Arts Exhibition Poster',
    client: 'INGOUDE COMPANY',
    clientCountry: 'United Kingdom',
    category: 'print',
    categoryLabel: 'Event Promotion Poster',
    year: '2025',
    views: '9.2k',
    likes: '1120',
    image: './design14.webp',
    gallery: ['./design14.webp'],
    description: 'A striking exhibition poster featuring high-contrast liquid-metal hands reaching out to touch, conveying a powerful sense of creative tension and modern artistry. The design utilizes a bold, minimalist layout to emphasize the event details, drawing viewers in with an intense interplay of crimson red and deep obsidian black.',
    challenge: 'To create a compelling visual hook for a contemporary art exhibition that bridges the gap between traditional fine art and digital, avant-garde aesthetics.',
    solution: 'The design employs a high-impact, surrealist 3D focal point paired with sophisticated, clean typography to establish a premium and cutting-edge brand identity.',
    deliverables: ['A3 Event Poster', 'Social Media Event Header', 'Digital Exhibition Landing Page Asset', 'Exhibition Program Cover'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Crimson Red', hex: '#E60000' },
      { name: 'Obsidian Black', hex: '#0D0D0D' },
      { name: 'Off-White', hex: '#F2F2F2' }
    ],
    fonts: ['Bold Geometric Sans-Serif', 'Modern Serif'],
    mockupType: 'print',
    featured: false,
    testimonial: {
      quote: 'A stunning surreal poster design that intrigued all art collectors.',
      author: 'Emma Watson',
      company: 'Curator, Ingoude Art',
      rating: 5
    }
  },
  {
    id: 'design-15',
    title: 'PODCAST TIME: Hear The Sound, Get The Meaning',
    client: 'ABDULLAH PSYCHOTIC',
    clientCountry: 'United Arab Emirates',
    category: 'social',
    categoryLabel: 'Podcast Promotional Social Media Graphic',
    year: '2026',
    views: '9.2k',
    likes: '1240',
    image: './design15.webp',
    gallery: ['./design15.webp'],
    description: 'This high-energy promotional poster features a bold, street-art inspired aesthetic designed to command attention for a lifestyle and mindset podcast. It utilizes aggressive typography and a high-contrast red and black palette to emphasize the power of spoken word and persuasive messaging.',
    challenge: 'The challenge was to distill complex brand pillars like business, mindset, and motivation into a single, punchy visual that captures the raw intensity of the podcast\'s content.',
    solution: 'We utilized a gritty, halftone-textured visual style with a dominant red megaphone graphic to anchor the design, ensuring the messaging jumps off the page with a sense of urgency and authoritative personality.',
    deliverables: ['Instagram Feed Post', 'Podcast Episode Announcement Graphic', 'Story Promotion Asset', 'Brand Identity Poster'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Fire Engine Red', hex: '#E62E25' },
      { name: 'Off-White Paper', hex: '#F2F2F2' },
      { name: 'Pitch Black', hex: '#0D0D0D' }
    ],
    fonts: ['Impact Grunge', 'Modern Bold Sans'],
    mockupType: 'social',
    featured: false,
    testimonial: {
      quote: 'Absolute authority and motivation printed in high contrast.',
      author: 'Forhad Admin',
      company: 'Psychotic Podcast',
      rating: 5
    }
  },
  {
    id: 'design-16',
    title: 'Save The Date: Abdullah Psychotic Launch Teaser',
    client: 'Abdullah Psychotic',
    clientCountry: 'United Arab Emirates',
    category: 'social',
    categoryLabel: 'Lifestyle Brand Social Media Teaser',
    year: '2026',
    views: '8.2k',
    likes: '942',
    image: './design16.webp',
    gallery: ['./design16.webp'],
    description: 'This high-impact social media teaser utilizes a calendar-themed layout to create anticipation for a new lifestyle product reveal. The juxtaposition of grit-textured iconography against clean typography establishes a premium yet edgy brand identity.',
    challenge: 'The challenge was to build intrigue and excitement for a brand launch using limited graphical elements while maintaining a sophisticated aesthetic.',
    solution: 'The solution employs a calendar-grid layout to anchor the \'Save The Date\' messaging, using a high-contrast red accent to command immediate visual attention.',
    deliverables: ['Instagram Story Teaser', 'Social Media Announcement Post', 'Digital Marketing Calendar Graphic', 'Brand Awareness Campaign Asset'],
    formats: ['.AI', '.PSD', '.PDF', '.PNG'],
    colors: [
      { name: 'Off-White', hex: '#EAE7E0' },
      { name: 'Deep Black', hex: '#0D0D0D' },
      { name: 'Action Red', hex: '#D32F2F' },
      { name: 'Charcoal Grey', hex: '#333333' }
    ],
    fonts: ['Modern Serif', 'Humanist Script'],
    mockupType: 'social',
    featured: false,
    testimonial: {
      quote: 'Outstanding calendar save the date concept. Edgy and exclusive.',
      author: 'Launch Lead',
      company: 'Psychotic Label',
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
