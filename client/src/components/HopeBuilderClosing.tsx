import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Heart } from "lucide-react";

const content = {
  es: {
    mainTitle: "Construye Esperanza en las Vidas de Quienes No la Tienen",
    paragraph1:
      "Esta es una oportunidad increíble de ser parte de algo mayor que nosotros mismos. Al convertirte en Hope Builder, no solo estás donando dinero, estás invirtiendo en vidas, en familias, en comunidades completas.",
    paragraph2:
      "La necesidad es grande, pero juntos podemos hacer una diferencia real. Cada donación, sin importar el monto, tiene un impacto tangible en la vida de nuestros estudiantes y sus familias.",
    callToAction: "¿Te gustaría unirte a nosotros en esta misión?",
    buttonJoin: "Únete Ahora",
    buttonDonate: "Donar",
  },
  en: {
    mainTitle: "Build Hope in the Lives of Those Who Have None",
    paragraph1:
      "This is an incredible opportunity to be part of something greater than ourselves. By becoming a Hope Builder, you are not just donating money, you are investing in lives, in families, in entire communities.",
    paragraph2:
      "The need is great, but together we can make a real difference. Every donation, regardless of the amount, has a tangible impact on the lives of our students and their families.",
    callToAction: "Would you like to join us in this mission?",
    buttonJoin: "Join Now",
    buttonDonate: "Donate",
  },
};

function scrollToRegistration() {
  document
    .querySelector<HTMLInputElement>('input[name="donationAmount"]')
    ?.closest("form")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function goToDonation() {
  window.history.pushState({}, "", "/donar");
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function HopeBuilderClosing() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.ivory,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              width: "4rem",
              height: "0.35rem",
              backgroundColor: tokens.color.hopeGold,
              borderRadius: "999px",
              mx: "auto",
            }}
          />
        </Box>

        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: tokens.radius.lg,
            backgroundColor: tokens.color.warmWhite,
            border: `2px solid ${tokens.color.hopeGold}`,
            textAlign: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 850,
              color: tokens.color.graphite,
              letterSpacing: "-0.065em",
              lineHeight: 1.3,
              mb: 4,
            }}
          >
            {copy.callToAction}
          </Typography>

          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm="auto">
              <Button
                onClick={scrollToRegistration}
                sx={{
                  backgroundColor: tokens.color.hopeGold,
                  color: tokens.color.graphite,
                  fontFamily: tokens.font.display,
                  fontSize: "1rem",
                  fontWeight: 820,
                  letterSpacing: "-0.035em",
                  py: 1.8,
                  px: 4,
                  borderRadius: tokens.radius.md,
                  textTransform: "none",
                  transition: "all 300ms ease-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  minWidth: "200px",
                  "&:hover": {
                    backgroundColor: tokens.color.hopeGold,
                    transform: "translateY(-4px)",
                    boxShadow: `0 12px 28px rgba(242, 185, 0, 0.35)`,
                  },
                }}
              >
                {copy.buttonJoin}
                <ArrowRight size={20} strokeWidth={2} />
              </Button>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Button
                onClick={goToDonation}
                sx={{
                  backgroundColor: "transparent",
                  color: tokens.color.hopeGold,
                  border: `2px solid ${tokens.color.hopeGold}`,
                  fontFamily: tokens.font.display,
                  fontSize: "1rem",
                  fontWeight: 820,
                  letterSpacing: "-0.035em",
                  py: 1.6,
                  px: 4,
                  borderRadius: tokens.radius.md,
                  textTransform: "none",
                  transition: "all 300ms ease-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  minWidth: "200px",
                  "&:hover": {
                    backgroundColor: `rgba(242, 185, 0, 0.1)`,
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 20px rgba(242, 185, 0, 0.2)`,
                  },
                }}
              >
                {copy.buttonDonate}
                <Heart size={20} strokeWidth={2} />
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: tokens.radius.lg,
            backgroundColor: `rgba(242, 185, 0, 0.08)`,
            borderLeft: `4px solid ${tokens.color.hopeGold}`,
          }}
        >
          <Typography
            sx={{
              fontFamily: tokens.font.display,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 700,
              color: tokens.color.graphite,
              letterSpacing: "-0.035em",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            Gracias por considerar ser parte de esta misión transformadora. /
            Thank you for considering being part of this transformative mission.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
