import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../config";
import Section, { Reveal } from "./Section";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="gallery" eyebrow="Our memories" title="A few moments we treasure">
      <div className="gallery-grid mt-12">
        {wedding.gallery.map((photo, i) => (
          <Reveal key={photo} delay={(i % 4) * 0.05}>
            <button className={`gallery-item gallery-${(i % 5) + 1}`} onClick={() => setSelected(photo)}>
              <img src={photo} alt={`Memory ${i + 1}`} loading="lazy" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setSelected(null)}>
              <X size={30} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selected}
              alt="Selected memory"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}