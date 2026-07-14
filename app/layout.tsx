import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/animations/ScrollProgress';
import PageTransition from '@/components/animations/PageTransition';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'A & A Company | Defense & Auto Parts Supplier',
  description:
    'Professional defense contractor and auto parts supplier with 30+ years of experience. Specializing in HINO, Defender, and Isuzu parts.',
  keywords:
    'defense contractor, auto parts, HINO, Defender, Isuzu, Pakistan Army, PIA, DHA Karachi',
  authors: [{ name: 'A & A Company' }],
  openGraph: {
    title: 'A & A Company | Defense & Auto Parts Supplier',
    description:
      'Professional defense contractor and auto parts supplier with 30+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navigation />
        <ScrollProgress />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
