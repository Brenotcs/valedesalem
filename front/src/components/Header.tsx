import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 px-8 relative border-b border-gold/30">
      <div className="text-4xl font-light tracking-[8px] mb-2 text-white uppercase">
        Vale de Salem
      </div>
      <div className="text-sm tracking-[3px] text-gold italic">
        Acessórios Artesanais
      </div>
    </header>
  );
};

export default Header;
