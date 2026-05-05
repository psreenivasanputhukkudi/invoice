'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/generator', label: 'Generator' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export function SiteNav() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 h-14">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              }}
            >
              <FileText className="text-white" style={{ width: '16px', height: '16px' }} />
            </div>
            <div className="hidden sm:block">
              <h1
                className="leading-tight"
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--foreground)',
                  letterSpacing: '-0.3px',
                }}
              >
                Invoice Generator
              </h1>
              <p style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '-1px' }}>
                Create professional invoices
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors"
                  style={{
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full"
                      style={{ background: 'var(--foreground)' }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="w-px h-5 bg-border mx-2" />

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border/60"
          style={{ background: 'var(--background)' }}
        >
          <nav className="max-w-[1600px] mx-auto px-4 py-2 flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors"
                  style={{
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                    background: isActive ? 'var(--muted)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
