import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IWS Online School",
  description: "Ages from 11 - 14 Cambridge Secondary At IWS Online School, Secondary level Education commences at age 11, culminating with students undertaking the prestigious Cambridge I/GCSE exams. This educational journey encompasses two distinct phases: Secondary (spanning the initial three years) and I/GCSE (comprising two years). Upon successful completion, students will be well-prepared to embark on",
  abstract: "Ages from 11 - 14 Cambridge Secondary At IWS Online School, Secondary level Education commences at age 11, culminating with students undertaking the prestigious Cambridge I/GCSE exams. This educational journey encompasses two distinct phases: Secondary (spanning the initial three years) and I/GCSE (comprising two years). Upon successful completion, students will be well-prepared to embark on",
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
