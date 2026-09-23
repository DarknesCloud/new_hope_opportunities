import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Heart, Mail, MessageCircle, Send } from "lucide-react";
import "./QRContacto.css";

const whatsappNumber = "15305664003";

const t = {
    eyebrow: "ONE CONNECTION CAN CHANGE A STORY",
    title: "Let's talk about hope.",
    intro: "Thank you for getting to know New Hope Opportunities. Tell us how you would like to connect with our work and prepare a message for our team.",
    formTitle: "Take the first step",
    name: "Your name",
    namePlaceholder: "What should we call you?",
    email: "Your email (so we can reply)",
    emailPlaceholder: "name@email.com",
    interest: "I'm interested in",
    options: ["Learning about New Hope", "Giving", "Volunteering", "Visiting or joining a mission trip", "Partnering", "Something else"],
    message: "Your message",
    messagePlaceholder: "Hello, I found New Hope through your brochure and would love to learn more...",
    button: "Send by email",
    whatsapp: "Message on WhatsApp",
    sending: "Sending...",
    success: "Your email was sent. Thank you for reaching out.",
    error: "We couldn't send your email. Please try again or contact us on WhatsApp.",
    notice: "For email, enter your name and email address. WhatsApp opens a message for you to review and send.",
    site: "Explore the website",
    footer: "Education · Faith · Community · Opportunity",
    defaultMessage: "Hello, I learned about New Hope Opportunities through your brochure and would like more information.",
    prefix: "Hello, my name is",
    about: "I'm interested in:",
} as const;

export function QRContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    document.title = "Connect with New Hope Opportunities";
    document.documentElement.lang = "en";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      robots.remove();
    };
  }, []);

  function whatsappMessage() {
    const parts = [name.trim() ? `${t.prefix} ${name.trim()}.` : t.defaultMessage];
    if (interest) parts.push(`${t.about} ${t.options[Number(interest)]}.`);
    if (message.trim()) parts.push(message.trim());
    return parts.join("\n\n");
  }

  function openWhatsApp() {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage())}`;
    window.location.assign(url);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          data: {
            fullName: name.trim(), email: email.trim(),
            subject: interest ? t.options[Number(interest)] : "Brochure QR inquiry",
            message: message.trim() || whatsappMessage(),
            page: window.location.href,
          },
          meta: { honeypot: website, startedAt },
        }),
      });
      if (!response.ok) throw new Error("Email delivery failed");
      setStatus("success");
      setName(""); setEmail(""); setInterest(""); setMessage("");
      setStartedAt(Date.now());
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="qr-contact">
      <div className="qr-contact__halo" aria-hidden="true" />
      <header className="qr-contact__header">
        <a href="/" aria-label="New Hope Opportunities - home" className="qr-contact__brand">
          <img src="/new-hope-logo.png" alt="New Hope Opportunities Honduras" />
        </a>
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
            <input id="qr-name" value={name} onChange={event => setName(event.target.value)} placeholder={t.namePlaceholder} maxLength={80} minLength={2} autoComplete="name" required />

            <label htmlFor="qr-email">{t.email}</label>
            <input id="qr-email" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder={t.emailPlaceholder} maxLength={180} autoComplete="email" required />

            <label htmlFor="qr-interest">{t.interest}</label>
            <select id="qr-interest" value={interest} onChange={event => setInterest(event.target.value)}>
              <option value="">—</option>
              {t.options.map((option, index) => <option key={index} value={index}>{option}</option>)}
            </select>

            <label htmlFor="qr-message">{t.message}</label>
            <textarea id="qr-message" value={message} onChange={event => setMessage(event.target.value)} placeholder={t.messagePlaceholder} maxLength={1500} rows={3} />

            <div className="qr-contact__honeypot" aria-hidden="true"><label htmlFor="qr-website">Website</label><input id="qr-website" tabIndex={-1} autoComplete="off" value={website} onChange={event => setWebsite(event.target.value)} /></div>
            <button className="qr-contact__submit" type="submit" disabled={sending}>{sending ? t.sending : t.button}<Mail size={18} /></button>
            <button className="qr-contact__whatsapp" type="button" onClick={openWhatsApp}>{t.whatsapp}<Send size={18} /></button>
            {status && <p className={`qr-contact__feedback qr-contact__feedback--${status}`} role="status">{t[status]}</p>}
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
