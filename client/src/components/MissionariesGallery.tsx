import { Box, Container, Typography } from "@mui/material";
import { Heart, Sparkles } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    eyebrow: "Viajes Misioneros",
    title: "Transformando vidas a través del servicio",
    description:
      "Cada año, grupos de misioneros, iglesias y voluntarios internacionales viajan a Rivera Hernández para servir, enseñar y crecer junto a nuestra comunidad. Estos encuentros transforman tanto a los que sirven como a los que reciben, sembrando esperanza y construyendo puentes de amor entre culturas.",
    galleryTitle: "Momentos de Impacto",
    gallerySubtitle:
      "Historias de encuentro, servicio y transformación en Rivera Hernández",
    imageLabels: [
      "Jóvenes de la comunidad",
      "Brigada misionera internacional",
      "Conexión y amor en acción",
    ],
  },
  en: {
    eyebrow: "Missionary Trips",
    title: "Transforming lives through service",
    description:
      "Each year, groups of missionaries, churches, and international volunteers travel to Rivera Hernández to serve, teach, and grow alongside our community. These encounters transform both those who serve and those who receive, sowing hope and building bridges of love between cultures.",
    galleryTitle: "Moments of Impact",
    gallerySubtitle:
      "Stories of encounter, service, and transformation in Rivera Hernández",
    imageLabels: [
      "Community youth",
      "International missionary brigade",
      "Connection and love in action",
    ],
  },
} as const;

interface MissionariesGalleryProps {
  language?: "es" | "en";
}

export function MissionariesGallery({
  language = "es",
}: MissionariesGalleryProps) {
  const content = copy[language];

  const images = [
    {
      src: "/assets/missions/missionaries-group.webp",
      label: content.imageLabels[0],
      alt: "Jóvenes de la comunidad de Rivera Hernández",
    },
    {
      src: "/assets/missions/missionaries-airport.jpg",
      label: content.imageLabels[1],
      alt: "Brigada misionera internacional en Honduras",
    },
    {
      src: "/assets/missions/missionaries-embrace.jpg",
      label: content.imageLabels[2],
      alt: "Conexión y abrazo entre misioneros y comunidad",
    },
  ];

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
        {/* Header Section - CENTERED */}
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "3xl", mx: "auto" }}>
          <Box className="hope-eyebrow" sx={{ mb: 2, justifyContent: "center" }}>
            <Heart size={15} />
            {content.eyebrow}
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.875rem", md: "3rem" },
              fontWeight: 900,
              lineHeight: 0.96,
              letterSpacing: "-0.075em",
              color: tokens.color.graphite,
              mb: 4,
            }}
          >
            {content.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: tokens.color.graphiteSoft,
            }}
          >
            {content.description}
          </Typography>
        </Box>

        {/* Gallery Section */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: "center" }}>
            <Box className="hope-eyebrow" sx={{ mb: 2, justifyContent: "center" }}>
              <Sparkles size={15} />
              {content.galleryTitle}
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.08rem" },
                color: tokens.color.graphiteSoft,
                lineHeight: 1.7,
              }}
            >
              {content.gallerySubtitle}
            </Typography>
          </Box>

          {/* Image Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                className="hope-card-premium"
                sx={{
                  position: "relative",
                  minHeight: { xs: 280, md: 360 },
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: `transform 360ms ${tokens.easing.premium}, box-shadow 360ms ${tokens.easing.premium}`,
                  boxShadow: tokens.shadow.soft,
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: tokens.shadow.elevated,
                    "& .image-overlay": {
                      opacity: 0.85,
                    },
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Overlay Gradient */}
                <Box
                  className="image-overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(31,31,31,0.70), rgba(31,31,31,0.10))",
                    opacity: 0.75,
                    transition: `opacity 360ms ${tokens.easing.premium}`,
                  }}
                />

                {/* Label */}
                <Typography
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: { xs: 3, md: 4 },
                    color: tokens.color.warmWhite,
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    fontWeight: 850,
                    lineHeight: 1.2,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {image.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Unified CTA + Subscription Section */}
        <Box
          sx={{
            backgroundColor: tokens.color.warmSand,
            borderRadius: tokens.radius.xl,
            p: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              lineHeight: 1.3,
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            {language === "es"
              ? "¿Deseas ser parte de esta transformación?"
              : "Do you want to be part of this transformation?"}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: tokens.color.graphiteSoft,
              lineHeight: 1.7,
              maxWidth: 600,
              mx: "auto",
              mb: 4,
            }}
          >
            {language === "es"
              ? "Conoce más sobre nuestros viajes misioneros y cómo tu grupo puede impactar vidas en Rivera Hernández."
              : "Learn more about our missionary trips and how your group can impact lives in Rivera Hernández."}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            <input
              type="email"
              placeholder={language === "es" ? "Tu correo electrónico" : "Your email"}
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "0.95rem",
                fontFamily: "inherit",
              }}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                backgroundColor: tokens.color.hopeGold,
                color: tokens.color.graphite,
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              {language === "es" ? "Suscribirse" : "Subscribe"}
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
