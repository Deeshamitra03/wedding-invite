import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { wedding } from "../config";
import { Alpana, Lotus } from "./BengaliMotif";

export default function Hero({ onExplore }) {
  return (
    <section id="home" className="hero-section bengali-hero">
      <Alpana className="hero-alpana hero-alpana-left" />
      <Alpana className="hero-alpana hero-alpana-right" />

      <div className="hero-red-corner hero-red-corner-left" />
      <div className="hero-red-corner hero-red-corner-right" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 text-center px-5"
      >
        <p className="bengali-script">শুভ বিবাহ</p>
        <p className="eyebrow mt-3">12 years · one love story</p>

        <Lotus className="mx-auto w-32 md:w-40 h-auto text-wedding-red my-5" />

        <h1 className="font-script text-7xl md:text-[10rem] leading-none text-wedding-red">
          {wedding.bride.name}
        </h1>
        <div className="font-display text-4xl md:text-5xl text-wedding-gold my-1">♡</div>
        <h1 className="font-script text-7xl md:text-[10rem] leading-none text-wedding-red">
          {wedding.groom.name}
        </h1>

        <div className="hero-subtitle">
          <span>বিয়ের আমন্ত্রণ</span>
          <span className="dot">•</span>
          <span>With love from our families</span>
        </div>

        <p className="font-display text-xl md:text-2xl mt-8 text-wedding-ink">
          Twelve years of memories, laughter and love.
        </p>
        <p className="font-display italic text-lg text-wedding-red mt-2">
          And now, we choose forever.
        </p>

        <div className="mt-10 inline-flex flex-col items-center">
          <p className="uppercase tracking-[0.3em] text-xs text-wedding-gold">Save the date</p>
          <p className="font-display text-2xl mt-2">
            {new Date(wedding.weddingDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </motion.div>

      <button onClick={onExplore} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-wedding-red">
        <span className="uppercase tracking-[0.25em] text-[10px]">Begin our story</span>
        <ChevronDown className="animate-bounce" size={20} />
      </button>
    </section>
  );
}