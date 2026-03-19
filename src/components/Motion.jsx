import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, className = "", y = 18 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -15% 0px", amount: 0.2 }}
      transition={{ duration: 0.7, ease: easing, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Subtle parallax effect for backgrounds or images */
export function Parallax({ children, speed = 0.2, className = "" }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Fade + scale reveal for hero or emphasis blocks */
export function ScaleReveal({ children, delay = 0, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, scale: 0.98 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-5% 0px", amount: 0.3 }}
      transition={{ duration: 0.8, ease: easing, delay }}
    >
      {children}
    </motion.div>
  );
}

