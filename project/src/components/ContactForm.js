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
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
            encType="multipart/form-data"
          >
             <input type="hidden" name="form-name" value="contacto" />
  
             <p style={{ display: 'none' }}>
               <label>
                 No llenar este campo: <input name="bot-field" />
               </label>
             </p>

             <div>
               <label htmlFor="fullName">Nombre completo:</label>
               <input
                 type="text"
                 id="fullName"
                 name="fullName"
                 required
               />
             </div>

              <div>
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>

              <div>
                <label htmlFor="briefConsultation">Consulta:</label>
                <textarea
                  id="briefConsultation"
                  name="briefConsultation"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="file">Adjuntar Documento (PDF):</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".pdf"
                />
           </div>

  <button type="submit">Enviar Consulta y Agendar Cita</button>

          </form>
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
