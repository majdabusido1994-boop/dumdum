"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubscribed(true);
    } catch {
      setSubscribed(true);
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-display text-2xl tracking-wider mb-2">
              STAY IN THE LOOP
            </p>
            <p className="text-sm text-[#f0ede8]/40 mb-6">
              No spam, just drops.
            </p>

            {subscribed ? (
              <p className="text-[#e8722a] font-display text-xl tracking-wider">
                YOU&apos;RE IN.
              </p>
            ) : (
              <form
                name="newsletter"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleNewsletter}
                className="flex max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <input type="hidden" name="bot-field" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-[#1a1a1a] border border-white/10 px-4 py-3 text-[#f0ede8] focus:border-[#e8722a] focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#e8722a] text-[#0a0a0a] font-bold uppercase tracking-wider text-xs hover:bg-[#f0ede8] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-display text-xl tracking-wider text-[#f0ede8]/30">
            DUMDUM
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/dimadum_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0ede8]/30 hover:text-[#e8722a] transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[#f0ede8]/30 hover:text-[#e8722a] transition-colors text-sm"
            >
              SoundCloud
            </a>
            <a
              href="#"
              className="text-[#f0ede8]/30 hover:text-[#e8722a] transition-colors text-sm"
            >
              Spotify
            </a>
            <a
              href="#"
              className="text-[#f0ede8]/30 hover:text-[#e8722a] transition-colors text-sm"
            >
              Mixcloud
            </a>
          </div>

          <p className="text-xs text-[#f0ede8]/20">
            &copy; {new Date().getFullYear()} DUMDUM &bull; Made in Amman &bull; صنع في عمّان
          </p>
        </div>
      </div>
    </footer>
  );
}
