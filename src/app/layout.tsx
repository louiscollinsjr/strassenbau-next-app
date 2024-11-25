import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Strassen und Brückensau | Modern Construction Excellence",
  description: "Leading construction company specializing in infrastructure projects across Romania. Expert road and bridge construction with German engineering excellence.",
  keywords: "construction, infrastructure, roads, bridges, Romania, German engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Strassen und Brückensau</div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="hover:text-gray-600">Home</a>
                <a href="/projects" className="hover:text-gray-600">Projects</a>
                <a href="/about" className="hover:text-gray-600">About</a>
                <a href="/contact" className="hover:text-gray-600">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600">
              &copy; {new Date().getFullYear()} Strassen und Brückensau. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
