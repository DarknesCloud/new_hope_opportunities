import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowRight, HeartHandshake, Play, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";
import heroHope from "@/assets/photos/hero-hope.webp";

interface HeroSectionProps {
  mediaUrl?: string;
  onSponsorClick?: () => void;
  onVideoClick?: () => void;
}

export function HeroSection({
  mediaUrl = heroHope,
  onSponsorClick,
  onVideoClick,
}: HeroSectionProps) {
  const { language } = useLanguage();

  const content = {
    es: {
      eyebrow: "Educación y fe en Rivera Hernández",
      title: "Educando con identidad, valores y el amor de Jesus",
      subtitle:
        "New Hope Opportunities brinda oportunidades educativas y cristianas a niños, jóvenes y adultos de Rivera Hernández, San Pedro Sula, para que tengan esperanza de un futuro mejor.",
      sponsorBtn: "",
      donateBtn: "Donar ahora",
      videoBtn: "Ver historia de impacto",
      trust: "Integridad financiera y responsabilidad",
      statOne: "+250",
      statOneLabel: "estudiantes en Escuela Esperanza",
      statTwo: "$250k",
      statTwoLabel: "meta financiera 2026",
      imageCaption:
        "Cada niño merece aprender con dignidad, alegría y esperanza.",
    },
    en: {
      eyebrow: "Education and faith in Rivera Hernández",
      title: "Transforming lives through love and education.",
      subtitle:
        "New Hope Opportunities provides educational and Christian opportunities for children, youth, and adults in Rivera Hernández, San Pedro Sula, so they can have hope for a better future.",
      sponsorBtn: "Sponsor a story",
      donateBtn: "Donate now",
      videoBtn: "Watch impact story",
      trust: "Financial integrity and responsability",
      statOne: "+250",
      statOneLabel: "students at Escuela Esperanza",
      statTwo: "$250k",
      statTwoLabel: "2026 financial goal",
      imageCaption:
        "Every child deserves to learn with dignity, joy, and hope.",
    },
  }[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "calc(100vh - 76px)", md: "calc(100vh - 88px)" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: `radial-gradient(circle at 15% 18%, rgba(242, 185, 0, 0.16) 0%, rgba(242, 185, 0, 0) 30%), linear-gradient(135deg, ${tokens.color.ivory} 0%, ${tokens.color.warmWhite} 48%, ${tokens.color.hopeGoldPale} 100%)`,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(52, 52, 52, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 52, 52, 0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 78%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 11 } }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 0.95fr) minmax(420px, 1.05fr)",
            },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 690 }}>
            <Box className="editorial-eyebrow" sx={{ mb: { xs: 3, md: 4 } }}>
              <HeartHandshake
                size={16}
                color={tokens.color.hopeGold}
                strokeWidth={2.2}
              />
              {content.eyebrow}
            </Box>

            <Typography
              component="h1"
              variant="h1"
              sx={{ maxWidth: 760, mb: { xs: 3, md: 3.5 } }}
            >
              {content.title}
            </Typography>

            <Typography
              component="p"
              variant="subtitle1"
              sx={{
                maxWidth: 610,
                color: tokens.color.graphiteSoft,
                mb: { xs: 4, md: 5 },
              }}
            >
              {content.subtitle}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                mb: { xs: 4.5, md: 6 },
              }}
            >
              <Button
                onClick={onSponsorClick}
                variant="contained"
                color="primary"
                endIcon={<ArrowRight size={18} />}
                sx={{ minHeight: 54, px: 3.2, fontSize: "0.98rem" }}
              >
                {content.sponsorBtn}
              </Button>

              <Button
                variant="outlined"
                sx={{ minHeight: 54, px: 3.2, fontSize: "0.98rem" }}
              >
                {content.donateBtn}
              </Button>

              <Button
                onClick={onVideoClick}
                variant="text"
                startIcon={<Play size={17} />}
                sx={{
                  minHeight: 54,
                  px: 2.6,
                  fontSize: "0.95rem",
                  fontWeight: 720,
                }}
              >
                {content.videoBtn}
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, sm: 3.5 },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.15,
                  color: tokens.color.graphiteSoft,
                }}
              >
                <ShieldCheck size={18} color={tokens.color.hopeGoldDark} />
                <Typography
                  sx={{
                    fontFamily: tokens.font.body,
                    fontSize: "0.9rem",
                    fontWeight: 680,
                  }}
                >
                  {content.trust}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2.6 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: tokens.font.display,
                      color: tokens.color.graphite,
                      fontSize: "1.35rem",
                      fontWeight: 850,
                      lineHeight: 1,
                    }}
                  >
                    {content.statOne}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: tokens.font.body,
                      color: tokens.color.graphiteSoft,
                      fontSize: "0.78rem",
                      fontWeight: 620,
                    }}
                  >
                    {content.statOneLabel}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: tokens.font.display,
                      color: tokens.color.graphite,
                      fontSize: "1.35rem",
                      fontWeight: 850,
                      lineHeight: 1,
                    }}
                  >
                    {content.statTwo}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: tokens.font.body,
                      color: tokens.color.graphiteSoft,
                      fontSize: "0.78rem",
                      fontWeight: 620,
                    }}
                  >
                    {content.statTwoLabel}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            className="hope-card-premium"
            sx={{
              position: "relative",
              minHeight: { xs: 430, sm: 560, md: 680 },
              overflow: "hidden",
              backgroundColor: tokens.color.hopeGoldPale,
            }}
          >
            <Box
              component="img"
              src={mediaUrl}
              alt="Niños aprendiendo con esperanza en New Hope Opportunities Honduras"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.98) contrast(1.03)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, ${tokens.color.overlay} 0%, rgba(52, 52, 52, 0.18) 45%, rgba(255,255,255,0.02) 100%)`,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: { xs: 20, md: 28 },
                right: { xs: 20, md: 28 },
                px: 2,
                py: 1,
                borderRadius: tokens.radius.pill,
                backgroundColor: "rgba(255, 255, 255, 0.88)",
                backdropFilter: "blur(12px)",
                color: tokens.color.graphite,
                fontFamily: tokens.font.body,
                fontSize: "0.78rem",
                fontWeight: 800,
                boxShadow: tokens.shadow.subtle,
              }}
            >
              New Hope · Honduras
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: { xs: 24, md: 34 },
                right: { xs: 24, md: 34 },
                bottom: { xs: 24, md: 34 },
              }}
            >
              <Typography
                sx={{
                  maxWidth: 470,
                  color: tokens.color.warmWhite,
                  fontFamily: tokens.font.display,
                  fontSize: { xs: "1.7rem", md: "2.25rem" },
                  lineHeight: 1.08,
                  letterSpacing: "-0.045em",
                  fontWeight: 820,
                  textWrap: "balance",
                }}
              >
                {content.imageCaption}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
