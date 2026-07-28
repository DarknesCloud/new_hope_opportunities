import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type TabType = 'graduados' | 'comunidad';

interface MosaicImage {
  id: string;
  src: string;
  alt: string;
  span?: string; // Tailwind grid span classes
}

const graduadosImages: MosaicImage[] = [
  { id: 'grad-1', src: '/assets/graduados/graduado-0.jpg', alt: 'Graduado', span: 'md:col-span-2 md:row-span-2' },
  { id: 'grad-2', src: '/assets/graduados/graduado-1.jpg', alt: 'Graduado' },
  { id: 'grad-3', src: '/assets/graduados/graduado-2.jpg', alt: 'Graduado' },
  { id: 'grad-4', src: '/assets/graduados/graduado-3.jpg', alt: 'Graduado', span: 'md:col-span-2' },
  { id: 'grad-5', src: '/assets/graduados/graduado-4.jpg', alt: 'Graduado' },
  { id: 'grad-6', src: '/assets/graduados/graduado-7.jpg', alt: 'Graduado', span: 'md:col-span-2 md:row-span-2' },
];

const comunidadImages: MosaicImage[] = [
  { id: 'com-1', src: '/assets/comunidad y sembrando semilla/comunidad-0.jpg', alt: 'Comunidad', span: 'md:col-span-2 md:row-span-2' },
  { id: 'com-2', src: '/assets/comunidad y sembrando semilla/comunidad-1.jpg', alt: 'Comunidad' },
  { id: 'com-3', src: '/assets/comunidad y sembrando semilla/comunidad-2.jpg', alt: 'Comunidad' },
  { id: 'com-4', src: '/assets/comunidad y sembrando semilla/comunidad-3.jpg', alt: 'Comunidad', span: 'md:col-span-2' },
  { id: 'com-5', src: '/assets/comunidad y sembrando semilla/comunidad-base.jpg', alt: 'Comunidad' },
  { id: 'com-6', src: '/assets/comunidad y sembrando semilla/comunidad-7.jpg', alt: 'Comunidad', span: 'md:col-span-2 md:row-span-2' },
];

const translations = {
  es: {
    eyebrow: 'Trayectoria Educativa',
    title: 'Mosaico de Esperanza',
    subtitle: 'De la infancia a la excelencia: una ruta de transformación visual que celebra cada hito en nuestro camino',
    graduados: 'Graduados',
    comunidad: 'Comunidad',
    graduadosDescription: 'Cada rostro representa una historia de perseverancia, excelencia académica y transformación personal. Nuestros graduados son testimonios vivos de cómo la educación centrada en valores cristianos abre puertas y crea oportunidades reales.',
    comunidadDescription: 'La comunidad es el corazón de nuestra misión. Estas imágenes capturan momentos de impacto directo, donde la educación y la fe se entrelazan para transformar familias y crear esperanza sostenible en Rivera Hernández.',
  },
  en: {
    eyebrow: 'Educational Journey',
    title: 'Mosaic of Hope',
    subtitle: 'From childhood to excellence: a visual transformation journey that celebrates every milestone in our path',
    graduados: 'Graduates',
    comunidad: 'Community',
    graduadosDescription: 'Each face represents a story of perseverance, academic excellence, and personal transformation. Our graduates are living testimonies of how Christ-centered education opens doors and creates real opportunities.',
    comunidadDescription: 'Community is the heart of our mission. These images capture moments of direct impact, where education and faith intertwine to transform families and create sustainable hope in Rivera Hernández.',
  },
};

export function MosaicHope() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('graduados');
  const t = translations[language as keyof typeof translations] || translations.es;

  const images = activeTab === 'graduados' ? graduadosImages : comunidadImages;

  return (
    <section className="bg-gradient-to-b from-[#FAF9F6] to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-3 block">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tabs de Control */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('graduados')}
            className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
              activeTab === 'graduados'
                ? 'bg-amber-500 text-white shadow-lg scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.graduados}
          </button>
          <button
            onClick={() => setActiveTab('comunidad')}
            className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
              activeTab === 'comunidad'
                ? 'bg-amber-500 text-white shadow-lg scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.comunidad}
          </button>
        </div>

        {/* Galería de Mosaico */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[280px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                image.span || ''
              }`}
            >
              {/* Imagen */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Efecto de borde premium */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Descripción contextual */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              {activeTab === 'graduados' ? t.graduadosDescription : t.comunidadDescription}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
