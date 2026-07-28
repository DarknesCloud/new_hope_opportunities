import { Box, Container, Typography } from "@mui/material";
import { Heart, Trophy, Sparkles } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";

interface EducationCard {
  id: string;
  eyebrow: { es: string; en: string };
  title: { es: string; en: string };
  description: { es: string; en: string };
  icon: typeof Heart;
  image: string;
}

interface EducationPathwayProps {
  language?: "es" | "en";
}

const cards: EducationCard[] = [
  {
    id: "early-childhood",
    eyebrow: { es: "DESARROLLO INTEGRAL", en: "HOLISTIC DEVELOPMENT" },
    title: { es: "Creciendo desde la infancia", en: "Growing from childhood" },
    description: {
      es: "Espacios creativos y talleres de formación psicopedagógica donde los niños más pequeños aprenden con amor, límites saludables y la participación activa de sus padres.",
      en: "Creative spaces and psychopedagogical workshops where young children learn with love, healthy boundaries, and active parental participation.",
    },
    icon: Heart,
    image: "/assets/education-early.webp",
  },
  {
    id: "secondary-leadership",
    eyebrow: { es: "COMPROMISO Y EXCELENCIA", en: "COMMITMENT AND EXCELLENCE" },
    title: { es: "Identidad y trabajo en equipo", en: "Identity and teamwork" },
    description: {
      es: "Guiamos a nuestros jóvenes de secundaria y bachillerato en su desarrollo académico, deportivo y espiritual, impulsando el liderazgo comunitario y la victoria en equipo.",
      en: "We guide our secondary and high school students in their academic, athletic, and spiritual development, promoting community leadership and team victory.",
    },
    icon: Trophy,
    image: "/assets/education-secondary.jpg",
  },
];

export function EducationPathway({ language = "es" }: EducationPathwayProps) {
  const copy = {
    eyebrow: language === "es" ? "Trayectoria educativa" : "Educational pathway",
    title:
      language === "es"
        ? "De la infancia a la excelencia: una ruta de transformación"
        : "From childhood to excellence: a path of transformation",
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
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Box className="hope-eyebrow" sx={{ mb: 2 }}>
            <Sparkles size={15} />
            {copy.eyebrow}
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
              maxWidth: 900,
            }}
          >
            {copy.title}
          </Typography>
        </Box>

        {/* Grid de 2 tarjetas con SPLIT LAYOUT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            const cardContent = card.eyebrow[language as keyof typeof card.eyebrow];
            const cardTitle = card.title[language as keyof typeof card.title];
            const cardDesc = card.description[language as keyof typeof card.description];

            return (
              <Box
                key={card.id}
                className="hope-card-premium"
                sx={{
                  position: "relative",
                  minHeight: { xs: 500, md: 600 },
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: tokens.shadow.soft,
                  transition: `transform 360ms ${tokens.easing.premium}, box-shadow 360ms ${tokens.easing.premium}`,
                  borderRadius: tokens.radius.lg,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: tokens.shadow.elevated,
                    "& .education-icon": {
                      transform: "scale(1.12) translateY(-2px)",
                      backgroundColor: tokens.color.hopeGoldPale,
                    },
                  },
                }}
              >
                {/* ÁREA SUPERIOR: FOTO LIMPIA (60%) */}
                <Box
                  sx={{
                    flex: "0 0 60%",
                    position: "relative",
                    overflow: "hidden",
                    background: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Icono flotante en esquina superior derecha */}
                  <Box
                    className="education-icon"
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      width: 56,
                      height: 56,
                      borderRadius: tokens.radius.lg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(242,185,0,0.20)",
                      border: `2px solid rgba(242,185,0,0.30)`,
                      transition: `all 360ms ${tokens.easing.premium}`,
                      zIndex: 10,
                    }}
                  >
                    <Icon size={28} color={tokens.color.hopeGold} strokeWidth={1.5} />
                  </Box>
                </Box>

                {/* ÁREA INFERIOR: CONTENEDOR DE TEXTO SÓLIDO (40%) */}
                <Box
                  sx={{
                    flex: "0 0 40%",
                    backgroundColor: tokens.color.graphite,
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Eyebrow */}
                  <Typography
                    sx={{
                      fontFamily: tokens.font.body,
                      fontSize: "0.72rem",
                      fontWeight: 880,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "rgba(255, 255, 255, 0.85)",
                      mb: 2,
                    }}
                  >
                    {cardContent}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: tokens.font.display,
                      fontSize: { xs: "1.5rem", md: "1.8rem" },
                      fontWeight: 900,
                      lineHeight: 1.1,
                      letterSpacing: "-0.045em",
                      color: "rgba(255, 255, 255, 0.95)",
                      mb: 2,
                    }}
                  >
                    {cardTitle}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: tokens.font.body,
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                  >
                    {cardDesc}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
