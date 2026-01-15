import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { useApplyTheme } from './applyTheme';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  useApplyTheme();
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
