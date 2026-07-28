import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Modal,
} from "@mui/material";
import {
  MapPin,
  Users,
  Shield,
  Download,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import AnnualYouthCamp from "@/components/AnnualYouthCamp";

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

const serviceCards = [
  {
    icon: MapPin,
    titleEs: "Planifica tu Viaje",
    titleEn: "Plan Your Trip",
    descEs:
      "Logística completa, opciones de alojamiento y fechas disponibles para tu brigada. Adaptamos el programa a tus necesidades y capacidades.",
    descEn:
      "Complete logistics, accommodation options and available dates for your brigade. We adapt the program to your needs and capabilities.",
  },
  {
    icon: Users,
    titleEs: "Áreas de Servicio",
    titleEn: "Service Areas",
    descEs:
      "Construcción, brigadas médicas, escuelas bíblicas de vacaciones, mentoría educativa y proyectos comunitarios con impacto real.",
    descEn:
      "Construction, medical brigades, vacation bible schools, educational mentoring and community projects with real impact.",
  },
  {
    icon: Shield,
    titleEs: "Seguridad y Comunidad",
    titleEn: "Safety & Community",
    descEs:
      "Entorno seguro con acompañamiento del equipo local. Protección integral y conexión genuina con la comunidad de Rivera Hernández.",
    descEn:
      "Safe environment with local team support. Complete protection and genuine connection with the Rivera Hernández community.",
  },
];

export function Misiones() {
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

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 12, md: 14 }, pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${tokens.color.warmSand} 0%, ${tokens.color.ivory} 100%)`,
          py: { xs: 6, md: 8 },
          mb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                color: tokens.color.goldPale,
                fontWeight: 700,
                letterSpacing: "0.18em",
                mb: 2,
                textTransform: "uppercase",
                fontSize: "0.85rem",
              }}
            >
              {language === "es"
                ? "Voluntariado Internacional"
                : "International Volunteering"}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.8rem" },
                fontWeight: 900,
                color: tokens.color.graphite,
                mb: 3,
                fontFamily: tokens.font.display,
              }}
            >
              {language === "es" ? "Sirve con Nosotros" : "Serve With Us"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                color: tokens.color.graphiteSoft,
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              {language === "es"
                ? "Grupos, iglesias y brigadas internacionales pueden planificar un viaje misionero o de servicio transformador con New Hope Opportunities."
                : "Groups, churches and international brigades can plan a transformative missionary or service trip with New Hope Opportunities."}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Service Cards Grid */}
        <Grid container spacing={3} sx={{ mb: { xs: 8, md: 10 } }}>
          {serviceCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    p: 3.5,
                    height: "100%",
                    backgroundColor: tokens.color.warmWhite,
                    border: `1px solid ${tokens.color.line}`,
                    boxShadow: `0 2px 8px rgba(0, 0, 0, 0.04)`,
                    transition: `all 300ms ${tokens.easing.premium}`,
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 24px rgba(0, 0, 0, 0.12)`,
                      borderColor: tokens.color.goldPale,
                    },
                  }}
                >
                  <Box sx={{ mb: 2.5 }}>
                    <IconComponent
                      size={40}
                      color={tokens.color.goldPale}
                      strokeWidth={1.5}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: 900,
                      color: tokens.color.graphite,
                      mb: 1.5,
                      fontFamily: tokens.font.display,
                    }}
                  >
                    {language === "es" ? card.titleEs : card.titleEn}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: tokens.color.graphiteSoft,
                      lineHeight: 1.7,
                    }}
                  >
                    {language === "es" ? card.descEs : card.descEn}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Accommodation Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="body2"
              sx={{
                color: tokens.color.goldPale,
                fontWeight: 700,
                letterSpacing: "0.18em",
                mb: 2,
                textTransform: "uppercase",
                fontSize: "0.85rem",
              }}
            >
              {language === "es"
                ? "Alojamiento Premium"
                : "Premium Accommodation"}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 900,
                color: tokens.color.graphite,
                mb: 2,
                fontFamily: tokens.font.display,
              }}
            >
              {language === "es"
                ? "Apartamentos Equipados"
                : "Fully Equipped Apartments"}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: tokens.color.graphiteSoft,
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              {language === "es"
                ? "New Hope Opportunities cuenta con apartamentos completamente equipados, ubicados justo al lado de la escuela. Diseñados especialmente para la comodidad y seguridad de iglesias y ONG aliadas de Estados Unidos que vienen a cooperar con nuestra comunidad."
                : "New Hope Opportunities has fully equipped apartments located right next to the school. Specially designed for the comfort and safety of churches and allied NGOs from the United States coming to cooperate with our community."}
            </Typography>
          </Box>

          {/* Accommodation Gallery - Cinematic Layout */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "repeat(12, 1fr)" },
              gap: { xs: 3, md: 6 },
              maxWidth: "7xl",
              mx: "auto",
              px: { xs: 1.5, md: 3 },
            }}
          >
            {/* Left Block - Video */}
            <Box
              sx={{
                gridColumn: { xs: "1 / -1", lg: "1 / span 7" },
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                boxShadow: `0 8px 32px rgba(0, 0, 0, 0.15)`,
                aspectRatio: { xs: "16 / 9", lg: "auto" },
                height: { lg: "520px" },
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/assets/apartments-video.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  pointerEvents: "none",
                }}
              />
            </Box>

            {/* Right Block - Two Photo Windows */}
            <Box
              sx={{
                gridColumn: { xs: "1 / -1", lg: "8 / span 5" },
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              {/* Top Photo */}
              <Box
                sx={{
                  height: "248px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  group: true,
                  boxShadow: `0 4px 16px rgba(0, 0, 0, 0.08)`,
                  backgroundColor: "#f1f5f9",
                  "&:hover img": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <img
                  src={apartmentPhotos[0]}
                  alt="Apartment View 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 500ms ease-out",
                  }}
                />
              </Box>

              {/* Bottom Photo with Gallery Button */}
              <Box
                sx={{
                  height: "248px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                  group: true,
                  boxShadow: `0 4px 16px rgba(0, 0, 0, 0.08)`,
                  backgroundColor: "#f1f5f9",
                  "&:hover img": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <img
                  src={apartmentPhotos[1]}
                  alt="Apartment View 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 500ms ease-out",
                  }}
                />
                {/* Gallery Button */}
                <Button
                  onClick={() => setGalleryOpen(true)}
                  sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 16,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(12px)",
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    px: 2,
                    py: 1.25,
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    zIndex: 20,
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                    },
                  }}
                >
                  +8 {language === "es" ? "Fotos" : "Photos"} —{" "}
                  {language === "es" ? "Explorar Galería" : "Explore Gallery"}
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Gallery Lightbox Modal */}
          <Modal
            open={galleryOpen}
            onClose={() => setGalleryOpen(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              zIndex: 1300,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "90%",
                maxWidth: "900px",
                height: "auto",
                aspectRatio: "16 / 9",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: `0 20px 60px rgba(0, 0, 0, 0.4)`,
              }}
            >
              {/* Main Image */}
              <img
                src={apartmentPhotos[currentPhotoIndex]}
                alt={`Apartment ${currentPhotoIndex + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Close Button */}
              <Button
                onClick={() => setGalleryOpen(false)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <X size={20} />
              </Button>

              {/* Previous Button */}
              <Button
                onClick={handlePrevPhoto}
                sx={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </Button>

              {/* Next Button */}
              <Button
                onClick={handleNextPhoto}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  minWidth: "auto",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </Button>

              {/* Photo Counter */}
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  px: 2,
                  py: 0.75,
                  borderRadius: "9999px",
                }}
              >
                {currentPhotoIndex + 1} / {apartmentPhotos.length}
              </Typography>
            </Box>
          </Modal>
        </Box>

        {/* Annual Youth Camp Section */}
        <Box sx={{ mb: { xs: 8, md: 10 }, mt: { xs: 8, md: 10 } }}></Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: tokens.color.warmSand,
            borderRadius: tokens.radius.xl,
            p: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 900,
              color: tokens.color.graphite,
              mb: 2,
              fontFamily: tokens.font.display,
            }}
          >
            {language === "es"
              ? "¿Listo para impactar vidas?"
              : "Ready to make an impact?"}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: tokens.color.graphiteSoft,
              mb: 4,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            {language === "es"
              ? "Descarga la Guía del Misionero o contacta directamente a nuestro equipo de voluntariado."
              : "Download the Missionary Guide or contact our volunteer team directly."}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<Download size={18} />}
              sx={{
                px: 3.5,
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: 700,
                borderRadius: tokens.radius.pill,
                transition: `all 300ms ${tokens.easing.premium}`,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 20px rgba(242, 185, 0, 0.3)`,
                },
              }}
            >
              {language === "es" ? "Descargar Guía" : "Download Guide"}
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="mailto:voluntariado@newhopeopportunities.org"
              startIcon={<Mail size={18} />}
              sx={{
                px: 3.5,
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: 700,
                borderRadius: tokens.radius.pill,
                borderColor: tokens.color.graphite,
                color: tokens.color.graphite,
                transition: `all 300ms ${tokens.easing.premium}`,
                "&:hover": {
                  backgroundColor: tokens.color.graphite,
                  color: tokens.color.warmWhite,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {language === "es" ? "Contactar Equipo" : "Contact Team"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
