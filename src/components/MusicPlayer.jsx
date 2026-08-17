import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { wedding } from "../config";

export default function MusicPlayer() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audio.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = async () => {
    if (!audio.current) return;
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      try {
        await audio.current.play();
        setPlaying(true);
      } catch {}
    }
  };

  return (
    <>
      <audio ref={audio} src={wedding.music} loop preload="auto" />
      <button onClick={toggle} className="music-button" aria-label="Toggle music">
        {playing ? <Volume2 size={19} /> : <VolumeX size={19} />}
        <Music2 size={15} className={playing ? "music-spin" : ""} />
      </button>
    </>
  );
}