import React, { useState } from 'react';

const SapereAudeSection = () => {
  // Aquí podrías implementar un sistema de autenticación real
  // Por ahora, usaremos una variable simple para simular el acceso de administrador
  const isAdmin = true; // Cambiar a 'false' para deshabilitar la edición

  const [videoLinks, setVideoLinks] = useState([
    { id: 1, title: 'Conozca la Ley 233 La Paz Bolivia', url: 'https://www.youtube.com/embed/q58MyXRhRfU?si=Q0g05ASoMZ9agFno' },
    { id: 2, title: 'Consejos Para Evitar un Proceso de Fiscalización', url: 'https://www.youtube.com/embed/expdGG32Vg8?si=tqC3PV6Te7Fb0hwV' },
    { id: 3, title: '¿Puede el Gobierno Autónomo Municipal de La Paz demoler inmuebles sin autorización judicial?', url: 'https://www.youtube.com/embed/ryk6KQn8NLc?si=e--QBt64LfR7UG93' },
  ]);
  const [pdfFiles, setPdfFiles] = useState([]);

  const addVideoLink = () => {
    if (!isAdmin) {
      alert("No tienes permisos para agregar videos.");
      return;
    }
    const newUrl = prompt("Ingresa la URL del video (YouTube/TikTok embed):");
    if (newUrl) {
      const newTitle = prompt("Ingresa un título para el video:");
      setVideoLinks((prev) => [
        ...prev,
        { id: prev.length + 1, title: newTitle || 'Video sin título', url: newUrl },
      ]);
    }
  };

  const handlePdfUpload = (e) => {
    if (!isAdmin) {
      alert("No tienes permisos para subir PDFs.");
      return;
    }
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPdfFiles((prev) => [
          ...prev,
          { id: prev.length + 1, name: file.name, url: event.target.result },
        ]);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, sube solo archivos PDF.");
    }
  };

  const removeVideo = (id) => {
    if (!isAdmin) {
      alert("No tienes permisos para eliminar videos.");
      return;
    }
    setVideoLinks((prev) => prev.filter(video => video.id !== id));
  };

  const removePdf = (id) => {
    if (!isAdmin) {
      alert("No tienes permisos para eliminar PDFs.");
      return;
    }
    setPdfFiles((prev) => prev.filter(pdf => pdf.id !== id));
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Proyecto Sapere Aude</h2>
        <div className="flex flex-col md:flex-row items-center mb-8 sm:mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0JDf2VnipYIkKhaEN0eCX7zGogwrU3sn8TcHm" alt="Proyecto Sapere Aude" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Bienvenido al "Proyecto Sapere Aude", un espacio dedicado a la difusión de conocimiento jurídico y análisis de temas relevantes. Aquí encontrarás una colección de videos y documentos en PDF que te ayudarán a comprender mejor el mundo del derecho.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Este es un recurso vivo que se actualizará constantemente con nuevo contenido para mantenerte informado y al día con las últimas novedades legales.
            </p>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {videoLinks.map((video) => (
            <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 sm:p-6 flex justify-between items-center">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{video.title}</h4>
                {isAdmin && (
                  <button onClick={() => removeVideo(video.id)} className="text-red-500 hover:text-red-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {isAdmin && (
          <div className="text-center mb-10 sm:mb-12">
            <button
              onClick={addVideoLink}
              className="bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Agregar Nuevo Video
            </button>
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Documentos PDF</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {pdfFiles.map((pdf) => (
            <div key={pdf.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-between">
              <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                {pdf.name}
              </a>
              {isAdmin && (
                <button onClick={() => removePdf(pdf.id)} className="text-red-500 hover:text-red-700 transition-colors self-end">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
        {isAdmin && (
          <div className="text-center">
            <label htmlFor="pdf-upload" className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105 cursor-pointer">
              Subir Nuevo PDF
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handlePdfUpload}
                className="hidden"
              />
            </label>
          </div>
        )}
      </div>
    </section>
  );
};

export default SapereAudeSection;
