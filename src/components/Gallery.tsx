"use client";

import { useState } from "react";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "DUMDUM live set", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Behind the decks", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Crowd energy", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Amman rooftop", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Underground venue", span: "col-span-2" },
  { src: "/images/gallery-6.jpg", alt: "Studio session", span: "" },
  { src: "/images/gallery-7.jpg", alt: "Festival stage", span: "" },
  { src: "/images/gallery-8.jpg", alt: "Neon lights", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4">
          Visuals
        </p>
        <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-12">
          GALLERY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`${img.span} bg-[#1a1a1a] overflow-hidden cursor-pointer group`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 min-h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
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
