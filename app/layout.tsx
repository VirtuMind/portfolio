import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Ephesis } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/header";
import { getLanguage } from "@/lib/cookies";
import { LightRaysBackground } from "@/components/light-rays-background";
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
  title: "Younes Khoubaz - Portfolio",
  description: "Software Developer Portfolio",
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
      </body>
    </html>
  );
}
