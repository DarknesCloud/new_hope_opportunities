import { useState, type ElementType } from "react";
import {
  AccountBalanceRounded,
  ArrowForwardRounded,
  AssuredWorkloadRounded,
  CheckCircleRounded,
  DescriptionRounded,
  DonutLargeRounded,
  FilePresentRounded,
  GavelRounded,
  HandshakeRounded,
  InsertChartRounded,
  LockRounded,
  PublicRounded,
  ShieldRounded,
  VerifiedRounded,
} from "@mui/icons-material";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import transparencyCommunity from "@/assets/photos/transparencia.jpg";
import { designTokens as tokens } from "@/theme/designTokens";
import type { Language } from "@/contexts/LanguageContext";

type TransparencyTrustProps = {
  language: Language;
  page?: boolean;
};

type AllocationItem = {
  label: string;
  value: number;
  detail: string;
  color: string;
};

type ReportItem = {
  year: string;
  type: string;
  title: string;
  description: string;
  status: string;
};

type SignalItem = {
  title: string;
  description: string;
  meta: string;
  icon: ElementType;
};

const content = {
  es: {
    eyebrow: "Transparencia verificable",
    title: "Conviértanse en una comunidad de aliados que construye esperanza.",
    subtitle:
      "New Hope Opportunities es una corporación sin fines de lucro 501(c)(3) constituida en Estados Unidos. Nuestra rendición de cuentas se presenta como una memoria institucional viva: clara, auditable y diseñada para que cada donador entienda cómo su apoyo se transforma en oportunidad educativa.",
    heroSeal: "Corporación EE. UU. · Fondos auditados · Trazabilidad",
    sectionLabel: "Rendición de cuentas",
    allocationTitle: "Destino de fondos",
    allocationIntro:
      "El destino de fondos se comunica por áreas prioritarias de inversión, preservando rigor y evitando distribuciones numéricas que no formen parte de una auditoría publicada.",
    audited: "Áreas prioritarias",
    directImpact: "uso responsable",
    reportsTitle: "Reportes anuales e impacto",
    reportsIntro:
      "La información de impacto y finanzas se organiza como una experiencia editorial clara, ordenada por año, tipo de evidencia y estado de revisión.",
    viewReport: "Explorar reporte",
    legitimacyTitle: "Certificaciones y alianzas",
    legitimacyIntro:
      "Como corporación estadounidense 501(c)(3), ofrecemos garantías institucionales clave para donadores e instituciones internacionales: legitimidad legal en EE. UU., auditoría interna/externa, gobernanza estricta y deducibilidad fiscal.",
    governanceTitle: "Gobernanza responsable",
    governanceCopy:
      "La transparencia se entiende como una práctica cotidiana: decisiones claras, uso de fondos trazable, reportes de impacto y acompañamiento de aliados que fortalecen la confianza pública.",
    ctaPrimary: "Ver centro de transparencia",
    ctaSecondary: "Solicitar información",
    allocation: [
      {
        label: "Educación y becas",
        value: 1,
        detail:
          "Escuela Esperanza, Preparatoria Hope, útiles, docentes, mentoría y orientación vocacional.",
        color: tokens.color.hopeGold,
      },
      {
        label: "Salud y nutrición",
        value: 1,
        detail:
          "Acompañamiento integral para que cada estudiante pueda aprender con dignidad y bienestar.",
        color: "rgba(255,255,255,0.70)",
      },
      {
        label: "Crecimiento de infraestructura",
        value: 1,
        detail:
          "Espacios seguros, aulas y capacidades operativas para sostener el crecimiento de la misión.",
        color: "rgba(255,255,255,0.46)",
      },
      {
        label: "Desarrollo espiritual",
        value: 1,
        detail:
          "Programas cristianos, campamento juvenil anual y formación centrada en Cristo.",
        color: "rgba(255,255,255,0.30)",
      },
    ],
    reports: [
      {
        year: "2025",
        type: "Impacto anual",
        title: "Memoria de impacto educativo",
        description:
          "Resultados de aprendizaje, permanencia, nutrición y acompañamiento familiar durante el año.",
        status: "Publicado",
      },
      {
        year: "2025",
        type: "Finanzas",
        title: "Informe financiero auditado",
        description:
          "Estados financieros, asignación de fondos y controles administrativos revisados.",
        status: "Auditado",
      },
      {
        year: "2026",
        type: "Planificación",
        title: "Plan operativo anual",
        description:
          "Prioridades, presupuesto proyectado y objetivos programáticos del próximo ciclo.",
        status: "En revisión",
      },
    ],
    signals: [
      {
        title: "Estatus 501(c)(3) EE. UU.",
        description:
          "Organización 501(c)(3) legalmente registrada en los Estados Unidos. Las donaciones son deducibles de impuestos según las leyes fiscales de EE. UU.",
        meta: "Tax Exempt USA",
        icon: AccountBalanceRounded,
      },
      {
        title: "Fondos auditados",
        description:
          "Reportes financieros preparados para revisión externa, con trazabilidad de ingresos, egresos y destino programático.",
        meta: "Audited funds",
        icon: ShieldRounded,
      },
      {
        title: "Registro y cumplimiento",
        description:
          "Estructura legal en EE. UU. operando en estrecha colaboración y cumplimiento normativo con el marco institucional en Honduras.",
        meta: "Legal compliance",
        icon: GavelRounded,
      },
      {
        title: "Alianzas verificables",
        description:
          "Relación con donadores, fundaciones y aliados educativos que acompañan la misión con supervisión y evidencia.",
        meta: "Verified partners",
        icon: HandshakeRounded,
      },
    ],
    badges: [
      "Corporación EE. UU.",
      "Estatus 501(c)(3)",
      "Trazabilidad",
      "Uso responsable",
    ],
  },
  en: {
    eyebrow: "Verifiable transparency",
    title: "Become a community of partners building hope",
    subtitle:
      "New Hope Opportunities is a U.S.-registered 501(c)(3) non-profit corporation. Our accountability is presented as a living institutional report: clear, auditable, and designed so every donor understands how support becomes educational opportunity.",
    heroSeal: "U.S. Corporation · Audited funds · Traceability",
    sectionLabel: "Accountability",
    allocationTitle: "Use of funds",
    allocationIntro:
      "Use of funds is communicated through priority investment areas, preserving rigor and avoiding numerical distributions that are not part of a published audit.",
    audited: "Priority areas",
    directImpact: "responsible use",
    reportsTitle: "Annual reports and impact",
    reportsIntro:
      "Impact and finance information is organized as a clear editorial experience, structured by year, evidence type, and review status.",
    viewReport: "Explore report",
    legitimacyTitle: "Certifications and partnerships",
    legitimacyIntro:
      "As a U.S. 501(c)(3) non-profit corporation, we provide core institutional guarantees for international donors: U.S. legal standing, governance, traceability, and tax-deductible contributions.",
    governanceTitle: "Responsible governance",
    governanceCopy:
      "Transparency is treated as a daily practice: clear decisions, traceable use of funds, impact reporting, and partner accompaniment that strengthens public trust.",
    ctaPrimary: "View transparency center",
    ctaSecondary: "Request information",
    allocation: [
      {
        label: "Education and scholarships",
        value: 1,
        detail:
          "Escuela Esperanza, Preparatoria Hope, supplies, teachers, mentoring, and vocational guidance.",
        color: tokens.color.hopeGold,
      },
      {
        label: "Health and nutrition",
        value: 1,
        detail:
          "Holistic support so every student can learn with dignity and wellbeing.",
        color: "rgba(255,255,255,0.70)",
      },
      {
        label: "Infrastructure growth",
        value: 1,
        detail:
          "Safe spaces, classrooms, and operating capacity to sustain the mission’s growth.",
        color: "rgba(255,255,255,0.46)",
      },
      {
        label: "Spiritual development",
        value: 1,
        detail:
          "Christian programs, annual youth camp, and Christ-centered formation.",
        color: "rgba(255,255,255,0.30)",
      },
    ],
    reports: [
      {
        year: "2025",
        type: "Annual impact",
        title: "Educational impact report",
        description:
          "Learning outcomes, attendance, nutrition, and family accompaniment throughout the year.",
        status: "Published",
      },
      {
        year: "2025",
        type: "Finance",
        title: "Audited financial report",
        description:
          "Financial statements, fund allocation, and reviewed administrative controls.",
        status: "Audited",
      },
      {
        year: "2026",
        type: "Planning",
        title: "Annual operating plan",
        description:
          "Priorities, projected budget, and program goals for the next cycle.",
        status: "Under review",
      },
    ],
    signals: [
      {
        title: "U.S. 501(c)(3) Status",
        description:
          "Legally registered 501(c)(3) non-profit corporation in the United States. Donations are tax-deductible to the extent allowed by U.S. law.",
        meta: "Tax Exempt USA",
        icon: AccountBalanceRounded,
      },
      {
        title: "Audited funds",
        description:
          "Financial reports prepared for external review, with traceability of income, expenses, and program allocation.",
        meta: "Audited funds",
        icon: ShieldRounded,
      },
      {
        title: "Registration and compliance",
        description:
          "U.S. legal framework operating in close coordination and compliance with local operational guidelines in Honduras.",
        meta: "Legal compliance",
        icon: GavelRounded,
      },
      {
        title: "Verifiable partnerships",
        description:
          "Relationships with donors, foundations, and educational partners who accompany the mission with oversight and evidence.",
        meta: "Verified partners",
        icon: HandshakeRounded,
      },
    ],
    badges: [
      "U.S. Corporation",
      "501(c)(3) Status",
      "Traceability",
      "Responsible use",
    ],
  },
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    heroSeal: string;
    sectionLabel: string;
    allocationTitle: string;
    allocationIntro: string;
    audited: string;
    directImpact: string;
    reportsTitle: string;
    reportsIntro: string;
    viewReport: string;
    legitimacyTitle: string;
    legitimacyIntro: string;
    governanceTitle: string;
    governanceCopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
    allocation: AllocationItem[];
    reports: ReportItem[];
    signals: SignalItem[];
    badges: string[];
  }
