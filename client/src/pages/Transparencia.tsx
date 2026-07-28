import { Box } from "@mui/material";
import { Footer } from "@/components/Footer";
import { TransparencyTrust } from "@/components/TransparencyTrust";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

export function Transparencia() {
  const { language } = useLanguage();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: tokens.color.ivory }}>
      <TransparencyTrust language={language} page />
      <Footer language={language} />
    </Box>
  );
}
