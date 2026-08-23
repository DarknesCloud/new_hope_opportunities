import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Heart,
  Plane,
  FolderKanban,
  Mail,
  HandHeart,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  action?: {
    label: string;
    path: string;
  };
}

type Intent =
  | "donation"
  | "missions"
  | "projects"
  | "join"
  | "contact"
  | "location"
  | "unknown";

const copy = {
  es: {
    title: "Asistente New Hope",
    subtitle: "Te ayudo a encontrar lo que necesitas",
    welcome:
      "¡Hola! Puedo orientarte sobre donaciones, programas, viajes misioneros, Hope Builders y contacto. ¿Qué te gustaría conocer?",
    optionDonation: "Donaciones",
    optionMissions: "Viajes Misioneros",
    optionProjects: "Ver Programas",
    optionJoin: "Quiero unirme",
    optionContact: "Contactar",
    placeholder: "Pregunta sobre New Hope...",
    donation:
      "Puedes apoyar a New Hope con una contribución mensual segura mediante PayPal. Actualmente están disponibles aportes de $10, $25 y $35 al mes.",
    donationAction: "Ir a Donaciones",
    missions:
      "New Hope recibe y organiza experiencias misioneras vinculadas a su trabajo en Honduras. Puedes conocer más en la sección de Viajes Misioneros.",
    missionsAction: "Ver Viajes Misioneros",
    projects:
      "Puedes conocer los programas y proyectos de New Hope, incluyendo La Garra, Banda de la Paz, CHICOS, Refugio, Campamento Juvenil y otras iniciativas.",
    projectsAction: "Ver Programas",
    join:
      "Si quieres involucrarte de forma más cercana, Hope Builders es el espacio para conocer cómo formar parte de la misión y registrar tu interés.",
    joinAction: "Ir a Hope Builders",
    contact:
      "Puedes escribir directamente al equipo de New Hope desde el formulario de contacto del sitio. Tu mensaje será enviado al equipo encargado.",
    contactAction: "Abrir Contacto",
    location:
      "New Hope Opportunities Honduras trabaja en Rivera Hernández, San Pedro Sula, Honduras.",
    unknown:
      "Puedo ayudarte con donaciones, programas, viajes misioneros, Hope Builders, ubicación o contacto. Si tu consulta es más específica, puedes escribir directamente al equipo de New Hope.",
    unknownAction: "Contactar a New Hope",
  },
  en: {
    title: "New Hope Assistant",
    subtitle: "I can help you find what you need",
    welcome:
      "Hi! I can guide you through donations, programs, mission trips, Hope Builders, and contact information. What would you like to know?",
    optionDonation: "Donations",
    optionMissions: "Mission Trips",
    optionProjects: "View Programs",
    optionJoin: "I Want to Join",
    optionContact: "Contact",
    placeholder: "Ask about New Hope...",
    donation:
      "You can support New Hope through a secure monthly contribution via PayPal. The currently available monthly amounts are $10, $25, and $35.",
    donationAction: "Go to Donations",
    missions:
      "New Hope welcomes and organizes mission experiences connected to its work in Honduras. You can learn more in the Mission Trips section.",
    missionsAction: "View Mission Trips",
    projects:
      "You can explore New Hope's programs and projects, including La Garra, Banda de la Paz, CHICOS, Refugio, Youth Camp, and other initiatives.",
    projectsAction: "View Programs",
    join:
      "If you would like to become more involved, Hope Builders is the place to learn how to take part in the mission and register your interest.",
    joinAction: "Go to Hope Builders",
    contact:
      "You can write directly to the New Hope team using the website contact form. Your message will be sent to the team responsible for responding.",
    contactAction: "Open Contact",
    location:
      "New Hope Opportunities Honduras works in Rivera Hernández, San Pedro Sula, Honduras.",
    unknown:
      "I can help with donations, programs, mission trips, Hope Builders, location, or contact information. If your question is more specific, you can write directly to the New Hope team.",
    unknownAction: "Contact New Hope",
  },
} as const;

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function detectIntent(value: string): Intent {
  const text = normalizeText(value);

  if (
    /donat|donar|donacion|paypal|aportar|aporte|support|give|giving/.test(text)
  ) {
    return "donation";
  }

  if (
    /mision|mission|viaje|trip|voluntari|volunteer/.test(text)
  ) {
    return "missions";
  }

  if (
    /program|proyecto|project|garra|banda|chicos|refugio|campamento|camp/.test(text)
  ) {
    return "projects";
  }

  if (
    /unir|unirme|join|hope builder|participar|involucr|involve/.test(text)
  ) {
    return "join";
  }

  if (
    /contact|correo|email|escribir|write|mensaje|message|telefono|phone/.test(text)
  ) {
    return "contact";
  }

  if (
    /donde|ubicacion|direccion|location|address|where|san pedro|rivera/.test(text)
  ) {
    return "location";
  }

  return "unknown";
}

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function ChatbotWidget() {
  const { language } = useLanguage();
  const content = copy[language];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      {
        id: `welcome-${language}`,
        text: content.welcome,
        sender: "bot",
      },
    ]);
  }, [language, content.welcome]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const responseForIntent = (intent: Intent): Message => {
    const id = `${Date.now()}-${intent}`;

    switch (intent) {
      case "donation":
        return {
          id,
          text: content.donation,
          sender: "bot",
          action: { label: content.donationAction, path: "/donar" },
        };
      case "missions":
        return {
          id,
          text: content.missions,
          sender: "bot",
          action: {
            label: content.missionsAction,
            path: "/programas/viajes-misioneros",
          },
        };
      case "projects":
        return {
          id,
          text: content.projects,
          sender: "bot",
          action: { label: content.projectsAction, path: "/programas" },
        };
      case "join":
        return {
          id,
          text: content.join,
          sender: "bot",
          action: { label: content.joinAction, path: "/hope-builders" },
        };
      case "contact":
        return {
          id,
          text: content.contact,
          sender: "bot",
          action: { label: content.contactAction, path: "/contacto" },
        };
      case "location":
        return {
          id,
          text: content.location,
          sender: "bot",
          action: { label: content.contactAction, path: "/contacto" },
        };
      default:
        return {
          id,
          text: content.unknown,
          sender: "bot",
          action: { label: content.unknownAction, path: "/contacto" },
        };
    }
  };

  const ask = (text: string, forcedIntent?: Intent) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      text: trimmed,
      sender: "user",
    };

    const intent = forcedIntent ?? detectIntent(trimmed);
    const botResponse = responseForIntent(intent);

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue("");
  };

  const handleQuickReply = (intent: Exclude<Intent, "unknown" | "location">) => {
    const labels: Record<Exclude<Intent, "unknown" | "location">, string> = {
      donation: content.optionDonation,
      missions: content.optionMissions,
      projects: content.optionProjects,
      join: content.optionJoin,
      contact: content.optionContact,
    };

    ask(labels[intent], intent);
  };

  const handleSendMessage = () => ask(inputValue);

  const quickButtonSx = {
    justifyContent: "flex-start",
    textAlign: "left",
    p: "10px 12px",
    borderRadius: "12px",
    backgroundColor: "rgba(248,250,252,0.6)",
    color: tokens.color.graphite,
    border: "1px solid rgba(30,41,59,0.12)",
    fontSize: "0.85rem",
    fontWeight: 600,
    gap: 1.5,
    transition: "all 200ms ease-out",
    "&:hover": {
      backgroundColor: "rgba(248,250,252,1)",
      borderColor: tokens.color.hopeGold,
      boxShadow: "0 2px 8px rgba(198,124,78,0.1)",
    },
  } as const;

  return (
    <>
      <Button
        aria-label={language === "es" ? "Abrir asistente" : "Open assistant"}
        onClick={() => setIsOpen(current => !current)}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 40,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: tokens.color.hopeGold,
          color: tokens.color.warmWhite,
          boxShadow: "0 8px 24px rgba(198,124,78,0.3)",
          "&:hover": {
            backgroundColor: tokens.color.hopeGoldDark,
            boxShadow: "0 12px 32px rgba(198,124,78,0.4)",
            transform: "scale(1.08)",
          },
          transition: "all 300ms cubic-bezier(0.34,1.56,0.64,1)",
          minWidth: "auto",
          p: 0,
        }}
      >
        <MessageCircle size={24} />
      </Button>

      {isOpen && (
        <Paper
          role="dialog"
          aria-label={content.title}
          sx={{
            position: "fixed",
            bottom: 96,
            right: { xs: 12, sm: 24 },
            zIndex: 41,
            width: { xs: "calc(100vw - 24px)", sm: 390 },
            height: { xs: 520, sm: 540 },
            maxHeight: "calc(100vh - 120px)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: tokens.color.warmWhite,
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(30,41,59,0.97) 100%)",
              color: tokens.color.warmWhite,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 750, fontSize: "0.95rem" }}>
                {content.title}
              </Typography>
              <Typography sx={{ fontSize: "0.75rem", opacity: 0.72 }}>
                {content.subtitle}
              </Typography>
            </Box>
            <Button
              aria-label={language === "es" ? "Cerrar asistente" : "Close assistant"}
              onClick={() => setIsOpen(false)}
              sx={{
                minWidth: "auto",
                p: 0.6,
                color: tokens.color.warmWhite,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
              }}
            >
              <X size={18} strokeWidth={1.5} />
            </Button>
          </Box>

          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              backgroundColor: "rgba(248,250,252,0.82)",
            }}
          >
            {messages.map(msg => (
              <Box
                key={msg.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
                  gap: 0.8,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    maxWidth: "84%",
                    borderRadius: "14px",
                    backgroundColor:
                      msg.sender === "user"
                        ? tokens.color.hopeGold
                        : "rgba(30,41,59,0.08)",
                    color:
                      msg.sender === "user"
                        ? tokens.color.graphite
                        : tokens.color.graphite,
                  }}
                >
                  <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.55 }}>
                    {msg.text}
                  </Typography>
                </Paper>

                {msg.sender === "bot" && msg.action && (
                  <Button
                    size="small"
                    onClick={() => {
                      navigate(msg.action!.path);
                      setIsOpen(false);
                    }}
                    sx={{
                      ml: 0.5,
                      px: 1.4,
                      py: 0.6,
                      borderRadius: tokens.radius.pill,
                      color: tokens.color.graphite,
                      backgroundColor: tokens.color.hopeGoldPale,
                      border: `1px solid ${tokens.color.line}`,
                      fontSize: "0.77rem",
                      fontWeight: 800,
                      textTransform: "none",
                    }}
                  >
                    {msg.action.label}
                  </Button>
                )}
              </Box>
            ))}

            {messages.length === 1 && (
              <Box sx={{ display: "grid", gap: 1, mt: 0.5 }}>
                <Button onClick={() => handleQuickReply("donation")} sx={quickButtonSx}>
                  <Heart size={16} color={tokens.color.hopeGoldDark} />
                  {content.optionDonation}
                </Button>
                <Button onClick={() => handleQuickReply("missions")} sx={quickButtonSx}>
                  <Plane size={16} color={tokens.color.hopeGoldDark} />
                  {content.optionMissions}
                </Button>
                <Button onClick={() => handleQuickReply("projects")} sx={quickButtonSx}>
                  <FolderKanban size={16} color={tokens.color.hopeGoldDark} />
                  {content.optionProjects}
                </Button>
                <Button onClick={() => handleQuickReply("join")} sx={quickButtonSx}>
                  <HandHeart size={16} color={tokens.color.hopeGoldDark} />
                  {content.optionJoin}
                </Button>
                <Button onClick={() => handleQuickReply("contact")} sx={quickButtonSx}>
                  <Mail size={16} color={tokens.color.hopeGoldDark} />
                  {content.optionContact}
                </Button>
              </Box>
            )}

            <Box ref={messagesEndRef} />
          </Box>

          <Box
            sx={{
              p: 1.5,
              borderTop: "1px solid rgba(30,41,59,0.08)",
              display: "flex",
              gap: 1,
              backgroundColor: tokens.color.warmWhite,
            }}
          >
            <TextField
              size="small"
              placeholder={content.placeholder}
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
              onKeyDown={event => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleSendMessage();
                }
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "rgba(248,250,252,0.8)",
                  fontSize: "0.9rem",
                  "&.Mui-focused fieldset": {
                    borderColor: tokens.color.hopeGold,
                  },
                },
              }}
            />
            <Button
              aria-label={language === "es" ? "Enviar pregunta" : "Send question"}
              onClick={handleSendMessage}
              sx={{
                minWidth: 42,
                width: 42,
                p: 1,
                borderRadius: "12px",
                backgroundColor: tokens.color.hopeGold,
                color: tokens.color.graphite,
                "&:hover": {
                  backgroundColor: tokens.color.hopeGoldSoft,
                },
              }}
            >
              <Send size={18} strokeWidth={1.7} />
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}