>;

export function TransparencyTrust({
  language,
  page = false,
}: TransparencyTrustProps) {
  const copy = content[language];
  const [activeReport, setActiveReport] = useState(0);
  const featuredReport = copy.reports[activeReport];

  return (
    <Box
      id="transparencia"
      component="section"
      className="section-shell"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: page
          ? `linear-gradient(180deg, ${tokens.color.graphiteDark} 0%, ${tokens.color.graphite} 38%, ${tokens.color.ivory} 38%, ${tokens.color.warmSand} 100%)`
          : `linear-gradient(180deg, ${tokens.color.ivory} 0%, ${tokens.color.warmSand} 100%)`,
        borderTop: `1px solid ${tokens.color.line}`,
        borderBottom: `1px solid ${tokens.color.line}`,
      }}
    >
      {page ? (
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: "0 0 auto 0",
            height: { xs: "46%", md: "43%" },
            backgroundImage: `linear-gradient(90deg, rgba(28,28,27,0.96) 0%, rgba(28,28,27,0.86) 42%, rgba(28,28,27,0.64) 100%), url(${transparencyCommunity})`,
            backgroundSize: "cover",
            backgroundPosition: { xs: "center center", md: "center 46%" },
            transform: "scale(1.01)",
          }}
        />
      ) : null}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.92fr 1.08fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "end",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box>
            <Box
              className="hope-eyebrow"
              sx={{
                mb: 2,
                backgroundColor: page ? "rgba(255,255,255,0.08)" : undefined,
                color: page ? tokens.color.hopeGoldSoft : undefined,
              }}
            >
              <VerifiedRounded sx={{ fontSize: 16 }} />
              {copy.eyebrow}
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: page ? tokens.color.warmWhite : tokens.color.graphite,
                maxWidth: 720,
                mb: 2,
              }}
            >
              {copy.title}
            </Typography>
            <Typography
              sx={{
                color: page
                  ? "rgba(255,255,255,0.74)"
                  : tokens.color.graphiteSoft,
                fontSize: { xs: "1.04rem", md: "1.14rem" },
                lineHeight: 1.85,
                maxWidth: 720,
              }}
            >
              {copy.subtitle}
            </Typography>
          </Box>

          <Box
            className="hope-card-premium"
            sx={{
              p: { xs: 2.4, md: 3 },
              background: page
                ? "rgba(255,255,255,0.08)"
                : `linear-gradient(145deg, rgba(255,255,255,0.94), rgba(255,247,219,0.36))`,
              borderColor: page ? "rgba(255,255,255,0.14)" : tokens.color.line,
              color: page ? tokens.color.warmWhite : tokens.color.graphite,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: tokens.radius.pill,
                  display: "grid",
                  placeItems: "center",
                  color: tokens.color.graphite,
                  backgroundColor: tokens.color.hopeGold,
                }}
              >
                <AssuredWorkloadRounded sx={{ fontSize: 21 }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: tokens.font.display,
                    fontWeight: 900,
                    fontSize: "1.08rem",
                  }}
                >
                  {copy.sectionLabel}
                </Typography>
                <Typography
                  sx={{
                    color: page
                      ? "rgba(255,255,255,0.62)"
                      : tokens.color.graphiteMuted,
                    fontSize: "0.86rem",
                  }}
                >
                  {copy.heroSeal}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {copy.badges.map(badge => (
                <Chip
                  key={badge}
                  icon={<CheckCircleRounded />}
                  label={badge}
                  sx={{
                    borderRadius: tokens.radius.pill,
                    backgroundColor: page
                      ? "rgba(255,255,255,0.08)"
                      : tokens.color.warmWhite,
                    color: page
                      ? tokens.color.hopeGoldSoft
                      : tokens.color.graphiteSoft,
                    border: `1px solid ${page ? "rgba(255,255,255,0.12)" : tokens.color.line}`,
                    fontFamily: tokens.font.body,
                    fontWeight: 800,
                    "& .MuiChip-icon": { color: tokens.color.hopeGoldDark },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          <Box
            sx={{
              p: { xs: 2.6, md: 3.6 },
              borderRadius: tokens.radius.xl,
              background: `linear-gradient(145deg, ${tokens.color.graphite} 0%, ${tokens.color.graphiteDark} 100%)`,
              color: tokens.color.warmWhite,
              boxShadow: tokens.shadow.elevated,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 1.5,
                }}
              >
                <DonutLargeRounded
                  sx={{ color: tokens.color.hopeGold, fontSize: 22 }}
                />
                <Typography
                  sx={{
                    color: tokens.color.hopeGoldSoft,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontSize: "0.72rem",
                  }}
                >
                  {copy.audited}
                </Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  color: tokens.color.warmWhite,
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  mb: 1,
                }}
              >
                {copy.allocationTitle}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.8,
                  maxWidth: 620,
                  mb: 4,
                }}
              >
                {copy.allocationIntro}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
                  gap: { xs: 3, md: 4 },
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    minHeight: { xs: 190, md: 240 },
                    borderRadius: tokens.radius.xl,
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    p: 3,
                    background:
                      "linear-gradient(145deg, rgba(242,185,0,0.20), rgba(255,255,255,0.06))",
                    border: "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "0 24px 56px rgba(0,0,0,0.18)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: tokens.font.display,
                        fontWeight: 950,
                        letterSpacing: "-0.08em",
                        fontSize: { xs: "3.2rem", md: "3.7rem" },
                        color: tokens.color.hopeGoldSoft,
                        lineHeight: 0.9,
                      }}
                    >
                      4
                    </Typography>
                    <Typography
                      sx={{
                        color: tokens.color.warmWhite,
                        fontSize: "0.84rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        mt: 1,
                      }}
                    >
                      {copy.directImpact}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "grid", gap: 1.3 }}>
                  {copy.allocation.map((item, index) => (
                    <Box
                      key={item.label}
                      sx={{
                        p: 1.6,
                        borderRadius: tokens.radius.md,
                        border: "1px solid rgba(255,255,255,0.12)",
                        backgroundColor: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.1,
                          mb: 0.8,
                        }}
                      >
                        <Box
                          sx={{
                            width: 28,
                            height: 28,
                            borderRadius: tokens.radius.pill,
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: item.color,
                            color:
                              index === 0
                                ? tokens.color.graphite
                                : tokens.color.warmWhite,
                            fontWeight: 950,
                            fontSize: "0.78rem",
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: 900,
                            color: tokens.color.warmWhite,
                            lineHeight: 1.25,
                          }}
                        >
                          {item.label}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.66)",
                          fontSize: "0.88rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            className="hope-card-premium"
            sx={{
              p: { xs: 2.6, md: 3.2 },
              backgroundColor: tokens.color.warmWhite,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.5 }}
            >
              <DescriptionRounded
                sx={{ color: tokens.color.hopeGoldDark, fontSize: 22 }}
              />
              <Typography
                sx={{
                  color: tokens.color.graphiteMuted,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.72rem",
                }}
              >
                {copy.reportsTitle}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: tokens.color.graphiteSoft,
                lineHeight: 1.75,
                mb: 2.8,
              }}
            >
              {copy.reportsIntro}
            </Typography>

            <Box sx={{ display: "grid", gap: 1.2 }}>
              {copy.reports.map((report, index) => {
                const active = activeReport === index;
                return (
                  <Box
                    key={`${report.year}-${report.title}`}
                    component="button"
                    type="button"
                    onClick={() => setActiveReport(index)}
                    sx={{
                      appearance: "none",
                      width: "100%",
                      p: 0,
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "76px 1fr auto",
                        gap: 1.5,
                        alignItems: "center",
                        p: 1.4,
                        borderRadius: tokens.radius.md,
                        border: `1px solid ${active ? tokens.color.hopeGold : tokens.color.line}`,
                        background: active
                          ? tokens.color.hopeGoldPale
                          : "rgba(251,246,234,0.42)",
                        boxShadow: active ? tokens.shadow.gold : "none",
                        transform: active
                          ? "translateY(-1px)"
                          : "translateY(0)",
                        transition: `all 280ms ${tokens.easing.premium}`,
                        "&:hover": {
                          borderColor: tokens.color.hopeGold,
                          transform: "translateY(-2px)",
                          boxShadow: tokens.shadow.subtle,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 88,
                          borderRadius: tokens.radius.sm,
                          background: `linear-gradient(145deg, ${tokens.color.graphiteDark}, ${tokens.color.graphite})`,
                          color: tokens.color.hopeGold,
                          display: "grid",
                          placeItems: "center",
                          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)",
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <FilePresentRounded sx={{ fontSize: 20 }} />
                          <Typography
                            sx={{
                              fontFamily: tokens.font.display,
                              fontWeight: 900,
                              fontSize: "0.9rem",
                            }}
                          >
                            {report.year}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: tokens.color.graphiteMuted,
                            fontSize: "0.76rem",
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            mb: 0.5,
                          }}
                        >
                          {report.type}
                        </Typography>
                        <Typography
                          sx={{
                            color: tokens.color.graphite,
                            fontWeight: 950,
                            fontFamily: tokens.font.display,
                            lineHeight: 1.18,
                          }}
                        >
                          {report.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: tokens.color.graphiteSoft,
                            fontSize: "0.88rem",
                            lineHeight: 1.45,
                            mt: 0.5,
                          }}
                        >
                          {report.description}
                        </Typography>
                      </Box>
                      <Chip
                        label={report.status}
                        size="small"
                        sx={{
                          display: { xs: "none", sm: "inline-flex" },
                          color: tokens.color.graphite,
                          backgroundColor: active
                            ? tokens.color.hopeGoldSoft
                            : tokens.color.warmWhite,
                          fontWeight: 900,
                        }}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Button
              endIcon={<ArrowForwardRounded />}
              href="/transparencia"
              sx={{
                mt: 2.5,
                color: tokens.color.graphite,
                fontWeight: 900,
                textTransform: "none",
              }}
            >
              {copy.viewReport}: {featuredReport.year}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box
            className="hope-card"
            sx={{
              p: { xs: 2.6, md: 3.3 },
              backgroundColor: tokens.color.warmWhite,
            }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.5 }}
            >
              <InsertChartRounded
                sx={{ color: tokens.color.hopeGoldDark, fontSize: 22 }}
              />
              <Typography
                sx={{
                  color: tokens.color.graphiteMuted,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.72rem",
                }}
              >
                {copy.governanceTitle}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: tokens.color.graphite,
                fontSize: { xs: "1.7rem", md: "2.05rem" },
                mb: 1.5,
              }}
            >
              {copy.legitimacyTitle}
            </Typography>
            <Typography
              sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.8, mb: 2 }}
            >
              {copy.legitimacyIntro}
            </Typography>
            <Typography
              sx={{
                color: tokens.color.graphiteMuted,
                lineHeight: 1.75,
                mb: 3,
              }}
            >
              {copy.governanceCopy}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardRounded />}
                href="/transparencia"
              >
                {copy.ctaPrimary}
              </Button>
              <Button
                variant="outlined"
                startIcon={<LockRounded />}
                href="mailto:info@newhopeopportunities.org"
              >
                {copy.ctaSecondary}
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: 1.5,
            }}
          >
            {copy.signals.map(signal => {
              const SignalIcon = signal.icon;
              return (
                <Box
                  key={signal.title}
                  className="hope-card"
                  sx={{
                    p: 2.2,
                    backgroundColor: "rgba(255,255,255,0.78)",
                    transition: `all 280ms ${tokens.easing.premium}`,
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: tokens.shadow.soft,
                      borderColor: tokens.color.hopeGold,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1.2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: tokens.radius.pill,
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: tokens.color.hopeGoldPale,
                        color: tokens.color.hopeGoldDark,
                      }}
                    >
                      <SignalIcon sx={{ fontSize: 19 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.74rem",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: tokens.color.graphiteMuted,
                      }}
                    >
                      {signal.meta}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: tokens.font.display,
                      fontWeight: 900,
                      fontSize: "1.05rem",
                      color: tokens.color.graphite,
                      mb: 0.8,
                    }}
                  >
                    {signal.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: tokens.color.graphiteSoft,
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {signal.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
