export default function Hero() {
  return (
    <section
      id="home"
      /* REVISI: 
         - h-[85vh] tetap untuk mobile agar proporsional.
         - md:h-[550px] mengunci tinggi saat mode desktop aktif agar tidak manjang ke bawah.
         - py-20 md:py-0 memastikan konten tetap di tengah tanpa padding berlebih.
      */
      className="relative h-[85vh] md:h-[550px] lg:h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden px-6 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-slate-950 to-slate-950"></div>

      <div className="relative z-10">
        {/* Ukuran font md:text-7xl agar lebih pas dengan tinggi section yang baru */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
          ASLI URATNYA,
          <br />
          <span className="text-red-600 italic">JUARA MIENYA.</span>
        </h1>
        <p className="text-white/50 text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
          Citeureup • Bogor
        </p>
      </div>

      {/* Tambahan: Gradasi halus ke arah bawah agar menyatu dengan section putih di bawahnya */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}
