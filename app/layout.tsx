import type React from "react";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Ephesis } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/language-provider";
import { Header } from "@/components/header";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${ephesis.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen">
              <Header />
              <main className="px-4 py-12 mb-30 md:mb-0">{children}</main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
