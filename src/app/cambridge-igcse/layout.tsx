import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online IGCSE Courses – Accredited Cambridge IGCSE Programme",
  description: "Online IGCSE courses for ages 14-16 with Cambridge accreditation. IWS Online School’s two-year programme builds a foundation for academic and career success.",
  abstract: "Online IGCSE courses for ages 14-16 with Cambridge accreditation. IWS Online School’s two-year programme builds a foundation for academic and career success.",
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
