'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Carriera', href: '/carriera' },
  { name: 'Progetti', href: '/progetti' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
          aria-label="Home"
        >
          <span className="text-accent">*</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
