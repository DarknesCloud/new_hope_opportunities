import { Box } from "@mui/material";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HopeBuilderHero } from "@/components/HopeBuilderHero";
import { HopeBuilderIntroduction } from "@/components/HopeBuilderIntroduction";
import { WhatItMeansHopeBuilder } from "@/components/WhatItMeansHopeBuilder";
import { ImpactExamples } from "@/components/ImpactExamples";
import { HopeBuilderRegistration } from "@/components/HopeBuilderRegistration";
import { HopeBuilderClosing } from "@/components/HopeBuilderClosing";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

export default function HopeBuilders() {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: tokens.color.ivory,
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HopeBuilderHero />

      {/* Introduction Section */}
      <HopeBuilderIntroduction />

      {/* What It Means Section */}
      <WhatItMeansHopeBuilder />

      {/* Impact Examples Section */}
      <ImpactExamples />

      {/* Registration Form Section */}
      <HopeBuilderRegistration />

      {/* Closing Section */}
      <HopeBuilderClosing />

      {/* Main content area - will be filled with components */}
      <Box sx={{ flex: 1 }} />

      {/* Footer */}
      <Footer language={language} />
    </Box>
  );
}
