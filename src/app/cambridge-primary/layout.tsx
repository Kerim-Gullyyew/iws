import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School - Primary Education",
  description: "Ages from 7 - 11 Cambridge Primary Discover IWS Online School, your gateway to a comprehensive Cambridge Primary International Curriculum tailored for primary students. Our accredited UK-based virtual school is currently undergoing the authorization process with Cambridge Assessment International Education.We deliver top-quality A Level teaching to successfully prepare students to achieve their academic goals. Enrol",
  abstract: "Ages from 7 - 11 Cambridge Primary Discover IWS Online School, your gateway to a comprehensive Cambridge Primary International Curriculum tailored for primary students. Our accredited UK-based virtual school is currently undergoing the authorization process with Cambridge Assessment International Education.We deliver top-quality A Level teaching to successfully prepare students to achieve their academic goals. Enrol",
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
