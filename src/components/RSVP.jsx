import { useState } from "react";
import { Send } from "lucide-react";
import Section, { Reveal } from "./Section";

export default function RSVP() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="rsvp" eyebrow="One more thing" title="Will you join us?" className="rsvp-section">
      <Reveal className="max-w-2xl mx-auto mt-12">
        {sent ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">♡</div>
            <h3 className="font-script text-6xl text-wedding-red">Thank you!</h3>
            <p className="mt-5">Your response has been received. We cannot wait to celebrate with you.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="rsvp-form">
            <p className="text-center font-display text-xl mb-8">
              Our happiness would be incomplete without you.
            </p>
            <input required placeholder="Your name" />
            <input type="number" min="1" max="20" required placeholder="Number of guests" />
            <select required defaultValue="">
              <option value="" disabled>Will you be joining us?</option>
              <option>Joyfully attending</option>
              <option>Sadly unable to attend</option>
            </select>
            <textarea rows="4" placeholder="Leave a message for the couple" />
            <button className="gold-button mx-auto flex items-center gap-2" type="submit">
              Send RSVP <Send size={16} />
            </button>
          </form>
        )}
      </Reveal>
    </Section>
  );
}