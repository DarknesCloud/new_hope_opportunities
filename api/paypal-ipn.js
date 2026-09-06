const PAYPAL_VERIFY_URL = "https://ipnpb.paypal.com/cgi-bin/webscr";

function toFormEncodedBody(body) {
  if (!body) return "";
  if (typeof body === "string") return body;
  if (Buffer.isBuffer(body)) return body.toString("utf8");

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(body)) {
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  }
  return params.toString();
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  // A browser/health check may reach the legacy URL with GET.
  // PayPal IPN itself uses POST.
  if (req.method === "GET" || req.method === "HEAD") {
    return res.status(200).send(req.method === "HEAD" ? "" : "PayPal IPN listener ready");
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, GET, HEAD");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const rawBody = toFormEncodedBody(req.body);
    if (!rawBody) {
      return res.status(400).send("Missing IPN payload");
    }

    const verification = await fetch(PAYPAL_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "New-Hope-Opportunities-IPN/1.0",
      },
      body: `cmd=_notify-validate&${rawBody}`,
    });

    if (!verification.ok) {
      console.error("PayPal IPN verification request failed", verification.status);
      return res.status(503).send("Verification unavailable");
    }

    const result = (await verification.text()).trim();

    if (result === "VERIFIED") {
      const payload = new URLSearchParams(rawBody);
      console.info("PayPal IPN verified", {
        txn_type: payload.get("txn_type") || null,
        payment_status: payload.get("payment_status") || null,
        txn_id: payload.get("txn_id") || null,
        recurring_payment_id: payload.get("recurring_payment_id") || null,
      });
      return res.status(200).send("OK");
    }

    console.warn("PayPal IPN rejected as invalid");
    return res.status(400).send("INVALID");
  } catch (error) {
    console.error("PayPal IPN listener error", error instanceof Error ? error.message : error);
    return res.status(500).send("IPN processing error");
  }
}
