---
name: CyberWatch
colors:
  surface: '#0c1322'
  surface-dim: '#0c1322'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1d'
  surface-container-low: '#141b2b'
  surface-container: '#191f2f'
  surface-container-high: '#232a3a'
  surface-container-highest: '#2e3545'
  on-surface: '#dce2f7'
  on-surface-variant: '#bac9cc'
  inverse-surface: '#dce2f7'
  inverse-on-surface: '#293040'
  outline: '#849396'
  outline-variant: '#3b494c'
  surface-tint: '#00daf3'
  primary: '#c3f5ff'
  on-primary: '#00363d'
  primary-container: '#00e5ff'
  on-primary-container: '#00626e'
  inverse-primary: '#006875'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#edeaff'
  on-tertiary: '#1000a9'
  tertiary-container: '#ccccff'
  on-tertiary-container: '#4344d1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#9cf0ff'
  primary-fixed-dim: '#00daf3'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0c1322'
  on-background: '#dce2f7'
  surface-variant: '#2e3545'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  mono-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 40px
  gutter: 20px
---

## Brand & Style
The brand personality is authoritative, vigilant, and high-fidelity. It targets Security Operations Center (SOC) analysts and C-suite executives who require precision and clarity under pressure. The design system evokes a sense of "calm control" through a sophisticated, dark-mode-first aesthetic.

The style is **Modern Corporate with Glassmorphism**. It utilizes semi-transparent layers and background blurs to create a sense of depth without visual clutter. The interface avoids "hacker" tropes in favor of aerospace-grade precision—relying on clean lines, micro-interactions, and a structured information hierarchy that feels both futuristic and dependable.

## Colors
The palette is rooted in a deep, nocturnal foundation to reduce eye strain during long monitoring shifts. 

- **Primary (Cyan):** Used for critical actions, active states, and "safe" status indicators. It provides a high-contrast focal point against the dark background.
- **Secondary (Blue):** Used for informational data points, secondary actions, and progress indicators.
- **Surface Strategy:** The UI uses a "Depth-First" color logic. The base background is the darkest (#0B1020). Cards and containers use a semi-transparent dark grey (#111827 at 70% opacity) with a subtle `backdrop-filter: blur(12px)`.
- **Semantic Colors:** 
    - Critical: #FF4D4D (Red)
    - Warning: #F59E0B (Amber)
    - Success: #10B981 (Emerald)

## Typography
The typography system prioritizes legibility of technical data. 

- **Hanken Grotesk** is used for headlines to provide a sharp, contemporary professional look. 
- **Inter** handles the bulk of the UI for its exceptional readability in dense layouts. 
- **Geist** (a technical sans) is used for labels and status badges to evoke a "developer-centric" precision. 

For mobile, `headline-xl` should scale down to 30px to prevent awkward line breaks in dashboard titles. All data values (IP addresses, hashes, timestamps) should utilize the `mono-sm` token to ensure character alignment.

## Layout & Spacing
The design system employs a **12-column fluid grid** for the main dashboard content. 

- **Sidebar:** A fixed 260px navigation sidebar on the left.
- **Rhythm:** An 8px linear scaling system is used for component internal padding, while a 4px system is used for tight data visualizations.
- **Margins:** Desktop views use 40px outer margins to provide "breathing room" for the glass elements. 
- **Responsive:** On tablet (768px - 1024px), the sidebar collapses to icons only (64px). On mobile (<768px), the grid transitions to a single-column stacked layout with 16px margins.

## Elevation & Depth
Depth is created through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

- **Level 1 (Background):** Solid #0B1020.
- **Level 2 (Dashboard Cards):** #111827 at 70% opacity, 1px solid white border at 10% opacity, and 12px backdrop blur.
- **Level 3 (Modals/Popovers):** #1F2937 at 90% opacity, 1px solid primary cyan at 20% opacity, with a subtle 24px ambient glow shadow (#000000 at 40%).

Hover states on cards should increase the border opacity from 10% to 30% and add a very subtle cyan inner-glow to suggest interactivity.

## Shapes
The shape language is **Soft and Precise**. 

A base radius of 4px (`roundedness: 1`) is used for smaller components like input fields and buttons to maintain a professional, architectural feel. Larger containers and dashboard cards use `rounded-lg` (8px) to soften the overall density of the data-heavy screens. Circular shapes are reserved strictly for status pips and user avatars.

## Components
- **Buttons:** Primary buttons use a solid Cyan (#00E5FF) with black text for maximum contrast. Secondary buttons use a "ghost" style with a 1px Blue (#3B82F6) border and subtle blue background hover.
- **Glass Cards:** Must include a `1px` top-heavy gradient border to simulate a light source from above. This reinforces the premium, tactile feel.
- **Severity Badges:** Pills with low-opacity backgrounds and high-intensity text colors (e.g., Critical = 10% Red background, 100% Red text).
- **Data Charts:** Use thin line weights (1.5px) for sparklines. Gradients should flow from the primary/secondary colors down into transparency.
- **Inputs:** Darker than the card surface (#030712) with a 1px border. The focus state uses a Cyan outer glow (2px spread).
- **Navigation:** Vertical navigation uses a "high-light" indicator: a 2px vertical Cyan line on the left side of the active menu item.