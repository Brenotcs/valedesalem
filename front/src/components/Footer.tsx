import React from 'react';
import { useTheme } from '../ThemeContext';
import logo from '../assets/logo.png';
import logowhite from '../assets/logowhite.png';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  return (
    <footer
      className="text-center py-12 px-8 border-t border-gold/30 tracking-wider text-sm flex flex-col items-center gap-4"
      style={{ background: isLight ? '#fff' : '#18181a', color: isLight ? '#888' : '#ccc', transition: 'background 0.3s, color 0.3s' }}
    >
      <img
        src={isLight ? logo : logowhite}
        alt="Vale de Salem logo"
        className="mx-auto mb-2 w-24 h-auto"
        style={{ filter: isLight ? 'none' : 'drop-shadow(0 0 8px #fff8)' }}
        loading="lazy"
      />
      <span>© 2026 Vale de Salem. Todos os direitos reservados.</span>
    </footer>
  );
};

export default Footer;
