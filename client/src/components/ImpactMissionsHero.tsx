import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import { Box, Container, Typography } from "@mui/material";

const copy = {
  es: {
    eyebrow: "NUESTRO COMPROMISO",
    title:
      "Así que no nos cansemos de hacer el bien. A su debido tiempo, cosecharemos numerosas bendiciones si no nos damos por vencidos.",
    subtitle: "Gálatas 6:9",
  },
  en: {
    eyebrow: "OUR COMMITMENT",
    title:
      "So let's not get tired of doing what is good. At just the right time we will reap a harvest of blessing if we don't give up.",
    subtitle: "Galatians 6:9",
  },
} as const;

export function ImpactMissionsHero() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",

        minHeight: { xs: "60vh", md: "98vh" },
        display: "flex",
        alignItems: "flex-start", // Mantiene el texto arriba
        overflow: "hidden",
        backgroundImage: `url(/assets/programs/hero-impact-missions.jpg)`,
        backgroundSize: "cover",
        // backgroundPosition: "center 30%" es un buen equilibrio para priorizar la parte superior/media de la foto.
        backgroundPosition: { xs: "center", md: "center 30%" },
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay optimizado */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.10) 100%)",
          zIndex: 1,
        }}
      />

      {/* Contenido Editorial */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          // --- AJUSTE DE PADDING: Más aire arriba ---
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "520px", md: "580px" },
          }}
        >
          {/* Eyebrow */}
          <Typography
            variant="body2"
            sx={{
              color: tokens.color.hopeGoldSoft,
              fontWeight: 700,
              letterSpacing: "0.18em",
              mb: 1.5,
              textTransform: "uppercase",
              fontSize: "0.85rem",
              fontFamily: tokens.font.body,
            }}
          >
            {content.eyebrow}
          </Typography>

          {/* Título Principal (con comillas) */}
          <Typography
            component="h1"
            sx={{
              color: tokens.color.warmWhite,
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.5rem", sm: "1.85rem", md: "2.25rem" },
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              mb: 1.5,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            "{content.title}"
          </Typography>

          {/* Subtítulo (Cita bíblica) */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontFamily: tokens.font.body,
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontWeight: 600,
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            — {content.subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
