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
  "¡actúa ya!",
  "actúa ya",
  "take action",
]);

const joinButtons = new Set(["únete ahora", "unete ahora", "join now"]);

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function changeLocation(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function goToDonation() {
  const section = document.getElementById("donar");
  if (window.location.pathname === "/" && section) {
    window.history.replaceState({}, "", "/#donar");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  changeLocation("/#donar");
  window.setTimeout(() => {
    document.getElementById("donar")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 120);
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

async function sendSubmission(
  formType: "contact" | "hope-builder",
  data: Record<string, string>
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, data }),
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

      const formType = hasHopeBuilderFields ? "hope-builder" : "contact";
      sendSubmission(formType, {
        ...values,
        page: window.location.href,
        submittedAt: new Date().toISOString(),
      })
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

      if (joinButtons.has(text) && window.location.pathname === "/hope-builders") {
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
      document.removeEventListener("submit", handleSubmit, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
