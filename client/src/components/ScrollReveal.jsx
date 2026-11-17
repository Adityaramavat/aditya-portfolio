
import {
  motion,
  useReducedMotion
} from "framer-motion";

function ScrollReveal({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 25 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
