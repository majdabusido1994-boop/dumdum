import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dumdum-dj.netlify.app"),
  title: "DUMDUM | DJ & Electronic Music Artist — Amman, Jordan",
  description:
    "DUMDUM is an underground DJ and electronic music artist based in Amman, Jordan. Electronic oriental chill downbeat. Book her for club nights, private parties, festivals, and underground events.",
  keywords: [
    "DJ Amman",
    "female DJ Jordan",
    "underground music Amman",
    "DUMDUM DJ",
    "electronic music Jordan",
    "book DJ Amman",
    "oriental chill",
    "downbeat DJ",
    "electronic oriental",
  ],
  openGraph: {
    title: "DUMDUM | Underground DJ — Amman",
    description:
      "Electronic. Oriental. Chill. Downbeat. From the underground, for the underground.",
    type: "website",
    url: "https://dumdum-dj.netlify.app",
    siteName: "DUMDUM",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "DUMDUM DJ — Amman, Jordan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUMDUM | Underground DJ — Amman",
    description: "Electronic. Oriental. Chill. Downbeat.",
    images: ["/images/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for events
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "DUMDUM",
    description:
      "Underground DJ and electronic music artist based in Amman, Jordan. Electronic oriental chill downbeat.",
    url: "https://dumdum-dj.netlify.app",
    genre: ["Electronic", "Oriental Chill", "Downbeat"],
    location: {
      "@type": "Place",
      name: "Amman, Jordan",
    },
    sameAs: ["https://instagram.com/dimadum_"],
    event: [
      {
        "@type": "MusicEvent",
        name: "Underground Frequencies",
        startDate: "2026-04-10T22:00:00+03:00",
        location: {
          "@type": "Place",
          name: "Canvas Amman",
          address: "Jabal Amman, Amman, Jordan",
        },
        performer: { "@type": "MusicGroup", name: "DUMDUM" },
      },
      {
        "@type": "MusicEvent",
        name: "Rooftop Sessions Vol. 5",
        startDate: "2026-04-18T21:00:00+03:00",
        location: {
          "@type": "Place",
          name: "Blue Fig",
          address: "Abdoun, Amman, Jordan",
        },
        performer: { "@type": "MusicGroup", name: "DUMDUM" },
      },
      {
        "@type": "MusicEvent",
        name: "After Dark",
        startDate: "2026-05-02T23:00:00+03:00",
        location: {
          "@type": "Place",
          name: "Maestro",
          address: "Rainbow Street, Amman, Jordan",
        },
        performer: { "@type": "MusicGroup", name: "DUMDUM" },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased cursor-none md:cursor-none noise">
        {children}
      </body>
    </html>
  );
}
