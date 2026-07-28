import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { designTokens as tokens } from "@/theme/designTokens";

const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: tokens.color.graphite,
      light: tokens.color.graphiteSoft,
      dark: tokens.color.graphiteDark,
      contrastText: tokens.color.warmWhite,
    },
    secondary: {
      main: tokens.color.hopeGold,
      light: tokens.color.hopeGoldSoft,
      dark: tokens.color.hopeGoldDark,
      contrastText: tokens.color.graphite,
    },
    background: {
      default: tokens.color.ivory,
      paper: tokens.color.warmWhite,
    },
    text: {
      primary: tokens.color.graphite,
      secondary: tokens.color.graphiteSoft,
    },
    divider: tokens.color.line,
    error: {
      main: tokens.color.danger,
      contrastText: tokens.color.warmWhite,
    },
    warning: {
      main: tokens.color.hopeGold,
      light: tokens.color.hopeGoldSoft,
      dark: tokens.color.hopeGoldDark,
      contrastText: tokens.color.graphite,
    },
    success: {
      main: tokens.color.success,
      contrastText: tokens.color.warmWhite,
    },
  },
  typography: {
    fontFamily: tokens.font.body,
    h1: {
      fontFamily: tokens.font.display,
      fontSize: "clamp(3.05rem, 7vw, 5.45rem)",
      fontWeight: 850,
      letterSpacing: "-0.07em",
      lineHeight: 0.94,
    },
    h2: {
      fontFamily: tokens.font.display,
      fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
      fontWeight: 820,
      letterSpacing: "-0.055em",
      lineHeight: 1.02,
    },
    h3: {
      fontFamily: tokens.font.display,
      fontSize: "clamp(1.85rem, 3vw, 2.75rem)",
      fontWeight: 780,
      letterSpacing: "-0.045em",
      lineHeight: 1.12,
    },
    h4: {
      fontFamily: tokens.font.display,
      fontSize: "clamp(1.45rem, 2vw, 2rem)",
      fontWeight: 760,
      letterSpacing: "-0.035em",
      lineHeight: 1.18,
    },
    h5: {
      fontFamily: tokens.font.display,
      fontSize: "1.35rem",
      fontWeight: 740,
      letterSpacing: "-0.025em",
      lineHeight: 1.25,
    },
    h6: {
      fontFamily: tokens.font.display,
      fontSize: "1.05rem",
      fontWeight: 720,
      letterSpacing: "-0.015em",
      lineHeight: 1.35,
    },
    subtitle1: {
      fontFamily: tokens.font.body,
      fontSize: "1.18rem",
      fontWeight: 450,
      lineHeight: 1.78,
      letterSpacing: "-0.01em",
    },
    subtitle2: {
      fontFamily: tokens.font.body,
      fontSize: "0.95rem",
      fontWeight: 680,
      lineHeight: 1.55,
      letterSpacing: "0.01em",
    },
    body1: {
      fontFamily: tokens.font.body,
      fontSize: "1rem",
      fontWeight: 430,
      lineHeight: 1.72,
      letterSpacing: "-0.005em",
    },
    body2: {
      fontFamily: tokens.font.body,
      fontSize: "0.9rem",
      fontWeight: 430,
      lineHeight: 1.62,
      letterSpacing: "-0.003em",
    },
    button: {
      fontFamily: tokens.font.body,
      fontWeight: 800,
      textTransform: "none",
      letterSpacing: "-0.01em",
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: tokens.color.ivory,
          color: tokens.color.graphite,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "clamp(1rem, 4vw, 2rem)",
          paddingRight: "clamp(1rem, 4vw, 2rem)",
        },
        maxWidthLg: {
          maxWidth: `${tokens.layout.maxWidth}px`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: tokens.radius.pill,
          padding: "0.78rem 1.7rem",
          fontFamily: tokens.font.body,
          fontWeight: 800,
          textTransform: "none",
          letterSpacing: "-0.01em",
          transition: `transform 260ms ${tokens.easing.premium}, box-shadow 260ms ${tokens.easing.premium}, background-color 260ms ${tokens.easing.premium}, border-color 260ms ${tokens.easing.premium}, color 260ms ${tokens.easing.premium}`,
          "&:active": {
            transform: "translateY(0) scale(0.985)",
          },
        },
        contained: {
          backgroundColor: tokens.color.graphite,
          color: tokens.color.warmWhite,
          boxShadow: "0 18px 44px rgba(52, 52, 52, 0.18)",
          "&:hover": {
            backgroundColor: tokens.color.graphiteDark,
            boxShadow: "0 24px 58px rgba(52, 52, 52, 0.25)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: "1px",
          borderColor: "rgba(242, 185, 0, 0.58)",
          color: tokens.color.graphite,
          backgroundColor: "rgba(255, 255, 255, 0.72)",
          "&:hover": {
            borderWidth: "1px",
            borderColor: tokens.color.hopeGold,
            backgroundColor: "rgba(242, 185, 0, 0.12)",
            transform: "translateY(-2px)",
          },
        },
        text: {
          color: tokens.color.graphiteSoft,
          "&:hover": {
            color: tokens.color.graphite,
            backgroundColor: "rgba(52, 52, 52, 0.045)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.lg,
          border: `1px solid ${tokens.color.line}`,
          boxShadow: tokens.shadow.subtle,
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: tokens.radius.lg,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: tokens.shadow.nav,
          borderBottom: `1px solid ${tokens.color.line}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: tokens.color.ivory,
          boxShadow: "-24px 0 60px rgba(52, 52, 52, 0.18)",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.pill,
          fontFamily: tokens.font.body,
          fontWeight: 720,
          color: tokens.color.graphite,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.pill,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: tokens.color.lineStrong,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: tokens.color.hopeGold,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: tokens.color.hopeGold,
            borderWidth: 1,
          },
        },
      },
    },
  },
});

interface MuiThemeProviderProps {
  children: ReactNode;
}

export function MuiThemeProviderWrapper({ children }: MuiThemeProviderProps) {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
}
