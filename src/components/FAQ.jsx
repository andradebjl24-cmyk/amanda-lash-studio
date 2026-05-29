import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqItems = [
    {
      id: 1,
      question: 'A extensão de cílios danifica os fios naturais?',
      answer: 'Não! Quando aplicada por um profissional qualificado usando a técnica correta de isolamento, peso e tamanho adequados para cada fio natural, os seus cílios originais continuam crescendo e caindo no ciclo biológico normal, sem nenhum prejuízo à saúde ocular.'
    },
    {
      id: 2,
      question: 'Quanto tempo dura o procedimento?',
      answer: 'A aplicação completa de um conjunto novo leva em média de 1h30 a 2h30, dependendo da técnica escolhida (Volume Russo exige mais tempo que o Fio a Fio). Os cílios aplicados duram de 4 a 6 semanas, mas a manutenção regular é recomendada para manter o preenchimento impecável.'
    },
    {
      id: 3,
      question: 'Precisa fazer manutenção?',
      answer: 'Sim! Nossos cílios naturais têm um ciclo de renovação e caem diariamente. Para manter as extensões sempre cheias, alinhadas e bonitas, recomendamos fazer a manutenção a cada 15 ou 21 dias, onde removemos os fios crescidos e colamos novos.'
    },
    {
      id: 4,
      question: 'Posso molhar as extensões?',
      answer: 'Sim, você deve molhar e higienizar! O ideal é aguardar de 12 a 24 horas após a aplicação para que a cola cure completamente. Após esse período, a lavagem diária com água morna/fria e shampoo neutro para bebês é fundamental para a saúde e retenção dos fios.'
    },
    {
      id: 5,
      question: 'Como cuidar após o procedimento?',
      answer: 'Os cuidados são simples: evite usar rímel ou curvex; use demaquilantes à base de água (não use óleos ou bifásicos nos olhos); penteie os cílios uma vez ao dia com a escovinha que fornecemos; evite esfregar os olhos com força ou dormir de bruços.'
    }
  ];

  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-header">
        <span className="section-tag">Dúvidas Frequentes</span>
        <h2 className="section-title">Perguntas <em>Comuns</em></h2>
        <p className="section-subtitle">
          Esclareça suas principais dúvidas sobre o procedimento de extensão de cílios e cuidados diários.
        </p>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item glass-card ${openId === item.id ? 'open' : ''}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <button 
                className="faq-question-btn" 
                aria-expanded={openId === item.id}
                aria-label={`Visualizar resposta para: ${item.question}`}
              >
                <div className="faq-question-text">
                  <HelpCircle size={18} className="faq-icon-help" />
                  <span>{item.question}</span>
                </div>
                <ChevronDown size={18} className="faq-chevron" />
              </button>
              
              <div className="faq-answer-wrapper">
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
