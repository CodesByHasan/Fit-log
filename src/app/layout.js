import { Geist, Geist_Mono } from "next/font/google";
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

          {children}

          {/* Footer */}
          <footer className="border-t border-base-300 bg-base-200">
            <div className="container mx-auto flex min-h-24 items-center justify-between px-4">
              <div className="text-lg font-semibold tracking-wide">
                <span className="mr-2 text-[#ccff00]">⚒</span>
                FITLOG
              </div>

              <p className="text-sm text-base-content/70">
                © 2026 FitLog — Workout Library. Train hard, log honest.
              </p>
            </div>
          </footer>

          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
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
