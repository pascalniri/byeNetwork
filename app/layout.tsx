import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans } from "./fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Advert from "@/components/layout/Advert";
import ScrollingAdvert from "@/components/layout/ScrollingAdvert";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import PageViewTracker from "@/components/analytics/PageViewTracker";

export const metadata: Metadata = {
  title: "We Are BYEN",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>
        <PageViewTracker />
        <ScrollingAdvert />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
