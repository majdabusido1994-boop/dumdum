"use client";

import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function PlayableVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.pause();
      video.currentTime = 0;
      setPlaying(false);
    } else {
      video.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      className="relative aspect-video bg-[#1a1a1a] overflow-hidden group cursor-pointer"
      onClick={toggle}
      onMouseEnter={() => {
        if (!("ontouchstart" in window)) {
          videoRef.current?.play().then(() => setPlaying(true)).catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (!("ontouchstart" in window) && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setPlaying(false);
        }
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6">
        <p className="font-display text-2xl tracking-wider text-[#f0ede8]">
          LIVE SET
        </p>
        <p className="text-xs uppercase tracking-wider text-[#f0ede8]/50 mt-1">
          {playing ? "Tap to pause" : "Tap to play"}
        </p>
      </div>
      {/* Play/Pause icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${playing ? "opacity-0" : "opacity-40 group-hover:opacity-0"}`}>
        <div className="w-20 h-20 rounded-full border-2 border-[#f0ede8]/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#f0ede8] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function VideoReels() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4">
            Watch
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4">
            LIVE REELS
          </h2>
          <p className="text-[#f0ede8]/40 mb-12 max-w-lg">
            Snippets from the decks. Follow{" "}
            <a
              href="https://instagram.com/dimadum_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e8722a] hover:underline"
            >
              @dimadum_
            </a>{" "}
            for more.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main video reel */}
          <ScrollReveal className="lg:col-span-2 lg:row-span-2">
            <PlayableVideo />
          </ScrollReveal>

          {/* Placeholder reels */}
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[9/16] sm:aspect-square bg-[#1a1a1a] overflow-hidden group">
              <img
                src="/images/about.jpg"
                alt="DUMDUM mixing"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-lg tracking-wider text-[#f0ede8]">
                  NEON NIGHTS
                </p>
                <p className="text-xs text-[#e8722a] mt-1">Coming soon</p>
              </div>
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 text-[#f0ede8]/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[9/16] sm:aspect-square bg-[#1a1a1a] overflow-hidden group">
              <img
                src="/images/hero-poster.jpg"
                alt="DUMDUM at venue"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-lg tracking-wider text-[#f0ede8]">
                  STAINED GLASS SET
                </p>
                <p className="text-xs text-[#e8722a] mt-1">Coming soon</p>
              </div>
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 text-[#f0ede8]/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
