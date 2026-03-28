const mixes = [
  {
    title: "Amman After Dark Vol. 3",
    genre: "Oriental Chill",
    duration: "1:22:00",
    cover: "/images/mix-1.jpg",
  },
  {
    title: "Rooftop Sessions",
    genre: "Downbeat / Electronic",
    duration: "58:00",
    cover: "/images/mix-2.jpg",
  },
  {
    title: "Eastern Echoes",
    genre: "Oriental Electronica",
    duration: "1:15:00",
    cover: "/images/mix-3.jpg",
  },
  {
    title: "Midnight Silk",
    genre: "Chill / Ambient",
    duration: "1:05:00",
    cover: "/images/mix-4.jpg",
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
          {/* Replace the src with your actual SoundCloud embed URL */}
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
            <div
              key={mix.title}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-[#1a1a1a] overflow-hidden relative">
                <img
                  src={mix.cover}
                  alt={mix.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-[#e8722a] flex items-center justify-center">
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
              <div className="mt-3">
                <h3 className="font-display text-xl tracking-wider group-hover:text-[#e8722a] transition-colors">
                  {mix.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs uppercase tracking-wider text-[#7b2fbe]">
                    {mix.genre}
                  </span>
                  <span className="text-xs text-[#f0ede8]/30">
                    {mix.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
