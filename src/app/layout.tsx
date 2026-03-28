import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUMDUM | DJ & Electronic Music Artist — Amman, Jordan",
  description:
    "DUMDUM is an underground DJ and electronic music artist based in Amman, Jordan. Book her for club nights, private parties, festivals, and underground events.",
  keywords: [
    "DJ Amman",
    "female DJ Jordan",
    "underground music Amman",
    "DUMDUM DJ",
    "electronic music Jordan",
    "book DJ Amman",
  ],
  openGraph: {
    title: "DUMDUM | Underground DJ — Amman",
    description: "From the underground, for the underground.",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
