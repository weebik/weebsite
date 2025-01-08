import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLanguage } from "../hooks/useLanguage";
import { getApiUrl } from "../utils/apiConfig";
import background from "../assets/background.mp4";
import "../styles/contact.css";

function Contact() {
  interface ContactData {
    title: string;
    contactText: string;
    nameLabel: string;
    messageLabel: string;
  }

  const { language } = useLanguage();

  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(
          getApiUrl(`/api/contacts?locale=${language}`)
        );
        const data = await response.json();
        setContactData(data.data[0]);
      } catch (error) {
        console.error("Error fetching about-me data: ", error);
      }
    };
    fetchContactData();
  }, [language]);

  if (!contactData) {
    return <LoadingSpinner />;
  }

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
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-title">
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              marginBottom="5vh"
              sx={{ fontSize: { xs: "5vw", sm: "5vw", md: "3.5vw" } }}
            >
              {contactData.title}
            </Typography>
          </div>
          <div className="contact-form">
            <ContactForm
              text={contactData.contactText}
              nameLabel={contactData.nameLabel}
              messageLabel={contactData.messageLabel}
            />
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
