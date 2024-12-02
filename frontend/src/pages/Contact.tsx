import { Typography } from "@mui/material";
import { useLanguage } from "../hooks/useLanguage";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import background from "../assets/background.mp4";
import "../styles/contact.css";

function Contact() {
  const { language } = useLanguage();

  const translations = {
    pl: {
      title: "KONTAKT",
    },
    en: {
      title: "CONTACT",
    },
  };

  return (
    <div className="contact-page">
      <video
        className="contact-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src={background}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-title">
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              marginBottom="5vh"
              sx={{ fontSize: { xs: "7vw", sm: "6vw", md: "3.5vw" } }}
            >
              {translations[language].title}
            </Typography>
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
        <div className="contact-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
