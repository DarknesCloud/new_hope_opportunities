import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, LucideIcon } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";

interface ImpactMetric {
  icon: LucideIcon;
  value: number;
  suffix: string;
  eyebrow: {
    es: string;
    en: string;
  };
  title: {
    es: string;
    en: string;
  };
  story: {
    es: string;
    en: string;
  };
  proof: {
    es: string;
    en: string;
  };
  tone: "gold" | "graphite";
  image?: string;
}

interface ImpactBarProps {
  language?: "es" | "en";
  backgroundColor?: string;
}

const impactMetrics: ImpactMetric[] = [
  {
    icon: GraduationCap,
    value: 250,
    suffix: "+",
    eyebrow: {
      es: "Escuela Esperanza",
      en: "Escuela Esperanza",
    },
    title: {
      es: "estudiantes reciben educación de calidad diariamente",
      en: "students receive quality education daily",
    },
    story: {
      es: "Más de 250 estudiantes aprenden en Escuela Esperanza desde la base, con currículo riguroso y valores cristianos.",
      en: "More than 250 students learn at Escuela Esperanza from the foundation, with rigorous curriculum and Christian values.",
    },
    proof: {
      es: "Dato institucional 2026",
      en: "2026 institutional data",
    },
    tone: "gold",
    image: "/assets/transparency-1.jpg",
  },
  {
    icon: BookOpen,
    value: 250,
    suffix: "+",
    eyebrow: {
      es: "Educación secundaria",
      en: "Secondary education",
    },
    title: {
      es: "estudiantes matriculados de 7º a 11º grado",
      en: "students enrolled from 7th to 11th grade",
    },
    story: {
      es: "La preparatoria combina preparación académica rigurosa, mentoría y orientación vocacional personalizada para formar líderes comprometidos con su comunidad.",
      en: "The secondary program combines rigorous academics, mentoring, and personalized vocational guidance to form leaders committed to their community.",
    },
    proof: {
      es: "Matrícula secundaria",
      en: "Secondary enrollment",
    },
    tone: "graphite",
    image: "/assets/transparency-2.jpg",
  },
  {
    icon: ShieldCheck,
    value: 150000,
    suffix: "",
    eyebrow: {
      es: "Campaña 2026",
      en: "2026 campaign",
    },
    title: {
      es: "dólares como meta financiera para sembrar esperanza",
      en: "dollars as the financial goal to sow hope",
    },
    story: {
      es: "La campaña 2026 Sembrando Semillas de Esperanza invita a financiar educación, salud y nutrición, infraestructura y desarrollo espiritual.",
      en: "The 2026 Sowing Seeds of Hope campaign invites support for education, health and nutrition, infrastructure, and spiritual development.",
    },
    proof: {
      es: "Meta financiera 2026",
      en: "2026 financial goal",
    },
    tone: "gold",
    image: "/assets/transparency-3.jpg",
  },
  {
    icon: HeartHandshake,
    value: 75000,
    suffix: "",
    eyebrow: {
      es: "Fondo igualador",
      en: "Matching fund",
    },
    title: {
      es: "dólares disponibles para duplicar el impacto",
      en: "dollars available to duplicar el impacto",
    },
    story: {
      es: "Cada dólar donado será igualado dólar por dólar, duplicando el impacto hasta $75,000.",
      en: "Every donated dollar will be matched dollar for dollar, doubling impact up to $75,000.",
    },
    proof: {
      es: "Oportunidad de fondo igualador",
      en: "Matching fund opportunity",
    },
    tone: "graphite",
    image: "/assets/transparency-4.jpg",
  },
];

function formatMetricValue(value: number, suffix: string, language: "es" | "en") {
  const formatted = new Intl.NumberFormat(language === "es" ? "es-HN" : "en-US", {
    maximumFractionDigits: 0,
  }).format(value);

  return `${formatted}${suffix}`;
}

function useCountUp(target: number, isVisible: boolean, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [duration, isVisible, target]);

  return value;
}

