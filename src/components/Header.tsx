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
    <header className="relative z-50 w-full pt-8 md:pt-10">
      <nav className="container mx-auto px-6 md:px-8 py-6 md:py-8 flex items-center justify-between w-full max-w-5xl">
        {/* Logo - Left aligned with refined hover */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 90 }}
          transition={{ 
            type: 'spring',
            stiffness: 400,
            damping: 25,
            duration: 0.3
          }}
        >
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Home"
          >
            <span className="text-accent">*</span>
          </Link>
        </motion.div>

        {/* Navigation Links + Theme Toggle - Right aligned with better spacing */}
        <div className="hidden md:flex items-center gap-8">
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
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive
                      ? 'text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {/* Animated underline for active and hover - More refined */}
                  <motion.span
                    layoutId="activeTab"
                    className={`absolute -bottom-2 left-0 h-[1.5px] bg-accent ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    initial={false}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 400, 
                      damping: 30,
                      duration: 0.5
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
