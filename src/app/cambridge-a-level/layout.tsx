import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online A Levels | IWS Cambridge A Levels Distance Learning",
  description: "Online A Levels with Cambridge accreditation for flexible distance learning. Study at your own pace with full support in your chosen subjects.",
  abstract: "Online A Levels with Cambridge accreditation for flexible distance learning. Study at your own pace with full support in your chosen subjects.",
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
