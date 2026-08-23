import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MuiThemeProviderWrapper } from "./contexts/MuiThemeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { SiteInteractionBridge } from "./components/SiteInteractionBridge";
import { DeveloperCredit } from "./components/DeveloperCredit";
import Home from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { Transparencia } from "./pages/Transparencia";
import { Contacto } from "./pages/Contacto";
import { Programas } from "./pages/Programas";
import { Donar } from "./pages/Donar";
import About from "./pages/About";
import HopeBuilders from "./pages/HopeBuilders";

import { ProgramLaGarra } from "./pages/ProgramLaGarra";
import { ProgramBandaPaz } from "./pages/ProgramBandaPaz";
import { ProgramCHICOS } from "./pages/ProgramCHICOS";
import { ProgramRefugio } from "./pages/ProgramRefugio";
import { ProgramCampamento } from "./pages/ProgramCampamento";
import { ProgramViajesMisioneros } from "./pages/ProgramViajesMisioneros";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/acerca-de"} component={About} />
      <Route path={"/hope-builders"} component={HopeBuilders} />
      <Route path={"/nosotros"} component={Nosotros} />
      <Route path={"/programas"} component={Programas} />
      <Route path={"/programas/la-garra"} component={ProgramLaGarra} />
      <Route path={"/programas/banda-de-la-paz"} component={ProgramBandaPaz} />
      <Route path={"/programas/chicos"} component={ProgramCHICOS} />
      <Route path={"/programas/refugio"} component={ProgramRefugio} />
      <Route path={"/programas/campamento-juvenil"} component={ProgramCampamento} />
      <Route path={"/programas/viajes-misioneros"} component={ProgramViajesMisioneros} />
      <Route path={"/donar"} component={Donar} />
      <Route path={"/transparencia"} component={Transparencia} />
      <Route path={"/contacto"} component={Contacto} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <MuiThemeProviderWrapper>
          <LanguageProvider defaultLanguage="es">
            <TooltipProvider>
              <ScrollToTop />
              <SiteInteractionBridge />
              <Toaster />
              <Navbar />
              <div className="pt-[76px] md:pt-[88px]">
                <Router />
              </div>
              <DeveloperCredit />
              <ChatbotWidget />
            </TooltipProvider>
          </LanguageProvider>
        </MuiThemeProviderWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
