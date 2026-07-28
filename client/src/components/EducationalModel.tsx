import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import pillarEducation from "@/assets/photos/hope.jpg";
import pillarCare from "@/assets/photos/howework.jpg";
import pillarGlobal from "@/assets/photos/values.jpg";

interface Card {
  title: { es: string; en: string };
  description: { es: string; en: string };
  image: string;
  highlighted?: boolean;
}

const cards: Card[] = [
  {
    title: { es: "Nuestra Historia", en: "Our History" },
    description: {
      es: "Nuestro proyecto y enfoque consisten en brindar oportunidades educativas a niños, jóvenes y adultos de la comunidad de Rivera Hernández, en Honduras, para que puedan albergar la esperanza de un futuro mejor.",
      en: "Our project and mission focus on providing educational opportunities for children, youth, and adults in the Rivera Hernández community of Honduras, giving them hope for a brighter future.",
    },
    image: pillarEducation,
    highlighted: true,
  },
  {
    title: { es: "Como Trabajamos", en: "How We Work" },
    description: {
      es: "Nuestros maestros y personal administrativo no solo son expertos en sus áreas, sino que también están comprometidos con impulsar un entorno de aprendizaje enriquecedor y dinámico. Gracias a una formación rigurosa y a una pasión compartida por la excelencia, ofrecen una educación que impacta la vida de los estudiantes a través del amor y una enseñanza centrada en Cristo.",
      en: "Our teachers and administrative staff are not only experts in their fields but are also committed to fostering a dynamic and enriching learning environment. Through rigorous training and a shared passion for excellence, they provide an education that transforms students' lives through love and Christ-centered teaching.",
    },
    image: pillarCare,
  },
  {
    title: { es: "Nuestros Valores", en: "Our Values" },
    description: {
      es: "Este ministerio fue fundado con la misión de promover programas educativos de la más alta calidad para niños y jóvenes de escasos recursos económicos de la Rivera Hernández, enfocados en enseñarles valores fundamentales, morales, espirituales y de identidad nacional.",
      en: "This ministry was founded with the mission of providing the highest-quality educational programs for underprivileged children and youth in the Rivera Hernández community, with a strong emphasis on teaching fundamental, moral, spiritual, and national values.",
    },
    image: pillarGlobal,
  },
];

const content = {
  es: {
    eyebrow: "Nuestro Modelo",
    title: "La Sostenibilidad de Nuestro Modelo Educativo",
    subtitle: "Construyendo un futuro que perdura",
  },
  en: {
    eyebrow: "Our Model",
    title: "The Sustainability of Our Educational Model",
    subtitle: "Building a future that lasts",
  },
};

export function EducationalModel() {
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
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "1.75rem",
                overflow: "hidden",
                backgroundColor: card.highlighted
                  ? tokens.color.hopeGold
                  : tokens.color.warmWhite,
                boxShadow: card.highlighted
                  ? tokens.shadow.gold
                  : tokens.shadow.subtle,
                transition:
                  "transform 300ms ease-out, box-shadow 300ms ease-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: card.highlighted
                    ? tokens.shadow.elevated
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
                    color: card.highlighted
                      ? tokens.color.graphite
                      : tokens.color.graphite,
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
                    color: card.highlighted
                      ? "rgba(52, 52, 52, 0.85)"
                      : tokens.color.graphiteSoft,
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
