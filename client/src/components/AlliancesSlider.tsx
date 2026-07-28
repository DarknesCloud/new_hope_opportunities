import React, { useState, useEffect } from 'react';

interface Alliance {
  id: number;
  name: string;
  role: string;
  description: string;
  logo: string;
  category: string;
  details: string;
}

const alliances: Alliance[] = [
  {
    id: 1,
    name: "CEPUDO",
    role: "Centro de Preparación Docente",
    description: "Apoyo integral en programas educativos y formación docente de calidad.",
    logo: "/assets/alianzas/cepudo.jpg",
    category: "Educación",
    details: "CEPUDO trabaja con nosotros en el desarrollo de currículum riguroso y capacitación docente continua, asegurando que cada estudiante reciba educación de excelencia centrada en valores cristianos y formación integral."
  },
  {
    id: 2,
    name: "CEUTEC",
    role: "Socio Tecnológico",
    description: "Capacitación en habilidades digitales y acceso a recursos tecnológicos.",
    logo: "/assets/alianzas/ceutec.jpg",
    category: "Tecnología",
    details: "CEUTEC de UNITEC nos proporciona acceso a plataformas tecnológicas, capacitación en habilidades digitales y mentorías para que nuestros estudiantes estén preparados para el mundo laboral moderno e innovador."
  },
  {
    id: 3,
    name: "Operación Bendición",
    role: "Socio Comunitario",
    description: "Iniciativa de voluntariado y transformación comunitaria.",
    logo: "/assets/alianzas/operacion_bendicion.jpg",
    category: "Voluntariado",
    details: "Operación Bendición es una iniciativa integral que reúne a voluntarios, profesionales y líderes comunitarios comprometidos con la transformación de vidas en la Rivera Hernández. A través de programas de capacitación, apoyo educativo y desarrollo comunitario, trabajamos juntos para crear oportunidades de esperanza y crecimiento sostenible."
  }
];

export function AlliancesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % alliances.length);
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
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-3 block">
            COLABORACIÓN GLOBAL
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Catálogo de Alianzas
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Socios y organizaciones que trabajan junto a New Hope Opportunities para transformar vidas
          </p>
        </div>

        {/* Contenedor del Slider */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[480px]">
          
          {/* Columna Izquierda: Foto Premium */}
          <div className="md:col-span-5 relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl bg-white flex items-center justify-center group">
            <img 
              src={alliances[currentSlide].logo} 
              alt={alliances[currentSlide].name}
              className={`object-cover w-full h-full transition-all duration-700 ease-out group-hover:scale-105 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div className="bg-gradient-to-t from-black/40 via-transparent to-transparent absolute inset-0 z-10" />
          </div>

          {/* Columna Derecha: Contenido Editorial */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className={`text-xs font-bold tracking-widest text-amber-500 uppercase mb-2 block transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              {alliances[currentSlide].category}
            </span>
            <h3 className={`text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-6' : 'opacity-100 translate-x-0'
            }`}>
              {alliances[currentSlide].name}
            </h3>
            <p className={`text-sm md:text-base font-semibold text-amber-600 mb-4 transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              {alliances[currentSlide].role}
            </p>
            <div className={`space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-8 transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
            }`}>
              {alliances[currentSlide].details}
            </div>
            
            {/* Descripción Breve */}
            <div className={`border-l-2 border-amber-500 pl-4 transition-all duration-700 ease-out ${
              isTransitioning ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
            }`}>
              <p className="text-slate-500 text-sm italic">{alliances[currentSlide].description}</p>
            </div>
          </div>

        </div>

        {/* Controles de Navegación del Slider */}
        <div className="flex justify-center gap-3 mt-12">
          {alliances.map((alliance, index) => (
            <button
              key={alliance.id}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? 'w-12 bg-amber-500' : 'w-6 bg-slate-200 hover:bg-slate-300'
              } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label={`Ir a alianza ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
