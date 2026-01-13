# ButtonGroup Component

Groups multiple buttons together with connected borders and shared styling.

## Features

- **Horizontal or vertical** orientation
- **Connected borders** - buttons appear seamlessly joined
- **Smart border radius** - only first/last buttons have rounded corners
- **Full width** option
- **Z-index management** - focus/hover states appear on top
- **Design system** integration with radius tokens

## Basic Usage

### Horizontal Group (Default)

```tsx
import { ButtonGroup, Button } from '@boni/untitled-ui';

<ButtonGroup>
  <Button hierarchy="secondary">Cancel</Button>
  <Button hierarchy="secondary">Save Draft</Button>
  <Button>Publish</Button>
</ButtonGroup>
```

### Vertical Group

```tsx
<ButtonGroup orientation="vertical">
  <Button hierarchy="secondary">Option 1</Button>
  <Button hierarchy="secondary">Option 2</Button>
  <Button hierarchy="secondary">Option 3</Button>
</ButtonGroup>
```

## Common Patterns

### Tab-like Selection

```tsx
<ButtonGroup>
  <Button hierarchy="primary">Day</Button>
  <Button hierarchy="secondary">Week</Button>
  <Button hierarchy="secondary">Month</Button>
  <Button hierarchy="secondary">Year</Button>
</ButtonGroup>
```

Use `hierarchy="primary"` for the active/selected button.

### Icon Groups

```tsx
<ButtonGroup>
  <Button icon="align-left" iconOnly />
  <Button icon="align-center" iconOnly />
  <Button icon="align-right" iconOnly />
  <Button icon="align-justify" iconOnly />
</ButtonGroup>
```

### With Leading Icons

```tsx
<ButtonGroup>
  <Button icon="home-01" hierarchy="secondary">Home</Button>
  <Button icon="search-md" hierarchy="secondary">Search</Button>
  <Button icon="settings-01" hierarchy="primary">Settings</Button>
</ButtonGroup>
```

### Toolbar Actions

```tsx
<ButtonGroup>
  <Button icon="edit-01" hierarchy="secondary">Edit</Button>
  <Button icon="copy-01" hierarchy="secondary">Copy</Button>
  <Button icon="trash-01" hierarchy="secondary" destructive>Delete</Button>
</ButtonGroup>
```

### View Switcher

```tsx
<ButtonGroup>
  <Button icon="list" iconOnly hierarchy="primary" />
  <Button icon="grid-01" iconOnly hierarchy="secondary" />
  <Button icon="bar-chart-01" iconOnly hierarchy="secondary" />
</ButtonGroup>
```

### Full Width Group

```tsx
<ButtonGroup fullWidth>
  <Button hierarchy="secondary">Cancel</Button>
  <Button hierarchy="primary">Confirm</Button>
</ButtonGroup>
```

### Vertical Navigation

```tsx
<ButtonGroup orientation="vertical">
  <Button icon="home-01" iconPosition="left" hierarchy="primary">
    Home
  </Button>
  <Button icon="search-md" iconPosition="left" hierarchy="secondary">
    Search
  </Button>
  <Button icon="settings-01" iconPosition="left" hierarchy="secondary">
    Settings
  </Button>
  <Button icon="user-01" iconPosition="left" hierarchy="secondary">
    Profile
  </Button>
</ButtonGroup>
```

## Size Variations

All button sizes work in groups:

```tsx
<ButtonGroup>
  <Button size="sm" hierarchy="secondary">Small</Button>
  <Button size="sm" hierarchy="secondary">Group</Button>
</ButtonGroup>

<ButtonGroup>
  <Button size="md" hierarchy="secondary">Medium</Button>
  <Button size="md" hierarchy="secondary">Group</Button>
</ButtonGroup>

<ButtonGroup>
  <Button size="lg" hierarchy="secondary">Large</Button>
  <Button size="lg" hierarchy="secondary">Group</Button>
</ButtonGroup>
```

## Interactive States

### Stateful Group

