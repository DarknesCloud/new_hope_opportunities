import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  MapPin,
  Users,
  Shield,
  Download,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { ImpactMissionsHero } from "@/components/ImpactMissionsHero";
import AnnualYouthCamp from "@/components/AnnualYouthCamp";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Typography,
  Modal,
} from "@mui/material";
import { useState } from "react";

const apartmentPhotos = [
  "/assets/apartment-1.jpg",
  "/assets/apartment-2.jpg",
  "/assets/apartment-3.jpg",
  "/assets/apartment-4.jpg",
  "/assets/apartment-5.jpg",
  "/assets/apartment-6.jpg",
  "/assets/apartment-7.jpg",
  "/assets/apartment-8.jpg",
  "/assets/apartment-9.jpg",
  "/assets/apartment-10.jpg",
];

const copy = {
  es: {
    // BLOQUE D: Voluntariado y Alojamiento Internacional
    volunteerEyebrow: "Voluntariado Internacional",
    volunteerTitle: "Sirve con Nosotros",
    volunteerSubtitle:
      "Grupos, iglesias y brigadas internacionales pueden planificar un viaje misionero o de servicio transformador con New Hope Opportunities.",
    serviceCards: [
      {
        icon: MapPin,
        titleEs: "Planifica tu Viaje",
        titleEn: "Plan Your Trip",
        descEs:
          "Coordina fechas, duración y enfoque de tu brigada. Nuestro equipo te guía en cada paso del proceso de planificación.",
        descEn:
          "Coordinate dates, duration and focus of your brigade. Our team guides you at every step of the planning process.",
      },
      {
        icon: Users,
        titleEs: "Áreas de Servicio",
        titleEn: "Service Areas",
        descEs:
          "Construcción, brigadas médicas, educación y ministerio espiritual. Elige el área que mejor se alinea con tu misión.",
        descEn:
          "Construction, medical brigades, education and spiritual ministry. Choose the area that best aligns with your mission.",
      },
      {
        icon: Shield,
        titleEs: "Seguridad y Comunidad",
        titleEn: "Safety & Community",
        descEs:
          "Ambiente seguro con apoyo del equipo local. Protección completa y conexión genuina con la comunidad de Rivera Hernández.",
        descEn:
          "Safe environment with local team support. Complete protection and genuine connection with the Rivera Hernández community.",
      },
    ],
    accommodationTitle: "Nuestras instalaciones de alojamiento",
    accommodationSubtitle:
      "New Hope Opportunities Honduras cuenta con apartamentos completamente equipados, ubicados junto a nuestras instalaciones educativas, diseñados para brindar comodidad, seguridad y un ambiente acogedor a iglesias, equipos misioneros y organizaciones aliadas que nos visitan desde el extranjero, los huéspedes pueden descansar en un espacio confortable mientras participan activamente en nuestros programas y proyectos comunitarios, viviendo una experiencia de servicio, compañerismo e inmersión en la cultura hondureña.",
    ctaDownload: "Download Guide",
    ctaContact: "Contact Team",
  },
  en: {
    // BLOQUE D: Voluntariado y Alojamiento Internacional
    volunteerEyebrow: "International Volunteering",
    volunteerTitle: "Serve With Us",
    volunteerSubtitle:
      "International groups, churches and brigades can plan a missionary or transformative service trip with New Hope Opportunities.",
    serviceCards: [
      {
        icon: MapPin,
        titleEs: "Plan Your Trip",
        titleEn: "Plan Your Trip",
        descEs:
          "Coordinate dates, duration and focus of your brigade. Our team guides you at every step of the planning process.",
        descEn:
          "Coordinate dates, duration and focus of your brigade. Our team guides you at every step of the planning process.",
      },
      {
        icon: Users,
        titleEs: "Service Areas",
        titleEn: "Service Areas",
        descEs:
          "Construction, medical brigades, education and spiritual ministry. Choose the area that best aligns with your mission.",
        descEn:
          "Construction, medical brigades, education and spiritual ministry. Choose the area that best aligns with your mission.",
      },
      {
        icon: Shield,
        titleEs: "Safety & Community",
        titleEn: "Safety & Community",
        descEs:
          "Safe environment with local team support. Complete protection and genuine connection with the Rivera Hernández community.",
        descEn:
          "Safe environment with local team support. Complete protection and genuine connection with the Rivera Hernández community.",
      },
    ],
    accommodationTitle: "Our Lodgins Facilities",
    accommodationSubtitle:
      "New Hope Opportunities Honduras offers fully equipped apartments located next to our educational facilities, designed to provide comfort, safety, and a welcoming atmosphere for visiting churches, missionary teams, and partner organizations from abroad. During their stay, guests can rest in a comfortable space while actively participating in our community programs and projects, enjoying an experience of service, fellowship, and immersion in Honduran culture.",
    ctaDownload: "Download Guide",
    ctaContact: "Contact Team",
  },
};

