# Badge Component

Labels that categorize or organize items using keywords that describe them.

## Features

- **12 Colors**: Gray, Brand, Error, Warning, Success, and 6 utility colors
- **3 Sizes**: sm, md, lg
- **2 Shapes**: Badge (default) and Pill (fully rounded)
- **Icons**: Support for leading icons
- **Dismissible**: Built-in close button support
- **Dot status**: Optional status dot
- **Interactive**: Supports click handlers
- **BadgeGroup**: Wrapper for consistent spacing

## Basic Usage

```tsx
import { Badge, BadgeGroup } from '@boni/untitled-ui';

<Badge>Label</Badge>
```

## Variants

### Colors

```tsx
<BadgeGroup>
  <Badge color="gray">Gray</Badge>
  <Badge color="brand">Brand</Badge>
  <Badge color="error">Error</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="blue">Blue</Badge>
  <Badge color="indigo">Indigo</Badge>
  <Badge color="purple">Purple</Badge>
  <Badge color="pink">Pink</Badge>
  <Badge color="orange">Orange</Badge>
</BadgeGroup>
```

### Sizes

```tsx
<BadgeGroup>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</BadgeGroup>
```

### Shapes

```tsx
<BadgeGroup>
  <Badge type="badge">Default</Badge>
  <Badge type="pill">Pill</Badge>
</BadgeGroup>
```

## Features

### With Icon

```tsx
<Badge icon="check">Verified</Badge>
<Badge icon="alert-circle" color="error">Error</Badge>
<Badge icon="star" color="brand" type="pill">New</Badge>
```

### With Dot

```tsx
<Badge dot color="success">Online</Badge>
<Badge dot color="warning">Away</Badge>
<Badge dot color="error">Busy</Badge>
```

### Dismissible

```tsx
<Badge onDismiss={() => console.log('Dismissed')}>
  Removable
</Badge>
```

## Props

### Badge

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Badge content |
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Badge size |
| `color` | `BadgeColor` | `'gray'` | Color variant |
| `type` | `'badge' \| 'pill'` | `'badge'` | Shape style |
| `icon` | `string` | - | Leading icon name |
| `dot` | `boolean` | `false` | Show status dot |
| `onDismiss` | `() => void` | - | Close handler |
| `onClick` | `() => void` | - | Click handler |

### BadgeGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Badge components |
| `fullWidth` | `boolean` | `false` | Full width container |

## Design System

Badges use the design token system:
- **Colors**: Mapped from `tokens/colors.ts` (utility & semantic)
- **Radius**: Uses `radius.md` (6px) and `radius.full`
- **Typography**: Uses medium weight font
- **Spacing**: Consistent padding based on size

## Accessibility

- ✅ Interactive badges receive proper cursor
- ✅ Dismiss button has `aria-label`
- ✅ Uses semantic colors accessible in both light and dark modes

## Examples

### Status Indicators

```tsx
<BadgeGroup>
  <Badge dot color="success" size="sm">Active</Badge>
  <Badge dot color="gray" size="sm">Inactive</Badge>
</BadgeGroup>
```

### Filters

```tsx
<BadgeGroup>
  <Badge type="pill" onDismiss={() => {}}>React</Badge>
  <Badge type="pill" onDismiss={() => {}}>TypeScript</Badge>
  <Badge type="pill" onDismiss={() => {}}>Design System</Badge>
</BadgeGroup>
```

### Feature Tags

```tsx
<div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
  <h3>New Dashboard</h3>
  <Badge color="brand" type="pill">New</Badge>
  <Badge color="indigo">Beta</Badge>
</div>
```
