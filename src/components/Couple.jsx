import { wedding } from "../config";
import Section, { Reveal } from "./Section";
import { BengaliBorder } from "./BengaliMotif";

export default function Couple() {
  return (
    <Section id="couple" eyebrow="Meet the couple" title="The Bride & The Groom">
      <BengaliBorder className="my-8" />
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <Reveal>
          <div className="portrait-card bengali-portrait">
            <div className="portrait-top">শুভ</div>
            <img src={wedding.bride.photo} alt={wedding.bride.name} />
            <div className="portrait-content">
              <p className="eyebrow">{wedding.bride.role}</p>
              <h3 className="font-script text-5xl text-wedding-red">{wedding.bride.name}</h3>
              <p>{wedding.bride.bio}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="portrait-card bengali-portrait">
            <div className="portrait-top">বিবাহ</div>
            <img src={wedding.groom.photo} alt={wedding.groom.name} />
            <div className="portrait-content">
              <p className="eyebrow">{wedding.groom.role}</p>
              <h3 className="font-script text-5xl text-wedding-red">{wedding.groom.name}</h3>
              <p>{wedding.groom.bio}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}