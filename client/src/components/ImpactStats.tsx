import { Box, Container, Typography } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, BookOpen, Home, Building2, GraduationCap } from "lucide-react";
import calebImage from "@/assets/photos/caleb.png";

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: { es: string; en: string };
}

const stats: Stat[] = [
  {
    icon: <GraduationCap size={22} />,
    number: "+41",
    label: { es: "Graduados", en: "Graduates" },
  },
  {
    icon: <Users size={22} />,
    number: "+267",
    label: { es: "Estudiantes", en: "Students" },
  },
  {
    icon: <Home size={22} />,
    number: "+200",
    label: { es: "Familias", en: "Families" },
  },
  {
    icon: <Building2 size={22} />,
    number: "10",
    label: { es: "Oficinas Nuevas", en: "New Offices" },
  },
  {
    icon: <BookOpen size={22} />,
    number: "4",
    label: { es: "Aulas Nuevas", en: "New Classrooms" },
  },
];

const content = {
  es: {
    title: "Construyendo comunidades más fuertes a través de ",
    highlight: "La Educación.",
  },
  en: {
    title: "Building stronger communities through ",
    highlight: "Education.",
  },
};

export function ImpactStats() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: tokens.color.warmWhite,
        position: "relative",
        // Aumentamos el padding superior para darle el margen necesario respecto al componente anterior
        pt: { xs: 8, sm: 12, md: 16 },
      }}
    >
      {/* Bloque Amarillo con Curva Invertida */}
      <Box
        sx={{
          position: "relative",
          bgcolor: tokens.color.hopeGold,
          pt: { xs: 6, md: 7 },
          pb: { xs: 6, md: 7 },
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
          {/* CONTENEDOR FLUIDO DE TEXTO Y ESTADÍSTICAS */}
          <Box
            sx={{
              width: "100%",
              position: "relative",
              zIndex: 3, // Mayor zIndex para asegurar que el texto quede por encima de la imagen
            }}
          >
            {/* Pequeña barra decorativa naranja */}
            <Box
              sx={{
                width: 38,
                height: 5,
                borderRadius: 10,
                bgcolor: tokens.color.warmOrange || "#FFB300",
                mb: 3,
              }}
            />

            {/* Título amplio y expansivo */}
            <Typography
              sx={{
                fontFamily: tokens.font.display,
                fontWeight: 800,
                color: tokens.color.warmWhite,
                fontSize: { xs: "1.7rem", sm: "2.2rem", md: "2.6rem" },
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                maxWidth: { xs: "100%", md: "75%" }, // Margen de colisión controlado
              }}
            >
              {copy.title}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  color: tokens.color.graphiteDark,
                  fontWeight: 900,
                  ml: { xs: 0, md: 0.5 },
                }}
              >
                {copy.highlight}
              </Box>
            </Typography>

            {/* LÍNEA HORIZONTAL COMPLETA DE ESTADÍSTICAS */}
            <Box
              sx={{
                mt: { xs: 5, md: 6 },
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                columnGap: { xs: 3, sm: 4, md: 5 },
                rowGap: 3,
                width: { xs: "100%", md: "85%" },
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* Círculo del Icono */}
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      bgcolor: tokens.color.graphiteDark,
                      color: tokens.color.hopeGold,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </Box>

                  {/* Números y Labels */}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontFamily: tokens.font.display,
                        fontSize: { xs: "1.3rem", md: "1.65rem" },
                        fontWeight: 900,
                        color: tokens.color.warmWhite,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: tokens.font.body,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: tokens.color.graphiteDark,
                        lineHeight: 1.1,
                        mt: 0.3,
                      }}
                    >
                      {stat.label[language]}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* =================================================== */}
          {/* NIÑO PROTAGONISTA EN SEGUNDO PLANO RESPECTO AL TEXTO*/}
          {/* =================================================== */}
          <Box
            sx={{
              position: { xs: "relative", md: "absolute" },
              right: { xs: "auto", md: 30, lg: 50 },
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              zIndex: 2, // Z-index menor que el texto para que este quede por encima al encogerse la pantalla
              mt: { xs: 4, md: 0 },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Box
              component="img"
              src={calebImage}
              alt="Student Impact"
              sx={{
                display: "block",
                width: { xs: "75%", sm: "50%", md: "360px", lg: "410px" },
                height: "auto",
                // Desborde controlado hacia arriba
                mt: { xs: 0, md: "-110px" },
                mb: { xs: -6, md: -7 },
                objectFit: "contain",
                filter: "drop-shadow(0px 15px 35px rgba(0,0,0,0.15))",
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
