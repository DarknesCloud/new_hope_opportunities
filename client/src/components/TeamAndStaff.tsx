import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import teamImg1 from "@/assets/photos/team.jpg";
import teamImg2 from "@/assets/photos/team.jpg";

const TRANSITION_INTERVAL = 5000; // 5 segundos entre cambios

const content = {
  es: {
    boardTitle: "Personal Docente",
    boardDescription:
      "En New Hope Opportunities Honduras creemos que una educación de excelencia comienza con docentes comprometidos y preparados. Nuestro equipo de 27 educadores combina experiencia, vocación de servicio y una profunda fe en Cristo para brindar una enseñanza de alta calidad en un ambiente de amor, respeto y acompañamiento. Más que transmitir conocimientos, nuestros maestros inspiran, orientan y fortalecen el desarrollo académico, espiritual y personal de cada estudiante, ofreciendo una atención cercana que les permite descubrir su potencial y prepararse para un futuro con propósito.",
  },
  en: {
    boardTitle: "Teaching Staff",
    boardDescription:
      "At New Hope Opportunities Honduras, we believe that an excellent education begins with committed and well-prepared teachers. Our team of 27 educators combines experience, a heart for service, and a deep faith in Christ to provide high-quality instruction within an environment of love, respect, and guidance. Beyond simply imparting knowledge, our teachers inspire, mentor, and foster the academic, spiritual, and personal growth of every student, offering the personal attention needed to discover their potential and prepare for a purposeful future.",
  },
};

export function TeamAndStaff() {
  const { language } = useLanguage();
  const copy = content[language];
  const [currentTeamImageIndex, setCurrentTeamImageIndex] = useState(0);

  const teamImages = [teamImg1, teamImg2];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamImageIndex(prev => (prev + 1) % teamImages.length);
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, [teamImages.length]);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 4,
          }}
        >
          {/* Image with Transition */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "2rem",
              overflow: "hidden",
              boxShadow: tokens.shadow.elevated,
            }}
          >
            {teamImages.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`Teaching staff ${index + 1}`}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: index === currentTeamImageIndex ? 1 : 0,
                  transition: "opacity 800ms ease-in-out",
                  pointerEvents: "none",
                }}
              />
            ))}
          </Box>

          {/* Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "3.5rem",
                height: "0.35rem",
                backgroundColor: tokens.color.hopeGold,
                borderRadius: "999px",
                mb: 1,
              }}
            />
            <Typography
              component="h3"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 850,
                color: tokens.color.graphite,
                letterSpacing: "-0.055em",
                lineHeight: 1.1,
              }}
            >
              {copy.boardTitle}
            </Typography>

            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: tokens.color.graphiteSoft,
                lineHeight: 1.85,
                letterSpacing: "-0.01em",
                mt: 1,
              }}
            >
              {copy.boardDescription}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
