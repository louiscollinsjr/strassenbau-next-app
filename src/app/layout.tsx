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
  title: "Strassen und Bruekenbau",
  description: "Building the infrastructure of tomorrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${roboto.className} text-white min-h-screen relative`} 
        style={{ 
          backgroundColor: 'rgb(29, 30, 32)',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(45, 46, 48, 0.2s) 0%, rgba(29, 30, 32, 0.2) 50%, rgba(29, 30, 32, 0) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")
          `,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
