import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowRight, HeartHandshake, Play, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

// Import images
import kid1 from "@/assets/photos/kids/DSC02058.JPG";
import kid2 from "@/assets/photos/kids/DSC02309.JPG";
import kid3 from "@/assets/photos/kids/DSC02332.JPG";
import kid4 from "@/assets/photos/kids/DSC04857.JPG";
import kid5 from "@/assets/photos/kids/DSC04856.JPG";
import kid6 from "@/assets/photos/kids/DSC04845.JPG";

interface HeroImpact6Props {
  onSponsorClick?: () => void;
  onVideoClick?: () => void;
}

const KIDS_IMAGES = [kid1, kid2, kid3, kid4, kid5, kid6];

export function HeroImpact6({
  onSponsorClick,
  onVideoClick,
}: HeroImpact6Props) {
  const { language } = useLanguage();

  const content = {
    es: {
      tagline: "Transforming lives",
      eyebrow: "Educación y fe en Rivera Hernández",
      title: "Creciendo con identidad, valores y esperanza.",
      subtitle:
        "New Hope Opportunities acompaña a niños, jóvenes y familias con educación cristiana, formación integral y oportunidades reales para construir un futuro mejor desde Rivera Hernández.",
      sponsorBtn: "Ver mas informacion",
      donateBtn: "Contactanos",
      //videoBtn: "Ver historia de impacto",
      trust: "Integridad financiera y responsabilidad",
      statOne: "+250",
      statOneLabel: "estudiantes en Escuela Esperanza",
      statTwo: "$250k",
      statTwoLabel: "meta financiera 2026",
    },
    en: {
      tagline: "Transforming lives",
      eyebrow: "Education and faith in Rivera Hernández",
      title: "Growing with identity, values and hope.",
      subtitle:
        "New Hope Opportunities accompanies children, youth and families with Christian education, comprehensive training and real opportunities to build a better future from Rivera Hernández.",
      sponsorBtn: "Sponsor a story",
      donateBtn: "Donate now",
      videoBtn: "Watch impact story",
      trust: "Financial integrity, stewardship, and accountability",
      statOne: "+250",
      statOneLabel: "students at Escuela Esperanza",
      statTwo: "$150k",
      statTwoLabel: "2026 financial goal",
    },
  }[language];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        background: `linear-gradient(135deg, ${tokens.color.ivory} 0%, ${tokens.color.warmWhite} 48%, ${tokens.color.hopeGoldPale} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Grid Background */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(52, 52, 52, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 52, 52, 0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.55), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 8, md: 11 },
        }}
      >
        {/* Two Column Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT COLUMN: Text Block */}
          <Box sx={{ maxWidth: 610 }}>
            {/* Tagline - lowercase */}
            <Typography
              sx={{
                fontFamily: tokens.font.display,
                fontSize: { xs: "0.75rem", md: "0.8rem" },
                fontWeight: 900,
                letterSpacing: "0.08em",
                color: tokens.color.graphiteSoft,
                textTransform: "lowercase",
                mb: { xs: 2.5, md: 3 },
                lineHeight: 1,
              }}
            >
              {content.tagline}
            </Typography>

            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
                px: 2,
                py: 1,
                borderRadius: tokens.radius.pill,
                backgroundColor: "rgba(242, 185, 0, 0.12)",
                mb: { xs: 3, md: 4 },
              }}
            >
              <HeartHandshake
                size={16}
                color={tokens.color.hopeGold}
                strokeWidth={2.2}
              />
              <Typography
                sx={{
                  fontFamily: tokens.font.body,
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: tokens.color.graphite,
                }}
              >
                {content.eyebrow}
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              component="h1"
              variant="h1"
              sx={{ maxWidth: 560, mb: { xs: 3, md: 3.5 } }}
            >
              {content.title}
            </Typography>

            {/* Subtitle */}
            <Typography
              component="p"
              variant="subtitle1"
              sx={{
                maxWidth: 560,
                color: tokens.color.graphiteSoft,
                mb: { xs: 4, md: 5 },
              }}
            >
              {content.subtitle}
            </Typography>

            {/* CTA Buttons */}
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

            {/* Trust & Stats */}
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

          {/* RIGHT COLUMN: 3x2 Grid of Kids Images */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: { xs: 1.5, md: 2 },
              alignContent: "start",
            }}
          >
            {KIDS_IMAGES.map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: tokens.radius.lg,
                  aspectRatio: "3 / 4",
                  background: tokens.color.hopeGoldPale,
                  boxShadow: "0 4px 12px rgba(52, 52, 52, 0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(52, 52, 52, 0.12)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Niño ${index + 1} - New Hope Opportunities`}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "saturate(1.05) contrast(1.08) brightness(0.98)",
                  }}
                />
                {/* Subtle overlay gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, rgba(242, 185, 0, 0.06) 0%, rgba(52, 52, 52, 0.02) 100%)`,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
