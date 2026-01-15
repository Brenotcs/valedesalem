import React from 'react';
import { useTheme } from '../ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
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
      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '1.5px solid #bfa23a',
          background: theme === 'light' ? '#fff' : '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          transition: 'background 0.3s, border 0.3s',
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
    </header>
  );
};

export default Header;
