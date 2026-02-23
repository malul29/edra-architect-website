import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -50,
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier easing
  duration: 0.4
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ 
        width: "100%",
        minHeight: "100vh"
      }}
    >
      {children}
    </motion.div>
  );
}
