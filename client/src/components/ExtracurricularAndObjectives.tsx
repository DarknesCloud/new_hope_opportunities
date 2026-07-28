import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

// Import images
import extracurricularImg from "@/assets/photos/clasesExtra.png";
import objectivesImg from "@/assets/photos/objetivos.png";

interface Objective {
  text: { es: string; en: string };
}

const objectives: Objective[] = [
  {
    text: {
      es: "Formar estudiantes con sólidos valores cristianos, principios morales e identidad nacional.",
      en: "Develop students with strong Christian values, moral principles, and a deep sense of national identity.",
    },
  },
  {
    text: {
      es: "Descubrir, desarrollar y potenciar los talentos, habilidades y dones únicos de cada niño y joven.",
      en: "Discover, develop, and strengthen the unique talents, abilities, and gifts of every child and young person.",
    },
  },
  {
    text: {
      es: "Fomentar la disciplina, la perseverancia, el respeto, el trabajo en equipo y el liderazgo con espíritu de servicio.",
      en: "Promote discipline, perseverance, respect, teamwork, and servant leadership.",
    },
  },
  {
    text: {
      es: "Fortalecer el desarrollo intelectual y el pensamiento crítico como pilares de una educación integral.",
      en: "Strengthen intellectual development and critical thinking as the foundation of a well-rounded education.",
    },
  },
  {
    text: {
      es: "Brindar oportunidades para el crecimiento artístico, cultural y deportivo, promoviendo la creatividad y la excelencia.",
      en: "Provide opportunities for artistic, cultural, and athletic growth while encouraging creativity and excellence.",
    },
  },
  {
    text: {
      es: "Preparar a los estudiantes para una vida autónoma y con propósito, impulsando el aprendizaje continuo y el desarrollo de habilidades para el futuro.",
      en: "Prepare students for a purposeful and independent life by encouraging lifelong learning and the development of skills for the future.",
    },
  },
];

const content = {
  es: {
    extracurricularTitle: "Clases Extracurriculares",
    extracurricularDescription:
      "Las clases extracurriculares complementan la formación integral de nuestros estudiantes al fortalecer sus habilidades artísticas, culturales, musicales y deportivas. A través de experiencias prácticas y creativas, los alumnos desarrollan talentos, descubren nuevas pasiones y fortalecen competencias como la expresión artística, el trabajo en equipo, la disciplina, la creatividad y la confianza. Estas actividades enriquecen su crecimiento personal y contribuyen a una educación equilibrada que trasciende el aula.",
    objectivesTitle: "Nuestros Objetivos",
  },
  en: {
    extracurricularTitle: "Extracurricular Classes",
    extracurricularDescription:
      "Our extracurricular classes complement students' holistic education by strengthening their artistic, cultural, musical, and athletic abilities. Through hands-on and creative experiences, students develop their talents, discover new passions, and build skills such as artistic expression, teamwork, discipline, creativity, and confidence. These activities enrich their personal growth and contribute to a well-rounded education that extends beyond the classroom.",
    objectivesTitle: "Our Objectives",
  },
};

export function ExtracurricularAndObjectives() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Left Column: Extracurricular */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {/* Image */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: tokens.shadow.elevated,
              }}
            >
              <Box
                component="img"
                src={extracurricularImg}
                alt="Clases Extracurriculares"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            {/* Content */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Box
                  sx={{
                    width: "3.5rem",
                    height: "0.35rem",
                    backgroundColor: tokens.color.hopeGold,
                    borderRadius: "999px",
                    mb: 2,
                  }}
                />
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.75rem", md: "2.2rem" },
                    fontWeight: 850,
                    color: tokens.color.graphite,
                    letterSpacing: "-0.055em",
                    lineHeight: 1.1,
                  }}
                >
                  {copy.extracurricularTitle}
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: tokens.font.body,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: tokens.color.graphiteSoft,
                  lineHeight: 1.85,
                  letterSpacing: "-0.01em",
                }}
              >
                {copy.extracurricularDescription}
              </Typography>
            </Box>
          </Box>

          {/* Right Column: Objectives */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {/* Image */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "2rem",
                overflow: "hidden",
                boxShadow: tokens.shadow.elevated,
              }}
            >
              <Box
                component="img"
                src={objectivesImg}
                alt="Nuestros Objetivos"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>

            {/* Content */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Box
                  sx={{
                    width: "3.5rem",
                    height: "0.35rem",
                    backgroundColor: tokens.color.hopeGold,
                    borderRadius: "999px",
                    mb: 2,
                  }}
                />
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.75rem", md: "2.2rem" },
                    fontWeight: 850,
                    color: tokens.color.graphite,
                    letterSpacing: "-0.055em",
                    lineHeight: 1.1,
                  }}
                >
                  {copy.objectivesTitle}
                </Typography>
              </Box>

              {/* Objectives List */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {objectives.map((objective, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <CheckCircle2
                      size={20}
                      color={tokens.color.success}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: tokens.font.body,
                        fontSize: "0.9rem",
                        color: tokens.color.graphiteSoft,
                        lineHeight: 1.6,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {objective.text[language]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
