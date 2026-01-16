import React, { useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import logowhite from '../assets/logowhite.png';
import { useTheme } from '../ThemeContext';
import '../hero-mobile.css';

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

  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center flex-col py-16 px-8 relative"
      ref={heroRef}
      data-aos="fade-down"
      data-aos-duration="900"
      style={{
        background: isLight ? '#fff' : '#18181a',
        color: isLight ? '#222' : '#fff',
        transition: 'background 0.3s, color 0.3s'
      }}
    >
      <div
        className="absolute top-[10%] right-[10%] w-[120px] h-[120px] rounded-full opacity-90 shadow-[0_0_60px_rgba(212,175,55,0.5)] hero-moon-mobile cursor-pointer"
        style={{ background: isLight ? 'radial-gradient(circle at 30% 30%, #fff, #e5e5e5)' : 'radial-gradient(circle at 30% 30%, #222, #444)' }}
        ref={moonRef}
        onClick={toggleTheme}
        title="Alternar tema"
      ></div>
      <div className="max-w-[800px] text-center z-10">
        <img draggable="false"
          src={isLight ? logo : logowhite}
          alt="Vale de Salem logo"
          className="mx-auto mb-6 w-32 h-auto"
          style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 8px #fff8)' }}
          data-aos="fade-up"
          data-aos-delay="50"
        />
        <h1
          className="text-5xl font-light mb-6 tracking-[4px] leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          ☾ Acessórios Artesanais ☾
        </h1>
        <p
          className="text-lg leading-relaxed mb-4 tracking-wide italic"
          style={{ color: isLight ? '#444' : '#e5e5e5' }}
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Mudando sua vida com magia e energia positiva
        </p>
        <p
          className="text-base mb-2"
          style={{ color: '#bfa23a' }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Salvador-BA
        </p>
        <p
          className="text-sm mb-12"
          style={{ color: isLight ? '#888' : '#ccc' }}
          data-aos="fade-up"
          data-aos-delay="550"
        >
          Enviamos para todo o Brasil
        </p>
        <a 
          href="#produtos" 
          className="inline-block py-4 px-12 bg-transparent border-2 border-gold no-underline tracking-[3px] uppercase text-sm transition-all duration-300 relative overflow-hidden group"
          style={{ color: '#bfa23a', borderColor: '#bfa23a', background: isLight ? '#fff' : '#222', position: 'relative', zIndex: 1 }}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <span
            className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"
            style={{ zIndex: 0 }}
          ></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">Explorar Coleção</span>
        </a>
      </div>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .group:hover .group-hover\:text-black {
          color: #18181a !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
