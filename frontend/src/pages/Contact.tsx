import { Typography } from "@mui/material";
import "../styles/contact.css";
import { useLanguage } from "../hooks/useLanguage";
import ContactForm from "../components/ContactForm";

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
        <Typography
          variant="h2"
          fontWeight="bold"
          color="white"
          marginBottom="5vh"
        >
          {translations[language].title}
        </Typography>
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
