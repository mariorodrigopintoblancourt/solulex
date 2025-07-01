import React from 'react';

const PoliciesSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Políticas y Términos</h2>
        <div className="prose max-w-none text-gray-700 text-sm sm:text-base">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">1. Privacidad de Datos</h3>
          <p className="mb-3 sm:mb-4">
            En Mario Pinto B. Abogado, valoramos su privacidad. Toda la información personal y los documentos que nos proporcione a través de este sitio web serán tratados con la más estricta confidencialidad y utilizados únicamente para los fines de la consulta legal o el servicio solicitado. No compartiremos su información con terceros sin su consentimiento expreso, salvo que sea requerido por ley.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2. Uso del Sitio Web</h3>
          <p className="mb-3 sm:mb-4">
            Este sitio web tiene como objetivo proporcionar información general sobre nuestros servicios legales. La información aquí contenida no constituye asesoramiento legal y no debe ser interpretada como tal. Para obtener asesoramiento legal específico, le recomendamos agendar una consulta directa. El uso de este sitio web implica la aceptación de estos términos.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">3. Propiedad Intelectual</h3>
          <p className="mb-3 sm:mb-4">
            Todo el contenido de este sitio web, incluyendo textos, imágenes, videos y diseño, es propiedad intelectual de Mario Pinto B. Abogado o de sus respectivos titulares. Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin autorización previa.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4. Enlaces Externos</h3>
          <p className="mb-3 sm:mb-4">
            Este sitio web puede contener enlaces a sitios web de terceros. No somos responsables del contenido o las políticas de privacidad de dichos sitios. La inclusión de cualquier enlace no implica aprobación o respaldo por nuestra parte.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5. Modificaciones</h3>
          <p className="mb-3 sm:mb-4">
            Nos reservamos el derecho de modificar estas políticas y términos en cualquier momento. Cualquier cambio será publicado en esta página. Le recomendamos revisar periódicamente esta sección para estar al tanto de las actualizaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;