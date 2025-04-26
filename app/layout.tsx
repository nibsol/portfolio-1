import { Lexend } from 'next/font/google';
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Metadata, Viewport } from 'next';
import { geist, geistMono } from './fonts';
import { reportWebVitals, enableReactProfiler } from './lib/performance';

// Initialize React Profiler in development mode
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  enableReactProfiler();
}

// Adding Lexend font
const lexend = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nibsol - AI Solutions",
  description: "AI Solutions for Automation, EdTech & SaaS",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nibsol'
  },
};

// Report web vitals performance metrics
export function reportWebVitalsCallback(metric: any) {
  // Log metrics in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // In production, you could send to analytics
  if (process.env.NODE_ENV === 'production') {
    // Example: send to analytics service
    // sendToAnalytics(metric);
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only run on client-side to avoid SSR issues
  if (typeof window !== 'undefined') {
    // Initialize web-vitals reporting
    reportWebVitals(reportWebVitalsCallback);
  }
  
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