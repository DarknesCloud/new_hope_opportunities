import { Box } from "@mui/material";
import { HeroImpact6 } from "@/components/HeroImpact6";
import { MissionStatement } from "@/components/MissionStatement";
import { PrincipleCards } from "@/components/PrincipleCards";
import { EducationalModel } from "@/components/EducationalModel";
import { CallToAction } from "@/components/CallToAction";
import { NewsAndEvents } from "@/components/NewsAndEvents";
import { ImpactStats } from "@/components/ImpactStats";
import { ImpactBar } from "@/components/ImpactBar";
import { EducationPathway } from "@/components/EducationPathway";
import { SuccessStoriesWall } from "@/components/SuccessStoriesWall";
import { AlliancesSlider } from "@/components/AlliancesSlider";
import { MosaicHope } from "@/components/MosaicHope";
import { RaicesCatrachas } from "@/components/RaicesCatrachas";
import { DonationModule } from "@/components/DonationModule";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

export default function Home() {
  const { language } = useLanguage();

  const handleSponsorClick = () => {
    document.getElementById("donar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleVideoClick = () => {
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: tokens.color.ivory }}>
      <HeroImpact6 onSponsorClick={handleSponsorClick} onVideoClick={handleVideoClick} />

      <MissionStatement />

      <PrincipleCards />

      <EducationalModel />

      <CallToAction />

      <NewsAndEvents />

      <ImpactStats />

      {/* <ImpactBar language={language} /> */}

      {/* <EducationPathway language={language} /> */}

      {/* <Box id="historia">
        <SuccessStoriesWall language={language} />
      </Box> */}

      {/* <AlliancesSlider /> */}

      {/* <MosaicHope /> */}

      {/* <RaicesCatrachas /> */}

      {/* <Box id="donar">
        <DonationModule language={language} />
      </Box> */}

      <Footer language={language} />
    </Box>
  );
}
