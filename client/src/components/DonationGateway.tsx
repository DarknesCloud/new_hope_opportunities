import { useState } from "react";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { FavoriteRounded, LockRounded, OpenInNewRounded, VolunteerActivismRounded } from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const options = [
  { amount: 10, value: "Option 1" },
  { amount: 25, value: "Option 2" },
  { amount: 35, value: "Option 3" },
] as const;

const MONTHLY_PAYPAL_BUTTON_ID = "NWPGSA9C7V46S";
const ONE_TIME_PAYPAL_BUTTON_ID = "TVH45LLUZJ5J4";

type DonationMode = "once" | "monthly";

export function DonationGateway() {
  const { language } = useLanguage();
  const [mode, setMode] = useState<DonationMode>("once");
  const [selectedOption, setSelectedOption] = useState<(typeof options)[number]>(options[1]);

  const copy = language === "es" ? {
    eyebrow: "Donaciones", title: "Tu ayuda se convierte en oportunidades reales.",
    body: "Elige cómo quieres apoyar a New Hope Opportunities. Puedes hacer una donación única para campañas y necesidades actuales, o convertir tu apoyo en una contribución mensual.",
    once: "Donación única", monthlyTab: "Donación mensual", onceTitle: "Haz una donación única", onceBody: "Ingresa de forma segura en PayPal el monto que deseas aportar a New Hope Opportunities.", oncePaypal: "Donar una vez con PayPal",
    choose: "Elige tu aporte mensual", selected: "Aporte mensual seleccionado", paypal: "Suscribirme con PayPal", monthly: "/ mes",
    secureOnce: "La donación se procesa directamente en PayPal mediante el botón oficial de New Hope Opportunities. El sitio no almacena datos financieros.",
    secureMonthly: "La suscripción mensual se procesa directamente en PayPal mediante el botón oficial de New Hope Opportunities. El sitio no almacena datos financieros.",
  } : {
    eyebrow: "Donations", title: "Your support becomes real opportunity.",
    body: "Choose how you would like to support New Hope Opportunities. You can make a one-time donation for campaigns and current needs, or turn your support into a monthly contribution.",
    once: "One-time donation", monthlyTab: "Monthly donation", onceTitle: "Make a one-time donation", onceBody: "Securely enter the amount you would like to contribute to New Hope Opportunities on PayPal.", oncePaypal: "Donate once with PayPal",
    choose: "Choose your monthly support", selected: "Selected monthly support", paypal: "Subscribe with PayPal", monthly: "/ month",
    secureOnce: "Your donation is processed directly by PayPal using New Hope Opportunities' official hosted button. This site does not store financial information.",
    secureMonthly: "Your monthly subscription is processed directly by PayPal using New Hope Opportunities' official hosted button. This site does not store financial information.",
  };

  const isOneTime = mode === "once";

  return (
    <Box id="donar" component="section" className="section-shell" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(180deg, ${tokens.color.warmWhite} 0%, ${tokens.color.ivory} 52%, ${tokens.color.warmSand} 100%)`, borderTop: `1px solid ${tokens.color.line}`, borderBottom: `1px solid ${tokens.color.line}` }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 4, md: 6 }, alignItems: "center" }}>
          <Box>
            <Box className="hope-eyebrow" sx={{ mb: 2 }}><VolunteerActivismRounded sx={{ fontSize: 17 }} />{copy.eyebrow}</Box>
            <Typography variant="h2" sx={{ color: tokens.color.graphite, maxWidth: 620, mb: 2 }}>{copy.title}</Typography>
            <Typography sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.85, fontSize: { xs: "1rem", md: "1.1rem" }, maxWidth: 650 }}>{copy.body}</Typography>
          </Box>

          <Box className="hope-card-premium" sx={{ p: { xs: 2.4, sm: 3, md: 4 }, background: "rgba(255,255,255,0.94)", border: `1px solid ${tokens.color.line}` }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, mb: 3, p: .6, backgroundColor: tokens.color.ivory, borderRadius: tokens.radius.pill, border: `1px solid ${tokens.color.line}` }}>
              <Button type="button" onClick={() => setMode("once")} variant={isOneTime ? "contained" : "text"} sx={{ borderRadius: tokens.radius.pill, fontWeight: 900, textTransform: "none" }}>{copy.once}</Button>
              <Button type="button" onClick={() => setMode("monthly")} variant={!isOneTime ? "contained" : "text"} sx={{ borderRadius: tokens.radius.pill, fontWeight: 900, textTransform: "none" }}>{copy.monthlyTab}</Button>
            </Box>

            <Box component="form" action={isOneTime ? "https://www.paypal.com/donate" : "https://www.paypal.com/cgi-bin/webscr"} method="post" target="_blank">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={isOneTime ? ONE_TIME_PAYPAL_BUTTON_ID : MONTHLY_PAYPAL_BUTTON_ID} />
              <input type="hidden" name="currency_code" value="USD" />
              {!isOneTime && <><input type="hidden" name="on0" value="Donate Monthly" /><input type="hidden" name="os0" value={selectedOption.value} /></>}

              {isOneTime ? (
                <>
                  <Typography sx={{ fontFamily: tokens.font.display, fontWeight: 900, color: tokens.color.graphite, fontSize: "1.15rem", mb: 1 }}>{copy.onceTitle}</Typography>
                  <Typography sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.7, mb: 3 }}>{copy.onceBody}</Typography>
                </>
              ) : (
                <>
                  <Typography sx={{ fontFamily: tokens.font.display, fontWeight: 900, color: tokens.color.graphite, fontSize: "1.15rem", mb: 2 }}>{copy.choose}</Typography>
                  <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.2, mb: 2.5 }}>
                    {options.map(option => { const active = selectedOption.value === option.value; return <Button key={option.value} type="button" onClick={() => setSelectedOption(option)} variant={active ? "contained" : "outlined"} sx={{ py: 1.5, borderRadius: tokens.radius.md, fontFamily: tokens.font.display, fontSize: { xs: "0.95rem", sm: "1.12rem" }, fontWeight: 900, color: active ? tokens.color.graphite : tokens.color.graphiteSoft, backgroundColor: active ? tokens.color.hopeGold : "transparent", borderColor: active ? tokens.color.hopeGold : tokens.color.lineStrong }}>${option.amount}</Button>; })}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mb: 2.2, p: 1.7, borderRadius: tokens.radius.md, backgroundColor: tokens.color.hopeGoldPale, border: `1px solid ${tokens.color.line}` }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}><FavoriteRounded sx={{ color: tokens.color.hopeGoldDark }} /><Typography sx={{ color: tokens.color.graphiteSoft, fontWeight: 800 }}>{copy.selected}</Typography></Box>
                    <Chip label={`$${selectedOption.amount}.00 USD ${copy.monthly}`} sx={{ backgroundColor: tokens.color.graphite, color: tokens.color.warmWhite, fontWeight: 900 }} />
                  </Box>
                </>
              )}

              <Button fullWidth type="submit" variant="contained" size="large" endIcon={<OpenInNewRounded />} sx={{ minHeight: 56, borderRadius: tokens.radius.pill, backgroundColor: tokens.color.hopeGold, color: tokens.color.graphite, fontFamily: tokens.font.body, fontWeight: 900, textTransform: "none", boxShadow: tokens.shadow.gold, "&:hover": { backgroundColor: tokens.color.hopeGoldSoft, transform: "translateY(-2px)", boxShadow: tokens.shadow.elevated } }}>{isOneTime ? copy.oncePaypal : copy.paypal}</Button>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1.7 }}><LockRounded sx={{ color: tokens.color.hopeGoldDark, fontSize: 17, mt: "2px" }} /><Typography sx={{ color: tokens.color.graphiteMuted, fontSize: "0.82rem", lineHeight: 1.55 }}>{isOneTime ? copy.secureOnce : copy.secureMonthly}</Typography></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
