# KokonutUI Clone - Specification Document

> **Created**: 2026-02-08
> **Source URL**: https://kokonutui.com/docs/components/loader
> **Approach**: Clean-room rebuild based on visual and behavioral observation

---

## Table of Contents

1. [Route Inventory](#route-inventory)
2. [Shared UI Components](#shared-ui-components)
3. [Behavioral Notes](#behavioral-notes)
4. [Responsive Design Notes](#responsive-design-notes)
5. [Assets & Icons](#assets--icons)
6. [Component Page Template](#component-page-template)

---

## Route Inventory

### Get Started

| Page Name | URL | Description |
|-----------|-----|-------------|
| Installation | `/docs` | Getting started guide with initial setup instructions |

### Templates (Pro - External Links)

| Template Name | External URL | Badge |
|---------------|-------------|-------|
| Agenta | `https://kokonutui.pro/templates#agenta` | Pro |
| Lume | `https://kokonutui.pro/templates#lume` | Pro |
| Sonae | `https://kokonutui.pro/templates#sonae` | Pro |
| AI | `https://kokonutui.pro/templates#ai` | Pro |
| Futur | `https://kokonutui.pro/templates#futur` | Pro |
| Postly | `https://kokonutui.pro/templates#postly` | Pro |
| Startup | `https://kokonutui.pro/templates#startup` | Pro |

### Components

| Component Name | URL Slug | Description |
|----------------|----------|-------------|
| Slide Text Button | `/docs/components/slide-text-button` | NEW badge - Animated text sliding button |
| Loader | `/docs/components/loader` | Simple loading spinner with text |
| Liquid Glass | `/docs/components/liquid-glass-card` | Glassmorphism card effect |
| Action Search Bar | `/docs/components/action-search-bar` | Interactive search component |
| Apple Activity Card | `/docs/components/apple-activity-card` | Apple-style activity rings |
| Beams Background | `/docs/components/beams-background` | Animated beam effects |
| Background Paths | `/docs/components/background-paths` | SVG path animations |
| Morphic Navbar | `/docs/components/morphic-navbar` | Morphing navigation bar |
| Mouse Effect Card | `/docs/components/mouse-effect-card` | Mouse-following effects |
| Bento Grid | `/docs/components/bento-grid` | Grid layout component |
| Card Flip | `/docs/components/card` | Flip card animation |
| Stack | `/docs/components/card-stack` | Stacked cards component |
| Currency Transfer | `/docs/components/currency-transfer` | Currency animation demo |
| File Upload | `/docs/components/file-upload` | File upload interface |
| Profile Dropdown | `/docs/components/profile-dropdown` | User profile menu |
| Shapes Hero | `/docs/components/shape-hero` | Animated shape backgrounds |
| Toolbar | `/docs/components/toolbar` | Floating toolbar component |
| X Card | `/docs/components/tweet-card` | Tweet/X-style card |
| Team Selector | `/docs/components/team-selector` | Team selection UI |
| Smooth Tab | `/docs/components/smooth-tab` | Animated tab navigation |
| Smooth Drawer | `/docs/components/smooth-drawer` | Drawer component |

### AI Components

| Component Name | URL Slug | Description |
|----------------|----------|-------------|
| AI Input Selector | `/docs/components/ai-prompt` | AI prompt input with suggestions |
| AI Input Search | `/docs/components/ai-input-search` | AI-powered search interface |
| AI State Loading | `/docs/components/ai-loading` | AI processing state animations |
| AI Text Loading | `/docs/components/ai-text-loading` | AI text generation animation |
| AI Voice | `/docs/components/ai-voice` | Voice input visualization |

### Texts

| Component Name | URL Slug | Description |
|----------------|----------|-------------|
| Scroll Text | `/docs/components/scroll-text` | Scroll-triggered text animation |
| Typing Text | `/docs/components/typewriter` | Typewriter effect |
| Matrix Text | `/docs/components/matrix-text` | Matrix-style falling characters |
| Dynamic Text | `/docs/components/dynamic-text` | Animated text transitions |
| Glitch Text | `/docs/components/glitch-text` | Glitch/distortion effect |
| Shimmer Text | `/docs/components/shimmer-text` | Shimmer/shine animation |
| Sliced Text | `/docs/components/sliced-text` | Sliced character animation |
| Swoosh Text | `/docs/components/swoosh-text` | Swoosh motion effect |

### Buttons

| Component Name | URL Slug | Description |
|----------------|----------|-------------|
| Particle Button | `/docs/components/particle-button` | Click produces particle effects |
| V0 Button | `/docs/components/v0-button` | V0.dev-style button |
| Gradient Button | `/docs/components/gradient-button` | Animated gradient effects |
| Magnet Button | `/docs/components/attract-button` | Magnetic cursor attraction |
| Hold Button | `/docs/components/hold-button` | Hold-to-confirm interaction |
| Social Button | `/docs/components/social-button` | Social media styled buttons |
| Command Button | `/docs/components/command-button` | Command palette button |
| Switch Button | `/docs/components/switch-button` | Toggle switch button |

---

## Shared UI Components

### Global Shell

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `<Header />` | Top navigation bar | Logo, Search, Pro banner, Theme toggle |
| `<Sidebar />` | Left navigation | Collapsible, Section groups, Active state |
| `<SearchModal />` | Command palette search | ⌘K trigger, Backdrop blur, Arrow key nav |
| `<ThemeProvider />` | Theme management | Light/Dark/System modes, LocalStorage persistence |
| `<DocsLayout />` | Docs page wrapper | Sidebar + Content area layout |

### Header Components

| Element | Behavior |
|---------|----------|
| Logo | Links to `/`, displays "Kokonut UI" with coconut icon |
| Search Box | Shows "Search" placeholder + ⌘K hint, opens modal on click |
| Pro Banner | Promotional text linking to kokonutui.pro |
| Theme Toggle | 3-button group: Sun (light), Moon (dark), Monitor (system) |
| Sidebar Toggle | Hamburger icon that collapses/expands sidebar |

### Sidebar Structure

```
Sidebar
├── Vercel Badge (// 2025 OPEN SOURCE SOFTWARE PROGRAM)
├── Get Started
│   └── Installation
├── Templates (Pro)
│   ├── Agenta [Pro badge]
│   ├── Lume [Pro badge]
│   ├── Sonae [Pro badge]
│   ├── AI [Pro badge]
│   ├── Futur [Pro badge]
│   ├── Postly [Pro badge]
│   └── Startup [Pro badge]
├── Components
│   ├── Slide Text Button [New badge]
│   ├── Loader
│   └── ... (20 more components)
├── AI
│   └── ... (5 AI components)
├── Texts
│   └── ... (8 text components)
└── Buttons
    └── ... (8 button components)
```

---

## Behavioral Notes

### Theme Switching

- **Storage**: localStorage key `theme`
- **Values**: `light`, `dark`, `system`
- **Default**: `system` (follows OS preference)
- **Visual Changes**: Background colors, text colors, borders, code block backgrounds
- **Active Indicator**: The active theme button has a different background/highlight

### Search Modal (⌘K / Ctrl+K)

- **Trigger**: Click search box OR keyboard shortcut ⌘K (Mac) / Ctrl+K (Windows)
- **Appearance**: Centered modal with backdrop blur
- **Features**:
  - Text input with placeholder
  - ESC button/key to close
  - Results grouped by category
  - Arrow key navigation through results
  - Enter to select
- **Focus Trapping**: Focus stays within modal while open

### Copy to Clipboard

- **Location**: Each install command block has a "Copy" button
- **Behavior**: 
  1. Click "Copy" button
  2. Command copied to clipboard
  3. Button shows checkmark/tick icon or "Copied" text briefly
  4. Reverts to "Copy" after ~2 seconds

### Tab Switching (npm/bun/pnpm)

- **Storage**: May persist preference in localStorage
- **Behavior**:
  - `npm`: `npx shadcn@latest add @kokonutui/[component]`
  - `bun`: `bunx --bun shadcn@latest add @kokonutui/[component]`
  - `pnpm`: `pnpm dlx shadcn@latest add @kokonutui/[component]`
- **Active Tab**: Highlighted with different background/border

### Sidebar Persistence

- **Collapse State**: Persists across page navigations (likely via localStorage)
- **Scroll Position**: Maintains scroll position when navigating between pages
- **Active Link**: Current page highlighted with accent color/background

### Animations

- **Framework**: Framer Motion (indicated by "Motion" badge)
- **Types**:
  - Page transitions (subtle fade)
  - Hover effects on buttons and links
  - Component demo animations (loaders, text effects, etc.)
  - Modal open/close animations
- **Reduced Motion**: Should respect `prefers-reduced-motion`

---

## Responsive Design Notes

### Breakpoints (Estimated)

| Breakpoint | Description |
|------------|-------------|
| < 640px | Mobile - Sidebar becomes drawer, simplified header |
| 640px - 1024px | Tablet - Collapsible sidebar |
| > 1024px | Desktop - Full sidebar visible |

### Mobile Behavior

- Sidebar hidden by default
- Hamburger menu opens sidebar as overlay/drawer
- Search remains accessible via ⌘K or search button
- Content area takes full width

### Desktop Behavior

- Sidebar visible by default (collapsible)
- Fixed sidebar with scrollable content
- Wider demo preview areas

---

## Assets & Icons

### Logo

- **Text**: "Kokonut UI"
- **Icon**: Coconut emoji/icon (green coconut with leaf)
- **Recreation**: Use SVG or suitable font icon + custom styling

### Icons Required

| Icon | Usage | Source Suggestion |
|------|-------|-------------------|
| Coconut | Logo | Custom SVG or emoji 🥥 |
| Search/Magnifying Glass | Search box | Lucide `search` |
| Sun | Light theme | Lucide `sun` |
| Moon | Dark theme | Lucide `moon` |
| Monitor | System theme | Lucide `monitor` |
| Copy/Clipboard | Copy button | Lucide `copy` |
| Check | Copied confirmation | Lucide `check` |
| Sidebar toggle | Hamburger menu | Lucide `panel-left` |
| External Link | Pro links | Lucide `external-link` |
| Arrow Right | Navigation | Lucide `arrow-right` |
| V0 Arrow | "Open in v0" | Lucide `arrow-up-right` |

### Tech Stack Badges

- **Motion**: Indicates Framer Motion usage (shown at bottom of demos)
- **Pro**: Indicates premium content

---

## Component Page Template

### Structure

```
┌─────────────────────────────────────────┐
│ [Title]                                 │  <- h1, e.g., "Loader"
│ [Description]                           │  <- p, e.g., "Simple Loading"
├─────────────────────────────────────────┤
│ [npm] [bun] [pnpm]                      │  <- Tab switcher
│ ┌─────────────────────────────────────┐ │
│ │ npx shadcn@latest add @kokonutui/.. │ │  <- Command display
│ └─────────────────────────────────────┘ │
│                   [Open in v0] [Copy]   │  <- Action buttons
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │
│ │           [Demo Area]               │ │  <- Interactive preview
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                           [Motion]      │  <- Tech badge (optional)
└─────────────────────────────────────────┘
```

### Data Model (MDX Frontmatter)

```yaml
---
title: "Loader"
description: "Simple Loading"
slug: "loader"
category: "Components"
package: "@kokonutui/loader"
isNew: false
---
```

---

## Implementation Notes

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Primitives**: shadcn/ui
- **Animations**: Framer Motion
- **Content**: MDX with frontmatter
- **Icons**: Lucide React
- **Search**: Local index (no external API)

### Color Scheme (Observed)

**Dark Mode (Default):**
- Background: Near black (#0a0a0a or similar)
- Surface: Dark gray with subtle borders
- Text: White/light gray
- Accent: Green (for logo, active states)
- Borders: Subtle gray

**Light Mode:**
- Background: White/off-white
- Surface: Light gray
- Text: Black/dark gray
- Accent: Green (consistent)

### Typography

- **Font Family**: Geist, system fonts fallback
- **Headings**: Bold, larger sizes
- **Body**: Regular weight, good line height
- **Code**: Monospace font

---

## Next Steps

1. ✅ Complete SPEC.md (this document)
2. 🔲 Scaffold Next.js project with required dependencies
3. 🔲 Implement global shell (Header, Sidebar, Layout)
4. 🔲 Build Loader page with full feature parity
5. 🔲 Expand to all component pages
6. 🔲 Add search functionality
7. 🔲 Implement accessibility features
8. 🔲 Write tests
