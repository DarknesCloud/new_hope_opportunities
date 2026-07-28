import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";

// Import images
import storyImg1 from "@/assets/photos/vision1.jpg";
import storyImg3 from "@/assets/photos/vision2.jpg";
import storyImg2 from "/assets/mision.webp";
import storyImg4 from "/assets/mision1.jpg";

const TRANSITION_INTERVAL = 5000; // 5 segundos entre cambios

interface StorySection {
  title: { es: string; en: string };
  description: { es: string; en: string };
  images: string[];
}

const storySections: StorySection[] = [
  {
    title: { es: "Nuestra Vision", en: "Our Vision" },
    description: {
      es: "Proveer oportunidades educativas integrales a niños, jóvenes y adultos de la comunidad Rivera Hernández, formando personas con excelencia académica, valores cristianos y habilidades para la vida. Nuestro propósito es brindarles las herramientas necesarias para romper el ciclo de la pobreza, descubrir su propósito en Cristo y construir un futuro lleno de esperanza para ellos, sus familias y su comunidad.",
      en: "To provide comprehensive educational opportunities to children, youth, and adults in the Rivera Hernández community, shaping individuals with academic excellence, Christian values, and life skills. Our purpose is to equip them with the tools needed to break the cycle of poverty, discover their purpose in Christ, and build a future filled with hope for themselves, their families, and their community.",
    },
    images: [storyImg1, storyImg3],
  },
  {
    title: { es: "Nuestra Misión", en: "Our Mission" },
    description: {
      es: "Transformar vidas en la comunidad de Rivera Hernández mediante una educación integral centrada en Cristo, compartiendo el amor de Dios y brindando oportunidades que impulsen el crecimiento espiritual, académico y personal de cada estudiante para impactar positivamente a su familia, su comunidad y las futuras generaciones.",
      en: "Transform lives in the Rivera Hernández community through Christ-centered holistic education, sharing God's love and providing opportunities that foster the spiritual, academic, and personal growth of every student, empowering them to make a lasting impact on their families, community, and future generations.",
    },
    images: [storyImg2, storyImg4],
  },
];

export function OurStory() {
  const { language } = useLanguage();
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([
    0, 0,
  ]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prev =>
        prev.map(
          (idx, sectionIdx) =>
            (idx + 1) % storySections[sectionIdx].images.length
        )
      );
    }, TRANSITION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {storySections.map((section, sectionIdx) => {
          const isEven = sectionIdx % 2 === 0;
          const currentImage = section.images[currentImageIndices[sectionIdx]];

          return (
            <Box
              key={sectionIdx}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 6, md: 8 },
                alignItems: "center",
                mb:
                  sectionIdx < storySections.length - 1
                    ? { xs: 10, md: 14 }
                    : 0,
              }}
            >
              {/* Image Column */}
              <Box
                sx={{
                  order: isEven ? 1 : 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "500px",
                    aspectRatio: "4/3",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    boxShadow: tokens.shadow.elevated,
                  }}
                >
                  {section.images.map((image, imgIdx) => (
                    <Box
                      key={imgIdx}
                      component="img"
                      src={image}
                      alt={`${section.title[language]} ${imgIdx + 1}`}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        opacity:
                          imgIdx === currentImageIndices[sectionIdx] ? 1 : 0,
                        transition: "opacity 800ms ease-in-out",
                        pointerEvents: "none",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Content Column */}
              <Box
                sx={{
                  order: isEven ? 2 : 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                {/* Title */}
                <Box>
                  {/* Gold Accent Line */}
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
                      fontSize: { xs: "2rem", md: "2.8rem" },
                      fontWeight: 850,
                      color: tokens.color.graphite,
                      letterSpacing: "-0.055em",
                      lineHeight: 1.1,
                      textWrap: "balance",
                    }}
                  >
                    {section.title[language]}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: tokens.color.graphiteSoft,
                    lineHeight: 1.85,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {section.description[language]}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
