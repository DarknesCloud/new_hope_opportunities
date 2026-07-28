import { Box, Button, Card, Container, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { designTokens as tokens } from "@/theme/designTokens";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import impactSports from "@/assets/photos/impact-sports.webp";
import programBand from "@/assets/photos/program-band.webp";

interface CommunityProgram {
  id: string;
  title: string;
  text: string;
  image: string;
}

interface CommunityProgramsSliderProps {
  title: string;
  body: string;
  programs: CommunityProgram[];
}

export function CommunityProgramsSlider({ title, body, programs }: CommunityProgramsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [, navigate] = useLocation();

  // Auto-rotate slider every 3 seconds
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
      }, 3000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [programs.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
    // Reset autoplay when user interacts
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
    // Reset autoplay when user interacts
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setDragStart("clientX" in e ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = "clientX" in e ? e.clientX : e.changedTouches[0].clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
    // Reset autoplay after drag
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: tokens.color.warmSand,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
            gap: { xs: 3, md: 7 },
            mb: { xs: 5, md: 6 },
            alignItems: "end",
          }}
        >
          <Typography variant="h2">{title}</Typography>
          <Typography
            sx={{ color: tokens.color.graphiteSoft, lineHeight: 1.85 }}
          >
            {body}
          </Typography>
        </Box>

        {/* Slider Container */}
        <Box sx={{ position: "relative" }}>
          {/* Carousel Wrapper */}
          <Box
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: tokens.radius.lg,
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {/* Slides */}
            <Box
              sx={{
                display: "flex",
                transition: isDragging ? "none" : "transform 500ms ease-out",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {programs.map((program) => (
                <Box
                  key={program.title}
                  sx={{
                    minWidth: "100%",
                    position: "relative",
                    height: { xs: 400, md: 500 },
                    overflow: "hidden",
                    borderRadius: tokens.radius.lg,
                  }}
                >
                  {/* Background Image */}
                  <Box
                    component="img"
                    src={program.image}
                    alt={program.title}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 700ms ease-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(31,31,31,0.74), rgba(31,31,31,0.08))",
                      zIndex: 1,
                    }}
                  />

                  {/* Content */}
                  <Box
                    onClick={() => navigate(`/programas/${program.id}`)}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 3, md: 4 },
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "100%",
                      cursor: "pointer",
                      transition: `all 300ms ${tokens.easing.premium}`,
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: tokens.color.warmWhite,
                        mb: 1,
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        fontWeight: 900,
                        textShadow: "0 4px 16px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {program.title}
                    </Typography>
                    <Typography
                      sx={{ color: "rgba(255,255,255,0.74)", lineHeight: 1.7 }}
                    >
                      {program.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Navigation Arrows */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "space-between",
              px: { xs: 2, md: 3 },
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <Button
              onClick={handlePrevious}
              sx={{
                pointerEvents: "auto",
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: tokens.color.graphite,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 300ms ease-out",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  backgroundColor: tokens.color.hopeGold,
                  transform: "scale(1.1)",
                  boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
                },
              }}
            >
              <ArrowLeft size={20} />
            </Button>

            <Button
              onClick={handleNext}
              sx={{
                pointerEvents: "auto",
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                color: tokens.color.graphite,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 300ms ease-out",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  backgroundColor: tokens.color.hopeGold,
                  transform: "scale(1.1)",
                  boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
                },
              }}
            >
              <ArrowRight size={20} />
            </Button>
          </Box>

          {/* Dots Indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1.2,
              zIndex: 3,
            }}
          >
            {programs.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  // Reset autoplay when user clicks dots
                  if (autoplayRef.current) {
                    clearInterval(autoplayRef.current);
                  }
                  autoplayRef.current = setInterval(() => {
                    setCurrentIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
                  }, 3000);
                }}
                sx={{
                  width: currentIndex === index ? 28 : 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index ? tokens.color.hopeGold : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "all 300ms ease-out",
                  "&:hover": {
                    backgroundColor:
                      currentIndex === index ? tokens.color.hopeGold : "rgba(255, 255, 255, 0.7)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
