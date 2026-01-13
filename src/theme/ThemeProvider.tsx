import React, { createContext, useContext, useState, useEffect } from 'react';
import { colorModes, ColorMode, ColorModeTokens } from '../tokens/colorModes';

/**
 * Theme Context for Color Mode Switching
 * 
 * Provides theme mode (light/dark) and color tokens throughout your app.
 * 
 * @example
 * // Wrap your app
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * 
 * // Use in components
 * const { mode, setMode, colors } = useTheme();
 */

interface ThemeContextValue {
    mode: ColorMode;
    setMode: (mode: ColorMode) => void;
    toggleMode: () => void;
    colors: ColorModeTokens;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultMode?: ColorMode;
    storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultMode = 'light',
    storageKey = 'boni-ui-theme',
}) => {
    const [mode, setModeState] = useState<ColorMode>(() => {
        // Try to load from localStorage
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(storageKey);
            if (stored === 'light' || stored === 'dark') {
                return stored;
            }
        }
        return defaultMode;
    });

    const setMode = (newMode: ColorMode) => {
        setModeState(newMode);
        if (typeof window !== 'undefined') {
            localStorage.setItem(storageKey, newMode);
            // Update data attribute for CSS
            document.documentElement.setAttribute('data-theme', newMode);
        }
    };

    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    // Set initial data attribute
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', mode);
    }, [mode]);

    const colors = colorModes[mode];

    const value: ThemeContextValue = {
        mode,
        setMode,
        toggleMode,
        colors,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
