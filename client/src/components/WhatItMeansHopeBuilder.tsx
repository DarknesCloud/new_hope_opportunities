import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Instituciones que apoyan a New Hope Opportunities",
    subtitle:
      "Estas organizaciones han acompañado el trabajo de New Hope Opportunities mediante educación, desarrollo comunitario y servicio.",
    benefits: [
      {
        title: "UNITEC",
        description: "Colaboración educativa y profesional.",
        image: "/assets/alianzas/unitec.png",
      },
      {
        title: "CEPUDO",
        description: "Apoyo al desarrollo comunitario y a iniciativas de servicio.",
        image: "/assets/alianzas/cepudo.jpg",
      },
      {
        title: "Operación Bendición",
        description: "Acompañamiento a iniciativas comunitarias y humanitarias.",
        image: "/assets/alianzas/operacion.jpg",
      },
    ],
  },
  en: {
    title: "Institutions supporting New Hope Opportunities",
    subtitle:
      "These organizations have supported New Hope Opportunities through education, community development, and service.",
    benefits: [
      {
        title: "UNITEC",
        description: "Educational and professional collaboration.",
        image: "/assets/alianzas/unitec.png",
      },
      {
        title: "CEPUDO",
        description: "Support for community development and service initiatives.",
        image: "/assets/alianzas/cepudo.jpg",
      },
      {
        title: "Operación Bendición",
        description: "Support for community and humanitarian initiatives.",
        image: "/assets/alianzas/operacion.jpg",
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
              mb: 2.5,
            }}
          />
          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              color: tokens.color.graphiteSoft,
              fontFamily: tokens.font.body,
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              lineHeight: 1.75,
            }}
          >
            {copy.subtitle}
          </Typography>
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
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      fontFamily: tokens.font.body,
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                      mt: 0.8,
                      textShadow: "0 2px 8px rgba(0,0,0,.35)",
                    }}
                  >
                    {benefit.description}
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
