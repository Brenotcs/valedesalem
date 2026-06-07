import React, { useState, useRef, useEffect } from 'react';
import '../products-carousel.css';
import img1 from '../assets/lancamento/img1.webp';
import img2 from '../assets/lancamento/img2.webp';
import img3 from '../assets/lancamento/img3.webp';
import img4 from '../assets/lancamento/img4.webp';
import img5 from '../assets/lancamento/img5.webp';

interface Product {
  name: string;
  description: string;
  image: string;
  details: string;
  dimensions: string;
  materials: string;
}

const Lancamento: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsClosing(false);
    }, 300);
  };

  const products: Product[] = [
    {
      name: 'Choker Copa Brasil 1',
      description: 'Choker especial para a Copa do Mundo. Mostre seu amor pelo Brasil com estilo.',
      image: img1,
      details: 'Choker com as cores da bandeira do Brasil, confeccionada com muito orgulho para a Copa do Mundo.',
      dimensions: 'Tamanho único (ajustável)',
      materials: 'Miçangas especiais, fecho seguro'
    },
    {
      name: 'Choker Copa Brasil 2',
      description: 'Choker exclusiva verde e amarela. Edição limitada para torcer pelo Brasil.',
      image: img2,
      details: 'Design único e vibrante, combinando as cores da nossa seleção em uma peça delicada.',
      dimensions: 'Tamanho único (ajustável)',
      materials: 'Miçangas, pingentes temáticos'
    },
    {
      name: 'Choker Copa Brasil 3',
      description: 'Acessório perfeito para vibrar na Copa. Leve as cores do Brasil com você.',
      image: img3,
      details: 'Mais que uma choker, um símbolo de torcida. Confeccionada com materiais de alta qualidade.',
      dimensions: 'Tamanho único (ajustável)',
      materials: 'Miçangas, fecho resistente'
    },
    {
      name: 'Choker Copa Brasil 4',
      description: 'Torça com elegância. Choker especial do Brasil em edição de colecionador.',
      image: img4,
      details: 'Perfeita para compor seu look de torcedora durante os jogos da seleção.',
      dimensions: 'Tamanho único (ajustável)',
      materials: 'Miçangas selecionadas'
    },
    {
      name: 'Choker Copa Brasil 5',
      description: 'Celebre o futebol com a choker oficial de lançamento da Copa.',
      image: img5,
      details: 'Brilhe nos jogos com essa choker exclusiva, desenhada especialmente para o campeonato.',
      dimensions: 'Tamanho único (ajustável)',
      materials: 'Materiais premium'
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = carouselRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
    };
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="lancamento" className="py-20 px-8 border-t border-green-500/30" style={{ background: '#f0fdf4', color: '#222' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-green-100 text-green-800 border border-green-300 text-sm font-bold tracking-widest uppercase animate-pulse">
            Lançamento Especial
          </div>
          <h2 className="text-4xl font-bold tracking-[4px] mb-4 uppercase" style={{ color: '#166534' }}>
            Coleção Copa do Mundo
          </h2>
          <p className="text-lg font-medium" style={{ color: '#15803d' }}>
            Torça pelo Brasil com nossas novas chokers exclusivas!
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center gap-8 carousel-products"
          ref={carouselRef}
        >
          {products.map((product, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden border transition-all duration-300 flex flex-col h-full min-h-[420px] carousel-product-item w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  minHeight: 480,
                  background: '#f0fdf4',
                  color: '#222',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  maxWidth: 340,
                  margin: '0 auto',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
              <div className="relative overflow-hidden aspect-square cursor-pointer group/image" onClick={() => setSelectedProduct(product)}>
                <img draggable="false"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-light tracking-[2px] mb-2 text-green-800">
                  <span style={{ color: '#166534' }}>{product.name}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  <span style={{ color: '#555' }}>{product.description}</span>
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-6 py-2 bg-transparent border-2 border-green-600 no-underline text-green-700 text-sm tracking-wider uppercase mt-auto cursor-pointer relative overflow-hidden group/button"
                  style={{ color: '#15803d', borderColor: '#15803d', background: '#fff', position: 'relative', zIndex: 1 }}
                >
                  <span
                    className="absolute inset-0 bg-green-600 -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 -z-10"
                    style={{ zIndex: 0 }}
                  ></span>
                  <span className="relative z-10 group-hover/button:text-white transition-colors duration-300">Ver Mais</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Barra de progresso do carrossel (apenas mobile) */}
        <div className="block md:hidden w-full mt-2 mb-6">
          <div style={{ height: 6, background: '#dcfce7', borderRadius: 4, overflow: 'hidden', width: '100%' }}>
            <div
              style={{
                width: `${Math.round(progress * 100)}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #16a34a 60%, #4ade80 100%)',
                transition: 'width 0.2s',
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 ${isClosing ? 'animate-[fadeOut_0.3s_ease-in_forwards]' : 'animate-[fadeIn_0.3s_ease-out]'}`}
          onClick={closeModal}
        >
          <div
            className={`border-2 border-green-500/50 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden ${isClosing ? 'animate-[scaleOut_0.3s_ease-in_forwards]' : 'animate-[scaleIn_0.3s_ease-out]'}`}
            style={{ background: '#f0fdf4', color: '#222' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row h-auto md:h-[600px] overflow-y-auto md:overflow-hidden">
              <div className="w-full md:w-1/2 flex-shrink-0">
                <img draggable="false"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-[300px] md:h-[600px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center overflow-y-auto">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-green-600 text-green-800 hover:text-white rounded-full transition-colors cursor-pointer shadow-lg"
                >
                  ✕
                </button>
                <h3 className="text-3xl font-bold tracking-[2px] mb-6 pr-8" style={{ color: '#166534' }}>
                  {selectedProduct.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 style={{ color: '#15803d' }} className="font-bold tracking-wider uppercase text-sm mb-2">Descrição</h4>
                    <p className="leading-relaxed text-sm" style={{ color: '#444' }}>{selectedProduct.details}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#15803d' }} className="font-bold tracking-wider uppercase text-sm mb-2">Dimensões</h4>
                    <p className="text-sm" style={{ color: '#444' }}>{selectedProduct.dimensions}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#15803d' }} className="font-bold tracking-wider uppercase text-sm mb-2">Materiais</h4>
                    <p className="text-sm" style={{ color: '#444' }}>{selectedProduct.materials}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scaleOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.9); }
        }
      `}</style>
      <style>{`
        .group\\/button:hover .group-hover\\/button\\:translate-x-0 {
          transform: translateX(0) !important;
        }
        .group\\/button:hover .group-hover\\/button\\:text-white {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default Lancamento;
