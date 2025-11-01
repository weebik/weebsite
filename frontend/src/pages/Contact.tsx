import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLanguage } from '../hooks/useLanguage';
import endpoints, { fetchData } from '../utils/apiConfig';
import background from '../assets/background.mp4';
import '../styles/contact.css';

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
      const data = await fetchData<ContactData>(endpoints.contact(language));
      setContactData(data);
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

      <div className="contact-content">
        <div className="contact-title">{contactData.title}</div>
        <div className="contact-form-container">
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
  );
}

export default Contact;
