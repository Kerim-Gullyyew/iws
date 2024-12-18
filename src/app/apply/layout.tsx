import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School",
  description:
    "Find detailed information about our school fees, including tuition, payment schedules, and financial aid options. Learn how to manage your payments effectively.",
  abstract:
    "Find detailed information about our school fees, including tuition, payment schedules, and financial aid options. Learn how to manage your payments effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container max-w-[685px] w-full pt-6 pb-14">
      {children}
    </section>
  );
}
