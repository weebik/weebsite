import { motion } from "framer-motion";

function LoadingSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: "calc(50vh - 25px)",
        left: "calc(50vw - 25px)",
        width: "50px",
        height: "50px",
      }}
    >
      <motion.span
        style={{
          display: "block",
          width: 50,
          height: 50,
          border: "7px solid #eee",
          borderTop: "7px solid #2D3134",
          borderRadius: "50%",
          boxSizing: "border-box",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 1,
        }}
      />
    </div>
  );
}

export default LoadingSpinner;
