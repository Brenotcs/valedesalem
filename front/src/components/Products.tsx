import React, { useState, useRef, useEffect } from 'react';
import '../products-carousel.css';

interface Product {
  name: string;
  description: string;
  image: string;
  details: string;
  dimensions: string;
  materials: string;
}

const Products: React.FC = () => {
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
      name: 'Produto Padrão 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://placehold.co/500x500/e5e5e5/a3a3a3?text=Imagem+Vazia',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed arcu et odio elementum aliquet. Nullam sit amet elementum nisi.',
      dimensions: 'Lorem ipsum: 45cm',
      materials: 'Lorem ipsum, dolor sit amet'
    },
    {
      name: 'Produto Padrão 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://placehold.co/500x500/e5e5e5/a3a3a3?text=Imagem+Vazia',
      details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
      dimensions: 'Lorem ipsum: 20cm',
      materials: 'Lorem, ipsum, dolor'
    },
    {
      name: 'Produto Padrão 3',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://placehold.co/500x500/e5e5e5/a3a3a3?text=Imagem+Vazia',
      details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      dimensions: 'Lorem ipsum: 15cm',
      materials: 'Sit amet, consectetur'
    },
    {
      name: 'Produto Padrão 4',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
      image: 'https://placehold.co/500x500/e5e5e5/a3a3a3?text=Imagem+Vazia',
      details: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
      dimensions: 'Lorem ipsum: 10cm',
      materials: 'Adipisci, velit, sed'
    },
    {
      name: 'Produto Padrão 5',
      description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      image: 'https://placehold.co/500x500/e5e5e5/a3a3a3?text=Imagem+Vazia',
      details: 'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus.',
      dimensions: 'Lorem ipsum: 5cm',
      materials: 'Accusamus, et, iusto'
    },
    {
      name: 'Produto Padrão 6',
      description: 'Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
      image: 'https://placehold.co/500x500/e5e5e5/a3a3a3?text=Imagem+Vazia',
      details: 'Sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      dimensions: 'Lorem ipsum: 30cm',
      materials: 'Blanditiis, praesentium'
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
    <section id="produtos" className="py-20 px-8 border-t border-gold/30" style={{ background: '#fff', color: '#222' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-[4px] mb-4 uppercase" style={{ color: '#222' }}>
            Nossa Coleção
          </h2>
          <p className="text-lg" style={{ color: '#444' }}>
            Peças únicas feitas à mão com amor e energia positiva
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 carousel-products"
          ref={carouselRef}
        >
          {products.map((product, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden border transition-all duration-300 flex flex-col h-full min-h-[420px] carousel-product-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  minHeight: 480,
                  background: '#f7f7f7',
                  color: '#222',
                  border: '1px solid #e5e5e5',
                  maxWidth: 340,
                  width: '100%',
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#e5e5e5] to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-light tracking-[2px] mb-2 text-gold">
                  <span style={{ color: '#bfa23a' }}>{product.name}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  <span style={{ color: '#555' }}>{product.description}</span>
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-6 py-2 bg-transparent border-2 border-gold no-underline text-gold text-sm tracking-wider uppercase mt-auto cursor-pointer relative overflow-hidden group/button"
                  style={{ color: '#bfa23a', borderColor: '#bfa23a', background: '#fff', position: 'relative', zIndex: 1 }}
                >
                  <span
                    className="absolute inset-0 bg-gold -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 -z-10"
                    style={{ zIndex: 0 }}
                  ></span>
                  <span className="relative z-10 group-hover/button:text-black transition-colors duration-300">Ver Mais</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Barra de progresso do carrossel (apenas mobile) */}
        <div className="block md:hidden w-full mt-2 mb-6">
          <div style={{ height: 6, background: '#222', borderRadius: 4, overflow: 'hidden', width: '100%' }}>
            <div
              style={{
                width: `${Math.round(progress * 100)}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #d4af37 60%, #fffbe6 100%)',
                transition: 'width 0.2s',
              }}
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-sm italic" style={{ color: '#666' }}>
            * Imagens ilustrativas. Entre em contato para ver nossos produtos disponíveis.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 ${isClosing ? 'animate-[fadeOut_0.3s_ease-in_forwards]' : 'animate-[fadeIn_0.3s_ease-out]'}`}
          onClick={closeModal}
        >
          <div
            className={`border-2 border-gold/40 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden ${isClosing ? 'animate-[scaleOut_0.3s_ease-in_forwards]' : 'animate-[scaleIn_0.3s_ease-out]'}`}
            style={{ background: '#f7f7f7', color: '#222' }}
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
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#e5e5e5] hover:bg-[#bfa23a] text-[#bfa23a] hover:text-white rounded-full transition-colors cursor-pointer"
                >
                  ✕
                </button>
                <h3 className="text-3xl font-light tracking-[3px] mb-6 pr-8" style={{ color: '#bfa23a' }}>
                  {selectedProduct.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 style={{ color: '#bfa23a' }} className="font-light tracking-wider uppercase text-sm mb-2">Descrição</h4>
                    <p className="leading-relaxed text-sm" style={{ color: '#444' }}>{selectedProduct.details}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#bfa23a' }} className="font-light tracking-wider uppercase text-sm mb-2">Dimensões</h4>
                    <p className="text-sm" style={{ color: '#444' }}>{selectedProduct.dimensions}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#bfa23a' }} className="font-light tracking-wider uppercase text-sm mb-2">Materiais</h4>
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
        .group\/button:hover .group-hover\/button\:translate-x-0 {
          transform: translateX(0) !important;
        }
        .group\/button:hover .group-hover\/button\:text-black {
          color: #18181a !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
