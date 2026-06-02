import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import NextThemeProvider from "@/Providers/NextThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Idea Vault",
  description: "Best idea sharing app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mt-16 bg-background text-foreground">
        <NextThemeProvider>

          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          
        </NextThemeProvider>
        <ToastContainer />
        <Toaster />
      </body>
    </html>
  );
}
