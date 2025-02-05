import { ReactNode } from "react";

export type language = "en" | "pl";

export interface LanguageContextProps {
  language: language;
  toggleLanguage: () => void;
}

export interface LanguageProviderProps {
  children: ReactNode;
}
