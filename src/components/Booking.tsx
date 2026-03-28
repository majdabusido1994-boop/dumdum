"use client";

import { useState, FormEvent } from "react";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to a form service (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-[#111]">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4 text-center">
          Let&apos;s Work
        </p>
        <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-center">
          BOOK DUMDUM
        </h2>
        <p className="text-center text-[#f0ede8]/50 mb-12 max-w-lg mx-auto">
          Available for club nights, private parties, festivals, brand events,
          and underground raves. Based in Amman, available worldwide.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <div className="font-display text-4xl text-[#e8722a] mb-4">
              REQUEST SENT
            </div>
            <p className="text-[#f0ede8]/60">
              Thanks for reaching out! DUMDUM will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
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
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
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
                  required
                  className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                Venue / Location
              </label>
              <input
                type="text"
                className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors"
                placeholder="Venue name and city"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#f0ede8]/50 mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your event — vibe, expected crowd, budget, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#e8722a] text-[#0a0a0a] font-bold uppercase tracking-wider text-sm hover:bg-[#f0ede8] transition-colors"
            >
              Send Booking Request
            </button>
          </form>
        )}

        {/* Direct Contact */}
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
      </div>
    </section>
  );
}
