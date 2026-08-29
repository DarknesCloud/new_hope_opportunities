import { useEffect } from "react";
import { toast } from "sonner";

const contactButtons = new Set([
  "contactanos",
  "contáctanos",
  "contact us",
  "contact team",
  "solicitar información",
  "request information",
]);

const donationButtons = new Set([
  "donar",
  "donate",
  "donar ahora",
  "donate now",
  "sponsor a story",
  "¡actúa ya!",
  "actúa ya",
  "take action",
]);

const joinButtons = new Set(["únete ahora", "unete ahora", "join now"]);
const HONEYPOT_NAME = "website";

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function changeLocation(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function goToDonation() {
  changeLocation("/donar");
}

function goToHopeBuilderForm() {
  const donationInput = document.querySelector<HTMLInputElement>(
    'input[name="donationAmount"]'
  );
  const form = donationInput?.closest("form");

  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  changeLocation("/hope-builders");
  window.setTimeout(() => {
    document
      .querySelector<HTMLInputElement>('input[name="donationAmount"]')
      ?.closest("form")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 160);
}

function isProtectedForm(form: HTMLFormElement) {
  const hasContactFields =
    !!form.querySelector('[name="email"]') &&
    !!form.querySelector('[name="message"]') &&
    !!form.querySelector('[name="subject"]');
  const hasHopeBuilderFields =
    !!form.querySelector('[name="email"]') &&
    !!form.querySelector('[name="firstName"]') &&
    !!form.querySelector('[name="lastName"]') &&
    !!form.querySelector('[name="donationAmount"]');

  return hasContactFields || hasHopeBuilderFields;
}

function installHoneypot(form: HTMLFormElement) {
  if (!isProtectedForm(form) || form.querySelector(`[name="${HONEYPOT_NAME}"]`)) return;

  const input = document.createElement("input");
  input.type = "text";
  input.name = HONEYPOT_NAME;
  input.tabIndex = -1;
  input.autocomplete = "off";
  input.setAttribute("aria-hidden", "true");
  input.style.position = "absolute";
  input.style.left = "-10000px";
  input.style.top = "auto";
  input.style.width = "1px";
  input.style.height = "1px";
  input.style.opacity = "0";
  input.style.pointerEvents = "none";

  form.prepend(input);
  form.dataset.antibotStartedAt = String(Date.now());
}

async function sendSubmission(
  formType: "contact" | "hope-builder",
  data: Record<string, string>,
  startedAt: number,
  honeypot: string
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType,
      data,
      meta: { startedAt, honeypot },
    }),
  });

  if (!response.ok) throw new Error("Submission failed");
}

async function subscribeNewsletter(email: string) {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) throw new Error("Newsletter subscription failed");
}

function formValues(form: HTMLFormElement) {
  const formData = new FormData(form);
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
  );
}

export function SiteInteractionBridge() {
  useEffect(() => {
    const scanForms = () => {
      document.querySelectorAll<HTMLFormElement>("form").forEach(installHoneypot);
    };

    scanForms();
    const observer = new MutationObserver(scanForms);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      const values = formValues(form);
      const hasContactFields =
        "email" in values && "message" in values && "subject" in values;
      const hasHopeBuilderFields =
        "email" in values &&
        "firstName" in values &&
        "lastName" in values &&
        "donationAmount" in values;

      if (!hasContactFields && !hasHopeBuilderFields) return;

      const honeypot = values[HONEYPOT_NAME] ?? "";
      delete values[HONEYPOT_NAME];

      // Automated form-fillers commonly populate every text input. Silently discard
      // a submission when the invisible field is touched so bots cannot probe it.
      if (honeypot.trim()) return;

      const formType = hasHopeBuilderFields ? "hope-builder" : "contact";
      const startedAt = Number(form.dataset.antibotStartedAt || 0);

      sendSubmission(
        formType,
        {
          ...values,
          page: window.location.href,
          submittedAt: new Date().toISOString(),
        },
        startedAt,
        honeypot
      )
        .then(() => {
          toast.success(
            formType === "contact"
              ? "Mensaje enviado correctamente."
              : "Solicitud enviada correctamente."
          );
        })
        .catch(() => {
          toast.error(
            "No pudimos enviar la información. Inténtalo nuevamente o contáctanos por correo."
          );
        });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const button = target.closest("button, a");
      if (!(button instanceof HTMLElement)) return;

      const text = normalize(button.textContent ?? "");

      if (contactButtons.has(text)) {
        event.preventDefault();
        changeLocation("/contacto");
        return;
      }

      if (donationButtons.has(text)) {
        event.preventDefault();
        goToDonation();
        return;
      }

      const isSubmitButton =
        button instanceof HTMLButtonElement && button.type === "submit";

      if (
        joinButtons.has(text) &&
        window.location.pathname === "/hope-builders" &&
        !isSubmitButton
      ) {
        event.preventDefault();
        goToHopeBuilderForm();
        return;
      }

      if (text === "suscribirme" || text === "subscribe") {
        let container: HTMLElement | null = button.parentElement;
        let emailInput: HTMLInputElement | null = null;

        for (let depth = 0; depth < 5 && container && !emailInput; depth += 1) {
          emailInput = container.querySelector<HTMLInputElement>('input[type="email"]');
          container = container.parentElement;
        }

        const email = emailInput?.value.trim();
        if (!email) return;

        subscribeNewsletter(email)
          .then(() => toast.success("Suscripción registrada correctamente."))
          .catch(() =>
            toast.error("No pudimos registrar la suscripción. Inténtalo nuevamente.")
          );
      }
    };

    document.addEventListener("submit", handleSubmit, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("submit", handleSubmit, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
