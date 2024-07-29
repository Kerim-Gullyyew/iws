import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School",
  description: "Get in touch with us! Contact our team for any inquiries, support, or feedback. We're here to help and look forward to hearing from you.",
  abstract: "Get in touch with us! Contact our team for any inquiries, support, or feedback. We're here to help and look forward to hearing from you.",
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
