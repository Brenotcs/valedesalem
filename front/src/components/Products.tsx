import React, { useState } from 'react';

interface Product {
  name: string;
  description: string;
  price: string;
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
      price: 'R$ 45,00',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      details: 'Colar delicado confeccionado com miçangas de vidro prateadas e um pingente de lua crescente em metal. Cada peça é única e carrega a energia da lua.',
      dimensions: 'Comprimento: 45cm (ajustável)',
      materials: 'Miçangas de vidro, fecho em metal prateado, pingente de lua'
    },
    {
      name: 'Pulseira Proteção',
      description: 'Pulseira de miçangas pretas e douradas, confeccionada com intenção de proteção e força interior.',
      price: 'R$ 35,00',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
      details: 'Pulseira artesanal que combina miçangas pretas e douradas em um padrão harmonioso. Ideal para uso diário.',
      dimensions: 'Tamanho único (ajustável de 16 a 20cm)',
      materials: 'Miçangas de vidro pretas e douradas, fio resistente'
    },
    {
      name: 'Brincos Estrela',
      description: 'Brincos delicados com miçangas coloridas formando estrelas. Leveza e magia em cada movimento.',
      price: 'R$ 28,00',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
      details: 'Par de brincos em formato de estrela, confeccionados com miçangas coloridas que brilham com a luz. Leves e confortáveis para uso prolongado.',
      dimensions: 'Altura: 4cm',
      materials: 'Miçangas coloridas, anzol em metal hipoalergênico'
    },
    {
      name: 'Colar Chakras',
      description: 'Colar com miçangas nas cores dos 7 chakras. Equilíbrio e harmonização energética.',
      price: 'R$ 52,00',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      details: 'Colar especial com miçangas representando as cores dos 7 chakras: vermelho, laranja, amarelo, verde, azul, índigo e violeta. Para equilíbrio energético.',
      dimensions: 'Comprimento: 50cm (ajustável)',
      materials: 'Miçangas coloridas representando cada chakra, fecho ajustável'
    },
    {
      name: 'Pulseira Abundância',
      description: 'Pulseira artesanal em tons de verde e dourado. Atrai prosperidade e abundância.',
      price: 'R$ 38,00',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop',
      details: 'Pulseira que combina tons de verde e dourado, simbolizando prosperidade e crescimento. Design elegante e versátil.',
      dimensions: 'Tamanho único (ajustável de 16 a 20cm)',
      materials: 'Miçangas verdes e douradas, fio elástico resistente'
    },
    {
      name: 'Tornozeleira Verão',
      description: 'Tornozeleira vibrante com miçangas coloridas. Alegria e leveza para seus passos.',
      price: 'R$ 32,00',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
      details: 'Tornozeleira colorida e vibrante, perfeita para o verão. Cada cor traz alegria e leveza aos seus passos.',
      dimensions: 'Comprimento: 25cm (ajustável)',
      materials: 'Miçangas coloridas de vidro, fecho ajustável'
    }
  ];

  return (
    <section id="produtos" className="py-20 px-8 border-t border-gold/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-[4px] mb-4 uppercase">
            Nossa Coleção
          </h2>
          <p className="text-gray-400 text-lg">
            Peças únicas feitas à mão com amor e energia positiva
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-zinc-900/50 rounded-lg overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-light tracking-[2px] mb-2 text-gold">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-gold">
                    {product.price}
                  </span>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="px-6 py-2 bg-transparent border border-gold text-gold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gold hover:text-black"
                  >
                    Ver Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm italic">
            * Imagens ilustrativas. Entre em contato para ver nossos produtos disponíveis.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-zinc-900 border-2 border-gold/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 text-gold rounded-full transition-colors"
              >
                ✕
              </button>
              
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-light tracking-[3px] mb-2 text-gold">
                {selectedProduct.name}
              </h3>
              <p className="text-4xl font-light text-gold mb-6">
                {selectedProduct.price}
              </p>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-gold font-light tracking-wider uppercase text-sm mb-2">Descrição</h4>
                  <p className="leading-relaxed">{selectedProduct.details}</p>
                </div>
                
                <div>
                  <h4 className="text-gold font-light tracking-wider uppercase text-sm mb-2">Dimensões</h4>
                  <p>{selectedProduct.dimensions}</p>
                </div>
                
                <div>
                  <h4 className="text-gold font-light tracking-wider uppercase text-sm mb-2">Materiais</h4>
                  <p>{selectedProduct.materials}</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.instagram.com/valedesalem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-6 bg-gold text-black font-light tracking-wider uppercase transition-all duration-300 hover:bg-gold/90"
                >
                  Comprar no Instagram
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-3 border border-gold/40 text-gray-400 font-light tracking-wider uppercase transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Fechar
                </button>
              </div>
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
    </section>
  );
};

export default Products;
