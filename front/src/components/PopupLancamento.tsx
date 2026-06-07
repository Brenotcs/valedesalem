import React, { useState, useEffect } from 'react';
import img1 from '../assets/lancamento/img1.webp';

const PopupLancamento: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // tempo da animação de saída
  };

  const handleClose = () => {
    closePopup();
  };

  const handleVerLancamento = () => {
    closePopup();
    setTimeout(() => {
      const element = document.getElementById('lancamento');
      if (element) {
        const offset = 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8 ${isClosing ? 'animate-[fadeOut_0.3s_ease-in_forwards]' : 'animate-[fadeIn_0.4s_ease-out]'}`}>
      <div className={`bg-white max-w-4xl w-full flex flex-col-reverse md:flex-row overflow-hidden shadow-2xl relative rounded-2xl border-4 border-green-500/30 ${isClosing ? 'animate-[scaleOut_0.3s_ease-in_forwards]' : 'animate-[scaleIn_0.4s_ease-out]'}`}>
        
        {/* Lado Esquerdo - Textos e Botão */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center items-center text-center relative bg-white min-h-[400px] md:min-h-[500px]">
           {/* Triângulos Decorativos */}
           <div className="absolute top-10 left-12 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#b8ff22] -rotate-12 hidden md:block"></div>
           <div className="absolute top-1/4 right-8 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-l-transparent border-r-transparent border-b-[#b8ff22] rotate-[45deg] hidden md:block"></div>
           <div className="absolute bottom-1/3 left-6 w-0 h-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#b8ff22] rotate-[110deg] hidden md:block"></div>
           <div className="absolute bottom-12 right-16 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#b8ff22] rotate-[-25deg]"></div>

           <h2 className="text-4xl md:text-5xl font-black mb-6 text-black leading-tight tracking-tight">
             Lançamento <br/> Copa do Mundo!
           </h2>
           <p className="text-gray-800 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-sm">
             Olha o que trouxemos! Nossas novas chokers exclusivas da seleção chegaram. Garanta a sua antes que acabe!
           </p>
           
           <button
             onClick={handleVerLancamento}
             className="px-8 py-4 border-4 border-[#b8ff22] border-dashed text-black font-black text-xl tracking-widest uppercase hover:bg-[#f4ffdc] transition-colors duration-300 relative cursor-pointer"
           >
             <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-[#b8ff22] -rotate-90"></div>
             [VER CATÁLOGO]
           </button>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="flex-1 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 font-black text-2xl transition-colors cursor-pointer drop-shadow-md"
            aria-label="Fechar popup"
          >
            ✕
          </button>
          
          <img 
            src={img1} 
            alt="Nova Choker do Brasil" 
            className="w-full h-[250px] md:h-full object-cover"
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scaleOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default PopupLancamento;
