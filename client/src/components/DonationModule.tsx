import { useMemo, useState, type ElementType } from "react";
import {
  AutoStoriesRounded,
  CheckCircleRounded,
  FavoriteRounded,
  LockRounded,
  PublicRounded,
  ReceiptLongRounded,
  RestaurantRounded,
  SchoolRounded,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";

type Language = "es" | "en";
type GivingMode = "monthly" | "once";

type DonationModuleProps = {
  language: Language;
};

type AmountOption = {
  amount: number;
  pillar: string;
  title: string;
  description: string;
  signal: string;
  icon: ElementType;
};

const content = {
  es: {
    eyebrow: "",
    title: "Convierte tu generosidad en una oportunidad visible.",
    subtitle:
      "Elige cómo quieres acompañar. Cada monto se traduce en un pilar concreto de educación, bienestar y futuro para un niño de la Rivera Hernández.",
    monthly: "",
    once: "Donación única",
    monthlyNote:
      "Sostén el proceso completo: aula, alimento, acompañamiento y esperanza constante.",
    onceNote:
      "Impulsa una necesidad puntual con impacto inmediato y transparente.",
    chooseAmount: "Elige un monto",
    customAmount: "Monto personalizado",
    customPlaceholder: "Escribe otro monto",
    selectedImpact: "Tu apoyo se transforma en",
    impactIntro: "Con este aporte estás activando",
    perMonth: "al mes",
    oneTime: "una vez",
    primaryCta: "",
    secondaryCta: "Hacer donación única",
    trustTitle: "Donar con confianza",
    trustItems: [
      { label: "Conexión encriptada segura", icon: LockRounded },
      { label: "Uso de fondos trazable", icon: ReceiptLongRounded },
      { label: "Reportes anuales disponibles", icon: CheckCircleRounded },
      { label: "Deducibilidad fiscal disponible", icon: PublicRounded },
    ],
    closeCopy:
      "Tu donación no se queda en una cifra. Se convierte en clases, nutrición, tecnología y una red de adultos que no suelta la historia de cada niño.",
    amounts: {
      monthly: [
        {
          amount: 25,
          pillar: "Nutrición y permanencia",
          title: "Un mes con más fuerza para aprender",
          description:
            "Tu apoyo ayuda a sostener alimento, materiales esenciales y condiciones dignas para que un niño permanezca en el aula.",
          signal: "Bienestar que sostiene la asistencia",
          icon: RestaurantRounded,
        },
        {
          amount: 50,
          pillar: "Inglés que abre el mundo",
          title: "Voz y confianza en dos idiomas",
          description:
            "Acompañas clases bilingües, práctica guiada y recursos para que un estudiante pueda comunicarse con más seguridad.",
          signal: "Comunicación como puerta internacional",
          icon: AutoStoriesRounded,
        },
        {
          amount: 100,
          pillar: "Tecnología para crear futuro",
          title: "Primeros proyectos con mirada global",
          description:
            "Impulsas acceso a tecnología, pensamiento creativo y experiencias para que los niños diseñen, prueben y construyan.",
          signal: "Creación digital desde la Rivera Hernández",
          icon: SchoolRounded,
        },
      ],
      once: [
        {
          amount: 30,
          pillar: "Materiales y nutrición",
          title: "Un impulso inmediato para llegar listo al aula",
          description:
            "Tu donación cubre recursos esenciales que ayudan a que el aprendizaje suceda con más dignidad desde esta semana.",
          signal: "Apoyo concreto de corto plazo",
          icon: RestaurantRounded,
        },
        {
          amount: 75,
          pillar: "Acompañamiento educativo",
          title: "Una historia escuchada y sostenida",
          description:
            "Fortaleces seguimiento, tutoría y presencia adulta para que un estudiante no camine solo en su proceso.",
          signal: "Cuidado humano que evita la deserción",
          icon: FavoriteRounded,
        },
        {
          amount: 150,
          pillar: "Educación técnica con dignidad",
          title: "Herramientas para construir autonomía",
          description:
            "Apoyas experiencias técnicas y recursos prácticos que pueden convertirse en oficio, servicio e ingreso futuro.",
          signal: "Habilidades reales para una vida con opciones",
          icon: VolunteerActivismRounded,
        },
      ],
    },
  },
  en: {
    eyebrow: "Sponsor a story",
    title: "Turn your generosity into visible opportunity.",
    subtitle:
      "Choose how you want to walk alongside a child. Every amount becomes a concrete pillar of education, wellbeing, and future in Rivera Hernández.",
    monthly: "Sponsor monthly",
    once: "One-time donation",
    monthlyNote:
      "Sustain the full journey: classroom, meals, mentoring, and steady hope.",
    onceNote: "Support an immediate need with clear and transparent impact.",
    chooseAmount: "Choose an amount",
    customAmount: "Custom amount",
    customPlaceholder: "Enter another amount",
    selectedImpact: "Your support becomes",
    impactIntro: "With this gift you are activating",
    perMonth: "per month",
    oneTime: "one time",
    primaryCta: "Sponsor this story",
    secondaryCta: "Make a one-time gift",
    trustTitle: "Give with confidence",
    trustItems: [
      { label: "Secure encrypted connection", icon: LockRounded },
      { label: "Traceable use of funds", icon: ReceiptLongRounded },
      { label: "Annual reports available", icon: CheckCircleRounded },
      { label: "Tax deductibility available", icon: PublicRounded },
    ],
    closeCopy:
      "Your donation does not remain a number. It becomes classes, nutrition, technology, and a network of adults who keep holding each child’s story.",
    amounts: {
      monthly: [
        {
          amount: 25,
          pillar: "Nutrition and attendance",
          title: "A month with more strength to learn",
          description:
            "Your support helps sustain meals, essential materials, and dignified conditions so a child can remain in the classroom.",
          signal: "Wellbeing that supports attendance",
          icon: RestaurantRounded,
        },
        {
          amount: 50,
          pillar: "English that opens the world",
          title: "Voice and confidence in two languages",
          description:
            "You accompany bilingual classes, guided practice, and resources so a student can communicate with greater confidence.",
          signal: "Communication as an international doorway",
          icon: AutoStoriesRounded,
        },
        {
          amount: 100,
          pillar: "Technology to create the future",
          title: "First projects with a global outlook",
          description:
            "You enable access to technology, creative thinking, and experiences where children can design, test, and build.",
          signal: "Digital creation from Rivera Hernández",
          icon: SchoolRounded,
        },
      ],
      once: [
        {
          amount: 30,
          pillar: "Materials and nutrition",
          title: "An immediate boost to arrive ready for class",
          description:
            "Your gift covers essential resources that help learning happen with greater dignity starting this week.",
          signal: "Concrete short-term support",
          icon: RestaurantRounded,
        },
        {
          amount: 75,
          pillar: "Educational accompaniment",
          title: "A story heard and sustained",
          description:
            "You strengthen follow-up, tutoring, and adult presence so a student does not walk the journey alone.",
          signal: "Human care that helps prevent dropout",
          icon: FavoriteRounded,
        },
        {
          amount: 150,
          pillar: "Technical education with dignity",
          title: "Tools to build autonomy",
          description:
            "You support technical experiences and practical resources that can become craft, service, and future income.",
          signal: "Real skills for a life with options",
          icon: VolunteerActivismRounded,
        },
      ],
    },
  },
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    monthly: string;
    once: string;
    monthlyNote: string;
    onceNote: string;
    chooseAmount: string;
    customAmount: string;
    customPlaceholder: string;
    selectedImpact: string;
    impactIntro: string;
    perMonth: string;
    oneTime: string;
    primaryCta: string;
    secondaryCta: string;
    trustTitle: string;
    trustItems: Array<{ label: string; icon: ElementType }>;
    closeCopy: string;
    amounts: Record<GivingMode, AmountOption[]>;
  }
>;

export function DonationModule({ language }: DonationModuleProps) {
  const copy = content[language];
  const [mode, setMode] = useState<GivingMode>("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(
    content[language].amounts.monthly[1].amount
  );
  const [customAmount, setCustomAmount] = useState("");

  const amountOptions = copy.amounts[mode];

  const selectedImpact = useMemo(() => {
    const numericCustom = Number(customAmount);
    const effectiveAmount =
      customAmount && numericCustom > 0 ? numericCustom : selectedAmount;
    const directMatch = amountOptions.find(
      option => option.amount === effectiveAmount
    );

    if (directMatch) return directMatch;
    if (effectiveAmount <= amountOptions[0].amount) return amountOptions[0];
    if (effectiveAmount <= amountOptions[1].amount) return amountOptions[1];
    return amountOptions[2];
  }, [amountOptions, customAmount, selectedAmount]);

  const selectedFrequency = mode === "monthly" ? copy.perMonth : copy.oneTime;
  const SelectedIcon = selectedImpact.icon;

  const handleModeChange = (nextMode: GivingMode) => {
    setMode(nextMode);
    setCustomAmount("");
    setSelectedAmount(content[language].amounts[nextMode][1].amount);
  };

  return (
    <Box
      id="donar"
      component="section"
      className="section-shell"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${tokens.color.warmWhite} 0%, ${tokens.color.ivory} 44%, ${tokens.color.warmSand} 100%)`,
        borderTop: `1px solid ${tokens.color.line}`,
        borderBottom: `1px solid ${tokens.color.line}`,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "10% auto auto -12%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(242, 185, 0, 0.16), transparent 68%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            maxWidth: 840,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box className="hope-eyebrow" sx={{ mx: "auto", mb: 2 }}>
            <VolunteerActivismRounded sx={{ fontSize: 16 }} />
            {copy.eyebrow}
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: tokens.color.graphite,
              maxWidth: 760,
              mx: "auto",
              mb: 2,
            }}
          >
            {copy.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: tokens.color.graphiteSoft,
              maxWidth: 720,
              mx: "auto",
              fontSize: { xs: "1.05rem", md: "1.16rem" },
              lineHeight: 1.85,
            }}
          >
            {copy.subtitle}
          </Typography>
        </Box>

        <Box
          className="hope-card-premium"
          sx={{
            p: { xs: 2.2, sm: 3, md: 4 },
            background: `linear-gradient(145deg, rgba(255,255,255,0.96), rgba(255,247,219,0.42))`,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.02fr 0.98fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              p: { xs: 2.2, md: 3 },
              borderRadius: tokens.radius.lg,
              border: `1px solid ${tokens.color.line}`,
              backgroundColor: "rgba(255,255,255,0.74)",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                p: 0.6,
                mb: 3,
                borderRadius: tokens.radius.pill,
                backgroundColor: tokens.color.warmSand,
                border: `1px solid ${tokens.color.line}`,
              }}
            >
              {(["monthly", "once"] as GivingMode[]).map(item => {
                const isActive = mode === item;
                return (
                  <Button
                    key={item}
                    onClick={() => handleModeChange(item)}
                    sx={{
                      borderRadius: tokens.radius.pill,
                      py: 1.2,
                      px: { xs: 1.4, md: 2.2 },
                      color: isActive
                        ? tokens.color.warmWhite
                        : tokens.color.graphiteSoft,
                      backgroundColor: isActive
                        ? tokens.color.graphite
                        : "transparent",
                      boxShadow: isActive ? tokens.shadow.subtle : "none",
                      fontFamily: tokens.font.body,
                      fontWeight: 800,
                      textTransform: "none",
                      transition: `all 280ms ${tokens.easing.premium}`,
                      "&:hover": {
                        backgroundColor: isActive
                          ? tokens.color.graphiteDark
                          : "rgba(242, 185, 0, 0.10)",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    {item === "monthly" ? copy.monthly : copy.once}
                  </Button>
                );
              })}
            </Box>

            <Typography
              sx={{
                color: tokens.color.graphiteSoft,
                mb: 3,
                fontSize: "0.98rem",
                lineHeight: 1.75,
              }}
            >
              {mode === "monthly" ? copy.monthlyNote : copy.onceNote}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: tokens.color.graphite,
                fontSize: { xs: "1.35rem", md: "1.55rem" },
                mb: 2,
              }}
            >
              {copy.chooseAmount}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 1.4,
                mb: 2.2,
              }}
            >
              {amountOptions.map(option => {
                const isActive =
                  !customAmount && selectedAmount === option.amount;
                const OptionIcon = option.icon;
                return (
                  <Box
                    key={`${mode}-${option.amount}`}
                    component="button"
                    type="button"
                    onClick={() => {
                      setSelectedAmount(option.amount);
                      setCustomAmount("");
                    }}
                    sx={{
                      appearance: "none",
                      border: `1px solid ${isActive ? tokens.color.hopeGold : tokens.color.line}`,
                      borderRadius: tokens.radius.md,
                      background: isActive
                        ? `linear-gradient(145deg, ${tokens.color.hopeGoldPale}, rgba(255,255,255,0.96))`
                        : "rgba(255,255,255,0.76)",
                      p: 2,
                      textAlign: "left",
                      cursor: "pointer",
                      boxShadow: isActive
                        ? tokens.shadow.gold
                        : tokens.shadow.subtle,
                      transform: isActive
                        ? "translateY(-2px) scale(1.015)"
                        : "translateY(0) scale(1)",
                      transition: `all 300ms ${tokens.easing.premium}`,
                      "&:hover": {
                        borderColor: tokens.color.hopeGold,
                        transform: "translateY(-3px) scale(1.018)",
                        boxShadow: tokens.shadow.gold,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1.4,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: tokens.font.display,
                          color: tokens.color.graphite,
                          fontWeight: 900,
                          fontSize: "2rem",
                          letterSpacing: "-0.05em",
                        }}
                      >
                        ${option.amount}
                      </Typography>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: tokens.radius.pill,
                          color: tokens.color.graphite,
                          backgroundColor: isActive
                            ? tokens.color.hopeGoldSoft
                            : tokens.color.hopeGoldPale,
                        }}
                      >
                        <OptionIcon sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        color: tokens.color.graphite,
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        lineHeight: 1.35,
                      }}
                    >
                      {option.pillar}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <TextField
              fullWidth
              label={copy.customAmount}
              placeholder={`$ ${copy.customPlaceholder}`}
              value={customAmount}
              type="number"
              onChange={event => setCustomAmount(event.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: tokens.radius.md,
                  backgroundColor: "rgba(255,255,255,0.74)",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              p: { xs: 2.4, md: 3.4 },
              borderRadius: tokens.radius.lg,
              background: `linear-gradient(145deg, ${tokens.color.graphite} 0%, ${tokens.color.graphiteDark} 100%)`,
              color: tokens.color.warmWhite,
              overflow: "hidden",
              boxShadow: tokens.shadow.elevated,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: { xs: 500, md: "auto" },
              "&::after": {
                content: '""',
                position: "absolute",
                right: -80,
                top: -80,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "rgba(242,185,0,0.18)",
                filter: "blur(1px)",
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Chip
                label={`${customAmount || selectedAmount} · ${selectedFrequency}`}
                sx={{
                  mb: 3,
                  color: tokens.color.graphite,
                  backgroundColor: tokens.color.hopeGold,
                  fontFamily: tokens.font.body,
                  fontWeight: 900,
                  borderRadius: tokens.radius.pill,
                }}
              />

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.72rem",
                  mb: 1,
                }}
              >
                {copy.selectedImpact}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: tokens.color.warmWhite,
                  fontSize: { xs: "2rem", md: "2.55rem" },
                  lineHeight: 1.04,
                  mb: 2,
                }}
              >
                {selectedImpact.title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.85,
                  fontSize: "1.02rem",
                  mb: 3,
                }}
              >
                {selectedImpact.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  p: 2,
                  borderRadius: tokens.radius.md,
                  border: "1px solid rgba(255,255,255,0.13)",
                  backgroundColor: "rgba(255,255,255,0.07)",
                  mb: 3,
                  transition: `all 300ms ${tokens.easing.premium}`,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.10)",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: tokens.radius.pill,
                    backgroundColor: tokens.color.hopeGold,
                    color: tokens.color.graphite,
                  }}
                >
                  <SelectedIcon sx={{ fontSize: 23 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.62)",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      mb: 0.4,
                    }}
                  >
                    {copy.impactIntro}
                  </Typography>
                  <Typography
                    sx={{
                      color: tokens.color.warmWhite,
                      fontWeight: 900,
                      fontFamily: tokens.font.display,
                      lineHeight: 1.22,
                    }}
                  >
                    {selectedImpact.pillar}
                  </Typography>
                  <Typography
                    sx={{
                      color: tokens.color.hopeGoldSoft,
                      fontSize: "0.9rem",
                      mt: 0.6,
                    }}
                  >
                    {selectedImpact.signal}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.74)",
                  lineHeight: 1.75,
                  mb: 2.5,
                }}
              >
                {copy.closeCopy}
              </Typography>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.65,
                  borderRadius: tokens.radius.pill,
                  color: tokens.color.graphite,
                  backgroundColor: tokens.color.hopeGold,
                  boxShadow: "0 18px 42px rgba(0,0,0,0.18)",
                  fontFamily: tokens.font.body,
                  fontWeight: 900,
                  fontSize: "1rem",
                  textTransform: "none",
                  transition: `all 300ms ${tokens.easing.premium}`,
                  "&:hover": {
                    backgroundColor: tokens.color.hopeGoldSoft,
                    transform: "translateY(-2px)",
                    boxShadow: "0 24px 54px rgba(0,0,0,0.24)",
                  },
                }}
              >
                {mode === "monthly" ? copy.primaryCta : copy.secondaryCta}
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 1.4,
            mt: 3,
          }}
        >
          {copy.trustItems.map(item => {
            const TrustIcon = item.icon;
            return (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2,
                  py: 1.6,
                  borderRadius: tokens.radius.md,
                  backgroundColor: "rgba(255,255,255,0.72)",
                  border: `1px solid ${tokens.color.line}`,
                  color: tokens.color.graphiteSoft,
                  boxShadow: tokens.shadow.subtle,
                }}
              >
                <TrustIcon
                  sx={{ color: tokens.color.hopeGoldDark, fontSize: 18 }}
                />
                <Typography
                  sx={{
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
