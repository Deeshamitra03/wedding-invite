import { wedding } from "../config";
import Section, { Reveal } from "./Section";

export default function Family() {
  return (
    <Section eyebrow="With their blessings" title="Where love becomes family" className="paper-section">
      <Reveal className="max-w-4xl mx-auto mt-12">
        <div className="family-frame">
          <img src={wedding.parentsPhoto} alt="Family" />
        </div>
        <p className="text-center font-display text-2xl md:text-3xl italic mt-10 text-wedding-ink">
          "Because every love story brings families together."
        </p>
        <p className="text-center mt-4 text-wedding-ink/60">
          With the love and blessings of our families, we invite you to celebrate with us.
        </p>
      </Reveal>
    </Section>
  );
}