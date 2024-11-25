import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

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
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
          <Navigation />
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="mx-auto px-4 py-8" style={{ maxWidth: '980px' }}>
            <div className="text-left text-gray-600">
              &copy; {new Date().getFullYear()} Strassen und Brückenbau. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
