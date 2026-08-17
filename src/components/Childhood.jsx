import { motion } from "framer-motion";
import { wedding } from "../config";
import Section, { Reveal } from "./Section";

export default function Childhood() {
  return (
    <Section id="childhood" eyebrow="Long before forever" title="A story that began twelve years ago">
      <div className="max-w-3xl mx-auto mt-12">
        <Reveal>
          <div className="single-memory-card">
            <div className="memory-photo-wrap">
              <img src={wedding.bride.childhood} alt="A childhood memory" />
            </div>
            <div className="memory-caption text-center">
              <span>Long before forever...</span>
              <small>
                There were two little lives, growing toward a story neither of them
                knew was coming.
              </small>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="text-center mt-16">
        <p className="font-script text-5xl md:text-7xl text-wedding-red">
          And then, twelve years ago, their story began...
        </p>
      </Reveal>
    </Section>
  );
}