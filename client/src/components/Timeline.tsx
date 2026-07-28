import { Box, Card, Chip, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Sprout,
  Target,
} from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";

type Language = "es" | "en";

interface TimelineProps {
  language?: Language;
}

const copy = {
  es: {
    eyebrow: "Línea de tiempo histórica",
    title: "Una trayectoria de esperanza sostenida en Rivera Hernández.",
    intro:
      "La historia de New Hope avanza como una secuencia de fidelidad: presencia comunitaria, educación formal, formación integral, graduaciones y una campaña 2026 diseñada para sostener el crecimiento con transparencia.",
    stepLabel: "Hito",
    steps: [
      {
        marker: "Raíz",
        title: "Misión centrada en Rivera Hernández",
        text: "La organización enfoca su presencia en niños, jóvenes y adultos de Rivera Hernández, creando oportunidades educativas y cristianas para abrir camino hacia un futuro mejor.",
        icon: Sprout,
      },
      {
        marker: "Base educativa",
        title: "Escuela Esperanza",
        text: "La educación preescolar y primaria acompaña a más de 250 estudiantes con formación académica, valores cristianos y cuidado cotidiano.",
        icon: BookOpen,
      },
      {
        marker: "Continuidad",
        title: "Preparatoria Hope",
        text: "La ruta secundaria fortalece a más de 250 estudiantes de 7º a 11º grado mediante preparación académica, mentoría y orientación vocacional.",
        icon: Target,
      },
      {
        marker: "2025",
        title: "Graduaciones y constancia institucional",
        text: "Las graduaciones de prebásica y secundaria celebran avances concretos y confirman que la esperanza también se mide en permanencia, acompañamiento y logro educativo.",
        icon: GraduationCap,
      },
      {
        marker: "2026",
        title: "Sembrando Semillas de Esperanza",
        text: "La campaña 2026 proyecta una meta de $150,000, impulsada por un fondo igualador dólar por dólar de hasta $75,000 para ampliar educación, nutrición, infraestructura y desarrollo espiritual.",
        icon: HeartHandshake,
      },
    ],
  },
  en: {
    eyebrow: "Historical timeline",
    title: "A sustained journey of hope in Rivera Hernández.",
    intro:
      "New Hope’s story moves as a sequence of faithfulness: community presence, formal education, holistic formation, graduations, and a 2026 campaign designed to sustain growth with transparency.",
    stepLabel: "Milestone",
    steps: [
      {
        marker: "Rooted",
        title: "Mission centered in Rivera Hernández",
        text: "The organization focuses its presence on children, youth, and adults in Rivera Hernández, creating educational and Christian opportunities that open a pathway toward a better future.",
        icon: Sprout,
      },
      {
        marker: "Educational base",
        title: "Escuela Esperanza",
        text: "Preschool and primary education accompany more than 250 students with academic formation, Christian values, and daily care.",
        icon: BookOpen,
      },
      {
        marker: "Continuity",
        title: "Preparatoria Hope",
        text: "The High School pathway strengthens more than 250 students from 7th to 11th grade through academic preparation, mentoring, and vocational guidance.",
        icon: Target,
      },
      {
        marker: "2025",
        title: "Graduations and institutional constancy",
        text: "Pre-School and secondary graduations celebrate concrete progress and confirm that hope is also measured in persistence, accompaniment, and educational achievement.",
        icon: GraduationCap,
      },
      {
        marker: "2026",
        title: "Sowing Seeds of Hope",
        text: "The 2026 campaign projects a $150,000 goal, powered by a dollar-for-dollar matching fund up to $75,000 to expand education, nutrition, infrastructure, and spiritual development.",
        icon: HeartHandshake,
      },
    ],
  },
} as const;

export function Timeline({ language = "es" }: TimelineProps) {
  const content = copy[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{ backgroundColor: tokens.color.warmWhite, overflow: "hidden" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 820,
            mx: "auto",
            mb: { xs: 6, md: 9 },
          }}
        >
          <Box className="hope-eyebrow" sx={{ mx: "auto", mb: 2.4 }}>
            <Sprout size={15} />
            {content.eyebrow}
          </Box>
          <Typography variant="h2" sx={{ mb: 2.4 }}>
            {content.title}
          </Typography>
          <Typography
            sx={{
              color: tokens.color.graphiteSoft,
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.85,
            }}
          >
            {content.intro}
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: { xs: 24, md: "50%" },
              width: 2,
              transform: { xs: "none", md: "translateX(-50%)" },
              background: `linear-gradient(180deg, transparent, ${tokens.color.hopeGold} 12%, rgba(229,169,0,0.38) 88%, transparent)`,
            }}
          />

          <Box sx={{ display: "grid", gap: { xs: 4, md: 5.5 } }}>
            {content.steps.map((step, index) => {
              const Icon = step.icon;
              const alignLeft = index % 2 === 0;

              return (
                <Box
                  key={step.title}
                  component={motion.div}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.36 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  sx={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                    gap: { xs: 2, md: 7 },
                    alignItems: "center",
                    pl: { xs: 7, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: 9, md: "50%" },
                      top: { xs: 18, md: "50%" },
                      transform: { xs: "none", md: "translate(-50%, -50%)" },
                      zIndex: 2,
                      width: { xs: 32, md: 48 },
                      height: { xs: 32, md: 48 },
                      borderRadius: tokens.radius.pill,
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: tokens.color.hopeGold,
                      color: tokens.color.graphite,
                      border: `4px solid ${tokens.color.warmWhite}`,
                      boxShadow: tokens.shadow.gold,
                    }}
                  >
                    <Icon size={20} />
                  </Box>

                  <Box
                    sx={{
                      gridColumn: { xs: 1, md: alignLeft ? 1 : 2 },
                      gridRow: 1,
                    }}
                  >
                    <Card
                      className="hope-card-premium"
                      sx={{
                        p: { xs: 3, md: 4.2 },
                        minHeight: "100%",
                        transition: `transform 360ms ${tokens.easing.premium}, box-shadow 360ms ${tokens.easing.premium}, border-color 360ms ${tokens.easing.premium}`,
                        "&:hover": {
                          transform: "translateY(-6px)",
                          borderColor: "rgba(229,169,0,0.55)",
                          boxShadow: tokens.shadow.gold,
                        },
                      }}
                    >
                      <Chip
                        label={`${content.stepLabel} ${index + 1} · ${step.marker}`}
                        sx={{
                          borderRadius: tokens.radius.pill,
                          backgroundColor: tokens.color.hopeGoldPale,
                          color: tokens.color.graphite,
                          fontWeight: 850,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 1.6,
                          fontSize: { xs: "1.42rem", md: "1.72rem" },
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: tokens.color.graphiteSoft,
                          lineHeight: 1.78,
                        }}
                      >
                        {step.text}
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
