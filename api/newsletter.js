const NEWSLETTER_SEGMENT_ID = "e066ff07-396a-47b2-9144-bd89ef915976";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return response.status(503).json({ ok: false, error: "Newsletter service is not configured" });
  }

  const email = typeof request.body?.email === "string" ? request.body.email.trim().toLowerCase() : "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email) || email.length > 320) {
    return response.status(400).json({ ok: false, error: "Invalid email address" });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        segments: [NEWSLETTER_SEGMENT_ID],
      }),
    });

    const result = await resendResponse.json().catch(() => ({}));

    if (resendResponse.ok) {
      return response.status(200).json({ ok: true });
    }

    // An existing contact may already be subscribed. Do not expose provider internals.
    if (resendResponse.status === 409) {
      const segmentResponse = await fetch(
        `https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${NEWSLETTER_SEGMENT_ID}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}` },
        }
      );

      if (segmentResponse.ok || segmentResponse.status === 409) {
        return response.status(200).json({ ok: true });
      }
    }

    console.error("Newsletter provider rejected subscription", resendResponse.status, result);
    return response.status(502).json({ ok: false, error: "Unable to register subscription" });
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return response.status(500).json({ ok: false, error: "Unable to register subscription" });
  }
}
