import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

const LANGUAGE_STORAGE_KEY = "nho-language";

function getInitialLanguage(defaultLanguage: Language): Language {
  if (typeof window === "undefined") return defaultLanguage;

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === "en" || storedLanguage === "es") return storedLanguage;

  // First visit: respect the visitor's browser language. This gives English-speaking
  // visitors (including most US visitors) English immediately without overriding
  // a language they explicitly selected on a previous visit.
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  const primaryLanguage = browserLanguages[0]?.toLowerCase() || "";

  if (primaryLanguage.startsWith("en")) return "en";
  if (primaryLanguage.startsWith("es")) return "es";

  return defaultLanguage;
}

export function LanguageProvider({ children, defaultLanguage = "es" }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage(defaultLanguage));

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "es" ? "en" : "es")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
