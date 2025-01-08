import { motion } from "framer-motion";

function LoadingSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: 50,
        height: 50,
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
