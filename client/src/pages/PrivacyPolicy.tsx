import { Box, Container, Link, Typography } from "@mui/material";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    eyebrow: "Legal",
    title: "Política de privacidad",
    updated: "Última actualización: 30 de septiembre de 2026",
    intro:
      "Esta política explica cómo New Hope Opportunities Honduras maneja la información que las personas comparten voluntariamente a través de este sitio web.",
    sections: [
      {
        title: "Información que recopilamos",
        body:
          "Podemos recibir información como nombre, correo electrónico, teléfono, organización, dirección, mensajes y datos enviados en formularios de contacto, Hope Builders o solicitudes de recibos de donación. Los servicios de alojamiento y seguridad también pueden generar registros técnicos básicos necesarios para operar y proteger el sitio.",
      },
      {
        title: "Cómo utilizamos la información",
        body:
          "Utilizamos la información para responder consultas, dar seguimiento a solicitudes, coordinar participación o apoyo, verificar solicitudes de recibos, mantener la seguridad del sitio y mejorar la experiencia de quienes se comunican con New Hope Opportunities.",
      },
      {
        title: "Servicios de terceros",
        body:
          "El sitio puede utilizar proveedores externos para alojamiento, correo electrónico, formularios y procesamiento de donaciones. Cuando una persona utiliza un servicio externo, también pueden aplicar las políticas y condiciones de ese proveedor.",
      },
      {
        title: "Compartir información",
        body:
          "No vendemos información personal. Podemos compartir la información únicamente con proveedores necesarios para operar el sitio o cuando sea requerido por ley, limitado a lo necesario para prestar el servicio correspondiente.",
      },
      {
        title: "Conservación y seguridad",
        body:
          "Conservamos la información durante el tiempo razonablemente necesario para atender la finalidad para la cual fue enviada y aplicamos medidas razonables para protegerla. Ningún sistema de Internet puede garantizar seguridad absoluta.",
      },
      {
        title: "Menores",
        body:
          "Los formularios públicos del sitio están dirigidos a adultos, donantes, voluntarios, aliados y personas que desean contactar a la organización. No solicitamos intencionalmente información personal de menores a través de estos formularios.",
      },
      {
        title: "Tus consultas sobre privacidad",
        body:
          "Puedes solicitar información, corrección o eliminación de datos que hayas enviado al sitio escribiendo a marnec@nhohonduras.org. Algunas obligaciones administrativas, legales o de seguridad pueden requerir conservar determinados registros.",
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: September 30, 2026",
    intro:
      "This policy explains how New Hope Opportunities Honduras handles information that people voluntarily submit through this website.",
    sections: [
      {
        title: "Information we collect",
        body:
          "We may receive information such as your name, email address, phone number, organization, address, messages, and details submitted through contact, Hope Builder, or donation receipt request forms. Hosting and security services may also generate basic technical logs needed to operate and protect the website.",
      },
      {
        title: "How we use information",
        body:
          "We use submitted information to respond to inquiries, follow up on requests, coordinate participation or support, verify receipt requests, maintain website security, and improve the experience of people who contact New Hope Opportunities.",
      },
      {
        title: "Third-party services",
        body:
          "The website may rely on third-party providers for hosting, email delivery, forms, and donation processing. When you use an external service, that provider's own privacy policy and terms may also apply.",
      },
      {
        title: "Sharing information",
        body:
          "We do not sell personal information. Information may be shared only with service providers needed to operate the website or when required by law, and only to the extent reasonably necessary for the relevant service.",
      },
      {
        title: "Retention and security",
        body:
          "We retain information for as long as reasonably necessary to fulfill the purpose for which it was submitted and use reasonable measures to protect it. No Internet-based system can guarantee absolute security.",
      },
      {
        title: "Children",
        body:
          "The website's public forms are intended for adults, donors, volunteers, partners, and people seeking to contact the organization. We do not intentionally request personal information from children through these forms.",
      },
      {
        title: "Privacy requests",
        body:
          "You may ask about, correct, or request deletion of information you submitted through the website by contacting marnec@nhohonduras.org. Certain administrative, legal, or security obligations may require some records to be retained.",
      },
    ],
  },
} as const;

export default function PrivacyPolicy() {
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
