import { Box } from "@mui/material";
import { HeroImpact6 } from "@/components/HeroImpact6";
import { MissionStatement } from "@/components/MissionStatement";
import { PrincipleCards } from "@/components/PrincipleCards";
import { EducationalModel } from "@/components/EducationalModel";
import { CallToAction } from "@/components/CallToAction";
import { NewsAndEvents } from "@/components/NewsAndEvents";
import { ImpactStats } from "@/components/ImpactStats";
import { DonationGateway } from "@/components/DonationGateway";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

export default function Home() {
  const { language } = useLanguage();

  const handleSponsorClick = () => {
    document
      .getElementById("donar")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleVideoClick = () => {
    window.history.pushState({}, "", "/acerca-de");
    window.dispatchEvent(new PopStateEvent("popstate"));
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
      <DonationGateway />
      <Footer language={language} />
    </Box>
  );
}
