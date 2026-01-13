# Untitled UI Design System

A comprehensive React design system with design tokens, components, and 595+ icons.

![npm version](https://img.shields.io/badge/version-0.1.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)

## 🎨 Features

- **5 Core Components**: Button, ButtonGroup, Icon, Logo, SocialButton
- **595+ Icons**: Outline, Social, File Type, Folder icons
- **Design Tokens**: Colors, Typography, Spacing, Radius, Layout
- **Theme System**: Light/Dark mode with ThemeProvider
- **Full TypeScript**: Complete type safety and autocomplete
- **Production Ready**: Built with tsup, optimized bundles

## 📦 Installation

### From GitHub

```bash
npm install git+https://github.com/yourusername/untitled-ui.git
# or
yarn add git+https://github.com/yourusername/untitled-ui.git
```

### From npm (when published)

```bash
npm install @boni/untitled-ui
# or
yarn add @boni/untitled-ui
```

## 🚀 Quick Start

```tsx
import { ThemeProvider, Button, Icon, SocialButton } from '@boni/untitled-ui';
import '@boni/untitled-ui/dist/index.css';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Button icon="arrow-right" size="lg">
          Get Started
        </Button>
        
        <Icon name="check-circle" size="md" />
        
        <SocialButton platform="github" showText />
      </div>
    </ThemeProvider>
  );
}
```

## 📚 Components

### Button
180+ variants with 6 sizes, 5 hierarchies, icons, loading states, and destructive actions.

```tsx
<Button hierarchy="primary" size="lg" icon="star">
  Click Me
</Button>
```

### ButtonGroup
Group buttons with connected borders.

```tsx
<ButtonGroup>
  <Button hierarchy="secondary">Cancel</Button>
  <Button>Save</Button>
</ButtonGroup>
```

### Icon
595+ icons across 7 types.

```tsx
<Icon name="arrow-right" size="lg" color="#7F56D9" />
```

### Logo
35+ placeholder company logos.

```tsx
<Logo company="AlphaWave" style="badge" size="lg" />
```

### SocialButton
30+ social media platforms.

```tsx
<SocialButton platform="github" showText />
```

## 🎨 Design Tokens

```tsx
import { colors, spacing, typography, radius } from '@boni/untitled-ui/tokens';

const MyComponent = () => (
  <div style={{
    padding: spacing.lg,
    backgroundColor: colors.background.primary,
    borderRadius: radius.md,
  }}>
    Styled with tokens!
  </div>
);
```

## 🌗 Theme System

```tsx
import { ThemeProvider, useTheme } from '@boni/untitled-ui';

function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  
  return (
    <button onClick={toggleMode}>
      {mode === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <ThemeToggle />
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Build icons
npm run build:icons

# Watch mode
npm run dev

# Type checking
npm run type-check
```

## 📖 Documentation

- [Button Component](src/components/Button/README.md)
- [ButtonGroup Component](src/components/ButtonGroup/README.md)
- [Icon Component](src/components/Icon/README.md)
- [Logo Component](src/components/Logo/README.md)
- [SocialButton Component](src/components/SocialButton/README.md)
- [Theme Examples](THEME-EXAMPLES.md)
- [Usage Examples](EXAMPLES.md)

## 📁 Package Structure

```
@boni/untitled-ui/
├── dist/                 # Built package
│   ├── index.js         # CJS bundle
│   ├── index.mjs        # ESM bundle
│   ├── index.css        # Styles
│   └── tokens/          # Design tokens
├── public/              # Static assets
│   └── icons/           # Processed icons
├── src/
│   ├── components/      # React components
│   ├── tokens/          # Design tokens
│   └── theme/           # Theme system
└── Assets/              # Source assets
```

## 🎯 What's Included

### Components (5)
- Button (180+ variants)
- ButtonGroup
- Icon (595+ icons)
- Logo (35+ companies)
- SocialButton (30+ platforms)

### Design Tokens
- Colors (primitives + semantic)
- Typography (sizes, weights, line heights)
- Spacing (none → 11xl)
- Radius (none → full)
- Layout (widths, containers)
- Effects (shadows, elevation)

### Icons (595+)
- **Outline**: 334 UI icons
- **Social**: 102 social media icons
- **File Type**: 153 file type icons
- **Folder**: 6 folder icons
- **Solid/Duotone/Duocolor**: Ready for expansion

### Features
- ✅ Full TypeScript support
- ✅ Tree-shakeable exports
- ✅ Dark mode support
- ✅ Accessibility built-in
- ✅ Design token integration
- ✅ Comprehensive documentation

## 📄 License

MIT © Boni

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ using React, TypeScript, and tsup**
