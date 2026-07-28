'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export default function AnnualYouthCamp() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    es: {
      eyebrow: 'FORMACIÓN ESPIRITUAL',
      title: 'Campamento Juvenil Anual',
      subtitle: 'Crecimiento Espiritual y Transformación',
      paragraph1: 'Nuestro campamento juvenil anual es para todos nuestros estudiantes de preparatoria. Durante el año escolar, cada uno participa en clases de Biblia y actividades ministeriales. Este campamento se lleva a cabo al final del año escolar como broche de oro a todas estas actividades ministeriales.',
      paragraph2: 'Es un momento para divertirse, estar juntos, aprender, procesar lo aprendido durante el año y recibir el ministerio. Nuestros estudiantes adoran este momento especial y lo esperan con ansias durante todo el año. Siempre se elige un tema específico para este evento que responde a una necesidad detectada en el alumnado. Dios obra de manera increíble durante estos campamentos y nos brinda un tiempo de gran impacto espiritual con nuestros estudiantes.',
      images: [
        { src: '/assets/missions/camp-group.png', alt: 'Grupo de estudiantes en el campamento', size: 'large' },
        { src: '/assets/missions/camp-girl.png', alt: 'Estudiante sonriendo en actividades del campamento', size: 'small' },
        { src: '/assets/missions/camp-teamwork.png', alt: 'Trabajo en equipo durante el campamento', size: 'small' }
      ]
    },
    en: {
      eyebrow: 'SPIRITUAL FORMATION',
      title: 'Annual Youth Camp',
      subtitle: 'Spiritual Growth and Transformation',
      paragraph1: 'Our annual youth camp is for all our high school students. During the school year, each one participates in Bible classes and ministerial activities. This camp takes place at the end of the school year as a crowning achievement to all these ministerial activities.',
      paragraph2: 'It is a time to have fun, be together, learn, process what was learned during the year, and receive ministry. Our students love this special moment and look forward to it with anticipation throughout the year. A specific theme is always chosen for this event that responds to a need detected in the student body. God works incredibly during these camps and gives us a time of great spiritual impact with our students.',
      images: [
        { src: '/assets/missions/camp-group.png', alt: 'Group of students at camp', size: 'large' },
        { src: '/assets/missions/camp-girl.png', alt: 'Student smiling during camp activities', size: 'small' },
        { src: '/assets/missions/camp-teamwork.png', alt: 'Teamwork during camp', size: 'small' }
      ]
    }
  };

  const texts = content[language as keyof typeof content] || content.es;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(242, 235, 220, 0.6) 0%, rgba(255, 252, 247, 0.8) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Narrative */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Eyebrow */}
            <p className="text-xs md:text-sm font-semibold tracking-widest text-[#8B7355] uppercase mb-6">
              {texts.eyebrow}
            </p>

            {/* Title */}
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-900 text-[#2C3E50] mb-6 leading-tight">
              {texts.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl italic text-[#C67C4E] mb-8 font-medium">
              {texts.subtitle}
            </p>

            {/* Body Text */}
            <div className="space-y-6 text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              <p className="text-justify">
                {texts.paragraph1}
              </p>
              <p className="text-justify">
                {texts.paragraph2}
              </p>
            </div>
          </div>

          {/* Right Column - Photo Collage */}
          <div
            className={`relative h-[500px] md:h-[600px] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Large Photo - Main */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img
                  src={texts.images[0].src}
                  alt={texts.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 group-hover:to-black/20 transition-all duration-500" />
              </div>

              {/* Small Photo 1 - Bottom Right Offset */}
              <div className="absolute bottom-0 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-xl group cursor-pointer border-4 border-white">
                <img
                  src={texts.images[1].src}
                  alt={texts.images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:to-black/20 transition-all duration-500" />
              </div>

              {/* Small Photo 2 - Top Right Offset */}
              <div className="absolute top-12 right-4 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-lg group cursor-pointer border-4 border-white">
                <img
                  src={texts.images[2].src}
                  alt={texts.images[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 group-hover:to-black/20 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F2B900]/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C67C4E]/10 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
}
