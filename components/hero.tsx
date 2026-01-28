export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-slate-950 to-slate-950"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
          ASLI URATNYA,
          <br />
          <span className="text-red-600 italic">JUARA MIENYA.</span>
        </h1>
        <p className="text-white/50 text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
          Citeureup • Bogor
        </p>
      </div>
    </section>
  );
}
