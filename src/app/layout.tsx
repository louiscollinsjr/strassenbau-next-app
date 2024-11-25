import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Strassen und Brückenbau | Modern Construction Excellence",
  description: "Leading construction company specializing in infrastructure projects across Romania. Expert road and bridge construction with German engineering excellence.",
  keywords: "construction, infrastructure, roads, bridges, Romania, German engineering",
  other: {
    'google': 'notranslate',
    'content-language': 'en'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-white text-sm`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
