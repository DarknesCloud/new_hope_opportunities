import { Box, Link, Typography } from "@mui/material";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

export function DeveloperCredit() {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        mt: "-1px",
        py: 1.4,
        px: 2,
        textAlign: "center",
        backgroundColor: tokens.color.graphiteDark,
        borderTop: "1px solid rgba(255,255,255,0.035)",
      }}
    >
      <Typography
        component="span"
        sx={{
          color: "rgba(255,255,255,0.22)",
          fontFamily: tokens.font.body,
          fontSize: "0.68rem",
          fontWeight: 500,
          letterSpacing: "0.025em",
        }}
      >
        {language === "es" ? "Sitio desarrollado por " : "Site developed by "}
        <Link
          href="https://fenixsolutionshn.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fénix Solutions"
          sx={{
            color: "rgba(255,255,255,0.30)",
            textDecoration: "none",
            fontWeight: 650,
            transition: "color 180ms ease",
            "&:hover": {
              color: tokens.color.hopeGold,
            },
          }}
        >
          Fénix Solutions
        </Link>
      </Typography>
    </Box>
  );
}
