import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { wedding } from "../config";
import Section, { Reveal } from "./Section";

export default function Events() {
  return (
    <Section id="events" eyebrow="The celebrations" title="Join us for every chapter">
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {wedding.events.map((event, i) => (
          <Reveal key={event.name} delay={i * 0.08}>
            <article className="event-card bengali-event-card">
              <div className="event-number">০{i + 1}</div><div className="event-pattern">✦</div>
              <h3 className="font-display text-3xl text-wedding-red">{event.name}</h3>
              <p className="mt-5 flex gap-3"><CalendarDays size={18} /> {event.date}</p>
              <p className="mt-2 flex gap-3"><Clock3 size={18} /> {event.time}</p>
              <p className="mt-2 flex gap-3"><MapPin size={18} /> {event.venue}</p>
              <p className="mt-5 pt-5 border-t border-wedding-gold/20 leading-7 text-wedding-ink/70">{event.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}