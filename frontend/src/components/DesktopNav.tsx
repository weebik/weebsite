import { AppBar, Fab, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import { useLanguage } from "../hooks/useLanguage";
import english from "../assets/english.svg";
import polish from "../assets/polish.svg";

function DesktopNav() {
  const { language, toggleLanguage } = useLanguage();

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
                  transition: "all 300ms ease-in-out",
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
  );
}

export default DesktopNav;
