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

  // Initialize theme (always dark by default)
  useEffect(() => {
    const initialTheme: Theme = 'dark';
    setTheme(initialTheme);
    setMounted(true);

    // Apply theme to document (sync with inline script)
    document.documentElement.classList.add('dark');
  }, []);

  // Update theme (no persistence per ora)
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
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
