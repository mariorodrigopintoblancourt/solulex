import React, { useState } from 'react';

const LayoutHeader = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Cerrar el menú en móviles al seleccionar una opción
  };

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 z-50">
      <div className="flex items-center">
        {/* Logo en la esquina superior izquierda */}
        <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0aI05ko6MlP2v6X8etJWq7p3rj1iK9VwYu4nQ" alt="Logo Mario Pinto B." className="h-12 w-auto mr-4 rounded-lg" />
        <h1 className="text-2xl font-bold text-gray-900 hidden md:block">Mario Pinto B.</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <button onClick={() => handleNavigationClick('home')} className="text-gray-600 hover:text-gray-900 transition-colors text-lg">Inicio</button>
        <button onClick={() => handleNavigationClick('services')} className="text-gray-600 hover:text-gray-900 transition-colors text-lg">Servicios</button>
        <button onClick={() => handleNavigationClick('sapereAude')} className="text-gray-600 hover:text-gray-900 transition-colors text-lg">Proyecto Sapere Aude</button>
        <button onClick={() => handleNavigationClick('about')} className="text-gray-600 hover:text-gray-900 transition-colors text-lg">Nosotros</button>
        <button onClick={() => handleNavigationClick('contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-lg">Contacto</button>
        <button onClick={() => handleNavigationClick('policies')} className="text-gray-600 hover:text-gray-900 transition-colors text-lg">Políticas</button>
      </nav>
      <div className="md:hidden">
        {/* Icono de menú para móviles */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <button onClick={() => handleNavigationClick('home')} className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Inicio</button>
          <button onClick={() => handleNavigationClick('services')} className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Servicios</button>
          <button onClick={() => handleNavigationClick('sapereAude')} className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Proyecto Sapere Aude</button>
          <button onClick={() => handleNavigationClick('about')} className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Nosotros</button>
          <button onClick={() => handleNavigationClick('contact')} className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Contacto</button>
          <button onClick={() => handleNavigationClick('policies')} className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors">Políticas</button>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;