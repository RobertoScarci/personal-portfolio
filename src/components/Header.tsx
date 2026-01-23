'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/progetti' },
  { name: 'Contact', href: '/contatti' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav className="container mx-auto px-6 py-8 md:py-10 flex items-center justify-center max-w-4xl">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="absolute left-6"
        >
          <Link 
            href="/" 
            className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
            aria-label="Home"
          >
            <span className="text-accent">*</span>
          </Link>
        </motion.div>

        {/* Navigation Links + Theme Toggle - Centered */}
        <div className="hidden md:flex items-center gap-6">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-500 relative group ${
                    isActive
                      ? 'text-accent'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {/* Animated underline for active and hover */}
                  <motion.span
                    layoutId="activeTab"
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-accent ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    initial={false}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 30,
                      duration: 0.4
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
          {/* Theme Toggle - After navigation links */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border"
            >
              <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium transition-colors py-2 ${
                        isActive
                          ? 'text-accent'
                          : 'text-foreground/70 hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
