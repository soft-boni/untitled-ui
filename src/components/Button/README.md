# Button Component

A comprehensive button component with multiple hierarchies, sizes, states, and icon support.

## Features

- **6 Sizes**: 2xl, xl, lg, md, sm, xs
- **5 Hierarchies**: Primary, Secondary, Tertiary, Link color, Link gray
- **States**: Default, Hover, Focused, Disabled, Loading
- **Destructive Variant**: For delete/remove actions
- **Icon Support**: Left, right, or icon-only
- **Loading State**: Built-in loading spinner
- **Dark Mode**: Full dark mode support
- **Accessibility**: Keyboard navigation, focus states, ARIA labels

## Button Hierarchies

### Primary
Bold, high-emphasis actions.
```tsx
<Button>Primary Button</Button>
<Button hierarchy="primary">Click me</Button>
```

### Secondary  
Medium-emphasis actions with outline.
```tsx
<Button hierarchy="secondary">Secondary</Button>
```

### Tertiary
Low-emphasis, ghost-style buttons.
```tsx
<Button hierarchy="tertiary">Tertiary</Button>
```

### Link Color
Colored link-style button.
```tsx
<Button hierarchy="link-color">Link Button</Button>
```

### Link Gray
Gray link-style button.
```tsx
<Button hierarchy="link-gray">Gray Link</Button>
```

## Sizes

```tsx
<Button size="2xl">2XL Button</Button>
<Button size="xl">XL Button</Button>
<Button size="lg">Large Button</Button>
<Button size="md">Medium Button</Button> {/* Default */}
<Button size="sm">Small Button</Button>
<Button size="xs">XS Button</Button>
```

**Size Specifications:**
- `2xl`: 60px height, 18px font
- `xl`: 48px height, 16px font
- `lg`: 44px height, 16px font
- `md`: 40px height, 14px font (default)
- `sm`: 36px height, 14px font
- `xs`: 28px height, 12px font

## With Icons

### Icon Left (Default)
```tsx
<Button icon="arrow-right">Continue</Button>
<Button icon="download-01" hierarchy="secondary">
  Download
</Button>
```

### Icon Right
```tsx
<Button icon="arrow-right" iconPosition="right">
  Next
</Button>
```

### Icon Only
```tsx
<Button icon="settings" iconOnly />
<Button icon="trash" iconOnly destructive />
<Button icon="plus" iconOnly size="sm" />
```

## States

### Disabled
```tsx
<Button disabled>Disabled Button</Button>
<Button disabled icon="check">
  Can't Click
</Button>
```

### Loading
```tsx
<Button loading>Loading...</Button>
<Button loading hierarchy="secondary">
  Saving
</Button>

// Loading automatically disables interaction
<Button loading onClick={handleClick}>
  This won't trigger onClick
</Button>
```

### Destructive
```tsx
<Button destructive>Delete</Button>
<Button destructive icon="trash">
  Remove Item
</Button>
<Button destructive hierarchy="secondary">
  Clear Data
</Button>
```

## Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
<Button fullWidth hierarchy="primary" size="xl">
  Submit Form
</Button>
```

## Common Patterns

### Form Buttons
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" loading={isSubmitting}>
    Save Changes
  </Button>
  <Button type="button" hierarchy="secondary" onClick={handleCancel}>
    Cancel
  </Button>
</form>
```

### Action Buttons
```tsx
<div className="actions">
  <Button icon="plus">Add Item</Button>
  <Button icon="upload-01" hierarchy="secondary">
    Import
  </Button>
  <Button icon="download-01" hierarchy="tertiary">
    Export
  </Button>
</div>
```

### Destructive Actions
```tsx
<Button 
  destructive 
  icon="trash" 
  onClick={handleDelete}
  loading={isDeleting}
>
  Delete Account
</Button>
```

