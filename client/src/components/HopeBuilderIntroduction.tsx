import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import communityImage from "@/assets/photos/clave.jpg";

const content = {
  es: {
    section1Title: "Alcance Comunitario",
    section1Description:
      "Sé un Donante de Esperanza y únete a New Hope Opportunities Honduras para transformar vidas en la comunidad Rivera Hernández. Junto a iglesias, organizaciones y personas comprometidas, puedes apoyar programas de educación, desarrollo comunitario y formación en espiritual que brindan nuevas oportunidades a quienes más lo necesitan.",
    section2Title: "Una asociación tangible",
    section2Description1:
      "Te invitamos a asociarte con New Hope Opportunities convirtiéndote en Hope Builder y jugando un papel tangible en la obra del ministerio. Creemos que el amor centrado en Cristo y la educación en la comunidad Rivera Hernández es clave para revertir la violencia, la pobreza y la injusticia que ha hecho que este barrio sea conocido internacionalmente.",
    section2Description2:
      "A través de tus donaciones mensuales, te asocias, sigues y presencias el impacto de New Hope Opportunities en Honduras. Cuando te conviertes en Hope Builder, un donante regular, te conviertes en una parte crucial del equipo de New Hope. Ayudarás a obtener recursos confiables para que podamos ser un faro consistente y seguro de luz en una comunidad inestable.",
  },
  en: {
    section1Title: "Community Outreach",
    section1Description:
      "Become a Donor of Hope and join New Hope Opportunities Honduras to transform lives in the Rivera Hernández community. Together with churches, organizations, and committed individuals, you can support education, community development, and spiritual formation programs that provide new opportunities to those who need them most.",
    section2Title: "A tangible partnership",
    section2Description1:
      "We invite you to partner with New Hope Opportunities by becoming a Hope Builder and playing a tangible part in the work of the ministry. We believe that Christ-centered love and education in the Rivera Hernández community is key to reversing the violence, poverty and injustice that has made this neighborhood known internationally.",
    section2Description2:
      "Through your monthly giving, you partner with, follow, and witness the impact of New Hope Opportunities in Honduras. When you become a Hope Builder, a regular giver, you become a crucial part of the New Hope team. You will help get dependable resources to New Hope so we can be a consistent and safe beacon of light in an unstable community.",
  },
};

export function HopeBuilderIntroduction() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box component="section" sx={{ backgroundColor: tokens.color.ivory }}>
      {/* Section 1: Image Left, Text Right */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            py: { xs: 6, md: 8 },
          }}
        >
          {/* Image */}
          <Box
            sx={{
              position: "relative",
              order: { xs: 1, md: 0 },
            }}
          >
            <Box
              component="img"
              src={communityImage}
              alt="Hope Builders Community"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: tokens.radius.lg,
                boxShadow: tokens.shadow.soft,
                display: "block",
              }}
            />
          </Box>

          {/* Text Content */}
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 850,
                color: tokens.color.graphite,
                letterSpacing: "-0.065em",
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              {copy.section1Title}
            </Typography>

            <Box
              sx={{
                width: "3rem",
                height: "0.35rem",
                backgroundColor: tokens.color.hopeGold,
                borderRadius: "999px",
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: { xs: "1rem", md: "1.05rem" },
                color: tokens.color.graphiteSoft,
                lineHeight: 1.8,
                letterSpacing: "-0.01em",
              }}
            >
              {copy.section1Description}
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Section 2: Text Left, Image Right */}
    </Box>
  );
}
