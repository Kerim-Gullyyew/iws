import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School",
  description: "Thank you for your submission! We appreciate your time and effort. Check your email for a confirmation and further details.",
  abstract: "Thank you for your submission! We appreciate your time and effort. Check your email for a confirmation and further details.",
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
