import React from 'react';
import './Icon.css';

export type IconType = 'outline' | 'solid' | 'duotone' | 'duocolor' | 'file-type' | 'folder' | 'social';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface IconProps {
    /** Icon name (kebab-case, e.g., 'arrow-right', 'check-circle') */
    name: string;

    /** Icon type/variant */
    type?: IconType;

    /** Icon size */
    size?: IconSize;

    /** Icon color (CSS color or design token) */
    color?: string;

    /** Additional CSS class names */
    className?: string;

    /** Click handler */
    onClick?: () => void;

    /** ARIA label for accessibility */
    label?: string;
}

/**
 * Icon Component
 * 
 * Automatically loads SVG icons from the icon library.
 * Supports 4 icon types: outline, solid, duotone, duocolor
 * 
 * Icons are organized by type and category in:
 * - public/icons/outline/[category]/[icon-name].svg
 * - public/icons/solid/[category]/[icon-name].svg
 * - public/icons/duotone/[category]/[icon-name].svg
 * - public/icons/duocolor/[category]/[icon-name].svg
 * 
 * The component will automatically find and load icons based on the name,
 * searching through all category folders.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="arrow-right" />
 * 
 * // With variants
 * <Icon name="check-circle" type="solid" size="lg" color="#7F56D9" />
 * 
 * // Interactive
 * <Icon name="trash" type="outline" onClick={handleDelete} />
 * 
 * // With design tokens
 * <Icon name="heart" color={primitiveColors.error[600]} />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
    name,
    type = 'outline',
    size = 'md',
    color = 'currentColor',
    className = '',
    onClick,
    label,
}) => {
    // Size mappings (in pixels)
    const sizeMap: Record<string, number> = {
        xs: 16,
        sm: 20,
        md: 24,
        lg: 32,
        xl: 48,
    };

    const pixelSize = typeof size === 'number' ? size : sizeMap[size];

    // Map type names to folder names
    const typeFolder = {
        outline: 'outline',
        solid: 'solid',
        duotone: 'duotone',
        duocolor: 'duocolor',
        'file-type': 'file-type',
        folder: 'folder',
        social: 'social',
    }[type];

    // Icon path - will be resolved by the icon manifest
    // The build script will create a manifest.json that maps icon names to their paths
    const iconPath = `/icons/${typeFolder}/${name}.svg`;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <span
            className={`icon icon--${type} icon--${size} ${onClick ? 'icon--clickable' : ''} ${className}`}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-label={label || name}
            style={{
                width: `${pixelSize}px`,
                height: `${pixelSize}px`,
                color: color,
            }}
        >
            <img
                src={iconPath}
                alt={label || name}
                className="icon__svg"
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </span>
    );
};

export default Icon;
