import React from 'react';
import { radius } from '../../tokens/radius';
import './ButtonGroup.css';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

export interface ButtonGroupProps {
    /** Group orientation */
    orientation?: ButtonGroupOrientation;

    /** Full width group */
    fullWidth?: boolean;

    /** Children buttons */
    children: React.ReactNode;

    /** Additional CSS className */
    className?: string;
}

/**
 * ButtonGroup Component
 * 
 * Groups multiple buttons together visually with connected borders.
 * Works with regular Button components and provides proper styling for grouped buttons.
 * 
 * Features:
 * - Horizontal or vertical orientation
 * - Connected borders between buttons
 * - Proper border radius (first/last only)
 * - Full width option
 * - Uses design system tokens
 * 
 * @example
 * ```tsx
 * // Basic horizontal group
 * <ButtonGroup>
 *   <Button>View</Button>
 *   <Button>Edit</Button>
 *   <Button>Delete</Button>
 * </ButtonGroup>
 * 
 * // Vertical group
 * <ButtonGroup orientation="vertical">
 *   <Button icon="home-01">Home</Button>
 *   <Button icon="settings-01">Settings</Button>
 *   <Button icon="logout-01">Logout</Button>
 * </ButtonGroup>
 * 
 * // With active state
 * <ButtonGroup>
 *   <Button hierarchy="secondary">Day</Button>
 *   <Button hierarchy="primary">Week</Button>
 *   <Button hierarchy="secondary">Month</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
    (
        {
            orientation = 'horizontal',
            fullWidth = false,
            children,
            className = '',
            ...props
        },
        ref
    ) => {
        const classes = [
            'button-group',
            `button-group--${orientation}`,
            fullWidth && 'button-group--full-width',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div
                ref={ref}
                className={classes}
                role="group"
                style={{
                    borderRadius: radius.md,
                }}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
