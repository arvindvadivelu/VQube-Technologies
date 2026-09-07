# GEMINI.md — VQube Technologies Engineering & Agent Context

> **Author**: Senior Staff Software Engineer / Lead Solutions Architect  
> **Repository**: `VQube-Technologies`  
> **Production Domain**: [https://vqubetechnologies.com](https://vqubetechnologies.com/)  
> **Platform Version**: Production 2026.x  
> **Classification**: Production Corporate Web Application & Engineering Portal  

---

## 1. Project Overview & Business Domain

**VQube Technologies** is a specialized engineering consulting and integrated project management firm delivering mission-critical industrial solutions and global engineering manpower deputation.

### Core Value Proposition & Motto
* **Tagline**: *"Vector | Vision | Value"*
* **Headquarters**: Chennai, Tamil Nadu, India
* **Primary Industries Served**:
  * Cement & Mineral Processing
  * Mining Engineering & Material Handling
  * Oil & Gas / Petrochemicals
  * Power & Energy Systems
  * Heavy Industrial Manufacturing & Food Processing
* **Core Technical Competencies**:
  * Plant Engineering & Conceptual Design (FEED, Detail Engineering)
  * Mechanical, Civil, Structural, Process, Piping, Electrical & Instrumentation
  * Advanced CAE Simulations: CFD (Computational Fluid Dynamics) & FEA (Finite Element Analysis)
  * Engineering Manpower Deputation & Technical Talent Acquisition

---

## 2. Technical Stack & Architecture Blueprint

The project follows a **High-Performance Zero-Dependency Vanilla Architecture** optimized for blazing fast Time-To-First-Byte (TTFB), near-perfect Google Lighthouse scores, robust SEO crawlability, and zero build-step overhead.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CLIENT / USER AGENT                             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          PRESENTATION LAYER                            │
│  - Semantic HTML5 (WCAG 2.1 AA Compliant, ARIA landmarks)              │
│  - Modern CSS3 (Custom Properties / Design Tokens, Mesh Gradients,     │
│    Glassmorphism, 3D Tilt Physics, Noise Texture Overlays)             │
│  - Vanilla JavaScript ES6+ (IntersectionObserver, RAF animations,      │
│    Event Delegation, Dynamic Theme Engine, Modal Orchestration)        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      STRUCTURED DATA & SEO ENGINE                      │
│  - Schema.org JSON-LD (Organization, WebSite entities)                 │
│  - OpenGraph & Twitter Cards Meta Protocol                             │
│  - Canonical Hierarchy & XML Sitemap Synchronization                   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       DEPLOYMENT & HOSTING PIPELINE                    │
│  - Batch Automation Pipeline (`push.bat`)                              │
│  - Git Version Control on `main` branch                                │
│  - Production Edge Hosting / Static Web Server                         │
└────────────────────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions
1. **Zero External Framework Overhead**: No React/Vue/Angular or heavy runtime bundle. Everything runs native in the browser engine.
2. **Design Token Hierarchy**: Centralized CSS variables for dynamic Dark/Light theme switching stored in `localStorage` with system preference auto-detection (`prefers-color-scheme`).
3. **Hardware-Accelerated Animation Pipeline**: CSS 3D transforms (`transform-style: preserve-3d`, `will-change`), `requestAnimationFrame` counters, and GPU-composited layers.
4. **Rich Rich-Schema Metadata**: Full JSON-LD structured schema for search engine rich results and enterprise knowledge graph indexing.

---

## 3. Repository File Structure & Asset Map

```
VQube Technologies/
├── index.html                           # Main Landing Page & Comprehensive Engineering Portal
├── Contact.html                         # Dedicated Contact & Inquiries Page (No-scroll desktop layout)
├── privacy.html                         # Privacy Policy & Compliance Document
├── Term.html                            # Terms & Conditions Agreement
├── robots.txt                           # Search Engine Crawler Directives
├── sitemap.xml                          # Canonical XML URL Sitemap
├── push.bat                             # Windows Batch Git Deployment Pipeline
├── zone-file-vqubetechnologies-com.txt  # DNS Records & Zone File Configuration
├── favicon.png                          # Favicon & Branding Asset
├── Logo_with_Name_-removebg-preview.png # Primary Brand Identity Asset (Transparent)
├── White Log.png                        # Inverted Brand Logo (Dark mode / Footer)
├── CEMENTPLANT.png                      # Industry Sector Showcase Asset (Cement)
├── MINE.png                             # Industry Sector Showcase Asset (Mining)
├── OIL.png                              # Industry Sector Showcase Asset (Oil & Gas)
├── MANPOWER.png                         # Manpower & Deputation Showcase Asset
├── P1.jpg, P2.jpg, P3.jpg, P4.jpg       # Project & Portfolio Gallery Media Assets
├── 1.jpeg, 2.jpeg, 3.jpeg, 4.jpeg       # Testimonial & Case Study Imagery
├── Photo Frame.jpeg                     # Media asset
├── QR.png                               # Dynamic Verification / Connect QR Code
├── README.md                            # Project Readme
└── GEMINI.md                            # AI Context, Engineering Guidelines & Coding Standards
```

---

## 4. Design System & Style Guide

### 4.1 Typography
* **Primary Font Family**: `'Plus Jakarta Sans', sans-serif` (Imported via Google Fonts with `wght@400;500;600;700`).
* **Secondary Font Family (Pills/Buttons/Body text variants)**: `'Calibri', sans-serif`.
* **Base Sizing**: `html { font-size: 18px; }` on desktop (`16px` on `Contact.html`), responsive adjustments for mobile viewports.

### 4.2 Color Palette & CSS Custom Properties

The system uses standard semantic tokens defined in `:root` and toggled via `[data-theme="dark"]`:

| CSS Variable | Light Theme (Default) | Dark Theme (`[data-theme="dark"]`) | Purpose |
|---|---|---|---|
| `--primary` | `#000000` | `#83968b` | Primary branding, buttons, accents |
| `--primary-light` | `#2a3c31` | `#a4b4ab` | Secondary accents and highlight states |
| `--primary-invert` | `#ffffff` | `#121d17` | Contrast text inside primary containers |
| `--text-dark` | `#183060` | `#f0f4f2` | Primary headings, titles, high-emphasis text |
| `--text-muted` | `#000000` / `#111827` | `#a0a6a3` | Body copy, descriptions, secondary text |
| `--bg-body` | `#ffffff` / `#f4f6fc` | `#0a0f0c` | Document root and backdrop background |
| `--bg-pill` | `#f3f5f4` | `#161e1a` | Tag pills and secondary badges |
| `--bg-card` | `#f6f8f7` / `#ffffff` | `#121915` | Card surface and container background |
| `--border-light` | `#e5e7eb` | `#23302a` | Subtle container and card borders |
| `--btn-shadow` | `rgba(18, 29, 23, 0.4)` | `rgba(131, 150, 139, 0.2)` | Elevation glow & drop shadows |
| `--mesh-color-1` | `rgba(13, 0, 255, 0.2)` | `rgba(131, 150, 139, 0.1)` | Dynamic radial background mesh 1 |
| `--mesh-color-2` | `rgba(46, 125, 50, 0.1)` | `rgba(46, 125, 50, 0.05)` | Dynamic radial background mesh 2 |

### 4.3 Motion & Interaction Physics
* **Smooth Easing Curve**: `--transition-smooth: 0.4s cubic-bezier(0.16, 1, 0.3, 1)`.
* **Magnetic Buttons**: Native mousemove calculations offsetting button geometry by `±15%` relative to mouse center.
* **3D Tilt Cards**: Dual-axis `rotateX` / `rotateY` transformations calculated on `mousemove` bounding box coordinates.
* **Ambient Mesh & Noise**: Fixed background radial gradients pulsing with `@keyframes mesh-breathe` and an SVG procedural noise filter (`#noiseFilter`) overlay.

---

## 5. Engineering Standards & Code Quality Rules

When modifying or expanding this codebase, all engineers and AI assistants must follow these strict guidelines:

### 5.1 HTML & Accessibility (a11y)
1. **Semantic Structure**: Maintain strict landmark hierarchy (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>` / modal containers).
2. **SEO Meta Hygiene**: Every page MUST maintain:
   * Descriptive `<title>` in the format `[Page Name] | VQube Technologies`
   * Precise `<meta name="description">` (150-160 chars)
   * `<link rel="canonical" href="https://vqubetechnologies.com/...">`
   * OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter cards
3. **Accessibility**:
   * Interactive elements MUST have descriptive `aria-label` or visible text (e.g. `#themeToggle`, `#menuToggle`, `#backToTop`).
   * Color contrast ratios must meet WCAG 2.1 AA (min 4.5:1 for normal text).
   * Form inputs must pair with `<label>` or floating label architecture.

### 5.2 CSS Guidelines
1. **Never Hardcode Theme Colors**: Always use `var(--var-name)` rather than raw hex/rgb codes in component styles to avoid dark mode regressions.
2. **Mobile-First Responsive Breakpoints**:
   * Mobile: `max-width: 768px`
   * Tablet: `769px` – `1024px`
   * Desktop / Large Display: `> 1024px`
3. **Avoid Layout Thrashing**: Animate only `transform` and `opacity` where possible for 60fps rendering.

### 5.3 JavaScript Architecture
1. **Event Delegation & Memory Management**: Attach handlers cleanly inside `DOMContentLoaded` lifecycle.
2. **IntersectionObserver for Viewport Work**:
   * Scroll animations utilize `.reveal` and `.reveal.active` classes.
   * Numerical counters (`#clientCounter`) trigger on 50% intersection threshold.
3. **Error Handling & Form Validation**:
   * Client-side email regex validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
   * Floating label classes and error feedback states reset on typing.
4. **Theme Persistence**:
   * Always sync `document.documentElement.setAttribute('data-theme', theme)` with `localStorage.setItem('theme', theme)`.

---

## 6. Subsystem Deep-Dive

### 6.1 Interactive Modals
The application features two modal pipelines:
* **Lead / Consultation Modal (`#contactModal`)**: Triggered by `.modal-trigger` buttons, with full scroll locking (`body.style.overflow = 'hidden'`) and keyboard/click-outside dismiss.
* **Service Detail Modals (`openServiceModal`, `closeServiceModal`)**: Contextual popups for individual engineering capability breakdowns (Plant Design, CFD/FEA, Manpower, etc.).

### 6.2 Animated Typewriter
Located in the hero section, the typewriter cycles through corporate slogans via `typeEffect()` with character deletion, pacing, and 2000ms holding pauses.

### 6.3 Testimonial Carousel
Horizontal scroll-snap container controlled via `#prevTestimonial` and `#nextTestimonial` with dynamic offset calculations based on viewport width (`clientWidth / 2` desktop vs `clientWidth * 0.85` mobile).

---

## 7. Local Development & Deployment Workflow

### 7.1 Running Locally
Since this is a vanilla static web application, no compilation or bundler step is needed:

```bash
# Option 1: Python HTTP Server
python -m http.server 8000

# Option 2: Node.js Serve
npx -y serve .

# Option 3: VS Code Live Server Extension
# Open index.html and click "Go Live"
```

### 7.2 Deployment Pipeline (`push.bat`)
Deploying updates to production is handled through the automated Windows batch script `push.bat`:

```cmd
:: Execution steps automated by push.bat:
1. git status
2. git add .
3. git commit -m "<Commit Message>"
4. git push origin main
```

---

## 8. AI Agent Instructions & Operating Directives

When assisting developers on this repository:
1. **Preserve High-End Aesthetics**: Every new component, section, or page must match the existing modern aesthetic (pill badges, 3D tilt cards, mesh gradients, glassmorphism, smooth cubic-bezier transitions).
2. **Keep the Zero-Dependency Standard**: Do NOT introduce heavyweight external libraries (e.g. Tailwind, Bootstrap, jQuery, React) unless explicitly requested by the user.
3. **Synchronize Multi-Page Changes**: When modifying global navigation, header, theme tokens, or footer links, ensure consistent updates across `index.html`, `Contact.html`, `privacy.html`, and `Term.html`.
4. **Maintain SEO & Sitemap Integrity**: When adding new pages or routes, immediately update `sitemap.xml`, `robots.txt`, and canonical tags.
5. **No Regressions on Dark Mode**: Whenever new UI cards or sections are designed, verify both `[data-theme="light"]` and `[data-theme="dark"]` CSS variable mappings.

---
*Maintained with pride for VQube Technologies.*
