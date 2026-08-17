import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Heart, MapPin, Menu, Music2, Volume2, VolumeX, X } from "lucide-react";
import { wedding } from "./config";

const petals = ["🍂", "🌸", "✿", "❧", "♥"];

function FloatingPetals() {
  return (
    <div className="petal-layer" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="petal"
          initial={{ y: -60, x: `${(i * 71) % 100}vw`, rotate: 0, opacity: 0 }}
          animate={{
            y: "110vh",
            x: `${((i * 71 + 19) % 100)}vw`,
            rotate: 260 + i * 31,
            opacity: [0, 0.75, 0.7, 0],
          }}
          transition={{ duration: 10 + (i % 5), repeat: Infinity, delay: i * 0.8, ease: "linear" }}
        >
          {petals[i % petals.length]}
        </motion.span>
      ))}
    </div>
  );
}

function Alpana({ className = "" }) {
  return (
    <svg className={`alpana ${className}`} viewBox="0 0 300 300" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="150" cy="150" r="115" />
        <circle cx="150" cy="150" r="82" />
        <circle cx="150" cy="150" r="45" />
        <path d="M150 35c15 24 14 42 0 58-14-16-15-34 0-58Z" />
        <path d="M265 150c-24 15-42 14-58 0 16-14 34-15 58 0Z" />
        <path d="M150 265c-15-24-14-42 0-58 14 16 15 34 0 58Z" />
        <path d="M35 150c24-15 42-14 58 0-16 14-34 15-58 0Z" />
        <path d="M69 69c28 5 40 17 45 45-28-5-40-17-45-45Z" />
        <path d="M231 69c-28 5-40 17-45 45 28-5 40-17 45-45Z" />
        <path d="M231 231c-28-5-40-17-45-45 28 5 40 17 45 45Z" />
        <path d="M69 231c28-5 40-17 45-45-28 5-40 17-45 45Z" />
        <circle cx="150" cy="150" r="10" />
      </g>
    </svg>
  );
}

function PanPata({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 150 100" aria-hidden="true">
      <path d="M73 85C35 78 13 55 20 18c38-3 68 18 53 67Z" fill="#64752a" />
      <path d="M25 20c26 18 37 38 45 65" fill="none" stroke="#b8a45c" strokeWidth="3" />
      <path d="M42 37c15 5 25 10 33 17M37 51c13 4 23 8 32 14" fill="none" stroke="#9b8d48" strokeWidth="2" />
      <circle cx="116" cy="58" r="18" fill="#a52c24" opacity=".95" />
      <circle cx="116" cy="58" r="9" fill="#f1d79c" />
      <circle cx="139" cy="73" r="9" fill="#f1d79c" />
    </svg>
  );
}

function Topor({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 160 190" aria-hidden="true">
      <g fill="none" stroke="#9b5b20" strokeWidth="2">
        <path d="M30 150h100M43 150V55c8-10 18-16 37-20 19 4 29 10 37 20v95" fill="#f7ead0" />
        <path d="M58 54c10-23 34-33 44 0M49 78c18 9 44 9 62 0M49 103c18 9 44 9 62 0M49 128c18 9 44 9 62 0" />
        <path d="M80 28v28" />
        <path d="M68 29c12-13 12-13 24 0" />
      </g>
      <circle cx="80" cy="77" r="6" fill="#a52c24" />
    </svg>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`site-section ${className}`}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow && <p className="eyebrow">✦ {eyebrow} ✦</p>}
          <h2>{title}</h2>
          <div className="ornament-line"><span>❧</span><i></i><span>❧</span></div>
        </div>
        {children}
      </div>
    </section>
  );
}

