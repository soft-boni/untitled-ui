import { primitiveColors } from './primitives';

/**
 * Color Mode Tokens
 * 
 * Provides light and dark mode color schemes.
 * Use these in combination with a theme provider to switch between modes.
 */

// ============================================================================
// LIGHT MODE SEMANTIC TOKENS
// ============================================================================

export const lightMode = {
    text: {
        primary: primitiveColors.grayLight[900],
        primaryOnBrand: primitiveColors.base.white,
        secondary: primitiveColors.grayLight[700],
        secondaryHover: primitiveColors.grayLight[800],
        secondaryOnBrand: primitiveColors.brand[200],
        tertiary: primitiveColors.grayLight[600],
        tertiaryHover: primitiveColors.grayLight[700],
        tertiaryOnBrand: primitiveColors.brand[200],
        quaternary: primitiveColors.grayLight[500],
        quaternaryOnBrand: primitiveColors.brand[300],
        white: primitiveColors.base.white,
        disabled: primitiveColors.grayLight[500],
        placeholder: primitiveColors.grayLight[500],
        placeholderSubtle: primitiveColors.grayLight[300],
        brandPrimary: primitiveColors.brand[900],
        brandSecondary: primitiveColors.brand[700],
        brandSecondaryHover: primitiveColors.brand[800],
        brandTertiary: primitiveColors.brand[600],
        brandTertiaryAlt: primitiveColors.brand[600],
        errorPrimary: primitiveColors.error[600],
    },
    background: {
        primary: primitiveColors.base.white,
        primaryAlt: primitiveColors.base.white,
        primaryHover: primitiveColors.grayLight[50],
        primaryOnBrand: primitiveColors.brand[600],
        primarySolid: primitiveColors.grayLight[950],
        secondary: primitiveColors.grayLight[50],
        secondaryAlt: primitiveColors.grayLight[50],
        secondaryHover: primitiveColors.grayLight[100],
        secondarySubtle: primitiveColors.grayLight[25],
        secondarySolid: primitiveColors.grayLight[600],
        tertiary: primitiveColors.grayLight[100],
        quaternary: primitiveColors.grayLight[200],
        active: primitiveColors.grayLight[50],
        disabled: primitiveColors.grayLight[100],
        disabledSubtle: primitiveColors.grayLight[50],
        overlay: 'rgba(24, 29, 39, 0.5)',
        brandPrimary: primitiveColors.brand[600],
        brandPrimaryAlt: primitiveColors.brand[600],
        brandSecondary: primitiveColors.brand[100],
        brandSolid: primitiveColors.brand[600],
        brandSolidHover: primitiveColors.brand[700],
        brandSection: primitiveColors.brand[800],
        brandSectionSubtle: primitiveColors.brand[700],
        errorPrimary: primitiveColors.error[600],
        errorSecondary: primitiveColors.error[50],
        errorSolid: primitiveColors.error[600],
        warningPrimary: primitiveColors.warning[600],
        warningSecondary: primitiveColors.warning[50],
        warningSolid: primitiveColors.warning[600],
        successPrimary: primitiveColors.success[600],
        successSecondary: primitiveColors.success[50],
        successSolid: primitiveColors.success[600],
    },
    foreground: {
        primary: primitiveColors.grayLight[900],
        secondary: primitiveColors.grayLight[700],
        secondaryHover: primitiveColors.grayLight[800],
        secondaryOnBrand: primitiveColors.brand[200],
        tertiary: primitiveColors.grayLight[600],
        tertiaryHover: primitiveColors.grayLight[700],
        tertiaryOnBrand: primitiveColors.brand[200],
        quaternary: primitiveColors.grayLight[500],
        quaternaryHover: primitiveColors.grayLight[600],
        quaternaryOnBrand: primitiveColors.brand[300],
        quinary: primitiveColors.grayLight[400],
        quinaryHover: primitiveColors.grayLight[500],
        senary: primitiveColors.grayLight[300],
        white: primitiveColors.base.white,
        disabled: primitiveColors.grayLight[400],
        disabledSubtle: primitiveColors.grayLight[300],
        brand: primitiveColors.brand[600],
        brandSecondary: primitiveColors.brand[500],
        brandOnBrand: primitiveColors.base.white,
        error: primitiveColors.error[600],
        errorSecondary: primitiveColors.error[500],
        errorOnError: primitiveColors.base.white,
        warning: primitiveColors.warning[600],
        warningSecondary: primitiveColors.warning[500],
        warningOnWarning: primitiveColors.base.white,
        success: primitiveColors.success[600],
        successSecondary: primitiveColors.success[500],
        successOnSuccess: primitiveColors.base.white,
    },
    border: {
        primary: primitiveColors.grayLight[300],
        secondary: primitiveColors.grayLight[200],
        tertiary: primitiveColors.grayLight[100],
        disabled: primitiveColors.grayLight[300],
        disabledSubtle: primitiveColors.grayLight[200],
        brand: primitiveColors.brand[300],
        brandSolid: primitiveColors.brand[600],
        brandSolidAlt: primitiveColors.brand[600],
        error: primitiveColors.error[300],
        errorSolid: primitiveColors.error[600],
    },
} as const;

// ============================================================================
// DARK MODE SEMANTIC TOKENS
// ============================================================================

