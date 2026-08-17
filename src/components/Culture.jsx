import Section, { Reveal } from "./Section";
import { Alpana, Lotus } from "./BengaliMotif";

export default function Culture() {
  return (
    <Section eyebrow="Two traditions, one celebration" title="Bengali × Tamil" className="culture-section">
      <Alpana className="culture-alpana" />
      <Reveal className="max-w-3xl mx-auto text-center mt-8 relative z-10">
        <p className="font-display text-2xl md:text-3xl leading-relaxed">
          12 years of memories.
          <br />
          12 years of laughter.
          <br />
          12 years of choosing each other.
          <br />
          <span className="text-wedding-gold">And now, two families become one.</span>
        </p>
      </Reveal>

      <div className="culture-divider mt-14 mb-14">
        <span>১২</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10 relative z-10">
        <Reveal>
          <div className="culture-card bengali">
            <div className="culture-symbol">শুভ বিবাহ</div>
            <h3>Bengali</h3>
            <p>Alpana, red and white, lotus motifs, flowers, conch shells and the warmth of a Bengali wedding.</p>
            <Lotus className="w-28 mt-6 text-wedding-gold" />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="culture-card tamil">
            <div className="culture-symbol">மங்களம்</div>
            <h3>Tamil</h3>
            <p>Jasmine, kolam-inspired patterns, gold, flowers and timeless South Indian traditions.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}