import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import garraImage from "@/assets/photos/impact-sports.webp";
import programBand from "@/assets/photos/program-band.webp";
import misionerosImage from "@/assets/photos/misioneros.jpg";
import refugioImage from "@/assets/photos/refugio.jpg";
import chicosImage from "@/assets/photos/pillar-education.webp";
import campamentoImage from "@/assets/photos/campamento.jpg";

interface NewsCard {
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
}

const newsCards: NewsCard[] = [
  {
    title: {
      es: "Refugio",
      en: "Refuge",
    },
    description: {
      es: "Refugio es un programa que brinda a niñas en situación de vulnerabilidad un espacio seguro donde pueden expresar sus emociones, fortalecer su relación con Dios y recibir apoyo para su crecimiento espiritual, emocional y personal. Actualmente, beneficia a estudiantes de cuarto grado en adelante mediante actividades recreativas, artísticas y de convivencia que promueven la sanidad interior, la confianza y la esperanza.",
      en: "Refugio is a program that provides vulnerable girls with a safe space where they can express their emotions, strengthen their relationship with God, and receive support for their spiritual, emotional, and personal growth. It currently benefits students in fourth grade and up through recreational, artistic, and social activities that foster inner healing, confidence, and hope.",
    },
    image: refugioImage,
  },
  {
    title: {
      es: "La Garra",
      en: "The Claw ",
    },
    description: {
      es: "La Garra ofrece a los estudiantes varones una alternativa sana frente a los riesgos sociales, combinando la práctica deportiva con enseñanzas bíblicas para fortalecer su carácter, disciplina y valores cristianos. Actualmente, beneficia a alumnos de primaria y secundaria mediante el deporte, promoviendo el trabajo en equipo, el respeto y el amor al prójimo.",
      en: "The Claw provides students boys with a healthy alternative to social risks by combining sports with biblical teaching to develop character, discipline, and Christian values. It currently serves elementary and secondary students, promoting teamwork, respect, and love for others through sports and God's Word.",
    },
    image: garraImage,
  },
  {
    title: {
      es: "Chicos",
      en: "Chicos",
    },
    description: {
      es: "El Programa de Chicos brinda apoyo personalizado a estudiantes que presentan dificultades de aprendizaje, ayudándoles a fortalecer sus conocimientos y desarrollar las habilidades necesarias para alcanzar su máximo potencial. A través de tutorías y acompañamiento individualizado, nuestros docentes adaptan estrategias a las necesidades de cada alumno, promoviendo su confianza, progreso académico y éxito escolar.",
      en: "The Chicos Program provides personalized assistance to students facing learning challenges, helping them strengthen their knowledge and develop the skills needed to reach their full potential. Through tutoring and individualized guidance, our teachers tailor strategies to each student's needs, fostering confidence, academic growth, and long-term success.",
    },
    image: chicosImage,
  },
  {
    title: {
      es: "Viajes Misioneros",
      en: "Missions Trip",
    },
    description: {
      es: "A traves del año recibimos equipos misioneros de Estados Unidos que comparten enseñanzas bíblicas, actividades recreativas y tiempo de convivencia con nuestros estudiantes. Además, sirven a la comunidad mediante visitas familiares y proyectos de mejora, reflejando el amor de Cristo a través de acciones concretas.",
      en: "Throughout the year, we welcome mission teams from the United States who share biblical teachings, recreational activities, and meaningful fellowship with our students. They also serve the community through family visits and improvement projects, demonstrating Christ's love through practical acts of service.",
    },
    image: misionerosImage,
  },
  {
    title: {
      es: "Banda de la Paz",
      en: "Peace Band",
    },
    description: {
      es: "El programa de Banda de Paz fortalece la disciplina, el trabajo en equipo y la confianza de nuestros estudiantes, mientras promueve el desarrollo cultural. Además de representar a nuestra institución en eventos cívicos, forma jóvenes comprometidos con el servicio a su comunidad y su país.",
      en: "The Marching Band Program strengthens students' discipline, teamwork, and confidence while promoting cultural development. In addition to representing our institution at civic events, it develops young leaders committed to serving their community and country.",
    },
    image: programBand,
  },
  {
    title: {
      es: "Campamento Juvenil",
      en: "Youth Camp",
    },
    description: {
      es: "El Campamento Anual brinda a los estudiantes de 6.º a 12.º grado una experiencia de tres días donde fortalecen su relación con Dios a través de enseñanzas bíblicas, adoración, juegos y actividades dirigidas por un equipo misionero de los Estados Unidos. Es una experiencia transformadora que impulsa su crecimiento espiritual y personal.",
      en: "The Annual Camp offers students in grades 6 through 12 a three-day experience where they strengthen their relationship with God through biblical teaching, worship, games, and activities led by a mission team from the United States. It is a life-changing experience that fosters both spiritual and personal growth.",
    },
    image: campamentoImage,
  },
];

const content = {
  es: {
    eyebrow: "Comunidad",
    title: "Programas de Impacto",
    subtitle: "Construyendo un futuro que perdura",
  },
  en: {
    eyebrow: "Community",
    title: "Impact Programs",
    subtitle: "Building a future that lasts",
  },
};

export function NewsAndEvents() {
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
          <Box
            className="editorial-eyebrow"
            sx={{
              display: "inline-flex",
              mb: 2,
            }}
          >
            {copy.eyebrow}
          </Box>

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
              mb: 2,
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
              mb: 3,
            }}
          />

          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              color: tokens.color.graphiteSoft,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {copy.subtitle}
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
          {newsCards.map((card, index) => (
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
                  src={card.image}
                  alt={card.title[language]}
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
                  {card.title[language]}
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
                  {card.description[language]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
