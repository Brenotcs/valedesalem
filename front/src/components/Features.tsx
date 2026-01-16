import React from 'react';
import { useTheme } from '../ThemeContext';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '✦',
      title: 'Feito à Mão',
      description: 'Cada peça é cuidadosamente criada com dedicação e energia positiva, carregando a essência do trabalho artesanal.'
    },
    {
      icon: '☽',
      title: 'Envio Nacional',
      description: 'Enviamos para todo o Brasil com segurança e cuidado, para que sua peça chegue perfeita até você.'
    },
    {
      icon: '✧',
      title: 'Peças Únicas',
      description: 'Designs exclusivos que capturam a essência do místico, combinando tradição e estética contemporânea.'
    }
  ];

  const { theme } = useTheme();
  const isLight = theme === 'light';
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-20 px-8 max-w-[1200px] mx-auto border-t border-gold/30"
      style={{ background: isLight ? '#fff' : undefined, color: isLight ? '#222' : undefined, transition: 'background 0.3s, color 0.3s' }}
    >
      {features.map((feature: Feature, index: number) => (
        <div
          className="text-center p-8"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 120}
          style={{ background: isLight ? '#fff' : undefined, borderRadius: isLight ? 16 : undefined, boxShadow: isLight ? '0 2px 12px rgba(0,0,0,0.04)' : undefined }}
        >
          <div className="text-4xl mb-6 text-gold">{feature.icon}</div>
          <h3
            className="text-xl font-light tracking-[2px] mb-4 uppercase"
            style={{ color: isLight ? '#222' : undefined }}
          >
            {feature.title}
          </h3>
          <p
            className="leading-relaxed tracking-wide"
            style={{ color: isLight ? '#444' : undefined }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Features;
