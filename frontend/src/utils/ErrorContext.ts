import { createContext } from "react";

interface ErrorContextProps {
  error: string | null;
  setError: (error: string | null) => void;
}

const ErrorContext = createContext<ErrorContextProps>({
  error: null,
  setError: () => {},
});

export default ErrorContext;
