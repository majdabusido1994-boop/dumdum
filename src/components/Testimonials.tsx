"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "DUMDUM turned our rooftop into another dimension. The crowd was hypnotized from the first beat to the last.",
    name: "Rami K.",
    role: "Event Organizer, Canvas Amman",
  },
  {
    quote:
      "She has this rare ability to read a room and take it on a journey. Oriental meets electronic like nothing I've heard.",
    name: "Lina S.",
    role: "Music Journalist",
  },
  {
    quote:
      "We booked DUMDUM for a private event and she completely exceeded expectations. Professional, unique, unforgettable.",
    name: "Tariq M.",
    role: "Private Event Host",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7b2fbe]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4 text-center">
            What They Say
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-16 text-center">
            PRESS & REVIEWS
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <div className="relative p-8 border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm hover:border-[#7b2fbe]/30 transition-colors h-full flex flex-col">
                {/* Quote mark */}
                <span className="font-display text-6xl text-[#e8722a]/20 leading-none absolute top-4 left-6">
                  &ldquo;
                </span>

                <p className="text-[#f0ede8]/70 leading-relaxed mt-8 mb-6 flex-1 italic">
                  {t.quote}
                </p>

                <div className="border-t border-white/5 pt-4">
                  <p className="font-display text-lg tracking-wider text-[#f0ede8]">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#7b2fbe] mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
