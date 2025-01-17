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
        'text-black bg-neutral-50 dark:text-white dark:bg-neutral-950 px-6 flex flex-col items-center',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <SandpackCSS />
      </head>
      <body className="antialiased items-center flex flex-col">
        <Navbar />
        <main className="flex-auto w-lvw min-w-0 flex flex-col px-6 max-w-xl sm:px-0 max-sm:pt-36 pt-48 pb-24">
          {children}

          {/* TODO: Add footer (only on mobile) with links to IG, email, buymeacoffee */}

          <div className="font-sm mt-16">
            <p className="text-black dark:text-white opacity-30">
              © {new Date().getFullYear()} Filippo Alessandrini.
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}