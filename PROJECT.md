# VQube Technologies - Project Context & Architecture

> **Domain**: [vqubetechnologies.com](https://vqubetechnologies.com/)  
> **Headquarters**: Chennai, Tamil Nadu, India  
> **Contact**: info@vqubetechnologies.com | +91 99622 93530  
> **Industry**: Industrial Engineering Consulting, Plant Design, CFD/FEA Simulation & Global Technical Manpower Solutions

---

## 1. Project Overview

**VQube Technologies** is a specialized engineering consulting and technical manpower deployment firm. The company delivers end-to-end plant engineering design, FEED (Front-End Engineering Design), detail engineering, finite element analysis (FEA), computational fluid dynamics (CFD), retrofit optimization, and global deputation of qualified engineers across heavy industries.

### Core Industry Sectors
- **Cement & Mineral Processing**: Clinker lines, grinding units, pyroprocessing, material handling systems, kiln retrofits.
- **Mining & Metals**: Bulk materials handling, beneficiation plants, crushing/screening plants, conveyor network design.
- **Oil & Gas / Energy**: Piping layout, pressure vessel design, thermal stress modeling, pipeline hydraulics, skid-mounted systems.
- **Specialized Engineering Manpower**: Deputation of structural, mechanical, electrical, process, and piping engineers for global projects.

---

## 2. Repository File Structure

```text
VQube Technologies/
├── index.html                           # Production Homepage (Complete single-page application & showcase)
├── Vqube V2.html                        # Version 2 Next-Gen Website (Modernized UI with interactive estimators)
├── Contact.html                         # Dedicated Contact & Consultation Request page
├── Term.html                            # Terms & Conditions legal page
├── privacy.html                         # Privacy Policy legal page
├── push.bat                             # One-click Git deployment script to GitHub main branch
├── robots.txt                           # Search engine crawling rules
├── sitemap.xml                          # XML Sitemap with priority & update frequencies
├── zone-file-vqubetechnologies-com.txt  # Production DNS zone configuration records
├── GEMINI.md                            # Global AI Agent Directives & Behavior Guidelines
├── PROJECT.md                           # This complete project context & architectural documentation
│
└── Assets/
    ├── Logo_with_Name_-removebg-preview.png  # Main brand transparent logo
    ├── White Log.png                        # Inverted white logo for dark backgrounds
    ├── favicon.png                          # Browser favicon (48x48)
    ├── CEMENTPLANT.png                      # Cement plant engineering hero asset
    ├── MINE.png                             # Mining engineering domain asset
    ├── OIL.png                              # Oil & Gas solutions asset
    ├── MANPOWER.png                         # Technical manpower solutions asset
    ├── QR.png                               # WhatsApp / Direct contact QR code
    ├── P1.jpg - P4.jpg                      # Project portfolio showcase imagery
    ├── 1.jpeg - 4.jpeg                      # Engineering case study gallery images
    └── Photo Frame.jpeg                     # Office / Team credentials frame
```

---

## 3. Technology Stack & Architectural Patterns

### Frontend Architecture
- **HTML5**: Semantic, accessible markup structured for high search visibility and rich snippet schema.
- **CSS3 / Vanilla CSS**:
  - CSS Custom Properties (CSS variables) for full dynamic theming (Light/Dark mode).
  - Glassmorphic panels (`backdrop-filter: blur()`), noise texture overlays, and custom radial ambient lighting.
  - Responsive layout built on modern CSS Grid and Flexbox with mobile-first breakpoints.
- **JavaScript (Vanilla ES6+)**:
  - Zero heavy external runtime frameworks (zero React/Vue/Angular bundle overhead) for sub-second load times.
  - Interactive Theme Engine (Local storage persistent Dark/Light mode).
  - Custom DOM animations: Scroll reveal observer, interactive project cost calculators, dynamic filter tabs, and mobile navigation drawers.

### Typography
- **Primary Body Font**: `'Plus Jakarta Sans'`, sans-serif (Clean, modern geometric readability).
- **Headings (V2)**: `'Space Grotesk'`, sans-serif (High-tech precision engineering aesthetic).
- **Editorial Accents (V2)**: `'Instrument Serif'`, Georgia, serif (Subtle editorial luxury feel).

---

## 4. Detailed Component Breakdown

### A. `index.html` (Production Main Website)
- **Navigation**: Sticky frosted-glass navbar with live status indicator, quick links, theme switcher, and direct consultation CTA.
- **Hero Section**: High-impact value proposition highlighting integrated plant engineering & manpower.
- **Sector Solutions Grid**: Interactive cards for Cement, Mining, Oil & Gas, and Heavy Industry.
- **Service Modules**: Detailed breakdowns of FEED, detailed 3D CAD modeling, FEA/CFD simulation, and site commissioning.
- **Engineering Capabilities Matrix**: Software stack proficiency (AutoCAD, SolidWorks, Tekla, ANSYS, CAESAR II, PDMS).
- **Global Manpower Deputation**: Dedicated section for engineering talent recruitment and deployment models.
- **Client Trust & Testimonials**: Statistics, client feedback, and quality assurance workflows.
- **SEO & Structured Data**: Full Schema.org JSON-LD `Organization` and `WebSite` schemas.

### B. `Vqube V2.html` (Next-Gen V2 Redesign)
- **Modernized Dark Mode Default**: Obsidian base (`#06090E`), deep navy surface cards, electric blue and neon cyan accents.
- **Interactive Project Estimator**: Dynamic pricing/timeline calculation tool for engineering consulting and manpower requirements.
- **Sector Switcher Tabs**: Smooth tabbed navigation between industrial sectors with real-time specification readouts.
- **Enhanced Micro-Interactions**: Ambient canvas mesh backgrounds, pulsing live indicators, and spring hover transitions.

### C. `Contact.html`
- **Layout**: Desktop contained non-scroll split view; responsive scrolling on mobile devices.
- **Form Handling**: Client consultation booking with name, email, phone, sector selection, and project scope inputs.
- **Direct Connect**: Instant WhatsApp routing, telephone dialing, and email launcher.

### D. Legal Pages (`privacy.html` & `Term.html`)
- Comprehensive privacy policy addressing GDPR and Indian DPDP standards.
- Detailed consulting terms covering IP ownership, NDA confidentiality, liability limitations, and payment milestones.

---

## 5. Deployment & Infrastructure

- **Domain & DNS**: `vqubetechnologies.com` managed via GoDaddy nameservers (`ns37.domaincontrol.com` / `ns38.domaincontrol.com`) pointing to AWS hosting A-records (`15.197.225.128`, `3.33.251.168`).
- **Security & Deliverability**: DMARC policy configured (`v=DMARC1; p=quarantine`).
- **CI/CD / Deployment Pipeline**: Handled via `push.bat`, automating git stage, custom commit prompting, and pushing to the GitHub `main` branch.

---

## 6. Development & Maintenance Guidelines

1. **No External Framework Dependencies**: Keep styling in vanilla CSS and scripts in pure JavaScript to preserve ultra-fast loading speed and zero build-step overhead.
2. **Asset Pathing**: Maintain relative pathing for local image assets and HTTPS CDN URLs for Google Fonts.
3. **Preserve Rules in `GEMINI.md`**:
   - Don't assume scope; confirm before large architectural changes.
   - Minimum code that solves the problem.
   - Never modify or expose secrets, `.env`, or credential files.
