import React from 'react';
import { Icon } from '../Icon';
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';
import './SocialButton.css';

export type SocialPlatform =
    | 'angellist'
    | 'apple'
    | 'clubhouse'
    | 'discord-01'
    | 'discord-02'
    | 'dribbble'
    | 'facebook'
    | 'figma'
    | 'framer-01'
    | 'framer-02'
    | 'github'
    | 'google'
    | 'instagram'
    | 'layers'
    | 'linkedin'
    | 'notion'
    | 'paypal'
    | 'pinterest'
    | 'reddit'
    | 'signal'
    | 'slack'
    | 'snapchat'
    | 'spotify'
    | 'stripe'
    | 'telegram'
    | 'tiktok'
    | 'tumblr'
    | 'twitch'
    | 'twitter'
    | 'webflow'
    | 'whatsapp'
    | 'wise'
    | 'x-twitter' // X (formerly Twitter)
    | 'youtube';

export type SocialButtonStyle = 'brand' | 'gray';
export type SocialButtonSize = 'sm' | 'md' | 'lg';

export interface SocialButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
    /** Social media platform */
    platform: SocialPlatform;

    /** Button style - brand colors or gray */
    style?: SocialButtonStyle;

    /** Button size */
    size?: SocialButtonSize;

    /** Show platform name text */
    showText?: boolean;

    /** Custom text override */
    text?: string;

    /** Full width button */
    fullWidth?: boolean;

    /** Disabled state */
    disabled?: boolean;

    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  /** Additional CSS className */
    className?: string;
}

/**
 * Social Button Component
 * 
 * Pre-styled buttons for social media platforms with brand colors and icons.
 * Uses design system tokens for consistent spacing, radius, and colors.
 * 
 * @example
 * ```tsx
 * // Just the icon
 * <SocialButton platform="github" />
 * 
 * // With text
 * <SocialButton platform="google" showText />
 * <SocialButton platform="facebook" showText text="Sign in with Facebook" />
 * 
 * // Gray style
 * <SocialButton platform="twitter" style="gray" />
 * 
 * // Different sizes
 * <SocialButton platform="linkedin" size="sm" />
 * <SocialButton platform="instagram" size="lg" showText />
 * ```
 */
export const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
    (
        {
            platform,
            style = 'brand',
            size = 'md',
            showText = false,
            text,
            fullWidth = false,
            disabled = false,
            onClick,
            className = '',
            ...props
        },
        ref
    ) => {
        // Platform display names
        const platformNames: Record<SocialPlatform, string> = {
            'angellist': 'AngelList',
            'apple': 'Apple',
            'clubhouse': 'Clubhouse',
            'discord-01': 'Discord',
            'discord-02': 'Discord',
            'dribbble': 'Dribbble',
            'facebook': 'Facebook',
            'figma': 'Figma',
            'framer-01': 'Framer',
            'framer-02': 'Framer',
            'github': 'GitHub',
            'google': 'Google',
            'instagram': 'Instagram',
            'layers': 'Layers',
            'linkedin': 'LinkedIn',
            'notion': 'Notion',
            'paypal': 'PayPal',
            'pinterest': 'Pinterest',
            'reddit': 'Reddit',
            'signal': 'Signal',
            'slack': 'Slack',
            'snapchat': 'Snapchat',
            'spotify': 'Spotify',
            'stripe': 'Stripe',
            'telegram': 'Telegram',
            'tiktok': 'TikTok',
            'tumblr': 'Tumblr',
            'twitch': 'Twitch',
            'twitter': 'Twitter',
            'webflow': 'Webflow',
            'whatsapp': 'WhatsApp',
            'wise': 'Wise',
            'x-twitter': 'X',
            'youtube': 'YouTube',
        };

        // Size mappings using design tokens
        const sizeConfig = {
            sm: {
                height: '36px',
                padding: `${spacing.sm} ${spacing.md}`,
                iconSize: 'sm' as const,
                gap: spacing.xs,
                fontSize: '14px',
            },
            md: {
                height: '40px',
                padding: `${spacing.md} ${spacing.lg}`,
                iconSize: 'sm' as const,
                gap: spacing.sm,
                fontSize: '14px',
            },
            lg: {
                height: '44px',
                padding: `${spacing.lg} ${spacing.xl}`,
                iconSize: 'md' as const,
                gap: spacing.sm,
                fontSize: '16px',
            },
        };

        const config = sizeConfig[size];

        // Build icon name from platform and style
        // Format: "platform=facebook,-style=brand,-state=default"
        const capitalizedPlatform = platform
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const iconName = `platform=${capitalizedPlatform.toLowerCase()},-style=${style},-state=default`;

        // Build class names
        const classes = [
            'social-button',
            `social-button--${style}`,
            `social-button--${size}`,
            `social-button--${platform}`,
            showText && 'social-button--with-text',
            fullWidth && 'social-button--full-width',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        const displayText = text || platformNames[platform];

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!disabled && onClick) {
                onClick(event);
            }
        };

        return (
            <button
                ref={ref}
                type="button"
                disabled={disabled}
                onClick={handleClick}
                className={classes}
                style={{
                    height: config.height,
                    padding: showText ? config.padding : config.height, // Square for icon-only
                    gap: config.gap,
                    fontSize: config.fontSize,
                    borderRadius: radius.md,
                    width: fullWidth ? '100%' : showText ? 'auto' : config.height,
                }}
                aria-label={`${displayText} button`}
                {...props}
            >
                <Icon
                    name={iconName}
                    type="social"
                    size={config.iconSize}
                    className="social-button__icon"
                />
                {showText && <span className="social-button__text">{displayText}</span>}
            </button>
        );
    }
);

SocialButton.displayName = 'SocialButton';

export default SocialButton;
