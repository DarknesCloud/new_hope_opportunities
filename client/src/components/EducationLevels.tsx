import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { Blocks, Building2, GraduationCap } from "lucide-react";

interface Level {
  icon: React.ReactNode;
  title: { es: string; en: string };
  isCentered?: boolean;
}

const levels: Level[] = [
  {
    icon: <Blocks size={40} />,
    title: { es: "Pre Básica", en: "Pre-School" },
  },
  {
    icon: <Building2 size={40} />,
    title: { es: "Básica", en: "Grade School" },
    isCentered: true,
  },
  {
    icon: <GraduationCap size={40} />,
    title: { es: "Media", en: "High School" },
  },
];

const content = {
  es: {
    title: "Niveles",
    subtitle: "Áreas",
  },
  en: {
    title: "Academic Levels",
    subtitle: "Areas",
  },
};

export function EducationLevels() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main Section with Golden Background */}
      <Box
        sx={{
          backgroundColor: tokens.color.hopeGold,
          py: { xs: 10, md: 14 },
          position: "relative",
        }}
      >
        {/* Decorative curved top */}
        <Box
          sx={{
            position: "absolute",
            top: -1,
            left: 0,
            right: 0,
            height: "100px",
            background: `radial-gradient(ellipse at center, ${tokens.color.hopeGold} 0%, ${tokens.color.hopeGold} 100%)`,
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Title */}
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 900,
              color: tokens.color.warmWhite,
              letterSpacing: "-0.065em",
              lineHeight: 1,
              textAlign: "center",
              mb: { xs: 8, md: 10 },
            }}
          >
            {copy.title}
          </Typography>

          {/* Levels Grid */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 4, md: 8 },
              flexWrap: "wrap",
            }}
          >
            {levels.map((level, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                {/* Icon Circle */}
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: level.isCentered
                      ? tokens.color.warmWhite
                      : tokens.color.graphiteDark,
                    color: level.isCentered
                      ? tokens.color.hopeGold
                      : tokens.color.hopeGold,
                    boxShadow: level.isCentered
                      ? `0 12px 40px rgba(255, 255, 255, 0.3)`
                      : `0 8px 24px rgba(0, 0, 0, 0.2)`,
                    transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1)",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: level.isCentered
                        ? `0 16px 50px rgba(255, 255, 255, 0.4)`
                        : `0 12px 32px rgba(0, 0, 0, 0.3)`,
                    },
                  }}
                >
                  {level.icon}
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    fontWeight: 800,
                    color: tokens.color.warmWhite,
                    letterSpacing: "-0.03em",
                    textAlign: "center",
                  }}
                >
                  {level.title[language]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Subtitle Section */}
      <Box
        sx={{
          backgroundColor: tokens.color.ivory,
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h3"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 850,
              color: tokens.color.hopeGold,
              letterSpacing: "-0.055em",
              lineHeight: 1,
            }}
          >
            {copy.subtitle}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
