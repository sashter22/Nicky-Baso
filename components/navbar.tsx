"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { menuItems } from "@/data/menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[150] transition-all duration-500 px-6 md:px-20 py-5 flex justify-between items-center ${scrolled ? "bg-white shadow-sm py-4" : "bg-transparent"}`}
    >
      <div className="text-xl font-black tracking-tighter uppercase italic">
        <span className="text-red-600">NICKY</span>{" "}
        <span className={scrolled ? "text-slate-900" : "text-white"}>BASO</span>
      </div>

      <ul
        className={`hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] ${scrolled ? "text-slate-600" : "text-white/80"}`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="hover:text-red-600 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 relative z-[200]"
      >
        {isMenuOpen ? (
          <X className="text-slate-900" size={28} />
        ) : (
          <Menu
            className={scrolled ? "text-slate-900" : "text-white"}
            size={28}
          />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-white z-[180] transition-all duration-500 ease-in-out md:hidden flex flex-col pt-24 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-6 text-sm font-bold uppercase tracking-widest text-slate-700 border-b border-slate-50"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
