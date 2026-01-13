/**
 * Design Token Exports
 * 
 * Central export point for all design tokens.
 * Import from here to use tokens in your application.
 * 
 * @example
 * // Import specific token categories
 * import { colors, typography, spacing } from '@boni/untitled-ui/tokens';
 * 
 * // Or import everything
 * import * as tokens from '@boni/untitled-ui/tokens';
 * 
 * // Use in your components
 * const MyComponent = () => (
 *   <div style={{
 *     color: colors.text.primary,
 *     fontSize: typography.fontSize.lg,
 *     padding: spacing.lg,
 *   }}>
 *     Hello World
 *   </div>
 * );
 */

// Primitive tokens
export { primitiveColors, base, grayLight, grayDark, brand, error, warning, success } from './primitives';

// Semantic tokens
export { colors, text, background, foreground, border, component, utility } from './colors';

// Color modes for light/dark theme switching
export { colorModes, lightMode, darkMode } from './colorModes';
export type { ColorMode, ColorModeTokens } from './colorModes';

// Typography
export {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textStyles,
} from './typography';
export type {
    FontFamily,
    FontWeight,
    FontSize,
    LineHeight,
    TextStyle,
} from './typography';

// Spacing
export { spacing } from './spacing';
export type { Spacing } from './spacing';

// Radius
export { radius } from './radius';
export type { Radius } from './radius';

// Layout
export {
    widths,
    containers,
    breakpoints,
} from './layout';
export type { Width, Breakpoint } from './layout';

// Effects
export { effects, shadow, focusRing, blur, transition, opacity } from './effects';

// Import for default export
import { primitiveColors } from './primitives';
import { colors } from './colors';
import { fontFamily, fontSize, fontWeight, lineHeight, textStyles } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { widths, containers, breakpoints } from './layout';
import { effects } from './effects';

// Consolidated typography export
const typography = {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textStyles,
};

// Consolidated layout export
const layout = {
    widths,
    containers,
    breakpoints,
};

// Re-export everything as default for convenience
export default {
    primitiveColors,
    colors,
    typography,
    spacing,
    radius,
    layout,
    effects,
};

// Also export the consolidated objects for named imports
export { typography, layout };
