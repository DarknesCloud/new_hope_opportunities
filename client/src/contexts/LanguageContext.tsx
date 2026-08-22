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
  return storedLanguage === "en" || storedLanguage === "es"
    ? storedLanguage
    : defaultLanguage;
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
