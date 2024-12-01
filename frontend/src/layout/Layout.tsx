import { AppBar, Toolbar, Typography, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";
import Footer from "../components/Footer";
import english from "../assets/english.svg";
import polish from "../assets/polish.svg";
import "../styles/navBar.css";

function Layout({ children }: { children: ReactNode }) {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    pl: {
      home: "Strona Główna",
      aboutMe: "O mnie",
      portfolio: "Portfolio",
      contact: "Kontakt",
    },
    en: {
      home: "Home",
      aboutMe: "About Me",
      portfolio: "Portfolio",
      contact: "Contact",
    },
  };

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "100px",
          height: "10vh",
          background: "transparent",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar className="navBar">
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              {translations[language].home}
            </Typography>
          </Link>
          <Link
            to="/about-me"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              {translations[language].aboutMe}
            </Typography>
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              {translations[language].portfolio}
            </Typography>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography fontSize="1.5rem" fontWeight={700} variant="button">
              {translations[language].contact}
            </Typography>
          </Link>
        </Toolbar>
        <Fab
          className="language-button"
          onClick={toggleLanguage}
          sx={{ position: "absolute", right: "20px" }}
        >
          <img
            src={language === "en" ? polish : english}
            alt={language === "en" ? "PL" : "EN"}
            style={{ width: "30px", height: "30px" }}
          />
        </Fab>
      </AppBar>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
