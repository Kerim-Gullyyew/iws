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
  "@type": ["WebSite", "School"],
  name: "IWS Online School",
  url: "https://iwsonlineschool.co.uk/",
  description:
    "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning.",
  publisher: {
    "@type": "Organization",
    name: "IWS Online School",
    url: "https://iwsonlineschool.co.uk/",
    logo: "https://iwsonlineschool.co.uk/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-7424-781613",
      contactType: "Customer Support",
      email: "admissions@iwschool.co.uk",
      availableLanguage: [
        "English",
        "French",
        "Spanish",
        "Turkish",
        "Romanian",
      ],
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "East Wing Turkey Court, Turkey Mill",
    addressLocality: "Maidstone",
    addressRegion: "England",
    postalCode: "ME14 5PP",
    addressCountry: "United Kingdom",
  },
  sameAs: [
    "https://x.com/iwsonlineschool",
    "https://www.facebook.com/iwschoolonline",
    "https://www.instagram.com/iwsonlineschool",
    "https://www.linkedin.com/company/iwschoolonline",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://iwsonlineschool.co.uk/",
  },
  about: {
    "@type": "EducationalOrganization",
    name: "IWS Online School",
    description:
      "Accredited, Holistic Online Schooling IWS Online School - Your compass in the digital realm of learning.",
  },
  creator: {
    "@type": "Organization",
    name: "IWS Online School",
  },
  schoolType: "Online School",
  foundingDate: "2021",
  numberOfStudents: 153,
  copyrightYear: "2024",
  inLanguage: "en",
  isFamilyFriendly: true,
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: "https://schema.org/CommentAction",
    userInteractionCount: 1568,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://iwsonlineschool.co.uk/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://iwsonlineschool.co.uk/about-us",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "School Fees",
        item: "https://iwsonlineschool.co.uk/school-fees",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://iwsonlineschool.co.uk/contact-us",
      },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        name: "Home",
        url: "https://iwsonlineschool.co.uk/",
      },
      {
        "@type": "SiteNavigationElement",
        name: "About Us",
        url: "https://iwsonlineschool.co.uk/about-us",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Cambridge Primary",
        url: "https://iwsonlineschool.co.uk/cambridge-primary",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Cambridge Secondary",
        url: "https://iwsonlineschool.co.uk/cambridge-secondary",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Cambridge I/GCSE",
        url: "https://iwsonlineschool.co.uk/cambridge-igcse",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Cambridge A Level",
        url: "https://iwsonlineschool.co.uk/cambridge-a-level",
      },
      {
        "@type": "SiteNavigationElement",
        name: "School Fees",
        url: "https://iwsonlineschool.co.uk/school-fees",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact",
        url: "https://iwsonlineschool.co.uk/contact-us",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Apply Now",
        url: "https://iws-register.iwsonlineschool.co.uk",
      },
    ],
  },
  accessibilitySummary:
    "This website is accessible for all users, including those with visual or motor impairments, offering keyboard navigation, screen reader support, and text resizing options.",
  offers: {
    "@type": "Offer",
    url: "https://iwsonlineschool.co.uk/school-fees",
    priceCurrency: "GBP",
    eligibleRegion: {
      "@type": "Place",
      name: "Worldwide",
    },
    availability: "https://schema.org/InStock",
    price: "5000",
    validFrom: "2024-01-01",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3471",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sam Wilson",
      },
      datePublished: "2023-09-15",
      reviewBody:
        "IWS helped boost my confidence and public speaking skills. I have always been shy and afraid to participate in class. My teachers motivated me to interact more and get over my stage fright. I can’t thank them enough!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Meghan Parker",
      },
      datePublished: "2023-10-02",
      reviewBody:
        "Jonathan always ran away from Maths.  Now he has become one of the top performers in class! The teachers at IWS ensure that Johnathan receives extra attention in Maths and Science. They are friendly and always ready to answer his questions. They deserve a 10/10 for the dedication!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
    },
  ],
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
