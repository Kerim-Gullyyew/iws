import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Viewport } from 'next'
import "@fontsource/sora";
import "@fontsource/inter";


export const viewport: Viewport = {
  colorScheme: 'normal',
  themeColor: '#4169E1',
  width: "device-width",
  initialScale: 1,
}


export const metadata: Metadata = {
  // metadataBase: new URL("https://www.iwsonlineschool.co.uk/"),

  title: "IWS Online School",
  description: "Generated by create next app ",
  // applicationName: "",

  icons: "./icon.ico",
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
        <main className="flex flex-col pt-[100px] w-full min-h-screen bg-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