### Icon Toolbar
```tsx
<div className="toolbar">
  <Button icon="edit-01" iconOnly size="sm" />
  <Button icon="copy-01" iconOnly size="sm" />
  <Button icon="trash" iconOnly size="sm" destructive />
</div>
```

### Call-to-Action
```tsx
<Button 
  size="2xl" 
  icon="arrow-right" 
  iconPosition="right"
  fullWidth
>
  Get Started Today
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hierarchy` | `'primary' \| 'secondary' \| 'tertiary' \| 'link-color' \| 'link-gray'` | `'primary'` | Visual hierarchy |
| `size` | `'2xl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `destructive` | `boolean` | `false` | Destructive action styling |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state with spinner |
| `icon` | `string` | - | Icon name from Icon component |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `iconOnly` | `boolean` | `false` | Icon only mode |
| `fullWidth` | `boolean` | `false` | Full width button |
| `children` | `ReactNode` | - | Button content |
| `onClick` | `(e: MouseEvent) => void` | - | Click handler |
| `className` | `string` | `''` | Additional CSS classes |

**Plus all standard HTML button attributes!**

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { 
  ButtonProps, 
  ButtonSize, 
  ButtonHierarchy, 
  ButtonType 
} from '@boni/untitled-ui';

const size: ButtonSize = 'lg';
const hierarchy: ButtonHierarchy = 'primary';
```

## Accessibility

- ✅ Keyboard navigation (Enter, Space)
- ✅ Focus indicators (4px focus ring)
- ✅ ARIA attributes auto-managed
- ✅ Disabled state prevents interaction
- ✅ Loading state communicated to screen readers
- ✅ Semantic HTML button element

## Dark Mode

Automatic dark mode support via `data-theme="dark"`:

```tsx
<ThemeProvider>
  <Button>Auto Dark Mode</Button>
</ThemeProvider>
```

Dark mode affects:
- Secondary: Dark background with light text
- Tertiary: Adjusted gray tones
- Link gray: Lighter gray for better contrast

## Combinations

### All Hierarchies with Icons
```tsx
<Button hierarchy="primary" icon="check">Primary</Button>
<Button hierarchy="secondary" icon="download-01">Secondary</Button>
<Button hierarchy="tertiary" icon="share-01">Tertiary</Button>
<Button hierarchy="link-color" icon="link-01">Link Color</Button>
<Button hierarchy="link-gray" icon="external-link">Link Gray</Button>
```

### All Sizes with Icon Only
```tsx
<Button size="2xl" icon="settings" iconOnly />
<Button size="xl" icon="settings" iconOnly />
<Button size="lg" icon="settings" iconOnly />
<Button size="md" icon="settings" iconOnly />
<Button size="sm" icon="settings" iconOnly />
<Button size="xs" icon="settings" iconOnly />
```

### Destructive Across Hierarchies
```tsx
<Button destructive>Primary Destructive</Button>
<Button destructive hierarchy="secondary">Secondary Destructive</Button>
<Button destructive hierarchy="tertiary">Tertiary Destructive</Button>
<Button destructive hierarchy="link-color">Link Destructive</Button>
```

## Examples in Context

### Modal Actions
```tsx
<div className="modal-footer">
  <Button hierarchy="tertiary" onClick={onCancel}>
    Cancel
  </Button>
  <Button onClick={onConfirm} loading={isSaving}>
    Confirm
  </Button>
</div>
```

### Table Row Actions
```tsx
<td className="actions">
  <Button icon="edit-01" size="sm" iconOnly />
  <Button icon="trash" size="sm" iconOnly destructive />
</td>
```

### Loading States
```tsx
function SaveButton() {
  const [saving, setSaving] = useState(false);
  
  const handleSave = async () => {
    setSaving(true);
    await saveData();
    setSaving(false);
  };
  
  return (
    <Button loading={saving} onClick={handleSave}>
      Save Changes
    </Button>
  );
}
```

---

**Perfect for all your UI needs!** The Button component is production-ready with full design system integration. 🎉
