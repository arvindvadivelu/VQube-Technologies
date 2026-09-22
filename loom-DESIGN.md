---
version: alpha
name: Loom
description: "Best free online screen recording tool with advanced video editing and video storage trusted by over 22 million people and easy sharing from Loom.com."
sourceUrl: "https://www.loom.com"

colors:
  primary: "#101214"
  on-primary: "#ffffff"
  background: "#e9f2fe"
  surface: "#1868db"
  text: "#292a2e"
  text-muted: "#101214"
  accent: "#1868db"

typography:
  display:
    fontFamily: "Charlie Display, sans-serif"
    fontSize: 57px
    fontWeight: 700
    lineHeight: 1.03
  heading:
    fontFamily: "Charlie Display, sans-serif"
    fontSize: 57px
    fontWeight: 700
    lineHeight: 1.03
  body:
    fontFamily: "Charlie Text, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.71

spacing:
  base: 1px
  scale: [1, 2, 5, 6, 8, 10, 12, 15, 16, 18]

radius:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

shadows:
  card: "rgba(0, 0, 0, 0) 0px 0px 0px 4.34077px"
  elevated: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px"

motion:
  duration-fast: 100ms
  duration-base: 200ms
  duration-slow: 500ms
  easing: "ease-in-out"

breakpoints: [375px, 640px, 768px, 820px, 1024px, 1025px, 1280px, 1358px, 1600px, 1650px, 1920px, 2384px, 2884px]
---

## Rationale

Loom's design system prioritizes clarity and trust through a sophisticated light-mode palette anchored in deep navy (#101214) and bright white, with a premium blue accent (#1868db) that signals interactivity and forward momentum. The product is fundamentally about asynchronous video communication—reducing friction in how teams share and understand ideas—so the visual language mirrors that mission: clean, distraction-free, and built on generous whitespace. The measured tokens reveal a system designed to scale across 13+ breakpoints (375px to 2884px), indicating heavy investment in responsive behavior and a user base spanning mobile to high-resolution desktop environments.

The typography stack (Charlie Display and Charlie Text) establishes a proprietary, design-forward identity while maintaining readability at scale. Display text at 57px with 1.03 line height creates visual dominance for hero messaging ("One video is worth a thousand words"), while body text at 15px with 1.71 line height ensures comfortable reading of documentation and feature descriptions. This hierarchy reflects a product that must communicate both aspirational benefits and technical details—persuasion paired with usability.

The spacing and radius tokens reveal a mathematical, intentional approach: a base scale that compounds (1, 2, 5, 6, 8, 10, 12, 15, 16, 18) rather than a traditional 8px system, suggesting custom refinement for this brand's specific visual rhythm. Rounded corners (6px–16px) soften the interface without appearing playful, reinforcing the professional-but-approachable positioning. Motion is conservative (100–500ms) with ease-in-out easing, avoiding distraction during the core task of recording and sharing video.

## 1. Visual Theme & Atmosphere

