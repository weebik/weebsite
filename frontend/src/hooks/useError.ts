import { useContext } from "react";
import ErrorContext from "../utils/ErrorContext";

export const useError = () => useContext(ErrorContext);
