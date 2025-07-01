import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-base sm:text-lg mb-3 sm:mb-4">
          Mario Pinto B. - Abogado y Asesor Legal
        </p>
        <p className="text-sm sm:text-md text-gray-400 mb-1 sm:mb-2">
          Dirección: Ed. DeCol, Piso 15, Oficina 1503, Zona Central, La Paz
        </p>
        <p className="text-sm sm:text-md text-gray-400 mb-3 sm:mb-4">
          Celular: 60558168
        </p>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          {/* Icono de WhatsApp */}
          <a href="https://wa.me/59160558168" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.911.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.481 2.241 2.24 3.48 5.188 3.481 8.411s-1.24 6.17-3.481 8.411c-2.241 2.24-5.23 3.48-8.411 3.48zm11.893-21.615c-5.201 0-9.406 4.205-9.408 9.409 0 2.122.74 4.087 2.01 5.787l-1.35 4.924 5.02-1.316c1.542.858 3.21 1.316 4.908 1.316 5.201 0 9.406-4.205 9.408-9.409-.002-5.203-4.208-9.408-9.41-9.408zm5.293 11.593c-.093 0-.652-.322-.89-.404-.237-.082-.41-.077-.57.084-.16.16-.617.795-.754.955-.137.16-.274.183-.508.068-.23-.11-.96-.353-1.827-1.12-.672-.592-1.12-1.324-1.25-1.543-.129-.219-.014-.335.093-.448.082-.092.183-.219.274-.335.092-.116.123-.198.164-.335.04-.137.02-.253-.019-.353-.04-.1-.36-.867-.495-1.18-.137-.312-.274-.268-.37-.268-.093 0-.2.005-.306.005-.106 0-.274.038-.41.183-.137.146-.526.513-.526 1.256 0 .743.537 1.45.618 1.559.082.109 1.035 1.57 2.507 2.28.93.447 1.65.661 2.21.843.14.047.26.038.353.023.1-.016.322-.137.41-.274.082-.137.164-.795.123-.89z"/>
            </svg>
          </a>
          {/* Puedes agregar más iconos de redes sociales si tienes */}
        </div>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Mario Pinto B. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default LayoutFooter;