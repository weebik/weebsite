import { useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion, Spring } from "framer-motion";
import "../styles/navBar.css";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";

function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNav /> : <DesktopNav />}
      {isMobile ? (
        children
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname}>
            <motion.div
              style={{
                background:
                  "linear-gradient(90deg, rgba(27, 32, 41, 1) 0%, rgba(21, 28, 53, 1) 100%)",
                position: "fixed",
                width: "100vw",
                zIndex: 9000,
                bottom: 0,
              }}
              transition={transitionSpringPhysics}
              animate={{ height: "0vh" }}
              exit={{ height: "100vh" }}
            >
              <motion.div
                style={{
                  fontSize: "3rem",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  opacity: 0,
                }}
                animate={{ height: "0vh" }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
              >
                weebik
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                background:
                  "linear-gradient(90deg, rgba(27, 32, 41, 1) 0%, rgba(21, 28, 53, 1) 100%)",
                position: "fixed",
                width: "100vw",
                zIndex: 9000,
                top: 0,
              }}
              transition={transitionSpringPhysics}
              initial={{ height: "100vh" }}
              animate={{ height: "0vh", transition: { delay: 0.2 } }}
            />
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default Layout;
