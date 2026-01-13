/**
 * Example: Using @boni/untitled-ui tokens
 * 
 * This file demonstrates how to use the design tokens in your React components.
 * You can copy these examples into your project after installing the package.
 */

// ============================================================================
// EXAMPLE 1: Basic Usage
// ============================================================================

import { 
  colors, 
  typography, 
  spacing, 
  radius, 
  effects 
} from '@boni/untitled-ui';

// Simple card component
export const Card = ({ title, children }) => {
  return (
    <div
      style={{
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        padding: spacing.xl,
        borderRadius: radius.lg,
        border: `1px solid ${colors.border.secondary}`,
        boxShadow: effects.shadow.md,
      }}
    >
      <h2
        style={{
          ...typography.textStyles.xlSemibold,
          color: colors.text.primary,
          marginBottom: spacing.md,
        }}
      >
        {title}
      </h2>
      <p style={typography.textStyles.mdRegular}>{children}</p>
    </div>
  );
};

// ============================================================================
// EXAMPLE 2: Button Component
// ============================================================================

export const Button = ({ variant = 'primary', children, onClick }) => {
  const variantStyles = {
    primary: {
      backgroundColor: colors.component.button.primary.bg,
      color: colors.component.button.primary.fg,
      border: `1px solid ${colors.component.button.primary.border}`,
    },
    secondary: {
      backgroundColor: colors.component.button.secondary.bg,
      color: colors.component.button.secondary.fg,
      border: `1px solid ${colors.component.button.secondary.border}`,
    },
    tertiary: {
      backgroundColor: colors.component.button.tertiary.bg,
      color: colors.component.button.tertiary.fg,
      border: `1px solid ${colors.component.button.tertiary.border}`,
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...variantStyles[variant],
        ...typography.textStyles.mdSemibold,
        padding: `${spacing.md} ${spacing.xl}`,
        borderRadius: radius.md,
        cursor: 'pointer',
        transition: effects.transition.base,
      }}
    >
      {children}
    </button>
  );
};

// ============================================================================
// EXAMPLE 3: Input Component
// ============================================================================

export const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        ...typography.textStyles.mdRegular,
        backgroundColor: colors.component.form.input.bg,
        color: colors.component.form.input.fg,
        border: `1px solid ${colors.component.form.input.border}`,
        borderRadius: radius.md,
        padding: `${spacing.md} ${spacing.lg}`,
        width: '100%',
        outline: 'none',
        transition: effects.transition.fast,
      }}
    />
  );
};

// ============================================================================
// EXAMPLE 4: Using Pre-composed Text Styles
// ============================================================================

import { textStyles } from '@boni/untitled-ui';

export const Typography = () => {
  return (
    <div>
      <h1 style={textStyles.display2xlSemibold}>Display 2XL</h1>
      <h2 style={textStyles.displayXlSemibold}>Display XL</h2>
      <h3 style={textStyles.displayLgSemibold}>Display LG</h3>
      <p style={textStyles.lgRegular}>Large body text</p>
      <p style={textStyles.mdRegular}>Medium body text (default)</p>
      <p style={textStyles.smRegular}>Small body text</p>
      <p style={textStyles.xsMedium}>Extra small text</p>
    </div>
  );
};

// ============================================================================
// EXAMPLE 5: Customizing Tokens for Your Brand
// ============================================================================

import { primitiveColors } from '@boni/untitled-ui';

// Create your custom brand colors
export const myBrandColors = {
  ...primitiveColors,
  brand: {
    ...primitiveColors.brand,
    600: '#FF5733', // Your custom brand color
    700: '#E64A2E', // Hover state
  },
};

// Use in your semantic tokens
export const mySemanticColors = {
  text: {
    primary: primitiveColors.grayLight[900],
  },
  background: {
    primary: primitiveColors.base.white,
    brandPrimary: myBrandColors.brand[600], // Your custom brand
  },
};

// ============================================================================
// EXAMPLE 6: Responsive Layout with Breakpoints
// ============================================================================

import { breakpoints, container, spacing } from '@boni/untitled-ui';

export const ResponsiveContainer = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: container.lg,
        margin: '0 auto',
        padding: spacing['2xl'],
        // In a real app, you'd use CSS media queries:
        // @media (min-width: ${breakpoints.lg}) { ... }
      }}
    >
      {children}
    </div>
  );
};
