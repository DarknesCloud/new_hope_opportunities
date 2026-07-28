import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import aulasImg from "@/assets/photos/aulas.jpg";
import labScienceImg from "@/assets/photos/laboratorio.jpg";
import labTechImg from "@/assets/photos/informatica.jpg";

interface LearningSpace {
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
}

const learningSpaces: LearningSpace[] = [
  {
    title: { es: "Aulas", en: "Classrooms" },
    description: {
      es: "En Escuela Esperanza creemos que un entorno adecuado favorece el aprendizaje y el desarrollo integral de nuestros estudiantes. Por ello, contamos con aulas amplias, seguras y equipadas con recursos audiovisuales que enriquecen la enseñanza y crean un ambiente propicio para el crecimiento académico y personal.",
      en: "At Escuela Esperanza, we believe that a positive learning environment plays a vital role in every student's success. Our spacious, safe classrooms are equipped with audiovisual resources that enhance instruction and create an inspiring space for academic and personal growth.",
    },
    image: aulasImg,
  },
  {
    title: { es: "Laboratorio de Ciencias", en: "Science Laboratory" },
    description: {
      es: "Fomentamos el interés por la ciencia mediante laboratorios equipados para la investigación y la experimentación. A través de actividades prácticas, los estudiantes fortalecen su pensamiento crítico, la observación y la resolución de problemas, complementando su aprendizaje de forma dinámica y significativa.",
      en: "We inspire a passion for science through well-equipped laboratories designed for research and experimentation. Hands-on learning experiences help students develop critical thinking, observation, and problem-solving skills while reinforcing classroom instruction.",
    },
    image: labScienceImg,
  },
  {
    title: { es: "Laboratorio de Informática", en: "Computer Laboratory" },
    description: {
      es: "Nuestro laboratorio de informática brinda a los estudiantes un entorno moderno para desarrollar competencias digitales esenciales. Equipado con tecnología y acceso a herramientas informáticas, permite fortalecer el aprendizaje mediante experiencias prácticas que preparan a los alumnos para los desafíos del mundo actual.",
      en: "Our computer lab provides students with a modern environment to develop essential digital skills. Equipped with up-to-date technology and computing resources, it offers hands-on learning experiences that prepare students for the challenges of today's digital world.",
    },
    image: labTechImg,
  },
];

const content = {
  es: {
    title: "Entorno de Aprendizaje",
    description:
      "El campus de New Hope Opportunities Honduras está diseñado para ofrecer un entorno seguro y estimulante que favorece el desarrollo integral de cada estudiante. Nuestras instalaciones proporcionan espacios adecuados para el aprendizaje, la formación espiritual y la convivencia, creando un ambiente donde los alumnos pueden crecer académica, personal y espiritualmente bajo los más altos estándares de calidad y excelencia educativa.",
  },
  en: {
    title: "Learning Environment",
    description:
      "The New Hope Opportunities Honduras campus is designed to provide a safe and inspiring environment that supports the holistic development of every student. Our facilities offer dedicated spaces for learning, spiritual growth, and community life, creating an atmosphere where students can thrive academically, personally, and spiritually while benefiting from the highest standards of educational quality and excellence.",
  },
};

export function LearningEnvironment() {
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
              mb: 4,
            }}
          />

          {/* Description */}
          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: tokens.color.graphiteSoft,
              lineHeight: 1.75,
              letterSpacing: "-0.01em",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {copy.description}
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {learningSpaces.map((space, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "1.75rem",
                overflow: "hidden",
                backgroundColor: tokens.color.warmWhite,
                boxShadow: tokens.shadow.subtle,
                transition:
                  "transform 300ms ease-out, box-shadow 300ms ease-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: tokens.shadow.soft,
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
                  src={space.image}
                  alt={space.title[language]}
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
                  gap: 1.5,
                  flex: 1,
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.display,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 820,
                    color: tokens.color.graphite,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.2,
                  }}
                >
                  {space.title[language]}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    color: tokens.color.graphiteSoft,
                    lineHeight: 1.75,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {space.description[language]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
