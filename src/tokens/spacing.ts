/**
 * Spacing Design Tokens - Auto-generated from Figma
 * 
 * Spacing values for consistent layout and component spacing
 * Source: Assets/3. Spacing/Mode 1.tokens.json
 */

export const spacing = {
    none: 0,
    xxs: 2,     // 0.5 (2px)
    xs: 4,      // 1 (4px)
    sm: 6,      // 1.5 (6px)
    md: 8,      // 2 (8px)
    lg: 12,     // 3 (12px)
    xl: 16,     // 4 (16px)
    '2xl': 20,  // 5 (20px)
    '3xl': 24,  // 6 (24px)
    '4xl': 32,  // 8 (32px)
    '5xl': 40,  // 10 (40px)
    '6xl': 48,  // 12 (48px)
    '7xl': 64,  // 16 (64px)
    '8xl': 80,  // 20 (80px)
    '9xl': 96,  // 24 (96px)
    '10xl': 128,  // 32 (128px)
    '11xl': 160,  // 40 (160px)
} as const;

export type Spacing = keyof typeof spacing;
