import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main className="flex flex-col pt-[80px] w-full min-h-screen bg-white">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
