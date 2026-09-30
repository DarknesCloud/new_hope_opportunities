import { Box, Container, Link, Typography } from "@mui/material";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    eyebrow: "Legal",
    title: "Términos de uso",
    updated: "Última actualización: 30 de septiembre de 2026",
    intro:
      "Al utilizar este sitio web aceptas estos términos básicos de uso. El sitio tiene como finalidad informar sobre New Hope Opportunities Honduras, sus programas, formas de apoyo y canales de contacto.",
    sections: [
      {
        title: "Uso permitido",
        body:
          "Puedes utilizar el sitio para informarte, contactar a la organización, solicitar seguimiento, conocer oportunidades de participación y acceder a los mecanismos de donación disponibles. No debes utilizar el sitio para actividades fraudulentas, abusivas, ilegales o que interfieran con su funcionamiento.",
      },
      {
        title: "Información del sitio",
        body:
          "Procuramos mantener la información actualizada y clara, pero los programas, fechas, disponibilidad, montos, documentos y demás detalles pueden cambiar. Para decisiones importantes o información institucional formal, confirma los datos directamente con New Hope Opportunities.",
      },
      {
        title: "Donaciones y recibos",
        body:
          "Las donaciones pueden ser procesadas mediante proveedores externos. Una solicitud de recibo enviada desde el sitio no confirma por sí sola una donación; el equipo de New Hope debe verificar la transacción correspondiente.",
      },
      {
        title: "Deducibilidad fiscal",
        body:
          "La disponibilidad de deducciones o beneficios fiscales depende de la jurisdicción y de las circunstancias de cada donante. La información del sitio no constituye asesoría legal, contable o fiscal.",
      },
      {
        title: "Propiedad intelectual",
        body:
          "Salvo que se indique lo contrario, los textos, identidad visual, fotografías y materiales propios del sitio pertenecen a New Hope Opportunities o se utilizan con autorización. No deben reutilizarse de forma que implique respaldo, afiliación o representación no autorizada.",
      },
      {
        title: "Servicios y enlaces externos",
        body:
          "El sitio puede enlazar a servicios o páginas de terceros. New Hope Opportunities no controla las políticas, disponibilidad o contenido de esos servicios externos.",
      },
      {
        title: "Cambios",
        body:
          "Podemos actualizar estos términos cuando cambie el sitio, sus servicios o los requisitos aplicables. La fecha de actualización se mostrará en esta página.",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "Terms of Use",
    updated: "Last updated: September 30, 2026",
    intro:
      "By using this website, you agree to these basic terms of use. The site is intended to provide information about New Hope Opportunities Honduras, its programs, ways to support the mission, and contact channels.",
    sections: [
      {
        title: "Permitted use",
        body:
          "You may use the website to learn about the organization, contact the team, request follow-up, explore participation opportunities, and access available donation methods. You may not use the site for fraudulent, abusive, unlawful activity or in a way that interferes with its operation.",
      },
      {
        title: "Website information",
        body:
          "We aim to keep website information clear and current, but programs, dates, availability, amounts, documents, and other details may change. For important decisions or formal institutional information, confirm the relevant details directly with New Hope Opportunities.",
      },
      {
        title: "Donations and receipts",
        body:
          "Donations may be processed through third-party providers. Submitting a receipt request through this website does not itself confirm a donation; the New Hope team must verify the corresponding transaction.",
      },
      {
        title: "Tax deductibility",
        body:
          "The availability of tax deductions or other tax benefits depends on the donor's jurisdiction and circumstances. Information on this website is not legal, accounting, or tax advice.",
      },
      {
        title: "Intellectual property",
        body:
          "Unless otherwise stated, original text, visual identity, photographs, and materials on this website belong to New Hope Opportunities or are used with permission. They may not be reused in a way that implies unauthorized endorsement, affiliation, or representation.",
      },
      {
        title: "External services and links",
        body:
          "The website may link to third-party services or pages. New Hope Opportunities does not control the policies, availability, or content of those external services.",
      },
      {
        title: "Changes to these terms",
        body:
          "We may update these terms when the website, its services, or applicable requirements change. The revision date will be shown on this page.",
      },
    ],
  },
} as const;

export default function TermsOfUse() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: tokens.color.ivory }}>
      <Box
        component="section"
        sx={{
          backgroundColor: tokens.color.graphiteDark,
          color: tokens.color.warmWhite,
          py: { xs: 7, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              color: tokens.color.hopeGold,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
              mb: 1.5,
            }}
          >
            {content.eyebrow}
          </Typography>
          <Typography variant="h1" sx={{ color: tokens.color.warmWhite, mb: 2 }}>
            {content.title}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,.68)", mb: 2 }}>
            {content.updated}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,.78)", lineHeight: 1.8 }}>
            {content.intro}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 9 } }}>
        <Box sx={{ display: "grid", gap: 4 }}>
          {content.sections.map(section => (
            <Box key={section.title}>
              <Typography variant="h3" sx={{ mb: 1.2, color: tokens.color.graphite }}>
                {section.title}
              </Typography>
              <Typography sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.85 }}>
                {section.body}
              </Typography>
            </Box>
          ))}
          <Typography sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.8 }}>
            {language === "es" ? "Contacto: " : "Contact: "}
            <Link href="mailto:marnec@nhohonduras.org">marnec@nhohonduras.org</Link>
          </Typography>
        </Box>
      </Container>

      <Footer language={language} />
    </Box>
  );
}
