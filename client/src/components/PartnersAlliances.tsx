import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowRight, Handshake, Globe } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";

type Language = "es" | "en";

interface Partner {
  id: string;
  name: string;
  category: Record<Language, string>;
  description: Record<Language, string>;
  focus: string[];
  logo: string;
}

interface PartnersAlliancesProps {
  language?: Language;
}

const partners: Partner[] = [
  {
    id: "partner-1",
    name: "Fundación Global Hope",
    category: { es: "Socio Estratégico", en: "Strategic Partner" },
    description: {
      es: "Apoyo integral en programas educativos y formación docente de calidad.",
      en: "Comprehensive support in educational programs and quality teacher training.",
    },
    focus: ["Educación", "Formación"],
    logo: "🌍",
  },
  {
    id: "partner-2",
    name: "Iglesia Comunidad Esperanza",
    category: { es: "Socio Espiritual", en: "Spiritual Partner" },
    description: {
      es: "Acompañamiento espiritual y valores cristianos en la formación integral.",
      en: "Spiritual accompaniment and Christian values in comprehensive education.",
    },
    focus: ["Valores", "Comunidad"],
    logo: "✝️",
  },
  {
    id: "partner-3",
    name: "Tech for Good Honduras",
    category: { es: "Socio Tecnológico", en: "Technology Partner" },
    description: {
      es: "Capacitación en habilidades digitales y acceso a recursos tecnológicos.",
      en: "Digital skills training and access to technological resources.",
    },
    focus: ["Tecnología", "Innovación"],
    logo: "💻",
  },
  {
    id: "partner-4",
    name: "Red de Salud Rivera",
    category: { es: "Socio de Salud", en: "Health Partner" },
    description: {
      es: "Programas de salud preventiva y bienestar integral para estudiantes.",
      en: "Preventive health programs and comprehensive wellness for students.",
    },
    focus: ["Salud", "Bienestar"],
    logo: "🏥",
  },
  {
    id: "partner-5",
    name: "Empresa Sostenible SPS",
    category: { es: "Socio Empresarial", en: "Business Partner" },
    description: {
      es: "Oportunidades de prácticas profesionales y empleo para egresados.",
      en: "Professional internship and employment opportunities for graduates.",
    },
    focus: ["Empleo", "Desarrollo"],
    logo: "🏢",
  },
  {
    id: "partner-6",
    name: "Voluntarios Internacionales",
    category: { es: "Socio Comunitario", en: "Community Partner" },
    description: {
      es: "Apoyo voluntario en mentoría, talleres y acompañamiento directo.",
      en: "Voluntary support in mentoring, workshops, and direct accompaniment.",
    },
    focus: ["Mentoría", "Comunidad"],
    logo: "🤝",
  },
];

export function PartnersAlliances({ language = "es" }: PartnersAlliancesProps) {
  const content = {
    es: {
      sectionTitle: "Catálogo de Alianzas",
      sectionSubtitle:
        "Socios y organizaciones que trabajan junto a New Hope Opportunities para transformar vidas",
      ctaButton: "Conocer más alianzas",
      joinPartner: "Ser Socio",
    },
    en: {
      sectionTitle: "Partners & Alliances",
      sectionSubtitle:
        "Organizations working alongside New Hope Opportunities to transform lives",
      ctaButton: "Discover more partnerships",
      joinPartner: "Become a Partner",
    },
  }[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${tokens.color.hopeGoldPale} 0%, ${tokens.color.warmWhite} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: { xs: "300px", md: "500px" },
          height: { xs: "300px", md: "500px" },
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(52, 52, 52, 0.05) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              px: 2.5,
              py: 1,
              borderRadius: tokens.radius.pill,
              backgroundColor: "rgba(242, 185, 0, 0.15)",
            }}
          >
            <Handshake size={16} color={tokens.color.hopeGold} />
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: "0.85rem",
                fontWeight: 700,
                color: tokens.color.hopeGoldDark,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Colaboración Global
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              mb: 2,
              lineHeight: 1.15,
            }}
          >
            {content.sectionTitle}
          </Typography>

          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: { xs: "1rem", md: "1.15rem" },
              color: tokens.color.graphiteSoft,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            {content.sectionSubtitle}
          </Typography>
        </Box>

        {/* Partners Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {partners.map((partner) => (
            <Box
              key={partner.id}
              sx={{
                position: "relative",
                p: { xs: 3.5, md: 4 },
                borderRadius: tokens.radius.lg,
                background: tokens.color.warmWhite,
                border: `1px solid ${tokens.color.line}`,
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: tokens.shadow.soft,
                  borderColor: tokens.color.hopeGold,
                },
              }}
            >
              {/* Logo */}
              <Typography
                sx={{
                  fontSize: "3rem",
                  mb: 2,
                  display: "block",
                }}
              >
                {partner.logo}
              </Typography>

              {/* Name */}
              <Typography
                sx={{
                  fontFamily: tokens.font.display,
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: tokens.color.graphite,
                  mb: 0.5,
                }}
              >
                {partner.name}
              </Typography>

              {/* Category */}
              <Typography
                sx={{
                  fontFamily: tokens.font.body,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: tokens.color.hopeGold,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 2,
                }}
              >
                {partner.category[language]}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: tokens.font.body,
                  fontSize: "0.9rem",
                  color: tokens.color.graphiteSoft,
                  lineHeight: 1.6,
                  mb: 2.5,
                  flex: 1,
                }}
              >
                {partner.description[language]}
              </Typography>

              {/* Focus areas */}
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3 }}>
                {partner.focus.map((area) => (
                  <Box
                    key={area}
                    sx={{
                      px: 2,
                      py: 0.75,
                      borderRadius: tokens.radius.sm,
                      backgroundColor: "rgba(242, 185, 0, 0.1)",
                      border: `1px solid rgba(242, 185, 0, 0.2)`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: tokens.font.body,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: tokens.color.hopeGoldDark,
                      }}
                    >
                      {area}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Learn more link */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: tokens.color.hopeGold,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  mt: "auto",
                }}
              >
                <span>Más información</span>
                <ArrowRight size={14} />
              </Box>
            </Box>
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: tokens.radius.xl,
            background: `linear-gradient(135deg, ${tokens.color.graphite} 0%, ${tokens.color.graphiteDark} 100%)`,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 850,
                color: tokens.color.warmWhite,
                mb: 1.5,
              }}
            >
              ¿Quieres ser parte de esta transformación?
            </Typography>
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: 600,
              }}
            >
              Únete a nuestro ecosistema de alianzas y ayuda a transformar vidas en Honduras.
            </Typography>
          </Box>

          <Button
            variant="contained"
            endIcon={<ArrowRight size={18} />}
            sx={{
              backgroundColor: tokens.color.hopeGold,
              color: tokens.color.graphite,
              minHeight: 54,
              px: 4,
              fontSize: "1rem",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: tokens.color.hopeGoldDark,
              },
            }}
          >
            {content.joinPartner}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
