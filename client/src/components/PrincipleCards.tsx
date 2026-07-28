import { Eye, Heart, Target } from "lucide-react";
import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

import misionImg from "@/assets/photos/hope.jpg";

const misionImgUrl = "/assets/identidad.jpg";
const visionImgUrl = "/assets/esperanza.jpg";
const valoresImgUrl = "/assets/valores.webp";

const copy = {
  es: {
    cardsTitle: "Construyendo Identidad Valores y Esperanza",
    principles: [
      {
        icon: Target,
        title: "Identidad",
        text: "New Hope Opportunities Honduras nació en 1998 en Rivera Hernández, San Pedro Sula, con la misión de brindar educación, esperanza y nuevas oportunidades a la comunidad.",
        image: misionImgUrl,
      },
      {
        icon: Eye,
        title: "Esperanza",
        text: "En la actualidad, New Hope Opportunities impulsa el desarrollo de la comunidad mediante 3 programas educativos y 7 programas de impacto, formando vidas con una educación integral basada en valores cristianos.",
        image: visionImgUrl,
      },
      {
        icon: Heart,
        title: "Valores",
        text: "Fe, amor, integridad, excelencia y esperanza guían la toma de decisiones y el trato cotidiano con cada estudiante.",
        image: valoresImgUrl,
      },
    ],
  },
  en: {
    cardsTitle: "Developing Identity, Values and Hope",
    principles: [
      {
        icon: Target,
        title: "Identity",
        text: "New Hope Opportunities Honduras was founded in 1998 in Rivera Hernández, San Pedro Sula, with the mission of providing education, hope, and new opportunities to the community.",
        image: misionImgUrl,
      },
      {
        icon: Eye,
        title: "Hope",
        text: "Today, New Hope Opportunities drives community development through three educational programs and seven impact programs, shaping lives through a holistic education grounded in Christian values.",
        image: visionImgUrl,
      },
      {
        icon: Heart,
        title: "Values",
        text: "Faith, love, integrity, excellence, and hope guide decision-making and daily treatment of each student.",
        image: valoresImgUrl,
      },
    ],
  },
};

export function PrincipleCards() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{ backgroundColor: tokens.color.warmSand }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}
        >
          {content.cardsTitle}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {content.principles.map(item => {
            const Icon = item.icon;
            return (
              <Box
                key={item.title}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.875rem",
                  minHeight: "450px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: { xs: 3, md: 4 },
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition:
                    "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    "& .bg-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                {/* Background Image Layer */}
                <Box
                  className="bg-image"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 500ms ease-out",
                  }}
                />

                {/* Dark Overlay Gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.90), rgba(0,0,0,0.50), transparent)",
                    zIndex: 10,
                  }}
                />

                {/* Content Container */}
                <Box sx={{ position: "relative", zIndex: 20 }}>
                  <Box
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: tokens.radius.pill,
                      display: "grid",
                      placeItems: "center",
                      color: tokens.color.graphite,
                      backgroundColor: tokens.color.hopeGold,
                      mb: 2.4,
                    }}
                  >
                    <Icon size={26} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 1.6,
                      fontSize: "1.35rem",
                      color: tokens.color.warmWhite,
                      fontWeight: 850,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.92)",
                      lineHeight: 1.75,
                      fontSize: "1rem",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
