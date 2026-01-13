import React from 'react';
import { useTheme } from '../../theme';
import './Logo.css';

export type CompanyName =
    | '3Portal'
    | '4DGreens'
    | 'AcmeCorp'
    | 'AlphaWave'
    | 'Bioshyft'
    | 'Botthesis'
    | 'BuildingBlocks'
    | 'Capsule'
    | 'Catalog'
    | 'Circooles'
    | 'Cloudhub'
    | 'Ephicient'
    | 'Featherdev'
    | 'GlobalBank'
    | 'Hourglass'
    | 'Lightbox'
    | 'Lightcast'
    | 'Logoipsum'
    | 'Mirage'
    | 'Nietzsche'
    | 'Nocturnal'
    | 'Ohm'
    | 'Polymath'
    | 'Prototype'
    | 'Quotient'
    | 'Reallinks'
    | 'Scribble'
    | 'Shift'
    | 'Sisyphus'
    | 'Spherule'
    | 'Stack3dLab'
    | 'Visionwork'
    | 'VoxelLabs'
    | 'Warpspeed'
    | 'Watchtower'
    | 'Wildcrafted';

export type LogoStyle = 'standard' | 'badge';

export interface LogoProps {
    /** Company name to display */
    company: CompanyName;

    /** Logo style variant */
    style?: LogoStyle;

    /** Dark mode variant */
    darkMode?: boolean;

    /** Show company text/name */
    showText?: boolean;

    /** Custom size (width in pixels) */
    size?: number | 'sm' | 'md' | 'lg' | 'xl';

    /** Additional CSS class names */
    className?: string;
}

/**
 * Company Logo Component
 * 
 * Displays placeholder company logos with multiple style variants.
 * Supports light/dark modes, standard/badge styles, and text on/off.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Logo company="3Portal" />
 * 
 * // With variants
 * <Logo 
 *   company="AlphaWave" 
 *   style="badge" 
 *   darkMode={true}
 *   showText={false}
 *   size="lg"
 * />
 * 
 * // Auto dark mode from theme
 * <Logo company="Capsule" />
 * ```
 */
export const Logo: React.FC<LogoProps> = ({
    company,
    style = 'standard',
    darkMode,
    showText = true, // Note: Currently using master SVG, showText not yet implemented
    size = 'md',
    className = '',
}) => {
    const { mode } = useTheme();

    // Auto-detect dark mode from theme if not explicitly set
    const isDark = darkMode ?? (mode === 'dark');

    // Size mappings
    const sizeMap = {
        sm: 80,
        md: 120,
        lg: 160,
        xl: 200,
    };

    const width = typeof size === 'number' ? size : sizeMap[size];
    const aspectRatio = style === 'standard' ? 4.17 : 3.54;
    const height = width / aspectRatio;

    return (
        <div
            className={`logo logo--${style} logo--${isDark ? 'dark' : 'light'} ${showText ? 'logo--with-text' : 'logo--icon-only'} ${className}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <img
                src="/assets/company-logos.svg"
                alt={`${company} logo`}
                className="logo__image"
                style={{
                    opacity: isDark ? 0.84 : 1,
                }}
            />
            <span className="sr-only">{company}</span>
        </div>
    );
};

export default Logo;
