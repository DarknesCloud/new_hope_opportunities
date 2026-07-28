import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Users,
  Brain,
  FlaskConical,
  Monitor,
  Library,
  GraduationCap,
  Calculator,
  Languages,
  Palette,
} from "lucide-react";

interface Area {
  icon: React.ReactNode;
  title: { es: string; en: string };
}

const areas: Area[] = [
  {
    icon: <Users size={40} />,
    title: {
      es: "Orientación y Coordinación Académica",
      en: "Academic Guidance and Coordination",
    },
  },
  {
    icon: <Brain size={40} />,
    title: {
      es: "Psicología",
      en: "Psychology",
    },
  },
  {
    icon: <FlaskConical size={40} />,
    title: {
      es: "Laboratorio de Ciencias Naturales",
      en: "Natural Sciences Laboratory",
    },
  },
  {
    icon: <Monitor size={40} />,
    title: {
      es: "Laboratorio de Computación",
      en: "Computer Laboratory",
    },
  },
  {
    icon: <Library size={40} />,
    title: {
      es: "Biblioteca",
      en: "Library",
    },
  },
  {
    icon: <GraduationCap size={40} />,
    title: {
      es: "Bachillerato en Ciencias y Humanidades",
      en: "High School in Science and Humanities",
    },
  },
  {
    icon: <Calculator size={40} />,
    title: {
      es: "Bachillerato Profesional en Contaduría y Finanzas",
      en: "Professional High School in Accounting and Finance",
    },
  },
  {
    icon: <Languages size={40} />,
    title: {
      es: "Inglés",
      en: "English",
    },
  },
  {
    icon: <Palette size={40} />,
    title: {
      es: "Expresiones Artísticas",
      en: "Artistic Expression",
    },
  },
];

const content = {
  es: {
    title: "",
  },
  en: {
    title: "",
  },
};

export function AcademicAreas() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.5rem", md: "3.2rem" },
              fontWeight: 850,
              color: tokens.color.hopeGold,
              letterSpacing: "-0.065em",
              lineHeight: 1,
              mb: 3,
            }}
          >
            {copy.title}
          </Typography>

          {/* Gold Accent Line */}
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

        {/* Areas Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 6, md: 8 },
          }}
        >
          {areas.map((area, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Icon Circle with Border */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `3px solid ${tokens.color.hopeGold}`,
                  color: tokens.color.hopeGold,
                  backgroundColor: "transparent",
                  transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "scale(1.15)",
                    backgroundColor: `${tokens.color.hopeGold}15`,
                    boxShadow: `0 12px 40px ${tokens.color.hopeGold}25`,
                  },
                }}
              >
                {area.icon}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: tokens.font.display,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 800,
                  color: tokens.color.graphite,
                  letterSpacing: "-0.03em",
                  textAlign: "center",
                  lineHeight: 1.3,
                  maxWidth: "140px",
                }}
              >
                {area.title[language]}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
