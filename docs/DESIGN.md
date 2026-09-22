# Design System Specification: Meta • Apple • Google • Notion • WhatsApp

**VQube Technologies** Digital Design System Specification (`DESIGN.md`) synthesizes the industry-defining design languages of 5 leading tech innovators: **Meta**, **Apple**, **Google**, **Notion**, and **WhatsApp**.

---

## 1. Design Language Foundations & Principles

```
+---------------------------------------------------------------------------------------------------------+
|                                    5-GIANT DESIGN SYSTEM ARCHITECTURE                                   |
+-------------------+---------------------------------------+---------------------------------------------+
| Origin Giant      | Core Philosophy                       | Concrete Implementation                     |
+-------------------+---------------------------------------+---------------------------------------------+
| 🌐 Meta           | "People First & Infinite Horizons"    | Meta Blue gradient (#0668E1 -> #1877F2),    |
|                   | Effortless exploration, dynamic depth | 24px-28px rounded horizon cards, glow rings |
+-------------------+---------------------------------------+---------------------------------------------+
| 🍏 Apple          | "Reductionism & Tactile Craft"        | Frosted glass navbar (`blur(20px)`),        |
|                   | Bento grid hierarchy, pure typography | Soft stone canvas (#F5F5F7), pill badges    |
+-------------------+---------------------------------------+---------------------------------------------+
| 🔍 Google         | "Material 3 & Zero Friction"          | Elevation surfaces, fluid tactile buttons,  |
|                   | Structured microdata, high contrast   | Schema.org JSON-LD, accessible focus rings  |
+-------------------+---------------------------------------+---------------------------------------------+
| 📝 Notion         | "High-Density Editorial Clarity"      | JetBrains Mono technical chips, structured  |
|                   | Monospace taxonomy, clean callouts    | capability matrix, clean accordion FAQs     |
+-------------------+---------------------------------------+---------------------------------------------+
| 💬 WhatsApp       | "Instant Real-Time Connectivity"      | Floating emerald beacon (#25D366),          |
|                   | Direct human-to-human engagement      | 1-tap WhatsApp chat links, QR scan modal    |
+-------------------+---------------------------------------+---------------------------------------------+
```

---

## 2. Color Tokens & Surface Hierarchy

### Meta Primary Brand Palette
- **Meta Blue Primary**: `#0064E0` / `#0866FF`
- **Meta Blue Electric**: `#0081FB` / `#00C6FF`
- **Meta Gradient Linear**: `linear-gradient(135deg, #0668E1 0%, #0081FB 50%, #1877F2 100%)`
- **Meta Horizon Glow**: `radial-gradient(circle at 50% 0%, rgba(0, 129, 251, 0.12) 0%, transparent 70%)`

### Surfaces & Backgrounds
- **Pure Canvas**: `#FFFFFF`
- **Meta Slate Canvas**: `#F0F2F5` / `#F8F9FA`
- **Apple Soft Stone**: `#F5F5F7`
- **Obsidian Dark Ink (Primary Headings)**: `#050505` / `#1C2B33`
- **Body Slate (Secondary Typography)**: `#4A5568` / `#65676B`
- **Muted Caption (Tertiary Text)**: `#86868B` / `#8A8D91`
- **Borders & Dividers**: `rgba(0, 0, 0, 0.08)` / `rgba(228, 230, 235, 0.9)`

### Accent Colors
- **WhatsApp Emerald**: `#25D366`
- **WhatsApp Dark Accent**: `#128C7E`
- **Success Mint**: `#00C853`
- **Warning Amber**: `#FF9800`

---

## 3. Typography Hierarchy

| Role | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `-apple-system, "Optimistic Display", "Inter", sans-serif` | `64px - 76px` | `40px - 48px` | `700` (Bold) | `1.04` |
| **Section Header (H2)**| `-apple-system, "Inter", sans-serif` | `38px - 44px` | `28px - 34px` | `700` | `1.15` |
| **Card Header (H3)** | `-apple-system, "Inter", sans-serif` | `22px - 26px` | `20px - 22px` | `600` | `1.25` |
| **Lead Paragraph** | `"Inter", sans-serif` | `18px - 20px` | `16px - 17px` | `400` / `450` | `1.6` |
| **Body Standard** | `"Inter", sans-serif` | `15px - 16px` | `14px - 15px` | `400` | `1.65` |
| **Monospace Chips** | `"JetBrains Mono", "SF Mono", monospace` | `12px - 13px` | `11px - 12px` | `600` | `1.4` |

---

## 4. Component Standards

### 1. Meta & Apple Navigation Bar
- **Position**: Sticky (`top: 0; z-index: 1000;`)
- **Background**: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(24px) saturate(180%)`
- **Border**: `1px solid rgba(0, 0, 0, 0.06)`
- **Interactions**: Subtle underline slide on hover, seamless mobile full-screen overlay drawer.

### 2. Meta Horizon Cards & Bento Grid
- **Geometry**: `border-radius: 24px` (or `28px` for hero bento cards)
- **Background**: Pure `#FFFFFF` on `#F0F2F5` canvas, or `#F5F5F7` soft stone
- **Border**: `1px solid rgba(0, 0, 0, 0.06)`
- **Shadow**: `0 4px 24px rgba(0, 0, 0, 0.04)`
- **Hover Motion**: `transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0, 100, 224, 0.1);`

### 3. Meta Pill Buttons & Google Ripple Physics
- **Primary CTA**:
  ```css
  background: linear-gradient(135deg, #0668E1 0%, #0081FB 50%, #1877F2 100%);
  color: #FFFFFF;
  border-radius: 9999px;
  padding: 14px 28px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 129, 251, 0.35);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  ```
- **Secondary CTA**: Frosted pill with border `1px solid rgba(0, 0, 0, 0.12)` and hover background `rgba(0, 0, 0, 0.04)`.

### 4. Notion-Inspired Accordion FAQ
- **Container**: Minimalist bordered cards with subtle hover shift.
- **Toggle Icon**: Smooth 90-degree rotating chevron or `+` / `-` toggle.
- **Micro-Interaction**: Smooth height animation with `transition: max-height 0.35s ease, opacity 0.3s ease`.

### 5. Floating WhatsApp Live Support Widget
- **Position**: Fixed `bottom: 24px; right: 28px; z-index: 9998;`
- **Icon Circle**: `width: 56px; height: 56px; background: #25D366; border-radius: 50%;`
- **Pulse Ring**: Subtle expanding aura with `animation: pulseRing 2s infinite`.
- **Tooltip**: *"Chat with Advisory"* pill displaying on hover.

---

## 5. Accessibility & Performance Benchmarks
- **Contrast**: WCAG AAA compliant text-to-background contrast (> 7:1 for body copy).
- **Core Web Vitals**: 0 KB external framework bundle; pure native HTML5, CSS3, and modern Vanilla JS.
- **Lighthouse Performance Score**: Target > 98 across Performance, Accessibility, Best Practices, and SEO.
