import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School - I/GCSE Learning",
  description: "Ages from 14 - 16 Cambridge I/GCSE The two-year IWS Online School I/GCSE programme sets your child on the path to obtaining globally recognised and accredited Cambridge certifications. The I/GCSE is an esteemed qualification widely accepted by renowned universities and employers worldwide, serving as a powerful catalyst for both academic and professional advancement, ensuring future",
  abstract: "Ages from 14 - 16 Cambridge I/GCSE The two-year IWS Online School I/GCSE programme sets your child on the path to obtaining globally recognised and accredited Cambridge certifications. The I/GCSE is an esteemed qualification widely accepted by renowned universities and employers worldwide, serving as a powerful catalyst for both academic and professional advancement, ensuring future",
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
