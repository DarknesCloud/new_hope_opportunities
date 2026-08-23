import { Box, Container, Typography } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";
import { DonationGateway } from "@/components/DonationGateway";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    eyebrow: "Apoya a New Hope",
    title: "Una contribución mensual puede abrir nuevas oportunidades.",
    subtitle:
      "Tu apoyo fortalece la educación, nutrición, formación y acompañamiento que New Hope Opportunities brinda a niños y jóvenes de Rivera Hernández.",
  },
  en: {
    eyebrow: "Support New Hope",
    title: "A monthly contribution can open new opportunities.",
    subtitle:
      "Your support strengthens the education, nutrition, formation, and care New Hope Opportunities provides to children and young people in Rivera Hernández.",
  },
} as const;

export function Donar() {
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
        component="header"
        sx={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${tokens.color.graphiteDark} 0%, ${tokens.color.graphite} 68%, ${tokens.color.hopeGoldDark} 160%)`,
          color: tokens.color.warmWhite,
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              color: tokens.color.hopeGoldSoft,
            }}
          >
            <FavoriteRounded sx={{ fontSize: 18 }} />
            <Typography
              sx={{
                fontSize: "0.78rem",
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {content.eyebrow}
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              maxWidth: 850,
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.55rem", md: "4.25rem" },
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.055em",
              mb: 2.5,
            }}
          >
            {content.title}
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              color: "rgba(255,255,255,0.76)",
              fontSize: { xs: "1rem", md: "1.12rem" },
              lineHeight: 1.8,
            }}
          >
            {content.subtitle}
          </Typography>
        </Container>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <DonationGateway />
      </Box>

      <Footer language={language} />
    </Box>
  );
}
