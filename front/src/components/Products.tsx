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

  const products: Product[] = [
    {
      name: 'Colar Lua Mística',
      description: 'Colar artesanal com miçangas prateadas e pingente de lua crescente. Perfeito para rituais noturnos.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      details: 'Colar delicado confeccionado com miçangas de vidro prateadas e um pingente de lua crescente em metal. Cada peça é única e carrega a energia da lua.',
      dimensions: 'Comprimento: 45cm (ajustável)',
      materials: 'Miçangas de vidro, fecho em metal prateado, pingente de lua'
    },
    {
      name: 'Pulseira Proteção',
      description: 'Pulseira de miçangas pretas e douradas, confeccionada com intenção de proteção e força interior.',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
      details: 'Pulseira artesanal que combina miçangas pretas e douradas em um padrão harmonioso. Ideal para uso diário.',
      dimensions: 'Tamanho único (ajustável de 16 a 20cm)',
      materials: 'Miçangas de vidro pretas e douradas, fio resistente'
    },
    {
      name: 'Brincos Estrela',
      description: 'Brincos delicados com miçangas coloridas formando estrelas. Leveza e magia em cada movimento.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
      details: 'Par de brincos em formato de estrela, confeccionados com miçangas coloridas que brilham com a luz. Leves e confortáveis para uso prolongado.',
      dimensions: 'Altura: 4cm',
      materials: 'Miçangas coloridas, anzol em metal hipoalergênico'
    },
    {
      name: 'Colar Chakras',
      description: 'Colar com miçangas nas cores dos 7 chakras. Equilíbrio e harmonização energética.',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      details: 'Colar especial com miçangas representando as cores dos 7 chakras: vermelho, laranja, amarelo, verde, azul, índigo e violeta. Para equilíbrio energético.',
      dimensions: 'Comprimento: 50cm (ajustável)',
      materials: 'Miçangas coloridas representando cada chakra, fecho ajustável'
    },
    {
      name: 'Pulseira Abundância',
      description: 'Pulseira artesanal em tons de verde e dourado. Atrai prosperidade e abundância.',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop',
      details: 'Pulseira que combina tons de verde e dourado, simbolizando prosperidade e crescimento. Design elegante e versátil.',
      dimensions: 'Tamanho único (ajustável de 16 a 20cm)',
      materials: 'Miçangas verdes e douradas, fio elástico resistente'
    },
    {
      name: 'Tornozeleira Verão',
      description: 'Tornozeleira vibrante com miçangas coloridas. Alegria e leveza para seus passos.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
      details: 'Tornozeleira colorida e vibrante, perfeita para o verão. Cada cor traz alegria e leveza aos seus passos.',
      dimensions: 'Comprimento: 25cm (ajustável)',
      materials: 'Miçangas coloridas de vidro, fecho ajustável'
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
                  maxHeight: 480,
                  height: 480,
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="border-2 border-gold/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-[scaleIn_0.3s_ease-out]"
            style={{ background: '#f7f7f7', color: '#222' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#e5e5e5] hover:bg-[#bfa23a] text-[#bfa23a] hover:text-white rounded-full transition-colors cursor-pointer"
              >
                ✕
              </button>
              <img draggable="false"
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-light tracking-[3px] mb-2" style={{ color: '#bfa23a' }}>
                {selectedProduct.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 style={{ color: '#bfa23a' }} className="font-light tracking-wider uppercase text-sm mb-2">Descrição</h4>
                  <p className="leading-relaxed" style={{ color: '#444' }}>{selectedProduct.details}</p>
                </div>
                <div>
                  <h4 style={{ color: '#bfa23a' }} className="font-light tracking-wider uppercase text-sm mb-2">Dimensões</h4>
                  <p style={{ color: '#444' }}>{selectedProduct.dimensions}</p>
                </div>
                <div>
                  <h4 style={{ color: '#bfa23a' }} className="font-light tracking-wider uppercase text-sm mb-2">Materiais</h4>
                  <p style={{ color: '#444' }}>{selectedProduct.materials}</p>
                </div>
              </div>
              {/* Botões removidos, apenas o X para fechar */}
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