function Countdown() {
  const target = useMemo(() => new Date(wedding.weddingDate).getTime(), []);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  return (
    <div className="countdown">
      {[['Days', days], ['Hours', hours], ['Minutes', minutes], ['Seconds', seconds]].map(([label, value]) => (
        <div className="count-box" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function MusicButton() {
  const [playing, setPlaying] = useState(true);
  const [audio] = useState(() => new Audio(wedding.music));
  useEffect(() => () => audio.play(), [audio]);
  const toggle = async () => {
    if (playing) {
      audio.pause(); setPlaying(false); return;
    }
    try { await audio.play(); setPlaying(true); } catch { setPlaying(false); }
  };
  return (
    <button className="music-button" onClick={toggle} aria-label="Toggle music">
      {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span>{playing ? "Music on" : "Music"}</span>
    </button>
  );
}

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);
  const [menu, setMenu] = useState(false);
  const nav = ["story", "events", "families", "rsvp"];
  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <FloatingPetals />

<AnimatePresence>
  {!opened && (
    <motion.div
      className="welcome-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* Bengali alpana */}
      <Alpana className="welcome-alpana" />

      {/* Wedding invitation */}
      <motion.div
        className="invitation-envelope"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      >

        {/* Outer border */}
        <div className="invitation-border">

          {/* Logo */}
          <motion.img
            src="/images/wedding-logo.jpeg"
            alt="Wedding Logo"
            className="wedding-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <p className="invitation-bengali">
            শুভ বিবাহ
          </p>

          <div className="invitation-divider">
            <span>✦</span>
            <span>❧</span>
            <span>✦</span>
          </div>

          <p className="invitation-intro">
            YOU ARE CORDIALLY INVITED
          </p>

          <h1 className="invitation-names">
            {wedding.bride.name}
            <span>♥</span>
            {wedding.groom.name}
          </h1>

          <p className="invitation-story">
            12 YEARS · ONE LOVE STORY · ONE FOREVER
          </p>

          <motion.button
  className="primary-button invitation-button"
  onClick={() => {
    const music = document.querySelector("audio");

    if (music) {
      music.currentTime = 0;
      music.play().catch((error) => {
        console.log("Music could not start:", error);
      });
    }

    setOpened(true);
  }}
  whileHover={{
    scale: 1.04
  }}
  whileTap={{
    scale: 0.97
  }}
>
  <span>Open Invitation</span>
  <span className="button-arrow">→</span>
</motion.button>

          <p className="invitation-hint">
            ✦ Tap to enter our wedding ✦
          </p>

        </div>
      </motion.div>

    </motion.div>
  )}
</AnimatePresence>

      {opened && (
        <>
          <header className="topbar">
            <button className="brand" onClick={() => go("home")}>
              <span className="brand-mark">শুভ</span>
              <span>{wedding.bride.name} <b>♡</b> {wedding.groom.name}</span>
            </button>
            <nav className="desktop-nav">
              {nav.map(id => <button key={id} onClick={() => go(id)}>{id === "story" ? "Our Story" : id[0].toUpperCase() + id.slice(1)}</button>)}
            </nav>
            <button className="menu-button" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
          </header>

          <AnimatePresence>
            {menu && <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {nav.map(id => <button key={id} onClick={() => go(id)}>{id === "story" ? "Our Story" : id[0].toUpperCase() + id.slice(1)}</button>)}
            </motion.nav>}
          </AnimatePresence>

          <MusicButton />

          <main>
            <section id="home" className="hero">
              <Alpana className="hero-alpana" />
              <div className="hero-topper">WELCOME TO OUR FOREVER</div>
              <p className="bengali hero-bengali">শুভ বিবাহ</p>
              <motion.div className="hero-art-wrap" initial={{ opacity: 0, scale: .96, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.1 }}>
                <img className="hero-art" src="images\couple_art.png" alt="Illustrated bride and groom" />
              </motion.div>
              <div className="hero-copy">
                <h1><span>{wedding.bride.name}</span><Heart size={30} fill="currentColor"/><span>{wedding.groom.name}</span></h1>
                <p>12 YEARS · ONE LOVE STORY · ONE FOREVER</p>
                <div className="hero-message">দুই পরিবারের ভালোবাসায়, আমাদের চিরকালের শুরু...</div>
              </div>
              <button className="scroll-cue" onClick={() => go("story")}><ChevronDown/></button>
              <Topor className="topor topor-left" />
              <PanPata className="pan pan-right" />
            </section>

            <Section id="story" eyebrow="Our Story" title="12 Years of Love">
              <div className="timeline">
                {[['Long Before','Two little hearts, unknown of the journey ahead.','childhood_illustration.png'],['12 Years Ago','Our story began with friendship, laughter & countless dreams.','young.jpg'],['The Journey','Through ups & downs, we grew together, hand in hand.','memories.png'],['Countless Memories','From little moments to big milestones, we made memories.','couple_pic.png'],['Today','12 years of choosing each other, every single day.','today.jpg']].map(([title,text,img],i) => (
                  <motion.article className="story-item" key={title} initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:.3 }} transition={{ delay:i*.08 }}>
                    <div className="story-icon">{img ? <img src={`/images/${img}`} alt="Childhood memory"/> : i===1 ? '📚' : i===2 ? '🚲' : i===3 ? '📷' : '♥'}</div>
                    <h3>{title}</h3><p>{text}</p>
                  </motion.article>
                ))}
              </div>
            </Section>

       <Section
  id="events"
  eyebrow="Save the Dates"
  title="The Celebrations"
  className="events-section"
>
  <div className="events-grid">
    {wedding.events.map((event, i) => {
      const eventIllustrations = [
        "engagement.png",
        "wedding.png",
        "reception.png"
      ];

      return (
        <motion.article
          className="event-card"
          key={event.name}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >

          {/* Event Illustration */}
          <div className="event-illustration">
            <img
              src={`/images/${eventIllustrations[i]}`}
              alt={event.name}
            />
          </div>

          <h3>{event.name}</h3>

          <p className="event-date">
            {event.date}
          </p>

          <p>{event.time}</p>

          <p>{event.venue}</p>

          <div className="event-ornament">
            ✦ ❧ ✦
          </div>

          <p className="event-desc">
            {event.description}
          </p>

        </motion.article>
      );
    })}
  </div>
</Section>

            <Section id="families" eyebrow="Two Traditions" title="One Celebration">
              <div className="culture-grid">
                <motion.div className="culture-card bengali-card" whileHover={{ y:-6 }}>
                  <h3>শুভ বিবাহ</h3><strong>Groom's family</strong>
                  <p>Mrs. Sunanda Roy and Mr. Pradip Kumar Roy heartly invite you and your family to join them in this joyous occasion of their one and only son.</p>
                </motion.div>
                <motion.div className="culture-card tamil-card" whileHover={{ y:-6 }}>
                  <h3>மங்களம் விவாஹம்</h3><strong>Bride's Family</strong>
                  <p>Mrs. Sindhu S.K and Mr. Ravishankar Venkateshswaram heartly invite you and your family to join them in this joyous occasion of their daughter.</p>
                </motion.div>
              </div>
              <div className="parents-note">
                <p className="eyebrow">With blessings from our families</p>
                <p>Two homes, two cultures, one new beginning.</p>
              </div>
            </Section>

            <section className="countdown-section">
              <Alpana className="countdown-alpana" />
              <p className="eyebrow">THE BIG DAY</p>
              <h2>Counting down to forever</h2>
              <Countdown />
              <p className="countdown-date">{new Date(wedding.weddingDate).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</p>
            </section>

            <Section id="rsvp" eyebrow="Join Us" title="We would love to celebrate with you">
              <div className="rsvp-card">
                <div><MapPin size={26}/><span>{wedding.venue.name}<small>{wedding.venue.address}</small></span></div>
                <button
                     onClick={() => window.open(wedding.venue.mapUrl, "_blank", "noopener,noreferrer")}
                    className="primary-button"
                  >
      View Venue
    </button>
              </div>
              <div className="closing-note">
                <PanPata className="pan-closing" />
                <p className="bengali">ভালোবাসা, পরিবার এবং আশীর্বাদে</p>
                <h3>{wedding.bride.name} <span>♡</span> {wedding.groom.name}</h3>
                <p>With love, from our families.</p>
              </div>
            </Section>
          </main>

          <footer className="footer"><div>শুভ বিবাহ</div><span>12 years · one love story · one forever</span></footer>
        </>
      )}
    </div>
  );
}

export default App;
