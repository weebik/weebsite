import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import Footer from '../components/Footer';
import background from '../assets/background.mp4';
import avatar from '../assets/avatar.png';
import '../styles/landingPage.css';

function LandingPage() {
  const { language } = useLanguage();
  const translations = {
    pl: {
      title: 'WITAJ',
      text: 'Ta strona jest moim osobistym CV',
    },
    en: {
      title: 'WELCOME',
      text: 'This website is my personal CV',
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
  };

  return (
    <>
      <video
        className="background-video"
        src={background}
        typeof="video/mp4"
        autoPlay
        loop
        muted
        preload="metadata"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="landing-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={`avatar-${language}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            style={{
              background: 'linear-gradient(45deg, #85A3AB, #9E6DC8)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradient-animation 5s ease infinite',
            }}
          >
            <img
              className="avatar"
              src={avatar}
              alt="avatar"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </motion.div>
        </AnimatePresence>
        <div className="landing-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${language}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textAnimation}
              style={{
                background: 'linear-gradient(45deg, #85A3AB, #9E6DC8)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'gradient-animation 5s ease infinite',
              }}
            >
              <div className="landing-title">
                {translations[language].title}
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${language}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textAnimation}
            >
              <div className="landing-text">
                {translations[language].text.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
