'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage (default: dark)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || 'dark';
    setTheme(initialTheme);
    setMounted(true);
    
    // Apply theme to document (sync with inline script)
    // Check if class is already applied to avoid unnecessary DOM manipulation
    const hasDark = document.documentElement.classList.contains('dark');
    if (initialTheme === 'dark' && !hasDark) {
      document.documentElement.classList.add('dark');
    } else if (initialTheme === 'light' && hasDark) {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update theme and persist to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Always provide the context, but use a safe default value when not mounted
  // This prevents the "useTheme must be used within a ThemeProvider" error
  const contextValue = mounted
    ? { theme, toggleTheme }
    : { theme: 'dark' as Theme, toggleTheme: () => {} };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
