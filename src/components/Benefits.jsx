import React from 'react';
import { CheckCircle2, Sparkles, Eye, ShieldAlert, Heart, Sun } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      num: '01',
      title: 'Praticidade no Dia a Dia',
      desc: 'Acorde pronta todos os dias! Esqueça o rímel que borra e economize valiosos minutos na sua rotina diária de maquiagem.',
      icon: <Sun size={20} />
    },
    {
      num: '02',
      title: 'Olhar Marcante e Expressivo',
      desc: 'Destaque a beleza e a cor dos seus olhos com cílios longos, curvados e volumosos, que mantêm a expressão radiante.',
      icon: <Eye size={20} />
    },
    {
      num: '03',
      title: 'Menos Necessidade de Maquiagem',
      desc: 'A extensão já preenche o olhar de forma tão completa que você se sentirá confiante usando muito menos maquiagem na pele.',
      icon: <Sparkles size={20} />
    },
    {
      num: '04',
      title: 'Resultado Personalizado',
      desc: 'Cada conjunto de cílios é planejado de acordo com a curvatura, tamanho e formato dos seus olhos, garantindo harmonia perfeita.',
      icon: <Heart size={20} />
    },
    {
      num: '05',
      title: 'Autoestima Elevada',
      desc: 'Sinta-se segura, poderosa e confiante a qualquer hora do dia. O impacto visual positivo gera bem-estar imediato.',
      icon: <CheckCircle2 size={20} />
    }
  ];

  return (
    <section id="beneficios" className="benefits-section">
      <div className="benefits-container">
        
        {/* Left Side: Graphic Intro */}
        <div className="benefits-intro">
          <span className="section-tag">Por que Escolher?</span>
          <h2 className="section-title">A transformação que você <em>sente no dia a dia</em></h2>
          <p className="benefits-intro-text">
            Mais do que um procedimento estético, a extensão de cílios é um investimento em praticidade, confiança e bem-estar. Veja como ela transforma sua rotina.
          </p>
          
          <div className="benefits-badge-card glass-card">
            <div className="badge-highlight">100%</div>
            <div>
              <h4>Segurança Ocular</h4>
              <p>Materiais premium testados e aprovados que preservam a integridade dos seus fios.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Benefits Stack */}
        <div className="benefits-list">
          {benefitsList.map((benefit) => (
            <div key={benefit.num} className="benefit-card glass-card">
              <div className="benefit-header">
                <div className="benefit-icon-box">
                  {benefit.icon}
                </div>
                <span className="benefit-number">{benefit.num}</span>
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
