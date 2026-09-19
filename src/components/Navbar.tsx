import React, { useState, useEffect } from 'react';
import { GelvisolLogo } from './GelvisolLogo';
import {
  Phone,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Qualidade', href: '#qualidade' },
    { label: 'Contactos', href: '#contactos' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
            : 'bg-white shadow-sm border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-0.5"
            aria-label="Centro Médico Gelvisol Início"
          >
            <GelvisolLogo variant="horizontal" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-sky-800 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-800 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Prominent CTA Button */}
            <button
              id="header-btn-marcar-consulta"
              type="button"
              onClick={onOpenAppointment}
              className="inline-flex items-center justify-center bg-sky-800 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Marcar Consulta</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-appointment-cta-btn"
              type="button"
              onClick={onOpenAppointment}
              className="inline-flex items-center justify-center bg-sky-800 hover:bg-sky-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <span>Marcar</span>
            </button>
            <button
              id="hamburger-menu-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top duration-200"
        >
          <div className="px-6 py-6 space-y-4">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Navegação
              </span>
              <span className="text-xs font-medium text-sky-800">Luanda, Angola</span>
            </div>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-slate-700 hover:text-sky-800 hover:bg-slate-50 font-medium transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                id="drawer-marcar-consulta-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full flex items-center justify-center gap-2 bg-sky-800 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>Marcar Consulta Online</span>
              </button>

              <a
                href="tel:+244923000000"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-sky-800" />
                <span>Ligar: (+244) 923 000 000</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
