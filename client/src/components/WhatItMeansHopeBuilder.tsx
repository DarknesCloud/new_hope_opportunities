import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Instituciones que apoyan a New Hope Opportunities",
    benefits: [
      {
        title: "Perspectiva Global",
        image: "/assets/alianzas/unitec.png",
      },
      {
        title: "Comunidad Solidaria",
        image: "/assets/alianzas/cepudo.jpg",
      },
      {
        title: "Impacto Tangible",
        image: "/assets/alianzas/operacion.jpg",
      },
    ],
  },
  en: {
    title: "Institutions supporting New Hope Opportunities",
    benefits: [
      {
        title: "Global Perspective",
      },
      {
        title: "Supportive Community",
      },
      {
        title: "Tangible Impact",
      },
    ],
  },
};

export function WhatItMeansHopeBuilder() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.warmWhite,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              letterSpacing: "-0.065em",
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            {copy.title}
          </Typography>

          <Box
            sx={{
              width: "4rem",
              height: "0.35rem",
              backgroundColor: tokens.color.hopeGold,
              borderRadius: "999px",
              mx: "auto",
            }}
          />
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3,1fr)",
            },
            gap: { xs: 4, md: 5 },
          }}
        >
          {copy.benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "26px",
                overflow: "hidden",
                background: "#fff",
                border: "1px solid rgba(0,0,0,.05)",
                boxShadow: "0 20px 45px rgba(0,0,0,.08)",
                transition: ".45s ease",
                cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 35px 70px rgba(0,0,0,.14)",
                },

                "&:hover img": {
                  transform: "scale(1.08)",
                },
              }}
            >
              {/* Línea Dorada */}
              <Box
                sx={{
                  height: 6,
                  background: tokens.color.hopeGold,
                }}
              />

              {/* Imagen */}
              <Box
                sx={{
                  position: "relative",
                  height: 320,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={benefit.image}
                  alt={benefit.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: ".6s ease",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.15) 45%, transparent 100%)",
                  }}
                />

                {/* Título */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 26,
                    left: 26,
                    right: 26,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontFamily: tokens.font.display,
                      fontWeight: 800,
                      fontSize: {
                        xs: "1.45rem",
                        md: "1.6rem",
                      },
                      lineHeight: 1.2,
                      textShadow: "0 4px 12px rgba(0,0,0,.45)",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
