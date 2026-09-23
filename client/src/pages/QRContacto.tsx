import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Heart, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import "./QRContacto.css";

const whatsappNumber = "15305664003";

const copy = {
  es: {
    eyebrow: "UN ENCUENTRO PUEDE CAMBIAR UNA HISTORIA",
    title: "Conversemos sobre esperanza.",
    intro: "Gracias por conocer New Hope Opportunities. Cuéntanos cómo te gustaría acercarte a nuestra labor y prepara un mensaje para nuestro equipo.",
    formTitle: "Da el primer paso",
    name: "Tu nombre",
    namePlaceholder: "¿Cómo te llamas?",
    interest: "Me interesa",
    options: ["Conocer New Hope", "Donar", "Ser voluntario", "Visitar o participar en una misión", "Crear una alianza", "Otro motivo"],
    message: "Tu mensaje",
    messagePlaceholder: "Hola, conocí New Hope en el brochure y quisiera saber más...",
    button: "Continuar en WhatsApp",
    notice: "Se abrirá WhatsApp con tu mensaje listo para revisar. Tú decides si lo envías.",
    site: "Explorar el sitio web",
    footer: "Educación · Fe · Comunidad · Oportunidad",
    defaultMessage: "Hola, conocí New Hope Opportunities a través de su brochure y quisiera recibir más información.",
    prefix: "Hola, soy",
    about: "Me interesa:",
  },
  en: {
    eyebrow: "ONE CONNECTION CAN CHANGE A STORY",
    title: "Let's talk about hope.",
    intro: "Thank you for getting to know New Hope Opportunities. Tell us how you would like to connect with our work and prepare a message for our team.",
    formTitle: "Take the first step",
    name: "Your name",
    namePlaceholder: "What should we call you?",
    interest: "I'm interested in",
    options: ["Learning about New Hope", "Giving", "Volunteering", "Visiting or joining a mission trip", "Partnering", "Something else"],
    message: "Your message",
    messagePlaceholder: "Hello, I found New Hope through your brochure and would love to learn more...",
    button: "Continue to WhatsApp",
    notice: "WhatsApp will open with your message ready to review. You decide whether to send it.",
    site: "Explore the website",
    footer: "Education · Faith · Community · Opportunity",
    defaultMessage: "Hello, I learned about New Hope Opportunities through your brochure and would like more information.",
    prefix: "Hello, my name is",
    about: "I'm interested in:",
  },
} as const;

export function QRContacto() {
  const { language, setLanguage } = useLanguage();
  const t = copy[language];
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Connect with New Hope Opportunities";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parts = [name.trim() ? `${t.prefix} ${name.trim()}.` : t.defaultMessage];
    if (interest) parts.push(`${t.about} ${t.options[Number(interest)]}.`);
    if (message.trim()) parts.push(message.trim());
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(parts.join("\n\n"))}`;
    window.location.assign(url);
  }

  return (
    <main className="qr-contact">
      <div className="qr-contact__halo" aria-hidden="true" />
      <header className="qr-contact__header">
        <a href="/" aria-label="New Hope Opportunities - home" className="qr-contact__brand">
          <img src="/new-hope-logo.png" alt="New Hope Opportunities Honduras" />
        </a>
        <div className="qr-contact__language" aria-label="Language / Idioma">
          <button type="button" className={language === "es" ? "active" : ""} onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
      </header>

      <div className="qr-contact__content">
        <section className="qr-contact__intro" aria-labelledby="qr-title">
          <div className="qr-contact__eyebrow"><Heart size={16} fill="currentColor" />{t.eyebrow}</div>
          <h1 id="qr-title">{t.title}</h1>
          <p>{t.intro}</p>
          <div className="qr-contact__rule" aria-hidden="true" />
          <span className="qr-contact__signature">New Hope Opportunities <i>Honduras</i></span>
        </section>

        <section className="qr-contact__card" aria-labelledby="qr-form-title">
          <div className="qr-contact__card-icon"><MessageCircle size={22} strokeWidth={1.9} /></div>
          <h2 id="qr-form-title">{t.formTitle}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="qr-name">{t.name}</label>
            <input id="qr-name" value={name} onChange={event => setName(event.target.value)} placeholder={t.namePlaceholder} maxLength={80} autoComplete="name" />

            <label htmlFor="qr-interest">{t.interest}</label>
            <select id="qr-interest" value={interest} onChange={event => setInterest(event.target.value)}>
              <option value="">—</option>
              {t.options.map((option, index) => <option key={index} value={index}>{option}</option>)}
            </select>

            <label htmlFor="qr-message">{t.message}</label>
            <textarea id="qr-message" value={message} onChange={event => setMessage(event.target.value)} placeholder={t.messagePlaceholder} maxLength={1500} rows={3} />

            <button className="qr-contact__submit" type="submit">{t.button}<Send size={18} /></button>
            <p className="qr-contact__notice">{t.notice}</p>
          </form>
        </section>
      </div>

      <footer className="qr-contact__footer">
        <span>{t.footer}</span>
        <a href="/" target="_blank" rel="noopener noreferrer">{t.site}<ArrowUpRight size={16} /></a>
      </footer>
    </main>
  );
}
