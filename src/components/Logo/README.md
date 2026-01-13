# Logo Component

A flexible company logo component with support for multiple placeholder companies, styles, and variants.

## Features

- **35+ Placeholder Companies**: All design system placeholder logos included
- **Multiple Styles**: Standard and Badge variants
- **Dark Mode**: Automatic or manual dark mode support
- **Text Toggle**: Show or hide company name text
- **Flexible Sizing**: Predefined sizes or custom pixel values
- **Theme Integration**: Auto-detects dark mode from ThemeProvider

## Company Names

All available placeholder companies:

- 3Portal, 4DGreens, AcmeCorp, AlphaWave
- Bioshyft, Botthesis, BuildingBlocks, Capsule
- Catalog, Circooles, Cloudhub, Ephicient
- Featherdev, GlobalBank, Hourglass, Lightbox
- Lightcast, Logoipsum, Mirage, Nietzsche
- Nocturnal, Ohm, Polymath, Prototype
- Quotient, Reallinks, Scribble, Shift
- Sisyphus, Spherule, Stack3dLab, Visionwork
- VoxelLabs, Warpspeed, Watchtower, Wildcrafted

## Usage

### Basic Usage

```tsx
import { Logo } from '@boni/untitled-ui';

function Header() {
  return (
    <div>
      <Logo company="3Portal" />
    </div>
  );
}
```

### With Style Variants

```tsx
// Badge style
<Logo company="AlphaWave" style="badge" />

// Standard style (default)
<Logo company="Capsule" style="standard" />
```

### Dark Mode

```tsx
// Explicit dark mode
<Logo company="BuildingBlocks" darkMode={true} />

// Auto from theme (recommended)
<ThemeProvider>
  <Logo company="Lightbox" /> {/* Auto-detects theme mode */}
</ThemeProvider>
```

### Show/Hide Text

```tsx
// With text (default)
<Logo company="Sisyphus" showText={true} />

// Icon only
<Logo company="Prototype" showText={false} />
```

### Custom Sizing

```tsx
// Predefined sizes
<Logo company="Cloudhub" size="sm" />   {/* 80px wide */}
<Logo company="Ephicient" size="md" />  {/* 120px wide - default */}
<Logo company="Spherule" size="lg" />   {/* 160px wide */}
<Logo company="Watchtower" size="xl" /> {/* 200px wide */}

// Custom pixel value
<Logo company="Mirage" size={250} />
```

### All Props Combined

```tsx
<Logo
  company="VoxelLabs"
  style="badge"
  darkMode={false}
  showText={true}
  size="lg"
  className="my-custom-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `company` | `CompanyName` | Required | Company name to display |
| `style` | `'standard' \| 'badge'` | `'standard'` | Logo style variant |
| `darkMode` | `boolean` | Auto | Dark mode variant (auto-detects from theme) |
| `showText` | `boolean` | `true` | Show company name text |
| `size` | `number \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Logo size |
| `className` | `string` | `''` | Additional CSS classes |

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { LogoProps, CompanyName, LogoStyle } from '@boni/untitled-ui';

const companies: CompanyName[] = ['3Portal', 'AlphaWave', 'Capsule'];
const style: LogoStyle = 'badge';
```

## Accessibility

- Includes screen-reader only company name text
- Proper alt text for images
- Keyboard accessible

## Notes

- All logos are placeholder designs from the Untitled UI design system
- Perfect for prototypes, demos, and mockups
- Logos are loaded from a single SVG sprite for optimal performance
