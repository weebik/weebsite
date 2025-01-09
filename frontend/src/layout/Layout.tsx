import { AppBar, Toolbar, Typography, Fab } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";
import english from "../assets/english.svg";
import polish from "../assets/polish.svg";
import routes from "../routes/routes";
import { AnimatePresence, motion, Spring } from "framer-motion";
import "../styles/navBar.css";

function Layout({ children }: { children: ReactNode }) {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const translations: { [key: string]: { [key: string]: string } } = {
    pl: {
      "/home": "Główna",
      "/about-me": "O mnie",
      "/portfolio": "Portfolio",
      "/contact": "Kontakt",
    },
    en: {
      "/home": "Home",
      "/about-me": "About Me",
      "/portfolio": "Portfolio",
      "/contact": "Contact",
    },
  };

  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
          background: "transparent",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar className="navBar">
          {routes.map(
            ({ path }) =>
              translations[language][path] && (
                <NavLink
                  key={path}
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? "rgba(212, 184, 241, 1)" : "white",
                    textDecoration: "none",
                    padding: "0 20px",
                    borderRadius: "40px",
                    backgroundColor: isActive
                      ? "rgba(62, 55, 126, 1)"
                      : "transparent",
                    transition: "all 200ms ease-in-out",
                  })}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "3vw", sm: "2vw", md: "1.5vw" },
                      fontWeight: 700,
                      variant: "button",
                    }}
                  >
                    {translations[language][path]}
                  </Typography>
                </NavLink>
              )
          )}
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname}>
          <motion.div
            style={{
              background:
                "linear-gradient(90deg, rgba(27, 32, 41, 1) 0%, rgba(21, 28, 53, 1) 100%)",
              position: "fixed",
              width: "100vw",
              zIndex: 9000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          >
            <motion.div
              style={{
                fontSize: "3rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                opacity: 0,
              }}
              animate={{ height: "0vh" }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 1 }}
            >
              weebik
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              background:
                "linear-gradient(90deg, rgba(27, 32, 41, 1) 0%, rgba(21, 28, 53, 1) 100%)",
              position: "fixed",
              width: "100vw",
              zIndex: 9000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Layout;
