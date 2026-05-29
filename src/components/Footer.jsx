import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato/Agendamento', href: '#agendamento' },
  ];

  return (
    <footer id="contato" className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Brand & Logo */}
        <div className="footer-column footer-brand-col">
          <a href="#inicio" className="footer-brand">
            <span className="brand-title">Amanda</span>
            <span className="brand-subtitle">Cílios & Sobrancelhas</span>
          </a>
          <p className="footer-motto">
            Realce sua beleza natural. Sinta-se incrível, todos os dias, com cílios impecáveis e personalizados.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Acesse nosso Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-title">Links Rápidos</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="footer-column">
          <h4 className="footer-title">Contato & Endereço</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>Rua das Flores, 123 - Centro, São Paulo - SP</span>
            </li>
            <li>
              <Phone size={18} className="footer-icon" />
              <span>(11) 99999-9999</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@amanda.lashstudio</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div className="footer-column">
          <h4 className="footer-title">Funcionamento</h4>
          <ul className="footer-hours-list">
            <li>
              <Clock size={16} className="footer-icon" />
              <span>Segunda a Sexta: 9h às 19h</span>
            </li>
            <li>
              <Clock size={16} className="footer-icon" />
              <span>Sábado: 9h às 15h</span>
            </li>
            <li>
              <Clock size={16} className="footer-icon text-rose" />
              <span>Domingo: Fechado</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amanda Lash Studio. Todos os direitos reservados.</p>
        <p className="maker-credit">
          Desenvolvido com <Heart size={12} className="heart-icon" /> para realçar sua autoestima.
        </p>
      </div>
    </footer>
  );
}
