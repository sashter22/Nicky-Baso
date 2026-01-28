export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 uppercase italic tracking-tighter text-red-700">
          Find Us
        </h2>

        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.846665042686!2d106.880133!3d-6.474223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjgNMjcuMiJTIDEwNsKwNTInNDguNSJF!5e0!3m2!1sid!2sid!4v1715000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* --- Bagian Jam Operasional & Tombol --- */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          {/* Sisi Kiri: Jam Operasional */}
          <div className="text-left space-y-3">
            <h4 className="font-black uppercase tracking-widest text-slate-800 text-sm flex items-center gap-2">
              <span className="text-xl">🕒</span> Jam Operasional
            </h4>
            <div className="text-sm text-slate-600 space-y-1">
              <p className="flex justify-between border-b pb-1">
                <span>Senin - Jumat:</span>
                <span className="font-bold text-slate-900">11.00 - 21.00</span>
              </p>
              <p className="flex justify-between border-b pb-1">
                <span>Sabtu - Minggu:</span>
                <span className="font-bold text-slate-900">10.00 - 22.00</span>
              </p>
              <p className="text-[10px] italic text-red-500 pt-1">
                *Tutup pada Libur Nasional & Hari Raya
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Tombol Maps */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-6.474223,106.880133"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-colors shadow-lg shadow-red-600/20 w-full md:w-auto justify-center"
            >
              Petunjuk Arah (Maps)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
