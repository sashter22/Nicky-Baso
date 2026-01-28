import { Quote, Flame, Utensils, Droplets } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <Quote className="text-red-600/10 mx-auto mb-8 w-16 h-16" />
        <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tight mb-12 text-slate-900">
          "Kreatifitas dalam{" "}
          <span className="text-red-600">setiap bulatan</span>"
        </h2>
        <p className="max-w-2xl mx-auto text-slate-500 text-sm md:text-base leading-relaxed mb-20 font-medium">
          Nicky Baso menyajikan cita rasa baso urat & mie ayam yang autentik
          dengan resep turun temurun. Kami percaya bahwa kualitas daging terbaik
          dan bumbu rempah asli adalah kunci kebahagiaan pelanggan kami di
          Citeureup.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 hover:scale-105 transition-transform">
            <Flame className="text-red-600 mb-6 mx-auto w-8 h-8" />
            <h4 className="font-black uppercase tracking-widest text-slate-800">
              Kualitas
            </h4>
            <p className="text-xs text-slate-400 mt-2">
              Bahan segar pilihan setiap hari.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-10 rounded-3xl hover:scale-105 transition-transform shadow-xl">
            <Utensils className="text-red-500 mb-6 mx-auto w-8 h-8" />
            <h4 className="font-black uppercase tracking-widest text-red-500">
              Inovasi
            </h4>
            <p className="text-xs text-slate-400 mt-2">
              Varian menu yang menggugah selera.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-slate-200 hover:scale-105 transition-transform">
            <Droplets className="text-blue-500 mb-6 mx-auto w-8 h-8" />
            <h4 className="font-black uppercase tracking-widest text-slate-800">
              Kesegaran
            </h4>
            <p className="text-xs text-slate-400 mt-2">
              Pelengkap makan yang nikmat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
