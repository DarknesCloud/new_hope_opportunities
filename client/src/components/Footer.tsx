import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowRight,
  Facebook,
  FileCheck2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { designTokens as tokens } from "@/theme/designTokens";

interface FooterProps {
  language?: "es" | "en";
}

type Copy = {
  preFooterEyebrow: string;
  preFooterTitle: string;
  preFooterBody: string;
  newsletterPlaceholder: string;
  newsletterCta: string;
  newsletterSuccess: string;
  donateCta: string;
  brandMission: string;
  socialLabel: string;
  navigationTitle: string;
  legalTitle: string;
  contactTitle: string;
  transparencyTitle: string;
  transparencyBody: string;
  privacy: string;
  terms: string;
  financialReports: string;
  fiscalDocs: string;
  nav: Array<{ label: string; href: string }>;
  legal: Array<{ label: string; href: string }>;
  contactLines: {
    location: string;
    email: string;
  };
  copyright: string;
  closing: string;
};

const footerCopy: Record<"es" | "en", Copy> = {
  es: {
    preFooterEyebrow: "Historias de Impacto",
    preFooterTitle:
      "Recibe nuestro reporte exclusivo y mantente al día suscribiéndote al boletín mensual.",
    preFooterBody:
      "Una actualización sobria para donantes, fundaciones y empresas que desean seguir de cerca el avance educativo, nutricional y técnico de los estudiantes.",
    newsletterPlaceholder: "Correo institucional o personal",
    newsletterCta: "Suscribirme",
    newsletterSuccess: "Suscripción registrada",
    donateCta: "",
    brandMission:
      "Educación, nutrición e inglés como puertas concretas hacia una oportunidad de vida.",
    socialLabel: "Redes sociales",
    navigationTitle: "Navegación",
    legalTitle: "Legalidad y confianza",
    contactTitle: "Contacto institucional",
    transparencyTitle: "Rendición de cuentas",
    transparencyBody:
      "Fondos trazables, reportes financieros y soporte disponible para aliados internacionales.",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    financialReports: "Reportes financieros",
    fiscalDocs: "Soporte fiscal",
    nav: [
      { label: "Acerca de", href: "/acerca-de" },
      { label: "Quienes Somos", href: "/nosotros" },
      { label: "Misioneros", href: "/programas" },
      { label: "Alcance Comunitario", href: "/hope-builders" },
      { label: "Transparencia", href: "/transparencia" },
      { label: "Contacto", href: "/contacto" },
    ],
    legal: [
      { label: "Política de privacidad", href: "/privacidad" },
      { label: "Términos de uso", href: "/terminos" },
      { label: "Reportes financieros", href: "/transparencia" },
      { label: "Deducibilidad fiscal", href: "/transparencia" },
    ],
    contactLines: {
      location: "Rivera Hernández, San Pedro Sula, Honduras",
      email: "marnec@nhohonduras.org",
    },
    copyright:
      "New Hope Opportunities Honduras. Todos los derechos reservados.",
    closing: "Operamos con trazabilidad, gobernanza y cuidado humano.",
  },
  en: {
    preFooterEyebrow: "Impact Stories",
    preFooterTitle:
      "Receive our exclusive report and stay up to date by subscribing to the monthly newsletter.",
    preFooterBody:
      "A refined update for donors, foundations, and companies that want to follow students' educational, nutritional, and technical progress closely.",
    newsletterPlaceholder: "Institutional or personal email",
    newsletterCta: "Subscribe",
    newsletterSuccess: "Subscription registered",
    donateCta: "Sponsor a story",
    brandMission:
      "Education, nutrition, and English as concrete doors toward a life opportunity.",
    socialLabel: "Social media",
    navigationTitle: "Navigation",
    legalTitle: "Legal and trust",
    contactTitle: "Institutional contact",
    transparencyTitle: "Accountability",
    transparencyBody:
      "Traceable funds, financial reports, and support available for international partners.",
    privacy: "Privacy policy",
    terms: "Terms of use",
    financialReports: "Financial reports",
    fiscalDocs: "Tax support",
    nav: [
      { label: "About", href: "/acerca-de" },
      { label: "Who We Are", href: "/nosotros" },
      { label: "Missions Trip", href: "/programas" },
      { label: "Community Outreach", href: "/hope-builders" },
      { label: "Transparency", href: "/transparencia" },
      { label: "Contact", href: "/contacto" },
    ],
    legal: [
      { label: "Privacy policy", href: "/privacidad" },
      { label: "Terms of use", href: "/terminos" },
      { label: "Financial reports", href: "/transparencia" },
      { label: "Tax deductibility", href: "/transparencia" },
    ],
    contactLines: {
      location: "Rivera Hernández, San Pedro Sula, Honduras",
      email: "marnec@nhohonduras.org",
    },
    copyright: "New Hope Opportunities Honduras. All rights reserved.",
    closing: "We operate with traceability, governance, and human care.",
  },
};

