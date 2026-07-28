import { Box, Button, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import calebImage from "@/assets/photos/niño.png";
const content = {
  es: {
    textMain:
      "Nuestro modelo educativo se basa en brindar a los niños las herramientas que necesitan para prosperar, dotándoles de conocimientos, valores y oportunidades para un futuro mejor.",
    subtitle:
      "Juntos podemos transformar la vida de un niño gracias al poder de la educación.",
    cta: "¡Actúa ya!",
  },
  en: {
    textMain:
      "Our education model is based on providing children with the tools they need to thrive—equipping them with knowledge, values, and opportunities for a brighter future.",
    subtitle:
      "Together we can transform a child's life through the power of education.",
    cta: "Take Action",
  },
};

export function CallToAction() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: tokens.color.warmWhite,
        position: "relative",
        // Añadimos aire superior idéntico al banner de estadísticas para el efecto pop-out
        pt: { xs: 8, sm: 12, md: 16 },
      }}
    >
      {/* El bloque amarillo con la gran curva invertida */}
      <Box
        sx={{
          position: "relative",
          bgcolor: tokens.color.hopeGold,
          pt: { xs: 6, md: 6.5 },
          pb: { xs: 6, md: 6.5 },
          borderTopLeftRadius: {
            xs: "80px 80px",
            sm: "160px 160px",
            md: "260px 260px",
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            px: { xs: 3, md: 8 },
            position: "relative",
          }}
        >
          {/* CONTENEDOR FLUIDO DE TEXTO (Aprovecha mejor el espacio horizontal) */}
          <Box
            sx={{
              width: "100%",
              position: "relative",
              zIndex: 3, // El texto siempre por encima de la imagen del niño
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Línea decorativa */}
            <Box
              sx={{
                width: 38,
                height: 5,
                borderRadius: 10,
                bgcolor: "#FFB300",
                mb: 3,
                mx: { xs: "auto", md: 0 },
              }}
            />

            {/* Texto Principal expandido y con tipografía imponente */}
            <Typography
              sx={{
                fontFamily: tokens.font.display,
                fontWeight: 800,
                color: tokens.color.graphiteDark,
                fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.55rem" },
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                maxWidth: { xs: "100%", md: "70%" }, // Mayor espacio horizontal antes de romper línea
              }}
            >
              {copy.textMain}
            </Typography>

            {/* Subtítulo en Blanco */}
            <Typography
              sx={{
                mt: 2.5,
                fontFamily: tokens.font.display,
                fontWeight: 700,
                color: tokens.color.warmWhite,
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.35rem" },
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                maxWidth: { xs: "100%", md: "68%" },
              }}
            >
              {copy.subtitle}
            </Typography>

            {/* Botón de Acción */}
            <Button
              variant="contained"
              sx={{
                mt: 4,
                px: 5,
                py: 1.2,
                borderRadius: "999px",
                bgcolor: tokens.color.graphiteDark,
                color: "#fff",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.88rem",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: tokens.color.graphite,
                  boxShadow: "none",
                },
              }}
            >
              {copy.cta}
            </Button>
          </Box>

          {/* =================================================== */}
          {/* NIÑO PROTAGONISTA EN POSICIONAMIENTO ABSOLUTO       */}
          {/* =================================================== */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { xs: "auto", md: 35, lg: 55 },
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              zIndex: 2, // Posicionado sutilmente por detrás del texto si llegan a cruzarse
              mt: { xs: 5, md: 0 },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Box
              component="img"
              src={calebImage}
              alt="Student"
              sx={{
                display: "block",
                // Hacemos al niño notablemente más grande para darle el rol protagónico
                width: { xs: "75%", sm: "48%", md: "340px", lg: "390px" },
                height: "auto",
                // Efecto pop-out rompiendo el borde superior de la curva en desktop
                mt: { xs: 0, md: "-110px" },
                mb: { xs: -6, md: -6.5 }, // Sella contra la base del padding del contenedor amarillo
                objectFit: "contain",
                userSelect: "none",
                pointerEvents: "none",
                filter: "drop-shadow(0px 15px 35px rgba(0,0,0,0.15))",
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
