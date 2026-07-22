import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { GlassNav } from "@/components/GlassNav";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteTitle = "Fernando Castro — Backend & Cloud";
const siteDescription =
  "Portfolio of Jesús Fernando Castro Hernández, software development student focused on backend, cloud architecture, and AI-powered automation. Mérida, Yucatán.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s · Fernando Castro",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "Fernando Castro — Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Fernando Castro — Software Development Student · Backend & Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#04141a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-abyss focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <GlassNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
