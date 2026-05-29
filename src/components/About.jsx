import React from 'react';
import { Calendar, Users, Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        
        {/* Left Column: Studio Photo */}
        <div className="about-image-column">
          <div className="studio-image-frame">
            <div className="neon-overlay-text">
              <span className="neon-text">realce sua essência</span>
            </div>
            <img 
              src="/images/studio2.png"
              alt="Interior do Amanda Lash Studio - Maca de atendimento rosa confortável, espelho redondo dourado e ambiente aconchegante" 
              className="studio-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* Center Column: Biography */}
        <div className="about-content-column">
          <div className="section-tag">Sobre Amanda</div>
          
          <h2 className="about-title">
            Mais que beleza, <br />
            <span className="highlight-serif">é sobre autoestima</span>.
          </h2>
          
          <p className="about-text">
            Olá, sou a Amanda! Como lash designer especialista, meu propósito vai muito além de colar fios. Meu objetivo é realçar o que há de mais lindo em seu olhar, respeitando sua essência e formato de rosto.
          </p>
          
          <p className="about-text">
            Trabalho com atendimento totalmente personalizado, rigorosos protocolos de biossegurança, técnicas modernas e materiais de altíssima qualidade (macios, leves e hipoalergênicos) para garantir cílios perfeitos e a saúde dos seus fios naturais.
          </p>

          <div className="about-differentials">
            <div className="diff-bullet">
              <ShieldCheck size={16} className="diff-icon" />
              <span>Técnicas seguras e biossegurança</span>
            </div>
            <div className="diff-bullet">
              <Heart size={16} className="diff-icon" />
              <span>Resultado delicado e sob medida</span>
            </div>
          </div>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-about-cta">
            Me conhecer melhor
          </a>
        </div>

        {/* Right Column: Stat Cards */}
        <div className="about-stats-column">
          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper">
              <Calendar size={22} />
            </div>
            <div className="stat-info">
              <h3>+3 Anos</h3>
              <p>de experiência dedicada</p>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper">
              <Users size={22} />
            </div>
            <div className="stat-info">
              <h3>Centenas</h3>
              <p>de clientes satisfeitas</p>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper">
              <Sparkles size={22} />
            </div>
            <div className="stat-info">
              <h3>Especialista</h3>
              <p>em extensão personalizada</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
