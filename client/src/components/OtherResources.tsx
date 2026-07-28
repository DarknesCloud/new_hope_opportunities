import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import tutoriaImg from "@/assets/photos/artistica.jpg";
import consejeriaImg from "@/assets/photos/deportivo.jpg";
import academicaImg from "@/assets/photos/tutorias.jpg";
import orientacionImg from "@/assets/photos/orientacion.jpg";
import psicologiaImg from "@/assets/photos/psiclogia.jpg";
import escuelaImg from "@/assets/photos/escuela.jpg";
import atencionImg from "@/assets/photos/atencion.jpg";
import cafeteriaImg from "@/assets/photos/cafeteria.jpg";

interface Resource {
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
}

const resources: Resource[] = [
  {
    title: {
      es: "Taller de Educación Artística",
      en: "Art Education Workshop",
    },
    description: {
      es: "El aula de arte brinda a los estudiantes un espacio para desarrollar su creatividad y talento a través de disciplinas como dibujo, pintura, música, teatro y danza. Estas experiencias fortalecen su expresión artística, confianza y sensibilidad, contribuyendo a su desarrollo integral.",
      en: "The Art Classroom provides students with a creative space to develop their talents through drawing, painting, music, theater, and dance. These experiences strengthen artistic expression, confidence, and creativity while supporting their holistic development.",
    },
    image: tutoriaImg,
  },
  {
    title: {
      es: "Complejo Deportivo",
      en: "Sports Complex",
    },
    description: {
      es: "Nuestro Complejo Deportivo ofrece un espacio moderno para la práctica de diversas disciplinas como baloncesto y voleibol. A través del deporte, los estudiantes fortalecen su desarrollo físico, disciplina, trabajo en equipo y hábitos saludables como parte de su formación integral.",
      en: "Our Sports Complex provides a modern space for practicing various disciplines such as basketball and volleyball. Through sports, students strengthen their physical development, discipline, teamwork, and healthy habits as part of their holistic education.",
    },
    image: consejeriaImg,
  },
  {
    title: {
      es: "Tutoría Académica",
      en: "Academic Tutoring",
    },
    description: {
      es: "El Centro Educativo ofrece sesiones de tutoría personalizadas para apoyar a los estudiantes en diversas asignaturas. A través de acompañamiento individual o en grupos reducidos, los alumnos refuerzan sus conocimientos, resuelven dudas y mejoran su rendimiento académico, fortaleciendo su confianza y aprendizaje.",
      en: "The Educational Center offers personalized tutoring sessions to support students across various subjects. Through individual or small-group guidance, students strengthen their knowledge, clarify questions, and improve their academic performance while building confidence and learning skills.",
    },
    image: academicaImg,
  },
  {
    title: {
      es: "Departamento de Orientación",
      en: "Guidance Department",
    },
    description: {
      es: "El Departamento de Orientación brinda apoyo académico, emocional y profesional a los estudiantes mediante acompañamiento psicopedagógico y orientación personalizada. En colaboración con docentes y familias, ayuda a los alumnos a superar desafíos, fortalecer su bienestar y tomar decisiones positivas para su futuro.",
      en: "The Guidance Department provides academic, emotional, and career support through personalized guidance and psychoeducational assistance. Working alongside teachers and families, it helps students overcome challenges, strengthen their well-being, and make positive decisions for their future.",
    },
    image: orientacionImg,
  },
  {
    title: {
      es: "Departamento de Psicología",
      en: "Department of Psychology",
    },
    description: {
      es: "El Área de Psicología de New Hope Opportunities Honduras promueve el bienestar emocional y el desarrollo integral de los estudiantes mediante orientación y acompañamiento psicológico. También brinda apoyo a familias y docentes para fortalecer un ambiente educativo saludable, inclusivo y enfocado en el crecimiento personal de cada alumno.",
      en: "The Psychology Department at New Hope Opportunities Honduras promotes students' emotional well-being and holistic development through psychological guidance and support. It also works with families and teachers to strengthen a healthy, inclusive educational environment focused on each student's personal growth.",
    },
    image: psicologiaImg,
  },
  {
    title: {
      es: "Escuela para Padres",
      en: "Parenting School",
    },
    description: {
      es: "Este espacio brinda apoyo psicosocial y pedagógico a las familias, fortaleciendo la comunicación entre el hogar y la escuela. A través de orientación y acompañamiento, ayuda a los padres a enfrentar desafíos y promover el bienestar integral y éxito educativo de los estudiantes.",
      en: "This space provides psychosocial and educational support to families, strengthening communication between home and school. Through guidance and counseling, it helps parents address challenges and promote students' overall well-being and academic success.",
    },
    image: escuelaImg,
  },
  {
    title: {
      es: "Atención Personalizada",
      en: "Personalized Attention",
    },
    description: {
      es: "Reconociendo las necesidades únicas de cada estudiante, nuestros docentes adaptan sus estrategias para brindar un acompañamiento personalizado. A través de planes de mejora individualizados, fortalecen el desarrollo académico, emocional y personal de cada alumno.",
      en: "Recognizing each student's unique needs, our teachers adapt their strategies to provide personalized support. Through individualized improvement plans, they strengthen students' academic, emotional, and personal development.",
    },
    image: atencionImg,
  },
  {
    title: {
      es: "Cafetería",
      en: "Cafetería",
    },
    description: {
      es: "Nuestra cafetería ofrece un espacio cómodo y acogedor donde los estudiantes pueden convivir y fortalecer sus relaciones. Con alimentos saludables preparados bajo altos estándares de seguridad, promovemos buenos hábitos de alimentación y bienestar durante la jornada escolar.",
      en: "Our cafeteria provides a comfortable and welcoming space where students can connect and build relationships. With healthy meals prepared under high safety standards, we promote good eating habits and overall well-being throughout the school day.",
    },
    image: cafeteriaImg,
  },
];

const content = {
  es: {
    title: "Otros Recursos",
  },
  en: {
    title: "Other Resources",
  },
};

export function OtherResources() {
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
          {resources.map((resource, index) => (
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
                  src={resource.image}
                  alt={resource.title[language]}
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
                  {resource.title[language]}
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
                  {resource.description[language]}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
