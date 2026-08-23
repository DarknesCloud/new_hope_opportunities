import { Box } from "@mui/material";
import { HeroImpact6 } from "@/components/HeroImpact6";
import { MissionStatement } from "@/components/MissionStatement";
import { PrincipleCards } from "@/components/PrincipleCards";
import { EducationalModel } from "@/components/EducationalModel";
import { CallToAction } from "@/components/CallToAction";
import { NewsAndEvents } from "@/components/NewsAndEvents";
import { ImpactStats } from "@/components/ImpactStats";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function Home() {
  const { language } = useLanguage();

  const handleSponsorClick = () => {
    navigate("/donar");
  };

  const handleVideoClick = () => {
    navigate("/acerca-de");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: tokens.color.ivory,
      }}
    >
      <HeroImpact6
        onSponsorClick={handleSponsorClick}
        onVideoClick={handleVideoClick}
      />

      <MissionStatement />
      <PrincipleCards />
      <EducationalModel />
      <CallToAction />
      <NewsAndEvents />
      <ImpactStats />
      <Footer language={language} />
    </Box>
  );
}
