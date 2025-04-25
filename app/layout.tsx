import { Lexend } from 'next/font/google';
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Metadata } from 'next';
import { geist, geistMono } from './fonts';

// Adding Lexend font
const lexend = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: "Nibsol - AI Solutions",
  description: "AI Solutions for Automation, EdTech & SaaS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${lexend.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 