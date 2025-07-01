import React, { useState } from 'react';

const ResourcesSection = () => {
  const [videoLinks, setVideoLinks] = useState([
    { id: 1, title: 'Introducción al Derecho Penal', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Claves del Derecho Civil', url: 'https://www.youtube.com/embed/3tmd-KfgRR8' },
    { id: 3, title: 'Recursos Administrativos Explicados', url: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
  ]);

  const addVideoLink = () => {
    const newTitle = prompt("Título del video:");
    const newUrl = prompt("URL del video (YouTube/TikTok embed):");
    if (newTitle && newUrl) {
      setVideoLinks((prev) => [
        ...prev,
        { id: prev.length + 1, title: newTitle, url: newUrl },
      ]);
    }
  };

  return (
    <section className="py-16 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Recursos y Contenidos (Blog)</h2>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0HxfbzjRcSojWGwvDPb4hl1EOXpnTeqzCZR0g" alt="Contenido Legal" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Explora nuestra sección de recursos y blog, donde compartimos información relevante, análisis jurídicos y videos explicativos sobre temas de actualidad legal. Mantente informado y resuelve tus dudas con nuestro contenido especializado.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aquí encontrarás artículos, guías y enlaces a videos de YouTube y TikTok que te ayudarán a comprender mejor el marco legal y tus derechos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={addVideoLink}
            className="bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Agregar Nuevo Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;