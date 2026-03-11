'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 bg-navy rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-display tracking-tight">MW</span>
                </div>
                <span className="font-display font-700 text-base text-gray-900 tracking-tight hidden sm:block">
                  Mobile<span className="text-brand">Works</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    pathname === link.href
                      ? 'text-brand bg-brand-light'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-dark transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            'absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300 flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-navy rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">MW</span>
              </div>
              <span className="font-display font-semibold text-gray-900">
                Mobile<span className="text-brand">Works</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 p-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-brand-light text-brand'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-5 border-t border-gray-100">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full px-5 py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-brand-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
