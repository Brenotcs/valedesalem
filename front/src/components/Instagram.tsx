import React from 'react';
import img1 from '../assets/postsinsta/img1.jpg';
import img2 from '../assets/postsinsta/img2.jpg';
import img3 from '../assets/postsinsta/img3.jpg';

const Instagram: React.FC = () => {
  const posts = [
    {
      url: 'https://www.instagram.com/p/CjButADMSeZ/?img_index=1',
      image: img1,
      alt: 'Acessório artesanal 1'
    },
    {
      url: 'https://www.instagram.com/p/CoKnl-cgGQ-/?img_index=1',
      image: img2,
      alt: 'Acessório artesanal 2'
    },
    {
      url: 'https://www.instagram.com/p/Cou6N7lANCR/?img_index=1',
      image: img3,
      alt: 'Acessório artesanal 3'
    }
  ];

  return (
    <section className="py-20 px-8 border-t border-gold/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <svg 
              className="w-16 h-16 mx-auto" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#F58529' }} />
                  <stop offset="25%" style={{ stopColor: '#DD2A7B' }} />
                  <stop offset="50%" style={{ stopColor: '#8134AF' }} />
                  <stop offset="100%" style={{ stopColor: '#515BD4' }} />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)"/>
            </svg>
          </div>
          <h2 className="text-3xl font-light tracking-[4px] mb-6 uppercase">
            Siga no Instagram
          </h2>
          <a 
            href="https://www.instagram.com/valedesalem/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 bg-transparent border-2 border-gold text-gold no-underline tracking-[2px] text-lg transition-all duration-300 relative overflow-hidden group hover:text-black"
          >
            <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"></span>
            @valedesalem
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-lg group aspect-square"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                  Ver no Instagram
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
