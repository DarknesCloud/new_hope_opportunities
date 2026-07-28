import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import achievementImg1 from "@/assets/photos/comienzos.png";
import achievementImg2 from "@/assets/photos/campus.png";
import achievementImg3 from "@/assets/photos/graduados.jpg";

interface Achievement {
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
}

const achievements: Achievement[] = [
  {
    title: { es: "Nuestros Comienzos", en: "Our Beginnings" },
    description: {
      es: "Comenzamos en 2006 con 50 alumnos de preescolar en San Pedro Sula. Desde entonces, hemos crecido manteniéndonos fieles a nuestra misión de fomentar el amor por el aprendizaje y brindar una educación integral que transforme vidas y fortalezca a nuestra comunidad.",
      en: "We began in 2006 with 50 preschool students in San Pedro Sula. Since then, we have continued to grow while remaining faithful to our mission of fostering a love for learning and providing a holistic education that transforms lives and strengthens our community.",
    },
    image: achievementImg1,
  },
  {
    title: { es: "Expansión Educativa", en: "Educational Expansion" },
    description: {
      es: "Hasta la fecha, contamos con un campus educativo ubicado en la colonia Rivera Hernández, San Pedro Sula, donde brindamos educación a 267 estudiantes de los niveles Prebásico, Básico y Secundaria, ofreciendo una formación integral.",
      en: "Today, we have one educational campus located in the Rivera Hernández neighborhood of San Pedro Sula, serving 267 students across Pres-chool, Grade School, and High School levels while providing a holistic education.",
    },
    image: achievementImg2,
  },
  {
    title: { es: "Estudiantes Graduados", en: "Graduated Students" },
    description: {
      es: "Estamos orgullosos de contar con más de 41 graduados que encarnan nuestro compromiso con la excelencia educativa. A través de nuestros programas, les capacitamos para alcanzar sus metas y tener un impacto positivo en el mundo, demostrando que la educación es la clave del cambio.",
      en: "We are proud to have more than 41 graduates who embody our commitment to educational excellence. Through our programs, we equip them to achieve their goals and have a positive impact on the world, demonstrating that education is the key to change.",
    },
    image: achievementImg3,
  },
];

const content = {
  es: {
    title: "Principales Logros y Crecimiento",
  },
  en: {
    title: "Main Achievements and Growth",
  },
};

export function Achievements() {
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
          {achievements.map((achievement, index) => (
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
                  src={achievement.image}
                  alt={achievement.title[language]}
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
                  {achievement.title[language]}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    color: tokens.color.graphiteSoft,
                    lineHeight: 1.75,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {achievement.description[language]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
