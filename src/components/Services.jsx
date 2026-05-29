import React from 'react';
import { Clock, Sparkles, Check, Crown, RefreshCw, Trash2, ArrowRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      id: 'volume-brasileiro',
      name: 'Volume Brasileiro',
      description: 'Fios em formato de Y para um olhar marcante, delicado e com volume leve.',
      time: '1h 00m',
      price: '120',
      image: '/volume-brasileiro.png',
      icon: <Sparkles className="service-card-icon" />
    },
    {
      id: 'volume-egipcio',
      name: 'Volume Egípcio',
      description: 'Efeito tridimensional com fios em W, ideal para cílios cheios e alinhados.',
      time: '1h 00m',
      price: '120',
      image: '/volume-egipicio.png',
      icon: <Crown className="service-card-icon" />
    },
    {
      id: 'volume-russo',
      name: 'Volume Russo',
      description: 'Volume intenso e glamouroso com fans artesanais para preenchimento marcante.',
      time: '1h 40m',
      price: '220',
      image: '/images/vomule-russo.png',
      icon: <Crown className="service-card-icon" />
    },
    {
      id: 'Fox Eyes',
      name: 'Fox Eyes',
      description: 'Efeito alongado e sofisticado que levanta o olhar com leveza e elegância',
      time: '1h 00m',
      price: '150',
      image: '/images/fox-eyes.png',
      icon: <Check className="service-card-icon" />
    },
    {
      id: 'manutencao',
      name: 'Manutenção',
      description: 'Reposição dos fios para manter seu olhar bonito, alinhado e preenchido.',
      time: ' 50m',
      price: '80',
      image: '/images/manutencao.png',
      icon: <RefreshCw className="service-card-icon" />
    },
    {
      id: 'remocao-segura',
      name: 'Remoção Segura',
      description: 'Remoção profissional sem danificar a saúde dos seus cílios naturais.',
      time: '50m',
      price: '40',
      image: '/images/remocao.png',
      icon: <Trash2 className="service-card-icon" />
    }
  ];

  const handleBook = (serviceName) => {
    if (onSelectService) onSelectService(serviceName);

    const bookingSection = document.getElementById('agendamento');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="services-section">
      <div className="brush-bg"></div>

      <div className="section-header">
        <span className="section-tag">Nossos Serviços</span>
        <h2 className="section-title">
          Soluções que <em>realçam sua beleza</em>
        </h2>
        <p className="section-subtitle">
          Escolha a técnica ideal para o seu estilo. Trabalhamos apenas com procedimentos seguros e personalizados.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card glass-card">
            <div className="service-image-box">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
                loading="lazy"
              />
            </div>

            <div className="service-card-content">
              <div className="service-card-header">
                <div className="service-icon-box">
                  {service.icon}
                </div>

                <span className="service-time">
                  <Clock size={14} />
                  {service.time}
                </span>
              </div>

              <h3 className="service-card-title">{service.name}</h3>
              <p className="service-card-desc">{service.description}</p>

              <div className="service-card-footer">
                <div className="service-price">
                  <span className="price-label">A partir de</span>
                  <span className="price-value">R$ {service.price}</span>
                </div>

                <button
                  onClick={() => handleBook(service.name)}
                  className="btn-service-action"
                  aria-label={`Agendar ${service.name}`}
                >
                  <span>Agendar</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-actions">
        <a href="#agendamento" className="btn btn-primary">
          Ver Todos os Serviços & Agendar
        </a>
      </div>
    </section>
  );
}