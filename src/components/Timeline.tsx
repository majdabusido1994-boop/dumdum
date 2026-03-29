"use client";

import { timeline } from "@/data/events";
import ScrollReveal from "./ScrollReveal";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4 text-center">
            The Journey &mdash; الرحلة
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-16 text-center section-heading">
            TIMELINE
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e8722a] via-[#7b2fbe] to-[#c9a84c]" />

          {timeline.map((entry, index) => (
            <ScrollReveal
              key={entry.year}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#e8722a] rounded-full -translate-x-1/2 mt-2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <span className="font-display text-3xl text-[#7b2fbe]">
                    {entry.year}
                  </span>
                  <h3 className="font-display text-2xl tracking-wider mt-1 text-[#f0ede8]">
                    {entry.title}
                  </h3>
                  <p className="text-[#f0ede8]/60 mt-2 leading-relaxed">
                    {entry.description}
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
