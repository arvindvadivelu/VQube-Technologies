# VQube Technologies - Video & Media Brand Kit

A centralized, reusable brand kit for **VQube Technologies**. Use this kit across all your video productions, motion graphics, social media reels/shorts, presentation decks, and web animations.

---

## 🎨 1. Brand Color Palette

### Core Backgrounds & Dark Overlays
| Color Name | Preview | HEX | RGB | Recommended Video Usage |
| :--- | :---: | :--- | :--- | :--- |
| **Obsidian Base** | `⬛` | `#06090E` | `rgb(6, 9, 14)` | Video backdrops, title card backgrounds, dark mode canvases |
| **Dark Slate** | `⬛` | `#121D17` | `rgb(18, 29, 23)` | Lower-third backgrounds, modal panels, video card backing |
| **Dark Card Surface** | `⬛` | `#121915` | `rgb(18, 25, 21)` | Glassmorphism cards with backdrop blur |

### Primary Brand Accents (Sage Green)
| Color Name | Preview | HEX | RGB | Recommended Video Usage |
| :--- | :---: | :--- | :--- | :--- |
| **Forest Sage** | `🟩` | `#2A3C31` | `rgb(42, 60, 49)` | Secondary badges, subtle borders, deep brand elements |
| **Sage Muted** | `🟩` | `#83968B` | `rgb(131, 150, 139)` | Subtitles, speaker roles, secondary descriptions |
| **Sage Light** | `🟩` | `#A4B4AB` | `rgb(164, 180, 171)` | High-readability highlights and bullet icons on dark scenes |

### Vibrant High-Tech Accents
| Color Name | Preview | HEX | RGB | Recommended Video Usage |
| :--- | :---: | :--- | :--- | :--- |
| **Electric Cyan** | `🟦` | `#00E5FF` | `rgb(0, 229, 255)` | Key word highlights, animated progress bars, glowing borders |
| **Electric Blue** | `🟦` | `#0D00FF` | `rgb(13, 0, 255)` | Ambient gradient background lighting |
| **Deep Navy** | `🟦` | `#183060` | `rgb(24, 48, 96)` | Executive typography, light-mode headings |
| **Gold Amber** | `🟨` | `#F59E0B` | `rgb(245, 158, 11)` | Special awards, certifications, rating stars |

### Text & Neutrals
| Color Name | Preview | HEX | RGB | Recommended Video Usage |
| :--- | :---: | :--- | :--- | :--- |
| **Crisp White** | `⬜` | `#FFFFFF` | `rgb(255, 255, 255)` | Main titles, high-contrast captions, watermark logo |
| **Text Light** | `⬜` | `#F0F4F2` | `rgb(240, 244, 242)` | Body narration sync, voiceover script text |
| **Text Muted** | `⬜` | `#A0A6A3` | `rgb(160, 166, 163)` | Timecodes, chapter labels, disclaimers |

---

## 🔤 2. Typography & Fonts

All fonts are open-source and freely available from Google Fonts.

