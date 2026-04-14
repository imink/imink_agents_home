# Design System Inspired by Figma

## 1. Visual Theme & Atmosphere

Figma's interface is the design tool that designed itself — a masterclass in typographic sophistication where a custom variable font (figmaSans) modulates between razor-thin (weight 320) and bold (weight 700) with stops at unusual intermediates (330, 340, 450, 480, 540) that most type systems never explore. This granular weight control gives every text element a precisely calibrated visual weight, creating hierarchy through micro-differences rather than the blunt instrument of "regular vs bold."

The page presents a fascinating duality: the interface chrome is strictly black-and-white (literally only `#000000` and `#ffffff` detected as colors), while the hero section and product showcases explode with vibrant multi-color gradients — electric greens, bright yellows, deep purples, hot pinks. This separation means the design system itself is colorless, treating the product's colorful output as the hero content. Figma's marketing page is essentially a white gallery wall displaying colorful art.

What makes Figma distinctive beyond the variable font is its circle-and-pill geometry. Buttons use 50px radius (pill) or 50% (perfect circle for icon buttons), creating an organic, tool-palette-like feel. The dashed-outline focus indicator (`dashed 2px`) is a deliberate design choice that echoes selection handles in the Figma editor itself — the website's UI language references the product's UI language.

**Key Characteristics:**
- Custom variable font (figmaSans) with unusual weight stops: 320, 330, 340, 450, 480, 540, 700
- Strictly black-and-white interface chrome — color exists only in product content
- figmaMono for uppercase technical labels with wide letter-spacing
- Pill (50px) and circular (50%) button geometry
- Dashed focus outlines echoing Figma's editor selection handles
- Vibrant multi-color hero gradients (green, yellow, purple, pink)
- OpenType `"kern"` feature enabled globally
- Negative letter-spacing throughout — even body text at -0.14px to -0.26px

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): All text, all solid buttons, all borders. The sole "color" of the interface.
- **Pure White** (`#ffffff`): All backgrounds, white buttons, text on dark surfaces. The other half of the binary.

*Note: Figma's marketing site uses ONLY these two colors for its interface layer. All vibrant colors appear exclusively in product screenshots, hero gradients, and embedded content.*

### Surface & Background
- **Pure White** (`#ffffff`): Primary page background and card surfaces.
- **Glass Black** (`rgba(0, 0, 0, 0.08)`): Subtle dark overlay for secondary circular buttons and glass effects.
- **Glass White** (`rgba(255, 255, 255, 0.16)`): Frosted glass overlay for buttons on dark/colored surfaces.

### Gradient System
- **Hero Gradient**: A vibrant multi-stop gradient using electric green, bright yellow, deep purple, and hot pink. This gradient is the visual signature of the hero section — it represents the creative possibilities of the tool.
- **Product Section Gradients**: Individual product areas (Design, Dev Mode, Prototyping) may use distinct color themes in their showcases.

## 3. Typography Rules

### Font Family
- **Primary**: `figmaSans`, with fallbacks: `figmaSans Fallback, SF Pro Display, system-ui, helvetica`
- **Monospace / Labels**: `figmaMono`, with fallbacks: `figmaMono Fallback, SF Mono, menlo`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | figmaSans | 86px (5.38rem) | 400 | 1.00 (tight) | -1.72px | Maximum impact, extreme tracking |
| Section Heading | figmaSans | 64px (4rem) | 400 | 1.10 (tight) | -0.96px | Feature section titles |
| Sub-heading | figmaSans | 26px (1.63rem) | 540 | 1.35 | -0.26px | Emphasized section text |
| Sub-heading Light | figmaSans | 26px (1.63rem) | 340 | 1.35 | -0.26px | Light-weight section text |
| Feature Title | figmaSans | 24px (1.5rem) | 700 | 1.45 | normal | Bold card headings |
| Body Large | figmaSans | 20px (1.25rem) | 330–450 | 1.30–1.40 | -0.1px to -0.14px | Descriptions, intros |
| Body / Button | figmaSans | 16px (1rem) | 330–400 | 1.40–1.45 | -0.14px to normal | Standard body, nav, buttons |
| Body Light | figmaSans | 18px (1.13rem) | 320 | 1.45 | -0.26px to normal | Light-weight body text |
| Mono Label | figmaMono | 18px (1.13rem) | 400 | 1.30 (tight) | 0.54px | Uppercase section labels |
| Mono Small | figmaMono | 12px (0.75rem) | 400 | 1.00 (tight) | 0.6px | Uppercase tiny tags |

### Principles
- **Variable font precision**: figmaSans uses weights that most systems never touch — 320, 330, 340, 450, 480, 540. This creates hierarchy through subtle weight differences rather than dramatic jumps.
- **Light as the base**: Most body text uses 320–340 (lighter than typical 400 "regular"), creating an airy reading experience.
- **Kern everywhere**: Every text element enables OpenType `"kern"` feature.
- **Negative tracking by default**: Even body text uses -0.1px to -0.26px letter-spacing.
- **Mono for structure**: figmaMono in uppercase with positive letter-spacing creates technical signpost labels.
