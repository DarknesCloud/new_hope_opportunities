import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import image
import successStoryGirl from "@/assets/photos/success-story-girl.png";

interface SuccessStory {
  name: { es: string; en: string };
  story: { es: string; en: string };
}

const successStories: SuccessStory[] = [
  {
    name: {
      es: "Fernanda Delcid",
      en: "Fernanda Delcid",
    },
    story: {
      es: "En New Hope Opportunities Honduras creemos que la educación, acompañada del amor de Cristo y de oportunidades reales, tiene el poder de transformar vidas. La historia de Fernanda Delcid es un testimonio de ese impacto. Después de graduarse de nuestro Bachillerato en Ciencias y Humanidades, continuó su preparación académica con dedicación y perseverancia hasta obtener su licenciatura en Periodismo. Su trayectoria demuestra cómo la educación integral, la fe y el esfuerzo pueden abrir puertas hacia un futuro lleno de propósito e inspirar a las nuevas generaciones.",
      en: "At New Hope Opportunities Honduras, we believe that education, combined with Christ's love and meaningful opportunities, has the power to transform lives. Fernanda Delcid's story is a testament to that impact. After graduating from our Science and Humanities High School program, she continued her academic journey with dedication and perseverance, ultimately earning her bachelor's degree in Journalism. Her journey demonstrates how holistic education, faith, and determination can open the door to a future filled with purpose and inspire the next generation.",
    },
  },
];

const content = {
  es: {
    title: "Casos de éxito y testimonios:",
  },
  en: {
    title: "Success Stories and Testimonials:",
  },
};

export function SuccessStories() {
  const { language } = useLanguage();
  const copy = content[language];
  const story = successStories[0];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Success Story Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
            mb: { xs: 10, md: 14 },
          }}
        >
          {/* Left Column: Image with Neon Effect */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              minHeight: { xs: "400px", md: "500px" },
            }}
          >
            {/* Background Circle */}
            <Box
              sx={{
                position: "absolute",
                width: "90%",
                aspectRatio: "1",
                borderRadius: "50%",
                backgroundColor: `${tokens.color.graphiteMuted}15`,
                zIndex: 0,
              }}
            />

            {/* Image */}
            <Box
              component="img"
              src={successStoryGirl}
              alt="Success Story"
              sx={{
                position: "relative",
                zIndex: 1,
                maxWidth: "100%",
                height: "auto",
                maxHeight: "500px",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))",
              }}
            />

            {/* Neon Sign Effect - "Idol" */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: "20px", md: "40px" },
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 900,
                  background:
                    "linear-gradient(135deg, #00D4FF 0%, #0099FF 50%, #0066FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: `0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 153, 255, 0.3)`,
                  filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.4))",
                  letterSpacing: "0.1em",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              ></Typography>
            </Box>
          </Box>

          {/* Right Column: Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Title */}
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
                component="h2"
                sx={{
                  fontFamily: tokens.font.display,
                  fontSize: { xs: "1.75rem", md: "2.4rem" },
                  fontWeight: 850,
                  color: tokens.color.hopeGold,
                  letterSpacing: "-0.055em",
                  lineHeight: 1.1,
                  textWrap: "balance",
                }}
              >
                {copy.title}
              </Typography>
            </Box>

            {/* Student Name */}
            <Typography
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                fontWeight: 820,
                color: tokens.color.graphite,
                letterSpacing: "-0.035em",
                lineHeight: 1.2,
              }}
            >
              {story.name[language]}
            </Typography>

            {/* Story Description */}
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: tokens.color.graphiteSoft,
                lineHeight: 1.85,
                letterSpacing: "-0.01em",
              }}
            >
              {story.story[language]}
            </Typography>
          </Box>
        </Box>

        {/* Learning Environment Section Title */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component="h3"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              letterSpacing: "-0.065em",
              lineHeight: 1,
            }}
          >
            {copy.learningEnvironmentTitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
