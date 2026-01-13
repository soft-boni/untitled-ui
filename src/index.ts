/**
 * @boni/untitled-ui
 * 
 * A comprehensive React design system with design tokens and components.
 * 
 * @example
 * // Import design tokens
 * import { colors, typography, spacing } from '@boni/untitled-ui';
 * 
 * // Or import from tokens specifically
 * import { colors } from '@boni/untitled-ui/tokens';
 * 
 * // Import theme system for color mode switching
 * import { ThemeProvider, useTheme } from '@boni/untitled-ui';
 */

// Export all tokens
export * from './tokens';

// Export theme system (color mode switching)
export * from './theme';

// Components
export { Logo } from './components/Logo';
export type { LogoProps, CompanyName, LogoStyle } from './components/Logo';

export { Icon } from './components/Icon';
export type { IconProps, IconType, IconSize } from './components/Icon';

export { Button } from './components/Button';
export type { ButtonProps, ButtonSize, ButtonHierarchy, ButtonType } from './components/Button';

export { ButtonGroup } from './components/ButtonGroup';
export type { ButtonGroupProps, ButtonGroupOrientation } from './components/ButtonGroup';

export { SocialButton } from './components/SocialButton';
export type { SocialButtonProps, SocialPlatform, SocialButtonStyle, SocialButtonSize } from './components/SocialButton';
