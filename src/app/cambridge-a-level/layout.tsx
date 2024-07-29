import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School - A Level",
  description: "Cambridge Accredited Online A Level Courses for flexible distance learning. Study your chosen Online A Level subjects at your own pace with unlimited support.",
  abstract: "Cambridge Accredited Online A Level Courses for flexible distance learning. Study your chosen Online A Level subjects at your own pace with unlimited support.",
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
