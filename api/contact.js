const SUBJECTS = {
  contact: "Nueva consulta web — New Hope Opportunities",
  "hope-builder": "Nueva solicitud Hope Builder — New Hope Opportunities",
  "donation-receipt": "Solicitud de recibo de donación — New Hope Opportunities",
};

const FROM_EMAIL = "newhope@fenixsolutionshn.com";
const DEFAULT_DESTINATION = "aldairleiva24@gmail.com";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return response.status(503).json({ ok: false, error: "Mail service is not configured" });

  const destination = process.env.CONTACT_EMAIL?.trim() || DEFAULT_DESTINATION;
  const body = request.body ?? {};
  const requestedType = String(body.formType || "contact");
  const formType = Object.prototype.hasOwnProperty.call(SUBJECTS, requestedType) ? requestedType : "contact";
  const payload = body.data && typeof body.data === "object" && !Array.isArray(body.data) ? body.data : {};
  const cleanPayload = Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined && value !== null).map(([key, value]) => [key, String(value).slice(0, 5000)]));
  const visitorEmail = cleanPayload.email?.trim() || "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const replyTo = emailPattern.test(visitorEmail) ? visitorEmail : undefined;
  const headings = { contact: "Nueva consulta desde el sitio web", "hope-builder": "Nueva solicitud Hope Builder", "donation-receipt": "Nueva solicitud de recibo de donación" };
  const rows = Object.entries(cleanPayload).filter(([key]) => !["message", "page", "submittedAt"].includes(key)).map(([key, value]) => `<tr><td style="padding:10px 12px;border-bottom:1px solid #ece8df;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b675f;width:34%;">${escapeHtml(key)}</td><td style="padding:10px 12px;border-bottom:1px solid #ece8df;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#252525;font-weight:600;">${escapeHtml(value)}</td></tr>`).join("");
  const message = escapeHtml(cleanPayload.message || "Sin mensaje adicional.").replaceAll("\n", "<br>");
  const page = escapeHtml(cleanPayload.page || "nhohonduras.org");
  const html = `<!DOCTYPE html><html><body style="margin:0;background:#f4f1ea"><table width="100%" style="padding:28px 12px"><tr><td align="center"><table width="100%" style="max-width:620px;background:#fff;border-radius:14px;overflow:hidden"><tr><td bgcolor="#252525" style="padding:28px 30px"><p style="margin:0 0 6px;font:700 12px Arial;color:#d7ab2f;letter-spacing:1.4px;text-transform:uppercase">New Hope Opportunities</p><h1 style="margin:0;font:24px Arial;color:#fff">${headings[formType]}</h1></td></tr><tr><td style="padding:28px 30px"><p style="font:15px Arial;color:#4a4741">Se recibió una nueva comunicación desde <strong>nhohonduras.org</strong>.</p><table width="100%" style="border:1px solid #ece8df">${rows}</table><div style="margin-top:22px;background:#fbf7eb;border-left:4px solid #d7ab2f;padding:18px 20px"><b style="font:12px Arial;color:#8a6a16">MENSAJE</b><p style="font:15px Arial;color:#292929">${message}</p></div>${replyTo ? `<p style="margin-top:24px"><a href="mailto:${escapeHtml(replyTo)}" style="background:#252525;color:#fff;padding:13px 20px;text-decoration:none;font:bold 14px Arial;border-radius:8px">Responder al contacto</a></p>` : ""}<p style="font:11px Arial;color:#969188">Origen: ${page}</p></td></tr></table></td></tr></table></body></html>`;
  const text = `${SUBJECTS[formType]}\n\n${Object.entries(cleanPayload).map(([key, value]) => `${key}: ${value}`).join("\n")}`;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: `New Hope Opportunities <${FROM_EMAIL}>`, to: [destination], subject: SUBJECTS[formType], html, text, ...(replyTo ? { reply_to: replyTo } : {}) }) });
    const result = await resendResponse.json().catch(() => ({}));
    if (!resendResponse.ok) {
      console.error("Resend rejected contact submission", resendResponse.status, result);
      return response.status(502).json({ ok: false, error: "Mail provider rejected the request" });
    }
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact delivery failed", error);
    return response.status(500).json({ ok: false, error: "Unable to deliver message" });
  }
}
