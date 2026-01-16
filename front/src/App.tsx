import React, { useEffect } from 'react';
import { ThemeProvider } from './ThemeContext';
import { useApplyTheme } from './applyTheme';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AppContent: React.FC = () => {
  useApplyTheme();
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);
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

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
