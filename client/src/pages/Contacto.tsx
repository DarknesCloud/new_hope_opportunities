import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import contactGraduation from "@/assets/photos/contacto.jpg";
import { designTokens as tokens } from "@/theme/designTokens";

interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

type ContactCopy = {
  eyebrow: string;
  title: string;
  body: string;
  badge: string;
  formTitle: string;
  formBody: string;
  fields: {
    fullName: string;
    email: string;
    organization: string;
    subject: string;
    message: string;
  };
  submit: string;
  submitted: string;
  contactTitle: string;
  contactBody: string;
  cards: Array<{ title: string; body: string }>;
  trustTitle: string;
  trustItems: string[];
  officeLabel: string;
  responseLabel: string;
  emailLabel: string;
};

const contactCopy: Record<"es" | "en", ContactCopy> = {
  es: {
    eyebrow: "Contacto institucional",
    title: "Confianza construida sobre acciones, no sobre promesas.",
    body: "Esta página está diseñada para fundaciones, empresas, iglesias, donantes individuales y aliados educativos que desean contactar a New Hope Opportunities Honduras con un estándar de confianza internacional.",
    badge: "Respuesta prioritaria para aliados y donantes",
    formTitle: "Escríbenos con confianza",
    formBody:
      "Comparte tu interés y nuestro equipo podrá orientarte sobre programas, donaciones, reportes, visitas institucionales o soporte fiscal disponible.",
    fields: {
      fullName: "Nombre completo",
      email: "Correo electrónico",
      organization: "Organización o empresa",
      subject: "Motivo de contacto",
      message: "Mensaje",
    },
    submit: "Enviar mensaje",
    submitted: "Mensaje preparado para seguimiento",
    contactTitle: "Canales de atención",
    contactBody:
      "Centralizamos las solicitudes para responder con orden, trazabilidad y acompañamiento adecuado para cada tipo de aliado.",
    cards: [
      {
        title: "Alianzas y fundaciones",
        body: "Cooperación estratégica, respaldo institucional y oportunidades de inversión social.",
      },

      {
        title: "Empresas y voluntariado",
        body: "Propuestas de responsabilidad social, mentoría técnica y apoyo profesional.",
      },
    ],
    trustTitle: "Señales de confianza",
    trustItems: [
      "Comunicación institucional segura",
      "Trazabilidad de solicitudes",
      "Soporte fiscal disponible cuando aplique",
      "Reportes financieros y de impacto bajo solicitud",
    ],
    officeLabel: "Ubicación",
    responseLabel: "Teléfono",
    emailLabel: "Correo",
  },
  en: {
    eyebrow: "Institutional contact",
    title: "Trust built on actions, not promises.",
    body: "This page is designed for foundations, companies, churches, individual donors, and educational partners who want to contact New Hope Opportunities Honduras with an international trust standard.",
    badge: "Priority response for partners and donors",
    formTitle: "Write to us with confidence",
    formBody:
      "Share your interest and our team can guide you on programs, donations, reports, institutional visits, or available tax support.",
    fields: {
      fullName: "Full name",
      email: "Email address",
      organization: "Organization or company",
      subject: "Reason for contact",
      message: "Message",
    },
    submit: "Send message",
    submitted: "Message prepared for follow-up",
    contactTitle: "Contact channels",
    contactBody:
      "We centralize requests to respond with order, traceability, and appropriate accompaniment for each partner type.",
    cards: [
      {
        title: "Foundations and partnerships",
        body: "Strategic cooperation, institutional backing, and social investment opportunities.",
      },
      {
        title: "Donors and sponsorship",
        body: "Guidance on monthly support, one-time donations, and impact story follow-up.",
      },
      {
        title: "Companies and volunteering",
        body: "Corporate responsibility proposals, technical mentorship, and professional support.",
      },
    ],
    trustTitle: "Trust signals",
    trustItems: [
      "Secure institutional communication",
      "Request traceability",
      "Tax support available when applicable",
      "Financial and impact reports upon request",
    ],
    officeLabel: "Location",
    responseLabel: "Response time",
    emailLabel: "Email",
  },
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.color.warmWhite,
    fontFamily: tokens.font.body,
    transition: `all 220ms ${tokens.easing.premium}`,
    "& fieldset": { borderColor: tokens.color.lineStrong },
    "&:hover fieldset": { borderColor: "rgba(242,185,0,0.55)" },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(242,185,0,0.10)",
    },
    "&.Mui-focused fieldset": {
      borderColor: tokens.color.hopeGold,
      borderWidth: 1.5,
    },
  },
  "& .MuiInputLabel-root": {
    fontFamily: tokens.font.body,
    color: tokens.color.graphiteMuted,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: tokens.color.graphite,
  },
  "& .MuiOutlinedInput-input, & .MuiOutlinedInput-inputMultiline": {
    fontFamily: tokens.font.body,
    color: tokens.color.graphite,
  },
};

