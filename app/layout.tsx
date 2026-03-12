import type { Metadata } from 'next';
import { Sora, DM_Sans } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mobile Works Korea — Enterprise AI Service Builder',
    template: '%s | Mobile Works Korea',
  },
  description:
    'We build AI services and evolve how enterprise services are built with AI. AX Strategy, AI Product Development, AI Operations, and Enterprise Digital Delivery.',
  keywords: ['AX', 'AI transformation', 'enterprise AI', 'AI consulting', 'Korea', 'AI product development'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Mobile Works Korea',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isAdmin = pathname.startsWith('/admin');

  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        {!isAdmin && <Header />}
        <main className="flex-1">{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
