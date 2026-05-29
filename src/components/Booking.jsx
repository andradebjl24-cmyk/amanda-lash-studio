import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Clock, Send, Sparkles } from 'lucide-react';

export default function Booking({ selectedService, setSelectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  // Sync selected service from parent if it changes
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear selection state in parent if user manually changes service in dropdown
    if (name === 'service' && setSelectedService) {
      setSelectedService(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      setFormStatus('error');
      return;
    }

    // Format date from YYYY-MM-DD to DD/MM/YYYY
    const dateParts = formData.date.split('-');
    const formattedDate = dateParts.length === 3 ? `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}` : formData.date;

    // Construct WhatsApp message text
    const baseText = `Olá Amanda! Gostaria de agendar um horário:\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Serviço:* ${formData.service}\n` +
      `*Data Desejada:* ${formattedDate}`;
    
    const finalMsg = formData.message 
      ? `${baseText}\n*Mensagem:* ${formData.message}`
      : baseText;

    const encodedMsg = encodeURIComponent(finalMsg);
    const whatsappLink = `https://wa.me/5511999999999?text=${encodedMsg}`;

    setFormStatus('success');
    
    // Open WhatsApp link in a new window
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setFormStatus('');
    }, 1500);
  };

  return (
    <section id="agendamento" className="booking-section">
      <div className="brush-bg"></div>
      
      <div className="section-header">
        <span className="section-tag">Agendamento</span>
        <h2 className="section-title">Pronta para <em>transformar seu olhar</em>?</h2>
        <p className="section-subtitle">
          Preencha o formulário abaixo para enviar sua solicitação diretamente pelo WhatsApp ou use nossos contatos rápidos.
        </p>
      </div>

      <div className="booking-grid">
        
        {/* Left Side: Contact Information & Hours */}
        <div className="booking-info-column">
          <div className="booking-card glass-card">
            <h3 className="booking-card-title">Canais Rápidos</h3>
            <p className="booking-card-intro">
              Prefere agendar diretamente conversando com a gente? Escolha um canal abaixo:
            </p>
            
            <div className="booking-buttons">
              <a 
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-booking-fast"
              >
                <Phone size={18} />
                <span>Agendar pelo WhatsApp</span>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-booking-fast"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Agendar pelo Instagram</span>
              </a>
            </div>
          </div>

          <div className="booking-card glass-card hours-card">
            <div className="hours-header">
              <Clock className="hours-icon" size={24} />
              <h3>Horários de Atendimento</h3>
            </div>
            
            <ul className="hours-list">
              <li>
                <span className="day">Segunda a Sexta</span>
                <span className="time">9h às 19h</span>
              </li>
              <li>
                <span className="day">Sábado</span>
                <span className="time">9h às 15h</span>
              </li>
              <li className="closed">
                <span className="day">Domingo</span>
                <span className="time font-bold text-rose">Fechado</span>
              </li>
            </ul>
            
            <div className="hours-notice">
              <Sparkles size={14} className="notice-icon" />
              <span>Atendemos exclusivamente com hora marcada.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Booking Form */}
        <div className="booking-form-column">
          <form className="booking-form glass-card" onSubmit={handleSubmit} aria-label="Formulário de Agendamento">
            <h3 className="form-title">Agende seu Horário</h3>
            <p className="form-subtitle">Preencha os dados e escolha seu procedimento:</p>
            
            <div className="form-group">
              <label htmlFor="name">Nome Completo *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Ex: Maria Oliveira" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">WhatsApp *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Ex: (11) 99999-9999" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Serviço Desejado *</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione um serviço</option>
                  <option value="Volume Brasileiro">Volume Brasileiro - R$ 150</option>
                  <option value="Volume Egípcio">Volume Egípcio - R$ 170</option>
                  <option value="Volume Russo">Volume Russo - R$ 220</option>
                  <option value="Fio a Fio Clássico">Fio a Fio Clássico - R$ 130</option>
                  <option value="Manutenção">Manutenção - R$ 90</option>
                  <option value="Remoção Segura">Remoção Segura - R$ 40</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Data Desejada *</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem ou Observações (Opcional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows="3" 
                placeholder="Escreva alguma dúvida ou detalhe..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-gold btn-submit w-full">
              <Send size={16} />
              <span>Agendar Meu Horário</span>
            </button>

            {formStatus === 'success' && (
              <div className="form-message success" role="alert">
                ✓ Sucesso! Redirecionando para o WhatsApp...
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-message error" role="alert">
                ✗ Por favor, preencha todos os campos obrigatórios (*).
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
