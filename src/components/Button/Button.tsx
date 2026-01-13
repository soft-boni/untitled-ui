import React from 'react';
import { Icon } from '../Icon';
import './Button.css';

export type ButtonSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'link-color' | 'link-gray';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** Button visual hierarchy */
    hierarchy?: ButtonHierarchy;

    /** Button size */
    size?: ButtonSize;

    /** Button type */
    type?: ButtonType;

    /** Destructive action styling */
    destructive?: boolean;

    /** Disabled state */
    disabled?: boolean;

    /** Loading state */
    loading?: boolean;

    /** Icon name (from Icon component) */
    icon?: string;

    /** Icon position */
    iconPosition?: 'left' | 'right';

    /** Icon only mode (no text) */
    iconOnly?: boolean;

    /** Full width button */
    fullWidth?: boolean;

    /** Button content */
    children?: React.ReactNode;

    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button Component
 * 
 * Comprehensive button component with multiple hierarchies, sizes, and states.
 * Supports icons, loading states, and destructive actions.
 * 
 * @example
 * ```tsx
 * // Primary button
 * <Button>Click me</Button>
 * 
 * // With icon
 * <Button icon="arrow-right" iconPosition="right">
 *   Continue
 * </Button>
 * 
 * // Destructive action
 * <Button destructive icon="trash">Delete</Button>
 * 
 * // Loading state
 * <Button loading>Saving...</Button>
 * 
 * // Different hierarchies
 * <Button hierarchy="primary">Primary</Button>
 * <Button hierarchy="secondary">Secondary</Button>
 * <Button hierarchy="tertiary">Tertiary</Button>
 * <Button hierarchy="link-color">Link</Button>
 * 
 * // Icon only
 * <Button icon="settings" iconOnly />
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            hierarchy = 'primary',
            size = 'md',
            type = 'button',
            destructive = false,
            disabled = false,
            loading = false,
            icon,
            iconPosition = 'left',
            iconOnly = false,
            fullWidth = false,
            children,
            onClick,
            className = '',
            ...props
        },
        ref
    ) => {
        // Size mappings for icons
        const iconSizeMap: Record<ButtonSize, 'xs' | 'sm' | 'md' | 'lg'> = {
            '2xl': 'md',
            'xl': 'md',
            'lg': 'sm',
            'md': 'sm',
            'sm': 'sm',
            'xs': 'xs',
        };

        const iconSize = iconSizeMap[size];

        // Build class names
        const classes = [
            'button',
            `button--${hierarchy}`,
            `button--${size}`,
            destructive && 'button--destructive',
            loading && 'button--loading',
            iconOnly && 'button--icon-only',
            fullWidth && 'button--full-width',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!disabled && !loading && onClick) {
                onClick(event);
            }
        };

        // Loading spinner icon
        const loadingIcon = (
            <span className="button__loading-spinner">
                <Icon name="loading-01" size={iconSize} className="button__loading-icon" />
            </span>
        );

        // Icon element
        const iconElement = icon && !loading && (
            <Icon name={icon} size={iconSize} className="button__icon" />
        );

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled || loading}
                onClick={handleClick}
                className={classes}
                {...props}
            >
                {loading && loadingIcon}

                {!iconOnly && (
                    <>
                        {iconElement && iconPosition === 'left' && iconElement}
                        {children && <span className="button__text">{children}</span>}
                        {iconElement && iconPosition === 'right' && iconElement}
                    </>
                )}

                {iconOnly && iconElement}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
