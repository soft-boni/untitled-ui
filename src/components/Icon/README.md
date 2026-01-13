# Icon Component

A dynamic icon system that automatically loads SVG icons from your icon library.

## Features

- **4 Icon Types**: Outline (Line), Solid, Duotone, Duocolor
- **Automatic Discovery**: Just add SVG files to the folders - they work automatically
- **334+ Icons Available**: Currently includes 334 outline icons (Arrows, Charts, General)
- **TypeScript Autocomplete**: Auto-generated icon name types
- **Flexible Sizing**: Predefined or custom px values
- **Color Customization**: Any CSS color or design tokens
- **Accessibility**: Built-in ARIA labels

## How It Works

### 🎯 Automatic System

```bash
# 1. Add SVG files to Assets/Icons/
Assets/Icons/
├── Outline Icons/
│   ├── Arrows/
│   ├── Charts/
│   └── General/
├── Solid Icons/
├── Duotone Icons/
└── Duocolor Icons/

# 2. Run the build script (or just build the package)
npm run build:icons

# 3. Icons are automatically processed and ready to use!
```

The build script:
- ✅ Finds all SVGs in any subfolder
- ✅ Copies them to `public/icons/`
- ✅ Creates a manifest.json
- ✅ Generates TypeScript types with autocomplete

## Usage

### Basic Icon

```tsx
import { Icon } from '@boni/untitled-ui';

<Icon name="arrow-right" />
```

### Icon Types

```tsx
// Outline/Line icons (default)
<Icon name="check-circle" type="outline" />

// Solid icons
<Icon name="heart" type="solid" />

// Duotone icons
<Icon name="home" type="duotone" />

// Duocolor icons
<Icon name="star" type="duocolor" />
```

### Sizes

```tsx
// Predefined sizes
<Icon name="settings" size="xs" />  {/* 16px */}
<Icon name="settings" size="sm" />  {/* 20px */}
<Icon name="settings" size="md" />  {/* 24px - default */}
<Icon name="settings" size="lg" />  {/* 32px */}
<Icon name="settings" size="xl" />  {/* 48px */}

// Custom size in pixels
<Icon name="settings" size={64} />
```

### Colors

```tsx
import { primitiveColors } from '@boni/untitled-ui';

// CSS color
<Icon name="trash" color="#FF0000" />

// Design token
<Icon name="heart" color={primitiveColors.error[600]} />

// Current text color (default)
<Icon name="info" color="currentColor" />
```

### Interactive Icons

```tsx
<Icon 
  name="trash" 
  onClick={() => handleDelete()} 
  label="Delete item"
/>
```

### All Props

```tsx
<Icon
  name="arrow-right"
  type="outline"
  size="lg"
  color="#7F56D9"
  className="custom-icon"
  onClick={handleClick}
  label="Navigate forward"
/>
```

## Adding New Icons

### Step 1: Add SVG Files

Place your SVG files in the appropriate folder:

```
Assets/Icons/
├── Outline Icons/
│   ├── Arrows/
│   │   └── your-new-icon.svg  ← Add here
│   └── YourCategory/
│       └── another-icon.svg   ← Or create new category
├── Solid Icons/
│   └── YourCategory/
│       └── solid-icon.svg     ← Add solid variants
└── ...
```

**Naming Convention**: Use kebab-case (e.g., `arrow-right.svg`, `check-circle.svg`)

### Step 2: Build Icons

```bash
# Build icons only
npm run build:icons

# Or build everything (icons + package)
npm run build
```

### Step 3: Use Immediately

```tsx
<Icon name="your-new-icon" />
```

That's it! The icon is automatically available with TypeScript autocomplete.

## Available Icons (334+)

Currently available categories:

### Arrows (92 icons)
- arrow-right, arrow-left, arrow-up, arrow-down
- arrow-circle-*, arrow-square-*, arrow-narrow-*
- chevron-*, arrows-triangle, etc.

### Charts (49 icons)
- bar-chart, line-chart, pie-chart
- trend-up, trend-down, analytics
- etc.

### General (193 icons)
- check, close, plus, minus
- settings, search, filter
- user, mail, phone
- etc.

**More coming!** Icons are automatically discovered when you add them.

## TypeScript Support

Auto-generated types for all icons:

```typescript
import type { IconName } from '@boni/untitled-ui/components/Icon/icon-names';

// IconName = 'arrow-right' | 'check-circle' | ... (all 334+ names)
const iconName: IconName = 'arrow-right'; // Autocomplete works!
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | Required | Icon name (kebab-case) |
| `type` | `'outline' \| 'solid' \| 'duotone' \| 'duocolor'` | `'outline'` | Icon variant type |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'` | Icon size |
| `color` | `string` | `'currentColor'` | Icon color (CSS or token) |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `() => void` | - | Click handler |
| `label` | `string` | Icon name | ARIA label |

## Build Scripts

```bash
# Process icons from Assets/Icons to public/icons
npm run build:icons

# Build package only
npm run build:package

# Build everything (icons + package)
npm run build
```

## File Structure

```
Assets/Icons/              # Source SVG files
├── Outline Icons/
├── Solid Icons/
├── Duotone Icons/
└── Duocolor Icons/

public/icons/              # Processed icons (auto-generated)
├── outline/
│   ├── arrow-right.svg
│   └── ...
├── solid/
├── duotone/
├── duocolor/
└── manifest.json          # Icon metadata

src/components/Icon/
├── Icon.tsx               # Component
├── Icon.css               # Styles
├── icon-names.ts          # Auto-generated types
└── README.md              # This file
```

## Accessibility

- Includes `aria-label` for screen readers
- Clickable icons have `role="button"`
- Keyboard accessible with `tabIndex`
- Focus styles included

## Common Patterns

### Icon Button

```tsx
<button className="icon-button">
  <Icon name="trash" size="sm" color="#999" />
  <span>Delete</span>
</button>
```

### Icon with Text

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Icon name="check-circle" size="sm" color="green" />
  <span>Completed</span>
</div>
```

### Dynamic Icons

```tsx
const icons = ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'];

{icons.map(name => (
  <Icon key={name} name={name} size="lg" />
))}
```

---

**🎉 The icon system is fully automatic!** Just add SVG files to `Assets/Icons/` and run `npm run build:icons` - they're instantly usable with full TypeScript support.