function ImpactMetricCard({ metric, index, language, isVisible }: { metric: ImpactMetric; index: number; language: "es" | "en"; isVisible: boolean }) {
  const Icon = metric.icon;
  const animatedValue = useCountUp(metric.value, isVisible, 980 + index * 120);
  const isGold = metric.tone === "gold";
  const accent = isGold ? tokens.color.hopeGold : tokens.color.graphite;
  const accentSoft = isGold ? "rgba(242, 185, 0, 0.13)" : "rgba(52, 52, 52, 0.065)";
  const revealDelay = `${index * 90}ms`;

  return (
    <Box
      className="hope-card-premium"
      sx={{
        position: "relative",
        minHeight: "100%",
        p: { xs: 3.2, md: 3.8 },
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        isolation: "isolate",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 720ms ${tokens.easing.premium} ${revealDelay}, transform 720ms ${tokens.easing.premium} ${revealDelay}, box-shadow 320ms ${tokens.easing.premium}`,
        "&:hover": {
          transform: isVisible ? "translateY(-6px)" : "translateY(22px)",
          boxShadow: tokens.shadow.elevated,
        },
        "&::before": metric.image ? {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${metric.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        } : {
          content: '""',
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 18% 12%, ${accentSoft} 0%, transparent 38%), linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 253, 247, 0.82))`,
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: metric.image ? `linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.50) 50%, transparent 100%)` : "none",
          zIndex: -1,
        },
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 3 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 54,
              height: 54,
              borderRadius: tokens.radius.pill,
              backgroundColor: metric.image ? "rgba(255, 255, 255, 0.15)" : accentSoft,
              border: metric.image ? "1px solid rgba(255, 255, 255, 0.20)" : `1px solid ${isGold ? "rgba(242, 185, 0, 0.24)" : "rgba(52, 52, 52, 0.10)"}`,
              transition: `transform 320ms ${tokens.easing.premium}`,
              ".hope-card-premium:hover &": {
                transform: "scale(1.06) rotate(-2deg)",
              },
            }}
          >
            <Icon size={25} color={metric.image ? "white" : accent} strokeWidth={1.65} />
          </Box>

          <Typography
            sx={{
              fontFamily: tokens.font.body,
              fontSize: "0.68rem",
              fontWeight: 850,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: metric.image ? "rgba(255, 255, 255, 0.85)" : tokens.color.graphiteMuted,
            }}
          >
            {metric.eyebrow[language]}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: tokens.font.display,
            fontSize: { xs: "3.25rem", md: "4rem" },
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.065em",
            color: metric.image ? tokens.color.hopeGold : tokens.color.graphite,
            mb: 2.4,
          }}
        >
          <Box component="span" sx={{ color: tokens.color.hopeGold }}>
            {formatMetricValue(animatedValue, metric.suffix, language)}
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: tokens.font.display,
            fontSize: { xs: "1.05rem", md: "1.12rem" },
            fontWeight: 780,
            lineHeight: 1.25,
            color: metric.image ? "rgba(255, 255, 255, 0.95)" : tokens.color.graphite,
            letterSpacing: "-0.025em",
            mb: 2.8,
          }}
        >
          {metric.title[language]}
        </Typography>

        <Typography
          sx={{
            fontFamily: tokens.font.body,
            fontSize: "0.94rem",
            lineHeight: 1.75,
            color: metric.image ? "rgba(255, 255, 255, 0.90)" : tokens.color.graphiteSoft,
          }}
        >
          {metric.story[language]}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 3.2,
          pt: 2.4,
          borderTop: `1px solid ${tokens.color.line}`,
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: tokens.color.graphiteMuted,
        }}
      >
        <ShieldCheck size={15} color={tokens.color.hopeGoldDark} strokeWidth={1.8} />
        <Typography sx={{ fontFamily: tokens.font.body, fontSize: "0.78rem", fontWeight: 760, letterSpacing: "-0.01em" }}>
          {metric.proof[language]}
        </Typography>
      </Box>
    </Box>
  );
}

