/**
 * CENTRAL IMAGE & PRODUCT ASSET REGISTRY
 * ------------------------------------------------------------------
 * All images, product covers, portfolio case studies, gallery sets,
 * default artwork fallbacks, client avatars, and social media cards
 * are centralized in this single file.
 * 
 * TO REPLACE ANY IMAGE ON THE SITE:
 * Simply replace the URL string for that key below with your own image URL!
 */

export const IMAGE_ASSETS = {
  // USER PROFILE & DESIGNER PHOTO (Place 1p.jpg in public/ folder)
  profilePhoto: './1p.jpg',

  // HERO SHOWCASE SECTION TABS
  heroShowcase: {
    brand: 'https://images.unsplash.com/photo-1608248597359-009947e45260?auto=format&fit=crop&w=1000&q=80',
    packaging: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1000&q=80',
    social: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
  },

  // BEFORE & AFTER COMPARISON SLIDER
  beforeAfter: {
    beforeLegacy: '/logo1.png',
    afterRedesign: '/logo1p.png',
  },

  // DEFAULT SHOWCASE ARTWORK FALLBACKS
  defaultArtworks: {
    brand: 'https://images.unsplash.com/photo-1608248597359-009947e45260?auto=format&fit=crop&w=1200&q=80',
    saas: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    packaging: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=1200&q=80',
    social: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    youtube: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    print: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=80',
  },

  // PORTFOLIO CASE STUDY PROJECTS (MAIN COVER & GALLERY SLIDES)
  portfolio: {
    auraBotanicals: {
      cover: '/brand1.png',
      gallery: [
        '/brand1.png',
        '/brand7.png',
        '/brand7.1.png'
      ],
    },
    synapseAi: {
      cover: '/brand2.png',
      gallery: [
        '/brand2.png',
        '/brand7.2.png',
        '/brand8.png'
      ],
    },
    veloCoffee: {
      cover: '/brand3.png',
      gallery: [
        '/brand3.png',
        '/brand4.png',
        '/brand5.png'
      ],
    },
    igniteStreetwear: {
      cover: '/brand4.png',
      gallery: [
        '/brand4.png',
        '/brand5.png',
        '/brand6.png'
      ],
    },
    apexGamingYoutube: {
      cover: '/brand5.png',
      gallery: [
        '/brand5.png',
        '/brand6.png',
        '/brand7.png'
      ],
    },
    vaneCapitalPrint: {
      cover: '/brand6.png',
      gallery: [
        '/brand6.png',
        '/brand8.png',
        '/brand1.png'
      ],
    },
    brand7System: {
      cover: '/brand7.png',
      gallery: [
        '/brand7.png',
        '/brand7.1.png',
        '/brand7.2.png'
      ],
    },
    brand8System: {
      cover: '/brand8.png',
      gallery: [
        '/brand8.png'
      ],
    },
  },

  // FIVERR GIG SERVICES (PRODUCT COVERS)
  fiverrGigs: {
    brandIdentity: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    socialAds: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    packaging: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=800&q=80',
    thumbnails: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
  },

  // SOCIAL MEDIA CHANNELS & PROOF CARDS
  socialChannels: {
    fiverrPro: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    behance: 'https://images.unsplash.com/photo-1608248597359-009947e45260?auto=format&fit=crop&w=600&q=80',
    dribbble: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80',
    linkedIn: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    instagram: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    whatsApp: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=600&q=80',
  },

  // VERIFIED CLIENT REVIEW AVATARS
  clientAvatars: {
    sarahJenkins: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    oliverSmith: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    lukasMeyer: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    alexandreDupont: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    fatimaAlSayed: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
};
