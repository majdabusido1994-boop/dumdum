"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force play on mobile — some browsers need a manual .play() call
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // If autoplay fails, try again on first user interaction
        const playOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", playOnInteraction);
          document.removeEventListener("click", playOnInteraction);
        };
        document.addEventListener("touchstart", playOnInteraction, { once: true });
        document.addEventListener("click", playOnInteraction, { once: true });
      });
    };

    // Try immediately and also after load
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Fallback image for mobile (shows beneath video) */}
        <img
          src="/images/hero-poster.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-[120%] object-cover opacity-30"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-in">
          <p className="text-sm uppercase tracking-[0.4em] text-[#e8722a] mb-6">
            Electronic &bull; Oriental &bull; Chill &bull; Downbeat
          </p>
        </div>

        <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-wider animate-slide-up">
          <span className="text-gradient">DUM</span>
          <span className="text-[#f0ede8]">DUM</span>
        </h1>

        {/* Arabic accent */}
        <p className="mt-2 text-2xl text-[#f0ede8]/20 font-light tracking-widest animate-fade-in">
          دمدم
        </p>

        <p className="mt-4 text-lg md:text-xl text-[#f0ede8]/60 max-w-md mx-auto animate-fade-in">
          From the underground, for the underground.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a
            href="#events"
            className="px-8 py-3 bg-[#e8722a] text-[#0a0a0a] font-bold uppercase tracking-wider text-sm hover:bg-[#f0ede8] transition-colors rounded-none"
          >
            Next Shows
          </a>
          <a
            href="#booking"
            className="px-8 py-3 border border-[#f0ede8]/30 text-[#f0ede8] font-bold uppercase tracking-wider text-sm hover:border-[#7b2fbe] hover:text-[#7b2fbe] transition-colors rounded-none"
          >
            Book DUMDUM
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in">
          <a
            href="https://instagram.com/dimadum_"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="text-[#f0ede8]/40 hover:text-[#e8722a] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Spotify"
            className="text-[#f0ede8]/40 hover:text-[#e8722a] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="SoundCloud"
            className="text-[#f0ede8]/40 hover:text-[#e8722a] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.46.04C5.21.26.26 5.33.04 11.58c-.24 6.84 5.15 12.46 11.92 12.42 2.05-.01 3.99-.51 5.69-1.42l.49 2.1c.18.78 1.05 1.16 1.73.75l2.14-1.28c.58-.35.82-1.06.57-1.68l-1.04-2.58c1.72-2.1 2.7-4.79 2.55-7.72C23.82 5.3 18.27-.2 11.46.04zM8.08 15.67c-.42 0-.83-.03-1.24-.1V9.01c.41-.06.81-.09 1.22-.09 2.58 0 3.88 1.27 3.88 3.3 0 2.2-1.42 3.45-3.86 3.45zm8.13-.17h-1.22l-2.49-3.2v3.2h-1.12V8.88h1.22l2.39 3.12V8.88h1.22v6.62z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border-2 border-[#f0ede8]/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#e8722a] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
