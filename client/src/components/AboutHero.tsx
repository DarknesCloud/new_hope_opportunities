import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images - using available photos from the project
import kid1 from "@/assets/photos/kids/hero-page-2_1.jpg";
import kid2 from "@/assets/photos/kids/hero-page-2_2.jpg";

const content = {
  es: {
    eyebrow: "Sobre Nosotros",
    titlePart1: "¿Qué",
    titlePart2: "hacemos?",
    description:
      "En New Hope Opportunities Honduras, transformamos vidas mediante una educación integral centrada en Cristo, el cuidado holístico y oportunidades que abren puertas a un futuro con esperanza. Nuestro compromiso es formar estudiantes con excelencia académica, valores cristianos y las herramientas necesarias para desarrollar su máximo potencial e impactar positivamente a sus familias, comunidades y al mundo.",
  },
  en: {
    eyebrow: "About Us",
    titlePart1: "What do",
    titlePart2: "we do?",
    description:
      "At New Hope Opportunities Honduras, we transform lives through Christ-centered, comprehensive education, holistic care, and opportunities that open doors to a hopeful future. We are committed to shaping students with academic excellence, Christian values, and the tools needed to reach their full potential and positively impact their families, communities, and the world.",
  },
};

export function AboutHero() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Left Column: Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
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

            {/* Title with accent */}
            <Typography
              component="h1"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: 900,
                color: tokens.color.graphite,
                letterSpacing: "-0.065em",
                lineHeight: 1,
                textWrap: "balance",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: tokens.color.hopeGold,
                  display: "block",
                }}
              >
                {copy.titlePart1}
              </Box>
              {copy.titlePart2}
            </Typography>

            {/* Gold Accent Line */}
            <Box
              sx={{
                width: "4rem",
                height: "0.4rem",
                backgroundColor: tokens.color.hopeGold,
                borderRadius: "999px",
                mt: 1,
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
                maxWidth: "90%",
              }}
            >
              {copy.description}
            </Typography>
          </Box>

          {/* Right Column: Images */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, md: 3 },
              position: "relative",
              // Aumenté la altura mínima del contenedor para acomodar imágenes más grandes
              minHeight: { xs: "500px", md: "650px" },
            }}
          >
            {/* First Image - Now large, rectangular, and static */}
            <Box
              sx={{
                position: "relative",
                //--- CAMBIO 1: Dimensiones mucho más grandes para "abarcar más espacio" ---
                width: { xs: "180px", md: "280px" },
                height: { xs: "260px", md: "400px" },
                //--- CAMBIO 2: De "50%" (círculo) a un borde redondeado sutil ---
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: tokens.shadow.elevated,
                flexShrink: 0,
                //--- CAMBIO 3: Eliminé la propiedad "animation" por completo ---
              }}
            >
              <Box
                component="img"
                src={kid1}
                alt="Student"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            {/* Second Image - Still offset, but larger, rectangular, and static */}
            <Box
              sx={{
                position: "relative",
                //--- CAMBIO 1 (Segunda imagen): Dimensiones proporcionales más grandes ---
                width: { xs: "160px", md: "250px" },
                height: { xs: "240px", md: "380px" },
                //--- CAMBIO 2 (Segunda imagen): Mismo borde redondeado sutil ---
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: tokens.shadow.soft,
                flexShrink: 0,
                mt: { xs: 4, md: 8 }, // Ajusté el desfase vertical para el nuevo tamaño
                //--- CAMBIO 3 (Segunda imagen): Eliminé la animación y el delay ---
              }}
            >
              <Box
                component="img"
                src={kid2}
                alt="Student"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
