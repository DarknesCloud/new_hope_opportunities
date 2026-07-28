import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";


// Import images
import pillarEducation from "@/assets/photos/pillar-education.webp";
import pillarGlobal from "@/assets/photos/pillar-global.webp";
import pillarCare from "@/assets/photos/pillar-care.webp";
import impactSports from "@/assets/photos/impact-sports.webp";
import impactGraduation from "@/assets/photos/impact-graduation.webp";

interface Program {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  cta: {
    es: string;
    en: string;
  };
  image: string;
}

const programs: Program[] = [
  {
    id: "english",
    title: { es: "Inglés para abrir mundo", en: "English that opens the world" },
    description: {
      es: "El aprendizaje del inglés amplía horizontes, fortalece la confianza comunicativa y conecta a los estudiantes con oportunidades académicas y vocacionales más amplias.",
      en: "English learning expands horizons, strengthens communication confidence, and connects students with broader academic and vocational opportunities.",
    },
    cta: { es: "Ver oportunidad", en: "View opportunity" },
    image: pillarGlobal,
  },
  {
    id: "technology",
    title: { es: "Tecnología con propósito", en: "Technology with purpose" },
    description: {
      es: "La preparación tecnológica se integra como puente de aprendizaje, disciplina y proyección, ayudando a los jóvenes a construir criterio, creatividad y herramientas para el futuro.",
      en: "Technology preparation is integrated as a bridge for learning, discipline, and projection, helping young people build judgment, creativity, and tools for the future.",
    },
    cta: { es: "Explorar tecnología", en: "Explore technology" },
    image: impactGraduation,
  },
  {
    id: "technical",
    title: { es: "Educación técnica", en: "Technical education" },
    description: {
      es: "La formación académica rigurosa, la mentoría y la orientación vocacional preparan a los estudiantes para convertir sus talentos en caminos reales de servicio y trabajo digno.",
      en: "Rigorous academics, mentoring, and vocational guidance prepare students to turn their talents into real pathways of service and dignified work.",
    },
    cta: { es: "Conocer la ruta", en: "Discover the pathway" },
    image: pillarEducation,
  },
  {
    id: "nutrition",
    title: { es: "Nutrición y bienestar", en: "Nutrition and wellbeing" },
    description: {
      es: "La salud y la nutrición fortalecen la capacidad de aprender, permanecer y crecer con dignidad dentro de un entorno escolar que mira a la persona completa.",
      en: "Health and nutrition strengthen the capacity to learn, remain, and grow with dignity within a school environment that sees the whole person.",
    },
    cta: { es: "Ver bienestar", en: "View wellbeing" },
    image: impactSports,
  },
  {
    id: "care",
    title: { es: "Acompañamiento", en: "Accompaniment" },
    description: {
      es: "Refugio, programas cristianos, campamento juvenil, CHICOS, La Garra y Banda de la Paz fortalecen identidad, pertenencia, carácter y liderazgo comunitario.",
      en: "Refugio, Christian programs, youth camp, CHICOS, La Garra, and Banda de la Paz strengthen identity, belonging, character, and community leadership.",
    },
    cta: { es: "Entender el modelo", en: "Understand the model" },
    image: pillarCare,
  },
  {
    id: "community",
    title: { es: "Impacto comunitario", en: "Community impact" },
    description: {
      es: "Nuestros programas se extienden a toda la comunidad, generando oportunidades de transformación social y desarrollo sostenible en Rivera Hernández.",
      en: "Our programs extend throughout the community, generating opportunities for social transformation and sustainable development in Rivera Hernández.",
    },
    cta: { es: "Conocer el impacto", en: "Learn about impact" },
    image: pillarGlobal,
  },
];

const copy = {
  es: {
    eyebrow: "Programas de impacto",
    title: "Seis pilares que transforman vidas.",
    intro:
      "Cada programa está diseñado para abrir puertas, fortalecer capacidades y acompañar a nuestros estudiantes hacia un futuro con dignidad y esperanza.",
    ctaViewAll: "Ver todos los programas",
  },
  en: {
    eyebrow: "Impact programs",
    title: "Six pillars that transform lives.",
    intro:
      "Each program is designed to open doors, strengthen capabilities, and accompany our students toward a future with dignity and hope.",
    ctaViewAll: "View all programs",
  },
};

