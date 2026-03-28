export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="text-center mb-12">
          <p className="font-display text-2xl tracking-wider mb-2">
            STAY IN THE LOOP
          </p>
          <p className="text-sm text-[#f0ede8]/40 mb-6">
            No spam, just drops.
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
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
        </div>

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
            &copy; {new Date().getFullYear()} DUMDUM &bull; Made in Amman
          </p>
        </div>
      </div>
    </footer>
  );
}
