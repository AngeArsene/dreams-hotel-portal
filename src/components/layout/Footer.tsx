import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/amenities', label: t('nav.amenities') },
    { to: '/rooms', label: t('nav.rooms') },
    { to: '/location', label: t('nav.location') },
    { to: '/policies', label: t('nav.policies') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-secondary text-ivory">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="font-serif text-secondary font-bold text-2xl">D</span>
              </div>
              <div>
                <span className="font-serif text-xl font-semibold text-ivory">
                  The Dreams
                </span>
                <span className="block text-xs tracking-widest uppercase text-primary">
                  Hotel
                </span>
              </div>
            </div>
            <p className="text-ivory/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Thedreamshotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-ivory/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary mb-6">
              {t('contact.title')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-ivory/70 text-sm">
                  Nyalla Pariso, Douala<br />Cameroun
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+237000000000"
                  className="text-ivory/70 hover:text-primary transition-colors text-sm"
                >
                  +237 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@thedreamshotel.com"
                  className="text-ivory/70 hover:text-primary transition-colors text-sm"
                >
                  contact@thedreamshotel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-ivory/70 hover:text-primary transition-colors text-sm"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-ivory/70 hover:text-primary transition-colors text-sm"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-ivory/50 text-sm">
            © {new Date().getFullYear()} The Dreams Hotel. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
