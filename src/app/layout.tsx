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
  metadataBase: new URL('https://adbhuttravel.com'), // Replace with your actual domain
  title: {
    default: "Adbhut Travel And Event Pvt. Ltd.",
    template: "%s | Adbhut Travel",
  },
  description: "Explore breathtaking destinations with Adbhut Travel. We curate unforgettable, personalized travel packages and itineraries, from exotic beaches to mountain treks.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Adbhut Travel | Unforgettable Journeys & Custom Itineraries",
    description: "Explore the world's most breathtaking destinations with Adbhut Travel.",
    url: 'https://adbhuttravel.com', // Replace with your actual domain
    siteName: 'Adbhut Travel',
    images: [
      {
        url: 'https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg', // Default OG image
        width: 1200,
        height: 630,
        alt: 'A beautiful tropical beach with a boat, representing travel destinations.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Adbhut Travel | Unforgettable Journeys & Custom Itineraries",
    description: "Explore the world's most breathtaking destinations with Adbhut Travel.",
     images: ['https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg'], // Default Twitter image
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
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
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
