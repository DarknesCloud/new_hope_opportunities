import { Box, Card, Container, Typography } from "@mui/material";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

interface BoardMember {
  name: string;
  role: string;
  image: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "María González",
    role: "Founder & Executive Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Carlos Rodríguez",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ana Martínez",
    role: "Director of Education",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David López",
    role: "Director of Operations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Isabel Fernández",
    role: "Secretary",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Roberto Sánchez",
    role: "Treasurer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

const copy = {
  es: {
    title: "Junta Directiva",
    subtitle: "Liderazgo comprometido con la misión de transformar vidas.",
  },
  en: {
    title: "Board of Directors",
    subtitle: "Leadership committed to transforming lives.",
  },
} as const;

export function BoardOfDirectors() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <Box
      component="section"
      className="section-shell"
      sx={{ backgroundColor: tokens.color.warmWhite }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: tokens.color.graphite,
            }}
          >
            {content.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: tokens.color.graphiteSoft,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            {content.subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {boardMembers.map((member, index) => (
            <Card
              key={index}
              className="hope-card-premium"
              sx={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(52, 52, 52, 0.12)",
                },
              }}
            >
              {/* Image Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "125%",
                  overflow: "hidden",
                  backgroundColor: tokens.color.hopeGoldPale,
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>

              {/* Text Content */}
              <Box sx={{ p: { xs: 2.4, md: 3 }, flex: 1, display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: 850,
                    color: tokens.color.graphite,
                    mb: 0.8,
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: tokens.color.hopeGold,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
