import React from 'react';
import { useTheme } from '../ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  return (
    <footer
      className="text-center py-12 px-8 border-t border-gold/30 tracking-wider text-sm"
      style={{ background: isLight ? '#fff' : '#18181a', color: isLight ? '#888' : '#ccc', transition: 'background 0.3s, color 0.3s' }}
    >
      © 2026 Vale de Salem. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
