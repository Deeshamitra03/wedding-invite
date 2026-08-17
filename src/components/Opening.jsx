import { motion } from "framer-motion";
import { wedding } from "../config";
import { Alpana, Lotus } from "./BengaliMotif";

export default function Opening({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bengali-cover flex items-center justify-center overflow-hidden"
    >
      <Alpana className="cover-alpana cover-alpana-left" />
      <Alpana className="cover-alpana cover-alpana-right" />

      <div className="cover-frame" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <p className="bengali-script mb-2">শুভ বিবাহ</p>
        <p className="uppercase tracking-[0.35em] text-xs text-wedding-gold mb-5">
          A Bengali wedding celebration
        </p>

        <img src={wedding.logo} alt="Wedding monogram" className="mx-auto h-20 w-20 object-contain mb-5" />

        <Lotus className="mx-auto w-28 h-auto text-wedding-red mb-2" />

        <h1 className="font-script text-6xl md:text-8xl text-wedding-red">
          {wedding.bride.name}
        </h1>
        <div className="font-display text-3xl text-wedding-gold my-1">♡</div>
        <h1 className="font-script text-6xl md:text-8xl text-wedding-red">
          {wedding.groom.name}
        </h1>

        <p className="font-display italic text-xl text-wedding-ink mt-7 mb-10">
          Twelve years of love, laughter and memories.
        </p>

        <button onClick={onOpen} className="gold-button">
          Enter the Celebration
        </button>
      </motion.div>
    </motion.div>
  );
}