import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHero from './components/HomeHero';
import ServicesSection from './components/ServicesSection';
import SapereAudeSection from './components/SapereAudeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import PoliciesSection from './components/PoliciesSection';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeHero setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesSection setCurrentPage={setCurrentPage} />;
      case 'sapereAude':
        return <SapereAudeSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      case 'policies':
        return <PoliciesSection />;
      default:
        return <HomeHero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LayoutHeader setCurrentPage={setCurrentPage} />
      <main className="flex-grow pt-16 sm:pt-20"> {/* pt-16 para móviles, pt-20 para pantallas más grandes */}
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;