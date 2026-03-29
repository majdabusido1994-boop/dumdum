"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="DUMDUM mixing under red neon lights"
                  className="w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#e8722a] opacity-30" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#7b2fbe] opacity-30" />
              {/* Arabic watermark */}
              <div className="absolute bottom-8 right-8 text-6xl font-light text-[#f0ede8]/5 select-none pointer-events-none">
                عمّان
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4">
                About
              </p>
              <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-2 section-heading">
                DUMDUM
              </h2>
              <p className="text-lg text-[#f0ede8]/15 mb-8">دمدم — عمّان، الأردن</p>

              <div className="space-y-4 text-[#f0ede8]/70 leading-relaxed">
                <p>
                  Born and raised in Amman, DUMDUM is a force in Jordan&apos;s underground
                  music scene. What started as a passion at intimate gatherings
                  has evolved into a movement — weaving oriental melodies with
                  electronic chill and downbeat grooves into something uniquely Amman.
                </p>
                <p>
                  From dimly lit rooftops in Jabal Amman to secret underground spots,
                  she creates hypnotic soundscapes that blend Eastern scales with deep
                  electronic textures. Her sets are journeys — slow-burning, layered,
                  and deeply atmospheric.
                </p>
                <p>
                  Known at the city&apos;s most iconic venues and the hidden spots
                  only locals whisper about, DUMDUM isn&apos;t just playing music — she&apos;s
                  crafting the sound of a generation that lives between two worlds.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 pl-6 border-l-2 border-[#7b2fbe]">
                <p className="text-xl italic text-[#f0ede8]/90">
                  &ldquo;The underground isn&apos;t a place. It&apos;s a feeling.&rdquo;
                </p>
              </blockquote>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-4xl text-[#e8722a]">7+</p>
                  <p className="text-sm text-[#f0ede8]/50 uppercase tracking-wider mt-1">
                    Years Active
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-[#7b2fbe]">100+</p>
                  <p className="text-sm text-[#f0ede8]/50 uppercase tracking-wider mt-1">
                    Shows Played
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-[#c9a84c]">5</p>
                  <p className="text-sm text-[#f0ede8]/50 uppercase tracking-wider mt-1">
                    Cities
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
