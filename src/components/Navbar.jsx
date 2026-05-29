import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor page scroll to apply background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar" aria-label="Navegação Principal">
        <a href="#inicio" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-title">Amanda</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <div className="navbar-cta">
          <a href="#agendamento" className="btn btn-primary btn-navbar">
            <Calendar size={16} />
            <span>Agendar Horário</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar-mobile-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta-li">
            <a href="#agendamento" className="btn btn-primary w-full" onClick={closeMenu}>
              <Calendar size={18} />
              <span>Agendar Horário</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
