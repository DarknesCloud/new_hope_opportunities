import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    title: "Conoce Nuestro Equipo",
    subtitle: "",
    team: [
      {
        name: "MARNE & EDITH COTTRIEL",
        role: "Founder and President, USA",
        image: "/assets/marneandedith.png",
      },
      {
        name: "TANNER & HEATHER",
        role: "Chief Financial Officer, USA",
        image: "/assets/tannerandheather.png",
      },
      {
        name: "GLORIA DE FERNANDEZ",
        role: "Chair of the Board of Directors",
        image: "/assets/gloria.png",
      },
      {
        name: "LIC. HOSMAN FERNANDEZ",
        role: "Director of Spiritual Life",
        image: "/assets/hosman.png",
      },
      {
        name: "ABOG. KELLY ANDRADE",
        role: "Administrative Director, Honduras",
        image: "/assets/kelly.png",
      },
      {
        name: "LIC. MARIELA PINEDA",
        role: "Academic Director, Honduras",
        image: "/assets/MarielaPineda.jpg",
      },
    ],
  },
  en: {
    title: "Meet Our Team",
    subtitle: "",
    team: [
      {
        name: "MARNE & EDITH COTTRIEL",
        role: "Founder and President, USA",
        image: "/assets/marneandedith.png",
      },
      {
        name: "TANNER & HEATHER",
        role: "Director of Projects, USA",
        image: "/assets/tannerandheather.png",
      },
      {
        name: "GLORIA DE FERNANDEZ",
        role: "Chair of the Board of Directors",
        image: "/assets/gloria.png",
      },
      {
        name: "KELLY ANDRADE",
        role: "Director of Projects, Honduras",
        image: "/assets/kelly.png",
      },
      {
        name: "GERARDO & MEYLI LOPEZ",
        role: "Directors of Youth Ministries, Honduras",
        image: "/assets/gerardoymeyli.jpg",
      },
      {
        name: "MARIELA PINEDA",
        role: "Academic Director, Honduras",
        image: "/assets/MarielaPineda.jpg",
      },
    ],
  },
} as const;

interface TeamModuleProps {
  language?: "es" | "en";
}

export function TeamModule({ language = "es" }: TeamModuleProps) {
  const content = copy[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{
        backgroundColor: tokens.color.warmWhite,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.2rem", md: "3.6rem" },
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.065em",
              color: tokens.color.graphite,
              mb: 3,
            }}
          >
            {content.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: tokens.color.graphiteSoft,
              lineHeight: 1.8,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            {content.subtitle}
          </Typography>
        </Box>

        {/* Team Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 4, md: 6 },
          }}
        >
          {content.team.map((member, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  borderRadius: tokens.radius.lg,
                  mb: 3,
                  boxShadow: tokens.shadow.soft,
                  transition: `transform 400ms ${tokens.easing.premium}, box-shadow 400ms ${tokens.easing.premium}`,
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: tokens.shadow.elevated,
                  },
                }}
              />

              {/* Name */}
              <Typography
                sx={{
                  fontFamily: tokens.font.display,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 900,
                  color: tokens.color.graphite,
                  letterSpacing: "0.02em",
                  lineHeight: 1.3,
                  mb: 1,
                  textTransform: "uppercase",
                }}
              >
                {member.name}
              </Typography>

              {/* Role */}
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  color: tokens.color.graphiteSoft,
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {member.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
