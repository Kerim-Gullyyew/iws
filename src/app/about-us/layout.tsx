import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School - About Us",
  description: "Discover IWS online school's unique approach and inspiring story. Join us on a journey of innovative learning and educational excellence",
  abstract: "Discover IWS online school's unique approach and inspiring story. Join us on a journey of innovative learning and educational excellence",
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
