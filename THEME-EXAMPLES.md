/**
 * Color Mode Theme System - Usage Examples
 */

import React from 'react';
import { ThemeProvider, useTheme } from '@boni/untitled-ui';
import { spacing, radius, effects } from '@boni/untitled-ui';

// ============================================================================
// EXAMPLE 1: Setup Theme Provider
// ============================================================================

// Wrap your app with ThemeProvider
export const App = () => {
  return (
    <ThemeProvider defaultMode="light">
      <YourApp />
    </ThemeProvider>
  );
};

// ============================================================================
// EXAMPLE 2: Using Theme in Components
// ============================================================================

export const ThemedCard = ({ title, children }) => {
  const { colors } = useTheme();

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
      <h2 style={{ color: colors.text.primary }}>{title}</h2>
      <p style={{ color: colors.text.secondary }}>{children}</p>
    </div>
  );
};

// ============================================================================
// EXAMPLE 3: Theme Toggle Button
// ============================================================================

export const ThemeToggle = () => {
  const { mode, toggleMode, colors } = useTheme();

  return (
    <button
      onClick={toggleMode}
      style={{
        backgroundColor: colors.background.secondary,
        color: colors.text.primary,
        border: `1px solid ${colors.border.primary}`,
        padding: `${spacing.sm} ${spacing.md}`,
        borderRadius: radius.md,
        cursor: 'pointer',
      }}
    >
      {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

// ============================================================================
// EXAMPLE 4: Accessing Current Mode
// ============================================================================

export const AdaptiveComponent = () => {
  const { mode, colors } = useTheme();

  return (
    <div style={{ color: colors.text.primary }}>
      <p>Current theme: {mode}</p>
      <p>This component adapts to the theme automatically!</p>
    </div>
  );
};

// ============================================================================
// EXAMPLE 5: CSS Variables Approach (Alternative)
// ============================================================================

/**
 * If you prefer using CSS variables, you can create them from the theme:
 */

export const ThemeToCSS = () => {
  const { colors } = useTheme();

  React.useEffect(() => {
    const root = document.documentElement;
    
    // Set CSS variables
    root.style.setProperty('--color-text-primary', colors.text.primary);
    root.style.setProperty('--color-bg-primary', colors.background.primary);
    root.style.setProperty('--color-border-primary', colors.border.primary);
    // ... set more variables as needed
  }, [colors]);

  return null;
};

// Then use in CSS:
// .my-component {
//   color: var(--color-text-primary);
//   background-color: var(--color-bg-primary);
// }
