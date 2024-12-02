import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import background from "../assets/background.mp4";
import "../styles/home.css";

function Home() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "HOME",
    },
    pl: {
      title: "STRONA GŁÓWNA",
    },
  };
  return (
    <div className="about-page">
      <video
        className="about-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src={background}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="about-container">
        <div className="about-title-background">
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ fontSize: { xs: "7vw", sm: "6vw", md: "3.5vw" } }}
          >
            {translations[language].title}
          </Typography>
        </div>
        <div className="about-content">
          <div className="about-title"></div>
        </div>
        <div className="contact-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Home;
