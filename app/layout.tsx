import type { Metadata } from "next";
import { Raleway, Roboto_Slab } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pocopson Veterinary Station | Compassionate Pet Care in West Chester, PA",
  description: "Expert veterinary care for your furry family members in West Chester, PA. Serving the community since 1893 from our historic railroad station.",
  icons: {
  	icon: '/images/placeholders/logo.jpg.webp'}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${robotoSlab.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
