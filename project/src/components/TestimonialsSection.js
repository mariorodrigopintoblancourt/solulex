import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: 'Ana G.', text: 'Excelente asesoría, muy profesional y atento a mis necesidades. ¡Recomendado!' },
    { id: 2, name: 'Carlos M.', text: 'Resolvió mi caso de manera eficiente y rápida. Gran conocimiento legal.' },
    { id: 3, name: 'Sofía R.', text: 'Me sentí muy apoyada durante todo el proceso. Confianza total.' },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Clientes y Testimonios</h2>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc07zqESv9ulj9cdOX5xw8FV0A6Wpo2KaRHmChz" alt="Clientes" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La satisfacción de mis clientes es mi mayor prioridad. Aquí puedes ver algunos de los comentarios que han compartido sobre mi trabajo y el impacto positivo que hemos logrado juntos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tu opinión es muy valiosa. Si deseas compartir tu experiencia, puedes hacerlo a través del formulario de comentarios.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="text-right font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Deja tu Comentario</h3>
          <p className="text-lg text-gray-700 mb-6">
            Tu opinión es importante para mí. Si deseas compartir tu experiencia o hacer un comentario, por favor utiliza el siguiente formulario.
          </p>
          {/* Aquí se integraría el formulario de Google Forms */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_P_YOUR_FORM_ID_HERE/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-2xl shadow-lg border border-gray-200"
            title="Formulario de Comentarios"
          >
            Cargando…
          </iframe>
          <p className="mt-4 text-sm text-gray-500">
            Nota: Los comentarios son moderados antes de ser publicados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;