# Design Guidelines: Naiper's Club Perfume Quiz

## Design Approach

**Selected Approach:** Custom conversion-focused quiz funnel inspired by modern lead generation platforms like TypeForm and Quiz Funnel templates, with luxury perfume club branding.

**Core Principles:**
- High-contrast luxury aesthetic (pure black #000000 background, bright yellow #FFD700 accents)
- Progressive disclosure - one question per screen
- Clear value proposition at each stage
- Strong call-to-action driving toward membership offer

## Typography System

**Font Family:**
- Primary: "Poppins" (Google Fonts) - weights 400, 600, 700, 800
- Secondary: "Inter" (Google Fonts) - weights 400, 500

**Type Scale:**
- Welcome Headlines: 3xl to 5xl, weight-800
- Question Titles: 2xl to 4xl, weight-700
- Answer Options: base to lg, weight-600
- Body Text: sm to base, weight-400
- Progress Labels: xs to sm, weight-500, uppercase, tracking-wider

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16

**Container Strategy:**
- Quiz screens: max-w-2xl centered
- Welcome/Results: max-w-4xl for wider impact
- Consistent px-6 mobile, px-8 desktop
- Vertical spacing: py-8 to py-16

## Component Library

### Welcome Screen
- Logo/brand name at top (white, weight-700)
- Large headline: "Descubra Seu Caminho no Mundo dos Perfumes Importados"
- Two large choice cards side-by-side (desktop) or stacked (mobile):
  - Card 1: "Economizar até 70%"
  - Card 2: "Gerar Renda Extra"
- Each card: rounded-2xl, border-2 border-yellow-400, bg-white/5, p-8, hover:bg-yellow-500/10
- Icons: Large emoji or Font Awesome icons (💰 💸)
- CTA inside each card: "Escolher Este Caminho"

### Progress Bar System
- Fixed width bar at top of screen
- Container: h-3, bg-white/10, rounded-full
- Fill: bg-gradient-to-r from-yellow-400 to-yellow-500, rounded-full
- Label above: "Pergunta X de 5" - text-yellow-400, text-sm, weight-600
- Show percentage: 20%, 40%, 60%, 80%, 100%

### Question Screens
- Question number badge: Small circle, bg-yellow-500, text-black, "1", weight-700, w-12 h-12, centered number
- Question text: Large, white, weight-700, text-center, mb-12
- Subtext (if needed): text-white/70, text-sm, text-center, mb-8

### Answer Options Layout
**Single-Select Cards:**
- Vertical stack, gap-4
- Full-width cards (w-full)
- Rounded-xl, border-2 border-white/20
- Padding: p-6
- Background: bg-white/5
- Text: white, text-lg, weight-600
- Hover: border-yellow-400, bg-white/10, transform scale-102
- Selected: border-yellow-400 border-3, bg-yellow-500/15
- Radio circle indicator on left side

**Multi-Select Cards (Benefits Question):**
- Grid layout: grid-cols-1 md:grid-cols-2, gap-4
- Checkbox square indicator on left
- Same styling as single-select
- Selected state: checkmark icon appears in checkbox

### Navigation Buttons
**Primary (Next/Continue):**
- bg-gradient-to-r from-yellow-400 to-yellow-500
- text-black, text-lg, weight-700, uppercase
- px-12 py-4, rounded-xl
- Full-width mobile, centered desktop (max-w-sm)
- shadow-xl shadow-yellow-500/20
- Disabled state: opacity-50, cursor-not-allowed

**Back Button:**
- text-white/60, text-sm, weight-500
- No border, transparent background
- Positioned top-left, absolute
- Hover: text-white

### Video Testimonials Section (Question 4)
- Grid of WhatsApp-style testimonial cards
- Each card: rounded-2xl, bg-white/5, p-6
- Profile image placeholder: circular, w-16 h-16, bg-yellow-500/20
- Name: weight-600, white
- Message preview: text-white/70, text-sm
- "Play" icon overlay: Yellow circle with white triangle
- Layout: grid-cols-1 md:grid-cols-2, gap-6

### Results Screen
- Large animated circle progress indicator (center)
- Inner text: "CHANCE ALTA" in yellow, text-4xl, weight-800
- Subtitle: "de poupar e lucrar com perfumes importados"
- Percentage display: "85%" in large yellow numbers
- Breakdown section below with icons showing selected answers
- Primary CTA: "Ver Minha Oferta Exclusiva" (yellow button)

### Final Offer Screen ("Veja a Transformação")
**Two-Column Comparison:**
- Left column: "ANTES" (red accent, cross icons)
  - List negative points about buying from competitors
  - Icons: red circles with white X
  
- Right column: "DEPOIS" (yellow accent, checkmarks)
  - List benefits of Naiper's Club membership
  - Icons: yellow circles with white checks

**Price Display:**
- Crossed-out original price: text-white/40, line-through
- Current price: text-6xl, text-yellow-400, weight-900
- "R$ 52,37" prominent
- Payment info: "ou 12x de R$ 4,36"

**CTA Button:**
- Massive yellow button: "GARANTIR MINHA VAGA NO CLUBE"
- py-6, text-xl, weight-800
- Pulsing animation (animate-pulse applied sparingly)

## Visual Enhancements

**Background Treatment:**
- Solid black (#000000)
- Subtle radial gradient overlay from center: from-yellow-500/5 to-transparent
- Optional: tiny yellow dots pattern (opacity-5) for texture

**Animations:**
- Progress bar: smooth width transition (duration-500)
- Card selection: scale and border color (duration-200)
- Screen transitions: fade-in on mount (opacity-0 to opacity-100, duration-300)
- Results circle: animated stroke-dashoffset for percentage fill

**Glow Effects:**
- Yellow buttons: shadow-yellow-500/30
- Selected cards: subtle yellow glow (shadow-lg shadow-yellow-400/20)

## Images

**No Large Hero Images**

**Small Icons/Graphics:**
- Logo at top of welcome screen (white/yellow)
- Emoji or simple icons for choice cards
- Profile picture placeholders for testimonials (circular, bg-yellow-500/20)
- Before/After comparison icons (X marks and checkmarks)

**Reasoning:** Quiz funnels prioritize immediate engagement and rapid progression. Focus on typography and clear choices rather than imagery.

## Accessibility

- High contrast: white text on black, yellow for accents only
- Focus states: ring-2 ring-yellow-400 on all interactive elements
- Keyboard navigation: Tab through options, Space to select
- ARIA labels for progress bar percentage
- Screen reader announcements on question changes

## Responsive Behavior

**Mobile (< 768px):**
- Single column for all layouts
- Full-width buttons and cards
- Stacked choice cards on welcome screen
- Reduced font sizes (scale down one step)
- Progress bar text above bar

**Desktop (>= 768px):**
- Two-column grid for benefits selection
- Side-by-side choice cards on welcome
- Before/After comparison in two columns
- Larger typography throughout
- Centered max-width containers

## Critical Flow Structure

1. **Welcome Screen** → Choice selection
2. **Question 1** (20%) → Where did you buy perfumes?
3. **Question 2** (40%) → Experience with reselling?
4. **Question 3** (60%) → Select desired benefits (multi-select)
5. **Question 4** (80%) → Video testimonials
6. **Question 5** (100%) → Results screen with high probability
7. **Final Offer** → Before/After comparison with price and CTA