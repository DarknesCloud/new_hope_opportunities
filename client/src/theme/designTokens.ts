export const designTokens = {
  color: {
    hopeGold: "#F2B900",
    hopeGoldDark: "#D8A100",
    hopeGoldSoft: "#FFE7A3",
    hopeGoldPale: "#FFF7DB",
    graphite: "#343434",
    graphiteDark: "#242424",
    graphiteSoft: "#5E5E5E",
    graphiteMuted: "#7B7B7B",
    ivory: "#FFFDF7",
    warmWhite: "#FFFFFF",
    warmSand: "#FBF6EA",
    line: "rgba(52, 52, 52, 0.09)",
    lineStrong: "rgba(52, 52, 52, 0.14)",
    overlay: "rgba(52, 52, 52, 0.68)",
    success: "#5E8F67",
    danger: "#C94C4C",
  },
  font: {
    display: '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  radius: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.75rem",
    pill: "999px",
  },
  shadow: {
    subtle: "0 12px 30px rgba(52, 52, 52, 0.06)",
    soft: "0 18px 44px rgba(52, 52, 52, 0.10)",
    elevated: "0 28px 70px rgba(52, 52, 52, 0.16)",
    gold: "0 18px 42px rgba(242, 185, 0, 0.16)",
    nav: "0 14px 38px rgba(52, 52, 52, 0.045)",
  },
  easing: {
    premium: "cubic-bezier(0.23, 1, 0.32, 1)",
  },
  layout: {
    maxWidth: 1200,
    sectionY: {
      xs: 8,
      md: 12,
    },
  },
} as const;

export type DesignTokens = typeof designTokens;
