/**
 * Typography Design Tokens - Auto-generated from Figma
 * 
 * Font families, weights, sizes, and line heights for consistent typography
 * Source: Assets/6. Typography/Value.tokens.json
 */

// ============================================================================
// FONT FAMILIES
// ============================================================================

export const fontFamily = {
    display: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

// ============================================================================
// FONT WEIGHTS
// ============================================================================

export const fontWeight = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
} as const;

// ============================================================================
// FONT SIZES
// ============================================================================

export const fontSize = {
    // Text sizes
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,

    // Display sizes
    displayXs: 24,
    displaySm: 30,
    displayMd: 36,
    displayLg: 48,
    displayXl: 60,
    display2xl: 72,
} as const;

// ============================================================================
// LINE HEIGHTS
// ============================================================================

export const lineHeight = {
    // Text line heights
    xs: 18,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 30,

    // Display line heights
    displayXs: 32,
    displaySm: 38,
    displayMd: 44,
    displayLg: 60,
    displayXl: 72,
    display2xl: 90,
} as const;

// ============================================================================
// TEXT STYLES
// ============================================================================

export const textStyles = {
    // Text styles
    textXs: {
        fontSize: fontSize.xs,
        lineHeight: `${lineHeight.xs}px`,
        fontFamily: fontFamily.body,
    },
    textXsMedium: {
        fontSize: fontSize.xs,
        lineHeight: `${lineHeight.xs}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.body,
    },
    textXsSemibold: {
        fontSize: fontSize.xs,
        lineHeight: `${lineHeight.xs}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.body,
    },
    textXsBold: {
        fontSize: fontSize.xs,
        lineHeight: `${lineHeight.xs}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.body,
    },

    textSm: {
        fontSize: fontSize.sm,
        lineHeight: `${lineHeight.sm}px`,
        fontFamily: fontFamily.body,
    },
    textSmMedium: {
        fontSize: fontSize.sm,
        lineHeight: `${lineHeight.sm}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.body,
    },
    textSmSemibold: {
        fontSize: fontSize.sm,
        lineHeight: `${lineHeight.sm}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.body,
    },
    textSmBold: {
        fontSize: fontSize.sm,
        lineHeight: `${lineHeight.sm}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.body,
    },

    textMd: {
        fontSize: fontSize.md,
        lineHeight: `${lineHeight.md}px`,
        fontFamily: fontFamily.body,
    },
    textMdMedium: {
        fontSize: fontSize.md,
        lineHeight: `${lineHeight.md}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.body,
    },
    textMdSemibold: {
        fontSize: fontSize.md,
        lineHeight: `${lineHeight.md}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.body,
    },
    textMdBold: {
        fontSize: fontSize.md,
        lineHeight: `${lineHeight.md}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.body,
    },

    textLg: {
        fontSize: fontSize.lg,
        lineHeight: `${lineHeight.lg}px`,
        fontFamily: fontFamily.body,
    },
    textLgMedium: {
        fontSize: fontSize.lg,
        lineHeight: `${lineHeight.lg}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.body,
    },
    textLgSemibold: {
        fontSize: fontSize.lg,
        lineHeight: `${lineHeight.lg}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.body,
    },
    textLgBold: {
        fontSize: fontSize.lg,
        lineHeight: `${lineHeight.lg}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.body,
    },

    textXl: {
        fontSize: fontSize.xl,
        lineHeight: `${lineHeight.xl}px`,
        fontFamily: fontFamily.body,
    },
    textXlMedium: {
        fontSize: fontSize.xl,
        lineHeight: `${lineHeight.xl}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.body,
    },
    textXlSemibold: {
        fontSize: fontSize.xl,
        lineHeight: `${lineHeight.xl}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.body,
    },
    textXlBold: {
        fontSize: fontSize.xl,
        lineHeight: `${lineHeight.xl}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.body,
    },

    // Display styles
    displayXs: {
        fontSize: fontSize.displayXs,
        lineHeight: `${lineHeight.displayXs}px`,
        fontFamily: fontFamily.display,
    },
    displayXsMedium: {
        fontSize: fontSize.displayXs,
        lineHeight: `${lineHeight.displayXs}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.display,
    },
    displayXsSemibold: {
        fontSize: fontSize.displayXs,
        lineHeight: `${lineHeight.displayXs}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.display,
    },
    displayXsBold: {
        fontSize: fontSize.displayXs,
        lineHeight: `${lineHeight.displayXs}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.display,
    },

    displaySm: {
        fontSize: fontSize.displaySm,
        lineHeight: `${lineHeight.displaySm}px`,
        fontFamily: fontFamily.display,
    },
    displaySmMedium: {
        fontSize: fontSize.displaySm,
        lineHeight: `${lineHeight.displaySm}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.display,
    },
    displaySmSemibold: {
        fontSize: fontSize.displaySm,
        lineHeight: `${lineHeight.displaySm}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.display,
    },
    displaySmBold: {
        fontSize: fontSize.displaySm,
        lineHeight: `${lineHeight.displaySm}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.display,
    },

    displayMd: {
        fontSize: fontSize.displayMd,
        lineHeight: `${lineHeight.displayMd}px`,
        fontFamily: fontFamily.display,
    },
    displayMdMedium: {
        fontSize: fontSize.displayMd,
        lineHeight: `${lineHeight.displayMd}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.display,
    },
    displayMdSemibold: {
        fontSize: fontSize.displayMd,
        lineHeight: `${lineHeight.displayMd}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.display,
    },
    displayMdBold: {
        fontSize: fontSize.displayMd,
        lineHeight: `${lineHeight.displayMd}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.display,
    },

    displayLg: {
        fontSize: fontSize.displayLg,
        lineHeight: `${lineHeight.displayLg}px`,
        fontFamily: fontFamily.display,
    },
    displayLgMedium: {
        fontSize: fontSize.displayLg,
        lineHeight: `${lineHeight.displayLg}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.display,
    },
    displayLgSemibold: {
        fontSize: fontSize.displayLg,
        lineHeight: `${lineHeight.displayLg}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.display,
    },
    displayLgBold: {
        fontSize: fontSize.displayLg,
        lineHeight: `${lineHeight.displayLg}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.display,
    },

    displayXl: {
        fontSize: fontSize.displayXl,
        lineHeight: `${lineHeight.displayXl}px`,
        fontFamily: fontFamily.display,
    },
    displayXlMedium: {
        fontSize: fontSize.displayXl,
        lineHeight: `${lineHeight.displayXl}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.display,
    },
    displayXlSemibold: {
        fontSize: fontSize.displayXl,
        lineHeight: `${lineHeight.displayXl}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.display,
    },
    displayXlBold: {
        fontSize: fontSize.displayXl,
        lineHeight: `${lineHeight.displayXl}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.display,
    },

    display2xl: {
        fontSize: fontSize.display2xl,
        lineHeight: `${lineHeight.display2xl}px`,
        fontFamily: fontFamily.display,
    },
    display2xlMedium: {
        fontSize: fontSize.display2xl,
        lineHeight: `${lineHeight.display2xl}px`,
        fontWeight: fontWeight.medium,
        fontFamily: fontFamily.display,
    },
    display2xlSemibold: {
        fontSize: fontSize.display2xl,
        lineHeight: `${lineHeight.display2xl}px`,
        fontWeight: fontWeight.semibold,
        fontFamily: fontFamily.display,
    },
    display2xlBold: {
        fontSize: fontSize.display2xl,
        lineHeight: `${lineHeight.display2xl}px`,
        fontWeight: fontWeight.bold,
        fontFamily: fontFamily.display,
    },
} as const;

export type FontFamily = keyof typeof fontFamily;
export type FontWeight = keyof typeof fontWeight;
export type FontSize = keyof typeof fontSize;
export type LineHeight = keyof typeof lineHeight;
export type TextStyle = keyof typeof textStyles;
