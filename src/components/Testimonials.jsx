import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Juliane M.',
      text: 'Simplesmente perfeita! Meus cílios nunca estiveram tão lindos, leves e duráveis. A Amanda é extremamente profissional e delicada, o tempo na maca passa voando.',
      rating: 5,
      role: 'Cliente Fiel'
    },
    {
      id: 2,
      name: 'Larissa S.',
      text: 'Atendimento impecável, ambiente maravilhoso, aconchegante e extremamente limpo. O resultado do Volume Egípcio ficou super natural, exatamente como eu queria!',
      rating: 5,
      role: 'Cliente Mensal'
    },
    {
      id: 3,
      name: 'Carolina T.',
      text: 'Profissional incrível! Super atenciosa, explicou todos os cuidados do pós-procedimento. A retenção das minhas extensões passou de 4 semanas. Recomendo muito!',
      rating: 5,
      role: 'Cliente Semanal'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="section-header">
        <span className="section-tag">Depoimentos</span>
        <h2 className="section-title">O que nossas <em>clientes dizem</em></h2>
        <p className="section-subtitle">
          A satisfação das nossas clientes é a nossa maior recompensa. Veja a opinião de quem já passou pelo Amanda Lash Studio.
        </p>
      </div>

      <div className="testimonials-container">
        
        {/* Testimonials Slider Area */}
        <div className="testimonials-slider">
          
          <div className="quote-icon-bg">
            <Quote size={120} />
          </div>

          <div className="testimonials-track">
            {reviews.map((review, idx) => (
              <div 
                key={review.id} 
                className={`testimonial-slide ${idx === activeIndex ? 'active' : ''}`}
                style={{ 
                  transform: `translateX(${(idx - activeIndex) * 100}%)`,
                  opacity: idx === activeIndex ? 1 : 0,
                  pointerEvents: idx === activeIndex ? 'auto' : 'none'
                }}
              >
                <div className="rating-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="star-filled" />
                  ))}
                </div>

                <p className="testimonial-text">"{review.text}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="testimonials-dots">
            {reviews.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${idx === activeIndex ? 'active' : ''}`} 
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ir para o depoimento ${idx + 1}`}
              />
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
