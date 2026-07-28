import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";

interface ProgramDetailProps {
  id: string;
  title: string;
  description: string;
  impact: string;
  gallery: string[];
}

export function ProgramDetail({ id, title, description, impact, gallery }: ProgramDetailProps) {
  const { language } = useLanguage();
  const [, navigate] = useLocation();

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 12, md: 14 }, pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 300, md: 500 },
          overflow: "hidden",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Box
          component="img"
          src={gallery[0]}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(31,31,31,0.6), rgba(31,31,31,0.1))",
            display: "flex",
            alignItems: "flex-end",
            p: { xs: 3, md: 5 },
          }}
        >
          <Box>
            <Button
              startIcon={<ArrowLeft size={18} />}
              onClick={() => navigate("/programas")}
              sx={{
                color: tokens.color.warmWhite,
                mb: 2,
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {language === "es" ? "Volver" : "Back"}
            </Button>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "3.2rem" },
                fontWeight: 900,
                color: tokens.color.warmWhite,
                fontFamily: tokens.font.display,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* Description Section */}
        <Grid container spacing={6} sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                fontWeight: 900,
                color: tokens.color.graphite,
                mb: 3,
                fontFamily: tokens.font.display,
              }}
            >
              {language === "es" ? "Acerca de este programa" : "About this program"}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.05rem",
                color: tokens.color.graphiteSoft,
                lineHeight: 1.85,
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                fontWeight: 900,
                color: tokens.color.graphite,
                mb: 3,
                fontFamily: tokens.font.display,
              }}
            >
              {language === "es" ? "Impacto Diario" : "Daily Impact"}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.05rem",
                color: tokens.color.graphiteSoft,
                lineHeight: 1.85,
              }}
            >
              {impact}
            </Typography>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 900,
              color: tokens.color.graphite,
              mb: 4,
              fontFamily: tokens.font.display,
            }}
          >
            {language === "es" ? "Galería de Impacto" : "Impact Gallery"}
          </Typography>
          <Grid container spacing={3}>
            {gallery.map((image, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
                  component="img"
                  src={image}
                  alt={`${title} ${idx + 1}`}
                  sx={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    borderRadius: tokens.radius.lg,
                    boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)`,
                    transition: `all 400ms ${tokens.easing.premium}`,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: `0 12px 32px rgba(0, 0, 0, 0.15)`,
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: tokens.color.warmSand,
            borderRadius: tokens.radius.xl,
            p: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 900,
              color: tokens.color.graphite,
              mb: 2,
              fontFamily: tokens.font.display,
            }}
          >
            {language === "es" ? "¿Quieres apoyar este programa?" : "Want to support this program?"}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: tokens.color.graphiteSoft,
              mb: 4,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            {language === "es"
              ? "Tu contribución hace una diferencia real en la vida de nuestros estudiantes."
              : "Your contribution makes a real difference in the lives of our students."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "0.95rem",
              fontWeight: 700,
              borderRadius: tokens.radius.pill,
            }}
          >
            {language === "es" ? "Donar Ahora" : "Donate Now"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
