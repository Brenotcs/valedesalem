import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <Hero />
      <Features />
      <Products />
      <Instagram />
      <Footer />
    </div>
  );
};

export default App;