export function ProgramsCarousel() {
  const { language } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const content = copy[language];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStart("clientX" in e ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = "clientX" in e ? e.clientX : e.changedTouches[0].clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  const handleProgramClick = (programId: string) => {
    window.location.href = `/programas/${programId}`;
  };

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{
        position: "relative",
        backgroundColor: tokens.color.ivory,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 100% 4%, rgba(242, 185, 0, 0.12) 0%, transparent 32%), radial-gradient(circle at 0% 84%, rgba(52, 52, 52, 0.055) 0%, transparent 34%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box className="hope-eyebrow" sx={{ mb: 2 }}>
            <Sparkles size={15} />
            {content.eyebrow}
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.4rem", md: "3.8rem" },
              fontWeight: 900,
              lineHeight: 0.96,
              letterSpacing: "-0.075em",
              color: tokens.color.graphite,
              maxWidth: 820,
              mb: 2.6,
            }}
          >
            {content.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.85,
              color: tokens.color.graphiteSoft,
              maxWidth: 720,
            }}
          >
            {content.intro}
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box
          sx={{
            position: "relative",
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Carousel Wrapper */}
          <Box
            ref={carouselRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: tokens.radius.lg,
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {/* Slides */}
            <Box
              sx={{
                display: "flex",
                transition: isDragging ? "none" : "transform 500ms ease-out",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {programs.map((program) => (
                <Box
                  key={program.id}
                  sx={{
                    minWidth: "100%",
                    position: "relative",
                    height: { xs: 400, md: 500 },
                    overflow: "hidden",
                    borderRadius: tokens.radius.lg,
                  }}
                >
                  {/* Background Image */}
                  <Box
                    component="img"
                    src={program.image}
                    alt={program.title[language]}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 700ms ease-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
                      zIndex: 1,
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 3.2, md: 4.4 },
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: tokens.font.display,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontWeight: 900,
                        lineHeight: 1.1,
                        color: tokens.color.warmWhite,
                        mb: 1.5,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {program.title[language]}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: tokens.font.body,
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        lineHeight: 1.6,
                        color: tokens.color.warmWhite,
                        mb: 2.4,
                        maxWidth: 600,
                        opacity: 0.95,
                      }}
                    >
                      {program.description[language]}
                    </Typography>

                    <Button
                      onClick={() => handleProgramClick(program.id)}
                      sx={{
                        alignSelf: "flex-start",
                        fontFamily: tokens.font.body,
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        textTransform: "none",
                        letterSpacing: "0.02em",
                        color: tokens.color.hopeGold,
                        backgroundColor: "transparent",
                        border: `1.5px solid ${tokens.color.hopeGold}`,
                        px: 2.8,
                        py: 1.2,
                        borderRadius: tokens.radius.md,
                        transition: "all 300ms ease-out",
                        "&:hover": {
                          backgroundColor: tokens.color.hopeGold,
                          color: tokens.color.graphite,
                          transform: "translateY(-2px)",
                          boxShadow: `0 8px 24px rgba(242, 185, 0, 0.3)`,
                        },
                      }}
                    >
                      {program.cta[language]} →
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Navigation Arrows */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 3 },
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <Button
              onClick={handlePrevious}
              sx={{
                pointerEvents: "auto",
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: tokens.color.graphite,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 300ms ease-out",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  backgroundColor: tokens.color.hopeGold,
                  transform: "scale(1.1)",
                  boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
                },
              }}
            >
              <ArrowLeft size={20} />
            </Button>

            <Button
              onClick={handleNext}
              sx={{
                pointerEvents: "auto",
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: tokens.color.graphite,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 300ms ease-out",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  backgroundColor: tokens.color.hopeGold,
                  transform: "scale(1.1)",
                  boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
                },
              }}
            >
              <ArrowRight size={20} />
            </Button>
          </Box>

          {/* Dots Indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1.2,
              zIndex: 3,
            }}
          >
            {programs.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: currentIndex === index ? 28 : 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index ? tokens.color.hopeGold : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "all 300ms ease-out",
                  "&:hover": {
                    backgroundColor:
                      currentIndex === index ? tokens.color.hopeGold : "rgba(255, 255, 255, 0.7)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* CTA Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            href="/programas"
            component="a"
            sx={{
              fontFamily: tokens.font.body,
              fontSize: "0.95rem",
              fontWeight: 700,
              textTransform: "none",
              letterSpacing: "0.02em",
              color: tokens.color.warmWhite,
              backgroundColor: tokens.color.graphite,
              px: 3.2,
              py: 1.4,
              borderRadius: tokens.radius.md,
              transition: "all 300ms ease-out",
              "&:hover": {
                backgroundColor: tokens.color.hopeGold,
                color: tokens.color.graphite,
                transform: "translateY(-2px)",
                boxShadow: `0 12px 32px rgba(242, 185, 0, 0.25)`,
              },
            }}
          >
            {content.ctaViewAll}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
