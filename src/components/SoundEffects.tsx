"use client";

import { useEffect, useRef, useState } from "react";

export default function SoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (!soundEnabled) return;

    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    // Ambient drone pad — oriental chill vibe
    const createDrone = () => {
      const now = ctx.currentTime;

      // Base drone
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(110, now); // A2
      const gain1 = ctx.createGain();
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.03, now + 4);

      // Fifth harmony
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(165, now); // E3
      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.015, now + 5);

      // Oriental flavor — slightly detuned
      const osc3 = ctx.createOscillator();
      osc3.type = "triangle";
      osc3.frequency.setValueAtTime(220, now); // A3
      const gain3 = ctx.createGain();
      gain3.gain.setValueAtTime(0, now);
      gain3.gain.linearRampToValueAtTime(0.008, now + 6);

      // LFO for gentle movement
      const lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(0.15, now);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(3, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc1.frequency);
      lfoGain.connect(osc3.frequency);

      // Filter for warmth
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, now);
      filter.Q.setValueAtTime(1, now);

      // Reverb via convolver workaround (delay-based)
      const delay = ctx.createDelay();
      delay.delayTime.setValueAtTime(0.3, now);
      const feedback = ctx.createGain();
      feedback.gain.setValueAtTime(0.2, now);
      delay.connect(feedback);
      feedback.connect(delay);

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.6, now);

      osc1.connect(gain1).connect(filter);
      osc2.connect(gain2).connect(filter);
      osc3.connect(gain3).connect(filter);
      filter.connect(masterGain);
      filter.connect(delay);
      delay.connect(masterGain);
      masterGain.connect(ctx.destination);

      lfo.start(now);
      osc1.start(now);
      osc2.start(now);
      osc3.start(now);

      return { oscs: [osc1, osc2, osc3, lfo], gains: [gain1, gain2, gain3, masterGain] };
    };

    const drone = createDrone();

    return () => {
      drone.oscs.forEach((o) => {
        try { o.stop(); } catch { /* already stopped */ }
      });
      ctx.close();
    };
  }, [soundEnabled]);

  // Hover sound — soft chime
  useEffect(() => {
    if (!soundEnabled || !audioContextRef.current) return;

    const playChime = () => {
      const ctx = audioContextRef.current;
      if (!ctx || ctx.state === "closed") return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = "sine";

      // Pentatonic oriental notes
      const notes = [440, 493.88, 554.37, 659.25, 739.99, 880];
      osc.frequency.setValueAtTime(
        notes[Math.floor(Math.random() * notes.length)],
        now
      );

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2000, now);

      osc.connect(filter).connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    };

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => el.addEventListener("mouseenter", playChime));

    return () => {
      links.forEach((el) => el.removeEventListener("mouseenter", playChime));
    };
  }, [soundEnabled]);

  // Click sound — soft kick
  useEffect(() => {
    if (!soundEnabled || !audioContextRef.current) return;

    const playClick = () => {
      const ctx = audioContextRef.current;
      if (!ctx || ctx.state === "closed") return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.1);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    };

    document.addEventListener("click", playClick);
    return () => document.removeEventListener("click", playClick);
  }, [soundEnabled]);

  const toggle = () => {
    setHasInteracted(true);
    setSoundEnabled(!soundEnabled);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:border-[#e8722a] transition-colors group"
      aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
      title={soundEnabled ? "Sound on — click to mute" : "Click for ambient sound"}
    >
      {soundEnabled ? (
        <svg
          className="w-5 h-5 text-[#e8722a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6 10H3v4h3l4 4V6L6 10z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-[#f0ede8]/40 group-hover:text-[#e8722a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      )}

      {/* Pulse indicator when sound is on */}
      {soundEnabled && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#e8722a] rounded-full animate-pulse-glow" />
      )}

      {/* First-time hint */}
      {!hasInteracted && (
        <span className="absolute -top-10 right-0 bg-[#1a1a1a] border border-white/10 text-[#f0ede8]/60 text-xs px-3 py-1 whitespace-nowrap rounded">
          Enable ambient sound
        </span>
      )}
    </button>
  );
}
