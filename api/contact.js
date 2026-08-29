const SUBJECTS = {
  contact: "Nueva consulta web — New Hope Opportunities",
  "hope-builder": "Nueva solicitud Hope Builder — New Hope Opportunities",
  "donation-receipt": "Solicitud de recibo de donación — New Hope Opportunities",
};

const FROM_EMAIL = "newhope@fenixsolutionshn.com";
const DEFAULT_DESTINATION = "aldairleiva24@gmail.com";
const ALLOWED_HOSTS = new Set(["nhohonduras.org", "www.nhohonduras.org"]);
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 6;
const MIN_FORM_AGE_MS = 1800;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const rateBuckets = globalThis.__nhoContactRateBuckets || new Map();
globalThis.__nhoContactRateBuckets = rateBuckets;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function requestHostAllowed(request) {
  const candidates = [request.headers.origin, request.headers.referer].filter(Boolean);
  if (!candidates.length) return false;

  return candidates.some(value => {
    try {
      const hostname = new URL(value).hostname.toLowerCase();
      return ALLOWED_HOSTS.has(hostname) || hostname.endsWith(".vercel.app");
    } catch {
      return false;
    }
  });
}

function getClientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  const realIp = request.headers["x-real-ip"];
  return typeof realIp === "string" && realIp.trim() ? realIp.trim() : "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const previous = rateBuckets.get(ip) || [];
  const recent = previous.filter(timestamp => now - timestamp < RATE_WINDOW_MS);

  if (recent.length >= RATE_LIMIT) {
    rateBuckets.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateBuckets.set(ip, recent);

  // Keep the best-effort in-memory limiter bounded on warm serverless instances.
  if (rateBuckets.size > 1000) {
    for (const [key, timestamps] of rateBuckets) {
      if (!timestamps.some(timestamp => now - timestamp < RATE_WINDOW_MS)) rateBuckets.delete(key);
      if (rateBuckets.size <= 800) break;
    }
  }

  return false;
}

function passesAntiBotCheck(body) {
  const meta = body?.meta;
  if (!meta || typeof meta !== "object") return false;
  if (String(meta.honeypot || "").trim()) return false;

  const startedAt = Number(meta.startedAt);
  if (!Number.isFinite(startedAt) || startedAt <= 0) return false;

  const age = Date.now() - startedAt;
  return age >= MIN_FORM_AGE_MS && age <= MAX_FORM_AGE_MS;
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function hasValidRequiredFields(formType, payload) {
  if (!validEmail(payload.email)) return false;

  if (formType === "contact") {
    return (
      String(payload.fullName || "").trim().length >= 2 &&
      String(payload.subject || "").trim().length >= 3 &&
      String(payload.message || "").trim().length >= 10
    );
  }

  if (formType === "hope-builder") {
    return (
      String(payload.firstName || "").trim().length >= 1 &&
      String(payload.lastName || "").trim().length >= 1 &&
      String(payload.donationAmount || "").trim().length >= 1
    );
  }

  if (formType === "donation-receipt") {
    return String(payload.name || "").trim().length >= 2;
  }

  return false;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!requestHostAllowed(request)) {
    return response.status(403).json({ ok: false, error: "Request source not allowed" });
  }

  const body = request.body ?? {};
  if (JSON.stringify(body).length > 30000) {
    return response.status(413).json({ ok: false, error: "Payload too large" });
  }

  const requestedType = String(body.formType || "contact");
  const formType = Object.prototype.hasOwnProperty.call(SUBJECTS, requestedType)
    ? requestedType
    : "contact";
  const payload =
    body.data && typeof body.data === "object" && !Array.isArray(body.data)
      ? body.data
      : {};

  // Contact and Hope Builder forms must originate from the live UI, remain open
  // long enough for a human interaction, and leave the invisible honeypot empty.
  if ((formType === "contact" || formType === "hope-builder") && !passesAntiBotCheck(body)) {
    return response.status(200).json({ ok: true });
  }

  if (!hasValidRequiredFields(formType, payload)) {
    return response.status(400).json({ ok: false, error: "Invalid form data" });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    response.setHeader("Retry-After", "600");
    return response.status(429).json({ ok: false, error: "Too many submissions" });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return response.status(503).json({ ok: false, error: "Mail service is not configured" });
  }

  const destination = process.env.CONTACT_EMAIL?.trim() || DEFAULT_DESTINATION;
  const cleanPayload = Object.fromEntries(
    Object.entries(payload)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value).slice(0, 5000)])
  );
  const visitorEmail = cleanPayload.email?.trim() || "";
  const replyTo = validEmail(visitorEmail) ? visitorEmail : undefined;
  const headings = {
    contact: "Nueva consulta desde el sitio web",
    "hope-builder": "Nueva solicitud Hope Builder",
    "donation-receipt": "Nueva solicitud de recibo de donación",
  };
  const rows = Object.entries(cleanPayload)
    .filter(([key]) => !["message", "page", "submittedAt", "website"].includes(key))
    .map(
      ([key, value]) =>
        `<tr><td style="padding:10px 12px;border-bottom:1px solid #ece8df;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b675f;width:34%;">${escapeHtml(key)}</td><td style="padding:10px 12px;border-bottom:1px solid #ece8df;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#252525;font-weight:600;">${escapeHtml(value)}</td></tr>`
    )
    .join("");
  const message = escapeHtml(cleanPayload.message || "Sin mensaje adicional.").replaceAll("\n", "<br>");
  const page = escapeHtml(cleanPayload.page || "nhohonduras.org");
  const html = `<!DOCTYPE html><html><body style="margin:0;background:#f4f1ea"><table width="100%" style="padding:28px 12px"><tr><td align="center"><table width="100%" style="max-width:620px;background:#fff;border-radius:14px;overflow:hidden"><tr><td bgcolor="#252525" style="padding:28px 30px"><p style="margin:0 0 6px;font:700 12px Arial;color:#d7ab2f;letter-spacing:1.4px;text-transform:uppercase">New Hope Opportunities</p><h1 style="margin:0;font:24px Arial;color:#fff">${headings[formType]}</h1></td></tr><tr><td style="padding:28px 30px"><p style="font:15px Arial;color:#4a4741">Se recibió una nueva comunicación desde <strong>nhohonduras.org</strong>.</p><table width="100%" style="border:1px solid #ece8df">${rows}</table><div style="margin-top:22px;background:#fbf7eb;border-left:4px solid #d7ab2f;padding:18px 20px"><b style="font:12px Arial;color:#8a6a16">MENSAJE</b><p style="font:15px Arial;color:#292929">${message}</p></div>${replyTo ? `<p style="margin-top:24px"><a href="mailto:${escapeHtml(replyTo)}" style="background:#252525;color:#fff;padding:13px 20px;text-decoration:none;font:bold 14px Arial;border-radius:8px">Responder al contacto</a></p>` : ""}<p style="font:11px Arial;color:#969188">Origen: ${page}</p></td></tr></table></td></tr></table></body></html>`;
  const text = `${SUBJECTS[formType]}\n\n${Object.entries(cleanPayload)
    .filter(([key]) => key !== "website")
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
