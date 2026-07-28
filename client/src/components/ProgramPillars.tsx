import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowRight, BookOpenText, ChefHat, Cpu, GraduationCap, HeartHandshake, Languages, Sparkles } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";
import pillarEducation from "@/assets/photos/pillar-education.webp";
import pillarGlobal from "@/assets/photos/pillar-global.webp";
import pillarCare from "@/assets/photos/pillar-care.webp";
import impactSports from "@/assets/photos/impact-sports.webp";
import impactGraduation from "@/assets/photos/impact-graduation.webp";

interface OpportunityPillar {
  id: string;
  title: {
    es: string;
    en: string;
  };
  eyebrow: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  impact: {
    es: string;
    en: string;
  };
  resultLabel: {
    es: string;
    en: string;
  };
  cta: {
    es: string;
    en: string;
  };
  icon: typeof Languages;
  image: string;
  featured?: boolean;
}

interface ProgramPillarsProps {
  language?: "es" | "en";
}

const pillars: OpportunityPillar[] = [
  {
    id: "english",
    title: { es: "Inglés para abrir mundo", en: "English that opens the world" },
    eyebrow: { es: "Lenguaje y futuro", en: "Language and future" },
    description: {
      es: "El aprendizaje del inglés amplía horizontes, fortalece la confianza comunicativa y conecta a los estudiantes con oportunidades académicas y vocacionales más amplias.",
      en: "English learning expands horizons, strengthens communication confidence, and connects students with broader academic and vocational opportunities.",
    },
    impact: {
      es: "Una competencia global que ayuda a cada estudiante a verse capaz de participar más allá de su contexto inmediato.",
      en: "A global competency that helps each student see themselves as capable of participating beyond their immediate context.",
    },
    resultLabel: { es: "Apertura global", en: "Global access" },
    cta: { es: "Ver oportunidad", en: "View opportunity" },
    icon: Languages,
    image: pillarGlobal,
    featured: true,
  },
  {
    id: "technology",
    title: { es: "Tecnología con propósito", en: "Technology with purpose" },
    eyebrow: { es: "Competencias del siglo XXI", en: "21st-century skills" },
    description: {
      es: "La preparación tecnológica se integra como puente de aprendizaje, disciplina y proyección, ayudando a los jóvenes a construir criterio, creatividad y herramientas para el futuro.",
      en: "Technology preparation is integrated as a bridge for learning, discipline, and projection, helping young people build judgment, creativity, and tools for the future.",
    },
    impact: {
      es: "La tecnología se presenta como lenguaje de oportunidad, no como lujo: una forma concreta de ampliar posibilidades.",
      en: "Technology is presented as a language of opportunity, not a luxury: a concrete way to expand possibilities.",
    },
    resultLabel: { es: "Preparación futura", en: "Future readiness" },
    cta: { es: "Explorar tecnología", en: "Explore technology" },
    icon: Cpu,
    image: impactGraduation,
    featured: true,
  },
  {
    id: "technical",
    title: { es: "Educación técnica", en: "Technical education" },
    eyebrow: { es: "Aprender para avanzar", en: "Learning to advance" },
    description: {
      es: "La formación académica rigurosa, la mentoría y la orientación vocacional preparan a los estudiantes para convertir sus talentos en caminos reales de servicio y trabajo digno.",
      en: "Rigorous academics, mentoring, and vocational guidance prepare students to turn their talents into real pathways of service and dignified work.",
    },
    impact: {
      es: "La continuidad educativa —desde los primeros años hasta la secundaria— transforma permanencia escolar en proyecto de vida.",
      en: "Educational continuity —from the earliest years through secondary school— transforms school persistence into a life project.",
    },
    resultLabel: { es: "Ruta educativa", en: "Educational pathway" },
    cta: { es: "Conocer la ruta", en: "Discover the pathway" },
    icon: GraduationCap,
    image: pillarEducation,
  },
  {
    id: "nutrition",
    title: { es: "Nutrición y bienestar", en: "Nutrition and wellbeing" },
    eyebrow: { es: "Cuidado que sostiene", en: "Care that sustains" },
    description: {
      es: "La salud y la nutrición fortalecen la capacidad de aprender, permanecer y crecer con dignidad dentro de un entorno escolar que mira a la persona completa.",
      en: "Health and nutrition strengthen the capacity to learn, remain, and grow with dignity within a school environment that sees the whole person.",
    },
    impact: {
      es: "El bienestar físico protege el aprendizaje cotidiano y acompaña la esperanza desde lo más básico: cuidado, energía y presencia.",
      en: "Physical wellbeing protects daily learning and accompanies hope through the essentials: care, energy, and presence.",
    },
    resultLabel: { es: "Bienestar integral", en: "Holistic wellbeing" },
    cta: { es: "Ver bienestar", en: "View wellbeing" },
    icon: ChefHat,
    image: impactSports,
  },
  {
    id: "care",
    title: { es: "Acompañamiento", en: "Accompaniment" },
    eyebrow: { es: "Fe, pertenencia y comunidad", en: "Faith, belonging, and community" },
    description: {
      es: "Refugio, programas cristianos, campamento juvenil, CHICOS, La Garra y Banda de la Paz fortalecen identidad, pertenencia, carácter y liderazgo comunitario.",
      en: "Refugio, Christian programs, youth camp, CHICOS, La Garra, and Banda de la Paz strengthen identity, belonging, character, and community leadership.",
    },
    impact: {
      es: "El acompañamiento convierte la educación en una experiencia de presencia: alguien conoce, escucha y camina con cada estudiante.",
      en: "Accompaniment turns education into an experience of presence: someone knows, listens, and walks with each student.",
    },
    resultLabel: { es: "Cuidado cercano", en: "Close care" },
    cta: { es: "Entender el modelo", en: "Understand the model" },
    icon: HeartHandshake,
    image: pillarCare,
  },
];

