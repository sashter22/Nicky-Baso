import { listMenu } from "@/data/menu";

export default function MenuList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {listMenu.map((item, index) => (
        <div
          key={index}
          className="group relative flex flex-col justify-between items-center text-center p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.07)] cursor-pointer transition-all duration-300
                     /* Efek Desktop (Sesuai Foto) */
                     hover:-translate-y-3 hover:border-red-200 hover:shadow-[0_25px_50px_-12px_rgba(220,38,38,0.15)]
                     /* Efek HP/Mobile (Biar persis kayak ditekan beneran) */
                     active:scale-95 active:bg-red-50/50 active:border-red-300 active:shadow-inner active:duration-75"
        >
          {/* Huruf Inisial di Background (Group Hover Efek) */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-8xl font-black text-slate-50 select-none group-hover:text-red-100/50 transition-colors duration-500 z-0">
            {item.nama[0]}
          </div>

          <div className="w-full relative z-10">
            {/* Kategori */}
            <span className="text-[9px] font-bold text-red-600/60 uppercase tracking-[0.4em] mb-4 block">
              {item.cat}
            </span>

            {/* Nama Menu - Italics & Black (Persis Foto) */}
            <h3 className="font-black text-xl uppercase italic text-slate-800 group-hover:text-red-600 transition-colors duration-300 leading-tight">
              {item.nama}
            </h3>

            {/* Garis Dekorasi Merah Pas Hover */}
            <div className="h-[2px] w-8 bg-slate-100 mx-auto my-6 group-hover:w-16 group-hover:bg-red-500 transition-all duration-500"></div>

            {/* Deskripsi */}
            <p className="text-slate-400 text-[11px] leading-relaxed font-medium px-2">
              {item.desc}
            </p>
          </div>

          {/* Label Harga - Berubah Merah saat Kartu Ditekan */}
          <div className="mt-8 relative z-10 px-5 py-1.5 rounded-full bg-slate-900 group-hover:bg-red-600 transition-all duration-500 shadow-md">
            <p className="font-black text-base text-white tracking-tight flex items-center gap-1">
              <span>RP</span>
              <span>{item.harga}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
