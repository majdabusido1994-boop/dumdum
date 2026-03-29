"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4 text-center">
            Let&apos;s Work &mdash; احجزيني
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-center section-heading">
            BOOK DUMDUM
          </h2>
          <p className="text-center text-[#f0ede8]/50 mb-12 max-w-lg mx-auto">
            Available for club nights, private parties, festivals, brand events,
            and underground raves. Based in Amman, available worldwide.
          </p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="text-center py-16">
              <div className="font-display text-4xl text-[#e8722a] mb-4">
                REQUEST SENT
              </div>
              <p className="text-[#f0ede8]/60">
                Thanks for reaching out! DUMDUM will get back to you soon.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            {/* Netlify Forms: hidden form for static detection */}
            <form
              name="booking"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="booking" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                    Event Type *
                  </label>
                  <select
                    name="event-type"
                    required
                    title="Event Type"
                    className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select type</option>
                    <option value="club">Club Night</option>
                    <option value="private">Private Party</option>
                    <option value="festival">Festival</option>
                    <option value="corporate">Brand / Corporate</option>
                    <option value="underground">Underground / Warehouse</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="event-date"
                    required
                    title="Event Date"
                    placeholder="Select date"
                    className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors date-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                  Venue / Location
                </label>
                <input
                  type="text"
                  name="venue"
                  className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
                  placeholder="Venue name and city"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#050505] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your event — vibe, expected crowd, budget, etc."
                />
              </div>

              <button
                type="submit"
                className="btn-neon w-full py-4 bg-[#e8722a] text-[#050505] font-bold uppercase tracking-wider text-sm hover:bg-[#f0ede8] transition-all"
              >
                Send Booking Request
              </button>
            </form>
          </ScrollReveal>
        )}

        {/* Direct Contact */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-xs uppercase tracking-wider text-[#f0ede8]/30 mb-3">
              Or reach out directly
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://instagram.com/dimadum_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f0ede8]/50 hover:text-[#e8722a] transition-colors text-sm uppercase tracking-wider"
              >
                @dimadum_
              </a>
              <span className="text-[#f0ede8]/20">|</span>
              <a
                href="mailto:booking@dumdum.dj"
                className="text-[#f0ede8]/50 hover:text-[#e8722a] transition-colors text-sm uppercase tracking-wider"
              >
                booking@dumdum.dj
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
