import { Box } from "@mui/material";
import { designTokens as tokens } from "@/theme/designTokens";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { AboutHero } from "@/components/AboutHero";
import { OurStory } from "@/components/OurStory";
import { Achievements } from "@/components/Achievements";
import { EducationLevels } from "@/components/EducationLevels";
import { AcademicAreas } from "@/components/AcademicAreas";
import { TeamAndStaff } from "@/components/TeamAndStaff";

import { ExtracurricularAndObjectives } from "@/components/ExtracurricularAndObjectives";
import { SuccessStories } from "@/components/SuccessStories";
import { LearningEnvironment } from "@/components/LearningEnvironment";
import { OtherResources } from "@/components/OtherResources";

export default function About() {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: tokens.color.ivory,
      }}
    >
      {/* Hero Section */}
      <AboutHero />

      {/* Our Story Section */}
      <OurStory />

      {/* Achievements Section */}
      <Achievements />

      {/* Education Levels Section */}
      <EducationLevels />

      {/* Academic Areas Section */}
      <AcademicAreas />

      {/* Team and Staff Section */}
      <TeamAndStaff />

      {/* Extracurricular and Objectives Section */}
      <ExtracurricularAndObjectives />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Learning Environment Section */}
      <LearningEnvironment />

      {/* Other Resources Section */}
      <OtherResources />

      {/* Main content area - will be filled with components */}
      <Box sx={{ flex: 1 }} />

      {/* Footer */}
      <Footer language={language} />
    </Box>
  );
}
