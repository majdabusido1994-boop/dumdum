"use client";

import { useState } from "react";
import { events } from "@/data/events";
import ScrollReveal from "./ScrollReveal";

export default function Events() {
  const [showPast, setShowPast] = useState(false);

  const upcoming = events.filter((e) => !e.isPast);
  const past = events.filter((e) => e.isPast);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.toLocaleDateString("en-US", { day: "2-digit" }),
      month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
      year: date.getFullYear().toString(),
    };
  };

  return (
    <section id="events" className="py-24 px-6 bg-[#111]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4">
            Catch Me Live
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-12">
            UPCOMING SHOWS
          </h2>
        </ScrollReveal>

        {/* Upcoming Events */}
        <div className="space-y-4">
          {upcoming.map((event, i) => {
            const d = formatDate(event.date);
            return (
              <ScrollReveal key={event.id} delay={i * 0.1}>
                <div className="flex items-center gap-6 p-6 bg-[#0a0a0a] border border-white/5 hover:border-[#e8722a]/30 transition-colors group">
                  <div className="text-center min-w-[70px]">
                    <p className="font-display text-3xl text-[#e8722a]">
                      {d.day}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[#f0ede8]/50">
                      {d.month} {d.year}
                    </p>
                  </div>

                  <div className="w-px h-12 bg-white/10" />

                  <div className="flex-1">
                    <h3 className="font-display text-xl tracking-wider group-hover:text-[#e8722a] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#f0ede8]/50 mt-1">
                      {event.venue} &bull; {event.location} &bull; {event.time}
                    </p>
                  </div>

                  {event.ticketUrl && (
                    <a
                      href={event.ticketUrl}
                      className="hidden sm:block px-6 py-2 border border-[#e8722a] text-[#e8722a] text-sm uppercase tracking-wider hover:bg-[#e8722a] hover:text-[#0a0a0a] transition-colors"
                    >
                      Tickets
                    </a>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Past Events Toggle */}
        <div className="mt-12">
          <button
            type="button"
            onClick={() => setShowPast(!showPast)}
            className="text-sm uppercase tracking-widest text-[#f0ede8]/40 hover:text-[#7b2fbe] transition-colors flex items-center gap-2"
          >
            <span>{showPast ? "Hide" : "Show"} Past Events</span>
            <svg
              className={`w-4 h-4 transition-transform ${showPast ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showPast && (
            <div className="mt-6 space-y-3 opacity-60">
              {past.map((event) => {
                const d = formatDate(event.date);
                return (
                  <div
                    key={event.id}
                    className="flex items-center gap-6 p-4 border border-white/5"
                  >
                    <div className="text-center min-w-[70px]">
                      <p className="font-display text-2xl text-[#f0ede8]/40">
                        {d.day}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-[#f0ede8]/30">
                        {d.month} {d.year}
                      </p>
                    </div>
                    <div className="w-px h-8 bg-white/5" />
                    <div>
                      <h3 className="font-display text-lg tracking-wider text-[#f0ede8]/50">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#f0ede8]/30 mt-1">
                        {event.venue} &bull; {event.location}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
