import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { useState, useEffect } from "react"; // <-- Importamos useEffect
import { Link, useLocation } from "wouter";
import { Language, useLanguage } from "@/contexts/LanguageContext";
import { designTokens as tokens } from "@/theme/designTokens";

const navLinks = [
  { label: { es: "Inicio", en: "Home" }, href: "/" },
  { label: { es: "Acerca de", en: "About" }, href: "/acerca-de" },
  { label: { es: "Quienes Somos", en: "Who We Are" }, href: "/nosotros" },
  {
    label: { es: "Misioneros", en: "Impact & Missions" },
    href: "/programas",
  },
  {
    label: { es: "Alcance Comunitario", en: "Community Outreach" },
    href: "/hope-builders",
  },
  {
    label: { es: "Transparencia", en: "Transparency" },
    href: "/transparencia",
  },
  { label: { es: "Contacto", en: "Contact" }, href: "/contacto" },
];

const navTransition = `all 220ms ${tokens.easing.premium}`;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();

  // Scroll a la parte superior cada vez que cambia la ruta en wouter
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 320,
        minHeight: "100%",
        backgroundColor: tokens.color.ivory,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
          borderBottom: `1px solid ${tokens.color.line}`,
        }}
      >
        <Box
          component={Link}
          href="/"
          onClick={() => setMobileOpen(false)}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src="/new-hope-logo.png"
            alt="New Hope Opportunities Honduras"
            sx={{ width: 136, height: "auto", display: "block" }}
          />
        </Box>
        <IconButton
          onClick={() => setMobileOpen(false)}
          size="small"
          sx={{ color: tokens.color.graphite }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <List sx={{ px: 2, py: 2 }}>
        {navLinks.map(link => {
          const isActive = location === link.href;
          return (
            <ListItem key={link.href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  borderRadius: tokens.radius.pill,
                  px: 2,
                  py: 1.35,
                  color: isActive
                    ? tokens.color.graphite
                    : tokens.color.graphiteSoft,
                  backgroundColor: isActive
                    ? "rgba(242, 185, 0, 0.12)"
                    : "transparent",
                  transition: navTransition,
                  "&:hover": {
                    backgroundColor: "rgba(242, 185, 0, 0.11)",
                    color: tokens.color.graphite,
                    transform: "translateX(3px)",
                  },
                }}
              >
                <ListItemText
                  primary={link.label[language]}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontFamily: tokens.font.body,
                      fontSize: "0.98rem",
                      fontWeight: isActive ? 700 : 560,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box
        sx={{
          px: 3,
          pt: 2.5,
          pb: 3,
          borderTop: `1px solid ${tokens.color.line}`,
        }}
      >
        <Select
          value={language}
          onChange={event =>
            handleLanguageChange(event.target.value as Language)
          }
          size="small"
          fullWidth
          sx={{ mb: 2, backgroundColor: tokens.color.warmWhite }}
        >
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>

        <Button
          fullWidth
          component={Link}
          href="/#donar"
          variant="contained"
          color="primary"
          sx={{ minHeight: 48 }}
        >
          {language === "es" ? "Donar ahora" : "Donate now"}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 253, 247, 0.86)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 76, md: 88 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              aria-label="New Hope Opportunities Honduras home"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexShrink: 0,
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              <Box
                component="img"
                src="/new-hope-logo.png"
                alt="New Hope Opportunities Honduras"
                sx={{
                  width: { xs: 145, md: 170, lg: 180 },
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                mx: { md: 2, lg: 4 },
                gap: { md: 0.2, lg: 0.6 },
                minWidth: 0,
              }}
            >
              {navLinks.map(link => {
                const isActive = location === link.href;

                return (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    variant="text"
                    sx={{
                      px: { md: 1.2, lg: 1.6 },
                      py: 1,
                      minHeight: 42,
                      minWidth: "fit-content",
                      borderRadius: tokens.radius.pill,
                      whiteSpace: "nowrap",
                      textTransform: "none",

                      color: isActive
                        ? tokens.color.graphite
                        : tokens.color.graphiteSoft,

                      backgroundColor: isActive
                        ? "rgba(242,185,0,.12)"
                        : "transparent",

                      fontSize: {
                        md: "0.84rem",
                        lg: "0.9rem",
                      },

                      fontWeight: isActive ? 700 : 560,

                      transition: navTransition,

                      "&:hover": {
                        backgroundColor: "rgba(242,185,0,.10)",
                        color: tokens.color.graphite,
                      },
                    }}
                  >
                    {link.label[language]}
                  </Button>
                );
              })}
            </Box>

            {/* Right Side */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
                flexShrink: 0,
              }}
            >
              <Select
                value={language}
                onChange={event =>
                  handleLanguageChange(event.target.value as Language)
                }
                size="small"
                sx={{
                  width: 70,
                  height: 40,
                  borderRadius: tokens.radius.pill,
                  backgroundColor: "rgba(255,255,255,.7)",

                  "& .MuiSelect-select": {
                    py: 1,
                    fontSize: "0.82rem",
                  },
                }}
              >
                <MenuItem value="es">ES</MenuItem>
                <MenuItem value="en">EN</MenuItem>
              </Select>

              <Button
                component={Link}
                href="/contacto"
                variant="contained"
                color="primary"
                sx={{
                  minHeight: 42,
                  px: 2.3,
                  borderRadius: tokens.radius.pill,
                  textTransform: "none",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                {language === "es" ? "Donar" : "Donate"}
              </Button>
            </Box>

            {/* Mobile */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: tokens.color.graphite,
                border: `1px solid ${tokens.color.line}`,
                backgroundColor: "rgba(255,255,255,.7)",

                "&:hover": {
                  backgroundColor: "rgba(242,185,0,.10)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