```tsx
function ViewSelector() {
  const [view, setView] = useState('list');
  
  return (
    <ButtonGroup>
      <Button 
        hierarchy={view === 'list' ? 'primary' : 'secondary'}
        icon="list"
        iconOnly
        onClick={() => setView('list')}
      />
      <Button 
        hierarchy={view === 'grid' ? 'primary' : 'secondary'}
        icon="grid-01"
        iconOnly
        onClick={() => setView('grid')}
      />
      <Button 
        hierarchy={view === 'chart' ? 'primary' : 'secondary'}
        icon="bar-chart-01"
        iconOnly
        onClick={() => setView('chart')}
      />
    </ButtonGroup>
  );
}
```

### Filter Group

```tsx
function FilterButtons() {
  const [filter, setFilter] = useState('all');
  
  return (
    <ButtonGroup>
      <Button 
        hierarchy={filter === 'all' ? 'primary' : 'secondary'}
        onClick={() => setFilter('all')}
      >
        All
      </Button>
      <Button 
        hierarchy={filter === 'active' ? 'primary' : 'secondary'}
        onClick={() => setFilter('active')}
      >
        Active
      </Button>
      <Button 
        hierarchy={filter === 'completed' ? 'primary' : 'secondary'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Group direction |
| `fullWidth` | `boolean` | `false` | Full width group |
| `children` | `ReactNode` | Required | Button components |
| `className` | `string` | `''` | Additional CSS classes |

## Design System Integration

Uses design tokens:

```tsx
import { radius } from '../../tokens/radius';

// Border radius from design system
style={{ borderRadius: radius.md }}
```

## How It Works

### Connected Borders

- Middle buttons have no border radius
- First button keeps left radius (horizontal) or top radius (vertical)
- Last button keeps right radius (horizontal) or bottom radius (vertical)
- Adjacent borders overlap (-1px margin) to avoid double borders

### Z-Index Layering

- Focused buttons: `z-index: 1`
- Hovered buttons: `z-index: 1`
- Primary buttons: `z-index: 2` (always on top)

This ensures proper border display on all states.

## Accessibility

- ✅ `role="group"` for semantic grouping
- ✅ Individual buttons remain keyboard accessible
- ✅ Focus indicators work properly
- ✅ Screen readers announce group

## Best Practices

### ✅ Do

- Use for related actions (Edit, Delete, Share)
- Use for view switchers (List, Grid, Chart)
- Use for filters (All, Active, Completed)
- Keep button count reasonable (2-6 buttons)
- Use consistent button sizes in a group

### ❌ Don't

- Mix different button sizes in one group
- Use for unrelated actions
- Create groups with only one button
- Nest ButtonGroups
- Mix different hierarchies randomly (use primary for active state)

## Examples in Context

### Toolbar

```tsx
<div className="toolbar">
  <ButtonGroup>
    <Button icon="bold" iconOnly hierarchy="secondary" />
    <Button icon="italic" iconOnly hierarchy="secondary" />
    <Button icon="underline" iconOnly hierarchy="primary" />
  </ButtonGroup>
  
  <ButtonGroup>
    <Button icon="align-left" iconOnly hierarchy="secondary" />
    <Button icon="align-center" iconOnly hierarchy="primary" />
    <Button icon="align-right" iconOnly hierarchy="secondary" />
  </ButtonGroup>
</div>
```

### Modal Actions

```tsx
<div className="modal-footer">
  <Button hierarchy="tertiary">Cancel</Button>
  
  <ButtonGroup>
    <Button hierarchy="secondary">Save Draft</Button>
    <Button hierarchy="primary">Publish</Button>
  </ButtonGroup>
</div>
```

### Dashboard Filter

```tsx
<div className="dashboard-header">
  <h1>Analytics</h1>
  
  <ButtonGroup>
    <Button icon="calendar" hierarchy="secondary">Today</Button>
    <Button icon="calendar" hierarchy="primary">This Week</Button>
    <Button icon="calendar" hierarchy="secondary">This Month</Button>
  </ButtonGroup>
</div>
```

---

**Perfect for grouping related buttons with seamless visual connection!** 🎉
