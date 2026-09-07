Please refactor and upgrade the entire UI of this project to match the Google Material 3 / Google About & Stories design system specified below:

1. TYPOGRAPHY:
   - Replace all heading fonts with 'Google Sans Display' or 'Google Sans' (weights: 500, 700).
   - Replace body fonts with 'Google Sans Text' or 'Inter' (size: 16px, line-height: 1.5, color: #5f6368 / #202124).
   - Add the Google Fonts import tag to index.html.

2. COLORS & SURFACES:
   - Primary Accent: #1a73e8 (Google Blue), hover: #1557b0, light tonal container: #e8f0fe.
   - Status Accents: #ea4335 (Red), #fbbc04 (Yellow), #34a853 (Green).
   - Neutral Surfaces: Base #ffffff, cards #f8fafd or clean white with #dadce0 border, dark text #202124.

3. GEOMETRY & RADIUS:
   - Turn all primary and secondary action buttons into pills: border-radius: 9999px with 12px 26px padding.
   - Set card borders to border-radius: 20px or 24px with dual-layer ambient shadows (0 1px 3px rgba(60,64,67,0.3)).
   - Turn badges, filter tags, and chips into rounded pills (radius: 9999px).

4. HEADER & NAVIGATION:
   - Sticky navbar with semi-transparent white background: rgba(255,255,255,0.92) with backdrop-filter: blur(12px).
   - Pill-shaped active navigation links with #e8f0fe background and #1a73e8 text.

5. MICRO-INTERACTIONS:
   - Add hover lift transitions to cards: transform: translateY(-4px); box-shadow: 0 12px 32px rgba(32,33,36,0.12).
   - Use transition timing: 0.3s cubic-bezier(0.4, 0.0, 0.2, 1).


