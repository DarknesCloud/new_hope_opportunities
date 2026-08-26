import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FavoriteRounded, ReceiptLongRounded } from "@mui/icons-material";
import { DonationGateway } from "@/components/DonationGateway";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const copy = {
  es: {
    eyebrow: "Apoya a New Hope", title: "Una contribución mensual puede abrir nuevas oportunidades.", subtitle: "Tu apoyo fortalece la educación, nutrición, formación y acompañamiento que New Hope Opportunities brinda a niños y jóvenes de Rivera Hernández.",
    receiptEyebrow: "Seguimiento de donaciones", receiptTitle: "¿Necesitas un recibo de tu donación?", receiptBody: "Envíanos los datos de la transacción para que el equipo de New Hope pueda verificarla y dar seguimiento a tu recibo. Este formulario no confirma el pago; la transacción debe haberse completado en PayPal.",
    name: "Nombre completo", email: "Correo electrónico", amount: "Monto donado (USD)", date: "Fecha de la donación", reference: "Referencia o ID de PayPal", notes: "Información adicional (opcional)", submit: "Solicitar recibo", sending: "Enviando…", success: "Solicitud enviada. El equipo de New Hope podrá verificar la donación y dar seguimiento al recibo.", error: "No pudimos enviar la solicitud. Inténtalo nuevamente.", required: "Completa nombre, correo y al menos la referencia de PayPal o los datos de monto y fecha.",
  },
  en: {
    eyebrow: "Support New Hope", title: "A monthly contribution can open new opportunities.", subtitle: "Your support strengthens the education, nutrition, formation, and care New Hope Opportunities provides to children and young people in Rivera Hernández.",
    receiptEyebrow: "Donation follow-up", receiptTitle: "Need a receipt for your donation?", receiptBody: "Send us the transaction details so the New Hope team can verify it and follow up on your receipt. This form does not confirm payment; the transaction must have been completed through PayPal.",
    name: "Full name", email: "Email address", amount: "Donation amount (USD)", date: "Donation date", reference: "PayPal reference or transaction ID", notes: "Additional information (optional)", submit: "Request receipt", sending: "Sending…", success: "Request sent. The New Hope team can now verify the donation and follow up on your receipt.", error: "We couldn't send the request. Please try again.", required: "Enter your name, email, and either the PayPal reference or the donation amount and date.",
  },
} as const;

export function Donar() {
  const { language } = useLanguage();
  const content = copy[language];
  const [form, setForm] = useState({ name: "", email: "", amount: "", date: "", reference: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "required">("idle");
  const update = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => setForm(current => ({ ...current, [field]: event.target.value }));

  const submitReceipt = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || (!form.reference.trim() && !(form.amount.trim() && form.date.trim()))) { setStatus("required"); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ formType: "donation-receipt", data: { name: form.name, email: form.email, amountUSD: form.amount, donationDate: form.date, paypalReference: form.reference, message: form.message, page: window.location.href, submittedAt: new Date().toISOString() } }) });
      if (!response.ok) throw new Error("request failed");
      setForm({ name: "", email: "", amount: "", date: "", reference: "", message: "" });
      setStatus("success");
    } catch { setStatus("error"); }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: tokens.color.ivory }}>
      <Box component="header" sx={{ position: "relative", overflow: "hidden", background: `linear-gradient(135deg, ${tokens.color.graphiteDark} 0%, ${tokens.color.graphite} 68%, ${tokens.color.hopeGoldDark} 160%)`, color: tokens.color.warmWhite }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2, color: tokens.color.hopeGoldSoft }}><FavoriteRounded sx={{ fontSize: 18 }} /><Typography sx={{ fontSize: "0.78rem", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" }}>{content.eyebrow}</Typography></Box>
          <Typography component="h1" sx={{ maxWidth: 850, fontFamily: tokens.font.display, fontSize: { xs: "2.55rem", md: "4.25rem" }, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.055em", mb: 2.5 }}>{content.title}</Typography>
          <Typography sx={{ maxWidth: 760, color: "rgba(255,255,255,0.76)", fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.8 }}>{content.subtitle}</Typography>
        </Container>
      </Box>
      <Box component="main" sx={{ flex: 1 }}>
        <DonationGateway />
        <Box sx={{ py: { xs: 7, md: 10 }, borderTop: `1px solid ${tokens.color.line}` }}>
          <Container maxWidth="md">
            <Box sx={{ p: { xs: 3, md: 5 }, backgroundColor: tokens.color.warmWhite, border: `1px solid ${tokens.color.line}`, borderRadius: tokens.radius.lg }}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center", color: tokens.color.hopeGoldDark, mb: 1.5 }}><ReceiptLongRounded /><Typography sx={{ fontSize: ".78rem", fontWeight: 900, letterSpacing: ".12em", textTransform: "uppercase" }}>{content.receiptEyebrow}</Typography></Box>
              <Typography variant="h3" sx={{ mb: 1.5 }}>{content.receiptTitle}</Typography><Typography sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.75, mb: 3 }}>{content.receiptBody}</Typography>
              <Box component="form" onSubmit={submitReceipt} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <TextField required label={content.name} value={form.name} onChange={update("name")} /><TextField required type="email" label={content.email} value={form.email} onChange={update("email")} />
                <TextField type="number" inputProps={{ min: 0, step: "0.01" }} label={content.amount} value={form.amount} onChange={update("amount")} /><TextField type="date" InputLabelProps={{ shrink: true }} label={content.date} value={form.date} onChange={update("date")} />
                <TextField label={content.reference} value={form.reference} onChange={update("reference")} sx={{ gridColumn: { sm: "1 / -1" } }} /><TextField multiline minRows={3} label={content.notes} value={form.message} onChange={update("message")} sx={{ gridColumn: { sm: "1 / -1" } }} />
                <Box sx={{ gridColumn: { sm: "1 / -1" } }}><Button type="submit" variant="contained" disabled={status === "sending"}>{status === "sending" ? content.sending : content.submit}</Button>{status !== "idle" && status !== "sending" && <Typography sx={{ mt: 1.5, fontSize: ".9rem", color: status === "success" ? "success.main" : "error.main" }}>{status === "success" ? content.success : status === "required" ? content.required : content.error}</Typography>}</Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer language={language} />
    </Box>
  );
}
