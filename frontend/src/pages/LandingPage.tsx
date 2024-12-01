import { Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/landingPage.css";

function LandingPage() {
  const { language } = useLanguage();
  const translations = {
    pl: {
      title: "WITAJ",
      text: "Ta strona jest moim osobistym CV",
    },
    en: {
      title: "WELCOME",
      text: "This website is my personal CV",
    },
  };
  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        preload="metadata"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="landing-container">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            style={{
              background: "linear-gradient(45deg, #85A3AB, #9E6DC8)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "gradient-animation 5s ease infinite",
            }}
          >
            <img
              className="avatar"
              src="/assets/avatar.png"
              alt="avatar"
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        </AnimatePresence>
        <div className="landing-content">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                background: "linear-gradient(45deg, #85A3AB, #9E6DC8)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradient-animation 5s ease infinite",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                }}
                variant="h1"
              >
                {translations[language].title}
              </Typography>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Typography sx={{ fontWeight: "normal" }} variant="h4">
                {translations[language].text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