Loom presents as a **premium productivity tool with accessible warmth**. The light mode with navy text on soft blue backgrounds (#e9f2fe) creates an environment that feels professional yet inviting—the brand doesn't hide behind dark, intimidating interfaces. The measured color token for background (#e9f2fe) is notably a very pale blue rather than pure white, providing subtle visual separation and reducing eye strain during extended use (relevant for a product where users may review video recordings repeatedly).

The accent blue (#1868db) is vibrant enough to command attention on CTAs and interactive elements without clashing with the navy primary. This two-tone dark + blue approach is common in B2B SaaS but Loom's execution (with the pale blue background) feels deliberate and calming rather than corporate-sterile.

## 2. Color System

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| **Primary** | `primary` | #101214 | Text, navigation, foundational UI |
| **On Primary** | `on-primary` | #ffffff | Text/icons on dark backgrounds |
| **Background** | `background` | #e9f2fe | Page/section backgrounds |
| **Surface** | `surface` | #1868db | Interactive elements, buttons, accents |
| **Text** | `text` | #292a2e | Body copy (near-black, slightly softer than primary) |
| **Text Muted** | `text-muted` | #101214 | Secondary/disabled text (same as primary, likely a system override) |
| **Accent** | `accent` | #1868db | Highlights, links, focus states |

The color system is **minimal and purposeful**. Only three distinct hues are present (navy, white, and blue), with the same blue assigned to both `surface` and `accent`, suggesting button fills and link colors share identity. The proximity of `text` (#292a2e) to `primary` (#101214) indicates a subtle two-weight text system: deepest for headings/UI chrome, slightly lighter for body copy. This is a **high-contrast, accessible palette** that doesn't rely on color alone for information hierarchy—it leans on size, weight, and proximity.

## 3. Typography

**Display & Heading (Unified)**
- Family: Charlie Display
- Size: 57px
- Weight: 700 (bold)
- Line height: 1.03 (tight, heroic)

This size serves as both the display tier (hero sections like "One video is worth a thousand words") and structural heading tier, creating visual consistency. The 1.03 line height is notably tight—appropriate for a single-line or two-line headline, but would feel cramped on body text. Measured at 57px, this token scales well on mobile (where viewport is 375px) via responsive breakpoint adjustments.

**Body**
- Family: Charlie Text
- Size: 15px
- Weight: 400 (regular)
- Line height: 1.71 (generous)

A secondary typeface for body text is unusual in some design systems but smart here: Charlie Display's display-optimized metrics (tight lines, geometric proportions) don't serve paragraph text well. Charlie Text's 1.71 line height (roughly 25.65px leading) is spacious, supporting scannability and reducing cognitive load—critical for a product help/feature documentation. The 15px base is on the larger side, suggesting a design philosophy that prioritizes readability over information density.

No measured `small`, `caption`, or `label` tiers are provided, suggesting either:
- Additional typography scales exist but weren't measured
- Those roles inherit from `body` with CSS transforms
- UI labels use `body` size directly

## 4. Components & Patterns

Based on measured tokens, the component library likely includes:

- **Buttons**: Surface color (#1868db) fills, white text, rounded to `md` (8px), elevated shadow for hover/active states
- **Cards**: `card` shadow (a 4.34px border-like glow, unusual—possibly a measured artifact or design accent), `lg` radius (12px), light background
- **Navigation**: Primary (#101214) text on background (#e9f2fe), likely sticky or persistent
- **CTAs**: "Get Loom for free" / "Sign In"—expected to be high-contrast buttons using `surface` blue
- **Video Callouts**: Given the product is screen recording, likely hero images or embedded video with overlaid text using the display typography

The shadow system is **remarkably light**:
- `card`: Effectively a barely-visible border (4.34px stroke with 0 blur, 0% opacity)
- `elevated`: Layered blur (2px, 5px, 24px) with increasing opacity, creating depth for modals/popovers

This suggests a **flat-leaning aesthetic** that uses shadow sparingly—appropriate for a product focused on clarity and minimal visual noise.

## 5. Spacing & Layout

**Spacing Scale**: 1, 2, 5, 6, 8, 10, 12, 15, 16, 18 (px)

This is **not** a traditional 8px base system. The scale is custom, with irregular intervals:
- 1–2: Micro adjustments (hairline gaps)
- 2–5–6: Tight grouping (suggests 5 or 6 is the "small" step)
- 6–8–10–12: Medium range
- 12–15–16–18: Larger spacers

The presence of both 15 and 16 suggests either:
- A design system evolved from multiple sources (12px base + 8px base, now blended)
- Intentional pairing (15 for typography rhythm, 16 for UI components)

**Layout Implications**:
- 13 breakpoints spanning 375px (mobile) to 2884px (5K) indicate a **complex responsive system** with micro-adjustments at each tier
- No single "grid" token, but the scale supports 4-column mobile, 12-column desktop modular grids
- The 820px breakpoint is unusual (iPad landscape); suggests testing across a wide device matrix

**Radius Scale**: 6px (sm), 8px (md), 12px (lg), 16px (xl), 9999px (pill)

Consistent with the spacing philosophy: rounded but not ovoid. Components use `md` (buttons) and `lg` (cards/containers), establishing a clear visual hierarchy through border radius alone.

## 6. Motion & Interaction

**Timing**:
- `durationFastMs`: 100ms — micro-interactions (hover state changes, tooltip fades)
- `durationBaseMs`: 200ms — standard transitions (button presses, panel slides)
- `durationSlowMs`: 500ms — entrance animations, video playback starts

**Easing**: `ease-in-out` (cubic-bezier(0.4, 0, 0.2, 1) equivalent)

All transitions use a **single easing curve**, suggesting intentional design discipline: no bouncy easing, no linear fades. The ease-in-out curve feels natural and professional, accelerating into motion and decelerating on exit. With a measured 200ms base, interactions land around 2–3 frames on 60Hz displays—snappy without feeling jarring.

**No measured `easing` variants** (e.g., ease-out for exit, ease-in for entrance) suggests either simplicity by design or that the system uses a unified easing applied globally.

---

## Accessibility

### Contrast Ratios

**Text (#292a2e) on Background (#e9f2fe)**:
- Text: rgb(41, 42, 46) ≈ L* 20%
- Background: rgb(233, 242, 254) ≈ L* 95%
- **Contrast ratio: ~14:1** ✅ Exceeds WCAG AAA (7:1)

**Text (#101214) on Background (#e9f2fe)**:
- Text: rgb(16, 18, 20) ≈ L* 7%
- Background: rgb(233, 242, 254) ≈ L* 95%
- **Contrast ratio: ~18:1** ✅ Exceeds WCAG AAA

**White (#ffffff) on Surface (#1868db)**:
- Text: rgb(255, 255, 255) ≈ L* 100%
- Surface: rgb(24, 104, 219) ≈ L* 32%
- **Contrast ratio: ~12:1** ✅ Exceeds WCAG AAA

All measured color pairs exceed the AA standard (4.5:1) and approach AAA (7:1). The design prioritizes readability—no borderline contrast decisions.

### Minimum Requirements

**Touch Targets**: 
- Buttons and CTAs should measure minimum **44×44px** on mobile (375–820px breakpoints)
- Measured `durationFastMs` (100ms) suggests fast interaction feedback; ensure ripple/highlight appears ≤100ms on tap

**Focus Indicators**:
- Implement **2px solid outline** in accent color (#1868db) with **2px offset** (outline-offset: 2px)
- Test visibility on both light backgrounds (#e9f2fe) and dark surfaces (#101214)
- Apply to all interactive elements: links, buttons, form inputs, video controls

**Keyboard Navigation**:
- Ensure tab order follows visual hierarchy (CTAs before secondary text)
- Support arrow keys in video timeline and player controls (not measured, but standard expectation)

**Responsive Considerations**:
- At 375px (smallest breakpoint), ensure interactive elements don't crowd; respect 44px minimum
- Test focus indicators on all 13 breakpoints—outline-offset may need adjustment on high-DPI displays (2384px+)
