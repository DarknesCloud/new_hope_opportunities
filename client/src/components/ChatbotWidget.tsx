import { useState } from "react";
import { MessageCircle, X, Send, Heart, Plane, FolderKanban } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const copy = {
  es: {
    welcome: "¿Cómo te gustaría impactar vidas hoy?",
    option1: "Donaciones",
    option2: "Viajes Misioneros",
    option3: "Ver Proyectos",
    donation: "Gracias por tu interés en donar. Visita nuestra sección de Donaciones para conocer cómo puedes apoyar.",
    missions: "¡Excelente! Conoce nuestros viajes misioneros en la sección Impacto y Misiones.",
    projects: "Descubre todos nuestros programas comunitarios en Impacto y Misiones.",
    placeholder: "Escribe tu mensaje...",
  },
  en: {
    welcome: "How would you like to make an impact today?",
    option1: "Donations",
    option2: "Missionary Trips",
    option3: "View Projects",
    donation: "Thank you for your interest in donating. Visit our Donations section to learn how you can support us.",
    missions: "Excellent! Discover our missionary trips in the Impact and Missions section.",
    projects: "Explore all our community programs in Impact and Missions.",
    placeholder: "Type your message...",
  },
} as const;

export function ChatbotWidget() {
  const { language } = useLanguage();
  const content = copy[language];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: content.welcome,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleQuickReply = (option: "donation" | "missions" | "projects") => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text:
        option === "donation"
          ? content.option1
          : option === "missions"
            ? content.option2
            : content.option3,
      sender: "user",
      timestamp: new Date(),
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text:
        option === "donation"
          ? content.donation
          : option === "missions"
            ? content.missions
            : content.projects,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulated bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: language === "es" 
          ? "Gracias por tu mensaje. Nuestro equipo se pondrá en contacto pronto."
          : "Thank you for your message. Our team will get back to you soon.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
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
          boxShadow: "0 8px 24px rgba(198, 124, 78, 0.3)",
          "&:hover": {
            backgroundColor: tokens.color.hopeGoldDark,
            boxShadow: "0 12px 32px rgba(198, 124, 78, 0.4)",
            transform: "scale(1.1)",
          },
          transition: "all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "auto",
          padding: 0,
        }}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 100,
            right: 24,
            zIndex: 41,
            width: { xs: "90vw", sm: 380 },
            maxHeight: 500,
            borderRadius: "20px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: tokens.color.warmWhite,
            animation: "slideUp 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
            "@keyframes slideUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {/* Header - Premium & Clean */}
          <Box
            sx={{
              background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.95) 100%)",
              backdropFilter: "blur(10px)",
              color: tokens.color.warmWhite,
              p: 2,
              borderRadius: "20px 20px 0 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                fontFamily: tokens.font.body,
                letterSpacing: "0.02em",
              }}
            >
              New Hope
            </Typography>
            <Button
              onClick={() => setIsOpen(false)}
              sx={{
                minWidth: "auto",
                p: 0.5,
                color: tokens.color.warmWhite,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                borderRadius: "8px",
                transition: "all 200ms ease-out",
              }}
            >
              <X size={18} strokeWidth={1.5} />
            </Button>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              backgroundColor: "rgba(248,250,252,0.8)",
            }}
          >
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  animation: "fadeIn 300ms ease-in",
                  "@keyframes fadeIn": {
                    from: { opacity: 0, transform: "translateY(10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    maxWidth: "80%",
                    borderRadius: "14px",
                    backgroundColor:
                      msg.sender === "user"
                        ? tokens.color.hopeGold
                        : "rgba(30,41,59,0.08)",
                    color:
                      msg.sender === "user"
                        ? tokens.color.warmWhite
                        : tokens.color.grafito,
                  }}
                  elevation={0}
                >
                  <Typography sx={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {msg.text}
                  </Typography>
                </Paper>
              </Box>
            ))}

            {/* Quick Reply Buttons - Minimalista Premium */}
            {messages.length === 1 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 1 }}>
                <Button
                  onClick={() => handleQuickReply("donation")}
                  sx={{
                    textAlign: "left",
                    p: "10px 12px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(248,250,252,0.6)",
                    color: tokens.color.grafito,
                    border: "1px solid rgba(30,41,59,0.12)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "all 200ms ease-out",
                    "&:hover": {
                      backgroundColor: "rgba(248,250,252,1)",
                      borderColor: tokens.color.hopeGold,
                      boxShadow: "0 2px 8px rgba(198, 124, 78, 0.1)",
                    },
                  }}
                >
                  <Heart size={16} strokeWidth={1.5} color={tokens.color.hopeGold} />
                  {content.option1}
                </Button>
                <Button
                  onClick={() => handleQuickReply("missions")}
                  sx={{
                    textAlign: "left",
                    p: "10px 12px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(248,250,252,0.6)",
                    color: tokens.color.grafito,
                    border: "1px solid rgba(30,41,59,0.12)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "all 200ms ease-out",
                    "&:hover": {
                      backgroundColor: "rgba(248,250,252,1)",
                      borderColor: tokens.color.hopeGold,
                      boxShadow: "0 2px 8px rgba(198, 124, 78, 0.1)",
                    },
                  }}
                >
                  <Plane size={16} strokeWidth={1.5} color={tokens.color.hopeGold} />
                  {content.option2}
                </Button>
                <Button
                  onClick={() => handleQuickReply("projects")}
                  sx={{
                    textAlign: "left",
                    p: "10px 12px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(248,250,252,0.6)",
                    color: tokens.color.grafito,
                    border: "1px solid rgba(30,41,59,0.12)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "all 200ms ease-out",
                    "&:hover": {
                      backgroundColor: "rgba(248,250,252,1)",
                      borderColor: tokens.color.hopeGold,
                      boxShadow: "0 2px 8px rgba(198, 124, 78, 0.1)",
                    },
                  }}
                >
                  <FolderKanban size={16} strokeWidth={1.5} color={tokens.color.hopeGold} />
                  {content.option3}
                </Button>
              </Box>
            )}
          </Box>

          {/* Input - Clean & Professional */}
          <Box
            sx={{
              p: 1.5,
              borderTop: "1px solid rgba(30,41,59,0.08)",
              display: "flex",
              gap: 1,
              backgroundColor: tokens.color.warmWhite,
              borderRadius: "0 0 20px 20px",
            }}
          >
            <TextField
              size="small"
              placeholder={content.placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "rgba(248,250,252,0.8)",
                  fontSize: "0.9rem",
                  "& fieldset": {
                    borderColor: "rgba(30,41,59,0.12)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(30,41,59,0.2)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: tokens.color.hopeGold,
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: "rgba(30,41,59,0.4)",
                  opacity: 1,
                },
              }}
            />
            <Button
              onClick={handleSendMessage}
              sx={{
                minWidth: "auto",
                p: 1,
                borderRadius: "12px",
                backgroundColor: tokens.color.hopeGold,
                color: tokens.color.warmWhite,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 200ms ease-out",
                "&:hover": {
                  backgroundColor: tokens.color.hopeGoldDark,
                  transform: "scale(1.05)",
                },
              }}
            >
              <Send size={18} strokeWidth={1.5} />
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}
