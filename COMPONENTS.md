# Components Catalog

This document lists all UI components used in the project, their props, and usage patterns.

## Layout Components

### `<Header />`

Top navigation bar with logo, search, and theme toggle.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `onToggleSidebar` | `() => void` | Callback to toggle sidebar visibility |

**Usage:**
```tsx
<Header onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
```

---

### `<Sidebar />`

Collapsible left navigation with all component links.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Whether sidebar is visible |
| `onClose` | `() => void` | Callback when backdrop is clicked (mobile) |

**Usage:**
```tsx
<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
```

---

### `<DocsLayout />`

Wrapper for documentation pages with Header and Sidebar.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Page content |

**Usage:**
```tsx
<DocsLayout>
  <ComponentPage {...props} />
</DocsLayout>
```

---

## UI Components

### `<ThemeToggle />`

Three-button toggle for light/dark/system theme.

**Props:** None

**Usage:**
```tsx
<ThemeToggle />
```

---

### `<SearchModal />`

Command palette-style search with keyboard navigation.

**Props:** None (self-contained with portal)

**Features:**
- ⌘K / Ctrl+K trigger
- Arrow key navigation
- Category grouping
- ESC to close

**Usage:**
```tsx
<SearchModal />
```

---

### `<InstallCommand />`

Package manager tabs with install command and copy button.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `packageName` | `string` | NPM package name (e.g., `@kokonutui/loader`) |

**Usage:**
```tsx
<InstallCommand packageName="@kokonutui/loader" />
```

---

### `<ComponentPage />`

Template for component documentation pages.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Component name |
| `description` | `string` | Short description |
| `children` | `ReactNode` | Demo content |
| `installSection` | `ReactNode` | Install command section |
| `techBadge` | `string?` | Optional tech badge (e.g., "Motion") |

**Usage:**
```tsx
<ComponentPage
  title="Loader"
  description="Simple Loading"
  installSection={<InstallCommand packageName="@kokonutui/loader" />}
  techBadge="Motion"
>
  <LoaderDemo />
</ComponentPage>
```

---

## Demo Components

### `<LoaderDemo />`

Animated loading spinner with text.

### `<ParticleButtonDemo />`

Button with click-triggered particle explosion.

### `<GlitchTextDemo />`

Text with glitch effect animation.

### `<MatrixTextDemo />`

Canvas-based matrix falling characters.

### `<ShimmerTextDemo />`

Text with animated shimmer gradient.

### `<TypewriterDemo />`

Typewriter effect cycling through phrases.

---

## Provider Components

### `<ThemeProvider />`

Wraps the app to provide theme context.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `attribute` | `"class" | "data-theme"` | `"class"` | HTML attribute for theme |
| `defaultTheme` | `string` | `"system"` | Default theme |
| `enableSystem` | `boolean` | `true` | Enable system theme detection |
| `disableTransitionOnChange` | `boolean` | `false` | Disable transitions on theme change |

**Usage:**
```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```
