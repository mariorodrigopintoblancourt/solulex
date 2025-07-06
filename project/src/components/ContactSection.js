import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    briefConsultation: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario de consulta/cita enviado:', formData);
    alert('¡Tu consulta ha sido enviada! Me pondré en contacto contigo para agendar una cita.');
    setFormData({ fullName: '', phone: '', briefConsultation: '', file: null });
  };

  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Contáctame</h2>
        <div className="flex flex-col md:flex-row items-center mb-8 sm:mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0HxfbzjRcSojWGwvDPb4hl1EOXpnTeqzCZR0g" alt="Contacto" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Estoy a tu disposición para cualquier consulta legal o para agendar una cita. Puedes contactarme por WhatsApp o visitando mi oficina.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Dirección: Ed. DeCol, Piso 15, Oficina 1503, Zona Central, La Paz
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Celular: 60558168
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Edificio+DeCol,+Piso+15,+Oficina+1503,+La+Paz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline text-base sm:text-lg font-semibold"
            >
              Ver en Google Maps
            </a>
            <a
              href="https://www.google.com/maps/place/YOUR_GOOGLE_BUSINESS_PROFILE_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline text-base sm:text-lg font-semibold ml-4"
            >
              Perfil de Empresas de Google
            </a>
          </div>
        </div>
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">Consultas y Citas</h3>
         <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
  <details className="border border-gray-300 rounded-md p-4">
    <summary className="cursor-pointer font-semibold text-lg text-blue-700">
      📌 ¿Qué tipo de consultas puedo responder por mensaje?
    </summary>
    <div className="mt-2 text-gray-700">
      <p>Si tu consulta es breve y general, por ejemplo:</p>
      <ul className="list-disc list-inside ml-4 my-2">
        <li>¿Qué dice la ley penal sobre las medidas cautelares?</li>
        <li>¿Cuáles son los requisitos para iniciar un proceso de usucapión?</li>
      </ul>
      <p>Puedes escribirme por WhatsApp y te responderé con un mensaje corto y claro, sin costo alguno.</p>
    </div>
  </details>

  <details className="border border-gray-300 rounded-md p-4">
    <summary className="cursor-pointer font-semibold text-lg text-blue-700">
      🧾 ¿Y si necesito una asesoría más completa?
    </summary>
    <div className="mt-2 text-gray-700 space-y-2">
      <p>Si tu caso requiere una revisión detallada o necesitas orientación específica, puedes elegir entre dos modalidades de consulta:</p>
      <p>💻 <strong>Consulta Virtual</strong> (Zoom, Google Meet o videollamada por WhatsApp)</p>
      <ul className="list-disc list-inside ml-4">
        <li>100 Bs la primera hora</li>
        <li>80 Bs por cada hora adicional</li>
      </ul>
      <p>🏢 <strong>Consulta Presencial</strong> (en oficina)</p>
      <ul className="list-disc list-inside ml-4">
        <li>150 Bs la primera hora</li>
        <li>100 Bs por cada hora adicional</li>
      </ul>
      <p>✔️ En ambas modalidades (virtual o presencial), puedes adjuntar documentos para su revisión.</p>
      <ul className="list-disc list-inside ml-4">
        <li>Hasta 15 páginas: sin costo adicional</li>
        <li>A partir de la página 16: se cobrará un adicional de 3 Bs por hoja</li>
      </ul>
      <p>📌 La revisión de documentos no aplica para las consultas breves por mensaje.</p>
    </div>
  </details>

  <details className="border border-gray-300 rounded-md p-4">
    <summary className="cursor-pointer font-semibold text-lg text-blue-700">
      📲 ¿Cómo agendar una consulta?
    </summary>
    <div className="mt-2 text-gray-700">
      <p>Solo tienes que escribirme por WhatsApp incluyendo la siguiente información:</p>
      <ul className="list-disc list-inside ml-4 my-2">
        <li>Tu nombre completo</li>
        <li>Tu número de contacto</li>
        <li>Una descripción breve de tu consulta</li>
        <li>Indica si deseas atención:
          <ul className="list-disc list-inside ml-6">
            <li>Virtual (Zoom, Google Meet o videollamada por WhatsApp)</li>
            <li>Presencial (en oficina)</li>
          </ul>
        </li>
        <li>Si corresponde, adjunta los documentos que quieras que revise (máx. 15 páginas sin costo)</li>
      </ul>
      <p>Una vez que reciba tu mensaje, te enviaré el código QR para que puedas realizar el pago y así confirmar la cita.</p>
    </div>
  </details>
</div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-base sm:text-lg text-gray-700 mb-4">O contáctame directamente por WhatsApp:</p>
            <a
              href="https://wa.me/59160558168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-md transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.911.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.481 2.241 2.24 3.48 5.188 3.481 8.411s-1.24 6.17-3.481 8.411c-2.241 2.24-5.23 3.48-8.411 3.48zm11.893-21.615c-5.201 0-9.406 4.205-9.408 9.409 0 2.122.74 4.087 2.01 5.787l-1.35 4.924 5.02-1.316c1.542.858 3.21 1.316 4.908 1.316 5.201 0 9.406-4.205 9.408-9.409-.002-5.203-4.208-9.408-9.41-9.408zm5.293 11.593c-.093 0-.652-.322-.89-.404-.237-.082-.41-.077-.57.084-.16.16-.617.795-.754.955-.137.16-.274.183-.508.068-.23-.11-.96-.353-1.827-1.12-.672-.592-1.12-1.324-1.25-1.543-.129-.219-.014-.335.093-.448.082-.092.183-.219.274-.335.092-.116.123-.198.164-.335.04-.137.02-.253-.019-.353-.04-.1-.36-.867-.495-1.18-.137-.312-.274-.268-.37-.268-.093 0-.2.005-.306.005-.106 0-.274.038-.41.183-.137.146-.526.513-.526 1.256 0 .743.537 1.45.618 1.559.082.109 1.035 1.57 2.507 2.28.93.447 1.65.661 2.21.843.14.047.26.038.353.023.1-.016.322-.137.41-.274.082-.137.164-.795.123-.89z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
