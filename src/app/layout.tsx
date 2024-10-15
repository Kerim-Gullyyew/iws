import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Sora, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IWS Online School",
  description:
    "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning. Discover new horizons, Create lasting memories, and Lead the future with our live lessons.",
  authors: [{ name: "IWS Team", url: "https://www.iwsonlineschool.co.uk/" }],
  keywords:
    "online cambridge school, international education, cambridge primary, cambridge secondary, igcse courses, a level courses, online learning, virtual classrooms, cambridge curriculum, international schooling, global education, cambridge assessment, e-learning cambridge, online tutoring, distance learning, cambridge exams preparation, online primary school, online secondary school, online a level, cambridge qualifications",
  referrer: "origin",
  creator: "IWS Team",
  publisher: "IWS Team",
  robots: "index, follow",
  alternates: { canonical: "https://iwsonlineschool.co.uk/" },
  icons: "./icon.ico",
  twitter: {
    card: "summary_large_image",
    site: "@iwsonlineschool",
    creator: "@iwsonlineschool",
    images:
      "https://pbs.twimg.com/profile_banners/1483361690519486469/1727611768/1500x500",
  },
  verification: {
    google: "08jm9bLhghGJ1wdA_Xoq7Zec8ajJmsPFsCOfwkAsHBQ",
  },
  appleWebApp: true,
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "IWS Online School",
  "url": "https://iwsonlineschool.co.uk/",
  "description":
    "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning.",
  "logo": "./icon.ico",
  "sameAs": [
    "https://x.com/iwsonlineschool",
    "https://www.facebook.com/iwschoolonline",
    "https://www.instagram.com/iwsonlineschool",
    "https://www.linkedin.com/company/iwschoolonline",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "admissions@iwschool.co.uk",
    "contactType": "Customer Service",
    "areaServed": "GB",
    "availableLanguage": "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <GoogleTagManager gtmId="GTM-KQK64CKD" />
      <GoogleAnalytics gaId="G-LCTE8BLQDX" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Script to handle saving the full URL in localStorage on initial load only */}
        <Script
          id="save-initial-url"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check if the initial URL has already been saved
                if (!localStorage.getItem('initialUrl')) {
                  const initialUrl = window.location.href;
                  localStorage.setItem('initialUrl', initialUrl);
                }
              })();
            `,
          }}
        />
      </head>
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
