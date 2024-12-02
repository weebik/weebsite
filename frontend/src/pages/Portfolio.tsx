import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import background from "../assets/background.mp4";
import "../styles/portfolio.css";
import Skill from "../components/Skill";

function Portfolio() {
  const { language } = useLanguage();
  const translations = {
    en: {
      title: "PORTFOLIO",
    },
    pl: {
      title: "PORTFOLIO",
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
          <div className="skills-clipper">
            <div className="skills-container">
              <div className="text-title">Skills</div>
              <div className="text-content">
                <Skill name="React" level={5} imgSrc="/path/to/react-logo.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <Footer />
        </div>
      </div>
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Portfolio;
