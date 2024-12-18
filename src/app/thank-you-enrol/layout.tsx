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
      {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-16733897427/deABCLjuheEZENOFrKs-',
                'value': 1.0,
                'currency': 'USD'
              });
            `,
          }}
        /> */}
      {children}
    </section>
  );
}
