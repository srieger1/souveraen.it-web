import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SouveränIT – Souveräne Open-Source-Infrastrukturen",
  description: "OpenStack, Nextcloud, Automation & Schulungen – Enablement statt Abhängigkeit.",
  metadataBase: new URL("https://www.souverän.it"),
  openGraph: {
    title: "SouveränIT",
    description:
      "Aufbau & Betrieb souveräner IT-Infrastrukturen mit Open Source.",
    url: "https://www.souverän.it",
    siteName: "SouveränIT",
    images: ["/og-image.jpg"],
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.souverän.it" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
