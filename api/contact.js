const SUBJECTS = {
  contact: "Nuevo mensaje desde nhohonduras.org",
  newsletter: "Nueva suscripción al boletín de NHO",
  "hope-builder": "Nueva solicitud Hope Builder",
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const destination = process.env.CONTACT_EMAIL?.trim();

  if (!destination) {
    return response.status(503).json({
      ok: false,
      error: "Contact destination is not configured",
    });
  }

  const body = request.body ?? {};
  const formType = typeof body.formType === "string" ? body.formType : "contact";
  const payload =
    body.data && typeof body.data === "object" && !Array.isArray(body.data)
      ? body.data
      : {};

  const cleanPayload = Object.fromEntries(
    Object.entries(payload)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value).slice(0, 5000)])
  );

  try {
    const formSubmitResponse = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(destination)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...cleanPayload,
          _subject: SUBJECTS[formType] ?? SUBJECTS.contact,
          _template: "table",
        }),
      }
    );

    const result = await formSubmitResponse.json().catch(() => ({}));

    if (!formSubmitResponse.ok) {
      return response.status(502).json({
        ok: false,
        error: "Mail provider rejected the request",
      });
    }

    return response.status(200).json({
      ok: true,
      provider: "formsubmit",
      result,
    });
  } catch (error) {
    console.error("Contact delivery failed", error);
    return response.status(500).json({
      ok: false,
      error: "Unable to deliver message",
    });
  }
}
