import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://borsttegelwerken.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Borst Tegelwerken",
  title: {
    default: "Tegelzetter Alkmaar | Borst Tegelwerken",
    template: "%s | Borst Tegelwerken",
  },
  description:
    "Jeroen Borst is tegelzetter in Alkmaar voor badkamers, keukens, vloeren en renovaties. Bekijk het tegelwerk van Borst Tegelwerken.",
  keywords: [
    "tegelzetter Alkmaar",
    "tegelwerken Alkmaar",
    "Borst Tegelwerken",
    "Jeroen Borst",
    "badkamer tegels Alkmaar",
    "keuken tegels Alkmaar",
    "vloertegels Alkmaar",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/icon-192.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
  },
  openGraph: {
    title: "Tegelzetter Alkmaar | Borst Tegelwerken",
    description:
      "Portfolio van Jeroen Borst, tegelzetter in Alkmaar voor badkamers, keukens, vloeren en renovaties.",
    url: siteUrl,
    siteName: "Borst Tegelwerken",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/borst-google-logo.jpg",
        width: 300,
        height: 195,
        alt: "Borst Tegelwerken logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#business`,
    name: "Borst Tegelwerken",
    url: siteUrl,
    logo: `${siteUrl}/borst-google-logo.jpg`,
    image: `${siteUrl}/borst-google-logo.jpg`,
    email: "info@borsttegelwerken.nl",
    description:
      "Jeroen Borst is tegelzetter in Alkmaar voor badkamers, keukens, vloeren en renovaties.",
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Jeroen Borst",
    },
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alkmaar",
      addressRegion: "Noord-Holland",
      addressCountry: "NL",
    },
    areaServed: ["Alkmaar", "Heiloo", "Bergen", "Langedijk", "Noord-Holland"],
    knowsAbout: [
      "tegelzetten",
      "badkamer betegelen",
      "keuken achterwand betegelen",
      "vloertegels leggen",
      "tegelrenovatie",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Badkamer betegelen in Alkmaar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Keuken achterwand betegelen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vloertegels leggen",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Borst Tegelwerken",
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
    inLanguage: "nl-NL",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Tegelzetter Alkmaar | Borst Tegelwerken",
    description:
      "Portfolio van Jeroen Borst, tegelzetter in Alkmaar voor badkamers, keukens, vloeren en renovaties.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    inLanguage: "nl-NL",
  };

  return (
    <html lang="nl">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([businessSchema, websiteSchema, webPageSchema]),
          }}
        />
      </body>
    </html>
  );
}
