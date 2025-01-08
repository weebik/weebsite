import { useState, ReactNode } from "react";
import { Typography } from "@mui/material";
import ErrorContext from "./ErrorContext";

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {error ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            zIndex: 10000,
          }}
        >
          <Typography variant="h6">Server Error: {error}</Typography>
        </div>
      ) : (
        children
      )}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
