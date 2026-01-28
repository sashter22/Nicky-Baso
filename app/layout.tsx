import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// REVISI METADATA UNTUK SEO
export const metadata: Metadata = {
  title: "Nicky Baso - Asli Uratnya! Bakso Urat & Mie Ayam Citeureup",
  description:
    "Nikmati Bakso Urat asli dan Mie Ayam legendaris di Citeureup, Bogor. Rasa juara, harga terjangkau! Lokasi Desa Gunung Sari.",
  keywords: [
    "Nicky Baso",
    "Bakso Citeureup",
    "Bakso Bogor",
    "Bakso Urat Enak",
    "Mie Ayam Bogor",
  ],
  // Nanti kode verifikasi Google ditaruh di bawah sini kalau sudah ada
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {" "}
      {/* Ganti ke 'id' karena kontennya bahasa Indonesia */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
