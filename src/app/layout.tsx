import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CookieConsentBanner } from "@/components/shared/CookieConsentBanner";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import { Chatbot } from "@/components/shared/Chatbot";
import "./globals.css";
import { ScrollToBottomButton } from "@/components/shared/ScrollToBottomButton";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { PT_Sans, Playfair_Display } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Adbhut Travel And Event Pvt. Ltd.",
  description: "Curated travel packages and personalized itinerary planning by Adbhut Travel.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSans.variable} ${playfairDisplay.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsentBanner />
        <Toaster />
        <ScrollToTopButton />
        <ScrollToBottomButton />
        <Chatbot />
      </body>
    </html>
  );
}
