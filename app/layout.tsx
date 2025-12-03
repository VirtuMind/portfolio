import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Ephesis } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/header";
import { getLanguage } from "@/lib/cookies";
import { LightRaysBackground } from "@/components/light-rays-background";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ephesis = Ephesis({
  subsets: ["latin"],
  variable: "--font-ephesis",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khoubaz.com"),
  title: {
    default: "Younes Khoubaz",
    template: "%s | Younes Khoubaz",
  },
  description: "Portfolio of Younes Khoubaz, a software developer.",
  authors: [{ name: "Younes Khoubaz", url: "https://khoubaz.com" }],
  creator: "Younes Khoubaz",
  publisher: "Younes Khoubaz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khoubaz.com",
    siteName: "Younes Khoubaz",
    title: "Younes Khoubaz - Portfolio",
    description: "Portfolio of Younes Khoubaz, a software developer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Younes Khoubaz - Portfolio Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VirtuoMind",
    creator: "@VirtuoMind",
    title: "Younes Khoubaz - Software Developer Portfolio",
    description: "Portfolio of Younes Khoubaz, a software developer.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-black.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/favicon-white.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getLanguage();

  return (
    <html
      lang={language}
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${ephesis.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="min-h-screen">
            <LightRaysBackground />

            <Header language={language} />
            <main className="px-4 py-12 mb-30 md:mb-0  overflow-x-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
