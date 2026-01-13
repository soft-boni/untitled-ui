import React from 'react';
import './BadgeGroup.css';

export interface BadgeGroupProps {
    /** Badges to display */
    children: React.ReactNode;

    /** Additional CSS class */
    className?: string;

    /** Full width container */
    fullWidth?: boolean;
}

/**
 * BadgeGroup Component
 * 
 * Simple wrapper to display multiple badges with consistent spacing.
 * 
 * @example
 * ```tsx
 * <BadgeGroup>
 *   <Badge color="blue">React</Badge>
 *   <Badge color="brand">TypeScript</Badge>
 * </BadgeGroup>
 * ```
 */
export const BadgeGroup = React.forwardRef<HTMLDivElement, BadgeGroupProps>(
    (
        {
            children,
            className = '',
            fullWidth = false,
            ...props
        },
        ref
    ) => {
        const classes = [
            'badge-group',
            fullWidth && 'badge-group--full-width',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div
                ref={ref}
                className={classes}
                {...props}
            >
                {children}
            </div>
        );
    }
);

BadgeGroup.displayName = 'BadgeGroup';

export default BadgeGroup;
