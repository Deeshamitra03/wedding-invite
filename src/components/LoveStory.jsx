import { motion } from "framer-motion";
import { wedding } from "../config";
import Section, { Reveal } from "./Section";

export default function LoveStory() {
  return (
    <Section id="story" eyebrow="Our journey" title="12 Years of Us" className="paper-section">
      <div className="relative mt-14">
        <div className="timeline-line" />
        <div className="space-y-16 md:space-y-24">
          {wedding.story.map((item, i) => (
            <Reveal key={item.title} delay={0.05}>
              <div className={`timeline-item ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="timeline-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="timeline-copy">
                  <p className="eyebrow mb-2">{item.year}</p>
                  <h3 className="font-display text-4xl text-wedding-red">{item.title}</h3>
                  <p className="mt-4 leading-8 text-wedding-ink/75">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}