import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import kid1 from "@/assets/photos/kids/kids1.jpg";
import kid2 from "@/assets/photos/kids/kids2.jpg";
import kid3 from "@/assets/photos/kids/kids3.jpg";
import kid4 from "@/assets/photos/kids/kids4.jpg";

const IMAGES = [kid1, kid2, kid3, kid4];
const TRANSITION_INTERVAL = 4000; // 4 segundos entre cambios

const content = {
  es: {
    eyebrow: "Nuestro propósito",
    title: "Nuestro objetivo",
    description:
      "Transformar integralmente las vidas, familias y el entorno comunitario de la Rivera Hernández en San Pedro Sula, a través de la creación de oportunidades educativas de calidad y programas de formación profesional para niños, jóvenes y adultos.",
  },
  en: {
    eyebrow: "Our purpose",
    title: "Our objective",
    description:
      "To transform the lives of individuals, families, and the community of Rivera Hernández in San Pedro Sula through high-quality educational opportunities and vocational training programs for children, youth, and adults.",
  },
};

export function MissionStatement() {
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % IMAGES.length);
        setIsTransitioning(false);
      }, 600);
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const copy = content[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{
        backgroundColor: tokens.color.ivory,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Two Column Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left Column: Image with Transition */}
          <Box
            sx={{
              position: "relative",
              aspectRatio: { xs: "4/3", md: "1/1" },
              borderRadius: "2.5rem",
              overflow: "hidden",
              boxShadow: tokens.shadow.elevated,
            }}
          >
            {IMAGES.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`Mission image ${index + 1}`}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: "opacity 600ms ease-in-out",
                  pointerEvents: "none",
                }}
              />
            ))}
          </Box>

          {/* Right Column: Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* Eyebrow */}
            <Box
              className="editorial-eyebrow"
              sx={{
                display: "inline-flex",
                width: "fit-content",
              }}
            >
              {copy.eyebrow}
            </Box>

            {/* Title */}
            <Typography
              component="h2"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 850,
                color: tokens.color.graphite,
                letterSpacing: "-0.065em",
                lineHeight: 1.1,
                textWrap: "balance",
              }}
            >
              {copy.title}
            </Typography>

            {/* Gold Accent Line */}
            <Box
              sx={{
                width: "3.5rem",
                height: "0.35rem",
                backgroundColor: tokens.color.hopeGold,
                borderRadius: "999px",
              }}
            />

            {/* Description */}
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: tokens.color.graphiteSoft,
                lineHeight: 1.8,
                letterSpacing: "-0.01em",
              }}
            >
              {copy.description}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
