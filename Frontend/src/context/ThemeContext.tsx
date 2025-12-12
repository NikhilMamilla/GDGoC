import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

// Get initial theme synchronously from localStorage
const getInitialTheme = (): Theme => {
    try {
        const savedTheme = localStorage.getItem('gdgoc-theme') as Theme | null;
        return savedTheme || 'dark';
    } catch {
        return 'dark';
    }
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Initialize theme synchronously from localStorage
    const [theme, setThemeState] = useState<Theme>(getInitialTheme());

    // Update localStorage and document class when theme changes
    useEffect(() => {
        try {
            localStorage.setItem('gdgoc-theme', theme);
        } catch (error) {
            console.error('Failed to save theme to localStorage:', error);
        }

        // Update HTML element class for global styling
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }

        // Update theme-color meta tag for mobile browsers
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#F7F3E9');
    }, [theme]);

    const toggleTheme = () => {
        setThemeState(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
