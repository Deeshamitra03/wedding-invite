import { ExternalLink, MapPin } from "lucide-react";
import { wedding } from "../config";
import Section, { Reveal } from "./Section";

export default function Venue() {
  return (
    <Section id="venue" eyebrow="Where we say I do" title={wedding.venue.name} className="paper-section">
      <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
        <Reveal>
          <div className="venue-image">
            <img src={wedding.venue.image} alt={wedding.venue.name} />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div>
            <MapPin className="text-wedding-gold mb-5" size={30} />
            <p className="font-display text-2xl text-wedding-red">{wedding.venue.address}</p>
            <p className="mt-5 leading-8 text-wedding-ink/70">
              We would love to have you with us as we begin this beautiful new chapter.
            </p>
            <a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer" className="outline-button mt-7 inline-flex">
              Get Directions <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}