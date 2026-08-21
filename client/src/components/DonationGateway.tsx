import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import {
  FavoriteRounded,
  LockRounded,
  OpenInNewRounded,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const amounts = [25, 50, 100];

export function DonationGateway() {
  const { language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const paypalUrl = import.meta.env.VITE_PAYPAL_DONATION_URL?.trim() ?? "";
  const amount = useMemo(() => {
    const custom = Number(customAmount);
    return customAmount && Number.isFinite(custom) && custom > 0
      ? custom
      : selectedAmount;
  }, [customAmount, selectedAmount]);

  const copy =
    language === "es"
      ? {
          eyebrow: "Donaciones",
          title: "Tu ayuda se convierte en oportunidades reales.",
          body: "Apoya la educación, nutrición, formación y acompañamiento de niños y jóvenes de Rivera Hernández. Elige un monto y completa tu donación de forma segura mediante PayPal.",
          choose: "Elige un monto",
          custom: "Otro monto",
          customPlaceholder: "Monto en USD",
          selected: "Donación seleccionada",
          paypal: "Donar con PayPal",
          pending: "PayPal pendiente de configuración",
          secure: "El pago se procesa directamente en PayPal. New Hope Opportunities no almacena tus datos financieros.",
        }
      : {
          eyebrow: "Donations",
          title: "Your support becomes real opportunity.",
          body: "Support education, nutrition, formation, and accompaniment for children and young people in Rivera Hernández. Choose an amount and complete your gift securely through PayPal.",
          choose: "Choose an amount",
          custom: "Other amount",
          customPlaceholder: "Amount in USD",
          selected: "Selected donation",
          paypal: "Donate with PayPal",
          pending: "PayPal configuration pending",
          secure: "Payment is processed directly by PayPal. New Hope Opportunities does not store your financial information.",
        };

  const openPayPal = () => {
    if (!paypalUrl) return;
    window.open(paypalUrl, "_blank", "noopener,noreferrer");
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
            sx={{
              p: { xs: 2.4, sm: 3, md: 4 },
              background: "rgba(255,255,255,0.94)",
              border: `1px solid ${tokens.color.line}`,
            }}
          >
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
                gridTemplateColumns: { xs: "repeat(3, 1fr)" },
                gap: 1.2,
                mb: 2,
              }}
            >
              {amounts.map(option => {
                const active = !customAmount && selectedAmount === option;
                return (
                  <Button
                    key={option}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(option);
                      setCustomAmount("");
                    }}
                    variant={active ? "contained" : "outlined"}
                    sx={{
                      py: 1.5,
                      borderRadius: tokens.radius.md,
                      fontFamily: tokens.font.display,
                      fontSize: { xs: "1rem", sm: "1.12rem" },
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
                    ${option}
                  </Button>
                );
              })}
            </Box>

            <TextField
              fullWidth
              type="number"
              label={copy.custom}
              placeholder={copy.customPlaceholder}
              value={customAmount}
              onChange={event => setCustomAmount(event.target.value)}
              inputProps={{ min: 1, step: "0.01" }}
              sx={{
                mb: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: tokens.radius.md,
                  backgroundColor: tokens.color.warmWhite,
                },
              }}
            />

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
                label={`$${amount.toFixed(2)} USD`}
                sx={{
                  backgroundColor: tokens.color.graphite,
                  color: tokens.color.warmWhite,
                  fontWeight: 900,
                }}
              />
            </Box>

            <Button
              fullWidth
              type="button"
              variant="contained"
              size="large"
              onClick={openPayPal}
              disabled={!paypalUrl}
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
                "&.Mui-disabled": {
                  backgroundColor: tokens.color.warmSand,
                  color: tokens.color.graphiteMuted,
                },
              }}
            >
              {paypalUrl ? copy.paypal : copy.pending}
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
