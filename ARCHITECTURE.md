# Architecture

This document outlines the technical architecture and key decisions made in the Kokonut UI Clone project.

## Overview

The project is built as a Next.js 14 application using the App Router, with a focus on:
- Type safety (TypeScript)
- Performance (static generation, code splitting)
- Developer experience (hot reloading, clear structure)
- Accessibility (ARIA labels, keyboard navigation, focus management)

## Folder Structure Rationale

### `/src/app`
Next.js App Router pages. Each route maps to a file system path:
- `/docs` → Installation page
- `/docs/components/[slug]` → Dynamic component pages

### `/src/components`
Organized by purpose:
- `demos/` - Interactive component demonstrations
- `layout/` - Global shell components (Header, Sidebar, DocsLayout)
- `ui/` - Reusable UI primitives (buttons, tabs, modals)

### `/src/lib`
Shared utilities and configuration:
- `utils.ts` - Helper functions (cn, copyToClipboard)
- `constants.ts` - Navigation data, component metadata

### `/docs/spec`
Documentation and specifications for the project.

## Key Technical Decisions

### 1. Static Generation for Component Pages

```typescript
export async function generateStaticParams() {
  return Object.keys(COMPONENT_DATA).map((slug) => ({ slug }));
}
```

All component pages are statically generated at build time for optimal performance.

### 2. Theme Management

Using `next-themes` for:
- SSR-safe theme detection
- System preference detection
- localStorage persistence
- Flash prevention

### 3. Search Implementation

Local client-side search that:
- Indexes all components at runtime
- Supports keyboard navigation (↑/↓/Enter)
- Groups results by category
- Uses portal rendering for proper z-index

### 4. Animation Strategy

Framer Motion is used consistently with:
- `motion` components for declarative animations
- `AnimatePresence` for exit animations
- Layout animations for smooth transitions
- Reduced motion respect via CSS media query

### 5. Component Data Model

Central data store in `constants.ts`:
```typescript
export const COMPONENT_DATA: Record<string, {
  title: string;
  description: string;
  package: string;
  category: string;
  isNew?: boolean;
}> = { ... };
```

This enables:
- Type-safe component lookups
- Easy metadata generation
- Centralized updates

## State Management

No global state library needed. State is managed via:
- React Context (ThemeProvider)
- localStorage (sidebar, theme preferences)
- URL state (current route)
- Component state (search, tabs)

## Performance Optimizations

1. **Code Splitting**: Dynamic imports for heavy demo components
2. **Static Generation**: All pages pre-rendered at build time
3. **Image Optimization**: Next.js Image component (when applicable)
4. **Font Optimization**: Geist fonts with variable font loading
5. **CSS**: Tailwind's JIT compiler for minimal CSS bundle

## Accessibility Considerations

- ARIA labels on interactive elements
- Focus visible styles
- Skip to content link (planned)
- Keyboard navigation throughout
- Reduced motion support
- Semantic HTML structure
- Color contrast compliance
