import React, { useState, useEffect } from 'react';
import { ArrowUp, Contrast, Type, Volume2 } from 'lucide-react';

export default function Accessibility() {
  const [scale, setScale] = useState(1);
  const [contrast, setContrast] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Monitor scroll to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update scale on HTML root tag
  const changeScale = (amount) => {
    setScale((prev) => {
      const newScale = Math.min(Math.max(prev + amount, 0.85), 1.3);
      document.documentElement.style.setProperty('--font-scale', newScale);
      return newScale;
    });
  };

  // Toggle contrast class on body tag
  const toggleContrast = () => {
    setContrast((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
      return next;
    });
  };

  const handleLibras = () => {
    alert("Tradutor de Libras ativado (Módulo Simulado para demonstração).");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-accessibility" aria-label="Acessibilidade">
      <button 
        className="acc-btn" 
        onClick={() => changeScale(0.05)} 
        title="Aumentar Fonte"
        aria-label="Aumentar tamanho da fonte"
      >
        <span>A+</span>
        <span className="acc-btn-label">Aumentar Fonte</span>
      </button>

      <button 
        className="acc-btn" 
        onClick={() => changeScale(-0.05)} 
        title="Diminuir Fonte"
        aria-label="Diminuir tamanho da fonte"
      >
        <span>A-</span>
        <span className="acc-btn-label">Diminuir Fonte</span>
      </button>

      <button 
        className="acc-btn" 
        onClick={toggleContrast} 
        title="Contraste"
        aria-label="Alternar modo de alto contraste"
      >
        <Contrast size={18} />
        <span className="acc-btn-label">Alto Contraste</span>
      </button>

      <button 
        className="acc-btn" 
        onClick={handleLibras} 
        title="Libras"
        aria-label="Ativar tradutor de libras"
      >
        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>👋</span>
        <span className="acc-btn-label">Tradutor de Libras</span>
      </button>

      {showTop && (
        <button 
          className="acc-btn" 
          onClick={scrollToTop} 
          title="Ir para o topo"
          aria-label="Voltar para o topo da página"
        >
          <ArrowUp size={18} />
          <span className="acc-btn-label">Ir para o Topo</span>
        </button>
      )}
    </div>
  );
}
