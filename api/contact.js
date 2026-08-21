const SUBJECTS = {
  contact: "Nueva consulta web — New Hope Opportunities",
  "hope-builder": "Nueva solicitud Hope Builder — New Hope Opportunities",
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
  if (!apiKey) {
    return response.status(503).json({ ok: false, error: "Mail service is not configured" });
  }

  const destination = process.env.CONTACT_EMAIL?.trim() || DEFAULT_DESTINATION;
  const body = request.body ?? {};
  const formType = body.formType === "hope-builder" ? "hope-builder" : "contact";
  const payload =
    body.data && typeof body.data === "object" && !Array.isArray(body.data)
      ? body.data
      : {};

  const cleanPayload = Object.fromEntries(
    Object.entries(payload)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value).slice(0, 5000)])
  );

  const visitorEmail = cleanPayload.email?.trim() || "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const replyTo = emailPattern.test(visitorEmail) ? visitorEmail : undefined;

  const rows = Object.entries(cleanPayload)
    .filter(([key]) => !["message", "page", "submittedAt"].includes(key))
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #ece8df;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#6b675f;width:34%;">${escapeHtml(key)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #ece8df;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#252525;font-weight:600;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  const message = escapeHtml(cleanPayload.message || "Sin mensaje adicional.").replaceAll("\n", "<br>");
  const page = escapeHtml(cleanPayload.page || "nhohonduras.org");

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;background-color:#f4f1ea;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f1ea;padding:28px 12px;">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
<tr><td bgcolor="#252525" style="background-color:#252525;padding:28px 30px;">
<p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.4;color:#d7ab2f;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">New Hope Opportunities</p>
<h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.25;color:#ffffff;">${formType === "hope-builder" ? "Nueva solicitud Hope Builder" : "Nueva consulta desde el sitio web"}</h1>
</td></tr>
<tr><td style="padding:28px 30px;">
<p style="margin:0 0 18px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#4a4741;">Se recibió una nueva comunicación desde <strong>nhohonduras.org</strong>.</p>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #ece8df;border-radius:10px;overflow:hidden;">${rows}</table>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
<tr><td bgcolor="#fbf7eb" style="background-color:#fbf7eb;border-left:4px solid #d7ab2f;padding:18px 20px;">
<p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.4;color:#8a6a16;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Mensaje</p>
<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:#292929;">${message}</p>
</td></tr>
</table>
${replyTo ? `<table cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;"><tr><td bgcolor="#252525" style="background-color:#252525;border-radius:8px;"><a href="mailto:${escapeHtml(replyTo)}" style="display:inline-block;padding:13px 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1;color:#ffffff;text-decoration:none;font-weight:700;">Responder al contacto</a></td></tr></table>` : ""}
<p style="margin:24px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.5;color:#969188;">Origen: ${page}</p>
</td></tr>
</table>
</td></tr></table>
</body></html>`;

  const text = `${SUBJECTS[formType]}\n\n${Object.entries(cleanPayload)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")}`;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `New Hope Opportunities <${FROM_EMAIL}>`,
        to: [destination],
        subject: SUBJECTS[formType],
        html,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

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
