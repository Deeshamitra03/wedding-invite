import { wedding } from "../config";
import { Alpana, Lotus } from "./BengaliMotif";

export default function Footer() {
  return (
    <footer className="footer bengali-footer">
      <Alpana className="footer-alpana" />
      <Lotus className="mx-auto w-32 text-wedding-gold mb-5 relative z-10" />
      <p className="bengali-script relative z-10">শুভ বিবাহ</p>
      <img src={wedding.logo} alt="" className="h-16 w-16 object-contain mx-auto my-7 relative z-10" />
      <p className="font-script text-6xl md:text-7xl relative z-10">12 years of memories.</p>
      <p className="font-display text-2xl mt-4 relative z-10">And now, forever.</p>
      <div className="gold-divider my-8 relative z-10" />
      <p className="font-display text-xl relative z-10">
        {wedding.bride.name} <span className="text-wedding-gold">♡</span> {wedding.groom.name}
      </p>
      <p className="text-xs uppercase tracking-[0.3em] mt-4 opacity-60 relative z-10">With love, from our families</p>
    </footer>
  );
}