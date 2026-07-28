import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import { useState } from "react";

interface TimelineEvent {
  year: number;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  imageSrc: string;
}

const baseTimelineEvents: TimelineEvent[] = [
  {
    year: 2004,
    titleEs: "Fundación Legal",
    titleEn: "Legal Foundation",
    descriptionEs:
      "Seis años después de recibir la visión, New Hope Opportunities se incorporó oficialmente como una organización legal sin fines de lucro en los EE. UU.",
    descriptionEn:
      "Six years after the vision was placed in our founder's heart, New Hope Opportunities was officially incorporated as a legal non-profit organization in the USA.",
    imageSrc: "/assets/timeline/2004.jpg",
  },
  {
    year: 2006,
    titleEs: "Propiedad Propia",
    titleEn: "Our Own Property",
    descriptionEs:
      "Dios proveyó al ministerio su primera instalación física. Llegaron las primeras brigadas misioneras de construcción desde EE. UU. para limpiar y desarrollar la propiedad.",
    descriptionEn:
      "God provided our ministry with its first facility. Our first construction missionary teams from the U.S. arrived to help clean and develop the property.",
    imageSrc: "/assets/timeline/2006.jpg",
  },
  {
    year: 2008,
    titleEs: "Instituto Técnico Vocacional",
    titleEn: "Technical Institute Inauguration",
    descriptionEs:
      "Concluyó la Fase #1 de construcción con 3 aulas y un taller de soldadura. Se inauguró oficialmente el Instituto Técnico Vocacional Hope con sus primeras tres clases.",
    descriptionEn:
      "Construction of Phase #1 concluded with 3 classrooms and a welding shop. The Hope Vocational Technical Institute was officially inaugurated with its first three classes.",
    imageSrc: "/assets/timeline/2008.jpg",
  },
  {
    year: 2013,
    titleEs: "Expansión e Infraestructura",
    titleEn: 'Expansion & "Chico" Program',
    descriptionEs:
      'Se completaron la cocina y los apartamentos para hospedar brigadas. Instalamos un sistema de purificación de agua en todo el complejo y lanzamos el programa "Chico" para niños de la comunidad.',
    descriptionEn:
      'Completed the kitchen and apartments to host mission teams. Installed a facility-wide water purification system and launched the "Chico" program for community children.',
    imageSrc: "/assets/timeline/2013.jpg",
  },
  {
    year: 2017,
    titleEs: "Inauguración de Escuela Hope",
    titleEn: "Inauguration of Hope School",
    descriptionEs:
      "Fundamos Hope School y Hope High School para brindar educación a niños excluidos del sistema público. Celebramos nuestro primer campamento juvenil espiritual.",
    descriptionEn:
      "Hope School and Hope High School were founded to serve children excluded from the public education system. We also hosted our very first spiritual youth camp.",
    imageSrc: "/assets/timeline/2017.jpg",
  },
  {
    year: 2026,
    titleEs: "Impacto Educativo Consolidado",
    titleEn: "Consolidating Educational Impact",
    descriptionEs:
      "Consolidamos nuestro impacto atendiendo a 267 estudiantes en nuestro campus, fortaleciendo una formación integral centrada en Cristo con más de 41 graduados y un equipo comprometido de 35 colaboradores.",
    descriptionEn:
      "We have solidified our educational impact serving 267 students at our campus, featuring over 41 graduates and a dedicated team of staff members.",
    imageSrc: "/assets/timeline/2026.jpg",
  },
];

const timelineEvents = [...baseTimelineEvents, ...baseTimelineEvents];

const copy = {
  es: {
    title: "Nuestra Historia",
    subtitle:
      "Dos décadas sembrando educación y esperanza en Rivera Hernández.",
  },
  en: {
    title: "Our History",
    subtitle: "Two decades sowing education and hope in Rivera Hernández.",
  },
} as const;

