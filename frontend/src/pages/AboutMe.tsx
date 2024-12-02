import { Typography } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import background from "../assets/background.mp4";
import Footer from "../components/Footer";
import EduTimeline from "../components/EduTimeline";
import avatar from "../assets/avatar.png";
import "../styles/aboutme.css";

function AboutMe() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "ABOUT ME",
    },
    pl: {
      title: "O MNIE",
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
      <div className="background-cropper" />
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
          <div className="text-container">
            <div className="photo-clipper">
              <div className="photos1-container">
                <img className="photos1" src={avatar} alt="Krystian" />
              </div>
            </div>
            <div className="text-title">Hi Im Krystian</div>
          </div>
          <div className="text-container">
            <div className="text-title">About Me</div>
            <div className="text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              faucibus dui. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Suspendisse potenti.
              Integer fermentum luctus velit, nec varius dolor sollicitudin at.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eget velit neque. Aenean varius ut
              urna eu scelerisque.
            </div>
          </div>
          <div className="text-container">
            <div className="text-title">Education</div>
            <div className="text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              faucibus dui. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Suspendisse potenti.
              Integer fermentum luctus velit, nec varius dolor sollicitudin at.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eget velit neque. Aenean varius ut
              urna eu scelerisque.
            </div>
          </div>
          <EduTimeline />
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

export default AboutMe;
