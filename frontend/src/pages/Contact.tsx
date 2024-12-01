import { Typography } from "@mui/material";
import "../styles/contact.css";
import { useLanguage } from "../hooks/useLanguage";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

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
    <>
      <video
        className="contact-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src="/assets/background.mp4"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="contact-content">
        <div className="contact-title">
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            marginBottom="5vh"
            sx={{ fontSize: { xs: "10vw", sm: "7vw", md: "3.5vw" } }}
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
    </>
  );
}

export default Contact;
