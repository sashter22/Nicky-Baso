import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MenuList from "@/components/menu_list";
import Location from "@/components/location";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 scroll-smooth min-h-screen">
      <Navbar />
      <Hero />
      <About />

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-4 border-b pb-10 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-slate-900">
                Menu List
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto md:ml-0 mt-2"></div>
            </div>
            <p className="text-red-600 font-bold text-xs md:text-sm tracking-[0.3em] uppercase">
              Harga terjangkau, rasa berkelas
            </p>
          </div>
          <MenuList />
        </div>
      </section>

      <Location />
      <Footer />
    </main>
  );
}