### A. Headings & Main Titles: **`Space Grotesk`**
- **Vibe**: Modern, high-tech, precision engineering.
- **Weights**: `600 (SemiBold)` or `700 (Bold)`.
- **Google Font Link**: [Space Grotesk on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- **Use for**: Video hook titles, slide chapter titles, big stat numbers, speaker names in lower-thirds.

### B. Body & Subtitles: **`Plus Jakarta Sans`**
- **Vibe**: Ultra-clean geometric sans with maximum readability on screens.
- **Weights**: `500 (Medium)`, `600 (SemiBold)`, `700 (Bold)`.
- **Google Font Link**: [Plus Jakarta Sans on Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Use for**: Video captions/subtitles, speaker titles, bullet points, voiceover sync.

### C. Editorial & Luxury Accents: **`Instrument Serif`**
- **Vibe**: Sophisticated, editorial touch for prestigious highlights.
- **Weights**: `400 Italic`.
- **Google Font Link**: [Instrument Serif on Google Fonts](https://fonts.google.com/specimen/Instrument+Serif)
- **Use for**: Executive quotes, client testimonials, cinematic accent phrases.

### D. Technical & Timecodes: **`JetBrains Mono`**
- **Vibe**: Monospaced engineering code and technical telemetry.
- **Weights**: `500 (Medium)`, `700 (Bold)`.
- **Google Font Link**: [JetBrains Mono on Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)
- **Use for**: Engineering simulation specs (FEA/CFD), timestamps, metric counters.

---

## 📐 3. Recommended Video Font Scaling

| Screen Format | Main Title | Section / Subtitle | Speaker Name | Captions / Subtitles | Badge / Tag |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1080p (1920x1080)** | `64px` (Bold) | `32px` (Medium) | `24px - 28px` | `24px - 28px` (Bold) | `14px - 16px` |
| **4K (3840x2160)** | `128px` (Bold) | `64px` (Medium) | `52px - 56px` | `48px - 56px` (Bold) | `28px - 32px` |
| **Vertical (9:16 Shorts/Reels)** | `48px - 56px` | `28px` | `24px` | `32px - 36px` (Bold) | `16px` |

---

## 🎬 4. Ready-to-Use Video Presets

### 1. Lower-Third Speaker Banner
- **Background**: `rgba(6, 9, 14, 0.88)` with `backdrop-filter: blur(16px)`
- **Border**: Left border `4px solid #00E5FF` (Electric Cyan)
- **Name**: `Space Grotesk Bold 700`, Color `#FFFFFF`
- **Role/Designation**: `Plus Jakarta Sans Medium 500`, Color `#83968B`

### 2. Video Watermark
- **Recommended Asset**: `White Log.png`
- **Position**: Top-Right corner (Margin: 36px - 48px from edges)
- **Opacity**: `85% - 90%`
- **Max Height**: `40px` (1080p) / `80px` (4K)

### 3. High-Contrast Subtitles / Captions
- **Font**: `Plus Jakarta Sans Bold 700`
- **Text Color**: `#FFFFFF` with active word highlighted in `#00E5FF`
- **Background**: `rgba(6, 9, 14, 0.85)` pill or drop shadow `0 2px 10px rgba(0, 0, 0, 0.9)`

---

## 💻 5. How to Use in Different Environments

### A. In CSS / HTML / Remotion (Web Video)
```html
<!-- Import the Brand Kit stylesheet -->
<link rel="stylesheet" href="./brand-kit/brand-kit.css">

<!-- Example Lower Third -->
<div class="vqube-lower-third">
  <div>
    <div class="vqube-lower-third-name">Er. Arvind Vadivelu</div>
    <div class="vqube-lower-third-role">Lead Plant Engineering Consultant</div>
  </div>
</div>
```

### B. In JavaScript / React / Remotion
```javascript
import { BrandColors, BrandFonts, VideoPresets } from './brand-kit/brand-kit.js';

// Use in Remotion composition styles
const titleStyle = {
  fontFamily: BrandFonts.heading.family,
  color: BrandColors.cyan,
  fontSize: 64,
  fontWeight: 700
};
```

### C. In Python (MoviePy / Video Automation)
```python
import json

with open('brand-kit/brand-kit.json', 'r') as f:
    brand = json.load(f)

obsidian_hex = brand['colors']['primary']['obsidian']['hex']  # "#06090E"
cyan_hex = brand['colors']['accents']['electricCyan']['hex']    # "#00E5FF"
```

### D. In Premiere Pro / After Effects / CapCut / Canva
- **Color Palette**: Save the HEX codes (`#06090E`, `#00E5FF`, `#83968B`, `#FFFFFF`, `#121D17`) into your editing tool's Brand Kit palette.
- **Fonts**: Install **Space Grotesk** and **Plus Jakarta Sans** from Google Fonts to your system.
