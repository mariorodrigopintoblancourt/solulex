import React from 'react';

const ServicesSection = ({ setCurrentPage }) => {
  const services = [
    { title: 'Derecho Penal', description: 'Medidas cautelares, Etapa Preliminar y Preparatoria, juicios, recursos.' },
    { title: 'Derecho Civil', description: 'Contratos, Daños, Responsabilidad Civil, Propiedad.' },
    { title: 'Materia Administrativa', description: 'Recursos de revocatoria y jerárquicos.' },
    { title: 'Materia Tributaria', description: 'Recursos de alzada y jerárquicos.' },
    { title: 'Derecho Laboral', description: 'Conciliaciones, juicios laborales, arbitraje laboral.' },
    { title: 'Negociación y Arbitraje', description: 'Resolución de conflictos fuera de la vía judicial.' },
    { title: 'Derecho Constitucional', description: 'Acciones de defensa, amparos constitucionales.' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Mis Servicios Legales</h2>
        <div className="flex flex-col md:flex-row items-center mb-8 sm:mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0jBKeyWzprvgIPmTtsSNY2ecybAh5LloqCaQw" alt="Servicios Legales" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Como abogado y asesor legal, mi compromiso es brindar asesoría legal integral y personalizada. Cuento con amplia experiencia en diversas ramas del derecho, lo que me permite ofrecer soluciones efectivas y estratégicas para cualquier necesidad legal.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Mi objetivo es proteger los intereses y derechos de mis clientes, acompañándolos en cada etapa del proceso legal con profesionalismo y ética.
            </p>
            <div className="mt-6 sm:mt-8 text-center md:text-left">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;