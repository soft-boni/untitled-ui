/**
 * Layout Design Tokens - Auto-generated from Figma
 * 
 * Width constraints, container settings, and layout-related tokens
 * Source: Assets/4. Widths/Mode 1.tokens.json & Assets/5. Containers/Value.tokens.json
 */

// ============================================================================
// WIDTH CONSTRAINTS
// ============================================================================

export const widths = {
    xxs: 320,
    xs: 384,
    sm: 480,
    md: 560,
    lg: 640,
    xl: 768,
    '2xl': 1024,
    '3xl': 1280,
    '4xl': 1440,
    '5xl': 1600,
    '6xl': 1920,
    paragraphMaxWidth: 720,
} as const;

// ============================================================================
// CONTAINER SETTINGS
// ============================================================================

export const containers = {
    paddingMobile: 16,
    paddingDesktop: 32,
    maxWidthDesktop: 1280,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
    sm: widths.sm,
    md: widths.md,
    lg: widths.lg,
    xl: widths.xl,
    '2xl': widths['2xl'],
} as const;

export type Width = keyof typeof widths;
export type Breakpoint = keyof typeof breakpoints;
