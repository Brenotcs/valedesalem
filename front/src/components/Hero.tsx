import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Criar estrelas aleatórias
    const hero = heroRef.current;
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'absolute w-[2px] h-[2px] rounded-full bg-gold opacity-0 animate-[twinkle_3s_infinite]';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      hero.appendChild(star);
    }

    // Efeito parallax suave na lua
    const handleMouseMove = (e: MouseEvent): void => {
      const moon = moonRef.current;
      if (moon) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        moon.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center flex-col py-16 px-8 relative" ref={heroRef}>
      <div 
        className="absolute top-[10%] right-[10%] w-[120px] h-[120px] rounded-full opacity-90 shadow-[0_0_60px_rgba(212,175,55,0.5)]"
        style={{ background: 'radial-gradient(circle at 30% 30%, #fff, #e5e5e5)' }}
        ref={moonRef}
      ></div>
      <div className="max-w-[800px] text-center z-10">
        <h1 className="text-5xl font-light mb-6 tracking-[4px] leading-tight">
          ☾ Acessórios Artesanais ☾
        </h1>
        <p className="text-lg leading-relaxed mb-4 text-gray-300 tracking-wide italic">
          Mudando sua vida com magia e energia positiva
        </p>
        <p className="text-base text-gold mb-2">
          Salvador-BA
        </p>
        <p className="text-sm text-gray-400 mb-12">
          Enviamos para todo o Brasil
        </p>
        <a 
          href="#produtos" 
          className="inline-block py-4 px-12 bg-transparent border-2 border-gold text-gold no-underline tracking-[3px] uppercase text-sm transition-all duration-300 relative overflow-hidden group hover:text-black"
        >
          <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"></span>
          Explorar Coleção
        </a>
      </div>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
