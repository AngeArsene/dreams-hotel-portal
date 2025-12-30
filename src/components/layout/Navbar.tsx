import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/amenities', label: t('nav.amenities') },
    { to: '/rooms', label: t('nav.rooms') },
    { to: '/location', label: t('nav.location') },
    { to: '/policies', label: t('nav.policies') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-secondary/95 backdrop-blur-md shadow-elevated py-2'
          : 'bg-secondary/95 py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-serif text-secondary font-bold text-xl">D</span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-serif text-xl font-semibold transition-colors",
                isScrolled ? "text-ivory" : "text-ivory"
              )}>
                The Dreams
              </span>
              <span className={cn(
                "block text-xs tracking-widest uppercase transition-colors",
                isScrolled ? "text-primary" : "text-primary"
              )}>
                Hotel
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative font-medium text-sm tracking-wide transition-colors gold-underline",
                  location.pathname === link.to
                    ? "text-primary"
                    : isScrolled
                    ? "text-ivory hover:text-primary"
                    : "text-ivory hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 text-sm font-medium",
                isScrolled
                  ? "border-primary/30 text-ivory hover:bg-primary hover:text-secondary"
                  : "border-ivory/30 text-ivory hover:bg-ivory hover:text-secondary"
              )}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-ivory hover:bg-ivory/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="bg-secondary/95 backdrop-blur-md rounded-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg font-medium transition-colors",
                  location.pathname === link.to
                    ? "bg-primary text-secondary"
                    : "text-ivory hover:bg-ivory/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
