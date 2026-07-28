import { Box, Card, Chip, Container, Typography } from "@mui/material";
import { ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";

import { HistoricalTimeline } from "@/components/HistoricalTimeline";

import { TeamModule } from "@/components/TeamModule";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import aboutCampus from "@/assets/photos/hope.jpg";
import trustPartners from "@/assets/photos/marne.png";
import { Timeline } from "@/components/Timeline";

const gobernanzaImg = "/assets/gobernanza.JPG";

const copy = {
  es: {
    heroTitle: "Nuestra historia y propósito",
    heroSubtitle:
      "Transformando vidas en Rivera Hernández a través del amor y la educación centrados en Cristo.",
    eyebrow: "Quiénes somos",
    title: "El milagro de San Pedro Sula",
    bodyOne:
      "Desde su juventud, Marne Cottriel sintió el llamado de Dios al servicio misionero. En 1998, junto a su esposa Edith, llegó a Honduras con la visión de transformar vidas a través de la educación y el amor de Cristo. ",
    bodyTwo:
      "Lo que comenzó sin recursos ni infraestructura se convirtió, por la gracia de Dios, en New Hope Opportunities Honduras, un ministerio que hoy brinda oportunidades educativas y esperanza a cientos de niños, jóvenes y familias de la comunidad. ",
    imageLabel: "Marne Cottriel, Fundador y Presidente, USA.",
    governanceTitle: "Gobernanza y confianza",
    governanceBody:
      "New Hope comunica su estándar institucional desde una convicción clara: integridad absoluta, transparencia, mayordomía bíblica, liderazgo responsable, junta directiva, reportes y compromiso con el uso fiel de cada donación.",
    chips: ["Mayordomía bíblica", "Impacto directo", "Responsabilidad"],
  },
  en: {
    heroTitle: "Our story and purpose",
    heroSubtitle:
      "Transforming lives in Rivera Hernández through Christ-centered love and education.",
    eyebrow: "Who we are",
    title: "Miracle in San Pedro Sula",
    bodyOne:
      "From a young age, Marne Cottriel felt God's call to missionary service. In 1998, he and his wife, Edith, traveled to Honduras with a vision to transform lives through education and the love of Christ.",

    bodyTwo:
      "What began without resources or facilities has, by God's grace, grown into New Hope Opportunities Honduras, a ministry that now provides educational opportunities and hope to hundreds of children, young people, and families throughout the community.",
    imageLabel: "By Marne Cottriel, Founder and President, USA.",
    governanceTitle: "Governance and trust",
    governanceBody:
      "New Hope communicates its institutional standard through a clear conviction: absolute integrity, transparency, biblical stewardship, responsible leadership, board accountability, reporting, and a commitment to the faithful use of every donation.",
    chips: [
      "501(c)(3)",
      "Biblical stewardship",
      "Direct impact",
      "Accountability",
    ],
  },
} as const;

export function Nosotros() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: tokens.color.ivory,
      }}
    >
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: 360, md: 460 },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(90deg, rgba(31,31,31,0.80), rgba(31,31,31,0.34)), url(${aboutCampus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 11 } }}
        >
          <Typography
            component="h1"
            sx={{
              maxWidth: 780,
              color: tokens.color.warmWhite,
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.7rem", md: "4.4rem" },
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.065em",
              mb: 2,
            }}
          >
            {content.heroTitle}
          </Typography>
          <Typography
            sx={{
              maxWidth: 690,
              color: tokens.color.hopeGoldSoft,
              fontSize: { xs: "1rem", md: "1.18rem" },
              lineHeight: 1.75,
              fontWeight: 650,
            }}
          >
            {content.heroSubtitle}
          </Typography>
        </Container>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box
          component="section"
          className="section-shell"
          sx={{ backgroundColor: tokens.color.warmWhite }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
                gap: { xs: 5, md: 8 },
                alignItems: "center",
              }}
            >
              <Box>
                <Box className="hope-eyebrow" sx={{ mb: 2 }}>
                  <ShieldCheck size={15} />
                  {content.eyebrow}
                </Box>
                <Typography variant="h2" sx={{ mb: 3, maxWidth: 720 }}>
                  {content.title}
                </Typography>
                <Typography
                  sx={{
                    color: tokens.color.graphiteSoft,
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.9,
                    mb: 2.4,
                  }}
                >
                  {content.bodyOne}
                </Typography>
                <Typography
                  sx={{
                    color: tokens.color.graphiteSoft,
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.9,
                  }}
                >
                  {content.bodyTwo}
                </Typography>
              </Box>

              <Box
                className="hope-card-premium"
                sx={{
                  position: "relative",
                  minHeight: { xs: 360, md: 520 },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={trustPartners}
                  alt={content.imageLabel}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(1.02) contrast(1.02)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(31,31,31,0.64), rgba(31,31,31,0.04))",
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    left: 28,
                    bottom: 26,
                    color: tokens.color.warmWhite,
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.35rem", md: "1.8rem" },
                    fontWeight: 850,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {content.imageLabel}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* GOVERNANCE SECTION WITH BACKGROUND IMAGE */}

        {/* HISTORICAL TIMELINE FIRST */}
        <HistoricalTimeline />
        {/* TEAM MODULE SECOND */}
        <TeamModule language={language} />
      </Box>

      <Footer language={language} />
    </Box>
  );
}
