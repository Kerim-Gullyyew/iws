import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accredited Online Primary School for Ages 7-11 | Cambridge",
  description: "Discover IWS Online School, an accredited UK-based school offering Cambridge Primary education for ages 7-11. Comprehensive, high-quality learning online.",
  abstract: "Discover IWS Online School, an accredited UK-based school offering Cambridge Primary education for ages 7-11. Comprehensive, high-quality learning online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
    {children}
  </section>
  );
}
