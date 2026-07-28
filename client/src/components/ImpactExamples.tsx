import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import communityImage from "@/assets/photos/impact.jpg";

const content = {
  es: {
    title: "Tu Donación Transforma Vidas y Genera Esperanza.",
    examples: [
      {
        amount: "$30 / mes:",
        description:
          "Proporciona materiales educativos escolares para aproximadamente 15 estudiantes por mes.",
      },
      {
        amount: "$125 / mes:",
        description:
          "Apoya a aproximadamente 4 estudiantes para recibir capacitación vocacional cada mes.",
      },
      {
        amount: "$250 / mes:",
        description:
          "Apoya a aproximadamente 3 estudiantes para asistir a la escuela cada mes.",
      },
      {
        amount: "$500 / mes:",
        description: "Ayuda a apoyar el salario de un maestro por mes.",
      },
    ],
    disclaimer:
      "* Los montos en dólares anteriores son costos reales del programa, pero son solo ejemplos. Todas las donaciones van al fondo general y no se rastrean específicamente para un propósito específico. New Hope Opportunities utilizará estas donaciones a su discreción.",
  },
  en: {
    title: "Your donation transforms lives and creates hope.",
    examples: [
      {
        amount: "$30 / month:",
        description:
          "Provides school instructional materials for approximately 15 students per month.",
      },
      {
        amount: "$125 / month:",
        description:
          "Supports approximately 4 students to get vocational training each month.",
      },
      {
        amount: "$250 / month:",
        description:
          "Supports approximately 3 students to go to school each month.",
      },
      {
        amount: "$500 / month:",
        description: "Helps support a teacher's salary per month.",
      },
    ],
    disclaimer:
      "* The dollar amounts above are real program costs for the ministry, but are examples only. All donations go to the general fund and are not tracked specifically for a specific purpose. New Hope Opportunities will use these donations in its sole discretion.",
  },
};

export function ImpactExamples() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        backgroundImage: `url(${communityImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: { xs: 8, md: 12 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Title */}
        <Typography
          component="h2"
          sx={{
            fontFamily: tokens.font.display,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            fontWeight: 850,
            color: tokens.color.warmWhite,
            letterSpacing: "-0.065em",
            lineHeight: 1.3,
            mb: { xs: 6, md: 8 },
            textWrap: "balance",
            textAlign: "center",
          }}
        >
          {copy.title}
        </Typography>

        {/* Examples List */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          {copy.examples.map((example, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "flex-start" },
                mb: { xs: 4, md: 5 },
                pb: { xs: 4, md: 5 },
                borderBottom:
                  index < copy.examples.length - 1
                    ? `1px solid rgba(255, 255, 255, 0.2)`
                    : "none",
              }}
            >
              {/* Amount */}
              <Typography
                sx={{
                  fontFamily: tokens.font.display,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  fontWeight: 820,
                  color: tokens.color.hopeGold,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.4,
                  minWidth: { xs: "auto", md: "180px" },
                  mr: { xs: 0, md: 4 },
                  mb: { xs: 2, md: 0 },
                }}
              >
                {example.amount}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: tokens.font.body,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  color: tokens.color.warmWhite,
                  lineHeight: 1.7,
                  letterSpacing: "-0.01em",
                }}
              >
                {example.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Disclaimer */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: tokens.radius.lg,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            border: `1px solid rgba(242, 185, 0, 0.3)`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: 1.7,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
            }}
          >
            {copy.disclaimer}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