export const darkMode = {
    text: {
        primary: primitiveColors.grayDark[50],
        primaryOnBrand: primitiveColors.base.white,
        secondary: primitiveColors.grayDark[300],
        secondaryHover: primitiveColors.grayDark[200],
        secondaryOnBrand: primitiveColors.grayDark[300],
        tertiary: primitiveColors.grayDark[400],
        tertiaryHover: primitiveColors.grayDark[300],
        tertiaryOnBrand: primitiveColors.grayDark[400],
        quaternary: primitiveColors.grayDark[400],
        quaternaryOnBrand: primitiveColors.grayDark[400],
        white: primitiveColors.base.white,
        disabled: primitiveColors.grayDark[500],
        placeholder: primitiveColors.grayDark[500],
        placeholderSubtle: primitiveColors.grayDark[700],
        brandPrimary: primitiveColors.grayDark[50],
        brandSecondary: primitiveColors.grayDark[300],
        brandSecondaryHover: primitiveColors.grayDark[200],
        brandTertiary: primitiveColors.grayDark[400],
        brandTertiaryAlt: primitiveColors.grayDark[50],
        errorPrimary: primitiveColors.error[400],
    },
    background: {
        primary: primitiveColors.grayDark[950],
        primaryAlt: primitiveColors.grayDark[900],
        primaryHover: primitiveColors.grayDark[800],
        primaryOnBrand: primitiveColors.brand[600],
        primarySolid: primitiveColors.grayDark[50],
        secondary: primitiveColors.grayDark[900],
        secondaryAlt: primitiveColors.grayDark[950],
        secondaryHover: primitiveColors.grayDark[800],
        secondarySubtle: primitiveColors.grayDark[900],
        secondarySolid: primitiveColors.grayDark[600],
        tertiary: primitiveColors.grayDark[800],
        quaternary: primitiveColors.grayDark[700],
        active: primitiveColors.grayDark[800],
        disabled: primitiveColors.grayDark[800],
        disabledSubtle: primitiveColors.grayDark[900],
        overlay: 'rgba(22, 27, 38, 0.7)',
        brandPrimary: primitiveColors.brand[600],
        brandPrimaryAlt: primitiveColors.brand[500],
        brandSecondary: primitiveColors.brand[900],
        brandSolid: primitiveColors.brand[600],
        brandSolidHover: primitiveColors.brand[500],
        brandSection: primitiveColors.brand[800],
        brandSectionSubtle: primitiveColors.brand[900],
        errorPrimary: primitiveColors.error[600],
        errorSecondary: primitiveColors.error[950],
        errorSolid: primitiveColors.error[600],
        warningPrimary: primitiveColors.warning[600],
        warningSecondary: primitiveColors.warning[950],
        warningSolid: primitiveColors.warning[600],
        successPrimary: primitiveColors.success[600],
        successSecondary: primitiveColors.success[950],
        successSolid: primitiveColors.success[600],
    },
    foreground: {
        primary: primitiveColors.grayDark[50],
        secondary: primitiveColors.grayDark[300],
        secondaryHover: primitiveColors.grayDark[200],
        secondaryOnBrand: primitiveColors.brand[300],
        tertiary: primitiveColors.grayDark[400],
        tertiaryHover: primitiveColors.grayDark[300],
        tertiaryOnBrand: primitiveColors.brand[400],
        quaternary: primitiveColors.grayDark[400],
        quaternaryHover: primitiveColors.grayDark[300],
        quaternaryOnBrand: primitiveColors.brand[400],
        quinary: primitiveColors.grayDark[500],
        quinaryHover: primitiveColors.grayDark[400],
        senary: primitiveColors.grayDark[600],
        white: primitiveColors.base.white,
        disabled: primitiveColors.grayDark[500],
        disabledSubtle: primitiveColors.grayDark[600],
        brand: primitiveColors.brand[500],
        brandSecondary: primitiveColors.brand[400],
        brandOnBrand: primitiveColors.base.white,
        error: primitiveColors.error[500],
        errorSecondary: primitiveColors.error[400],
        errorOnError: primitiveColors.base.white,
        warning: primitiveColors.warning[500],
        warningSecondary: primitiveColors.warning[400],
        warningOnWarning: primitiveColors.base.white,
        success: primitiveColors.success[500],
        successSecondary: primitiveColors.success[400],
        successOnSuccess: primitiveColors.base.white,
    },
    border: {
        primary: primitiveColors.grayDark[800],
        secondary: primitiveColors.grayDark[800],
        tertiary: primitiveColors.grayDark[700],
        disabled: primitiveColors.grayDark[800],
        disabledSubtle: primitiveColors.grayDark[900],
        brand: primitiveColors.brand[400],
        brandSolid: primitiveColors.brand[500],
        brandSolidAlt: primitiveColors.brand[600],
        error: primitiveColors.error[400],
        errorSolid: primitiveColors.error[600],
    },
} as const;

// ============================================================================
// COLOR MODES EXPORT
// ============================================================================

export const colorModes = {
    light: lightMode,
    dark: darkMode,
} as const;

export type ColorMode = keyof typeof colorModes;

// Use a more flexible type that works for both light and dark modes
export type ColorModeTokens = {
    text: Record<string, string>;
    background: Record<string, string>;
    foreground: Record<string, string>;
    border: Record<string, string>;
};
