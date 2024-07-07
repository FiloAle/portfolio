import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { SandpackCSS } from './projects/[slug]/sandpack';
import { Navbar } from './components/nav';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://filippoalessandrini.com'),
  title: {
    default: 'Filippo Alessandrini',
    template: '%s | Filippo Alessandrini',
  },
  description: 'Designer and front-end developer.',
  openGraph: {
    title: 'Filippo Alessandrini',
    description: 'Designer and front-end developer.',
    url: 'https://filippoalessandrini.com',
    siteName: 'Filippo Alessandrini',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Filippo Alessandrini',
    card: 'summary_large_image',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-20 flex flex-col sm:flex-row mx-4 mt-8 sm:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 lg:px-0">
          <Navbar />
          {children}
          <div className="font-sm mt-16">
            <p className="text-black dark:text-white opacity-30">
              © 2024 Filippo Alessandrini.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}