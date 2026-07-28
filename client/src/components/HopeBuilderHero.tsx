import { Box, Button, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

// Import hero image
import heroImage from "@/assets/photos/portada.png";

const content = {
  es: {
    eyebrow: "Sé parte del cambio",
    title: "Esperanza ",
    subtitle: "Nuevas Oportunidades, Mejor Futuro",
    description:
      "Las donaciones que recibimos se destinan de manera íntegra al fortalecimiento de los programas, proyectos e iniciativas de New Hope Opportunities Honduras, permitiéndonos ampliar el acceso a una educación integral, el desarrollo comunitario y la formación espiritual. Gracias a este apoyo voluntario y sin fines de lucro, seguimos transformando vidas y generando oportunidades para niños, jóvenes y familias de la comunidad Rivera Hernández.",
    cta: "Únete Ahora",
  },
  en: {
    eyebrow: "Be Part of the Change",
    title: "Hope",
    subtitle: "New Opportunities, Best Future",
    description:
      "The donations we receive are dedicated entirely to strengthening the programs, projects, and initiatives of New Hope Opportunities Honduras, enabling us to expand access to holistic education, community development, and spiritual formation. Thanks to this voluntary, non-profit support, we continue to transform lives and create opportunities for children, youth, and families in the Rivera Hernández community.",
    cta: "Join Now",
  },
};

export function HopeBuilderHero() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "600px", md: "700px", lg: "750px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        mt: { xs: "76px", md: "88px" },
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          zIndex: 0,
        }}
      />

      {/* Dark Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.35) 100%)`,
          zIndex: 1,
        }}
      />

      {/* Gold Accent Line - Top */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "6px",
          background: `linear-gradient(90deg, ${tokens.color.hopeGold} 0%, ${tokens.color.hopeGold} 30%, transparent 100%)`,
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "900px",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* Eyebrow */}
          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              fontWeight: 700,
              color: tokens.color.hopeGold,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              mb: 2,
              opacity: 0.95,
            }}
          >
            {copy.eyebrow}
          </Typography>

          {/* Main Title */}
          <Typography
            component="h1"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
              fontWeight: 900,
              color: tokens.color.warmWhite,
              letterSpacing: "-0.08em",
              lineHeight: 1,
              mb: 3,
              textShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              textWrap: "balance",
            }}
          >
            {copy.title}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.25rem", md: "1.75rem" },
              fontWeight: 700,
              color: tokens.color.hopeGold,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              mb: 4,
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
              textWrap: "balance",
            }}
          >
            {copy.subtitle}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: tokens.color.warmWhite,
              lineHeight: 1.8,
              letterSpacing: "-0.01em",
              mb: 5,
              maxWidth: "700px",
              mx: "auto",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              opacity: 0.95,
            }}
          >
            {copy.description}
          </Typography>

          {/* CTA Button */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "0.95rem", md: "1rem" },
                fontWeight: 700,
                borderRadius: tokens.radius.md,
                textTransform: "none",
                boxShadow: `0 12px 32px rgba(242, 185, 0, 0.3)`,
                transition: "all 300ms ease-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 20px 48px rgba(242, 185, 0, 0.4)`,
                },
              }}
            >
              {copy.cta}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Animated Gradient Accent - Bottom Right */}
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          right: -50,
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, rgba(242, 185, 0, 0.15) 0%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
