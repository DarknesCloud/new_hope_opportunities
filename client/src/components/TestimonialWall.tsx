import { useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight, BookOpenCheck, Heart, MapPin, Quote, Sparkles } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";
import storyChild from "@/assets/photos/story-child.webp";
import impactGraduation from "@/assets/photos/impact-graduation.webp";
import pillarCare from "@/assets/photos/pillar-care.webp";

type Language = "es" | "en";

type Story = {
  id: string;
  title: Record<Language, string>;
  place: string;
  quote: Record<Language, string>;
  dream: Record<Language, string>;
  image: string;
  chapters: Array<{
    label: Record<Language, string>;
    title: Record<Language, string>;
    body: Record<Language, string>;
  }>;
};

interface TestimonialWallProps {
  language?: Language;
}

const stories: Story[] = [
  {
    id: "classroom",
    title: { es: "Un niño entra al aula", en: "A child enters the classroom" },
    place: "Rivera Hernández",
    image: storyChild,
    quote: {
      es: "Transformamos vidas a través del amor y la educación centrados en Cristo.",
      en: "We transform lives through Christ-centered love and education.",
    },
    dream: {
      es: "Que cada estudiante tenga esperanza de un futuro mejor.",
      en: "That every student may have hope for a better future.",
    },
    chapters: [
      {
        label: { es: "Origen", en: "Origin" },
        title: { es: "Un contexto que necesita oportunidad", en: "A context that needs opportunity" },
        body: {
          es: "Rivera Hernández es el territorio central de esta misión. La respuesta institucional no es asistencialismo genérico, sino educación con presencia diaria.",
          en: "Rivera Hernández is the central territory of this mission. The institutional response is not generic aid, but education with daily presence.",
        },
      },
      {
        label: { es: "Aula", en: "Classroom" },
        title: { es: "Escuela Esperanza", en: "Escuela Esperanza" },
        body: {
          es: "Más de 250 estudiantes reciben educación de calidad en preescolar y primaria, con valores cristianos y un entorno que protege la dignidad del aprendizaje.",
          en: "More than 250 students receive quality preschool and primary education, with Christian values and an environment that protects the dignity of learning.",
        },
      },
      {
        label: { es: "Futuro", en: "Future" },
        title: { es: "Esperanza concreta", en: "Concrete hope" },
        body: {
          es: "La esperanza se vuelve ruta cuando un niño permanece en la escuela, aprende con cuidado y descubre que su vida tiene propósito.",
          en: "Hope becomes a pathway when a child stays in school, learns with care, and discovers that life has purpose.",
        },
      },
    ],
  },
  {
    id: "secondary",
    title: { es: "Una generación que avanza", en: "A generation moving forward" },
    place: "Preparatoria Hope",
    image: impactGraduation,
    quote: {
      es: "La educación secundaria combina preparación académica rigurosa, mentoría y orientación vocacional personalizada.",
      en: "Secondary education combines rigorous academics, mentoring, and personalized vocational guidance.",
    },
    dream: {
      es: "Formar líderes comprometidos con su comunidad.",
      en: "To form leaders committed to their community.",
    },
    chapters: [
      {
        label: { es: "Continuidad", en: "Continuity" },
        title: { es: "De 7º a 11º grado", en: "From 7th to 11th grade" },
        body: {
          es: "Más de 250 estudiantes están matriculados en secundaria. La continuidad educativa evita que la esperanza se interrumpa al terminar primaria.",
          en: "More than 250 students are enrolled in secondary education. Educational continuity prevents hope from stopping after primary school.",
        },
      },
      {
        label: { es: "Mentoría", en: "Mentoring" },
        title: { es: "Acompañamiento personalizado", en: "Personalized accompaniment" },
        body: {
          es: "La mentoría y la orientación vocacional conectan el aprendizaje con decisiones reales de futuro, servicio y liderazgo.",
          en: "Mentoring and vocational guidance connect learning with real decisions about the future, service, and leadership.",
        },
      },
      {
        label: { es: "Impacto", en: "Impact" },
        title: { es: "Liderazgo comunitario", en: "Community leadership" },
        body: {
          es: "La meta no es solo graduar estudiantes, sino preparar jóvenes capaces de aportar a Honduras desde una identidad fortalecida.",
          en: "The goal is not only to graduate students, but to prepare young people able to contribute to Honduras from a strengthened identity.",
        },
      },
    ],
  },
  {
    id: "refugio",
    title: { es: "Un refugio de pertenencia", en: "A refuge of belonging" },
    place: "Refugio · CHICOS · Campamento juvenil",
    image: pillarCare,
    quote: {
      es: "Los programas cristianos y juveniles sostienen la formación espiritual, emocional y comunitaria.",
      en: "Christian and youth programs sustain spiritual, emotional, and community formation.",
    },
    dream: {
      es: "Que niños, jóvenes y adultos encuentren cuidado, fe y propósito.",
      en: "That children, youth, and adults may find care, faith, and purpose.",
    },
    chapters: [
      {
        label: { es: "Cuidado", en: "Care" },
        title: { es: "Más que clases", en: "More than classes" },
        body: {
          es: "New Hope integra Refugio, CHICOS, programas cristianos y campamento juvenil anual para responder a necesidades humanas que van más allá del aula.",
          en: "New Hope integrates Refugio, CHICOS, Christian programs, and the annual youth camp to respond to human needs beyond the classroom.",
        },
      },
      {
        label: { es: "Comunidad", en: "Community" },
        title: { es: "Pertenecer también educa", en: "Belonging also educates" },
        body: {
          es: "Cuando un niño se siente parte de una comunidad segura, aprende a confiar, participar y proyectarse con mayor libertad.",
          en: "When a child feels part of a safe community, they learn to trust, participate, and imagine the future with greater freedom.",
        },
      },
      {
        label: { es: "Fe", en: "Faith" },
        title: { es: "Formación centrada en Cristo", en: "Christ-centered formation" },
        body: {
          es: "La fe no aparece como adorno; estructura el lenguaje de amor, integridad, excelencia y esperanza que guía la vida institucional.",
          en: "Faith is not decorative; it structures the language of love, integrity, excellence, and hope that guides institutional life.",
        },
      },
    ],
  },
];

