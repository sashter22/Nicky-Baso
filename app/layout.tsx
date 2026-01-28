import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll"; // <-- 1. Import di sini

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicky Baso - Asli Uratnya!", // <-- Opsional: Ganti biar keren
  description: "Baso Urat & Mie Ayam Legendaris di Citeureup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Bungkus children dengan SmoothScroll */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
