import React, { useState, useEffect } from 'react';

interface Story {
  id: number;
  name: string;
  role: string;
  tag: string;
  title: string;
  image: string;
  text: string;
}

const successStories: Story[] = [
  {
    id: 1,
    name: "Fernanda Lucía Delcid Rosales",
    role: "Practicante Profesional - CCIC",
    tag: "Fernanda Lucía — Promoción 2026",
    title: "El camino de Fernanda hacia la excelencia",
    image: "/assets/fernanda.jpg",
    text: "Fernanda Lucía, egresada de nuestra promoción más reciente, ha demostrado una excelencia académica y profesional ejemplar. Su dedicación la llevó a completar con éxito su práctica profesional en la Cámara de Comercio e Industrias de Cortés (CCIC), reflejando los valores de nuestra institución.\n\nSu historia es un testimonio viviente de cómo la educación centrada en Cristo abre puertas e impacta directamente a las familias de la Rivera Hernández, transformando el esfuerzo en un fruto que bendice a toda la comunidad."
  }
];

export function SuccessStoriesWall() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % successStories.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="bg-[#FAF9F6] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
            Muro de Casos de Éxito
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Liderazgo comprometido con la misión de transformar vidas
          </p>
        </div>

        {/* Contenedor del Slider */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[480px]">
          
          {/* Columna Izquierda: Retrato Premium */}
          <div className="md:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl bg-slate-100 group">
            <img 
              src={successStories[currentSlide].image} 
              alt={successStories[currentSlide].name}
              className={`object-cover w-full h-full transition-all duration-700 ease-out group-hover:scale-105 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute inset-0 z-10" />
            <span className={`absolute bottom-6 left-6 z-20 text-white text-xs font-semibold tracking-wider bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              {successStories[currentSlide].tag}
            </span>
          </div>

          {/* Columna Derecha: Contenido Editorial */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className={`text-xs font-bold tracking-widest text-amber-500 uppercase mb-3 block transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              HISTORIAS DE INSPIRACIÓN
            </span>
            <h3 className={`text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-6' : 'opacity-100 translate-x-0'
            }`}>
              {successStories[currentSlide].title}
            </h3>
            <div className={`space-y-4 text-slate-600 text-base md:text-lg leading-relaxed whitespace-pre-line mb-8 transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              {successStories[currentSlide].text}
            </div>
            
            {/* Firma */}
            <div className={`border-l-2 border-amber-500 pl-4 transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              <p className="font-bold text-slate-900 text-base">{successStories[currentSlide].name}</p>
              <p className="text-slate-500 text-xs font-medium mt-0.5">{successStories[currentSlide].role}</p>
            </div>
          </div>

        </div>

        {/* Controles de Navegación del Slider */}
        <div className="flex justify-center gap-3 mt-12">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'w-12 bg-amber-500' : 'w-6 bg-slate-200 hover:bg-slate-300'
              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label={`Ir a historia ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
