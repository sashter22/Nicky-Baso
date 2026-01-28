export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 uppercase italic tracking-tighter text-red-700">
          Find Us
        </h2>
        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white mb-8">
          <iframe
            /* Link src sudah diarahkan tepat ke titik koordinat kamu */
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.846665042686!2d106.880133!3d-6.474223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjgNMjcuMiJTIDEwNsKwNTInNDguNSJF!5e0!3m2!1sid!2sid!4v1715000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <a
          /* Link ini akan membuka Google Maps di aplikasi/browser user */
          href="https://www.google.com/maps/dir/?api=1&destination=-6.474223,106.880133"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-colors shadow-lg shadow-red-600/20"
        >
          Petunjuk Arah (Maps)
        </a>
      </div>
    </section>
  );
}
