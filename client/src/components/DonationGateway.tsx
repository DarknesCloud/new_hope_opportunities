import { useState } from "react";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import {
  FavoriteRounded,
  LockRounded,
  OpenInNewRounded,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const options = [
  { amount: 10, value: "Option 1" },
  { amount: 25, value: "Option 2" },
  { amount: 35, value: "Option 3" },
] as const;

const PAYPAL_HOSTED_BUTTON_ID = "NWPGSA9C7V46S";

export function DonationGateway() {
  const { language } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<(typeof options)[number]>(
    options[1]
  );

  const copy =
    language === "es"
      ? {
          eyebrow: "Donaciones",
          title: "Tu ayuda se convierte en oportunidades reales.",
          body: "Apoya de forma mensual la educación, nutrición, formación y acompañamiento de niños y jóvenes de Rivera Hernández. Elige uno de los montos oficiales configurados por New Hope Opportunities y completa tu suscripción de forma segura mediante PayPal.",
          choose: "Elige tu aporte mensual",
          selected: "Aporte mensual seleccionado",
          paypal: "Continuar con PayPal",
          monthly: "/ mes",
          secure: "La suscripción se procesa directamente en PayPal mediante el botón oficial de New Hope Opportunities. El sitio no almacena datos financieros.",
        }
      : {
          eyebrow: "Donations",
          title: "Your support becomes real opportunity.",
          body: "Provide monthly support for education, nutrition, formation, and accompaniment for children and young people in Rivera Hernández. Choose one of New Hope Opportunities' official giving amounts and complete your subscription securely through PayPal.",
          choose: "Choose your monthly support",
          selected: "Selected monthly support",
          paypal: "Continue with PayPal",
          monthly: "/ month",
          secure: "The subscription is processed directly by PayPal using New Hope Opportunities' official hosted button. This site does not store financial information.",
        };

  return (
    <Box
      id="donar"
      component="section"
      className="section-shell"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${tokens.color.warmWhite} 0%, ${tokens.color.ivory} 52%, ${tokens.color.warmSand} 100%)`,
        borderTop: `1px solid ${tokens.color.line}`,
        borderBottom: `1px solid ${tokens.color.line}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <Box>
            <Box className="hope-eyebrow" sx={{ mb: 2 }}>
              <VolunteerActivismRounded sx={{ fontSize: 17 }} />
              {copy.eyebrow}
            </Box>
            <Typography
              variant="h2"
              sx={{ color: tokens.color.graphite, maxWidth: 620, mb: 2 }}
            >
              {copy.title}
            </Typography>
            <Typography
              sx={{
                color: tokens.color.graphiteSoft,
                lineHeight: 1.85,
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: 650,
              }}
            >
              {copy.body}
            </Typography>
          </Box>

          <Box
            className="hope-card-premium"
            component="form"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
            sx={{
              p: { xs: 2.4, sm: 3, md: 4 },
              background: "rgba(255,255,255,0.94)",
              border: `1px solid ${tokens.color.line}`,
            }}
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value={PAYPAL_HOSTED_BUTTON_ID}
            />
            <input type="hidden" name="on0" value="Donate Monthly" />
            <input type="hidden" name="os0" value={selectedOption.value} />
            <input type="hidden" name="currency_code" value="USD" />

            <Typography
              sx={{
                fontFamily: tokens.font.display,
                fontWeight: 900,
                color: tokens.color.graphite,
                fontSize: "1.15rem",
                mb: 2,
              }}
            >
              {copy.choose}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1.2,
                mb: 2.5,
              }}
            >
              {options.map(option => {
                const active = selectedOption.value === option.value;
                return (
                  <Button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedOption(option)}
                    variant={active ? "contained" : "outlined"}
                    sx={{
                      py: 1.5,
                      borderRadius: tokens.radius.md,
                      fontFamily: tokens.font.display,
                      fontSize: { xs: "0.95rem", sm: "1.12rem" },
                      fontWeight: 900,
                      color: active
                        ? tokens.color.graphite
                        : tokens.color.graphiteSoft,
                      backgroundColor: active
                        ? tokens.color.hopeGold
                        : "transparent",
                      borderColor: active
                        ? tokens.color.hopeGold
                        : tokens.color.lineStrong,
                      "&:hover": {
                        backgroundColor: active
                          ? tokens.color.hopeGoldSoft
                          : tokens.color.hopeGoldPale,
                        borderColor: tokens.color.hopeGold,
                      },
                    }}
                  >
                    ${option.amount}
                  </Button>
                );
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                mb: 2.2,
                p: 1.7,
                borderRadius: tokens.radius.md,
                backgroundColor: tokens.color.hopeGoldPale,
                border: `1px solid ${tokens.color.line}`,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                <FavoriteRounded sx={{ color: tokens.color.hopeGoldDark }} />
                <Typography
                  sx={{ color: tokens.color.graphiteSoft, fontWeight: 800 }}
                >
                  {copy.selected}
                </Typography>
              </Box>
              <Chip
                label={`$${selectedOption.amount}.00 USD ${copy.monthly}`}
                sx={{
                  backgroundColor: tokens.color.graphite,
                  color: tokens.color.warmWhite,
                  fontWeight: 900,
                }}
              />
            </Box>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              endIcon={<OpenInNewRounded />}
              sx={{
                minHeight: 56,
                borderRadius: tokens.radius.pill,
                backgroundColor: tokens.color.hopeGold,
                color: tokens.color.graphite,
                fontFamily: tokens.font.body,
                fontWeight: 900,
                textTransform: "none",
                boxShadow: tokens.shadow.gold,
                "&:hover": {
                  backgroundColor: tokens.color.hopeGoldSoft,
                  transform: "translateY(-2px)",
                  boxShadow: tokens.shadow.elevated,
                },
              }}
            >
              {copy.paypal}
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1,
                mt: 1.7,
              }}
            >
              <LockRounded
                sx={{
                  color: tokens.color.hopeGoldDark,
                  fontSize: 17,
                  mt: "2px",
                }}
              />
              <Typography
                sx={{
                  color: tokens.color.graphiteMuted,
                  fontSize: "0.82rem",
                  lineHeight: 1.55,
                }}
              >
                {copy.secure}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
