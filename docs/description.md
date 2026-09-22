# VQube Technologies - Complete Master Architecture & Content Specification

> **Official Master Reference Specification & Design Blueprint**  
> **Company Name**: VQube Technologies (VQT)  
> **Domain**: [vqubetechnologies.com](https://vqubetechnologies.com/)  
> **Official Taglines**: "Engineering Excellence & Man Power Solutions" | "Vector | Vision | Value"  
> **Primary Contact Email**: `infovqubetechnologies@gmail.com`  
> **Official Phone / WhatsApp**: `+91 76048 52835` (`https://wa.me/917604852835`)  
> **Headquarters**: 226/1A2, Ground Floor, Nehru Street, Alappakkam, Chengalpattu, Chennai, Tamil Nadu 603003, India  
> **Design Framework**: Apple Minimalist White Space Design System  

---

## 📑 Table of Contents

1. [Asset & Media Directory](#1-asset--media-directory)
2. [Design System & Apple Minimalist Tokens](#2-design-system--apple-minimalist-tokens)
3. [Global Navigation & Footer](#3-global-navigation--footer)
4. [Page 1: Homepage (`index.html`)](#4-page-1-homepage-indexhtml)
   - [4.1 Hero Showcase & 2-Card Media Composition](#41-hero-showcase--2-card-media-composition)
   - [4.2 Infinite Brand Marquee](#42-infinite-brand-marquee)
   - [4.3 Visual Parallax Gallery](#43-visual-parallax-gallery)
   - [4.4 About Us & 6 Operating Pillars](#44-about-us--6-operating-pillars)
   - [4.5 Numerical Simulation Feature Band](#45-numerical-simulation-feature-band)
   - [4.6 Industry Service Bento Grid & Modals](#46-industry-service-bento-grid--modals)
   - [4.7 Engineering Capabilities & Software Cloud](#47-engineering-capabilities--software-cloud)
   - [4.8 Client Testimonials & Leadership Endorsements](#48-client-testimonials--leadership-endorsements)
   - [4.9 Technical FAQ Accordion](#49-technical-faq-accordion)
   - [4.10 Consultation Request Modal](#410-consultation-request-modal)
5. [Page 2: Contact Page (`Contact.html`)](#5-page-2-contact-page-contacthtml)
   - [5.1 Executive Leadership Card](#51-executive-leadership-card)
   - [5.2 Instant Mobile QR Card & Fullscreen Lightbox](#52-instant-mobile-qr-card--fullscreen-lightbox)
   - [5.3 Direct Advisory Channels](#53-direct-advisory-channels)
   - [5.4 Interactive Inquiry Dispatch Form](#54-interactive-inquiry-dispatch-form)
6. [Page 3: Terms & Conditions (`Term.html`)](#6-page-3-terms--conditions-termhtml)
7. [Page 4: Privacy Policy (`privacy.html`)](#7-page-4-privacy-policy-privacyhtml)
8. [Technical Architecture & Integration Specifications](#8-technical-architecture--integration-specifications)

---

## 1. Asset & Media Directory

All project media files are centralized in the `assets/images/` directory:

| File Path | Description | Recommended Usage | Alt / Accessibility Text |
| :--- | :--- | :--- | :--- |
| `assets/images/favicon.png` | Circular 3D VQube brand icon | Browser tab favicon, Apple touch icon, OpenGraph thumbnail | `VQube Technologies Favicon` |
| `assets/images/Logo_with_Name_-removebg-preview.png` | Transparent primary brand logo with company wordmark | Light headers, navigation, footers, mobile drawer, email templates | `VQube Technologies Logo` |
| `assets/images/White Log.png` | High-resolution white monochrome logo wordmark | Dark mode headers, modal banners, video outros | `VQube Technologies White Logo` |
| `assets/images/Photo Frame.jpeg` | Executive portrait of Vadivelu Dhamodharan | Contact page executive leadership card | `Vadivelu Dhamodharan - Head, Engineering & Business Solutions` |
| `assets/images/QR.png` | Ultra-high-resolution WhatsApp / Contact QR code | Contact page bento card, fullscreen lightbox modal, print cards | `VQube Technologies QR Code Contact` |
| `assets/images/CEMENTPLANT.png` | Industrial cement manufacturing plant complex visual | Cement Plant Engineering service bento card & modal banner | `Cement Plant Engineering & Pyroprocessing Solutions` |
| `assets/images/MINE.png` | Heavy mining excavation and bulk processing facility | Mining & Mineral Processing service bento card & modal banner | `Mining & Bulk Material Handling Engineering` |
| `assets/images/OIL.png` | High-pressure refinery and petrochemical piping facility | Oil & Gas Engineering service bento card & modal banner | `Oil & Gas Piping and Pressure Vessel Engineering` |
| `assets/images/MANPOWER.png` | Global engineering team and technical workforce | Skilled Manpower Deputation service bento card & modal banner | `Global Specialized Technical Manpower Solutions` |
| `assets/images/1.jpeg` | Modern clean energy production plant | Visual Parallax Gallery Card 1 | `Clean Energy Production Facility` |
| `assets/images/2.jpeg` | Executive leadership portrait | Visual Parallax Gallery Card 2 | `Engineering Leadership & Strategic Advisory` |
| `assets/images/3.jpeg` | Natural tree ring cross-section (Sustainable growth metaphor) | Visual Parallax Gallery Card 3 | `Sustainable Industrial Growth & Structural Integrity` |
| `assets/images/4.jpeg` | Senior industrial field engineer with safety helmet | Visual Parallax Gallery Card 4 | `Field Engineering Execution & Site Supervision` |
| `assets/images/P1.jpg` | Client portrait: Madusudan Vijayaraghavan | Testimonials avatar cluster & quote card 4 | `Madusudan Vijayaraghavan` |
| `assets/images/P2.jpg` | Client portrait: Ajay Laxmanrao Karmore | Testimonials avatar cluster & quote card 1 | `Ajay Laxmanrao Karmore` |
| `assets/images/P3.jpg` | Client portrait: Ashok Kumar Burra | Testimonials avatar cluster & quote card 2 | `Ashok Kumar Burra` |
| `assets/images/P4.jpg` | Client portrait: Nithyanandhan Dharman | Testimonials avatar cluster & quote card 3 | `Nithyanandhan Dharman` |

---

## 2. Design System & Apple Minimalist Tokens

The website adheres to a unified **Apple Minimalist White Space Design System**, combining generous breathing room, high-precision typography hierarchy, frosted glass blurs, subtle hairline borders, and zero chromatic noise (zero orange, zero neon cyan).

```css
:root {
    /* Palette Tokens */
    --color-primary: #1d1d1f;          /* Apple Charcoal Black */
    --color-apple-black: #000000;      /* Absolute Pure Black */
    --color-ink: #1d1d1f;              /* High-contrast body text */
    --color-body-muted: #86868b;       /* Apple Secondary Gray */
    --color-slate: #6e6e73;            /* Apple Tertiary Gray */
    --color-muted: #86868b;            /* Metadata, subheadings */
    --color-canvas: #ffffff;           /* Stark White Canvas */
    --color-soft-stone: #f5f5f7;       /* Apple Signature Light Gray Surface */
    --color-pill-badge: #f5f5f7;       /* Neutral pill background */
    --color-card-border: #d2d2d7;      /* Clean card border */
    --color-hairline: #e5e5ea;         /* Hairline separators */
    --color-border-light: #d2d2d7;     /* Standard border tone */
    
    /* Action & Interactive Accents */
    --color-action-blue: #0071e3;      /* Apple Signature Action Blue */
    --color-action-hover: #0077ed;     /* Active blue hover state */
    --color-action-soft: rgba(0, 113, 227, 0.08); /* Soft blue tint */
    
    /* Typography Tokens */
    --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    /* Physics & Animation */
    --ease-apple: cubic-bezier(0.16, 1, 0.3, 1);
    --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    --transition-base: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    --radius-pill: 980px;
    --radius-lg: 24px;
    --radius-md: 18px;
    --radius-sm: 12px;
}
```

---

## 3. Global Navigation & Footer

### 3.1 Global Sticky Frosted Glass Header
- **Height**: `84px` sticky navbar with `backdrop-filter: blur(20px)`.
- **Brand Logo**: `assets/images/Logo_with_Name_-removebg-preview.png` (`56px` height) with link to `index.html`.
- **Center Navigation**:
  - `Home` (`index.html`)
  - `About` (`index.html#about`)
  - `Services` (`index.html#services`)
  - `Capabilities` (`index.html#capabilities`)
  - `Testimonials` (`index.html#testimonials`)
  - `FAQ` (`index.html#faq`)
  - `Contact` (`Contact.html`)
- **Right Action**:
  - Direct WhatsApp Click-to-Chat Phone Badge: `+91 76048 52835` (`https://wa.me/917604852835?text=Hello%20VQube%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20engineering%20consulting%20services.`)
  - Mobile Menu Hamburger Toggle.

### 3.2 Full-Screen Apple Mobile Navigation Overlay
- **Modal Dimensions**: `100vw × 100vh` full-page modal with frosted glass background blur (`backdrop-filter: blur(28px)`).
- **Header**: Company logo and circular close button (`✕`).
- **Links**: Large typography links with directional hover arrows (`→`).
- **Footer**: Direct WhatsApp (`+91 76048 52835`) and Direct Email (`infovqubetechnologies@gmail.com`) shortcuts.
- **Scroll Lock**: Locks background page scroll when open.

### 3.3 Global Minimalist Footer
- **Brand Column**: Logo, official tagline `Vector | Vision | Value`, summary description, LinkedIn icon, and Office Map icon.
- **Pages Column**: Links to Home, About VQube, Industry Services, Capabilities, Testimonials.
- **Legal & Info Column**: Links to Contact Us, Privacy Policy, Terms & Conditions.
- **Headquarters Column**:
  - Location: Chennai, Tamil Nadu, India.
  - Email (Single Line): `Email:` `<a href="mailto:infovqubetechnologies@gmail.com">infovqubetechnologies@gmail.com</a>`
  - Phone (Single Line): `Phone:` `<a href="https://wa.me/917604852835?text=Hello%20VQube%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20engineering%20consulting%20services." target="_blank">+91 76048 52835</a>`
- **Copyright Row**: `© 2026 VQube Technologies, All rights reserved.` and domain link `vqubetechnologies.com`.

---

## 4. Page 1: Homepage (`index.html`)

### 4.1 Hero Showcase & 2-Card Media Composition
- **Badge**: `GLOBAL INDUSTRIAL CONSULTING // 2026`
- **Headline**: `Engineering excellence. Precision execution.`
- **Narrative Copy**:
  > "VQube Technologies provides specialized industrial engineering consulting and technical manpower solutions for global heavy industries. From conceptual FEED and advanced FEA/CFD simulation to specialized plant design and global on-site engineering deputation, we empower world-class engineering infrastructure."
- **Action Buttons**:
  - `Request Technical Consultation →` (Opens interactive consultation modal)
  - `Explore Services ↓` (Smooth scrolls to `#services`)
- **2-Card Composition**:
  - **Card 1 (Cinematic Process Video)**: High-definition looping video card showcasing advanced engineering simulation and CAD modeling.
  - **Card 2 (Clean Energy Plant Card)**: High-resolution clean energy facility card with frosted glass badges (`EFFICIENCY // 99.4%` and `HEAVY INDUSTRY COMPLIANT`).

### 4.2 Infinite Brand Marquee
- Continuous smooth ticker with Apple monochrome typography:
  `VECTOR • VISION • VALUE • ENGINEERING EXCELLENCE • SKILLED MANPOWER SOLUTIONS • PLANT DESIGN & FEA/CFD • GLOBAL TECHNICAL DEPUTATION`

### 4.3 Visual Parallax Gallery
- Responsive 4-card interactive visual showcase:
  1. `assets/images/1.jpeg`: Clean Energy Production Facility.
  2. `assets/images/2.jpeg`: Executive Leadership & Engineering Strategy.
  3. `assets/images/3.jpeg`: Structural Integrity & Sustainable Engineering.
  4. `assets/images/4.jpeg`: Field Engineering Execution & Site Supervision.

### 4.4 About Us & 6 Operating Pillars
- **Narrative**: Decades of industrial engineering domain leadership across process plants, cement, mining, and energy sectors.
- **Dual Strategic Capabilities**:
  - *Skilled Manpower Deputation*: On-site and remote placement of certified engineers (Structural, Mechanical, Electrical, Process, Piping).
  - *Technical Recruitment Services*: Specialized executive technical talent acquisition for heavy industrial capital projects.
- **Vision**: To be the premier global engineering consulting and technical manpower partner for process and manufacturing industries.
- **Mission**: Delivering world-class engineering design, computational simulation, and skilled engineering deputation that optimize performance, ensure safety, and accelerate capital project execution.
- **6 Operating Pillars**:
  1. *Technical Excellence*: Uncompromising quality and adherence to ASME, ASTM, DIN, and ISO international standards.
  2. *Safety & Reliability*: Engineering designs verified through rigorous FEA stress analysis and safety factors.
  3. *Client-Centric Collaboration*: Embedded engineering partnership aligned with project milestones and CAPEX constraints.
  4. *Innovation & Digital Engineering*: State-of-the-art computational fluid dynamics (CFD) and discrete element method (DEM) modeling.
  5. *Global Talent Network*: Vetted pool of multidisciplinary engineering specialists available for global mobilization.
  6. *Sustainable Execution*: Energy-efficient plant retrofits, waste-heat recovery, and emissions reduction engineering.

### 4.5 Numerical Simulation Feature Band
- Dark space-black high-contrast band highlighting simulation specializations:
  - *CFD Combustion & Calciner Modeling*: 3D reactive flow, temperature field mapping, and burner optimization.
  - *Structural FEA & Dynamic Analysis*: Heavy equipment structural integrity, seismic loading, and fatigue analysis.
  - *DEM Bulk Material Flow*: Transfer chute wear optimization, blockage prevention, and discrete particle physics.
  - *CAESAR II Piping Stress Analysis*: High-temperature/high-pressure pipeline flexibility, thermal expansion, and nozzle load verification.

### 4.6 Industry Service Bento Grid & Modals
1. **Cement & Mineral Processing**: Clinker lines, raw mill/cement mill grinding systems, calciner optimization, pyroprocessing retrofits, and bulk material handling.
2. **Mining & Metals**: Crushing and screening plants, beneficiation circuits, overland conveyors, stacker-reclaimers, and slurry piping networks.
3. **Oil & Gas (Upstream / Downstream)**: Process piping, ASME Section VIII pressure vessels, API 650 storage tanks, skid packages, and pump station design.
4. **Specialized Engineering Manpower**: Project-based deputation of lead structural engineers, piping designers, CFD/FEA specialists, and site commissioning supervisors.

### 4.7 Engineering Capabilities & Software Cloud
- **Software Matrix**: ANSYS Fluent, ANSYS Mechanical, CAESAR II, SolidWorks, Autodesk Plant 3D, Tekla Structures, STAAD.Pro, Rocky DEM, AutoCAD.
- **Deliverables**: FEED packages, 3D BIM models, isometric fabrication drawings, P&ID schematics, stress analysis calculation reports, and procurement data sheets.

### 4.8 Client Testimonials & Leadership Endorsements
- Verified verbatim client reviews from heavy industry executives:
  - **Ajay Laxmanrao Karmore**: Commending cement plant process optimization and kiln retrofit engineering.
  - **Ashok Kumar Burra**: Praising structural FEA and heavy machinery stress analysis accuracy.
  - **Nithyanandhan Dharman**: Endorsing high-pressure piping design and CAESAR II stress verification.
  - **Madusudan Vijayaraghavan**: Highlighting rapid global deployment of qualified structural and commissioning manpower.

### 4.9 Technical FAQ Accordion
- Expandable interactive FAQ covering engagement models, international codes & standards, software toolchains, and manpower deputation mobilization timelines.

### 4.10 Consultation Request Modal
- Live interactive modal triggered from hero and CTA buttons with direct asynchronous dispatch to `infovqubetechnologies@gmail.com`.

---

## 5. Page 2: Contact Page (`Contact.html`)

### 5.1 Executive Leadership Card
- Features `assets/images/Photo Frame.jpeg` with smooth scale hover and frosted gradient overlay:
  - **Name**: Vadivelu Dhamodharan
  - **Title**: Head - Engineering & Business Solutions

### 5.2 Instant Mobile QR Card & Fullscreen Lightbox
- **Display Frame**: High-contrast `170px × 170px` QR code (`assets/images/QR.png`) inside an Apple-styled card frame with a "Tap to expand" zoom indicator.
- **Lightbox Modal (`#qrModal`)**: Clicking the QR code opens a `240px` fullscreen modal with background blur (`backdrop-filter: blur(16px)`) and quick WhatsApp direct chat button.
- **WhatsApp Button**: Direct link to `https://wa.me/917604852835` with prefilled consulting inquiry message.

### 5.3 Direct Advisory Channels
- **Direct Webmail**: `https://mail.google.com/mail/?view=cm&fs=1&to=infovqubetechnologies@gmail.com`
- **Voice / WhatsApp**: `+91 76048 52835` (`https://wa.me/917604852835`)
- **LinkedIn**: `https://www.linkedin.com/in/vadiveludhamodharan`
- **Google Maps**: `https://maps.app.goo.gl/tafZc8eqjrF6T3b89`

### 5.4 Interactive Inquiry Dispatch Form
- **Form Fields**: Full Name, Company Email, Phone / WhatsApp, Industry Sector (Dropdown), Project Scope / Technical Requirements (Textarea).
- **Asynchronous Transmission**: Automatically posts payload to `infovqubetechnologies@gmail.com` via `https://formsubmit.co/ajax/infovqubetechnologies@gmail.com` with formatted email notification and automated mail client fallback (`mailto:infovqubetechnologies@gmail.com`).

---

## 6. Page 3: Terms & Conditions (`Term.html`)

Comprehensive 14-clause legal framework:
1. *Acceptance of Terms*
2. *Scope of Services & Technical Advisory*
3. *Engineering Deliverables & Documentation*
4. *Intellectual Property Rights*
5. *Client Data & Confidentiality*
6. *Limitation of Liability*
7. *Force Majeure*
8. *Payment & Commercial Terms*
9. *Termination of Engagements*
10. *Third-Party Services & Links*
11. *Warranty Disclaimer*
12. *Privacy Governance*
13. *Governing Law & Jurisdiction (Chennai, Tamil Nadu, India)*
14. *Changes to These Terms*

---

## 7. Page 4: Privacy Policy (`privacy.html`)

Comprehensive 11-section privacy and data protection framework:
1. *Information We Collect (Direct inquiries, consultation requests, technical specs)*
2. *How We Use Collected Information (Project feasibility, engineering communication)*
3. *Legal Basis for Processing*
4. *Data Retention Policy*
5. *Data Security & Encryption*
6. *Cookies and Tracking Technologies*
7. *Third-Party Disclosures & International Transfers*
8. *Your Privacy Rights (Access, correction, deletion)*
9. *Children's Privacy*
10. *Changes to this Privacy Policy*
11. *Contact Us (`infovqubetechnologies@gmail.com` | `+91 76048 52835`)*

---

## 8. Technical Architecture & Integration Specifications

- **Semantic HTML5**: Native semantic layout elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **SEO & Social Optimization**: Schema.org JSON-LD microdata, OpenGraph tags, Twitter Cards, canonical link tags, and preconnected Google Fonts.
- **Client-Side Physics & Animation**: Native 60fps `requestAnimationFrame` animated number counters, scroll progress bar indicator, Apple scroll-reveal observers (`IntersectionObserver`), and magnetic button physics on desktop.
- **Form Dispatch Architecture**: Pure client-side async dispatch with zero backend server dependencies, instant user feedback toasts, and automatic fallback to `mailto:infovqubetechnologies@gmail.com`.
- **Zero Framework Bloat**: Pure vanilla HTML5, CSS3, and JavaScript ES6+ for maximum performance, 100/100 Lighthouse compatibility, and instant load speeds.
