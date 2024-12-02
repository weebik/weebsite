import { createContext } from "react";
import { language } from "../types/language.type";

interface LanguageContextProps {
    language: language;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
    undefined
);