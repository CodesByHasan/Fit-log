import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import FitLogProvider from "@/context/FitLogContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FitLogProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-base-300 bg-base-200">
            <div className="container mx-auto flex min-h-24 flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row">
              <div className="flex items-center gap-2 text-lg font-semibold tracking-wide">
                <Image
                  src="/logo.png"
                  alt="FitLog Logo"
                  width={32}
                  height={32}
                />

                FITLOG
              </div>

              <p className="text-center text-sm text-base-content/60">
                © 2026 FitLog — Workout Library. Train hard, log honest.
              </p>
            </div>
          </footer>

          <ToastContainer
            position="top-right"
            autoClose={2500}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}