export function ImpactBar({ language = "es", backgroundColor = tokens.color.ivory }: ImpactBarProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const copy = useMemo(
    () => ({
      eyebrow: language === "es" ? "Impacto que se puede mirar a los ojos" : "Impact you can look in the eyes",
      title:
        language === "es"
          ? "Los números importan porque cada uno guarda una historia."
          : "Numbers matter because each one carries a story.",
      body:
        language === "es"
          ? "Transformamos métricas en evidencia humana: niños que permanecen en el aula, familias que recuperan esperanza y donadores que pueden ver con claridad hacia dónde va su generosidad."
          : "We turn metrics into human evidence: children who remain in the classroom, families who regain hope, and donors who can clearly see where their generosity goes.",
      verification:
        language === "es" ? "Datos institucionales verificados" : "Verified institutional data",
      reportCta: language === "es" ? "Ver transparencia" : "View transparency",
      reportHref: "/transparencia",
    }),
    [language],
  );

  return (
    <Box
      ref={sectionRef}
      component="section"
      className="section-shell"
      sx={{
        position: "relative",
        backgroundColor,
        overflow: "hidden",
        borderTop: `1px solid ${tokens.color.line}`,
        borderBottom: `1px solid ${tokens.color.line}`,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 12% 8%, rgba(242, 185, 0, 0.12) 0%, transparent 34%), radial-gradient(circle at 88% 72%, rgba(52, 52, 52, 0.06) 0%, transparent 38%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.82fr) minmax(0, 1.18fr)" },
            gap: { xs: 5, md: 8 },
            alignItems: "end",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 720ms ${tokens.easing.premium}, transform 720ms ${tokens.easing.premium}`,
            }}
          >
            <Box className="hope-eyebrow" sx={{ mb: 2 }}>
              <Sparkles size={15} />
              {copy.eyebrow}
            </Box>

            <Typography
              component="h2"
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "2.25rem", md: "3.3rem" },
                fontWeight: 880,
                lineHeight: 1.02,
                letterSpacing: "-0.06em",
                color: tokens.color.graphite,
                maxWidth: 640,
              }}
            >
              {copy.title}
            </Typography>
          </Box>

          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 720ms ${tokens.easing.premium} 90ms, transform 720ms ${tokens.easing.premium} 90ms`,
            }}
          >
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.85,
                color: tokens.color.graphiteSoft,
                maxWidth: 680,
                mb: 2.6,
              }}
            >
              {copy.body}
            </Typography>

            <Button
              href={copy.reportHref}
              variant="outlined"
              endIcon={<ArrowRight size={17} />}
              sx={{
                minHeight: 42,
                px: 2.2,
                py: 1.05,
                fontSize: "0.86rem",
                backgroundColor: "rgba(255, 255, 255, 0.62)",
              }}
            >
              {copy.reportCta}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" },
            gap: { xs: 2.6, md: 3 },
          }}
        >
          {impactMetrics.map((metric, index) => (
            <ImpactMetricCard key={`${metric.title.es}-${index}`} metric={metric} index={index} language={language} isVisible={isVisible} />
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            display: "flex",
            justifyContent: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(14px)",
            transition: `opacity 720ms ${tokens.easing.premium} 360ms, transform 720ms ${tokens.easing.premium} 360ms`,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: { xs: 2, md: 2.6 },
              py: 1.35,
              borderRadius: tokens.radius.pill,
              border: `1px solid ${tokens.color.lineStrong}`,
              backgroundColor: "rgba(255, 255, 255, 0.72)",
              boxShadow: tokens.shadow.subtle,
              color: tokens.color.graphiteSoft,
            }}
          >
            <ShieldCheck size={17} color={tokens.color.hopeGoldDark} strokeWidth={1.8} />
            <Typography sx={{ fontFamily: tokens.font.body, fontSize: { xs: "0.82rem", md: "0.9rem" }, fontWeight: 740 }}>
              {copy.verification}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
