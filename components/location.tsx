export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12 uppercase italic tracking-tighter text-red-700">
          Find Us
        </h2>
        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.555239634969!2d106.883733!3d-6.451121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699566e1397441%3A0xc3f3453b3f81e363!2sNicky%20Baso!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <a
          href="https://maps.app.goo.gl/uX3L6XQ9G9G9G9G9"
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
