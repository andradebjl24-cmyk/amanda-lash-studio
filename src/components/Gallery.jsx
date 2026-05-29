import React, { useState } from 'react';
import { Eye, ArrowLeftRight, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState(1);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  const galleryCategories = [
    { id: 'brasileiro', name: 'Olhar Sofisticado ', tag: 'Natural & Marcante' },
    { id: 'egipcio', name: 'Experiência Premium ', tag: 'Atendimento Personalizado ' },
    { id: 'russo', name: 'Studio Elegante', tag: 'Produtos Premium' },
  ];

  return (
    <section id="resultados" className="gallery-section">
      <div className="section-header">
        <span className="section-tag">Resultados</span>
        <h2 className="section-title">Resultados que <em>falam por si</em></h2>
        <p className="section-subtitle">
          Veja a diferença incrível na curvatura, volume e preenchimento natural do olhar. Deslize a barra para comparar.
        </p>
      </div>

      {/* Main Interactive Slider */}
      <div className="slider-wrapper">
        <div className="slider-container">
          {/* Before Image (Background) */}
          <div className="slider-image before-image">
            <img src={activeTab === 1 ? "/images/before_after_1.png" : "/images/before_after_2.png"} alt="Cílios Antes" />
            <div className="slider-label label-before">Antes</div>
          </div>
          
          {/* After Image (Overlay, clipped width) */}
          <div 
            className="slider-image after-image" 
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img src={activeTab === 1 ? "/images/before_after_1.png" : "/images/before_after_2.png"} alt="Cílios Depois" />
            <div className="slider-label label-after">Depois</div>
          </div>

          {/* Slider line separator */}
          <div className="slider-separator" style={{ left: `${sliderPosition}%` }}>
            <div className="slider-handle">
              <ArrowLeftRight size={18} className="handle-icon" />
            </div>
          </div>

          {/* Invisible HTML range input for dragging */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={handleSliderChange} 
            className="slider-range-input" 
            aria-label="Controle deslizante para antes e depois"
          />
        </div>

        {/* Quick controls to switch between two examples */}
        <div className="slider-tabs">
          <button 
            className={`slider-tab-btn ${activeTab === 1 ? 'active' : ''}`} 
            onClick={() => setActiveTab(1)}
          >
            Comparação Clássica 1
          </button>
          <button 
            className={`slider-tab-btn ${activeTab === 2 ? 'active' : ''}`} 
            onClick={() => setActiveTab(2)}
          >
            Comparação Lateral 2
          </button>
        </div>
      </div>

      {/* Static Grid Gallery */}
      <div className="gallery-grid">
        {galleryCategories.map((cat, idx) => (
          <div key={cat.id} className="gallery-card">
            <div className="gallery-img-box">
              <img 
                src={idx === 0 ? "/images/carao.png" : idx === 1 ? "/images/card-studio5.png" : "/images/bancada.png"} 
                alt={cat.name} 
                className="gallery-grid-img"
              />
              <div className="gallery-hover-overlay">
                <Sparkles size={24} className="overlay-icon" />
                <span>Ver detalhes</span>
              </div>
            </div>
            <div className="gallery-card-info">
              <h4>{cat.name}</h4>
              <p>{cat.tag}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="gallery-footer">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Ver mais no Instagram
        </a>
      </div>
    </section>
  );
}
