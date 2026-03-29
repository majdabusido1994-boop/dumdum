"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  {
    src: "/images/hero-poster.jpg",
    alt: "DUMDUM live at the decks — stained glass venue",
    span: "col-span-2 row-span-2",
    filter: "",
  },
  {
    src: "/images/about.jpg",
    alt: "DUMDUM mixing under neon lights",
    span: "",
    filter: "",
  },
  {
    src: "/images/hero-poster.jpg",
    alt: "Pioneer DJ close-up",
    span: "",
    filter: "grayscale",
  },
  {
    src: "/images/about.jpg",
    alt: "Red laser atmosphere",
    span: "col-span-2",
    filter: "sepia",
  },
  {
    src: "/images/about.jpg",
    alt: "Behind the mixer",
    span: "",
    filter: "contrast",
  },
  {
    src: "/images/hero-poster.jpg",
    alt: "Colorful stained glass set",
    span: "",
    filter: "hue-rotate",
  },
];

const filterClasses: Record<string, string> = {
  "": "",
  grayscale: "grayscale group-hover:grayscale-0",
  sepia: "sepia-[0.6] group-hover:sepia-0",
  contrast:
    "contrast-125 brightness-75 group-hover:contrast-100 group-hover:brightness-100",
  "hue-rotate": "hue-rotate-[40deg] group-hover:hue-rotate-0",
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4">
            Visuals &mdash; صور
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 section-heading">
            GALLERY
          </h2>
          <p className="text-[#f0ede8]/40 mb-12 max-w-lg">
            Moments from behind the decks and under the lights.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={`${img.src}-${i}`} delay={i * 0.08}>
              <div
                className={`${img.span} bg-[#1a1a1a] overflow-hidden cursor-pointer group relative`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 min-h-[200px] ${filterClasses[img.filter]}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-xs uppercase tracking-wider text-[#f0ede8]/80">
                    {img.alt}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Instagram CTA */}
        <ScrollReveal>
          <div className="mt-8 text-center">
            <a
              href="https://instagram.com/dimadum_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#f0ede8]/40 hover:text-[#e8722a] transition-colors"
            >
              <span>More on Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>@dimadum_</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-[#f0ede8]/50 hover:text-[#e8722a] text-3xl"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}
