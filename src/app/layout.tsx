import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CookieConsentBanner } from "@/components/shared/CookieConsentBanner";
import { ScrollToTopButton } from "@/components/shared/ScrollToTopButton";
import { Chatbot } from "@/components/shared/Chatbot";
import "./globals.css";
import { ScrollToBottomButton } from "@/components/shared/ScrollToBottomButton";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
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
