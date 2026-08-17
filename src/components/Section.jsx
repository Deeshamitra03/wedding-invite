import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative section-padding overflow-hidden ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}