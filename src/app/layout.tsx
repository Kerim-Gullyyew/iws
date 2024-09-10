import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Viewport } from "next";
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

export const viewport: Viewport = {
  colorScheme: "normal",
  themeColor: "#4169E1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.iwsonlineschool.co.uk/"),

  title: "IWS Online School",
  description:
    "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning. Discover new horizons, Create lasting memories, and Lead the future with our live lessons. Enrol now Contact Us Enrol now Contact Us Accredited by Accredited by The right study programme for you Primary School Ages 7-11 Secondary School Ages",
  applicationName: "",
  authors: [{ name: "IWS Team", url: "https://www.iwsonlineschool.co.uk/" }],
  generator: "Next.js",
  keywords:
    "online cambridge school, international education, cambridge primary, cambridge secondary, igcse courses, a level courses, online learning, virtual classrooms, cambridge curriculum, international schooling, global education, cambridge assessment, e-learning cambridge, online tutoring, distance learning, cambridge exams preparation, online primary school, online secondary school, online a level, cambridge qualifications",
  referrer: "origin",
  creator: "IWS Team",
  publisher: "IWS Team",
  robots: "index, follow",
  alternates: { canonical: "https://iwsonlineschool.co.uk/" },
  icons: "./icon.ico",
  // manifest: "manifest",
  // openGraph: {
  //   determiner: 'auto',
  //   title: "My Website",
  //   description: "My Website Description",
  //   emails: "",
  //   phoneNumbers: "",
  //   faxNumbers: "",
  //   siteName: "My Website",
  //   locale: "",
  //   alternateLocale: ["", "", ""],
  //   images: [{
  //     url: "https://example.com/og.png",
  //   }],
  //   audio: [{
  //     url: "https://example.com/og.png",
  //   }],
  //   videos: [{
  //     url: "https://example.com/og.png",
  //   }],
  //   url: "https://example.com",
  //   countryName: '',
  //   ttl: 1,
  //   type: "website",
  // },
  twitter: {
    card: "summary_large_image",
    site: "@iwsonlineschool",
    creator: "@iwsonlineschool",
    images: "https://pbs.twimg.com/profile_banners/1483361690519486469/1711116188/600x200",
  },
  verification: {
    google: "08jm9bLhghGJ1wdA_Xoq7Zec8ajJmsPFsCOfwkAsHBQ",
    // yandex: "1234567890",
    // me: "1234567890",
  },
  appleWebApp: true,
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  // itunes: {
  //   appId: "23423",
  //   appArgument: "324234",
  // },
  abstract:
    "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning. Discover new horizons, Create lasting memories, and Lead the future with our live lessons. Enrol now Contact Us Enrol now Contact Us Accredited by Accredited by The right study programme for you Primary School Ages 7-11 Secondary School Ages",
  appLinks: null,
  // archives: "https://example.com/archives",
  // assets: "https://example.com/assets",
  // bookmarks: "https://example.com/bookmarks",
  // category: "My category",
  // classification: "My Classification",
  // other: {},
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "IWS Online School",
  "url": "https://iwsonlineschool.co.uk/",
  "description": "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning.",
  "logo": "./icon.ico",
  "sameAs": [
    "https://x.com/iwsonlineschool",
    "https://www.facebook.com/iwschoolonline",
    "https://www.instagram.com/iwsonlineschool",
    "https://www.linkedin.com/company/iwschoolonline"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    // "telephone": "+44-1234567890",
    "email": "admissions@iwschool.co.uk",
    "contactType": "Customer Service",
    "areaServed": "GB",
    "availableLanguage": "English"
  }
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
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main className="flex flex-col pt-[100px] w-full min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/645bc9166a9aad4bc579fefd/1h038j0d6"
        />
      </body>
    </html>
  );
}
