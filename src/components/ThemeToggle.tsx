'use client';

import { useTheme } from '@/contexts/ThemeContext';

/** Icona semicerchio: metà scura, metà chiara (tema dark/light) */
function HalfCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Cerchio esterno */}
      <circle cx="12" cy="12" r="10" />
      {/* Linea che divide il cerchio a metà (metà "piena" a destra) */}
      <path d="M12 2a10 10 0 0 1 0 20V2z" fill="currentColor" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
      className="rounded-full p-1.5 text-foreground/70 hover:text-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
    >
      <span
        className={`block w-5 h-5 transition-transform duration-300 ${
          theme === 'dark' ? 'rotate-0' : 'rotate-180'
        }`}
      >
        <HalfCircleIcon />
      </span>
    </button>
  );
}
