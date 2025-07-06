import React, { useState } from 'react';

const ContactForm = () => {
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

  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Consultas y Citas</h2>
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
            <form
            action="https://api.web3forms.com/submit"
            method="POST"
  className="space-y-6"
  encType="multipart/form-data"
>
  <input type="hidden" name="access_key" value="28f8b262-710a-468f-9cf1-7cef86dc5b6a" />
  <input type="hidden" name="subject" value="Consulta desde formulario" />
  <input type="hidden" name="from_name" value="Web de Solulex" />

  <div>
    <label htmlFor="fullName">Nombre completo:</label>
    <input type="text" id="fullName" name="fullName" required />
  </div>

  <div>
    <label htmlFor="phone">Teléfono:</label>
    <input type="tel" id="phone" name="phone" required />
  </div>

  <div>
    <label htmlFor="briefConsultation">Consulta:</label>
    <textarea id="briefConsultation" name="briefConsultation" rows="5" required></textarea>
  </div>

  <div>
    <label htmlFor="file">Adjuntar Documento (PDF):</label>
    <input type="file" id="file" name="file" accept=".pdf" />
  </div>

  <button type="submit">Enviar Consulta y Agendar Cita</button>
</form>
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
            <li>Virtual (Zoom
            <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">O contáctame directamente por WhatsApp:</p>
            <a
              href="https://wa.me/59160558168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-md transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
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

export default ContactForm;
