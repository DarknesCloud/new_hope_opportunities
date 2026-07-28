import { Box, Button, Card, Container, Typography } from "@mui/material";
import {
  MapPin,
  Users,
  Shield,
  Download,
  Mail,
  ArrowRight,
} from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    eyebrow: "Voluntariado Internacional",
    title: "Sirve con Nosotros",
    subtitle:
      "Grupos, iglesias y brigadas internacionales pueden planificar un viaje misionero o de servicio transformador con New Hope Opportunities.",
    cards: [
      {
        icon: MapPin,
        title: "Planifica tu Viaje",
        description:
          "Logística completa, opciones de alojamiento y fechas disponibles para tu brigada. Adaptamos el programa a tus necesidades y capacidades.",
      },
      {
        icon: Users,
        title: "Áreas de Servicio",
        description:
          "Construcción, brigadas médicas, escuelas bíblicas de vacaciones, mentoría educativa y proyectos comunitarios con impacto real.",
      },
      {
        icon: Shield,
        title: "Seguridad y Comunidad",
        description:
          "Entorno seguro con acompañamiento del equipo local. Protección integral y conexión genuina con la comunidad de Rivera Hernández.",
      },
    ],
    ctaTitle: "¿Listo para impactar vidas?",
    ctaSubtitle:
      "Descarga la Guía del Misionero o contacta directamente a nuestro equipo de voluntariado.",
    guideButton: "Descargar Guía del Misionero",
    contactButton: "Contactar Equipo de Voluntariado",
    contactEmail: "voluntariado@newhopeopportunities.org",
  },
  en: {
    eyebrow: "International Volunteering",
    title: "Serve With Us",
    subtitle:
      "Groups, churches, and international brigades can plan a transformative mission trip or service experience with New Hope Opportunities.",
    cards: [
      {
        icon: MapPin,
        title: "Plan Your Trip",
        description:
          "Complete logistics, accommodation options, and available dates for your brigade. We adapt the program to your needs and capabilities.",
      },
      {
        icon: Users,
        title: "Service Areas",
        description:
          "Construction, medical brigades, vacation Bible schools, educational mentoring, and community projects with real impact.",
      },
      {
        icon: Shield,
        title: "Safety & Community",
        description:
          "Safe environment with local team accompaniment. Complete protection and genuine connection with the Rivera Hernández community.",
      },
    ],
    ctaTitle: "Ready to impact lives?",
    ctaSubtitle:
      "Download the Missionary Guide or contact our volunteering team directly.",
    guideButton: "Download Missionary Guide",
    contactButton: "Contact Volunteering Team",
    contactEmail: "volunteering@newhopeopportunities.org",
  },
} as const;

interface MissionaryTripsSectionProps {
  language: "es" | "en";
}

export function MissionaryTripsSection({
  language,
}: MissionaryTripsSectionProps) {
  const content = copy[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: "center" }}>
          <Box
            className="hope-eyebrow"
            sx={{
              mb: 2,
              justifyContent: "center",
              color: tokens.color.hopeGoldSoft,
              backgroundColor: "rgba(242, 185, 0, 0.08)",
            }}
          >
            <MapPin size={15} />
            {content.eyebrow}
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2.5rem", md: "3.8rem" },
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.065em",
              color: tokens.color.graphite,
              mb: 3,
              maxWidth: 800,
              mx: "auto",
            }}
          >
            {content.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              color: tokens.color.graphiteSoft,
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            {content.subtitle}
          </Typography>
        </Box>

        {/* Info Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
            mb: { xs: 8, md: 12 },
          }}
        >
          {content.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="hope-card-premium"
                sx={{
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 32px rgba(31, 31, 31, 0.12)`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: tokens.radius.lg,
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: tokens.color.hopeGoldPale,
                    color: tokens.color.hopeGold,
                  }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: tokens.font.display,
                    fontSize: "1.35rem",
                    fontWeight: 850,
                    color: tokens.color.graphite,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    color: tokens.color.graphiteSoft,
                    lineHeight: 1.7,
                    fontSize: "0.98rem",
                  }}
                >
                  {card.description}
                </Typography>
              </Card>
            );
          })}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: tokens.color.warmSand,
            borderRadius: tokens.radius.xl,
            p: { xs: 5, md: 8 },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 900,
              color: tokens.color.graphite,
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            {content.ctaTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              color: tokens.color.graphiteSoft,
              lineHeight: 1.7,
              mb: 5,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            {content.ctaSubtitle}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Download Guide Button */}

            {/* Contact Button */}
            <Button
              variant="outlined"
              sx={{
                borderColor: tokens.color.graphite,
                color: tokens.color.graphite,
                fontWeight: 850,
                fontSize: "1rem",
                px: 4,
                py: 1.5,
                borderRadius: tokens.radius.pill,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&:hover": {
                  backgroundColor: tokens.color.graphite,
                  color: tokens.color.warmWhite,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 24px rgba(31, 31, 31, 0.15)`,
                },
              }}
              href={`mailto:${content.contactEmail}`}
            >
              <Mail size={20} />
              {content.contactButton}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