export function Contacto() {
  const { language } = useLanguage();
  const copy = contactCopy[language];
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData(current => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 2800);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: tokens.color.ivory }}>
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `linear-gradient(90deg, rgba(28,28,27,0.96) 0%, rgba(28,28,27,0.86) 48%, rgba(28,28,27,0.66) 100%), url(${contactGraduation})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center center", md: "center 42%" },
          color: tokens.color.warmWhite,
          py: { xs: 8, md: 11 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 20%, rgba(242,185,0,0.16), transparent 32%), radial-gradient(circle at 86% 8%, rgba(255,255,255,0.08), transparent 28%)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 900 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.8,
                mb: 2.5,
                borderRadius: tokens.radius.pill,
                border: "1px solid rgba(242,185,0,0.28)",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <ShieldCheck size={16} color={tokens.color.hopeGold} />
              <Typography
                sx={{
                  fontFamily: tokens.font.body,
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {copy.eyebrow}
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.35rem", md: "4.1rem" },
                lineHeight: 1.03,
                maxWidth: 980,
                mb: 2.4,
                color: tokens.color.warmWhite,
              }}
            >
              {copy.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: tokens.font.body,
                color: "rgba(255,255,255,0.74)",
                fontSize: { xs: "1rem", md: "1.12rem" },
                lineHeight: 1.85,
                maxWidth: 760,
              }}
            >
              {copy.body}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.08fr 0.92fr" },
              gap: { xs: 4, md: 5 },
              alignItems: "start",
            }}
          >
            <Box
              className="hope-card-premium"
              component="form"
              onSubmit={handleSubmit}
              sx={{ p: { xs: 3, md: 4.5 } }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 1.5,
                }}
              >
                <Mail size={20} color={tokens.color.hopeGoldDark} />
                <Typography
                  sx={{
                    color: tokens.color.hopeGoldDark,
                    fontFamily: tokens.font.body,
                    fontSize: "0.78rem",
                    fontWeight: 900,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  {copy.badge}
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: tokens.color.graphite,
                  fontSize: { xs: "1.85rem", md: "2.45rem" },
                  mb: 1.5,
                }}
              >
                {copy.formTitle}
              </Typography>
              <Typography
                sx={{
                  color: tokens.color.graphiteSoft,
                  fontFamily: tokens.font.body,
                  lineHeight: 1.78,
                  mb: 3.2,
                  maxWidth: 680,
                }}
              >
                {copy.formBody}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                <TextField
                  required
                  name="fullName"
                  label={copy.fields.fullName}
                  value={formData.fullName}
                  onChange={handleChange}
                  sx={fieldSx}
                />
                <TextField
                  required
                  name="email"
                  type="email"
                  label={copy.fields.email}
                  value={formData.email}
                  onChange={handleChange}
                  sx={fieldSx}
                />
                <TextField
                  name="organization"
                  label={copy.fields.organization}
                  value={formData.organization}
                  onChange={handleChange}
                  sx={fieldSx}
                />
                <TextField
                  required
                  name="subject"
                  label={copy.fields.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  sx={fieldSx}
                />
                <TextField
                  required
                  multiline
                  minRows={5}
                  name="message"
                  label={copy.fields.message}
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ ...fieldSx, gridColumn: { xs: "auto", md: "1 / -1" } }}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                endIcon={
                  submitted ? <CheckCircle2 size={18} /> : <Send size={18} />
                }
                sx={{
                  mt: 3,
                  minHeight: 52,
                  px: 3.5,
                  backgroundColor: tokens.color.graphite,
                  color: tokens.color.warmWhite,
                  "&:hover": {
                    backgroundColor: tokens.color.graphiteDark,
                    transform: "translateY(-2px)",
                    boxShadow: tokens.shadow.elevated,
                  },
                }}
              >
                {submitted ? copy.submitted : copy.submit}
              </Button>
            </Box>

            <Box sx={{ display: "grid", gap: 2 }}>
              <Box
                className="hope-card-base"
                sx={{
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: tokens.color.graphite,
                  color: tokens.color.warmWhite,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: tokens.color.warmWhite,
                    fontSize: "1.65rem",
                    mb: 1.4,
                  }}
                >
                  {copy.contactTitle}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.68)",
                    fontFamily: tokens.font.body,
                    lineHeight: 1.75,
                    mb: 3,
                  }}
                >
                  {copy.contactBody}
                </Typography>
                <Box sx={{ display: "grid", gap: 1.5 }}>
                  <Box
                    sx={{ display: "flex", gap: 1.4, alignItems: "flex-start" }}
                  >
                    <MapPin
                      size={18}
                      color={tokens.color.hopeGold}
                      style={{ marginTop: 3 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: tokens.font.body,
                          fontSize: "0.78rem",
                          fontWeight: 900,
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                          letterSpacing: "0.10em",
                        }}
                      >
                        {copy.officeLabel}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: tokens.font.body,
                          color: "rgba(255,255,255,0.78)",
                          lineHeight: 1.6,
                        }}
                      >
                        Rivera Hernández, San Pedro Sula, Honduras
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: 1.4, alignItems: "flex-start" }}
                  >
                    <Clock3
                      size={18}
                      color={tokens.color.hopeGold}
                      style={{ marginTop: 3 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: tokens.font.body,
                          fontSize: "0.78rem",
                          fontWeight: 900,
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                          letterSpacing: "0.10em",
                        }}
                      >
                        {copy.responseLabel}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: tokens.font.body,
                          color: "rgba(255,255,255,0.78)",
                          lineHeight: 1.6,
                        }}
                      >
                        (530) 566-4003
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: 1.4, alignItems: "flex-start" }}
                  >
                    <Mail
                      size={18}
                      color={tokens.color.hopeGold}
                      style={{ marginTop: 3 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: tokens.font.body,
                          fontSize: "0.78rem",
                          fontWeight: 900,
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                          letterSpacing: "0.10em",
                        }}
                      >
                        {copy.emailLabel}
                      </Typography>
                      <Link
                        href="mailto:marneco@nhohonduras.org"
                        sx={{
                          color: tokens.color.hopeGoldSoft,
                          textDecoration: "none",
                          fontFamily: tokens.font.body,
                        }}
                      >
                        marneco@nhohonduras.org
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(3, 1fr)",
                    lg: "1fr",
                  },
                  gap: 1.4,
                }}
              >
                {copy.cards.map(card => (
                  <Box
                    key={card.title}
                    className="hope-card-base"
                    sx={{
                      p: 2.4,
                      transition: `all 260ms ${tokens.easing.premium}`,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: "rgba(242,185,0,0.35)",
                        boxShadow: tokens.shadow.soft,
                      },
                    }}
                  >
                    <Building2 size={18} color={tokens.color.hopeGoldDark} />
                    <Typography
                      sx={{
                        color: tokens.color.graphite,
                        fontFamily: tokens.font.display,
                        fontWeight: 850,
                        mt: 1.2,
                        mb: 0.7,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: tokens.color.graphiteSoft,
                        fontFamily: tokens.font.body,
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {card.body}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box className="hope-card-base" sx={{ p: 2.6 }}>
                <Typography
                  sx={{
                    color: tokens.color.graphite,
                    fontFamily: tokens.font.display,
                    fontWeight: 850,
                    mb: 1.5,
                  }}
                >
                  {copy.trustTitle}
                </Typography>
                <Box sx={{ display: "grid", gap: 1 }}>
                  {copy.trustItems.map(item => (
                    <Box
                      key={item}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <CheckCircle2
                        size={16}
                        color={tokens.color.hopeGoldDark}
                      />
                      <Typography
                        sx={{
                          color: tokens.color.graphiteSoft,
                          fontFamily: tokens.font.body,
                          fontSize: "0.9rem",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer language={language} />
    </Box>
  );
}
