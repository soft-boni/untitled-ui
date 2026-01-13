import { primitiveColors } from './primitives';

/**
 * Semantic Color Tokens
 * 
 * These tokens reference primitives and define the semantic meaning.
 * Customize these to create different themes (light/dark mode) for your project.
 */

// ============================================================================
// TEXT COLORS
// ============================================================================

export const text = {
    primary: primitiveColors.grayLight[900],           // #181d27
    secondary: primitiveColors.grayLight[700],         // #384250
    tertiary: primitiveColors.grayLight[600],          // #4d5761
    quaternary: primitiveColors.grayLight[500],        // #6c737f
    disabled: primitiveColors.grayLight[400],          // #9da4ae
    placeholder: primitiveColors.grayLight[500],       // #6c737f
    primaryOnBrand: primitiveColors.base.white,        // #ffffff
} as const;

// ============================================================================
// BACKGROUND COLORS
// ============================================================================

export const background = {
    primary: primitiveColors.base.white,               // #ffffff
    secondary: primitiveColors.grayLight[50],          // #f9fafb
    tertiary: primitiveColors.grayLight[100],          // #f3f4f6
    quaternary: primitiveColors.grayLight[200],        // #e5e7eb
    active: primitiveColors.grayLight[50],             // #f9fafb
    disabled: primitiveColors.grayLight[100],          // #f3f4f6
    disabledSubtle: primitiveColors.grayLight[50],     // #f9fafb
    overlay: 'rgba(24, 29, 39, 0.5)',                  // Semi-transparent overlay
    brandPrimary: primitiveColors.brand[600],          // #7f56d9
    brandSecondary: primitiveColors.brand[100],        // #f4ebff
    brandSolid: primitiveColors.brand[600],            // #7f56d9
    brandSolidHover: primitiveColors.brand[700],       // #6941c6
    error: primitiveColors.error[600],                 // #d92d20
    errorSubtle: primitiveColors.error[50],            // #fef3f2
    warning: primitiveColors.warning[600],             // #dc6803
    warningSubtle: primitiveColors.warning[50],        // #fffaeb
    success: primitiveColors.success[600],             // #039855
    successSubtle: primitiveColors.success[50],        // #ecfdf3
} as const;

// ============================================================================
// FOREGROUND COLORS (ICON, BUTTON CONTENT, ETC)
// ============================================================================

export const foreground = {
    primary: primitiveColors.grayLight[900],           // #181d27
    secondary: primitiveColors.grayLight[700],         // #384250
    tertiary: primitiveColors.grayLight[600],          // #4d5761
    quaternary: primitiveColors.grayLight[500],        // #6c737f
    quinary: primitiveColors.grayLight[400],           // #9da4ae
    senary: primitiveColors.grayLight[300],            // #d2d5da
    disabled: primitiveColors.grayLight[400],          // #9da4ae
    disabledSubtle: primitiveColors.grayLight[300],    // #d2d5da
    brand: primitiveColors.brand[600],                 // #7f56d9
    brandOnBrand: primitiveColors.base.white,          // #ffffff
    error: primitiveColors.error[600],                 // #d92d20
    errorOnError: primitiveColors.base.white,          // #ffffff
    warning: primitiveColors.warning[600],             // #dc6803
    warningOnWarning: primitiveColors.base.white,      // #ffffff
    success: primitiveColors.success[600],             // #039855
    successOnSuccess: primitiveColors.base.white,      // #ffffff
} as const;

// ============================================================================
// BORDER COLORS
// ============================================================================

export const border = {
    primary: primitiveColors.grayLight[300],           // #d2d5da
    secondary: primitiveColors.grayLight[200],         // #e5e7eb
    tertiary: primitiveColors.grayLight[100],          // #f3f4f6
    disabled: primitiveColors.grayLight[300],          // #d2d5da
    disabledSubtle: primitiveColors.grayLight[200],    // #e5e7eb
    brand: primitiveColors.brand[300],                 // #d6bbfb
    brandSolid: primitiveColors.brand[600],            // #7f56d9
    error: primitiveColors.error[300],                 // #fda29b
    errorSolid: primitiveColors.error[600],            // #d92d20
} as const;

// ============================================================================
// COMPONENT COLORS (BUTTONS, FORMS, ETC)
// ============================================================================

export const component = {
    // Button variants
    button: {
        primary: {
            bg: primitiveColors.brand[600],
            bgHover: primitiveColors.brand[700],
            fg: primitiveColors.base.white,
            border: primitiveColors.brand[600],
        },
        secondary: {
            bg: primitiveColors.base.white,
            bgHover: primitiveColors.grayLight[50],
            fg: primitiveColors.grayLight[700],
            border: primitiveColors.grayLight[300],
        },
        tertiary: {
            bg: 'transparent',
            bgHover: primitiveColors.grayLight[50],
            fg: primitiveColors.grayLight[600],
            border: 'transparent',
        },
    },

    // Form components
    form: {
        input: {
            bg: primitiveColors.base.white,
            bgDisabled: primitiveColors.grayLight[50],
            fg: primitiveColors.grayLight[900],
            fgPlaceholder: primitiveColors.grayLight[500],
            border: primitiveColors.grayLight[300],
            borderHover: primitiveColors.grayLight[300],
            borderFocus: primitiveColors.brand[300],
        },
    },
} as const;

// ============================================================================
// UTILITY COLORS (FOR STATUS, ALERTS, ETC)
// ============================================================================

export const utility = {
    blue: {
        50: primitiveColors.blue[50],
        100: primitiveColors.blue[100],
        200: primitiveColors.blue[200],
        300: primitiveColors.blue[300],
        400: primitiveColors.blue[400],
        500: primitiveColors.blue[500],
        600: primitiveColors.blue[600],
        700: primitiveColors.blue[700],
    },
    indigo: {
        50: primitiveColors.indigo[50],
        100: primitiveColors.indigo[100],
        200: primitiveColors.indigo[200],
        300: primitiveColors.indigo[300],
        400: primitiveColors.indigo[400],
        500: primitiveColors.indigo[500],
        600: primitiveColors.indigo[600],
        700: primitiveColors.indigo[700],
    },
    purple: {
        50: primitiveColors.purple[50],
        100: primitiveColors.purple[100],
        200: primitiveColors.purple[200],
        300: primitiveColors.purple[300],
        400: primitiveColors.purple[400],
        500: primitiveColors.purple[500],
        600: primitiveColors.purple[600],
        700: primitiveColors.purple[700],
    },
    pink: {
        50: primitiveColors.pink[50],
        100: primitiveColors.pink[100],
        200: primitiveColors.pink[200],
        300: primitiveColors.pink[300],
        400: primitiveColors.pink[400],
        500: primitiveColors.pink[500],
        600: primitiveColors.pink[600],
        700: primitiveColors.pink[700],
    },
    orange: {
        50: primitiveColors.orange[50],
        100: primitiveColors.orange[100],
        200: primitiveColors.orange[200],
        300: primitiveColors.orange[300],
        400: primitiveColors.orange[400],
        500: primitiveColors.orange[500],
        600: primitiveColors.orange[600],
        700: primitiveColors.orange[700],
    },
} as const;

export const colors = {
    text,
    background,
    foreground,
    border,
    component,
    utility,
} as const;
