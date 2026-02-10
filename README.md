# Kokonut UI Clone

A production-grade clone of the [KokonutUI](https://kokonutui.com) documentation website, built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
kokonutui-clone/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── docs/               # Documentation pages
│   │   │   ├── components/     # Dynamic component pages
│   │   │   │   └── [slug]/     # Component detail pages
│   │   │   ├── layout.tsx      # Docs layout wrapper
│   │   │   └── page.tsx        # Installation page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout with ThemeProvider
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── demos/              # Component demo implementations
│   │   ├── layout/             # Header, Sidebar, DocsLayout
│   │   └── ui/                 # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utilities and constants
├── docs/
│   └── spec/
│       └── SPEC.md             # Full specification document
├── public/                     # Static assets
└── README.md                   # This file
```

## 🎨 Features

### Implemented

- ✅ **Global Shell**: Header with logo, search, theme toggle
- ✅ **Sidebar Navigation**: All component categories with badges
- ✅ **Theme Switching**: Light/Dark/System modes with persistence
- ✅ **Search Modal**: ⌘K trigger, keyboard navigation, category grouping
- ✅ **Install Commands**: npm/bun/pnpm tabs with copy button
- ✅ **Component Pages**: Dynamic routing for all 40+ components
- ✅ **Demo Components**: Loader, Particle Button, Glitch Text, Matrix Text, Shimmer Text, Typewriter
- ✅ **Responsive Design**: Mobile sidebar drawer, adaptive layouts

### Coming Soon

- 🔲 All component demos
- 🔲 MDX content pipeline
- 🔲 Full test suite
- 🔲 Accessibility audit

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📖 Documentation

- [SPEC.md](./docs/spec/SPEC.md) - Full specification with route inventory, behaviors, and design notes
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture decisions
- [ROUTES.md](./ROUTES.md) - Route mapping and purposes
- [COMPONENTS.md](./COMPONENTS.md) - Component catalog with props

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run ESLint
npm run lint

# Run all tests (when implemented)
npm test
```

## 📝 License

This is a clean-room implementation for educational purposes. No proprietary code was used.