export function Programas() {
  const { language } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prev => (prev + 1) % apartmentPhotos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(
      prev => (prev - 1 + apartmentPhotos.length) % apartmentPhotos.length
    );
  };
  const content = copy[language as keyof typeof copy];

  return (
    <Box sx={{ backgroundColor: tokens.color.ivory, minHeight: "100vh" }}>
      <ImpactMissionsHero />

      {/* VOLUNTARIADO Y COOPERACIÓN INTERNACIONAL - MISSIONARIES GALLERY SECTION */}
      <Box
        component="section"
        className="section-shell"
        sx={{
          position: "relative",
          backgroundColor: tokens.color.ivory,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 100% 4%, rgba(242, 185, 0, 0.12) 0%, transparent 32%), radial-gradient(circle at 0% 84%, rgba(52, 52, 52, 0.055) 0%, transparent 34%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Header Section - CENTERED */}
          <Box
            sx={{
              mb: { xs: 6, md: 10 },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "3xl",
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: tokens.color.hopeGold,
                mb: 4,
                display: "block",
                textAlign: "center",
              }}
            ></Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "1.875rem", md: "3rem" },
                fontWeight: 900,
                lineHeight: 0.96,
                letterSpacing: "-0.075em",
                color: tokens.color.graphite,
                mb: 4,
              }}
            >
              {language === "es"
                ? "Vive de primera mano las oportunidades de New Hope en un viaje misionero de 7 a 10 días."
                : "EXPERIENCE NEW HOPE OPPORTUNITIES FIRST HAND ON A 7-10 DAY MISSION TRIP."}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                color: tokens.color.graphiteSoft,
              }}
            >
              {language === "es"
                ? "Vive una experiencia misionera transformadora de 7 a 10 días junto a New Hope Opportunities Honduras. Sirve en programas educativos, actividades comunitarias y proyectos de alcance mientras compartes el amor de Cristo con niños, jóvenes y familias. Sumérgete en la cultura hondureña, trabaja junto a nuestro equipo y forma parte de una misión que impacta vidas y fortalece tu fe."
                : "Experience a life-changing 7- to 10-day mission trip with New Hope Opportunities Honduras. Serve in educational programs, community outreach, and ministry activities while sharing Christ's love with children, youth, and families. Immerse yourself in Honduran culture, work alongside our team, and become part of a mission that transforms lives while strengthening your own faith."}
            </Typography>
          </Box>

          {/* Gallery Section */}
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <Box sx={{ mb: { xs: 5, md: 8 }, textAlign: "center" }}></Box>

            {/* Image Grid */}
          </Box>

          {/* Service Cards Grid */}

          {/* Premium Accommodation Section */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "3rem",
              backgroundColor: tokens.color.graphite,
              color: "#FFF",
              p: { xs: 4, md: 8 },
              overflow: "hidden",
            }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Chip
                    label="HONDURAS BASE CAMP"
                    sx={{
                      backgroundColor: "rgba(242, 185, 0, 0.2)",
                      color: tokens.color.hopeGoldSoft,
                      fontWeight: 800,
                      fontSize: "0.7rem",
                      mb: 3,
                      border: "1px solid rgba(242, 185, 0, 0.3)",
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#FFF",
                      mb: 3,
                      fontSize: { xs: "2rem", md: "2.8rem" },
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    {content.accommodationTitle}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      mb: 5,
                    }}
                  >
                    {content.accommodationSubtitle}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    <Button
                      variant="outlined"
                      startIcon={<Mail size={18} />}
                      sx={{
                        borderColor: "rgba(255,255,255,0.3)",
                        color: "#FFF",
                        fontWeight: 800,
                        px: 4,
                        py: 1.8,
                        borderRadius: tokens.radius.pill,
                        "&:hover": {
                          borderColor: "#FFF",
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      {content.ctaContact}
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  onClick={() => setGalleryOpen(true)}
                  sx={{
                    position: "relative",
                    borderRadius: "2.5rem",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    cursor: "pointer",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={apartmentPhotos[0]}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(242, 185, 0, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        backgroundColor: "#FFF",
                        color: tokens.color.graphite,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Sparkles size={24} />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(8px)",
                      color: "#FFF",
                      px: 2,
                      py: 1,
                      borderRadius: "1rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Users size={14} />
                    {apartmentPhotos.length} PHOTOS
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* PHOTO GALLERY MODAL */}
      <Modal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            height: "auto",
            maxHeight: "90vh",
            backgroundColor: "#000",
            borderRadius: "2rem",
            overflow: "hidden",
            outline: "none",
          }}
        >
          <Box
            component="img"
            src={apartmentPhotos[currentPhotoIndex]}
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />

          <Button
            onClick={() => setGalleryOpen(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              minWidth: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "#FFF",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
            }}
          >
            <X size={24} />
          </Button>

          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Button
              onClick={handlePrevPhoto}
              sx={{
                minWidth: 54,
                height: 54,
                borderRadius: "50%",
                backgroundColor: "#FFF",
                color: tokens.color.graphite,
                "&:hover": { backgroundColor: tokens.color.hopeGold },
              }}
            >
              <ChevronLeft size={28} />
            </Button>
            <Typography
              sx={{ color: "#FFF", fontWeight: 800, fontSize: "1.1rem" }}
            >
              {currentPhotoIndex + 1} / {apartmentPhotos.length}
            </Typography>
            <Button
              onClick={handleNextPhoto}
              sx={{
                minWidth: 54,
                height: 54,
                borderRadius: "50%",
                backgroundColor: "#FFF",
                color: tokens.color.graphite,
                "&:hover": { backgroundColor: tokens.color.hopeGold },
              }}
            >
              <ChevronRight size={28} />
            </Button>
          </Box>
        </Box>
      </Modal>

      <Footer language={language} />
    </Box>
  );
}