export function TestimonialWall({ language = "es" }: TestimonialWallProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];
  const copy = {
    eyebrow: language === "es" ? "Historia de impacto" : "Impact story",
    title: language === "es" ? "Una historia institucional, contada con rostros reales." : "An institutional story told through real faces.",
    intro:
      language === "es"
        ? "Rostros reales y misión viva se unen en una narrativa de dignidad, continuidad educativa y esperanza concreta."
        : "Real faces and a living mission come together in a narrative of dignity, educational continuity, and concrete hope.",
    previous: language === "es" ? "Historia anterior" : "Previous story",
    next: language === "es" ? "Siguiente historia" : "Next story",
    dreamLabel: language === "es" ? "Horizonte" : "Horizon",
    journeyLabel: language === "es" ? "El viaje" : "The journey",
  };

  const goToStory = (direction: "previous" | "next") => {
    setActiveIndex((current) => {
      if (direction === "previous") return current === 0 ? stories.length - 1 : current - 1;
      return current === stories.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <Box component="section" className="section-shell" sx={{ position: "relative", backgroundColor: tokens.color.warmSand, overflow: "hidden", borderTop: `1px solid ${tokens.color.line}`, borderBottom: `1px solid ${tokens.color.line}` }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.92fr 1.08fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
          <Box className="hope-card-premium" sx={{ position: "relative", minHeight: { xs: 520, md: 650 }, overflow: "hidden", boxShadow: tokens.shadow.elevated }}>
            <Box component="img" src={activeStory.image} alt={activeStory.title[language]} sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", animation: "storyImageFade 520ms cubic-bezier(0.23, 1, 0.32, 1)", "@keyframes storyImageFade": { "0%": { opacity: 0, transform: "scale(1.02)" }, "100%": { opacity: 1, transform: "scale(1)" } } }} />
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(31,31,31,0.86), rgba(31,31,31,0.08))" }} />
            <Box sx={{ position: "absolute", top: 26, left: 26, display: "inline-flex", alignItems: "center", gap: 1, px: 1.6, py: 0.85, borderRadius: tokens.radius.pill, backgroundColor: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)", color: tokens.color.warmWhite, backdropFilter: "blur(14px)" }}>
              <MapPin size={15} color={tokens.color.hopeGoldSoft} />
              <Typography sx={{ fontSize: "0.78rem", fontWeight: 760 }}>{activeStory.place}</Typography>
            </Box>
            <Box sx={{ position: "absolute", left: { xs: 24, md: 36 }, right: { xs: 24, md: 36 }, bottom: { xs: 28, md: 38 } }}>
              <Quote size={38} color={tokens.color.hopeGoldSoft} />
              <Typography sx={{ color: tokens.color.warmWhite, fontFamily: tokens.font.display, fontSize: { xs: "1.75rem", md: "2.35rem" }, fontWeight: 840, lineHeight: 1.1, letterSpacing: "-0.055em", mt: 1.5 }}>{activeStory.quote[language]}</Typography>
            </Box>
          </Box>

          <Box>
            <Box className="hope-eyebrow" sx={{ mb: 2 }}><Sparkles size={15} />{copy.eyebrow}</Box>
            <Typography variant="h2" sx={{ mb: 2 }}>{copy.title}</Typography>
            <Typography sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.85, mb: 4 }}>{copy.intro}</Typography>

            <Box className="hope-card" sx={{ p: { xs: 2.6, md: 3.2 }, backgroundColor: "rgba(255,255,255,0.72)", mb: 3 }}>
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 850, textTransform: "uppercase", letterSpacing: "0.13em", color: tokens.color.hopeGoldDark, mb: 1 }}>{copy.dreamLabel}</Typography>
              <Typography sx={{ fontFamily: tokens.font.display, fontSize: { xs: "1.18rem", md: "1.36rem" }, fontWeight: 780, lineHeight: 1.3, color: tokens.color.graphite }}>{activeStory.dream[language]}</Typography>
            </Box>

            <Typography sx={{ fontSize: "0.76rem", fontWeight: 860, textTransform: "uppercase", letterSpacing: "0.13em", color: tokens.color.graphiteMuted, mb: 2 }}>{copy.journeyLabel}</Typography>
            <Box sx={{ display: "grid", gap: 1.5, mb: 4 }}>
              {activeStory.chapters.map((chapter, index) => (
                <Box key={`${activeStory.id}-${chapter.label.es}`} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "86px 1fr" }, gap: { xs: 1, sm: 2.4 }, p: { xs: 2.3, md: 2.6 }, borderRadius: tokens.radius.lg, border: `1px solid ${tokens.color.line}`, backgroundColor: index === 1 ? "rgba(255,247,219,0.82)" : "rgba(255,255,255,0.58)" }}>
                  <Typography sx={{ fontFamily: tokens.font.display, fontSize: "0.92rem", fontWeight: 850, color: index === 1 ? tokens.color.hopeGoldDark : tokens.color.graphite }}>{chapter.label[language]}</Typography>
                  <Box>
                    <Typography sx={{ fontFamily: tokens.font.display, fontSize: "1rem", fontWeight: 780, color: tokens.color.graphite, mb: 0.8 }}>{chapter.title[language]}</Typography>
                    <Typography sx={{ fontSize: "0.92rem", lineHeight: 1.72, color: tokens.color.graphiteSoft }}>{chapter.body[language]}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", gap: 1.1 }}>
                {stories.map((story, index) => (
                  <Box key={story.id} component="button" type="button" aria-label={story.title[language]} onClick={() => setActiveIndex(index)} sx={{ width: activeIndex === index ? 32 : 10, height: 10, p: 0, border: 0, borderRadius: tokens.radius.pill, backgroundColor: activeIndex === index ? tokens.color.hopeGold : "rgba(52,52,52,0.18)", cursor: "pointer", transition: `all 280ms ${tokens.easing.premium}` }} />
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 1.2 }}>
                <IconButton aria-label={copy.previous} onClick={() => goToStory("previous")} sx={{ width: 44, height: 44, border: `1px solid ${tokens.color.lineStrong}`, backgroundColor: "rgba(255,255,255,0.72)", color: tokens.color.graphite, "&:hover": { backgroundColor: tokens.color.hopeGoldPale } }}><ArrowLeft size={18} /></IconButton>
                <IconButton aria-label={copy.next} onClick={() => goToStory("next")} sx={{ width: 44, height: 44, border: `1px solid ${tokens.color.lineStrong}`, backgroundColor: tokens.color.graphite, color: tokens.color.warmWhite, "&:hover": { backgroundColor: tokens.color.graphiteDark } }}><ArrowRight size={18} /></IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 7, md: 9 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 2, md: 2.4 } }}>
          {[
            { icon: Heart, title: language === "es" ? "Amor que acompaña" : "Love that accompanies", body: language === "es" ? "La educación se sostiene con presencia, paciencia y cuidado cotidiano." : "Education is sustained through presence, patience, and daily care." },
            { icon: BookOpenCheck, title: language === "es" ? "Aprendizaje que abre puertas" : "Learning that opens doors", body: language === "es" ? "La escuela y la preparatoria conectan a cada estudiante con rutas reales de continuidad." : "The school and secondary program connect each student with real paths of continuity." },
            { icon: Sparkles, title: language === "es" ? "Futuros que se vuelven posibles" : "Futures that become possible", body: language === "es" ? "El objetivo es devolver esperanza concreta a una comunidad a través de educación y fe." : "The goal is to return concrete hope to a community through education and faith." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Box key={item.title} className="hope-card" sx={{ p: { xs: 2.6, md: 3 }, backgroundColor: "rgba(255,255,255,0.58)" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.4 }}>
                  <Box sx={{ width: 36, height: 36, borderRadius: tokens.radius.pill, display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(242,185,0,0.12)" }}><Icon size={18} color={tokens.color.hopeGoldDark} /></Box>
                  <Typography sx={{ fontFamily: tokens.font.display, fontSize: "1rem", fontWeight: 800, color: tokens.color.graphite }}>{item.title}</Typography>
                </Box>
                <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.7, color: tokens.color.graphiteSoft }}>{item.body}</Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
