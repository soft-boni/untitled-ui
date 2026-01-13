import React from 'react';
import { Icon } from '../Icon';
import { radius } from '../../tokens/radius';
import './Badge.css';

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeColor =
    | 'gray'
    | 'brand'
    | 'error'
    | 'warning'
    | 'success'
    | 'gray-blue'
    | 'blue-light'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'orange';

export type BadgeType = 'pill' | 'badge';

export interface BadgeProps {
    /** Badge size */
    size?: BadgeSize;

    /** Badge color variant */
    color?: BadgeColor;

    /** Badge shape type (pill is fully rounded) */
    type?: BadgeType;

    /** Leading icon name */
    icon?: string;

    /** Show leading dot */
    dot?: boolean;

    /** Show close/dismiss button */
    onDismiss?: (event: React.MouseEvent<HTMLButtonElement>) => void;

    /** Child content */
    children?: React.ReactNode;

    /** Additional CSS class */
    className?: string;

    /** Optional click handler for the whole badge */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Badge Component
 * 
 * Used to label, categorize, or organize items using keywords that describe them.
 * 
 * @example
 * ```tsx
 * <Badge color="brand">New feature</Badge>
 * <Badge size="lg" type="pill" color="success" icon="check">Completed</Badge>
 * <Badge color="error" onDismiss={() => remove()}>Removable</Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    (
        {
            size = 'sm',
            color = 'gray',
            type = 'badge',
            icon,
            dot = false,
            onDismiss,
            children,
            className = '',
            onClick,
            ...props
        },
        ref
    ) => {
        // Determine icon size based on badge size
        const iconSize = size === 'sm' ? 'xs' : 'sm';

        // Build class names
        const classes = [
            'badge',
            `badge--${size}`,
            `badge--${color}`,
            `badge--${type}`,
            onClick && 'badge--interactive',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div
                ref={ref}
                className={classes}
                onClick={onClick}
                style={{
                    // Pill type uses full radius, badge type uses medium radius from tokens
                    borderRadius: type === 'pill' ? radius.full : radius.md,
                }}
                {...props}
            >
                {dot && (
                    <span className={`badge__dot badge__dot--${color}`} />
                )}

                {icon && !dot && (
                    <Icon
                        name={icon}
                        size={iconSize}
                        className="badge__icon"
                    />
                )}

                <span className="badge__text">{children}</span>

                {onDismiss && (
                    <button
                        type="button"
                        className="badge__dismiss"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDismiss(e);
                        }}
                        aria-label="Remove badge"
                    >
                        <Icon name="x-close" size={iconSize} />
                    </button>
                )}
            </div>
        );
    }
);

Badge.displayName = 'Badge';

export default Badge;
