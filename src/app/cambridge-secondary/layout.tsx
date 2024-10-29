import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Secondary School – Cambridge Programme for Ages 11-14",
  description: "Enroll at IWS Online Secondary School for ages 11-14. Our Cambridge program builds a strong academic foundation, leading to I/GCSE exams and future success.",
  abstract: "Enroll at IWS Online Secondary School for ages 11-14. Our Cambridge program builds a strong academic foundation, leading to I/GCSE exams and future success.",
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
