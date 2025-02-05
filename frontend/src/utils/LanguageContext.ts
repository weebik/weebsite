import { createContext } from "react";
import { LanguageContextProps } from "../types/language.type";

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);
