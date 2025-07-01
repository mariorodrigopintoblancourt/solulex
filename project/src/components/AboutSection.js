import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Sobre Nosotros</h2>
        <div className="flex flex-col md:flex-row items-center mb-8 sm:mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0rGPQZnGNQiYtyo2GFJjxB80HOpNwcWZhvnAD" alt="Mario Pinto B." className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Con más de dos décadas de trayectoria jurídica, nuestra práctica se basa en la experiencia profunda y versátil en las principales ramas del derecho: civil, penal, laboral, administrativo y constitucional. La formación académica que respalda este ejercicio incluye estudios de posgrado en Derecho Constitucional, Derecho Empresarial, Contratación Corporativa, Derecho Penal, Argumentación Jurídica y Mecanismos Alternativos de Solución de Conflictos, además de una constante actualización a través de cursos nacionales e internacionales.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Nuestra filosofía de trabajo se centra en el compromiso ético, la precisión técnica y la visión estratégica. Hemos patrocinado procesos judiciales en todas sus etapas —desde medidas cautelares hasta recursos de casación y acciones constitucionales— y desarrollado soluciones legales tanto en contextos complejos como en el asesoramiento cotidiano. Nos caracteriza la claridad en la redacción jurídica, la atención personalizada y la capacidad para actuar con firmeza y solvencia frente a los desafíos legales más exigentes.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Más que una representación legal, ofrecemos acompañamiento, análisis y soluciones orientadas a la defensa efectiva de los derechos, el cumplimiento normativo y la prevención de riesgos legales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;