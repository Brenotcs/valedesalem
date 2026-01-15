import React from 'react';

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

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-20 px-8 max-w-[1200px] mx-auto border-t border-gold/30">
      {features.map((feature: Feature, index: number) => (
        <div 
          className="text-center p-8 transition-transform duration-300 hover:-translate-y-2.5" 
          key={index}
        >
          <div className="text-4xl mb-6 text-gold">{feature.icon}</div>
          <h3 className="text-xl font-light tracking-[2px] mb-4 uppercase">
            {feature.title}
          </h3>
          <p className="text-gray-400 leading-relaxed tracking-wide">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Features;
