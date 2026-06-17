import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeroen Borst Tegelzetter",
  description: "Portfolio website voor Jeroen Borst, tegelzetter in Alkmaar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