export function ProgramPillars({ language = "es" }: ProgramPillarsProps) {
  const copy = {
    eyebrow: language === "es" ? "Pilares de oportunidad" : "Pillars of opportunity",
    title:
      language === "es"
        ? "Cinco pilares conectan aprendizaje, bienestar y propósito."
        : "Five pillars connect learning, wellbeing, and purpose.",
    intro:
      language === "es"
        ? "Inglés, tecnología, educación técnica, nutrición y acompañamiento forman una arquitectura de oportunidades donde cada experiencia apunta a una vida con dignidad y futuro."
        : "English, technology, technical education, nutrition, and accompaniment form an architecture of opportunity where every experience points toward a life with dignity and future.",
    proof:
      language === "es"
        ? "Cinco líneas de acción conectadas por una misma misión: transformar vidas a través del amor y la educación centrados en Cristo."
        : "Five lines of action connected by one mission: transforming lives through Christ-centered love and education.",
    cta:
      language === "es" ? "Conectar programas con donación" : "Connect programs to giving",
  };

  return (
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.92fr) minmax(280px, 0.48fr)" },
            gap: { xs: 4, md: 7 },
            alignItems: "end",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box>
            <Box className="hope-eyebrow" sx={{ mb: 2 }}>
              <Sparkles size={15} />
              {copy.eyebrow}
            </Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "2.4rem", md: "4rem" },
                fontWeight: 900,
                lineHeight: 0.96,
                letterSpacing: "-0.075em",
                color: tokens.color.graphite,
                maxWidth: 820,
                mb: 2.6,
              }}
            >
              {copy.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.85,
                color: tokens.color.graphiteSoft,
                maxWidth: 720,
              }}
            >
              {copy.intro}
            </Typography>
          </Box>

          <Box
            className="hope-card"
            sx={{
              p: { xs: 2.6, md: 3.2 },
              backgroundColor: "rgba(255, 255, 255, 0.72)",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2.5,
            }}
          >
            <Box sx={{ display: "inline-flex", width: 46, height: 46, borderRadius: tokens.radius.pill, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(242,185,0,0.13)" }}>
              <BookOpenText size={22} color={tokens.color.hopeGoldDark} />
            </Box>
            <Typography sx={{ fontFamily: tokens.font.display, fontSize: { xs: "1.22rem", md: "1.38rem" }, lineHeight: 1.28, fontWeight: 820, letterSpacing: "-0.035em", color: tokens.color.graphite }}>
              {copy.proof}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(6, minmax(0, 1fr))" },
            gridAutoRows: { md: "minmax(260px, auto)" },
            gap: { xs: 2.2, md: 2.6 },
          }}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isFeatured = Boolean(pillar.featured);
            const span = pillar.id === "english" ? { md: "span 3" } : pillar.id === "technology" ? { md: "span 3" } : { md: "span 2" };

            return (
              <Box
                key={pillar.id}
                className={isFeatured ? "hope-card-premium" : "hope-card"}
                sx={{
                  position: "relative",
                  minHeight: { xs: isFeatured ? 340 : 286, md: isFeatured ? 390 : 310 },
                  gridColumn: { xs: "auto", ...span },
                  p: { xs: 3, md: isFeatured ? 4.2 : 3.3 },
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background:
                    isFeatured
                      ? `linear-gradient(145deg, rgba(255,255,255,0.90), rgba(255,247,219,0.76)), linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.90)), url(${pillar.image})`
                      : `linear-gradient(145deg, rgba(255,255,255,0.86), rgba(255,255,255,0.72)), url(${pillar.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: isFeatured ? tokens.shadow.soft : tokens.shadow.subtle,
                  transition: `transform 360ms ${tokens.easing.premium}, box-shadow 360ms ${tokens.easing.premium}, border-color 360ms ${tokens.easing.premium}`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "auto auto -58px -58px",
                    width: isFeatured ? 180 : 138,
                    height: isFeatured ? 180 : 138,
                    borderRadius: tokens.radius.pill,
                    background: "rgba(242,185,0,0.105)",
                    transition: `transform 500ms ${tokens.easing.premium}, opacity 500ms ${tokens.easing.premium}`,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: "0 auto 0 0",
                    width: 3,
                    background: index < 2 ? tokens.color.hopeGold : "rgba(52,52,52,0.12)",
                    opacity: isFeatured ? 1 : 0.72,
                    transition: `width 320ms ${tokens.easing.premium}`,
                  },
                  "&:hover": {
                    transform: "translateY(-7px)",
                    boxShadow: isFeatured ? tokens.shadow.elevated : tokens.shadow.soft,
                    borderColor: "rgba(242,185,0,0.32)",
                    "&::before": { transform: "scale(1.18) translate(8px, -8px)", opacity: 0.9 },
                    "&::after": { width: 5 },
                    "& .pillar-icon": { transform: "translateY(-3px) rotate(-2deg)", backgroundColor: tokens.color.hopeGoldPale },
                    "& .pillar-arrow": { transform: "translateX(5px)" },
                    "& .pillar-impact": { color: tokens.color.graphite },
                  },
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2, mb: { xs: 3, md: isFeatured ? 4 : 3 } }}>
                    <Box
                      className="pillar-icon"
                      sx={{
                        width: isFeatured ? 58 : 50,
                        height: isFeatured ? 58 : 50,
                        borderRadius: tokens.radius.lg,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(242,185,0,0.12)",
                        border: `1px solid rgba(242,185,0,0.22)`,
                        transition: `all 360ms ${tokens.easing.premium}`,
                      }}
                    >
                      <Icon size={isFeatured ? 27 : 23} color={tokens.color.hopeGoldDark} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: tokens.font.body,
                        fontSize: "0.7rem",
                        fontWeight: 880,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: tokens.color.hopeGoldDark,
                        pt: 0.7,
                      }}
                    >
                      {pillar.eyebrow[language]}
                    </Typography>
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: tokens.font.display,
                      fontSize: { xs: isFeatured ? "2rem" : "1.55rem", md: isFeatured ? "2.45rem" : "1.65rem" },
                      fontWeight: 890,
                      lineHeight: 1.03,
                      letterSpacing: "-0.06em",
                      color: tokens.color.graphite,
                      maxWidth: isFeatured ? 420 : 310,
                      mb: 2,
                    }}
                  >
                    {pillar.title[language]}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: tokens.font.body,
                      fontSize: isFeatured ? { xs: "0.98rem", md: "1.04rem" } : "0.93rem",
                      lineHeight: 1.78,
                      color: tokens.color.graphiteSoft,
                      maxWidth: isFeatured ? 520 : 360,
                      mb: { xs: 3, md: 3.4 },
                    }}
                  >
                    {pillar.description[language]}
                  </Typography>
                </Box>

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      p: { xs: 2.1, md: 2.35 },
                      mb: 2.4,
                      borderRadius: tokens.radius.md,
                      backgroundColor: isFeatured ? "rgba(255,255,255,0.72)" : "rgba(255,247,219,0.52)",
                      border: `1px solid ${tokens.color.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: tokens.font.body,
                        fontSize: "0.68rem",
                        fontWeight: 860,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: tokens.color.graphiteMuted,
                        mb: 0.8,
                      }}
                    >
                      {pillar.resultLabel[language]}
                    </Typography>
                    <Typography
                      className="pillar-impact"
                      sx={{
                        fontFamily: tokens.font.display,
                        fontSize: { xs: "1rem", md: isFeatured ? "1.18rem" : "1.02rem" },
                        fontWeight: 790,
                        lineHeight: 1.28,
                        letterSpacing: "-0.035em",
                        color: tokens.color.graphiteSoft,
                        transition: `color 320ms ${tokens.easing.premium}`,
                      }}
                    >
                      {pillar.impact[language]}
                    </Typography>
                  </Box>

                  <Button
                    variant="text"
                    endIcon={<ArrowRight className="pillar-arrow" size={17} style={{ transition: `transform 260ms ${tokens.easing.premium}` }} />}
                    sx={{
                      px: 0,
                      minWidth: 0,
                      color: tokens.color.graphite,
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      fontFamily: tokens.font.body,
                      fontSize: "0.88rem",
                      fontWeight: 820,
                      letterSpacing: "-0.01em",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: tokens.color.hopeGoldDark,
                        boxShadow: "none",
                        transform: "none",
                      },
                    }}
                  >
                    {pillar.cta[language]}
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: { xs: 4, md: 5 },
            borderTop: `1px solid ${tokens.color.line}`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" endIcon={<ArrowRight size={18} />}>
            {copy.cta}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
