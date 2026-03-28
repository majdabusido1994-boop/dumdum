const mixes = [
  {
    title: "Amman After Dark Vol. 3",
    genre: "Oriental Chill",
    duration: "1:22:00",
    cover: "/images/hero-poster.jpg",
    accent: "from-[#e8722a]/40",
  },
  {
    title: "Rooftop Sessions",
    genre: "Downbeat / Electronic",
    duration: "58:00",
    cover: "/images/about.jpg",
    accent: "from-[#7b2fbe]/40",
  },
  {
    title: "Eastern Echoes",
    genre: "Oriental Electronica",
    duration: "1:15:00",
    cover: "/images/about.jpg",
    accent: "from-[#c9a84c]/40",
  },
  {
    title: "Midnight Silk",
    genre: "Chill / Ambient",
    duration: "1:05:00",
    cover: "/images/hero-poster.jpg",
    accent: "from-[#e8722a]/40",
  },
];

export default function Music() {
  return (
    <section id="music" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-[#e8722a] mb-4">
          Listen
        </p>
        <h2 className="font-display text-5xl md:text-7xl tracking-wider mb-12">
          MIXES & MUSIC
        </h2>

        {/* SoundCloud Embed Placeholder */}
        <div className="mb-12 bg-[#1a1a1a] p-6 rounded-none border border-white/5">
          <p className="text-[#f0ede8]/50 text-sm mb-4 uppercase tracking-wider">
            Latest Mix
          </p>
          {/* Replace YOUR_TRACK_ID with your actual SoundCloud track ID */}
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DUMDUM Latest Mix on SoundCloud"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23e8722a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
            className="opacity-80"
          />
        </div>

        {/* Mix Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mixes.map((mix) => (
            <div key={mix.title} className="group cursor-pointer">
              <div className="aspect-square bg-[#1a1a1a] overflow-hidden relative">
                <img
                  src={mix.cover}
                  alt={mix.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                {/* Color overlay per mix */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${mix.accent} to-transparent mix-blend-multiply`}
                />
                {/* Title overlay on the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-display text-2xl tracking-widest text-[#f0ede8] drop-shadow-lg">
                    {mix.title.toUpperCase()}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#f0ede8]/60 mt-2">
                    {mix.genre}
                  </span>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#e8722a]/90 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-[#0a0a0a] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#7b2fbe]">
                  {mix.genre}
                </span>
                <span className="text-xs text-[#f0ede8]/30">{mix.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
