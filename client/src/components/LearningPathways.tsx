import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import preschoolImg from "@/assets/photos/pillar-education.webp";
import basicImg from "@/assets/photos/impact-sports.webp";
import secondaryImg from "@/assets/photos/impact-graduation.webp";

interface LearningPath {
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
  isFeatured?: boolean;
}

const learningPaths: LearningPath[] = [
  {
    title: { es: "Pre Básica", en: "Pre-Basic" },
    description: {
      es: "Nuestra base principal para la educación de los niños es el currículo básico nacional, fusionado con las metodologías Optimist, Montessori y Oxford. Llamamos a esta fusión el Proyecto NEW HOPE, que se actualiza anualmente para adaptarse a las necesidades de nuestros alumnos.\n\nNuestra metodología se basa en la inmersión lingüística, ofreciendo a los niños de 3 a 6 años un entorno rico en estímulos sensoriales y motores que favorecen su desarrollo. El juego, actividad esencial en la educación infantil, sirve como medio de aprendizaje a través del cual los niños exploran y adquieren.",
      en: "Our main foundation for children's education is the national basic curriculum, merged with Optimist, Montessori, and Oxford methodologies. We call this fusion the NEW HOPE Project, which is updated annually to adapt to our students' needs.\n\nOur methodology is based on linguistic immersion, offering children aged 3 to 6 years an environment rich in sensory and motor stimuli that favor their development. Play, an essential activity in early childhood education, serves as a means of learning through which children explore and acquire.",
    },
    image: preschoolImg,
    isFeatured: true,
  },
  {
    title: { es: "Básica", en: "Basic" },
    description: {
      es: "El currículo está organizado en áreas de desarrollo estipuladas por Currículo Básico Nacional. En Fundación Mhotivo, incluimos una cuarta área de una asignatura que se aprende de una segunda lengua (inglés).\n\nEstas áreas de desarrollo estructuran las experiencias de aprendizaje, ayudando a planificar las acciones pedagógicas de manera organizada. Cada área incluye bloques de contenidos centrados en aspectos esenciales para el crecimiento educativo de los alumnos, enriquecidos a través de nuestro Proyecto Mhotivo con clases impartidas por profesores especializados.",
      en: "The curriculum is organized in development areas stipulated by the National Basic Curriculum. At Mhotivo Foundation, we include a fourth area of a subject learned in a second language (English).\n\nThese development areas structure learning experiences, helping to plan pedagogical actions in an organized manner. Each area includes content blocks focused on essential aspects for students' educational growth, enriched through our Mhotivo Project with classes taught by specialized teachers.",
    },
    image: basicImg,
  },
  {
    title: { es: "Media", en: "Secondary" },
    description: {
      es: "Nuestra institución emplea el Método Constructivista que proporciona los recursos necesarios para enseñar de manera ordenada, metódica y adecuada. Estos métodos y técnicas buscan hacer más eficiente el proceso de aprendizaje, permitiendo que los alumnos adquieran con menor esfuerzo los conocimientos, habilidades e ideales que nuestro centro educativo busca inculcarles.\n\nNuestro enfoque integral prepara a los estudiantes no solo académicamente, sino también en desarrollo personal, valores y competencias para enfrentar los desafíos del mundo contemporáneo.",
      en: "Our institution employs the Constructivist Method that provides the necessary resources to teach in an orderly, methodical, and appropriate manner. These methods and techniques seek to make the learning process more efficient, allowing students to acquire with less effort the knowledge, skills, and ideals that our educational center seeks to instill in them.\n\nOur comprehensive approach prepares students not only academically, but also in personal development, values, and competencies to face the challenges of the contemporary world.",
    },
    image: secondaryImg,
  },
];

const content = {
  es: {
    title: "Rutas de Aprendizaje",
  },
  en: {
    title: "Learning Pathways",
  },
};

export function LearningPathways() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{
        backgroundColor: tokens.color.ivory,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2rem", md: "3.2rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              letterSpacing: "-0.065em",
              lineHeight: 1.1,
              textWrap: "balance",
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

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {learningPaths.map((path, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "1.75rem",
                overflow: "hidden",
                backgroundColor: path.isFeatured
                  ? tokens.color.hopeGold
                  : tokens.color.warmWhite,
                boxShadow: path.isFeatured
                  ? `0 12px 40px ${tokens.color.hopeGold}30`
                  : tokens.shadow.subtle,
                transition: "transform 300ms ease-out, box-shadow 300ms ease-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: path.isFeatured
                    ? `0 16px 50px ${tokens.color.hopeGold}40`
                    : tokens.shadow.soft,
                },
              }}
            >
              {/* Image Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  backgroundColor: tokens.color.graphiteMuted,
                }}
              >
                <Box
                  component="img"
                  src={path.image}
                  alt={path.title[language]}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 500ms ease-out",
                  }}
                />
              </Box>

              {/* Content Container */}
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  flex: 1,
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.35rem", md: "1.6rem" },
                    fontWeight: 820,
                    color: path.isFeatured
                      ? tokens.color.warmWhite
                      : tokens.color.graphite,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.2,
                  }}
                >
                  {path.title[language]}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    color: path.isFeatured
                      ? tokens.color.warmWhite
                      : tokens.color.graphiteSoft,
                    lineHeight: 1.75,
                    letterSpacing: "-0.01em",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {path.description[language]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
