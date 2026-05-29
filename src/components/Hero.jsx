import React from 'react';
import { Calendar, Eye, Sparkles, Shield, Heart, Home } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="brush-bg"></div>
      
      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          
          
          <h1 className="hero-title">
            Realce seu olhar com <br />
            <span className="highlight-serif">cílios perfeitos</span>.
          </h1>
          
          <p className="hero-subtitle">
            Amanda Lash Studio trabalha com extensões de cílios personalizadas, delicadas e extremamente seguras. Cada procedimento é feito sob medida para destacar sua essência natural com máximo conforto.
          </p>
          
          <div className="hero-actions">
            <a href="#agendamento" className="btn btn-primary">
              <Calendar size={18} />
              <span>Agendar Horário</span>
            </a>
            <a href="#servicos" className="btn btn-secondary">
              <Eye size={18} />
              <span>Ver Serviços</span>
            </a>
          </div>
        </div>
        </div>

      {/* Bottom Features Strip */}
      <div className="hero-features-strip">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Heart size={20} />
          </div>
          <div className="feature-text">
            <h4>Atendimento Personalizado</h4>
            <p>Procedimentos sob medida</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Sparkles size={20} />
          </div>
          <div className="feature-text">
            <h4>Produtos Premium</h4>
            <p>Alta qualidade e hipoalergênicos</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Shield size={20} />
          </div>
          <div className="feature-text">
            <h4>Técnicas Seguras</h4>
            <p>Saúde ocular em primeiro lugar</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <Home size={20} />
          </div>
          <div className="feature-text">
            <h4>Ambiente Aconchegante</h4>
            <p>Conforto e biossegurança</p>
          </div>
        </div>
      </div>
    </section>
  );
}
