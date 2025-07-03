import React from 'react';

const HomeHero = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gray-100 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0vnDjD0yKJs9OrpDUz2LHG6YaodyTFNfcmRut)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
          Asesoría Legal Confiable y Experta
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 drop-shadow-md">
          Mario Pinto B. - Abogado y Asesor Legal
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setCurrentPage('services')}
            className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto"
          >
            Servicios
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-gray-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto"
          >
            Contáctame Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
