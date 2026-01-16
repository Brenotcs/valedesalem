import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Bloqueia menu de contexto e arrastar em todas as imagens
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart', e => e.preventDefault());
  });
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