export function HistoricalTimeline() {
  const { language } = useLanguage();
  const content = copy[language];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenModal = (baseIndex: number) => {
    setSelectedIndex(baseIndex);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handleModalPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(prev =>
        prev === 0 ? baseTimelineEvents.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleModalNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(prev =>
        prev === baseTimelineEvents.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  const activeEvent =
    selectedIndex !== null ? baseTimelineEvents[selectedIndex] : null;

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 6, md: 9 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              color: tokens.color.graphite,
              letterSpacing: "-0.02em",
              mb: 0.5,
            }}
          >
            {content.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: tokens.color.graphiteSoft,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            {content.subtitle}
          </Typography>
        </Box>
      </Container>

      {/* Carrusel Continuo Infinite Marquee */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          py: 2,
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 40, md: 140 },
            zIndex: 10,
            pointerEvents: "none",
            background: `linear-gradient(to right, ${tokens.color.ivory} 0%, transparent 100%)`,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: 40, md: 140 },
            zIndex: 10,
            pointerEvents: "none",
            background: `linear-gradient(to left, ${tokens.color.ivory} 0%, transparent 100%)`,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3.5,
            width: "max-content",
            animation: "timelineMarquee 45s linear infinite",
            "@keyframes timelineMarquee": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {timelineEvents.map((event, index) => {
            const baseIndex = index % baseTimelineEvents.length;
            const title = language === "es" ? event.titleEs : event.titleEn;
            const description =
              language === "es" ? event.descriptionEs : event.descriptionEn;

            return (
              <Box
                key={`${event.year}-${index}`}
                onClick={() => handleOpenModal(baseIndex)}
                sx={{
                  minWidth: { xs: 260, sm: 280, md: 300 },
                  maxWidth: { xs: 260, sm: 280, md: 300 },
                  flexShrink: 0,
                  py: 1,
                  cursor: "pointer",
                }}
              >
                <Box sx={{ position: "relative", mb: 2, pt: 1 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "12px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: `${tokens.color.graphiteSoft}20`,
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: tokens.color.gold || "#D9A74A",
                      border: `3px solid ${tokens.color.graphite}`,
                      zIndex: 2,
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: tokens.color.graphite,
                    mb: 1.5,
                  }}
                >
                  {event.year}
                </Typography>

                <Card
                  elevation={0}
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    overflow: "hidden",
                    transform: "scale(0.96)",
                    transition:
                      "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.02) translateY(-8px)",
                      borderColor: (tokens.color.gold || "#D9A74A") + "80",
                      boxShadow: "0 20px 35px -10px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {event.imageSrc && (
                    <Box sx={{ p: 1.5, pb: 0, overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="150"
                        image={event.imageSrc}
                        alt={title}
                        sx={{
                          borderRadius: "14px",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                          "&:hover": { transform: "scale(1.05)" },
                        }}
                      />
                    </Box>
                  )}
                  <CardContent sx={{ p: 2.5, pt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: tokens.color.graphite,
                        fontSize: "1rem",
                        lineHeight: 1.3,
                        mb: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: tokens.color.graphiteSoft,
                        fontSize: "0.825rem",
                        lineHeight: 1.55,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Modal con sintaxis JSX totalmente limpia */}
      <Dialog
        open={selectedIndex !== null}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#222222",
              color: "#ffffff",
              borderRadius: "0px",
              maxWidth: "920px",
              m: 2,
              position: "relative",
              overflow: "visible",
            },
          },
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.85)",
            },
          },
        }}
      >
        {/* Botón de Cierre */}
        <IconButton
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#ffffff",
            opacity: 0.7,
            "&:hover": { opacity: 1, backgroundColor: "rgba(255,255,255,0.1)" },
            zIndex: 12,
          }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>

        {/* NAVEGACIÓN DENTRO DEL MODAL */}
        <IconButton
          onClick={handleModalPrev}
          sx={{
            position: "absolute",
            left: { xs: -10, sm: -60 },
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: 1,
            p: 1.5,
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            zIndex: 12,
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <IconButton
          onClick={handleModalNext}
          sx={{
            position: "absolute",
            right: { xs: -10, sm: -60 },
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffffff",
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: 1,
            p: 1.5,
            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            zIndex: 12,
          }}
        >
          <ChevronRightIcon fontSize="large" />
        </IconButton>

        {/* CONTENIDO INTERNO */}
        {activeEvent && (
          <Box
            sx={{
              backgroundColor: "#ffffff",
              color: "#333333",
              m: { xs: 2, sm: 4 },
              p: { xs: 3, sm: 5 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {/* Imagen */}
            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                image={activeEvent.imageSrc}
                alt={
                  language === "es" ? activeEvent.titleEs : activeEvent.titleEn
                }
                sx={{
                  width: "100%",
                  maxHeight: 320,
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </Box>

            {/* Texto y Fecha */}
            <Box
              sx={{
                width: { xs: "100%", md: "55%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#556b6f",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: { xs: "1.2rem", sm: "1.4rem" },
                  mb: 1,
                }}
              >
                {language === "es" ? activeEvent.titleEs : activeEvent.titleEn}
              </Typography>

              <Box
                sx={{
                  width: 40,
                  height: 2,
                  backgroundColor: "#556b6f",
                  mb: 2.5,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#888888",
                  mb: 3,
                }}
              >
                <CalendarTodayIcon sx={{ fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, fontSize: "0.95rem" }}
                >
                  {activeEvent.year}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "#666666",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {language === "es"
                  ? activeEvent.descriptionEs
                  : activeEvent.descriptionEn}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
