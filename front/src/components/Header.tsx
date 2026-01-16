import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showFloating, setShowFloating] = useState(false);
  const featuresRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Encontrar a sessão Features pelo id ou tag
    const handleScroll = () => {
      const featuresSection = document.getElementById('features-section');
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        setShowFloating(rect.top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="text-center py-12 px-8 relative border-b border-gold/30"
        style={{ background: theme === 'light' ? '#fff' : undefined }}
      >
        <div className="text-4xl font-light tracking-[8px] mb-2 uppercase" style={{ color: theme === 'light' ? '#222' : '#fff' }}>
          Vale de Salem
        </div>
        <div className="text-sm tracking-[3px] text-gold italic">
          Acessórios Artesanais
        </div>
      </header>
      {/* Botão flutuante de tema */}
      {showFloating && (
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          style={{
            position: 'fixed',
            top: '50%',
            right: 24,
            transform: 'translateY(-50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid rgba(191,162,58,0.35)',
            background: theme === 'light' ? 'rgba(255,255,255,0.35)' : 'rgba(34,34,34,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            transition: 'background 0.3s, border 0.3s',
            zIndex: 1000,
            opacity: 0.55,
          }}
        >
          {theme === 'light' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bfa23a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" fill="#fffbe6" />
              <g stroke="#bfa23a">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bfa23a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="#18181a" />
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default Header;
