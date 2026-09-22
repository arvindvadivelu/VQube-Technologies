/**
 * VQube Technologies - Video & Digital Media Brand Kit (JavaScript / ES Module)
 * Universal token exports for Remotion, React video templates, HTML Canvas, and web apps.
 */

export const BRAND_INFO = {
  name: 'VQube Technologies',
  tagline: 'Engineering Excellence & Man Power Solutions',
  website: 'https://vqubetechnologies.com',
  domain: 'Industrial Engineering Consulting & Manpower'
};

export const BrandColors = {
  // Core Dark Bases (Video Backgrounds & Overlays)
  obsidian: '#06090E',
  darkSlate: '#121D17',
  darkCard: '#121915',
  darkPill: '#161E1A',

  // Brand Sage Green
  forestSage: '#2A3C31',
  sageMuted: '#83968B',
  sageLight: '#A4B4AB',

  // Vibrant Accents
  cyan: '#00E5FF',
  cyanGlow: 'rgba(0, 229, 255, 0.35)',
  electricBlue: '#0D00FF',
  deepNavy: '#183060',
  gold: '#F59E0B',

  // Text & Neutrals
  white: '#FFFFFF',
  textLight: '#F0F4F2',
  textMuted: '#A0A6A3',
  textDark: '#183060',

  // Borders
  borderDark: 'rgba(131, 150, 139, 0.25)',
  borderCyan: 'rgba(0, 229, 255, 0.4)',
  borderLight: '#E5E7EB',

  // Gradients
  gradientGlow: 'linear-gradient(135deg, #00E5FF 0%, #0D00FF 100%)',
  gradientCard: 'linear-gradient(145deg, rgba(18, 29, 23, 0.92) 0%, rgba(6, 9, 14, 0.96) 100%)',
  gradientGold: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
};

export const BrandFonts = {
  heading: {
    family: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    name: 'Space Grotesk',
    weights: [400, 500, 600, 700],
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'
  },
  body: {
    family: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    name: 'Plus Jakarta Sans',
    weights: [400, 500, 600, 700, 800],
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
  },
  accent: {
    family: "'Instrument Serif', Georgia, serif",
    name: 'Instrument Serif',
    weights: [400],
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap'
  },
  mono: {
    family: "'JetBrains Mono', 'Space Mono', Consolas, monospace",
    name: 'JetBrains Mono',
    weights: [400, 500, 700],
    googleFontUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap'
  }
};

export const VideoPresets = {
  // Lower Third styling preset for speaker introductions
  lowerThird: {
    background: BrandColors.gradientCard,
    borderColor: BrandColors.borderDark,
    accentBorderLeft: `4px solid ${BrandColors.cyan}`,
    borderRadius: 12,
    backdropFilter: 'blur(16px)',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 255, 0.1)',
    nameStyle: {
      fontFamily: BrandFonts.heading.family,
      fontWeight: 700,
      fontSize: 24,
      color: BrandColors.white
    },
    roleStyle: {
      fontFamily: BrandFonts.body.family,
      fontWeight: 500,
      fontSize: 15,
      color: BrandColors.sageMuted
    }
  },

  // Captions & Subtitles preset
  captions: {
    fontFamily: BrandFonts.body.family,
    fontWeight: 700,
    fontSize: 26,
    color: BrandColors.white,
    highlightColor: BrandColors.cyan,
    backgroundColor: 'rgba(6, 9, 14, 0.88)',
    borderRadius: 8,
    padding: '8px 18px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.8)'
  },

  // Watermark preset
  watermark: {
    position: { top: 36, right: 48 },
    opacity: 0.88,
    maxHeight: 40,
    assetPath: 'White Log.png'
  }
};

export const BrandAssets = {
  logoMain: 'Logo_with_Name_-removebg-preview.png',
  logoWhite: 'White Log.png',
  favicon: 'favicon.png',
  qrCode: 'QR.png'
};

export const BRAND_KIT = {
  info: BRAND_INFO,
  colors: BrandColors,
  fonts: BrandFonts,
  video: VideoPresets,
  assets: BrandAssets
};

// Default export
export default BRAND_KIT;

// Window global fallback for vanilla scripts in browser
if (typeof window !== 'undefined') {
  window.VQubeBrandKit = BRAND_KIT;
}