const iconButtonSx = {
  width: 38,
  height: 38,
  borderRadius: tokens.radius.pill,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255,255,255,0.82)",
  border: "1px solid rgba(255,255,255,0.14)",
  backgroundColor: "rgba(255,255,255,0.055)",
  transition: `all 260ms ${tokens.easing.premium}`,
  "&:hover": {
    color: tokens.color.graphiteDark,
    backgroundColor: tokens.color.hopeGold,
    borderColor: tokens.color.hopeGold,
    transform: "translateY(-2px)",
    boxShadow: "0 14px 28px rgba(242, 185, 0, 0.20)",
  },
};

const footerLinkSx = {
  color: "rgba(255,255,255,0.68)",
  textDecoration: "none",
  fontFamily: tokens.font.body,
  fontSize: "0.93rem",
  lineHeight: 1.55,
  width: "fit-content",
  transition: `all 220ms ${tokens.easing.premium}`,
  "&:hover": {
    color: tokens.color.hopeGoldSoft,
    transform: "translateX(3px)",
  },
};

export function Footer({ language = "es" }: FooterProps) {
  const copy = footerCopy[language];
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: tokens.color.graphiteDark,
        color: tokens.color.warmWhite,
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(135deg, ${tokens.color.ivory} 0%, ${tokens.color.warmSand} 100%)`,
          borderTop: `1px solid ${tokens.color.line}`,
          borderBottom: `1px solid rgba(52,52,52,0.10)`,
          py: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            className="hope-card-premium"
            sx={{
              p: { xs: 3, md: 4.5 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.95fr" },
              gap: { xs: 3, md: 5 },
              alignItems: "center",
              background: `linear-gradient(135deg, rgba(255,255,255,0.96) 0%, ${tokens.color.hopeGoldPale} 180%)`,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: tokens.color.hopeGoldDark,
                  fontFamily: tokens.font.body,
                  fontSize: "0.78rem",
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  mb: 1.4,
                }}
              >
                {copy.preFooterEyebrow}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: tokens.color.graphite,
                  fontSize: { xs: "1.65rem", md: "2.1rem" },
                  lineHeight: 1.13,
                  maxWidth: 760,
                  mb: 1.5,
                }}
              >
                {copy.preFooterTitle}
              </Typography>
              <Typography
                sx={{
                  color: tokens.color.graphiteSoft,
                  fontFamily: tokens.font.body,
                  lineHeight: 1.75,
                  maxWidth: 680,
                }}
              >
                {copy.preFooterBody}
              </Typography>
            </Box>

            <Box sx={{ display: "grid", gap: 1.4 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
                  gap: 1.1,
                }}
              >
                <TextField
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder={copy.newsletterPlaceholder}
                  size="small"
                  type="email"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      minHeight: 48,
                      borderRadius: tokens.radius.pill,
                      backgroundColor: tokens.color.warmWhite,
                      fontFamily: tokens.font.body,
                      transition: `all 220ms ${tokens.easing.premium}`,
                      "& fieldset": { borderColor: tokens.color.lineStrong },
                      "&:hover fieldset": {
                        borderColor: "rgba(242,185,0,0.52)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: tokens.color.hopeGold,
                        borderWidth: 1.5,
                      },
                    },
                    "& .MuiOutlinedInput-input::placeholder": {
                      color: tokens.color.graphiteMuted,
                      opacity: 1,
                      fontFamily: tokens.font.body,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={handleSubscribe}
                  endIcon={<ArrowRight size={17} />}
                  sx={{ minHeight: 48, px: 2.8, whiteSpace: "nowrap" }}
                >
                  {subscribed ? copy.newsletterSuccess : copy.newsletterCta}
                </Button>
              </Box>
              <Button
                variant="text"
                href="/#donar"
                sx={{
                  justifySelf: "start",
                  color: tokens.color.graphite,
                  fontWeight: 900,
                  textTransform: "none",
                  px: 0,
                  "&:hover": {
                    color: tokens.color.hopeGoldDark,
                    backgroundColor: "transparent",
                  },
                }}
              >
                {copy.donateCta}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.8fr 0.9fr 1fr" },
            gap: { xs: 4.5, md: 5 },
            alignItems: "start",
          }}
        >
          <Box>
            <Link
              href="/"
              aria-label="New Hope Opportunities Honduras"
              sx={{ display: "inline-flex", mb: 2.5 }}
            >
              <Box
                component="img"
                src="/new-hope-logo.png"
                alt="New Hope Opportunities Honduras"
                sx={{
                  width: { xs: 172, md: 204 },
                  height: "auto",
                  display: "block",
                }}
              />
            </Link>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.70)",
                fontFamily: tokens.font.body,
                lineHeight: 1.75,
                maxWidth: 320,
                mb: 2.6,
              }}
            >
              {copy.brandMission}
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.42)",
                fontFamily: tokens.font.body,
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 1.4,
              }}
            >
              {copy.socialLabel}
            </Typography>
            <Box sx={{ display: "flex", gap: 1.1 }}>
              <Link
                href="https://www.instagram.com/nhohonduras/"
                aria-label="Instagram"
                sx={iconButtonSx}
              >
                <Instagram size={17} />
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                color: tokens.color.warmWhite,
                fontFamily: tokens.font.display,
                fontWeight: 850,
                fontSize: "0.95rem",
                mb: 2.2,
              }}
            >
              {copy.navigationTitle}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.15 }}>
              {copy.nav.map(item => (
                <Link key={item.href} href={item.href} sx={footerLinkSx}>
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                color: tokens.color.warmWhite,
                fontFamily: tokens.font.display,
                fontWeight: 850,
                fontSize: "0.95rem",
                mb: 2.2,
              }}
            >
              {copy.legalTitle}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.15 }}>
              {copy.legal.map(item => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  sx={footerLinkSx}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                color: tokens.color.warmWhite,
                fontFamily: tokens.font.display,
                fontWeight: 850,
                fontSize: "0.95rem",
                mb: 2.2,
              }}
            >
              {copy.contactTitle}
            </Typography>
            <Box sx={{ display: "grid", gap: 1.6, mb: 2.4 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.3,
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                <MapPin
                  size={17}
                  color={tokens.color.hopeGold}
                  style={{ marginTop: 3, flexShrink: 0 }}
                />
                <Typography
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                  }}
                >
                  {copy.contactLines.location}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.3,
                  alignItems: "center",
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                <Mail
                  size={17}
                  color={tokens.color.hopeGold}
                  style={{ flexShrink: 0 }}
                />
                <Link
                  href={`mailto:${copy.contactLines.email}`}
                  sx={{ ...footerLinkSx, fontSize: "0.92rem" }}
                >
                  {copy.contactLines.email}
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                p: 2.2,
                borderRadius: tokens.radius.md,
                border: "1px solid rgba(242,185,0,0.18)",
                backgroundColor: "rgba(255,255,255,0.045)",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <ShieldCheck size={18} color={tokens.color.hopeGold} />
                <Typography
                  sx={{
                    fontFamily: tokens.font.display,
                    color: tokens.color.warmWhite,
                    fontWeight: 850,
                    fontSize: "0.92rem",
                  }}
                >
                  {copy.transparencyTitle}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.64)",
                  fontFamily: tokens.font.body,
                  fontSize: "0.86rem",
                  lineHeight: 1.65,
                }}
              >
                {copy.transparencyBody}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{ borderColor: "rgba(255,255,255,0.10)", my: { xs: 4, md: 5 } }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.46)",
              fontFamily: tokens.font.body,
              fontSize: "0.82rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            © 2026 {copy.copyright}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              color: tokens.color.hopeGold,
            }}
          >
            <FileCheck2 size={16} />
            <Typography
              sx={{
                color: "rgba(255,255,255,0.62)",
                fontFamily: tokens.font.body,
                fontSize: "0.82rem",
                fontWeight: 700,
              }}
            >
              {copy.financialReports}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.46)",
              fontFamily: tokens.font.body,
              fontSize: "0.82rem",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            {copy.closing}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
