import { useEffect, useState } from "react";
import Section, { Reveal } from "./Section";
import { wedding } from "../config";

function getRemaining() {
  const diff = new Date(wedding.weddingDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const timer = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section eyebrow="The countdown" title="Counting down to forever" className="countdown-section">
      <Reveal className="mt-12">
        {time ? (
          <div className="countdown-grid">
            {Object.entries(time).map(([label, value]) => (
              <div className="countdown-box" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-script text-6xl text-wedding-red text-center">And so our forever begins ♡</p>
        )}
      </Reveal>
    </Section>
  );
}