import { useState, ReactNode } from "react";
import { language } from "../types/language.type.ts";
import { LanguageContext } from "./LanguageContext.tsx";

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pl" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
